import type { Metadata } from 'next';
import CoursesFilterClient from './CoursesFilterClient';
import { Award, ArrowDown } from 'lucide-react';
import Nav from '@/components/Nav';

// SEO Meta
export const metadata: Metadata = {
  title: '專業科技課程｜InnoTrendEDU 宏業教育中心',
  description: 'ITE 提供AI商業應用、Python數據分析、資安CISSP、全端Web開發專業課程，NITTP資助、CEF持續進修基金認可培訓。',
  keywords: ['AI課程', 'Python數據分析', 'CISSP備考班', 'NITTP資助課程','香港科技培訓'],
};

// 原始課程資料放在Server，傳入client component
const allCourses = [
  {
    id: 1,
    title: "AI 商業應用與自動化實戰證書",
    enTitle: "Professional Certificate in AI Business Integration",
    category: "AI & Automation",
    level: "Advanced Level 3",
    duration: "30 小時",
    mode: "實體 / Zoom",
    startDate: "2024-05-15",
    tags: ["NITTP 資助", "持續進修基金 CEF"],
    description: "專為企業管理層設計，深入解析如何將 Generative AI 導入業務流程，涵蓋 Prompt Engineering 與自動化工作流。",
    isFeatured: true
  },
  {
    id: 2,
    title: "Python 數據分析與視覺化大師班",
    enTitle: "Masterclass in Python for Data Analytics",
    category: "Data Science",
    level: "Beginner to Intermediate",
    duration: "24 小時",
    mode: "實體課",
    startDate: "2024-06-01",
    tags: ["QF 認可", "企業包班熱門"],
    description: "從零開始掌握 Python 語法，學習 Pandas 數據處理與 Matplotlib 視覺化，建立數據驅動決策能力。",
    isFeatured: false
  },
  {
    id: 3,
    title: "CISSP 資訊安全系統專家備考班",
    enTitle: "CISSP Exam Preparation Course",
    category: "Cybersecurity",
    level: "Expert Level",
    duration: "40 小時",
    mode: "混合模式",
    startDate: "2024-07-10",
    tags: ["國際認證", "高階職位必備"],
    description: "針對 (ISC)² CISSP 認證考試的八大領域進行深度剖析，協助學員考取資安界黃金證書。",
    isFeatured: false
  },
  {
    id: 4,
    title: "全端 Web 開發實戰營 (React + Node.js)",
    enTitle: "Full-Stack Web Development Bootcamp",
    category: "Software Engineering",
    level: "Intermediate",
    duration: "60 小時",
    mode: "實體課",
    startDate: "2024-05-20",
    tags: ["作品集導向", "就業支援"],
    description: "打造真實電商專案，掌握現代前端框架 React 與後端 Node.js 架構，適合轉職工程師人士。",
    isFeatured: true
  }
];

// 篩選選項常量
const filterOptions = {
  categories: ["AI & Automation", "Data Science", "Cybersecurity", "Software Engineering"],
  levels: ["Beginner", "Intermediate", "Advanced", "Expert"],
  fundingTags: ["NITTP 政府資助", "CEF 持續進修基金", "RTTP 科技券", "官方認證"],
  modes: ["實體課", "Zoom 直播", "混合模式"]
};

export default function CoursesPage() {
  return (
    <>
    <Nav/>
    <main className="min-h-screen font-sans text-slate-800 pb-20">
      {/* Hero Section */}
      {/* <section className="relative bg-slate-900 text-white py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern-grid.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 pl-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>NITTP 政府資助認可培訓機構</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6 tracking-tight">
              引領企業 <span className="text-blue-400">科技轉型</span><br />
              培育未來 <span className="text-blue-400">數位人才</span>
            </h1>
            <p className="text-sm md:text-md text-slate-300 mb-5 leading-relaxed max-w-2xl">
              ITE 專注於將前沿科技轉化為可落地的商業技能。從 AI 應用到數據科學，我們提供的不僅是課程，而是企業升級的解決方案。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold transition flex items-center gap-2">
                滑動瀏覽專業學程 <ArrowDown className="w-5 h-5" />
              </button>
              <button className="bg-transparent border border-slate-500 hover:bg-slate-800 text-white px-8 py-2 rounded-lg font-semibold transition">
                企業培訓諮詢
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container mx-auto px-6 py-10">
        <CoursesFilterClient
          courseList={allCourses}
          filterOpts={filterOptions}
        />
      </div>
    </main>
    </>
  );
}
