'use client';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, User, Bell, FileText, Award, LogOut, Menu, X } from 'lucide-react';

type StudentLayoutProps = {
  children: ReactNode;
};

export default function StudentLayout({ children }: StudentLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const studentMenu = [
    { label: '我的課程', eng: 'My Courses', href: '/student/courses', icon: <BookOpen size={20} /> },
    { label: '個人資料', eng: 'Profile', href: '/student/profile', icon: <User size={20} /> },
    { label: '學院資訊', eng: 'Notices', href: '/student/notices', icon: <Bell size={20} /> },
    { label: '發票 & 收據', eng: 'Invoice & Receipt', href: '/student/invoices', icon: <FileText size={20} /> },
    { label: '課程證書', eng: 'Certificates', href: '/student/certificates', icon: <Award size={20} /> },
  ];

  return (
    <>
      {/* 頂部全域Navbar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[5vh] items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-slate-900">InnoTrendEDU</Link>
              <span className="ml-3 text-sm text-gray-500">｜學生平台</span>
            </div>
            <div className="md:hidden">
              <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
                <Menu size={24}/>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[95vh] bg-gray-50">
        {/* Mobile 遮罩 */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}

        {/* 側邊導航 */}
        <aside
          className={`fixed md:static z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          h-[95vh]`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">學生後台</p>
                <p className="text-xs text-gray-500">Student Portal</p>
              </div>
              <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* 選單區域可滾動，避免小畫面被登出按鈕擋住 */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {studentMenu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-blue-50 ${
                    pathname === item.href
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-700 hover:text-slate-500'
                  }`}
                >
                  {item.icon}
                  <div>
                    <span className="block">{item.label}</span>
                    <span className="text-xs text-gray-400">{item.eng}</span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* mt-auto 確保電腦版永遠貼底 */}
            <div className="mt-auto p-4 border-t border-gray-100">
              <Link href="/" className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-red-50 text-red-600">
                <LogOut size={20} />
                <span>登出 Logout</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* 主內容區 */}
        <div className="flex-1 flex flex-col overflow-auto">
          <main className="flex-1 p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
