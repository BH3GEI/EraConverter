import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "历史年份转换器",
  description: "中国历、日本历与西历之间的年份转换工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${notoSans.variable} ${notoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
