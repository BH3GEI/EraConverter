'use client';

import { useState, useEffect } from 'react';
import { 
  chineseCalendar, 
  japaneseCalendar, 
  westernCalendar, 
  convertToChineseYear, 
  convertToJapaneseYear,
  getWesternYear,
  findEraByWesternYear,
  CalendarSystem,
  EraInfo
} from '../data/calendarData';

type ConversionTab = 'western-to-asian' | 'asian-to-western';

// Create a composite key for uniquely identifying eras
const createEraKey = (era: EraInfo): string => {
  return `${era.name}__${era.dynasty || 'unknown'}__${era.startYear}`;
};

// Parse an era key back into its components
const parseEraKey = (key: string): { name: string; dynasty: string; startYear: number } => {
  const [name, dynasty, startYearStr] = key.split('__');
  return {
    name,
    dynasty,
    startYear: parseInt(startYearStr)
  };
};

// Format Western year to display BCE/CE
const formatWesternYear = (year: number): string => {
  if (year < 0) {
    return `公元前 ${Math.abs(year)} 年`;
  }
  return `公元 ${year} 年`;
};

export default function YearConverter() {
  const [activeTab, setActiveTab] = useState<ConversionTab>('western-to-asian');
  const [westernYear, setWesternYear] = useState<number>(2024);
  const [selectedChineseEraKey, setSelectedChineseEraKey] = useState<string>('');
  const [selectedJapaneseEraKey, setSelectedJapaneseEraKey] = useState<string>('令和__近代__2019');
  const [yearWithinEra, setYearWithinEra] = useState<number>(1);
  const [conversionResult, setConversionResult] = useState<{ chinese: string; japanese: string }>({
    chinese: '',
    japanese: ''
  });
  const [westernResult, setWesternResult] = useState<number | null>(null);
  
  // Effect to update conversion results when western year changes
  useEffect(() => {
    if (activeTab === 'western-to-asian') {
      const chineseYear = convertToChineseYear(westernYear);
      const japaneseYear = convertToJapaneseYear(westernYear);
      
      setConversionResult({
        chinese: chineseYear,
        japanese: japaneseYear
      });
    }
  }, [westernYear, activeTab]);
  
  // Effect to update western year when Chinese era selection changes
  useEffect(() => {
    if (activeTab === 'asian-to-western' && selectedChineseEraKey) {
      const { name, dynasty, startYear } = parseEraKey(selectedChineseEraKey);
      
      // Find the exact era by matching name, dynasty, and start year
      const selectedEra = chineseCalendar.eras.find(
        era => era.name === name && 
              (era.dynasty || 'unknown') === dynasty && 
              era.startYear === startYear
      );
      
      if (selectedEra) {
        const result = selectedEra.startYear + yearWithinEra - 1;
        setWesternResult(result);
      } else {
        setWesternResult(null);
      }
    }
  }, [selectedChineseEraKey, yearWithinEra, activeTab]);
  
  // Effect to update western year when Japanese era selection changes
  useEffect(() => {
    if (activeTab === 'asian-to-western' && selectedJapaneseEraKey) {
      const { name, dynasty, startYear } = parseEraKey(selectedJapaneseEraKey);
      
      // Find the exact era by matching name, dynasty, and start year
      const selectedEra = japaneseCalendar.eras.find(
        era => era.name === name && 
              (era.dynasty || 'unknown') === dynasty && 
              era.startYear === startYear
      );
      
      if (selectedEra) {
        const result = selectedEra.startYear + yearWithinEra - 1;
        setWesternResult(result);
      } else {
        setWesternResult(null);
      }
    }
  }, [selectedJapaneseEraKey, yearWithinEra, activeTab]);
  
  // Handle western year input change
  const handleWesternYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setWesternYear(value);
    }
  };
  
  // Handle year within era input change
  const handleYearWithinEraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setYearWithinEra(value);
    }
  };

  // Group eras by dynasty for better organization in dropdowns
  const groupErasByDynasty = (calendar: CalendarSystem) => {
    const groups: { [key: string]: EraInfo[] } = {};
    
    calendar.eras.forEach(era => {
      const dynasty = era.dynasty || 'Other';
      if (!groups[dynasty]) {
        groups[dynasty] = [];
      }
      groups[dynasty].push(era);
    });
    
    // Sort eras within each dynasty by start year (ascending - oldest first)
    Object.keys(groups).forEach(dynasty => {
      groups[dynasty].sort((a, b) => a.startYear - b.startYear);
    });
    
    return groups;
  };

  const chineseErasByDynasty = groupErasByDynasty(chineseCalendar);
  const japaneseErasByDynasty = groupErasByDynasty(japaneseCalendar);
  
  // Sort dynasties chronologically (from oldest to newest)
  const sortedChineseDynasties = Object.keys(chineseErasByDynasty).sort((a, b) => {
    const aFirstEra = chineseErasByDynasty[a][0];
    const bFirstEra = chineseErasByDynasty[b][0];
    return aFirstEra.startYear - bFirstEra.startYear;
  });
  
  const sortedJapaneseDynasties = Object.keys(japaneseErasByDynasty).sort((a, b) => {
    const aFirstEra = japaneseErasByDynasty[a][0];
    const bFirstEra = japaneseErasByDynasty[b][0];
    return aFirstEra.startYear - bFirstEra.startYear;
  });

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-slate-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-yellow-400">历史年份转换器</h1>
      <p className="text-center mb-6 text-gray-300">在中国历、日本历和西历之间转换年份</p>
      
      {/* Tab Navigation */}
      <div className="flex mb-6 border-b border-gray-600">
        <button
          onClick={() => setActiveTab('western-to-asian')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'western-to-asian'
              ? 'text-yellow-400 border-b-2 border-yellow-400'
              : 'text-gray-300 hover:text-yellow-300'
          }`}
        >
          西历 → 中/日历
        </button>
        <button
          onClick={() => setActiveTab('asian-to-western')}
          className={`px-4 py-2 font-medium ${
            activeTab === 'asian-to-western'
              ? 'text-yellow-400 border-b-2 border-yellow-400'
              : 'text-gray-300 hover:text-yellow-300'
          }`}
        >
          中/日历 → 西历
        </button>
      </div>
      
      {/* Western to Asian Conversion */}
      {activeTab === 'western-to-asian' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="westernYear" className="block text-sm font-medium text-gray-200">
                西历年份
              </label>
              <input
                type="number"
                id="westernYear"
                value={westernYear}
                onChange={handleWesternYearChange}
                min="-3000"
                max="2100"
                className="mt-1 block w-full px-3 py-2 bg-slate-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
              />
              <p className="mt-1 text-sm text-gray-400">
                输入年份范围: 公元前3000年至公元2100年 (负数表示公元前)
              </p>
            </div>
          </div>
          
          {/* Results */}
          <div className="bg-slate-700 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-200 mb-3">转换结果</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-300">中国历</h4>
                <p className="text-xl font-semibold text-yellow-400 mt-1">
                  {conversionResult.chinese}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300">日本历</h4>
                <p className="text-xl font-semibold text-yellow-400 mt-1">
                  {conversionResult.japanese}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Asian to Western Conversion */}
      {activeTab === 'asian-to-western' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chinese Era Selection */}
            <div>
              <label htmlFor="chineseEra" className="block text-sm font-medium text-gray-200">
                中国年号
              </label>
              <select
                id="chineseEra"
                value={selectedChineseEraKey}
                onChange={(e) => {
                  setSelectedChineseEraKey(e.target.value);
                  setSelectedJapaneseEraKey(''); // Clear Japanese selection
                }}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-slate-700 text-white border-gray-600 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 rounded-md"
              >
                <option value="">选择年号</option>
                {sortedChineseDynasties.map((dynasty) => (
                  <optgroup key={dynasty} label={dynasty}>
                    {chineseErasByDynasty[dynasty].map((era) => {
                      const eraKey = createEraKey(era);
                      const yearDisplay = era.startYear < 0 
                        ? `(前${Math.abs(era.startYear)}-${era.endYear < 0 ? '前' + Math.abs(era.endYear) : era.endYear})`
                        : `(${era.startYear}-${era.endYear})`;
                      return (
                        <option key={eraKey} value={eraKey}>
                          {era.name} [{dynasty}] {era.emperor ? `(${era.emperor}) ` : ''}{yearDisplay}
                        </option>
                      );
                    })}
                  </optgroup>
                ))}
              </select>
            </div>
            
            {/* Japanese Era Selection */}
            <div>
              <label htmlFor="japaneseEra" className="block text-sm font-medium text-gray-200">
                日本年号
              </label>
              <select
                id="japaneseEra"
                value={selectedJapaneseEraKey}
                onChange={(e) => {
                  setSelectedJapaneseEraKey(e.target.value);
                  setSelectedChineseEraKey(''); // Clear Chinese selection
                }}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-slate-700 text-white border-gray-600 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 rounded-md"
              >
                <option value="">选择年号</option>
                {sortedJapaneseDynasties.map((dynasty) => (
                  <optgroup key={dynasty} label={dynasty}>
                    {japaneseErasByDynasty[dynasty].map((era) => {
                      const eraKey = createEraKey(era);
                      const yearDisplay = era.startYear < 0 
                        ? `(前${Math.abs(era.startYear)}-${era.endYear < 0 ? '前' + Math.abs(era.endYear) : era.endYear})`
                        : `(${era.startYear}-${era.endYear})`;
                      return (
                        <option key={eraKey} value={eraKey}>
                          {era.name} [{dynasty}] {era.emperor ? `(${era.emperor}) ` : ''}{yearDisplay}
                        </option>
                      );
                    })}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>
          
          {/* Year within Era */}
          <div>
            <label htmlFor="yearWithinEra" className="block text-sm font-medium text-gray-200">
              年号内年份
            </label>
            <input
              type="number"
              id="yearWithinEra"
              value={yearWithinEra}
              onChange={handleYearWithinEraChange}
              min="1"
              className="mt-1 block w-full px-3 py-2 bg-slate-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            />
            <p className="mt-1 text-sm text-gray-400">
              例如：明治1年、康熙8年
            </p>
          </div>
          
          {/* Results */}
          <div className="bg-slate-700 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-200 mb-3">转换结果</h3>
            <div>
              <h4 className="text-sm font-medium text-gray-300">西历年份</h4>
              <p className="text-xl font-semibold text-yellow-400 mt-1">
                {westernResult !== null 
                  ? formatWesternYear(westernResult) 
                  : '请选择年号'}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          此转换器包含中国从先秦(夏商周)、秦汉至民国的年号及日本从飞鸟时代至现代的年号，并支持显示并存政权。
        </p>
        <p className="mt-2">
          <a 
            href="https://github.com/BH3GEI/EraConverter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 underline"
          >
            GitHub 仓库
          </a>
        </p>
      </div>
    </div>
  );
} 