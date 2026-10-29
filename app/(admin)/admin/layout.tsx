'use client';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ListChecks, BookOpen, Users, Calendar, FileText, LogOut, Menu, X, DollarSign } from 'lucide-react';

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const adminMenu = [
    { label: '報名列表', eng: 'Application List', href: '/admin/applications', icon: <ListChecks size={20} /> },
    { label: '課程管理 / 建立小冊子', eng: 'Course & Brochure', href: '/admin/courses', icon: <BookOpen size={20} /> },
    { label: '開班管理', eng: 'Class Batch', href: '/admin/batches', icon: <Calendar size={20} /> },
    { label: '學生帳號管理', eng: 'Student Account', href: '/admin/students', icon: <Users size={20} /> },
    { label: '導師薪金', eng: 'Tutor Payroll', href: '/admin/tutor-payroll', icon: <DollarSign size={20} /> },

  ];

  return (
    <>
      {/* 頂部全域Navbar */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[5vh] items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-slate-900">InnoTrendEDU</Link>
              <span className="ml-3 text-sm text-gray-500">｜管理後台</span>
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
                <p className="font-bold text-gray-800">管理後台</p>
                <p className="text-xs text-gray-500">Admin Portal</p>
              </div>
              <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {adminMenu.map((item) => (
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
