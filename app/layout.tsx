import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sc",
});

export const metadata: Metadata = {
  title: "住厦来 — 五折租房补贴提醒",
  description:
    "厦门五折租房补贴一笔都别漏！输入你的信息，自动生成5年补贴时间线，一键添加日历提醒。",
  openGraph: {
    title: "住厦来 — 五折租房补贴提醒",
    description: "厦门五折租房补贴一笔都别漏！自动生成补贴时间线 + 日历提醒",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
