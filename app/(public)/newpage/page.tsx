import React from 'react';
import { BookOpen, Users, Award, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

// 模擬數據：將原本的「商品」包裝成「學程」
const featuredPrograms = [
  {
    id: 1,
    category: "AI & Business Integration",
    title: "AI 商業應用與自動化實戰證書",
    enTitle: "Professional Certificate in AI Business Integration",
    level: "進階 Level 3",
    hours: "30 小時",
    tags: ["NITTP 資助", "企業實戰"],
    image: "/images/course-ai-business.jpg", // 假設路徑
  },
  {
    id: 2,
    category: "Data Science",
    title: "Python 數據分析與視覺化大師班",
    enTitle: "Masterclass in Python for Data Analytics",
    level: "入門至中階",
    hours: "24 小時",
    tags: ["數據驅動", "零基礎可"],
    image: "/images/course-python.jpg",
  },
  {
    id: 3,
    category: "Corporate Training",
    title: "企業資安意識與防護培訓",
    enTitle: "Corporate Cybersecurity Awareness Training",
    level: "企業內訓",
    hours: "客製化",
    tags: ["員工必修", "風險管理"],
    image: "/images/course-security.jpg",
  }
];

const stats = [
  { label: "企業合作夥伴", value: "50+" },
  { label: "培訓學員", value: "2,000+" },
  { label: "資助申請成功率", value: "95%" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* 1. Hero Section: 學院氣場，非促銷廣告 */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern-grid.png')]"></div> {/* 背景紋理 */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>NITTP 政府資助認可培訓機構</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              引領企業 <span className="text-blue-400">科技轉型</span><br />
              培育未來 <span className="text-blue-400">數位人才</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              ITE 專注於將前沿科技轉化為可落地的商業技能。從 AI 應用到數據科學，我們提供的不僅是課程，而是企業升級的解決方案。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition flex items-center gap-2">
                瀏覽專業學程 <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border border-slate-500 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold transition">
                企業培訓諮詢
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 數據信任條: 建立權威感 */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {stats.map((stat, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <div className="text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 核心學程展示: 卡片設計去電商化 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Academic Programs</h2>
              <h3 className="text-3xl font-bold text-slate-900">重點專業學程</h3>
            </div>
            <a href="/courses" className="hidden md:flex items-center text-slate-600 hover:text-blue-600 font-medium transition">
              查看所有課程 <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <div key={program.id} className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* 圖片區塊: 加上漸層遮罩，更有質感 */}
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent z-10"></div>
                  {/* <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" /> */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* 內容區塊: 像 Syllabus 而不像 Product Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition">
                    {program.title}
                  </h4>
                  <p className="text-sm text-slate-500 mb-4 font-medium">
                    {program.enTitle}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.tags.map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-slate-500">
                      <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {program.level}</span>
                      <span className="flex items-center gap-1">⏱ {program.hours}</span>
                    </div>
                  </div>
                  
                  {/* 按鈕: 強調「招生」而非「購買」 */}
                  <button className="mt-5 w-full py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition">
                    查看課程大綱
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button className="text-blue-600 font-semibold">查看所有課程 &rarr;</button>
          </div>
        </div>
      </section>

      {/* 4. 為什麼選擇我們: 強調教育理念 */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">不僅是培訓，更是<br/>職涯發展的加速器</h2>
              <div className="space-y-6">
                {[
                  { title: "實戰導向 (Project-Based)", desc: "拒絕紙上談兵，所有課程均包含真實商業案例演練。" },
                  { title: "官方認證導師", desc: "導師團隊均具備 10 年以上行業經驗及相關專業資格。" },
                  { title: "NITTP 資助支援", desc: "協助企業及個人申請政府培訓資助，最高可獲 2/3 學費補貼。" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 這裡可以放一張教學現場或導師指導的照片 */}
            <div className="bg-slate-200 rounded-2xl h-100 w-full relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                 [教學現場情境圖 / 企業培訓合照]
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA: 專業諮詢 */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">準備好提升團隊的數位競爭力了嗎？</h2>
          <p className="text-blue-100 mb-8 text-lg">
            無論是個人進修或企業包班，我們的教育顧問都能為您量身打造學習路徑。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition">
               預約課程諮詢
             </button>
             <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
               下載 2026 課程手冊
             </button>
          </div>
        </div>
      </section>

    </main>
  );
}
