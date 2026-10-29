// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InnoTrendEDU｜香港企業科技培訓｜NITTP資助AI及數據分析課程",
  description: "InnoTrendEDU提供香港企業科技培訓、中小企數碼轉型服務，NITTP資助課程，包含企業AI培訓、數據分析課程、網絡安全培訓；同時設個人AI課程、數據分析入門公開班。",
  keywords: ["香港企業科技培訓","NITTP資助課程","企業AI培訓","企業數據分析課程","網絡安全培訓","中小企數碼轉型","AI課程香港","數據分析入門課程","個人進修課程","企業客製化培訓"],
  openGraph: {
    title: "InnoTrendEDU｜香港企業科技培訓｜NITTP資助課程",
    description: "企業與個人科技進修，實戰導向AI、數據分析、網絡安全培訓",
    locale: "zh_HK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
