'use client';
import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, MessageSquare, Clock, LogOut, Menu, X } from 'lucide-react';

type TutorLayoutProps = {
  children: ReactNode;
};

export default function TutorLayout({ children }: TutorLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const tutorMenu = [
    { label: '課程點名', eng: 'Attendance', href: '/tutor/attendance', icon: <ClipboardList size={20} /> },
    { label: '學生評語', eng: 'Student Comment', href: '/tutor/comments', icon: <MessageSquare size={20} /> },
    { label: '教學計鐘', eng: 'Teaching Hour Log', href: '/tutor/hourlog', icon: <Clock size={20} /> },
  ];

  return (
    <>
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[5vh] items-center">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-slate-900">InnoTrendEDU</Link>
              <span className="ml-3 text-sm text-gray-500">｜導師平台</span>
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
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}
        <aside
          className={`fixed md:static z-50 w-64 bg-white border-r border-gray-200 transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            h-[95vh]`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">導師後台</p>
                <p className="text-xs text-gray-500">Tutor Portal</p>
              </div>
              <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
              {tutorMenu.map((item) => (
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
        <div className="flex-1 flex flex-col overflow-auto">
          <main className="flex-1 p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
