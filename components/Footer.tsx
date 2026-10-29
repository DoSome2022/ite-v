'use client';
import { Smartphone, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ITEFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* 頁腳 */}
      <footer className="bg-white text-slate-900 py-12 border-t border-slate-200 mx-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-start">
              <Image
                src="/Logo.png"
                width={80}
                height={80}
                alt="ITE Logo"
                className="mr-5"
              />
            </div>

            <div>
              <h4 className="font-medium mb-4">Information</h4>
              <div>
                <Link href="/courses">
                  <div className="text-left mb-2">
                    <span className="block text-sm font-medium text-slate-500">COURSE</span>
                    <span className="block text-xs text-slate-800">課程總覽</span>
                  </div>
                </Link>
                <Link href="/news">
                  <div className="text-left mb-2">
                    <span className="block text-sm font-medium text-slate-500">NEWS</span>
                    <span className="block text-xs text-slate-800">最新消息</span>
                  </div>
                </Link>
                <Link href="/ourteam">
                  <div className="text-left mb-2">
                    <span className="block text-sm font-medium text-slate-500">OUR TEAM</span>
                    <span className="block text-xs text-slate-800">教育團隊</span>
                  </div>
                </Link>
                <Link href="/about">
                  <div className="text-left mb-2">
                    <span className="block text-sm font-medium text-slate-500">About Us</span>
                    <span className="block text-xs text-slate-800">關於我們</span>
                  </div>
                </Link>
                <Link href="/privacy-policy">
                  <div className="text-left mb-2">
                    <span className="block text-sm font-medium text-slate-500">Privacy Policy</span>
                    <span className="block text-xs text-slate-800">隱私政策</span>
                  </div>
                </Link>
                <Link href="/complaint-form">
                  <div className="text-left mb-2">
                    <span className="block text-sm font-medium text-slate-500">Complaint form</span>
                    <span className="block text-xs text-slate-800">投訴表格</span>
                  </div>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contacts</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <Mail size={16} />
                  <span className="ml-2">info@ite.edu.hk</span>
                </li>
                <li className="flex items-center">
                  <Smartphone size={16} />
                  <span className="ml-2">5100 1888</span>
                </li>
                <li className="flex items-center">
                  <Phone size={16} />
                  <span className="ml-2">3163 9569</span>
                </li>
                <li>Flat B, 7/F, Sun Shine Centre, 61-63 Portland Street, Yau Ma Tei, Kln.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Social Media</h4>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/InnoTechEDU/?locale=zh_HK">
                  <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center hover:bg-cyan-700 hover:text-white transition-colors">
                    <Facebook size={16} />
                  </button>
                </Link>
                <Link href="https://www.instagram.com/innotechedu/">
                  <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center hover:bg-cyan-700 hover:text-white transition-colors">
                    <Instagram size={16} />
                  </button>
                </Link>
                <Link href="https://www.linkedin.com/company/innovation-trend-education-centre/">
                  <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center hover:bg-cyan-700 hover:text-white transition-colors">
                    <Linkedin size={16} />
                  </button>
                </Link>
                <Link href="https://www.youtube.com/@InnovationTrendEducation">
                  <button className="w-8 h-8 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center hover:bg-cyan-700 hover:text-white transition-colors">
                    <Youtube size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-8 pt-5 text-center text-slate-500 text-sm">
            © {currentYear} All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
}
