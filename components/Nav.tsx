"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ITELOGO from "@/public/Logo.png";

const publicNavItems = [
  { name: "企業培訓", engname: "Corporate", href: "/corporate" },
  { name: "個人進修", engname: "Course", href: "/courses" },
  { name: "最新消息", engname: "News", href: "/news" },
  { name: "教育團隊", engname: "Team", href: "/ourteam" },
  { name: "關於我們", engname: "About", href: "/about" },
  { name: "聯絡我們", engname: "Contact", href: "/contact" },
  { name: "學生登錄", engname: "Student Login", href: "/login" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Logo 固定指向首頁 /corporate
  const logoHref = "/";

  return (
    <>
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm z-49">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href={logoHref} className="text-xl font-bold">
                <Image
                  src={ITELOGO}
                  alt="ITE Logo"
                  width={50}
                  height={20}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* 桌面版導航 */}
            <div className="hidden md:flex items-center space-x-4">
              {publicNavItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <div className="text-left text-sm font-medium text-gray-700 hover:text-blue-700 ">
                      <span className="block">{item.engname}</span>
                      <span className="block">{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* 移動版菜單按鈕 */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-300"
              >
                <span className="sr-only">開啟主菜單</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 移動版菜單 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {publicNavItems.map((item) => {
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
