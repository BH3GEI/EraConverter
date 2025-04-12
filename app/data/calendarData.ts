export interface EraInfo {
  name: string;
  startYear: number; // Western year
  endYear: number; // Western year
  alternateNames?: string[]; // Optional alternative names
  dynasty?: string; // Dynasty or regime name
  emperor?: string; // Emperor name
  isAlternateRegime?: boolean; // Flag for parallel/competing regimes
  pronunciation?: string; // Pronunciation in romanized form
}

export interface CalendarSystem {
  name: string;
  eras: EraInfo[];
}

export const chineseCalendar: CalendarSystem = {
  name: "中国历",
  eras: [
    // Pre-Xia periods (based on archaeological evidence)
    { name: "中国旧石器时代早期", startYear: -1700000, endYear: -100000, dynasty: "史前时期" },
    { name: "中国旧石器时代晚期", startYear: -100000, endYear: -10000, dynasty: "史前时期" },
    { name: "中国新石器时代", startYear: -10000, endYear: -4000, dynasty: "史前时期" },
    
    // Early Neolithic cultures
    { name: "裴李岗文化", startYear: -7000, endYear: -5000, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "磁山文化", startYear: -7500, endYear: -5500, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "大地湾文化", startYear: -6000, endYear: -5000, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "仰韶文化", startYear: -5000, endYear: -3000, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "马家窑文化", startYear: -3300, endYear: -2000, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "红山文化", startYear: -4700, endYear: -2900, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "大汶口文化", startYear: -4300, endYear: -2500, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "河姆渡文化", startYear: -5000, endYear: -4000, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "良渚文化", startYear: -3300, endYear: -2200, dynasty: "新石器时代", isAlternateRegime: true },
    { name: "龙山文化", startYear: -3000, endYear: -1900, dynasty: "新石器时代", isAlternateRegime: true },
    
    // Legendary/Semi-mythical periods
    { name: "三皇时代", startYear: -3000, endYear: -2700, dynasty: "三皇五帝" },
    { name: "伏羲", startYear: -2952, endYear: -2836, dynasty: "三皇五帝", emperor: "伏羲" },
    { name: "神农", startYear: -2737, endYear: -2697, dynasty: "三皇五帝", emperor: "神农" },
    { name: "五帝时代", startYear: -2700, endYear: -2070, dynasty: "三皇五帝" },
    { name: "黄帝", startYear: -2697, endYear: -2598, dynasty: "三皇五帝", emperor: "黄帝" },
    { name: "少昊", startYear: -2597, endYear: -2514, dynasty: "三皇五帝", emperor: "少昊" },
    { name: "颛顼", startYear: -2513, endYear: -2436, dynasty: "三皇五帝", emperor: "颛顼" },
    { name: "帝喾", startYear: -2435, endYear: -2366, dynasty: "三皇五帝", emperor: "帝喾" },
    { name: "尧", startYear: -2357, endYear: -2258, dynasty: "三皇五帝", emperor: "尧" },
    { name: "舜", startYear: -2257, endYear: -2208, dynasty: "三皇五帝", emperor: "舜" },
    { name: "禹", startYear: -2207, endYear: -2198, dynasty: "三皇五帝", emperor: "禹" },
    
    // Erlitou culture (archaeological Xia)
    { name: "二里头文化", startYear: -1900, endYear: -1500, dynasty: "考古学夏代", isAlternateRegime: true },
    
    // Xia Dynasty (updated with more scientifically accepted dates)
    { name: "禹", startYear: -2100, endYear: -2025, dynasty: "夏", emperor: "禹" },
    { name: "启", startYear: -2025, endYear: -1990, dynasty: "夏", emperor: "启" },
    { name: "太康", startYear: -1990, endYear: -1980, dynasty: "夏", emperor: "太康" },
    { name: "仲康", startYear: -1980, endYear: -1961, dynasty: "夏", emperor: "仲康" },
    { name: "相", startYear: -1961, endYear: -1943, dynasty: "夏", emperor: "相" },
    { name: "少康", startYear: -1943, endYear: -1925, dynasty: "夏", emperor: "少康" },
    { name: "杼", startYear: -1925, endYear: -1876, dynasty: "夏", emperor: "杼" },
    { name: "槐", startYear: -1876, endYear: -1848, dynasty: "夏", emperor: "槐" },
    { name: "芒", startYear: -1848, endYear: -1789, dynasty: "夏", emperor: "芒" },
    { name: "泄", startYear: -1789, endYear: -1731, dynasty: "夏", emperor: "泄" },
    { name: "不降", startYear: -1731, endYear: -1700, dynasty: "夏", emperor: "不降" },
    { name: "扃", startYear: -1700, endYear: -1662, dynasty: "夏", emperor: "扃" },
    { name: "廑", startYear: -1662, endYear: -1626, dynasty: "夏", emperor: "廑" },
    { name: "孔甲", startYear: -1626, endYear: -1585, dynasty: "夏", emperor: "孔甲" },
    { name: "皋", startYear: -1585, endYear: -1558, dynasty: "夏", emperor: "皋" },
    { name: "发", startYear: -1558, endYear: -1547, dynasty: "夏", emperor: "发" },
    { name: "桀", startYear: -1547, endYear: -1525, dynasty: "夏", emperor: "桀" },
    
    // Erligang culture (archaeological Shang)
    { name: "二里岗文化", startYear: -1600, endYear: -1400, dynasty: "考古学商代", isAlternateRegime: true },
    
    // Shang Dynasty (updated with more scientifically accepted dates)
    { name: "成汤", startYear: -1525, endYear: -1506, dynasty: "商", emperor: "成汤" },
    { name: "外丙", startYear: -1506, endYear: -1504, dynasty: "商", emperor: "外丙" },
    { name: "仲壬", startYear: -1504, endYear: -1501, dynasty: "商", emperor: "仲壬" },
    { name: "太甲", startYear: -1501, endYear: -1482, dynasty: "商", emperor: "太甲" },
    { name: "沃丁", startYear: -1482, endYear: -1475, dynasty: "商", emperor: "沃丁" },
    { name: "太庚", startYear: -1475, endYear: -1458, dynasty: "商", emperor: "太庚" },
    { name: "小甲", startYear: -1458, endYear: -1447, dynasty: "商", emperor: "小甲" },
    { name: "雍己", startYear: -1447, endYear: -1435, dynasty: "商", emperor: "雍己" },
    { name: "太戊", startYear: -1435, endYear: -1382, dynasty: "商", emperor: "太戊" },
    { name: "仲丁", startYear: -1382, endYear: -1365, dynasty: "商", emperor: "仲丁" },
    { name: "外壬", startYear: -1365, endYear: -1352, dynasty: "商", emperor: "外壬" },
    { name: "河亶甲", startYear: -1352, endYear: -1340, dynasty: "商", emperor: "河亶甲" },
    { name: "祖乙", startYear: -1340, endYear: -1323, dynasty: "商", emperor: "祖乙" },
    { name: "祖辛", startYear: -1323, endYear: -1306, dynasty: "商", emperor: "祖辛" },
    { name: "沃甲", startYear: -1306, endYear: -1291, dynasty: "商", emperor: "沃甲" },
    { name: "祖丁", startYear: -1291, endYear: -1275, dynasty: "商", emperor: "祖丁" },
    { name: "南庚", startYear: -1275, endYear: -1265, dynasty: "商", emperor: "南庚" },
    { name: "阳甲", startYear: -1265, endYear: -1240, dynasty: "商", emperor: "阳甲" },
    { name: "盘庚", startYear: -1240, endYear: -1225, dynasty: "商", emperor: "盘庚" },
    { name: "小辛", startYear: -1225, endYear: -1219, dynasty: "商", emperor: "小辛" },
    { name: "小乙", startYear: -1219, endYear: -1198, dynasty: "商", emperor: "小乙" },
    { name: "武丁", startYear: -1198, endYear: -1149, dynasty: "商", emperor: "武丁" },
    { name: "祖庚", startYear: -1149, endYear: -1135, dynasty: "商", emperor: "祖庚" },
    { name: "祖甲", startYear: -1135, endYear: -1117, dynasty: "商", emperor: "祖甲" },
    { name: "廪辛", startYear: -1117, endYear: -1112, dynasty: "商", emperor: "廪辛" },
    { name: "庚丁", startYear: -1112, endYear: -1102, dynasty: "商", emperor: "庚丁" },
    { name: "武乙", startYear: -1102, endYear: -1087, dynasty: "商", emperor: "武乙" },
    { name: "文丁", startYear: -1087, endYear: -1074, dynasty: "商", emperor: "文丁" },
    { name: "帝乙", startYear: -1074, endYear: -1046, dynasty: "商", emperor: "帝乙" },
    { name: "帝辛", startYear: -1046, endYear: -1027, dynasty: "商", emperor: "帝辛(纣王)" },

    // Western Zhou Dynasty (updated)
    { name: "周武王", startYear: -1027, endYear: -1025, dynasty: "周", emperor: "周武王姬发" },
    { name: "周成王", startYear: -1024, endYear: -1005, dynasty: "周", emperor: "周成王姬诵" },
    { name: "周康王", startYear: -1004, endYear: -980, dynasty: "周", emperor: "周康王姬钊" },
    { name: "周昭王", startYear: -979, endYear: -962, dynasty: "周", emperor: "周昭王姬瑕" },
    { name: "周穆王", startYear: -961, endYear: -922, dynasty: "周", emperor: "周穆王姬满" },
    { name: "周共王", startYear: -922, endYear: -900, dynasty: "周", emperor: "周共王姬繄扈" },
    { name: "周懿王", startYear: -899, endYear: -892, dynasty: "周", emperor: "周懿王姬囏" },
    { name: "周孝王", startYear: -891, endYear: -886, dynasty: "周", emperor: "周孝王姬辟方" },
    { name: "周夷王", startYear: -885, endYear: -878, dynasty: "周", emperor: "周夷王姬燮" },
    { name: "周厉王", startYear: -877, endYear: -841, dynasty: "周", emperor: "周厉王姬胡" },
    { name: "共和行政", startYear: -841, endYear: -828, dynasty: "周", emperor: "共和行政" },
    { name: "周宣王", startYear: -827, endYear: -782, dynasty: "周", emperor: "周宣王姬静" },
    { name: "周幽王", startYear: -781, endYear: -771, dynasty: "周", emperor: "周幽王姬宫湦" },

    // Eastern Zhou - Spring and Autumn Period
    { name: "周平王", startYear: -770, endYear: -720, dynasty: "东周", emperor: "周平王姬宜臼" },
    { name: "周桓王", startYear: -719, endYear: -697, dynasty: "东周", emperor: "周桓王姬林" },
    { name: "周庄王", startYear: -696, endYear: -682, dynasty: "东周", emperor: "周庄王姬佗" },
    { name: "周釐王", startYear: -681, endYear: -677, dynasty: "东周", emperor: "周釐王姬胡齐" },
    { name: "周惠王", startYear: -676, endYear: -652, dynasty: "东周", emperor: "周惠王姬阆" },
    { name: "周襄王", startYear: -651, endYear: -619, dynasty: "东周", emperor: "周襄王姬郑" },
    { name: "周顷王", startYear: -618, endYear: -613, dynasty: "东周", emperor: "周顷王姬壬臣" },
    { name: "周匡王", startYear: -612, endYear: -607, dynasty: "东周", emperor: "周匡王姬班" },
    { name: "周定王", startYear: -606, endYear: -586, dynasty: "东周", emperor: "周定王姬瑜" },
    { name: "周简王", startYear: -585, endYear: -572, dynasty: "东周", emperor: "周简王姬夷" },
    { name: "周灵王", startYear: -571, endYear: -545, dynasty: "东周", emperor: "周灵王姬泄心" },
    { name: "周景王", startYear: -544, endYear: -521, dynasty: "东周", emperor: "周景王姬贵" },
    { name: "周悼王", startYear: -520, endYear: -520, dynasty: "东周", emperor: "周悼王姬猛" },
    { name: "周敬王", startYear: -519, endYear: -476, dynasty: "东周", emperor: "周敬王姬匄" },

    // Eastern Zhou - Warring States Period
    { name: "周元王", startYear: -475, endYear: -469, dynasty: "东周", emperor: "周元王姬仁" },
    { name: "周贞定王", startYear: -468, endYear: -441, dynasty: "东周", emperor: "周贞定王姬介" },
    { name: "周考王", startYear: -440, endYear: -426, dynasty: "东周", emperor: "周考王姬嵬" },
    { name: "周威烈王", startYear: -425, endYear: -402, dynasty: "东周", emperor: "周威烈王姬午" },
    { name: "周安王", startYear: -401, endYear: -376, dynasty: "东周", emperor: "周安王姬骄" },
    { name: "周烈王", startYear: -375, endYear: -369, dynasty: "东周", emperor: "周烈王姬喜" },
    { name: "周显王", startYear: -368, endYear: -321, dynasty: "东周", emperor: "周显王姬扁" },
    { name: "周慎靓王", startYear: -320, endYear: -315, dynasty: "东周", emperor: "周慎靓王姬定" },
    { name: "周赧王", startYear: -314, endYear: -256, dynasty: "东周", emperor: "周赧王姬延" },
    
    // Qin Dynasty
    { name: "秦王政", startYear: -247, endYear: -221, dynasty: "秦", emperor: "秦王政" },
    { name: "秦始皇", startYear: -221, endYear: -210, dynasty: "秦", emperor: "秦始皇嬴政" },
    { name: "二世", startYear: -210, endYear: -207, dynasty: "秦", emperor: "秦二世胡亥" },
    { name: "子婴", startYear: -207, endYear: -206, dynasty: "秦", emperor: "秦三世子婴" },

    // Western Han Dynasty
    { name: "楚汉相争", startYear: -206, endYear: -202, dynasty: "西汉", emperor: "项羽/刘邦" },
    { name: "西汉初期", startYear: -202, endYear: -195, dynasty: "西汉", emperor: "汉高祖刘邦" },
    { name: "吕后临朝", startYear: -195, endYear: -180, dynasty: "西汉", emperor: "吕后" },
    { name: "文景之治", startYear: -179, endYear: -141, dynasty: "西汉", emperor: "汉文帝/汉景帝" },
    { name: "汉武帝", startYear: -140, endYear: -87, dynasty: "西汉", emperor: "汉武帝刘彻" },
    { name: "昭宣之治", startYear: -86, endYear: -49, dynasty: "西汉", emperor: "汉昭帝/汉宣帝" },
    { name: "元凤", startYear: -80, endYear: -75, dynasty: "西汉", emperor: "汉昭帝刘弗陵" },
    { name: "太初", startYear: -104, endYear: -101, dynasty: "西汉", emperor: "汉武帝刘彻" },
    { name: "天汉", startYear: -100, endYear: -97, dynasty: "西汉", emperor: "汉武帝刘彻" },
    { name: "太始", startYear: -96, endYear: -93, dynasty: "西汉", emperor: "汉武帝刘彻" },
    { name: "征和", startYear: -92, endYear: -89, dynasty: "西汉", emperor: "汉武帝刘彻" },
    { name: "后元", startYear: -88, endYear: -87, dynasty: "西汉", emperor: "汉武帝刘彻" },
    { name: "始元", startYear: -86, endYear: -84, dynasty: "西汉", emperor: "汉昭帝刘弗陵" },
    { name: "元平", startYear: -74, endYear: -71, dynasty: "西汉", emperor: "汉昭帝刘弗陵" },
    { name: "元封", startYear: -110, endYear: -105, dynasty: "西汉", emperor: "汉武帝刘彻" },
    { name: "本始", startYear: -73, endYear: -70, dynasty: "西汉", emperor: "汉宣帝刘询" },
    { name: "地节", startYear: -69, endYear: -66, dynasty: "西汉", emperor: "汉宣帝刘询" },
    { name: "元康", startYear: -65, endYear: -62, dynasty: "西汉", emperor: "汉宣帝刘询" },
    { name: "神爵", startYear: -61, endYear: -58, dynasty: "西汉", emperor: "汉宣帝刘询" },
    { name: "五凤", startYear: -57, endYear: -54, dynasty: "西汉", emperor: "汉宣帝刘询" },
    { name: "甘露", startYear: -53, endYear: -50, dynasty: "西汉", emperor: "汉宣帝刘询" },
    { name: "黄龙", startYear: -49, endYear: -49, dynasty: "西汉", emperor: "汉宣帝刘询" },
    { name: "初元", startYear: -48, endYear: -44, dynasty: "西汉", emperor: "汉元帝刘奭" },
    { name: "永光", startYear: -43, endYear: -39, dynasty: "西汉", emperor: "汉元帝刘奭" },
    { name: "建昭", startYear: -38, endYear: -34, dynasty: "西汉", emperor: "汉元帝刘奭" },
    { name: "竟宁", startYear: -33, endYear: -30, dynasty: "西汉", emperor: "汉元帝刘奭" },
    { name: "建始", startYear: -32, endYear: -28, dynasty: "西汉", emperor: "汉成帝刘骜" },
    { name: "河平", startYear: -28, endYear: -25, dynasty: "西汉", emperor: "汉成帝刘骜" },
    { name: "阳朔", startYear: -24, endYear: -21, dynasty: "西汉", emperor: "汉成帝刘骜" },
    { name: "鸿嘉", startYear: -20, endYear: -17, dynasty: "西汉", emperor: "汉成帝刘骜" },
    { name: "永始", startYear: -16, endYear: -13, dynasty: "西汉", emperor: "汉成帝刘骜" },
    { name: "元延", startYear: -12, endYear: -9, dynasty: "西汉", emperor: "汉成帝刘骜" },
    { name: "绥和", startYear: -8, endYear: -7, dynasty: "西汉", emperor: "汉成帝刘骜" },
    { name: "建平", startYear: -6, endYear: -3, dynasty: "西汉", emperor: "汉哀帝刘欣" },
    { name: "元始", startYear: -2, endYear: 1, dynasty: "西汉", emperor: "汉平帝刘衎" },
    
    // Xin Dynasty (Wang Mang Interregnum)
    { name: "居摄", startYear: 6, endYear: 8, dynasty: "新" },
    { name: "初始", startYear: 9, endYear: 12, dynasty: "新" },
    { name: "天凤", startYear: 14, endYear: 19, dynasty: "新" },
    { name: "地皇", startYear: 20, endYear: 23, dynasty: "新" },
    
    // Eastern Han Dynasty
    { name: "建武", startYear: 25, endYear: 56, dynasty: "东汉", emperor: "汉光武帝刘秀" },
    { name: "建武中元", startYear: 56, endYear: 58, dynasty: "东汉", emperor: "汉光武帝刘秀" },
    { name: "永平", startYear: 58, endYear: 75, dynasty: "东汉", emperor: "汉明帝刘庄" },
    { name: "建初", startYear: 76, endYear: 84, dynasty: "东汉", emperor: "汉章帝刘炟" },
    { name: "元和", startYear: 84, endYear: 87, dynasty: "东汉", emperor: "汉章帝刘炟" },
    { name: "章和", startYear: 87, endYear: 89, dynasty: "东汉", emperor: "汉章帝刘炟" },
    { name: "永元", startYear: 89, endYear: 105, dynasty: "东汉", emperor: "汉和帝刘肇" },
    { name: "元兴", startYear: 105, endYear: 106, dynasty: "东汉", emperor: "汉和帝刘肇" },
    { name: "延平", startYear: 106, endYear: 106, dynasty: "东汉", emperor: "汉殇帝刘隆" },
    { name: "永初", startYear: 107, endYear: 113, dynasty: "东汉", emperor: "汉安帝刘祜" },
    { name: "元初", startYear: 114, endYear: 120, dynasty: "东汉", emperor: "汉安帝刘祜" },
    { name: "永宁", startYear: 120, endYear: 121, dynasty: "东汉", emperor: "汉安帝刘祜" },
    { name: "建光", startYear: 121, endYear: 122, dynasty: "东汉", emperor: "汉安帝刘祜" },
    { name: "延光", startYear: 122, endYear: 125, dynasty: "东汉", emperor: "汉安帝刘祜" },
    { name: "阳嘉", startYear: 132, endYear: 135, dynasty: "东汉", emperor: "汉顺帝刘保" },
    { name: "永和", startYear: 136, endYear: 141, dynasty: "东汉", emperor: "汉顺帝刘保" },
    { name: "汉安", startYear: 142, endYear: 144, dynasty: "东汉", emperor: "汉顺帝刘保" },
    { name: "建康", startYear: 144, endYear: 145, dynasty: "东汉", emperor: "汉顺帝刘保" },
    { name: "建和", startYear: 147, endYear: 149, dynasty: "东汉", emperor: "汉顺帝刘保" },
    { name: "和平", startYear: 150, endYear: 156, dynasty: "东汉", emperor: "汉桓帝刘志" },
    { name: "元嘉", startYear: 151, endYear: 153, dynasty: "东汉", emperor: "汉桓帝刘志" },
    { name: "永兴", startYear: 153, endYear: 154, dynasty: "东汉", emperor: "汉桓帝刘志" },
    { name: "永寿", startYear: 155, endYear: 158, dynasty: "东汉", emperor: "汉桓帝刘志" },
    { name: "延熙", startYear: 158, endYear: 167, dynasty: "东汉", emperor: "汉桓帝刘志" },
    { name: "永康", startYear: 167, endYear: 167, dynasty: "东汉", emperor: "汉桓帝刘志" },
    { name: "建宁", startYear: 168, endYear: 172, dynasty: "东汉", emperor: "汉灵帝刘宏" },
    { name: "熹平", startYear: 172, endYear: 178, dynasty: "东汉", emperor: "汉灵帝刘宏" },
    { name: "光和", startYear: 178, endYear: 184, dynasty: "东汉", emperor: "汉灵帝刘宏" },
    { name: "中平", startYear: 184, endYear: 189, dynasty: "东汉", emperor: "汉灵帝刘宏" },
    { name: "光熹", startYear: 189, endYear: 189, dynasty: "东汉", emperor: "汉少帝刘辩" },
    { name: "昭宁", startYear: 189, endYear: 189, dynasty: "东汉", emperor: "汉少帝刘辩" },
    { name: "永汉", startYear: 189, endYear: 189, dynasty: "东汉", emperor: "汉少帝刘辩" },
    { name: "初平", startYear: 190, endYear: 193, dynasty: "东汉", emperor: "汉献帝刘协" },
    { name: "兴平", startYear: 194, endYear: 195, dynasty: "东汉", emperor: "汉献帝刘协" },
    { name: "建安", startYear: 196, endYear: 220, dynasty: "东汉", emperor: "汉献帝刘协" },
    
    // Three Kingdoms Period (220-280)
    { name: "黄初", startYear: 220, endYear: 226, dynasty: "魏", emperor: "魏文帝曹丕" },
    { name: "太和", startYear: 227, endYear: 233, dynasty: "魏", emperor: "魏明帝曹睿" },
    { name: "青龙", startYear: 233, endYear: 237, dynasty: "魏", emperor: "魏明帝曹睿" },
    { name: "景初", startYear: 237, endYear: 239, dynasty: "魏", emperor: "魏明帝曹睿" },
    { name: "正始", startYear: 240, endYear: 249, dynasty: "魏", emperor: "魏齐王曹芳" },
    { name: "嘉平", startYear: 249, endYear: 254, dynasty: "魏", emperor: "魏齐王曹芳" },
    { name: "正元", startYear: 254, endYear: 255, dynasty: "魏", emperor: "魏高贵乡公曹髦" },
    { name: "甘露", startYear: 256, endYear: 260, dynasty: "魏", emperor: "魏高贵乡公曹髦" },
    { name: "景元", startYear: 260, endYear: 264, dynasty: "魏", emperor: "魏元帝曹奂" },
    { name: "咸熙", startYear: 264, endYear: 265, dynasty: "魏", emperor: "魏元帝曹奂" },
    
    { name: "建安", startYear: 196, endYear: 220, dynasty: "汉", emperor: "汉献帝刘协" },
    { name: "章武", startYear: 221, endYear: 223, dynasty: "蜀汉", emperor: "蜀汉昭烈帝刘备" },
    { name: "建兴", startYear: 223, endYear: 237, dynasty: "蜀汉", emperor: "蜀汉后主刘禅" },
    { name: "延熙", startYear: 238, endYear: 257, dynasty: "蜀汉", emperor: "蜀汉后主刘禅" },
    { name: "景耀", startYear: 258, endYear: 263, dynasty: "蜀汉", emperor: "蜀汉后主刘禅" },
    
    { name: "黄武", startYear: 222, endYear: 229, dynasty: "吴", emperor: "吴大帝孙权" },
    { name: "黄龙", startYear: 229, endYear: 231, dynasty: "吴", emperor: "吴大帝孙权" },
    { name: "嘉禾", startYear: 232, endYear: 238, dynasty: "吴", emperor: "吴大帝孙权" },
    { name: "赤乌", startYear: 238, endYear: 251, dynasty: "吴", emperor: "吴大帝孙权" },
    { name: "太元", startYear: 251, endYear: 252, dynasty: "吴", emperor: "吴废帝孙亮" },
    { name: "神凤", startYear: 252, endYear: 258, dynasty: "吴", emperor: "吴废帝孙亮" },
    { name: "永安", startYear: 258, endYear: 264, dynasty: "吴", emperor: "吴景帝孙休" },
    { name: "元兴", startYear: 264, endYear: 265, dynasty: "吴", emperor: "吴景帝孙休" },
    { name: "甘露", startYear: 265, endYear: 266, dynasty: "吴", emperor: "吴末帝孙皓" },
    { name: "宝鼎", startYear: 266, endYear: 269, dynasty: "吴", emperor: "吴末帝孙皓" },
    { name: "建衡", startYear: 269, endYear: 271, dynasty: "吴", emperor: "吴末帝孙皓" },
    { name: "凤凰", startYear: 272, endYear: 274, dynasty: "吴", emperor: "吴末帝孙皓" },
    { name: "天册", startYear: 275, endYear: 276, dynasty: "吴", emperor: "吴末帝孙皓" },
    { name: "天玺", startYear: 276, endYear: 280, dynasty: "吴", emperor: "吴末帝孙皓" },
    
    // Jin Dynasty (265-420)
    { name: "泰始", startYear: 265, endYear: 274, dynasty: "晋", emperor: "晋武帝司马炎" },
    { name: "咸宁", startYear: 275, endYear: 280, dynasty: "晋", emperor: "晋武帝司马炎" },
    { name: "太康", startYear: 280, endYear: 289, dynasty: "晋", emperor: "晋武帝司马炎" },
    { name: "太熙", startYear: 290, endYear: 306, dynasty: "晋", emperor: "晋惠帝司马衷" },
    { name: "永嘉", startYear: 307, endYear: 313, dynasty: "晋", emperor: "晋怀帝司马炽" },
    { name: "建兴", startYear: 313, endYear: 316, dynasty: "晋", emperor: "晋愍帝司马邺" },
    
    // Sixteen Kingdoms Period (304-439)
    // 前赵/汉赵 (304-329)
    { name: "汉赵政权", startYear: 304, endYear: 318, dynasty: "前赵", emperor: "刘渊/刘聪", isAlternateRegime: true },
    { name: "光初", startYear: 318, endYear: 329, dynasty: "前赵", emperor: "刘曜", isAlternateRegime: true },
    
    // 成汉 (304-347)
    { name: "建兴", startYear: 304, endYear: 324, dynasty: "成汉", emperor: "李雄", isAlternateRegime: true },
    { name: "太和", startYear: 324, endYear: 338, dynasty: "成汉", emperor: "李班/李期", isAlternateRegime: true },
    { name: "兴和", startYear: 338, endYear: 341, dynasty: "成汉", emperor: "李寿", isAlternateRegime: true },
    { name: "建初", startYear: 341, endYear: 343, dynasty: "成汉", emperor: "李势", isAlternateRegime: true },
    { name: "太始", startYear: 343, endYear: 347, dynasty: "成汉", emperor: "李势", isAlternateRegime: true },
    
    // 后赵 (319-351)
    { name: "太兴", startYear: 319, endYear: 321, dynasty: "后赵", emperor: "石勒", isAlternateRegime: true },
    { name: "光初", startYear: 321, endYear: 334, dynasty: "后赵", emperor: "石勒", isAlternateRegime: true },
    { name: "建武", startYear: 335, endYear: 349, dynasty: "后赵", emperor: "石虎", isAlternateRegime: true },
    { name: "太宁", startYear: 350, endYear: 351, dynasty: "后赵", emperor: "石鉴", isAlternateRegime: true },
    
    // 前燕 (337-370)
    { name: "建平", startYear: 337, endYear: 348, dynasty: "前燕", emperor: "慕容皝", isAlternateRegime: true },
    { name: "永和", startYear: 345, endYear: 356, dynasty: "前燕", emperor: "慕容俊", isAlternateRegime: true },
    { name: "建熙", startYear: 357, endYear: 370, dynasty: "前燕", emperor: "慕容俊/慕容暐", isAlternateRegime: true },
    
    // 前秦 (351-394)
    { name: "永兴", startYear: 351, endYear: 355, dynasty: "前秦", emperor: "苻健", isAlternateRegime: true },
    { name: "建元", startYear: 355, endYear: 384, dynasty: "前秦", emperor: "苻坚", isAlternateRegime: true },
    { name: "太安", startYear: 385, endYear: 394, dynasty: "前秦", emperor: "苻登/苻崇", isAlternateRegime: true },
    
    // 后燕 (384-407)
    { name: "燕建", startYear: 384, endYear: 396, dynasty: "后燕", emperor: "慕容垂", isAlternateRegime: true },
    { name: "延和", startYear: 401, endYear: 407, dynasty: "后燕", emperor: "慕容熙", isAlternateRegime: true },
    
    // 后秦 (384-417)
    { name: "建初", startYear: 384, endYear: 394, dynasty: "后秦", emperor: "姚苌", isAlternateRegime: true },
    { name: "皇始", startYear: 395, endYear: 412, dynasty: "后秦", emperor: "姚兴", isAlternateRegime: true },
    { name: "永和", startYear: 413, endYear: 417, dynasty: "后秦", emperor: "姚泓", isAlternateRegime: true },
    
    // 西秦 (385-431)
    { name: "建义", startYear: 385, endYear: 388, dynasty: "西秦", emperor: "乞伏国仁", isAlternateRegime: true },
    { name: "更始", startYear: 409, endYear: 412, dynasty: "西秦", emperor: "乞伏乾归", isAlternateRegime: true },
    { name: "永弘", startYear: 413, endYear: 424, dynasty: "西秦", emperor: "乞伏炽磐", isAlternateRegime: true },
    
    // 后凉 (386-403)
    { name: "太安", startYear: 386, endYear: 389, dynasty: "后凉", emperor: "吕光", isAlternateRegime: true },
    { name: "麟嘉", startYear: 390, endYear: 399, dynasty: "后凉", emperor: "吕光", isAlternateRegime: true },
    { name: "神玺", startYear: 399, endYear: 402, dynasty: "后凉", emperor: "吕隆", isAlternateRegime: true },
    { name: "元兴", startYear: 402, endYear: 403, dynasty: "后凉", emperor: "吕隆", isAlternateRegime: true },
    
    // 南凉 (397-414)
    { name: "太初", startYear: 397, endYear: 399, dynasty: "南凉", emperor: "秃发乌孤", isAlternateRegime: true },
    { name: "永康", startYear: 402, endYear: 414, dynasty: "南凉", emperor: "秃发利鹿孤", isAlternateRegime: true },
    
    // 北凉 (397-439)
    { name: "永安", startYear: 401, endYear: 433, dynasty: "北凉", emperor: "沮渠蒙逊", isAlternateRegime: true },
    { name: "承玄", startYear: 433, endYear: 439, dynasty: "北凉", emperor: "沮渠牧犍", isAlternateRegime: true },
    
    // 西凉 (400-421)
    { name: "永建", startYear: 400, endYear: 421, dynasty: "西凉", emperor: "李暠/李歆", isAlternateRegime: true },
    
    // 胡夏 (407-431)
    { name: "永初", startYear: 407, endYear: 416, dynasty: "胡夏", emperor: "赫连勃勃", isAlternateRegime: true },
    { name: "玄始", startYear: 424, endYear: 431, dynasty: "胡夏", emperor: "赫连昌", isAlternateRegime: true },
    
    // 北燕 (409-436)
    { name: "建兴", startYear: 409, endYear: 428, dynasty: "北燕", emperor: "冯跋", isAlternateRegime: true },
    { name: "神瑞", startYear: 428, endYear: 430, dynasty: "北燕", emperor: "冯弘", isAlternateRegime: true },
    { name: "正平", startYear: 430, endYear: 436, dynasty: "北燕", emperor: "冯弘", isAlternateRegime: true },
    
    // 东晋 (317-420)
    { name: "建武", startYear: 317, endYear: 317, dynasty: "东晋", emperor: "晋元帝司马睿" },
    { name: "太兴", startYear: 318, endYear: 321, dynasty: "东晋", emperor: "晋元帝司马睿" },
    { name: "永昌", startYear: 322, endYear: 323, dynasty: "东晋", emperor: "晋元帝司马睿" },
    { name: "太宁", startYear: 323, endYear: 326, dynasty: "东晋", emperor: "晋元帝司马睿" },
    { name: "咸和", startYear: 326, endYear: 334, dynasty: "东晋", emperor: "晋成帝司马衍" },
    { name: "咸康", startYear: 335, endYear: 342, dynasty: "东晋", emperor: "晋成帝司马衍" },
    { name: "建元", startYear: 343, endYear: 344, dynasty: "东晋", emperor: "晋康帝司马岳" },
    { name: "永和", startYear: 345, endYear: 356, dynasty: "东晋", emperor: "晋穆帝司马聃" },
    { name: "升平", startYear: 357, endYear: 361, dynasty: "东晋", emperor: "晋穆帝司马聃" },
    { name: "隆和", startYear: 362, endYear: 363, dynasty: "东晋", emperor: "晋哀帝司马丕" },
    { name: "兴宁", startYear: 363, endYear: 365, dynasty: "东晋", emperor: "晋哀帝司马丕" },
    { name: "太和", startYear: 366, endYear: 371, dynasty: "东晋", emperor: "晋废帝司马奕" },
    { name: "咸安", startYear: 371, endYear: 372, dynasty: "东晋", emperor: "晋简文帝司马昱" },
    { name: "宁康", startYear: 373, endYear: 375, dynasty: "东晋", emperor: "晋孝武帝司马曜" },
    { name: "太元", startYear: 376, endYear: 396, dynasty: "东晋", emperor: "晋孝武帝司马曜" },
    { name: "隆安", startYear: 397, endYear: 401, dynasty: "东晋", emperor: "晋安帝司马德宗" },
    { name: "元兴", startYear: 402, endYear: 404, dynasty: "东晋", emperor: "晋安帝司马德宗" },
    { name: "义熙", startYear: 405, endYear: 418, dynasty: "东晋", emperor: "晋安帝司马德宗" },
    { name: "元熙", startYear: 419, endYear: 420, dynasty: "东晋", emperor: "晋恭帝司马德文" },
    
    // Northern and Southern Dynasties (420-589)
    // Song (420-479)
    { name: "永初", startYear: 420, endYear: 422, dynasty: "宋", emperor: "宋武帝刘裕" },
    { name: "景平", startYear: 423, endYear: 424, dynasty: "宋", emperor: "宋少帝刘义符" },
    { name: "元嘉", startYear: 424, endYear: 453, dynasty: "宋", emperor: "宋文帝刘义隆" },
    { name: "孝建", startYear: 454, endYear: 456, dynasty: "宋", emperor: "宋孝武帝刘骏" },
    { name: "大明", startYear: 457, endYear: 464, dynasty: "宋", emperor: "宋孝武帝刘骏" },
    { name: "永光", startYear: 465, endYear: 465, dynasty: "宋", emperor: "宋废帝刘子业" },
    { name: "景和", startYear: 465, endYear: 465, dynasty: "宋", emperor: "宋废帝刘子业" },
    { name: "泰始", startYear: 465, endYear: 471, dynasty: "宋", emperor: "宋明帝刘彧" },
    { name: "泰豫", startYear: 472, endYear: 472, dynasty: "宋", emperor: "宋废帝刘昱" },
    { name: "元徽", startYear: 473, endYear: 477, dynasty: "宋", emperor: "宋后废帝刘昱" },
    { name: "升明", startYear: 477, endYear: 479, dynasty: "宋", emperor: "宋顺帝刘准" },
    
    // Southern Qi (479-502)
    { name: "建元", startYear: 479, endYear: 482, dynasty: "南齐", emperor: "齐高帝萧道成" },
    { name: "永明", startYear: 483, endYear: 493, dynasty: "南齐", emperor: "齐武帝萧赜" },
    { name: "隆昌", startYear: 494, endYear: 494, dynasty: "南齐", emperor: "齐废帝萧昭业" },
    { name: "延兴", startYear: 494, endYear: 494, dynasty: "南齐", emperor: "齐废帝萧昭业" },
    { name: "建武", startYear: 494, endYear: 498, dynasty: "南齐", emperor: "齐明帝萧鸾" },
    { name: "永泰", startYear: 498, endYear: 498, dynasty: "南齐", emperor: "齐明帝萧鸾" },
    { name: "中兴", startYear: 499, endYear: 501, dynasty: "南齐", emperor: "齐东昏侯萧宝卷" },
    { name: "永元", startYear: 499, endYear: 501, dynasty: "南齐", emperor: "齐东昏侯萧宝卷" },
    { name: "建武", startYear: 502, endYear: 502, dynasty: "南齐", emperor: "齐和帝萧宝融" },
    
    // Southern Liang (502-557)
    { name: "天监", startYear: 502, endYear: 519, dynasty: "南梁", emperor: "梁武帝萧衍" },
    { name: "普通", startYear: 520, endYear: 527, dynasty: "南梁", emperor: "梁武帝萧衍" },
    { name: "大通", startYear: 527, endYear: 529, dynasty: "南梁", emperor: "梁武帝萧衍" },
    { name: "中大通", startYear: 529, endYear: 534, dynasty: "南梁", emperor: "梁武帝萧衍" },
    { name: "大同", startYear: 535, endYear: 545, dynasty: "南梁", emperor: "梁武帝萧衍" },
    { name: "中大同", startYear: 546, endYear: 547, dynasty: "南梁", emperor: "梁武帝萧衍" },
    { name: "太清", startYear: 547, endYear: 549, dynasty: "南梁", emperor: "梁武帝萧衍" },
    { name: "大宝", startYear: 550, endYear: 551, dynasty: "南梁", emperor: "梁简文帝萧纲" },
    { name: "天正", startYear: 551, endYear: 552, dynasty: "南梁", emperor: "梁简文帝萧纲" },
    { name: "承圣", startYear: 552, endYear: 555, dynasty: "南梁", emperor: "梁元帝萧绎" },
    { name: "天成", startYear: 555, endYear: 555, dynasty: "南梁", emperor: "梁元帝萧绎" },
    { name: "绍泰", startYear: 555, endYear: 556, dynasty: "南梁", emperor: "梁元帝萧绎" },
    { name: "太平", startYear: 556, endYear: 557, dynasty: "南梁", emperor: "梁元帝萧绎" },
    
    // Western Liang (555-587, vassal of Western Wei and Northern Zhou)
    { name: "天保", startYear: 550, endYear: 551, dynasty: "西梁", emperor: "梁恭帝萧顺之", isAlternateRegime: true },
    { name: "大定", startYear: 557, endYear: 562, dynasty: "西梁", emperor: "梁静帝萧岿", isAlternateRegime: true },
    { name: "广运", startYear: 562, endYear: 585, dynasty: "西梁", emperor: "梁静帝萧岿", isAlternateRegime: true },
    { name: "大定", startYear: 585, endYear: 587, dynasty: "西梁", emperor: "梁静帝萧岿", isAlternateRegime: true },
    
    // Later Liang (555-587, vassal of Chen)
    { name: "天正", startYear: 557, endYear: 559, dynasty: "后梁", emperor: "梁敬帝萧方智", isAlternateRegime: true },
    { name: "光大", startYear: 559, endYear: 560, dynasty: "后梁", emperor: "梁敬帝萧方智", isAlternateRegime: true },
    { name: "永定", startYear: 560, endYear: 562, dynasty: "后梁", emperor: "萧大宝", isAlternateRegime: true },
    { name: "承圣", startYear: 562, endYear: 562, dynasty: "后梁", emperor: "萧大宝", isAlternateRegime: true },
    { name: "天和", startYear: 562, endYear: 565, dynasty: "后梁", emperor: "梁明帝萧岩", isAlternateRegime: true },
    { name: "广运", startYear: 565, endYear: 576, dynasty: "后梁", emperor: "萧琮", isAlternateRegime: true },
    { name: "承圣", startYear: 576, endYear: 577, dynasty: "后梁", emperor: "萧琮", isAlternateRegime: true },
    { name: "大建", startYear: 577, endYear: 579, dynasty: "后梁", emperor: "梁世宗萧瑜", isAlternateRegime: true },
    { name: "至德", startYear: 583, endYear: 586, dynasty: "后梁", emperor: "萧氏", isAlternateRegime: true },
    
    // Chen (557-589)
    { name: "永定", startYear: 557, endYear: 559, dynasty: "陈", emperor: "陈武帝陈霸先" },
    { name: "天嘉", startYear: 560, endYear: 566, dynasty: "陈", emperor: "陈文帝陈蒨" },
    { name: "天康", startYear: 566, endYear: 568, dynasty: "陈", emperor: "陈文帝陈蒨" },
    { name: "光大", startYear: 567, endYear: 569, dynasty: "陈", emperor: "陈废帝陈伯宗" },
    { name: "太建", startYear: 569, endYear: 582, dynasty: "陈", emperor: "陈宣帝陈顼" },
    { name: "祯明", startYear: 587, endYear: 589, dynasty: "陈", emperor: "陈后主陈叔宝" },
    
    // Northern Wei (386-534)
    { name: "登国", startYear: 386, endYear: 396, dynasty: "北魏", emperor: "魏道武帝拓跋珪", isAlternateRegime: true },
    { name: "皇始", startYear: 396, endYear: 398, dynasty: "北魏", emperor: "魏道武帝拓跋珪", isAlternateRegime: true },
    { name: "天兴", startYear: 398, endYear: 404, dynasty: "北魏", emperor: "魏道武帝拓跋珪", isAlternateRegime: true },
    { name: "天赐", startYear: 404, endYear: 409, dynasty: "北魏", emperor: "魏道武帝拓跋珪", isAlternateRegime: true },
    { name: "永兴", startYear: 409, endYear: 414, dynasty: "北魏", emperor: "魏明元帝拓跋嗣", isAlternateRegime: true },
    { name: "神瑞", startYear: 414, endYear: 416, dynasty: "北魏", emperor: "魏明元帝拓跋嗣", isAlternateRegime: true },
    { name: "泰常", startYear: 416, endYear: 423, dynasty: "北魏", emperor: "魏明元帝拓跋嗣", isAlternateRegime: true },
    { name: "始光", startYear: 424, endYear: 428, dynasty: "北魏", emperor: "魏太武帝拓跋焘", isAlternateRegime: true },
    { name: "神麚", startYear: 428, endYear: 431, dynasty: "北魏", emperor: "魏太武帝拓跋焘", isAlternateRegime: true },
    { name: "延和", startYear: 432, endYear: 434, dynasty: "北魏", emperor: "魏太武帝拓跋焘", isAlternateRegime: true },
    { name: "太延", startYear: 435, endYear: 440, dynasty: "北魏", emperor: "魏太武帝拓跋焘", isAlternateRegime: true },
    { name: "太平真君", startYear: 440, endYear: 451, dynasty: "北魏", emperor: "魏太武帝拓跋焘", isAlternateRegime: true },
    { name: "正平", startYear: 451, endYear: 452, dynasty: "北魏", emperor: "魏太武帝拓跋焘", isAlternateRegime: true },
    { name: "兴安", startYear: 452, endYear: 454, dynasty: "北魏", emperor: "魏文成帝拓跋浚", isAlternateRegime: true },
    { name: "治安", startYear: 455, endYear: 459, dynasty: "北魏", emperor: "魏文成帝拓跋浚", isAlternateRegime: true },
    { name: "和平", startYear: 460, endYear: 465, dynasty: "北魏", emperor: "魏文成帝拓跋浚", isAlternateRegime: true },
    { name: "天安", startYear: 466, endYear: 466, dynasty: "北魏", emperor: "魏献文帝拓跋弘", isAlternateRegime: true },
    { name: "皇兴", startYear: 467, endYear: 471, dynasty: "北魏", emperor: "魏献文帝拓跋弘", isAlternateRegime: true },
    { name: "延兴", startYear: 471, endYear: 476, dynasty: "北魏", emperor: "魏献文帝拓跋弘", isAlternateRegime: true },
    { name: "承明", startYear: 476, endYear: 476, dynasty: "北魏", emperor: "魏献文帝拓跋弘", isAlternateRegime: true },
    { name: "太和", startYear: 477, endYear: 499, dynasty: "北魏", emperor: "魏孝文帝元宏", isAlternateRegime: true },
    { name: "景明", startYear: 500, endYear: 503, dynasty: "北魏", emperor: "魏宣武帝元恪", isAlternateRegime: true },
    { name: "正始", startYear: 504, endYear: 508, dynasty: "北魏", emperor: "魏宣武帝元恪", isAlternateRegime: true },
    { name: "永平", startYear: 508, endYear: 512, dynasty: "北魏", emperor: "魏宣武帝元恪", isAlternateRegime: true },
    { name: "延昌", startYear: 512, endYear: 515, dynasty: "北魏", emperor: "魏宣武帝元恪", isAlternateRegime: true },
    { name: "熙平", startYear: 516, endYear: 518, dynasty: "北魏", emperor: "魏孝明帝元诩", isAlternateRegime: true },
    { name: "神龟", startYear: 518, endYear: 520, dynasty: "北魏", emperor: "魏孝明帝元诩", isAlternateRegime: true },
    { name: "正光", startYear: 520, endYear: 525, dynasty: "北魏", emperor: "魏孝明帝元诩", isAlternateRegime: true },
    { name: "孝昌", startYear: 525, endYear: 527, dynasty: "北魏", emperor: "魏孝明帝元诩", isAlternateRegime: true },
    { name: "武泰", startYear: 528, endYear: 528, dynasty: "北魏", emperor: "魏孝庄帝元子攸", isAlternateRegime: true },
    { name: "建义", startYear: 528, endYear: 529, dynasty: "北魏", emperor: "魏长广王元晔", isAlternateRegime: true },
    { name: "永安", startYear: 528, endYear: 530, dynasty: "北魏", emperor: "魏孝庄帝元子攸", isAlternateRegime: true },
    { name: "建明", startYear: 530, endYear: 531, dynasty: "北魏", emperor: "魏节闵帝元恭", isAlternateRegime: true },
    { name: "永熙", startYear: 532, endYear: 534, dynasty: "北魏", emperor: "魏孝武帝元修", isAlternateRegime: true },
    
    // Eastern Wei (534-550)
    { name: "天平", startYear: 534, endYear: 537, dynasty: "东魏", emperor: "魏孝静帝元善见", isAlternateRegime: true },
    { name: "元象", startYear: 538, endYear: 539, dynasty: "东魏", emperor: "魏孝静帝元善见", isAlternateRegime: true },
    { name: "兴和", startYear: 539, endYear: 542, dynasty: "东魏", emperor: "魏孝静帝元善见", isAlternateRegime: true },
    { name: "武定", startYear: 543, endYear: 550, dynasty: "东魏", emperor: "魏孝静帝元善见", isAlternateRegime: true },
    
    // Western Wei (535-557)
    { name: "大统", startYear: 535, endYear: 551, dynasty: "西魏", emperor: "魏文帝元宝炬", isAlternateRegime: true },
    { name: "大统", startYear: 551, endYear: 554, dynasty: "西魏", emperor: "魏废帝元钦", isAlternateRegime: true },
    { name: "大统", startYear: 554, endYear: 556, dynasty: "西魏", emperor: "魏恭帝元廓", isAlternateRegime: true },
    
    // Northern Qi (550-577)
    { name: "天保", startYear: 550, endYear: 559, dynasty: "北齐", emperor: "齐文宣帝高洋", isAlternateRegime: true },
    { name: "乾明", startYear: 560, endYear: 560, dynasty: "北齐", emperor: "齐废帝高殷", isAlternateRegime: true },
    { name: "皇建", startYear: 560, endYear: 561, dynasty: "北齐", emperor: "齐孝昭帝高演", isAlternateRegime: true },
    { name: "太宁", startYear: 561, endYear: 562, dynasty: "北齐", emperor: "齐武成帝高湛", isAlternateRegime: true },
    { name: "河清", startYear: 562, endYear: 565, dynasty: "北齐", emperor: "齐武成帝高湛", isAlternateRegime: true },
    { name: "天统", startYear: 565, endYear: 569, dynasty: "北齐", emperor: "齐后主高纬", isAlternateRegime: true },
    { name: "武平", startYear: 570, endYear: 576, dynasty: "北齐", emperor: "齐后主高纬", isAlternateRegime: true },
    { name: "隆化", startYear: 576, endYear: 577, dynasty: "北齐", emperor: "齐后主高纬", isAlternateRegime: true },
    
    // Northern Zhou (557-581)
    { name: "保定", startYear: 557, endYear: 559, dynasty: "北周", emperor: "周明帝宇文毓", isAlternateRegime: true },
    { name: "天和", startYear: 566, endYear: 572, dynasty: "北周", emperor: "周武帝宇文邕", isAlternateRegime: true },
    { name: "建德", startYear: 572, endYear: 577, dynasty: "北周", emperor: "周武帝宇文邕", isAlternateRegime: true },
    { name: "宣政", startYear: 578, endYear: 579, dynasty: "北周", emperor: "周宣帝宇文赟", isAlternateRegime: true },
    { name: "大象", startYear: 579, endYear: 579, dynasty: "北周", emperor: "周静帝宇文衍", isAlternateRegime: true },
    { name: "大定", startYear: 580, endYear: 581, dynasty: "北周", emperor: "周静帝宇文阐", isAlternateRegime: true },
    
    // Sui Dynasty (581-618)
    { name: "开皇", startYear: 581, endYear: 600, dynasty: "隋", emperor: "隋文帝杨坚" },
    { name: "仁寿", startYear: 601, endYear: 604, dynasty: "隋", emperor: "隋文帝杨坚" },
    { name: "大业", startYear: 605, endYear: 618, dynasty: "隋", emperor: "隋炀帝杨广" },
    
    // Tang Dynasty (618-907)
    { name: "武德", startYear: 618, endYear: 626, dynasty: "唐", emperor: "唐高祖李渊" },
    { name: "贞观", startYear: 627, endYear: 649, dynasty: "唐", emperor: "唐太宗李世民" },
    { name: "永徽", startYear: 650, endYear: 655, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "显庆", startYear: 656, endYear: 661, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "龙朔", startYear: 661, endYear: 663, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "麟德", startYear: 664, endYear: 665, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "乾封", startYear: 666, endYear: 668, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "总章", startYear: 668, endYear: 670, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "咸亨", startYear: 670, endYear: 674, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "上元", startYear: 674, endYear: 676, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "仪凤", startYear: 676, endYear: 679, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "调露", startYear: 679, endYear: 680, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "永隆", startYear: 680, endYear: 681, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "开耀", startYear: 681, endYear: 682, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "永淳", startYear: 682, endYear: 683, dynasty: "唐", emperor: "唐高宗李治" },
    { name: "弘道", startYear: 683, endYear: 683, dynasty: "唐", emperor: "唐中宗李显" },
    { name: "文明", startYear: 684, endYear: 684, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "光宅", startYear: 684, endYear: 684, dynasty: "唐", emperor: "唐中宗李显" },
    { name: "垂拱", startYear: 685, endYear: 688, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "永昌", startYear: 689, endYear: 689, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "载初", startYear: 689, endYear: 690, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "天授", startYear: 690, endYear: 692, dynasty: "周", emperor: "武则天" }, // Wu Zetian's Zhou
    { name: "长寿", startYear: 692, endYear: 694, dynasty: "周", emperor: "武则天" },
    { name: "延载", startYear: 694, endYear: 695, dynasty: "周", emperor: "武则天" },
    { name: "证圣", startYear: 695, endYear: 696, dynasty: "周", emperor: "武则天" },
    { name: "天册万岁", startYear: 695, endYear: 696, dynasty: "周", emperor: "武则天" },
    { name: "万岁登封", startYear: 696, endYear: 696, dynasty: "周", emperor: "武则天" },
    { name: "万岁通天", startYear: 696, endYear: 697, dynasty: "周", emperor: "武则天" },
    { name: "神功", startYear: 697, endYear: 698, dynasty: "周", emperor: "武则天" },
    { name: "圣历", startYear: 698, endYear: 700, dynasty: "周", emperor: "武则天" },
    { name: "久视", startYear: 700, endYear: 701, dynasty: "周", emperor: "武则天" },
    { name: "大足", startYear: 701, endYear: 701, dynasty: "周", emperor: "武则天" },
    { name: "长安", startYear: 701, endYear: 705, dynasty: "周", emperor: "武则天" },
    { name: "神龙", startYear: 705, endYear: 707, dynasty: "唐", emperor: "唐中宗李显" },
    { name: "景龙", startYear: 707, endYear: 710, dynasty: "唐", emperor: "唐中宗李显" },
    { name: "唐隆", startYear: 710, endYear: 711, dynasty: "唐", emperor: "唐殇帝李重茂" },
    { name: "景云", startYear: 710, endYear: 711, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "太极", startYear: 712, endYear: 713, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "延和", startYear: 712, endYear: 713, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "先天", startYear: 712, endYear: 713, dynasty: "唐", emperor: "唐睿宗李旦" },
    { name: "开元", startYear: 713, endYear: 741, dynasty: "唐", emperor: "唐玄宗李隆基" },
    { name: "天宝", startYear: 742, endYear: 756, dynasty: "唐", emperor: "唐玄宗李隆基" },
    { name: "至德", startYear: 756, endYear: 758, dynasty: "唐", emperor: "唐肃宗李亨" },
    { name: "乾元", startYear: 758, endYear: 760, dynasty: "唐", emperor: "唐肃宗李亨" },
    { name: "上元", startYear: 760, endYear: 761, dynasty: "唐", emperor: "唐肃宗李亨" },
    { name: "宝应", startYear: 762, endYear: 763, dynasty: "唐", emperor: "唐代宗李豫" },
    { name: "广德", startYear: 763, endYear: 764, dynasty: "唐", emperor: "唐代宗李豫" },
    { name: "永泰", startYear: 765, endYear: 766, dynasty: "唐", emperor: "唐代宗李豫" },
    { name: "大历", startYear: 766, endYear: 779, dynasty: "唐", emperor: "唐代宗李豫" },
    { name: "建中", startYear: 780, endYear: 783, dynasty: "唐", emperor: "唐德宗李适" },
    { name: "兴元", startYear: 784, endYear: 785, dynasty: "唐", emperor: "唐德宗李适" },
    { name: "贞元", startYear: 785, endYear: 805, dynasty: "唐", emperor: "唐德宗李适" },
    { name: "永贞", startYear: 805, endYear: 805, dynasty: "唐", emperor: "唐顺宗李诵" },
    { name: "元和", startYear: 806, endYear: 820, dynasty: "唐", emperor: "唐宪宗李纯" },
    { name: "长庆", startYear: 821, endYear: 824, dynasty: "唐", emperor: "唐穆宗李恒" },
    { name: "宝历", startYear: 825, endYear: 826, dynasty: "唐", emperor: "唐敬宗李湛" },
    { name: "大和", startYear: 827, endYear: 835, dynasty: "唐", emperor: "唐文宗李昂" },
    { name: "开成", startYear: 836, endYear: 840, dynasty: "唐", emperor: "唐文宗李昂" },
    { name: "会昌", startYear: 841, endYear: 846, dynasty: "唐", emperor: "唐武宗李炎" },
    { name: "大中", startYear: 847, endYear: 859, dynasty: "唐", emperor: "唐宣宗李忱" },
    { name: "咸通", startYear: 860, endYear: 873, dynasty: "唐", emperor: "唐懿宗李漼" },
    { name: "乾符", startYear: 874, endYear: 879, dynasty: "唐", emperor: "唐僖宗李儇" },
    { name: "广明", startYear: 880, endYear: 881, dynasty: "唐", emperor: "唐僖宗李儇" },
    { name: "中和", startYear: 881, endYear: 885, dynasty: "唐", emperor: "唐僖宗李儇" },
    { name: "光启", startYear: 885, endYear: 888, dynasty: "唐", emperor: "唐僖宗李儇" },
    { name: "文德", startYear: 888, endYear: 888, dynasty: "唐", emperor: "唐僖宗李儇" },
    { name: "龙纪", startYear: 889, endYear: 890, dynasty: "唐", emperor: "唐昭宗李晔" },
    { name: "大顺", startYear: 890, endYear: 891, dynasty: "唐", emperor: "唐昭宗李晔" },
    { name: "景福", startYear: 892, endYear: 893, dynasty: "唐", emperor: "唐昭宗李晔" },
    { name: "乾宁", startYear: 894, endYear: 898, dynasty: "唐", emperor: "唐昭宗李晔" },
    { name: "光化", startYear: 898, endYear: 901, dynasty: "唐", emperor: "唐昭宗李晔" },
    { name: "天复", startYear: 901, endYear: 904, dynasty: "唐", emperor: "唐昭宗李晔" },
    { name: "天祐", startYear: 904, endYear: 907, dynasty: "唐", emperor: "唐哀帝李柷" },
    
    // Five Dynasties and Ten Kingdoms Period (907-979)
    // 五代: 后梁、后唐、后晋、后汉、后周
    { name: "开平", startYear: 907, endYear: 911, dynasty: "后梁", emperor: "梁太祖朱温" },
    { name: "乾化", startYear: 911, endYear: 915, dynasty: "后梁", emperor: "梁太祖朱温" },
    { name: "贞明", startYear: 915, endYear: 921, dynasty: "后梁", emperor: "梁末帝朱友贞" },
    { name: "龙德", startYear: 921, endYear: 923, dynasty: "后梁", emperor: "梁末帝朱友贞" },
    
    { name: "同光", startYear: 923, endYear: 926, dynasty: "后唐", emperor: "唐庄宗李存勖" },
    { name: "天成", startYear: 926, endYear: 930, dynasty: "后唐", emperor: "唐明宗李嗣源" },
    { name: "长兴", startYear: 930, endYear: 933, dynasty: "后唐", emperor: "唐明宗李嗣源" },
    { name: "应顺", startYear: 933, endYear: 934, dynasty: "后唐", emperor: "唐闵帝李从厚" },
    { name: "清泰", startYear: 934, endYear: 936, dynasty: "后唐", emperor: "唐末帝李从珂" },
    
    { name: "天福", startYear: 936, endYear: 942, dynasty: "后晋", emperor: "晋高祖石敬瑭" },
    { name: "开运", startYear: 944, endYear: 946, dynasty: "后晋", emperor: "晋出帝石重贵" },
    
    { name: "天福", startYear: 947, endYear: 948, dynasty: "后汉", emperor: "汉高祖刘知远" },
    { name: "乾祐", startYear: 948, endYear: 950, dynasty: "后汉", emperor: "汉隐帝刘承祐" },
    
    { name: "广顺", startYear: 951, endYear: 953, dynasty: "后周", emperor: "周太祖郭威" },
    { name: "显德", startYear: 954, endYear: 959, dynasty: "后周", emperor: "周世宗柴荣" },
    { name: "显德", startYear: 959, endYear: 960, dynasty: "后周", emperor: "周恭帝柴宗训" },
    
    // 十国: 前蜀、后蜀、吴、南唐、吴越、闽、楚、南汉、北汉、南平(荆南)
    { name: "永平", startYear: 911, endYear: 915, dynasty: "前蜀", emperor: "蜀王王建", isAlternateRegime: true },
    { name: "通正", startYear: 915, endYear: 921, dynasty: "前蜀", emperor: "蜀王王建", isAlternateRegime: true },
    { name: "光天", startYear: 918, endYear: 925, dynasty: "前蜀", emperor: "蜀后主王衍", isAlternateRegime: true },
    
    { name: "明德", startYear: 934, endYear: 938, dynasty: "后蜀", emperor: "蜀高祖孟知祥", isAlternateRegime: true },
    { name: "广政", startYear: 938, endYear: 965, dynasty: "后蜀", emperor: "蜀后主孟昶", isAlternateRegime: true },
    
    { name: "天祐", startYear: 907, endYear: 918, dynasty: "吴", emperor: "吴太祖杨行密", isAlternateRegime: true },
    { name: "武义", startYear: 919, endYear: 937, dynasty: "吴", emperor: "吴烈祖杨渥/杨隆演", isAlternateRegime: true },
    
    { name: "升元", startYear: 937, endYear: 943, dynasty: "南唐", emperor: "南唐烈祖李昪", isAlternateRegime: true },
    { name: "保大", startYear: 943, endYear: 957, dynasty: "南唐", emperor: "南唐中主李璟", isAlternateRegime: true },
    { name: "建隆", startYear: 960, endYear: 963, dynasty: "南唐", emperor: "南唐后主李煜", isAlternateRegime: true },
    
    { name: "乾亨", startYear: 917, endYear: 924, dynasty: "吴越", emperor: "吴越武肃王钱镠", isAlternateRegime: true },
    { name: "宝正", startYear: 942, endYear: 947, dynasty: "吴越", emperor: "吴越忠懿王钱弘佐", isAlternateRegime: true },
    { name: "建隆", startYear: 960, endYear: 978, dynasty: "吴越", emperor: "吴越忠懿王钱俶", isAlternateRegime: true },
    
    { name: "永隆", startYear: 951, endYear: 969, dynasty: "闽", emperor: "闽王王审知", isAlternateRegime: true },
    
    { name: "白龙", startYear: 928, endYear: 933, dynasty: "楚", emperor: "楚武穆王马殷", isAlternateRegime: true },
    { name: "龙兴", startYear: 956, endYear: 962, dynasty: "楚", emperor: "楚卒公马希范", isAlternateRegime: true },
    
    { name: "乾亨", startYear: 917, endYear: 941, dynasty: "南汉", emperor: "南汉高祖刘龑", isAlternateRegime: true },
    { name: "大宝", startYear: 958, endYear: 971, dynasty: "南汉", emperor: "南汉后主刘鋹", isAlternateRegime: true },
    
    { name: "天会", startYear: 947, endYear: 950, dynasty: "北汉", emperor: "北汉高祖刘旻", isAlternateRegime: true },
    { name: "乾和", startYear: 979, endYear: 979, dynasty: "北汉", emperor: "北汉世祖刘承钧", isAlternateRegime: true },
    
    // Song Dynasty (960-1279)
    { name: "建隆", startYear: 960, endYear: 963, dynasty: "宋", emperor: "宋太祖赵匡胤" },
    { name: "乾德", startYear: 963, endYear: 968, dynasty: "宋", emperor: "宋太祖赵匡胤" },
    { name: "开宝", startYear: 968, endYear: 976, dynasty: "宋", emperor: "宋太祖赵匡胤" },
    { name: "太平兴国", startYear: 976, endYear: 984, dynasty: "宋", emperor: "宋太宗赵光义" },
    { name: "雍熙", startYear: 984, endYear: 987, dynasty: "宋", emperor: "宋太宗赵光义" },
    { name: "端拱", startYear: 988, endYear: 989, dynasty: "宋", emperor: "宋太宗赵光义" },
    { name: "淳化", startYear: 990, endYear: 994, dynasty: "宋", emperor: "宋太宗赵光义" },
    { name: "至道", startYear: 995, endYear: 997, dynasty: "宋", emperor: "宋太宗赵光义" },
    { name: "咸平", startYear: 998, endYear: 1003, dynasty: "宋", emperor: "宋真宗赵恒" },
    { name: "景德", startYear: 1004, endYear: 1007, dynasty: "宋", emperor: "宋真宗赵恒" },
    { name: "大中祥符", startYear: 1008, endYear: 1016, dynasty: "宋", emperor: "宋真宗赵恒" },
    { name: "天禧", startYear: 1017, endYear: 1021, dynasty: "宋", emperor: "宋真宗赵恒" },
    { name: "乾兴", startYear: 1022, endYear: 1022, dynasty: "宋", emperor: "宋真宗赵恒" },
    { name: "景祐", startYear: 1034, endYear: 1038, dynasty: "宋", emperor: "宋仁宗赵祯" },
    { name: "宝元", startYear: 1038, endYear: 1040, dynasty: "宋", emperor: "宋仁宗赵祯" },
    { name: "康定", startYear: 1040, endYear: 1041, dynasty: "宋", emperor: "宋仁宗赵祯" },
    { name: "庆历", startYear: 1041, endYear: 1048, dynasty: "宋", emperor: "宋仁宗赵祯" },
    { name: "皇祐", startYear: 1049, endYear: 1054, dynasty: "宋", emperor: "宋仁宗赵祯" },
    { name: "至和", startYear: 1054, endYear: 1056, dynasty: "宋", emperor: "宋仁宗赵祯" },
    { name: "嘉祐", startYear: 1056, endYear: 1063, dynasty: "宋", emperor: "宋仁宗赵祯" },
    { name: "治平", startYear: 1064, endYear: 1067, dynasty: "宋", emperor: "宋英宗赵曙" },
    { name: "熙宁", startYear: 1068, endYear: 1077, dynasty: "宋", emperor: "宋神宗赵顼" },
    { name: "元丰", startYear: 1078, endYear: 1085, dynasty: "宋", emperor: "宋神宗赵顼" },
    { name: "元祐", startYear: 1086, endYear: 1094, dynasty: "宋", emperor: "宋哲宗赵煦" },
    { name: "绍圣", startYear: 1094, endYear: 1098, dynasty: "宋", emperor: "宋哲宗赵煦" },
    { name: "元符", startYear: 1098, endYear: 1100, dynasty: "宋", emperor: "宋哲宗赵煦" },
    { name: "建中靖国", startYear: 1101, endYear: 1101, dynasty: "宋", emperor: "宋徽宗赵佶" },
    { name: "崇宁", startYear: 1102, endYear: 1106, dynasty: "宋", emperor: "宋徽宗赵佶" },
    { name: "大观", startYear: 1107, endYear: 1110, dynasty: "宋", emperor: "宋徽宗赵佶" },
    { name: "政和", startYear: 1111, endYear: 1118, dynasty: "宋", emperor: "宋徽宗赵佶" },
    { name: "重和", startYear: 1118, endYear: 1119, dynasty: "宋", emperor: "宋徽宗赵佶" },
    { name: "宣和", startYear: 1119, endYear: 1125, dynasty: "宋", emperor: "宋徽宗赵佶" },
    { name: "靖康", startYear: 1126, endYear: 1127, dynasty: "宋", emperor: "宋钦宗赵桓" },
    
    // Southern Song
    { name: "建炎", startYear: 1127, endYear: 1130, dynasty: "南宋", emperor: "宋高宗赵构" },
    { name: "绍兴", startYear: 1131, endYear: 1162, dynasty: "南宋", emperor: "宋高宗赵构" },
    { name: "隆兴", startYear: 1163, endYear: 1164, dynasty: "南宋", emperor: "宋孝宗赵昚" },
    { name: "乾道", startYear: 1165, endYear: 1173, dynasty: "南宋", emperor: "宋孝宗赵昚" },
    { name: "淳熙", startYear: 1174, endYear: 1189, dynasty: "南宋", emperor: "宋孝宗赵昚" },
    { name: "绍熙", startYear: 1190, endYear: 1194, dynasty: "南宋", emperor: "宋光宗赵惇" },
    { name: "庆元", startYear: 1195, endYear: 1200, dynasty: "南宋", emperor: "宋宁宗赵扩" },
    { name: "嘉泰", startYear: 1201, endYear: 1204, dynasty: "南宋", emperor: "宋宁宗赵扩" },
    { name: "开禧", startYear: 1205, endYear: 1207, dynasty: "南宋", emperor: "宋宁宗赵扩" },
    { name: "嘉定", startYear: 1208, endYear: 1224, dynasty: "南宋", emperor: "宋宁宗赵扩" },
    { name: "宝庆", startYear: 1225, endYear: 1227, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "绍定", startYear: 1228, endYear: 1233, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "端平", startYear: 1234, endYear: 1236, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "嘉熙", startYear: 1237, endYear: 1240, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "淳祐", startYear: 1241, endYear: 1252, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "宝祐", startYear: 1253, endYear: 1258, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "开庆", startYear: 1259, endYear: 1260, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "景定", startYear: 1260, endYear: 1264, dynasty: "南宋", emperor: "宋理宗赵昀" },
    { name: "咸淳", startYear: 1265, endYear: 1274, dynasty: "南宋", emperor: "宋度宗赵禥" },
    { name: "德祐", startYear: 1275, endYear: 1276, dynasty: "南宋", emperor: "宋恭帝赵㬎" },
    { name: "景炎", startYear: 1276, endYear: 1278, dynasty: "南宋", emperor: "宋端宗赵昺" },
    { name: "祥兴", startYear: 1278, endYear: 1279, dynasty: "南宋", emperor: "宋端宗赵昺" },
    
    // Liao Dynasty (parallel to Song)
    { name: "神册", startYear: 916, endYear: 947, dynasty: "辽", isAlternateRegime: true },
    { name: "天显", startYear: 926, endYear: 938, dynasty: "辽", isAlternateRegime: true },
    { name: "会同", startYear: 938, endYear: 947, dynasty: "辽", isAlternateRegime: true },
    { name: "大同", startYear: 947, endYear: 983, dynasty: "辽", isAlternateRegime: true },
    { name: "统和", startYear: 983, endYear: 1012, dynasty: "辽", isAlternateRegime: true },
    { name: "开泰", startYear: 1012, endYear: 1021, dynasty: "辽", isAlternateRegime: true },
    { name: "太平", startYear: 1021, endYear: 1031, dynasty: "辽", isAlternateRegime: true },
    { name: "重熙", startYear: 1032, endYear: 1055, dynasty: "辽", isAlternateRegime: true },
    { name: "清宁", startYear: 1055, endYear: 1064, dynasty: "辽", isAlternateRegime: true },
    { name: "咸雍", startYear: 1065, endYear: 1074, dynasty: "辽", isAlternateRegime: true },
    { name: "大康", startYear: 1075, endYear: 1084, dynasty: "辽", isAlternateRegime: true },
    { name: "天祚", startYear: 1101, endYear: 1125, dynasty: "辽", isAlternateRegime: true },
    
    // Jin Dynasty (parallel to Southern Song)
    { name: "收国", startYear: 1115, endYear: 1116, dynasty: "金", isAlternateRegime: true },
    { name: "天辅", startYear: 1117, endYear: 1123, dynasty: "金", isAlternateRegime: true },
    { name: "天会", startYear: 1123, endYear: 1137, dynasty: "金", isAlternateRegime: true },
    { name: "天眷", startYear: 1138, endYear: 1140, dynasty: "金", isAlternateRegime: true },
    { name: "皇统", startYear: 1141, endYear: 1149, dynasty: "金", isAlternateRegime: true },
    { name: "贞元", startYear: 1153, endYear: 1156, dynasty: "金", isAlternateRegime: true },
    { name: "正隆", startYear: 1156, endYear: 1161, dynasty: "金", isAlternateRegime: true },
    { name: "大定", startYear: 1161, endYear: 1189, dynasty: "金", isAlternateRegime: true },
    { name: "明昌", startYear: 1190, endYear: 1196, dynasty: "金", isAlternateRegime: true },
    { name: "承安", startYear: 1196, endYear: 1200, dynasty: "金", isAlternateRegime: true },
    { name: "泰和", startYear: 1201, endYear: 1208, dynasty: "金", isAlternateRegime: true },
    { name: "大安", startYear: 1209, endYear: 1212, dynasty: "金", isAlternateRegime: true },
    { name: "崇庆", startYear: 1212, endYear: 1213, dynasty: "金", isAlternateRegime: true },
    { name: "至宁", startYear: 1213, endYear: 1217, dynasty: "金", isAlternateRegime: true },
    { name: "兴定", startYear: 1217, endYear: 1222, dynasty: "金", isAlternateRegime: true },
    { name: "元光", startYear: 1222, endYear: 1224, dynasty: "金", isAlternateRegime: true },
    { name: "正大", startYear: 1224, endYear: 1232, dynasty: "金", isAlternateRegime: true },
    { name: "开兴", startYear: 1232, endYear: 1234, dynasty: "金", isAlternateRegime: true },
    
    // Yuan Dynasty (1271-1368)
    { name: "中统", startYear: 1260, endYear: 1264, dynasty: "元", emperor: "元世祖忽必烈" },
    { name: "至元", startYear: 1264, endYear: 1294, dynasty: "元", emperor: "元世祖忽必烈" },
    { name: "元贞", startYear: 1295, endYear: 1297, dynasty: "元", emperor: "元成宗铁穆耳" },
    { name: "大德", startYear: 1297, endYear: 1307, dynasty: "元", emperor: "元成宗铁穆耳" },
    { name: "至大", startYear: 1308, endYear: 1311, dynasty: "元", emperor: "元武宗海山" },
    { name: "皇庆", startYear: 1312, endYear: 1313, dynasty: "元", emperor: "元仁宗爱育黎拔力八达" },
    { name: "延祐", startYear: 1314, endYear: 1320, dynasty: "元", emperor: "元仁宗爱育黎拔力八达" },
    { name: "至治", startYear: 1321, endYear: 1323, dynasty: "元", emperor: "元英宗硕德八剌" },
    { name: "泰定", startYear: 1324, endYear: 1327, dynasty: "元", emperor: "元泰定帝也孙铁木儿" },
    { name: "致和", startYear: 1328, endYear: 1328, dynasty: "元", emperor: "元文宗图帖睦尔" },
    { name: "天历", startYear: 1328, endYear: 1330, dynasty: "元", emperor: "元文宗图帖睦尔" },
    { name: "至顺", startYear: 1330, endYear: 1332, dynasty: "元", emperor: "元文宗图帖睦尔" },
    { name: "元统", startYear: 1333, endYear: 1333, dynasty: "元", emperor: "元宁宗懿璘质班" },
    { name: "至元", startYear: 1335, endYear: 1340, dynasty: "元", emperor: "元惠宗妥欢帖睦尔" },
    { name: "至正", startYear: 1341, endYear: 1368, dynasty: "元", emperor: "元惠宗妥欢帖睦尔" },
    
    // Ming Dynasty (1368-1644)
    { name: "洪武", startYear: 1368, endYear: 1398, dynasty: "明", emperor: "明太祖朱元璋" },
    { name: "建文", startYear: 1399, endYear: 1402, dynasty: "明", emperor: "明惠帝朱允炆" },
    { name: "永乐", startYear: 1403, endYear: 1424, dynasty: "明", emperor: "明成祖朱棣" },
    { name: "洪熙", startYear: 1425, endYear: 1425, dynasty: "明", emperor: "明仁宗朱高炽" },
    { name: "宣德", startYear: 1426, endYear: 1435, dynasty: "明", emperor: "明宣宗朱瞻基" },
    { name: "正统", startYear: 1436, endYear: 1449, dynasty: "明", emperor: "明英宗朱祁镇" },
    { name: "景泰", startYear: 1450, endYear: 1456, dynasty: "明", emperor: "明代宗朱祁钰" },
    { name: "天顺", startYear: 1457, endYear: 1464, dynasty: "明", emperor: "明英宗朱祁镇" },
    { name: "成化", startYear: 1465, endYear: 1487, dynasty: "明", emperor: "明宪宗朱见深" },
    { name: "弘治", startYear: 1488, endYear: 1505, dynasty: "明", emperor: "明孝宗朱佑樘" },
    { name: "正德", startYear: 1506, endYear: 1521, dynasty: "明", emperor: "明武宗朱厚照" },
    { name: "嘉靖", startYear: 1522, endYear: 1566, dynasty: "明", emperor: "明世宗朱厚熜" },
    { name: "隆庆", startYear: 1567, endYear: 1572, dynasty: "明", emperor: "明穆宗朱载垕" },
    { name: "万历", startYear: 1573, endYear: 1620, dynasty: "明", emperor: "明神宗朱翊钧" },
    { name: "泰昌", startYear: 1620, endYear: 1620, dynasty: "明", emperor: "明光宗朱常洛" },
    { name: "天启", startYear: 1621, endYear: 1627, dynasty: "明", emperor: "明熹宗朱由校" },
    { name: "崇祯", startYear: 1628, endYear: 1644, dynasty: "明", emperor: "明思宗朱由检" },
    { name: "弘光", startYear: 1644, endYear: 1645, dynasty: "南明", emperor: "南明弘光帝朱由崧", isAlternateRegime: true },
    { name: "隆武", startYear: 1645, endYear: 1646, dynasty: "南明", emperor: "南明隆武帝朱聿键", isAlternateRegime: true },
    { name: "绍武", startYear: 1646, endYear: 1661, dynasty: "南明", emperor: "南明绍武帝朱聿鐭", isAlternateRegime: true },
    { name: "永历", startYear: 1647, endYear: 1661, dynasty: "南明", emperor: "南明永历帝朱由榔", isAlternateRegime: true },
    
    // Qing Dynasty (1644-1911)
    { name: "顺治", startYear: 1644, endYear: 1661, dynasty: "清", emperor: "清世祖福临" },
    { name: "康熙", startYear: 1662, endYear: 1722, dynasty: "清", emperor: "清圣祖玄烨" },
    { name: "雍正", startYear: 1723, endYear: 1735, dynasty: "清", emperor: "清世宗胤禛" },
    { name: "乾隆", startYear: 1736, endYear: 1795, dynasty: "清", emperor: "清高宗弘历" },
    { name: "嘉庆", startYear: 1796, endYear: 1820, dynasty: "清", emperor: "清仁宗颙琰" },
    { name: "道光", startYear: 1821, endYear: 1850, dynasty: "清", emperor: "清宣宗旻宁" },
    { name: "咸丰", startYear: 1851, endYear: 1861, dynasty: "清", emperor: "清文宗奕詝" },
    { name: "同治", startYear: 1862, endYear: 1874, dynasty: "清", emperor: "清穆宗载淳" },
    { name: "光绪", startYear: 1875, endYear: 1908, dynasty: "清", emperor: "清德宗载湉" },
    { name: "宣统", startYear: 1909, endYear: 1911, dynasty: "清", emperor: "清宣统帝溥仪" },
    
    // Late Qing Alternative Regimes (Rebellions and Rival Governments)
    { name: "天朝", startYear: 1851, endYear: 1864, dynasty: "太平天国", emperor: "洪秀全", isAlternateRegime: true },
    { name: "天京", startYear: 1853, endYear: 1864, dynasty: "太平天国", emperor: "洪秀全", isAlternateRegime: true },
    { name: "天国", startYear: 1851, endYear: 1864, dynasty: "太平天国", emperor: "洪秀全", isAlternateRegime: true },
    { name: "长生", startYear: 1859, endYear: 1863, dynasty: "捻军", emperor: "张乐行", isAlternateRegime: true },
    { name: "乾宁", startYear: 1858, endYear: 1872, dynasty: "平定回乱", emperor: "杜文秀", isAlternateRegime: true },
    { name: "甲寅", startYear: 1854, endYear: 1855, dynasty: "小刀会", emperor: "刘丽川", isAlternateRegime: true },
    { name: "咸同", startYear: 1860, endYear: 1865, dynasty: "捻军", emperor: "张乐行", isAlternateRegime: true },
    
    // Early Republican Period (1912-1928)
    { name: "中华民国临时政府", startYear: 1912, endYear: 1912, dynasty: "中华民国", emperor: "孙中山" },
    { name: "中华民国", startYear: 1912, endYear: 3999, dynasty: "中华民国", emperor: "孙中山(1912), 袁世凯(1912-1916), 黎元洪(1916-1917), 冯国璋(1917-1918), 徐世昌(1918-1922), 曹锟(1923-1924), 段祺瑞(1924-1926), 蒋介石(1928-1949)" },
    
    // Special Republican Period Regimes
    { name: "洪宪", startYear: 1915, endYear: 1916, dynasty: "中华帝国", emperor: "袁世凯", isAlternateRegime: true },
    { name: "北洋政府时期", startYear: 1912, endYear: 1928, dynasty: "中华民国", emperor: "袁世凯、黎元洪、冯国璋、徐世昌、曹锟、段祺瑞", isAlternateRegime: true },
    { name: "广州军政府", startYear: 1917, endYear: 1922, dynasty: "中华民国", emperor: "孙中山", isAlternateRegime: true },
    { name: "广东革命政府", startYear: 1923, endYear: 1925, dynasty: "中华民国", emperor: "孙中山", isAlternateRegime: true },
    { name: "国民政府", startYear: 1927, endYear: 1949, dynasty: "中华民国", emperor: "蒋介石", isAlternateRegime: true },
    
    // Major Warlord Factions
    { name: "安福系", startYear: 1918, endYear: 1920, dynasty: "北洋军阀", emperor: "徐世昌", isAlternateRegime: true },
    { name: "直系军阀", startYear: 1920, endYear: 1924, dynasty: "北洋军阀", emperor: "曹锟、吴佩孚", isAlternateRegime: true },
    { name: "皖系军阀", startYear: 1916, endYear: 1920, dynasty: "北洋军阀", emperor: "段祺瑞", isAlternateRegime: true },
    { name: "奉系军阀", startYear: 1920, endYear: 1928, dynasty: "北洋军阀", emperor: "张作霖", isAlternateRegime: true },
    { name: "粤系军阀", startYear: 1917, endYear: 1922, dynasty: "南方军阀", emperor: "陈炯明", isAlternateRegime: true },
    
    // Communist Bases
    { name: "中华苏维埃共和国", startYear: 1931, endYear: 1937, dynasty: "共产党根据地", emperor: "毛泽东", isAlternateRegime: true },
    { name: "陕甘宁边区政府", startYear: 1937, endYear: 1949, dynasty: "共产党根据地", emperor: "毛泽东", isAlternateRegime: true },
    
    // Japanese Puppet Regimes
    { name: "中华民国临时政府", startYear: 1937, endYear: 1940, dynasty: "其它日伪政权", emperor: "王克敏", isAlternateRegime: true },
    { name: "中华民国维新政府", startYear: 1938, endYear: 1940, dynasty: "其它日伪政权", emperor: "梁鸿志", isAlternateRegime: true },
    { name: "中华民国国民政府", startYear: 1940, endYear: 1945, dynasty: "汪伪政权", emperor: "汪精卫", isAlternateRegime: true },
    { name: "蒙疆联合自治政府", startYear: 1939, endYear: 1945, dynasty: "其它日伪政权", emperor: "德王", isAlternateRegime: true },
    { name: "大同", startYear: 1932, endYear: 1934, dynasty: "满洲国", emperor: "溥仪", isAlternateRegime: true },
    { name: "康德", startYear: 1934, endYear: 1945, dynasty: "满洲国", emperor: "溥仪", isAlternateRegime: true },
    
    // Post-1949 Governments
    { name: "民国(台湾)", startYear: 1912, endYear: 3999, dynasty: "中华民国(台湾)", emperor: "蒋介石(1950-1975), 严家淦(1975-1978), 蒋经国(1978-1988), 李登辉(1988-2000), 陈水扁(2000-2008), 马英九(2008-2016), 蔡英文(2016-2024), 赖清德(2024-现在)", isAlternateRegime: true },
    { name: "中华人民共和国", startYear: 1949, endYear: 2099, dynasty: "共和国", emperor: "毛泽东(1949-1976), 华国锋(1976-1978), 邓小平(1978-1989), 江泽民(1989-2002), 胡锦涛(2002-2012), 习近平(2012-现在)" },
  ]
};

export const japaneseCalendar: CalendarSystem = {
  name: "日本历",
  eras: [
    // 石器时代 (Stone Age periods)
    { name: "旧石器时代", startYear: -40000, endYear: -14000, dynasty: "史前时代", emperor: "无" },
    { name: "绳文早期", startYear: -14000, endYear: -8000, dynasty: "史前时代", emperor: "无" },
    { name: "绳文中期", startYear: -8000, endYear: -4000, dynasty: "史前时代", emperor: "无" },
    { name: "绳文晚期", startYear: -4000, endYear: -1000, dynasty: "史前时代", emperor: "无" },

    // 飛鳥時代以前 (pre-Asuka period)
    { name: "神武天皇期", startYear: -660, endYear: -585, dynasty: "神话时代", emperor: "神武天皇" },
    { name: "绵延天皇期", startYear: -581, endYear: -549, dynasty: "神话时代", emperor: "绵延天皇" },
    { name: "开化天皇期", startYear: -158, endYear: -98, dynasty: "神话时代", emperor: "开化天皇" },
    { name: "崇神天皇期", startYear: -97, endYear: -30, dynasty: "神话时代", emperor: "崇神天皇" },
    { name: "垂仁天皇期", startYear: -29, endYear: 70, dynasty: "神话时代", emperor: "垂仁天皇" },
    { name: "景行天皇期", startYear: 71, endYear: 130, dynasty: "神话时代", emperor: "景行天皇" },
    { name: "成务天皇期", startYear: 131, endYear: 190, dynasty: "神话时代", emperor: "成务天皇" },
    { name: "仲哀天皇期", startYear: 191, endYear: 200, dynasty: "神话时代", emperor: "仲哀天皇" },
    { name: "神功皇后摄政期", startYear: 201, endYear: 269, dynasty: "神话时代", emperor: "神功皇后" },
    { name: "应神天皇期", startYear: 270, endYear: 310, dynasty: "神话时代", emperor: "应神天皇" },
    { name: "仁德天皇期", startYear: 313, endYear: 399, dynasty: "古坟时代", emperor: "仁德天皇" },
    { name: "履中天皇期", startYear: 400, endYear: 405, dynasty: "古坟时代", emperor: "履中天皇" },
    { name: "反正天皇期", startYear: 406, endYear: 410, dynasty: "古坟时代", emperor: "反正天皇" },
    { name: "允恭天皇期", startYear: 412, endYear: 453, dynasty: "古坟时代", emperor: "允恭天皇" },
    { name: "安康天皇期", startYear: 454, endYear: 456, dynasty: "古坟时代", emperor: "安康天皇" },
    { name: "雄略天皇期", startYear: 457, endYear: 479, dynasty: "古坟时代", emperor: "雄略天皇" },
    { name: "清宁天皇期", startYear: 480, endYear: 484, dynasty: "古坟时代", emperor: "清宁天皇" },
    { name: "显宗天皇期", startYear: 485, endYear: 487, dynasty: "古坟时代", emperor: "显宗天皇" },
    { name: "仁贤天皇期", startYear: 488, endYear: 498, dynasty: "古坟时代", emperor: "仁贤天皇" },
    { name: "武烈天皇期", startYear: 499, endYear: 506, dynasty: "古坟时代", emperor: "武烈天皇" },
    { name: "继体天皇期", startYear: 507, endYear: 531, dynasty: "古坟时代", emperor: "继体天皇" },
    { name: "安闲天皇期", startYear: 532, endYear: 535, dynasty: "古坟时代", emperor: "安闲天皇" },
    { name: "宣化天皇期", startYear: 536, endYear: 539, dynasty: "古坟时代", emperor: "宣化天皇" },
    { name: "钦明天皇期", startYear: 540, endYear: 571, dynasty: "古坟时代", emperor: "钦明天皇" },
    { name: "敏达天皇期", startYear: 572, endYear: 585, dynasty: "飛鳥", emperor: "敏达天皇" },
    { name: "用明天皇期", startYear: 586, endYear: 587, dynasty: "飛鳥", emperor: "用明天皇" },
    { name: "崇峻天皇期", startYear: 588, endYear: 592, dynasty: "飛鳥", emperor: "崇峻天皇" },
    { name: "推古天皇期", startYear: 593, endYear: 628, dynasty: "飛鳥", emperor: "推古天皇" },
    { name: "舒明天皇期", startYear: 629, endYear: 641, dynasty: "飛鳥", emperor: "舒明天皇" },
    { name: "皇极天皇期", startYear: 642, endYear: 645, dynasty: "飛鳥", emperor: "皇极天皇" },
    
    // Asuka period formal era names
    { name: "大化", startYear: 645, endYear: 650, dynasty: "飛鳥", emperor: "孝德天皇" },
    { name: "白雉", startYear: 650, endYear: 654, dynasty: "飛鳥", emperor: "孝德天皇" },
    { name: "斉明天皇期", startYear: 655, endYear: 661, dynasty: "飛鳥", emperor: "斉明天皇" },
    { name: "天智天皇期", startYear: 662, endYear: 671, dynasty: "飛鳥", emperor: "天智天皇" },
    { name: "弘文天皇期", startYear: 672, endYear: 672, dynasty: "飛鳥", emperor: "弘文天皇" },
    { name: "天武天皇期", startYear: 673, endYear: 686, dynasty: "飛鳥", emperor: "天武天皇" },
    { name: "朱鳥", startYear: 686, endYear: 686, dynasty: "飛鳥", emperor: "天武天皇" },
    { name: "持統天皇期", startYear: 687, endYear: 697, dynasty: "飛鳥", emperor: "持統天皇" },
    { name: "文武天皇期", startYear: 697, endYear: 707, dynasty: "飛鳥", emperor: "文武天皇" },
    { name: "大宝", startYear: 701, endYear: 704, dynasty: "飛鳥", emperor: "文武天皇" },
    { name: "慶雲", startYear: 704, endYear: 708, dynasty: "飛鳥", emperor: "元明天皇" },
    
    // 奈良時代 (Nara Period, 710-794)
    { name: "和銅", startYear: 708, endYear: 715, dynasty: "奈良", emperor: "元明天皇" },
    { name: "灵龟", startYear: 715, endYear: 717, dynasty: "奈良", emperor: "元正天皇" },
    { name: "养老", startYear: 717, endYear: 724, dynasty: "奈良", emperor: "元正天皇" },
    { name: "神亀", startYear: 724, endYear: 729, dynasty: "奈良", emperor: "圣武天皇" },
    { name: "天平", startYear: 729, endYear: 749, dynasty: "奈良", emperor: "圣武天皇" },
    { name: "天平感宝", startYear: 749, endYear: 749, dynasty: "奈良", emperor: "圣武天皇" },
    { name: "天平胜宝", startYear: 749, endYear: 757, dynasty: "奈良", emperor: "孝谦天皇" },
    { name: "天平宝字", startYear: 757, endYear: 765, dynasty: "奈良", emperor: "淳仁天皇" },
    { name: "天平神护", startYear: 765, endYear: 767, dynasty: "奈良", emperor: "称德天皇" },
    { name: "神护景云", startYear: 767, endYear: 770, dynasty: "奈良", emperor: "称德天皇" },
    { name: "宝龟", startYear: 770, endYear: 781, dynasty: "奈良", emperor: "光仁天皇" },
    { name: "天应", startYear: 781, endYear: 782, dynasty: "奈良", emperor: "桓武天皇" },
    { name: "延历", startYear: 782, endYear: 806, dynasty: "奈良/平安", emperor: "桓武天皇" },
    
    // 平安時代 (Heian Period, 794-1185)
    { name: "弘仁", startYear: 810, endYear: 824, dynasty: "平安", emperor: "嵯峨天皇" },
    { name: "天长", startYear: 824, endYear: 834, dynasty: "平安", emperor: "淳和天皇" },
    { name: "承和", startYear: 834, endYear: 848, dynasty: "平安", emperor: "仁明天皇" },
    { name: "嘉祥", startYear: 848, endYear: 851, dynasty: "平安", emperor: "文德天皇" },
    { name: "仁寿", startYear: 851, endYear: 854, dynasty: "平安", emperor: "文德天皇" },
    { name: "斉衡", startYear: 854, endYear: 857, dynasty: "平安", emperor: "文德天皇" },
    { name: "天安", startYear: 857, endYear: 859, dynasty: "平安", emperor: "清和天皇" },
    { name: "贞观", startYear: 859, endYear: 877, dynasty: "平安", emperor: "清和天皇" },
    { name: "元庆", startYear: 877, endYear: 885, dynasty: "平安", emperor: "阳成天皇" },
    { name: "仁和", startYear: 885, endYear: 889, dynasty: "平安", emperor: "光孝天皇" },
    { name: "宽平", startYear: 889, endYear: 898, dynasty: "平安", emperor: "宇多天皇" },
    { name: "昌泰", startYear: 898, endYear: 901, dynasty: "平安", emperor: "醍醐天皇" },
    { name: "延喜", startYear: 901, endYear: 923, dynasty: "平安", emperor: "醍醐天皇" },
    { name: "延长", startYear: 923, endYear: 931, dynasty: "平安", emperor: "朱雀天皇" },
    { name: "承平", startYear: 931, endYear: 938, dynasty: "平安", emperor: "朱雀天皇" },
    { name: "天庆", startYear: 938, endYear: 947, dynasty: "平安", emperor: "朱雀天皇" },
    { name: "天历", startYear: 947, endYear: 957, dynasty: "平安", emperor: "村上天皇" },
    { name: "天德", startYear: 957, endYear: 961, dynasty: "平安", emperor: "村上天皇" },
    { name: "应和", startYear: 961, endYear: 964, dynasty: "平安", emperor: "村上天皇" },
    { name: "康保", startYear: 964, endYear: 968, dynasty: "平安", emperor: "冷泉天皇" },
    { name: "安和", startYear: 968, endYear: 970, dynasty: "平安", emperor: "冷泉天皇" },
    { name: "天禄", startYear: 970, endYear: 973, dynasty: "平安", emperor: "円融天皇" },
    { name: "天延", startYear: 973, endYear: 976, dynasty: "平安", emperor: "円融天皇" },
    { name: "贞元", startYear: 976, endYear: 978, dynasty: "平安", emperor: "円融天皇" },
    { name: "天元", startYear: 978, endYear: 983, dynasty: "平安", emperor: "円融天皇" },
    { name: "永观", startYear: 983, endYear: 985, dynasty: "平安", emperor: "花山天皇" },
    { name: "宽和", startYear: 985, endYear: 987, dynasty: "平安", emperor: "花山天皇" },
    { name: "永延", startYear: 987, endYear: 989, dynasty: "平安", emperor: "一条天皇" },
    { name: "永祚", startYear: 989, endYear: 990, dynasty: "平安", emperor: "一条天皇" },
    { name: "正历", startYear: 990, endYear: 995, dynasty: "平安", emperor: "一条天皇" },
    { name: "长德", startYear: 995, endYear: 999, dynasty: "平安", emperor: "一条天皇" },
    { name: "长保", startYear: 999, endYear: 1004, dynasty: "平安", emperor: "一条天皇" },
    { name: "宽弘", startYear: 1004, endYear: 1012, dynasty: "平安", emperor: "一条天皇" },
    { name: "长和", startYear: 1012, endYear: 1017, dynasty: "平安", emperor: "三条天皇" },
    { name: "宽仁", startYear: 1017, endYear: 1021, dynasty: "平安", emperor: "后一条天皇" },
    { name: "治安", startYear: 1021, endYear: 1024, dynasty: "平安", emperor: "后一条天皇" },
    { name: "万寿", startYear: 1024, endYear: 1028, dynasty: "平安", emperor: "后一条天皇" },
    { name: "长元", startYear: 1028, endYear: 1037, dynasty: "平安", emperor: "后朱雀天皇" },
    { name: "长历", startYear: 1037, endYear: 1040, dynasty: "平安", emperor: "后朱雀天皇" },
    { name: "长久", startYear: 1040, endYear: 1044, dynasty: "平安", emperor: "后朱雀天皇" },
    { name: "宽德", startYear: 1044, endYear: 1046, dynasty: "平安", emperor: "后朱雀天皇" },
    { name: "永承", startYear: 1046, endYear: 1053, dynasty: "平安", emperor: "后冷泉天皇" },
    { name: "天喜", startYear: 1053, endYear: 1058, dynasty: "平安", emperor: "后冷泉天皇" },
    { name: "康平", startYear: 1058, endYear: 1065, dynasty: "平安", emperor: "后冷泉天皇" },
    { name: "治历", startYear: 1065, endYear: 1069, dynasty: "平安", emperor: "后三条天皇" },
    { name: "延久", startYear: 1069, endYear: 1074, dynasty: "平安", emperor: "后三条天皇" },
    { name: "承保", startYear: 1074, endYear: 1077, dynasty: "平安", emperor: "白河天皇" },
    { name: "承历", startYear: 1077, endYear: 1081, dynasty: "平安", emperor: "白河天皇" },
    { name: "永保", startYear: 1081, endYear: 1084, dynasty: "平安", emperor: "白河天皇" },
    { name: "应德", startYear: 1084, endYear: 1087, dynasty: "平安", emperor: "白河天皇" },
    { name: "宽治", startYear: 1087, endYear: 1094, dynasty: "平安", emperor: "白河天皇" },
    { name: "嘉保", startYear: 1094, endYear: 1096, dynasty: "平安", emperor: "堀河天皇" },
    { name: "永长", startYear: 1096, endYear: 1097, dynasty: "平安", emperor: "堀河天皇" },
    { name: "承德", startYear: 1097, endYear: 1099, dynasty: "平安", emperor: "堀河天皇" },
    { name: "康和", startYear: 1099, endYear: 1104, dynasty: "平安", emperor: "堀河天皇" },
    { name: "长治", startYear: 1104, endYear: 1106, dynasty: "平安", emperor: "堀河天皇" },
    { name: "嘉承", startYear: 1106, endYear: 1108, dynasty: "平安", emperor: "堀河天皇" },
    { name: "天仁", startYear: 1108, endYear: 1110, dynasty: "平安", emperor: "鸟羽天皇" },
    { name: "天永", startYear: 1110, endYear: 1113, dynasty: "平安", emperor: "鸟羽天皇" },
    { name: "永久", startYear: 1113, endYear: 1118, dynasty: "平安", emperor: "鸟羽天皇" },
    { name: "元永", startYear: 1118, endYear: 1120, dynasty: "平安", emperor: "鸟羽天皇" },
    { name: "保安", startYear: 1120, endYear: 1124, dynasty: "平安", emperor: "鸟羽天皇" },
    { name: "天治", startYear: 1124, endYear: 1126, dynasty: "平安", emperor: "鸟羽天皇" },
    { name: "大治", startYear: 1126, endYear: 1131, dynasty: "平安", emperor: "崇德天皇" },
    { name: "天承", startYear: 1131, endYear: 1132, dynasty: "平安", emperor: "崇德天皇" },
    { name: "长承", startYear: 1132, endYear: 1135, dynasty: "平安", emperor: "崇德天皇" },
    { name: "保延", startYear: 1135, endYear: 1141, dynasty: "平安", emperor: "崇德天皇" },
    { name: "永治", startYear: 1141, endYear: 1142, dynasty: "平安", emperor: "近卫天皇" },
    { name: "康治", startYear: 1142, endYear: 1144, dynasty: "平安", emperor: "近卫天皇" },
    { name: "天养", startYear: 1144, endYear: 1145, dynasty: "平安", emperor: "近卫天皇" },
    { name: "久安", startYear: 1145, endYear: 1151, dynasty: "平安", emperor: "近卫天皇" },
    { name: "仁平", startYear: 1151, endYear: 1154, dynasty: "平安", emperor: "近卫天皇" },
    { name: "久寿", startYear: 1154, endYear: 1156, dynasty: "平安", emperor: "后白河天皇" },
    { name: "保元", startYear: 1156, endYear: 1159, dynasty: "平安", emperor: "后白河天皇" },
    { name: "平治", startYear: 1159, endYear: 1160, dynasty: "平安", emperor: "二条天皇" },
    { name: "永历", startYear: 1160, endYear: 1161, dynasty: "平安", emperor: "二条天皇" },
    { name: "应保", startYear: 1161, endYear: 1163, dynasty: "平安", emperor: "二条天皇" },
    { name: "长宽", startYear: 1163, endYear: 1165, dynasty: "平安", emperor: "二条天皇" },
    { name: "永万", startYear: 1165, endYear: 1166, dynasty: "平安", emperor: "二条天皇" },
    { name: "仁安", startYear: 1166, endYear: 1169, dynasty: "平安", emperor: "六条天皇" },
    { name: "嘉应", startYear: 1169, endYear: 1171, dynasty: "平安", emperor: "高仓天皇" },
    { name: "承安", startYear: 1171, endYear: 1175, dynasty: "平安", emperor: "高仓天皇" },
    { name: "安元", startYear: 1175, endYear: 1177, dynasty: "平安", emperor: "高仓天皇" },
    { name: "治承", startYear: 1177, endYear: 1181, dynasty: "平安", emperor: "安德天皇" },
    { name: "养和", startYear: 1181, endYear: 1182, dynasty: "平安", emperor: "安德天皇" },
    { name: "寿永", startYear: 1182, endYear: 1184, dynasty: "平安", emperor: "后鸟羽天皇" },
    { name: "元历", startYear: 1184, endYear: 1185, dynasty: "平安", emperor: "后鸟羽天皇" },
    
    // 镰仓時代 (Kamakura Period, 1185-1333)
    { name: "文治", startYear: 1185, endYear: 1190, dynasty: "镰仓", emperor: "后鸟羽天皇" },
    { name: "建久", startYear: 1190, endYear: 1199, dynasty: "镰仓", emperor: "后鸟羽天皇" },
    { name: "正治", startYear: 1199, endYear: 1201, dynasty: "镰仓", emperor: "后鸟羽天皇" },
    { name: "建仁", startYear: 1201, endYear: 1204, dynasty: "镰仓", emperor: "后鸟羽天皇" },
    { name: "元久", startYear: 1204, endYear: 1206, dynasty: "镰仓", emperor: "后鸟羽天皇" },
    { name: "建永", startYear: 1206, endYear: 1207, dynasty: "镰仓", emperor: "后鸟羽天皇" },
    { name: "承元", startYear: 1207, endYear: 1211, dynasty: "镰仓", emperor: "顺德天皇" },
    { name: "建历", startYear: 1211, endYear: 1214, dynasty: "镰仓", emperor: "顺德天皇" },
    { name: "建保", startYear: 1214, endYear: 1219, dynasty: "镰仓", emperor: "顺德天皇" },
    { name: "承久", startYear: 1219, endYear: 1222, dynasty: "镰仓", emperor: "顺德天皇" },
    { name: "贞应", startYear: 1222, endYear: 1224, dynasty: "镰仓", emperor: "后堀河天皇" },
    { name: "元仁", startYear: 1224, endYear: 1225, dynasty: "镰仓", emperor: "后堀河天皇" },
    { name: "嘉禄", startYear: 1225, endYear: 1227, dynasty: "镰仓", emperor: "后堀河天皇" },
    { name: "安贞", startYear: 1227, endYear: 1229, dynasty: "镰仓", emperor: "后堀河天皇" },
    { name: "宽喜", startYear: 1229, endYear: 1232, dynasty: "镰仓", emperor: "后堀河天皇" },
    { name: "贞永", startYear: 1232, endYear: 1233, dynasty: "镰仓", emperor: "四条天皇" },
    { name: "天福", startYear: 1233, endYear: 1234, dynasty: "镰仓", emperor: "四条天皇" },
    { name: "文历", startYear: 1234, endYear: 1235, dynasty: "镰仓", emperor: "四条天皇" },
    { name: "嘉祯", startYear: 1235, endYear: 1238, dynasty: "镰仓", emperor: "四条天皇" },
    { name: "历仁", startYear: 1238, endYear: 1239, dynasty: "镰仓", emperor: "四条天皇" },
    { name: "延应", startYear: 1239, endYear: 1240, dynasty: "镰仓", emperor: "后嵯峨天皇" },
    { name: "仁治", startYear: 1240, endYear: 1243, dynasty: "镰仓", emperor: "后嵯峨天皇" },
    { name: "宽元", startYear: 1243, endYear: 1247, dynasty: "镰仓", emperor: "后嵯峨天皇" },
    { name: "宝治", startYear: 1247, endYear: 1249, dynasty: "镰仓", emperor: "后嵯峨天皇" },
    { name: "建长", startYear: 1249, endYear: 1256, dynasty: "镰仓", emperor: "后深草天皇" },
    { name: "康元", startYear: 1256, endYear: 1257, dynasty: "镰仓", emperor: "后深草天皇" },
    { name: "正嘉", startYear: 1257, endYear: 1259, dynasty: "镰仓", emperor: "后深草天皇" },
    { name: "正元", startYear: 1259, endYear: 1260, dynasty: "镰仓", emperor: "后深草天皇" },
    { name: "文应", startYear: 1260, endYear: 1261, dynasty: "镰仓", emperor: "龟山天皇" },
    { name: "弘长", startYear: 1261, endYear: 1264, dynasty: "镰仓", emperor: "龟山天皇" },
    { name: "文永", startYear: 1264, endYear: 1275, dynasty: "镰仓", emperor: "后宇多天皇" },
    { name: "建治", startYear: 1275, endYear: 1278, dynasty: "镰仓", emperor: "后宇多天皇" },
    { name: "弘安", startYear: 1278, endYear: 1288, dynasty: "镰仓", emperor: "后宇多天皇" },
    { name: "正应", startYear: 1288, endYear: 1293, dynasty: "镰仓", emperor: "伏见天皇" },
    { name: "永仁", startYear: 1293, endYear: 1299, dynasty: "镰仓", emperor: "伏见天皇" },
    { name: "正安", startYear: 1299, endYear: 1302, dynasty: "镰仓", emperor: "后二条天皇" },
    { name: "乾元", startYear: 1302, endYear: 1303, dynasty: "镰仓", emperor: "后二条天皇" },
    { name: "嘉元", startYear: 1303, endYear: 1306, dynasty: "镰仓", emperor: "后二条天皇" },
    { name: "德治", startYear: 1306, endYear: 1308, dynasty: "镰仓", emperor: "后二条天皇" },
    { name: "延庆", startYear: 1308, endYear: 1311, dynasty: "镰仓", emperor: "花园天皇" },
    { name: "应长", startYear: 1311, endYear: 1312, dynasty: "镰仓", emperor: "花园天皇" },
    { name: "正和", startYear: 1312, endYear: 1317, dynasty: "镰仓", emperor: "花园天皇" },
    { name: "文保", startYear: 1317, endYear: 1319, dynasty: "镰仓", emperor: "后醍醐天皇" },
    { name: "元应", startYear: 1319, endYear: 1321, dynasty: "镰仓", emperor: "后醍醐天皇" },
    { name: "元亨", startYear: 1321, endYear: 1324, dynasty: "镰仓", emperor: "后醍醐天皇" },
    { name: "正中", startYear: 1324, endYear: 1326, dynasty: "镰仓", emperor: "后醍醐天皇" },
    { name: "嘉历", startYear: 1326, endYear: 1329, dynasty: "镰仓", emperor: "后醍醐天皇" },
    { name: "元德", startYear: 1329, endYear: 1331, dynasty: "镰仓", emperor: "后醍醐天皇" },
    { name: "元弘", startYear: 1331, endYear: 1334, dynasty: "镰仓", emperor: "后醍醐天皇" },
    
    // 室町時代 (Muromachi Period, 1336-1573)
    { name: "建武", startYear: 1334, endYear: 1338, dynasty: "室町", emperor: "后醍醐天皇" },
    { name: "延元", startYear: 1336, endYear: 1340, dynasty: "室町/南朝", emperor: "后醍醐天皇", isAlternateRegime: true },
    { name: "兴国", startYear: 1340, endYear: 1347, dynasty: "室町/南朝", emperor: "后村上天皇", isAlternateRegime: true },
    { name: "正平", startYear: 1347, endYear: 1370, dynasty: "室町/南朝", emperor: "后村上天皇", isAlternateRegime: true },
    { name: "建德", startYear: 1370, endYear: 1372, dynasty: "室町/南朝", emperor: "长庆天皇", isAlternateRegime: true },
    { name: "文中", startYear: 1372, endYear: 1375, dynasty: "室町/南朝", emperor: "长庆天皇", isAlternateRegime: true },
    { name: "天授", startYear: 1375, endYear: 1381, dynasty: "室町/南朝", emperor: "长庆天皇", isAlternateRegime: true },
    { name: "弘和", startYear: 1381, endYear: 1384, dynasty: "室町/南朝", emperor: "长庆天皇", isAlternateRegime: true },
    { name: "元中", startYear: 1384, endYear: 1392, dynasty: "室町/南朝", emperor: "后亀山天皇", isAlternateRegime: true },
    
    { name: "暦应", startYear: 1338, endYear: 1342, dynasty: "室町/北朝", emperor: "光明天皇" },
    { name: "康永", startYear: 1342, endYear: 1345, dynasty: "室町/北朝", emperor: "光明天皇" },
    { name: "贞和", startYear: 1345, endYear: 1350, dynasty: "室町/北朝", emperor: "光明天皇" },
    { name: "观应", startYear: 1350, endYear: 1352, dynasty: "室町/北朝", emperor: "崇光天皇" },
    { name: "文和", startYear: 1352, endYear: 1356, dynasty: "室町/北朝", emperor: "后光严天皇" },
    { name: "延文", startYear: 1356, endYear: 1361, dynasty: "室町/北朝", emperor: "后光严天皇" },
    { name: "康安", startYear: 1361, endYear: 1362, dynasty: "室町/北朝", emperor: "后光严天皇" },
    { name: "贞治", startYear: 1362, endYear: 1368, dynasty: "室町/北朝", emperor: "后光严天皇" },
    { name: "应安", startYear: 1368, endYear: 1375, dynasty: "室町/北朝", emperor: "后円融天皇" },
    { name: "永和", startYear: 1375, endYear: 1379, dynasty: "室町/北朝", emperor: "后円融天皇" },
    { name: "康历", startYear: 1379, endYear: 1381, dynasty: "室町/北朝", emperor: "后円融天皇" },
    { name: "永德", startYear: 1381, endYear: 1384, dynasty: "室町/北朝", emperor: "后円融天皇" },
    { name: "至德", startYear: 1384, endYear: 1387, dynasty: "室町/北朝", emperor: "后小松天皇" },
    { name: "嘉庆", startYear: 1387, endYear: 1389, dynasty: "室町/北朝", emperor: "后小松天皇" },
    { name: "康応", startYear: 1389, endYear: 1390, dynasty: "室町/北朝", emperor: "后小松天皇" },
    { name: "明德", startYear: 1390, endYear: 1394, dynasty: "室町/北朝", emperor: "后小松天皇" },
    
    // 南北朝合一后
    { name: "応永", startYear: 1394, endYear: 1428, dynasty: "室町", emperor: "后小松天皇" },
    { name: "正长", startYear: 1428, endYear: 1429, dynasty: "室町", emperor: "称光天皇" },
    { name: "永享", startYear: 1429, endYear: 1441, dynasty: "室町", emperor: "后花园天皇" },
    { name: "嘉吉", startYear: 1441, endYear: 1444, dynasty: "室町", emperor: "后花园天皇" },
    { name: "文安", startYear: 1444, endYear: 1449, dynasty: "室町", emperor: "后花园天皇" },
    { name: "宝德", startYear: 1449, endYear: 1452, dynasty: "室町", emperor: "后花园天皇" },
    { name: "享德", startYear: 1452, endYear: 1455, dynasty: "室町", emperor: "后花园天皇" },
    { name: "康正", startYear: 1455, endYear: 1457, dynasty: "室町", emperor: "后花园天皇" },
    { name: "长禄", startYear: 1457, endYear: 1460, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "宽正", startYear: 1460, endYear: 1466, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "文正", startYear: 1466, endYear: 1467, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "应仁", startYear: 1467, endYear: 1469, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "文明", startYear: 1469, endYear: 1487, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "长享", startYear: 1487, endYear: 1489, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "延德", startYear: 1489, endYear: 1492, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "明应", startYear: 1492, endYear: 1501, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "文龟", startYear: 1501, endYear: 1504, dynasty: "室町", emperor: "后土御门天皇" },
    { name: "永正", startYear: 1504, endYear: 1521, dynasty: "室町", emperor: "后柏原天皇" },
    { name: "大永", startYear: 1521, endYear: 1528, dynasty: "室町", emperor: "后柏原天皇" },
    { name: "享禄", startYear: 1528, endYear: 1532, dynasty: "室町", emperor: "后奈良天皇" },
    { name: "天文", startYear: 1532, endYear: 1555, dynasty: "室町", emperor: "后奈良天皇" },
    { name: "弘治", startYear: 1555, endYear: 1558, dynasty: "室町", emperor: "后奈良天皇" },
    { name: "永禄", startYear: 1558, endYear: 1570, dynasty: "室町", emperor: "正亲町天皇" },
    { name: "元亀", startYear: 1570, endYear: 1573, dynasty: "室町", emperor: "正亲町天皇" },
    
    // 安土桃山時代 (Azuchi-Momoyama Period, 1573-1603)
    { name: "天正", startYear: 1573, endYear: 1592, dynasty: "安土桃山", emperor: "正亲町天皇" },
    { name: "文禄", startYear: 1592, endYear: 1596, dynasty: "安土桃山", emperor: "后阳成天皇" },
    { name: "庆长", startYear: 1596, endYear: 1615, dynasty: "安土桃山/江户", emperor: "后阳成天皇" },
    
    // 江戶時代 (Edo Period, 1603-1868)
    { name: "元和", startYear: 1615, endYear: 1624, dynasty: "江户", emperor: "后水尾天皇" },
    { name: "宽永", startYear: 1624, endYear: 1644, dynasty: "江户", emperor: "后水尾天皇" },
    { name: "正保", startYear: 1644, endYear: 1648, dynasty: "江户", emperor: "后光明天皇" },
    { name: "庆安", startYear: 1648, endYear: 1652, dynasty: "江户", emperor: "后光明天皇" },
    { name: "承应", startYear: 1652, endYear: 1655, dynasty: "江户", emperor: "后光明天皇" },
    { name: "明历", startYear: 1655, endYear: 1658, dynasty: "江户", emperor: "后光明天皇" },
    { name: "万治", startYear: 1658, endYear: 1661, dynasty: "江户", emperor: "后西天皇" },
    { name: "宽文", startYear: 1661, endYear: 1673, dynasty: "江户", emperor: "霊元天皇" },
    { name: "延宝", startYear: 1673, endYear: 1681, dynasty: "江户", emperor: "霊元天皇" },
    { name: "天和", startYear: 1681, endYear: 1684, dynasty: "江户", emperor: "霊元天皇" },
    { name: "贞享", startYear: 1684, endYear: 1688, dynasty: "江户", emperor: "霊元天皇" },
    { name: "元禄", startYear: 1688, endYear: 1704, dynasty: "江户", emperor: "东山天皇" },
    { name: "宝永", startYear: 1704, endYear: 1711, dynasty: "江户", emperor: "东山天皇" },
    { name: "正德", startYear: 1711, endYear: 1716, dynasty: "江户", emperor: "中御门天皇" },
    { name: "享保", startYear: 1716, endYear: 1736, dynasty: "江户", emperor: "中御门天皇" },
    { name: "元文", startYear: 1736, endYear: 1741, dynasty: "江户", emperor: "樱町天皇" },
    { name: "宽保", startYear: 1741, endYear: 1744, dynasty: "江户", emperor: "樱町天皇" },
    { name: "延享", startYear: 1744, endYear: 1748, dynasty: "江户", emperor: "樱町天皇" },
    { name: "宽延", startYear: 1748, endYear: 1751, dynasty: "江户", emperor: "樱町天皇" },
    { name: "宝历", startYear: 1751, endYear: 1764, dynasty: "江户", emperor: "桃园天皇" },
    { name: "明和", startYear: 1764, endYear: 1772, dynasty: "江户", emperor: "后樱町天皇" },
    { name: "安永", startYear: 1772, endYear: 1781, dynasty: "江户", emperor: "后樱町天皇" },
    { name: "天明", startYear: 1781, endYear: 1789, dynasty: "江户", emperor: "光格天皇" },
    { name: "宽政", startYear: 1789, endYear: 1801, dynasty: "江户", emperor: "光格天皇" },
    { name: "享和", startYear: 1801, endYear: 1804, dynasty: "江户", emperor: "光格天皇" },
    { name: "文化", startYear: 1804, endYear: 1818, dynasty: "江户", emperor: "光格天皇" },
    { name: "文政", startYear: 1818, endYear: 1830, dynasty: "江户", emperor: "仁孝天皇" },
    { name: "天保", startYear: 1830, endYear: 1844, dynasty: "江户", emperor: "仁孝天皇" },
    { name: "弘化", startYear: 1844, endYear: 1848, dynasty: "江户", emperor: "孝明天皇" },
    { name: "嘉永", startYear: 1848, endYear: 1854, dynasty: "江户", emperor: "孝明天皇" },
    { name: "安政", startYear: 1854, endYear: 1860, dynasty: "江户", emperor: "孝明天皇" },
    { name: "万延", startYear: 1860, endYear: 1861, dynasty: "江户", emperor: "孝明天皇" },
    { name: "文久", startYear: 1861, endYear: 1864, dynasty: "江户", emperor: "孝明天皇" },
    { name: "元治", startYear: 1864, endYear: 1865, dynasty: "江户", emperor: "孝明天皇" },
    { name: "庆应", startYear: 1865, endYear: 1868, dynasty: "江户", emperor: "明治天皇" },
    
    // 近代 (Modern Period, 1868-)
    { name: "明治", startYear: 1868, endYear: 1912, dynasty: "近代日本", emperor: "明治天皇" },
    { name: "大正", startYear: 1912, endYear: 1926, dynasty: "近代日本", emperor: "大正天皇" },
    { name: "昭和", startYear: 1926, endYear: 1989, dynasty: "近代日本", emperor: "昭和天皇" },
    { name: "平成", startYear: 1989, endYear: 2019, dynasty: "现代日本", emperor: "明仁天皇" },
    { name: "令和", startYear: 2019, endYear: 2099, dynasty: "现代日本", emperor: "德仁天皇" },
  ]
};

// Western calendar is simply Gregorian, but we'll define it to be consistent
export const westernCalendar: CalendarSystem = {
  name: "西历",
  eras: [
    { name: "公元前", startYear: -3000, endYear: -1 }, // Before Common Era (BCE)
    { name: "公元", startYear: 1, endYear: 3999 },     // Common Era (CE)
  ]
};

// Helper function to find era by Western year
export function findEraByWesternYear(calendar: CalendarSystem, year: number): EraInfo[] {
  // Handle the special case: year 0 doesn't exist in the Gregorian calendar
  if (year === 0) {
    return [];
  }
  return calendar.eras.filter(era => year >= era.startYear && year <= era.endYear) || [];
}

// Helper function to convert to Chinese year within era
export function convertToChineseYear(westernYear: number): string {
  // Handle the special case: year 0 doesn't exist in the Gregorian calendar
  if (westernYear === 0) {
    return "公元0年不存在";
  }

  const eras = findEraByWesternYear(chineseCalendar, westernYear);
  if (eras.length === 0) return "未知年号";
  
  let result = "";
  eras.forEach((era, index) => {
    // For dynasties that don't use era names but use the dynasty name directly
    if (["夏", "商", "周", "东周", "秦"].includes(era.dynasty || "")) {
      // For pre-Qin dynasty periods, typically we just use the dynasty name
      const yearWithinEra = westernYear - era.startYear + 1;
      const yearText = `${era.name}${yearWithinEra}年`;
      result += index === 0 ? yearText : ` / ${yearText}`;
    } else {
      const yearWithinEra = westernYear - era.startYear + 1;
      const yearText = `${era.name}${yearWithinEra}年`;
      result += index === 0 ? yearText : ` / ${yearText}`;
    }
  });
  
  // Add BCE/CE indicator
  if (westernYear < 0) {
    result += ` (公元前${Math.abs(westernYear)}年)`;
  }
  
  return result;
}

// Helper function to convert to Japanese year within era
export function convertToJapaneseYear(westernYear: number): string {
  // Handle the special case: year 0 doesn't exist in the Gregorian calendar
  if (westernYear === 0) {
    return "公元0年不存在";
  }

  const eras = findEraByWesternYear(japaneseCalendar, westernYear);
  if (eras.length === 0) return "未知年号";
  
  let result = "";
  eras.forEach((era, index) => {
    const yearWithinEra = westernYear - era.startYear + 1;
    const yearText = `${era.name}${yearWithinEra}年`;
    result += index === 0 ? yearText : ` / ${yearText}`;
  });
  
  // Add BCE/CE indicator
  if (westernYear < 0) {
    result += ` (公元前${Math.abs(westernYear)}年)`;
  }
  
  return result;
}

// Helper function to get Western year from era and year within era
export function getWesternYear(calendar: CalendarSystem, eraName: string, yearWithinEra: number): number | null {
  // Find the era by name - this could be ambiguous if multiple eras have the same name
  const matchingEras = calendar.eras.filter(e => e.name === eraName);
  
  // If there's only one match, use it directly
  if (matchingEras.length === 1) {
    const era = matchingEras[0];
    return era.startYear + yearWithinEra - 1;
  }
  
  // If there are multiple matches with the same name, we need more context
  // For now, we'll use the first one, but ideally, we should use a composite key
  if (matchingEras.length > 1) {
    console.warn(`Multiple eras found with name ${eraName}. Using the first match.`);
    const era = matchingEras[0];
    return era.startYear + yearWithinEra - 1;
  }
  
  return null;
} 