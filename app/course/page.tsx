'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import {
  Brain,
  Calendar,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  Briefcase,
  PlayCircle,
  CheckCircle,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';

// 类型定义
type CourseDifficulty = '初級' | '中級' | '高級' | '專業級';
type Semester = {
  id: string;
  name: string;
  dates: string[];
  startTime: string;
  endTime: string;
};
interface CourseDetail {
  id: string;
  title: string;
  difficulty: CourseDifficulty;
  icon: React.ReactNode;
  totalHours: number;
  price: number;
  videoUrl: string;
  description: string;
  semesters: Semester[];
  fitFor: string;
  roi: string;
  career: string;
  highlights: string[];
}
interface courseInfo {
  id: string;
  title: string;
  schedule: string;
  difficulty: CourseDifficulty;
  icon: React.ReactNode;
  totalHours: number;
  price: number;
}

const courseInfo: courseInfo = {
  id: "ai",
  title: "AI（人工智能應用）",
  schedule: "平日班",
  difficulty: "中級",
  icon: <Brain className="h-10 w-10 text-cyan-600" />,
  totalHours: 16,
  price: 3980,
};

const courseDetail: CourseDetail = {
  id: "ai",
  title: "AI（人工智能應用）",
  difficulty: "中級",
  icon: <Brain className="h-10 w-10 text-cyan-600" />,
  totalHours: 16,
  price: 3980,
  videoUrl: "https://example.com/ai-course-preview.mp4",
  description: `AI 已經唔係「IT人先用」，而係各行各業都用得著：可以 Gen 圖、Gen 片、Gen 信件、Gen 文案、做會議摘要、做資料整理，甚至幫你 Debug、幫你寫程式。學得好，唔係慳少少時間，而係工作效率可以「以倍計」提升。
本課程由入門到應用，分階段講解 AI 實戰技巧，全程以真實工作場景為例，確保學完即能用。具體內容包括：
1. AI 工具入門：主流 AI 工具（ChatGPT、MidJourney、剪映AI等）操作指南，快速上手核心功能；
2. Prompt 工程：掌握「有效提問」技巧，讓 AI 精準輸出你想要的結果，避免「睇落好啱但其實錯」；
3. 行業場景應用：市場文案生成、行政文書優化、數據整理分析、程式輔助開發等崗位對應技巧；
4. 效率工作流搭建：將 AI 融入日常工作流程，實現重複性工作自動化，平均節省 1/3 工作時間；
5. 風險規避：AI 內容驗證、版權風險防控、企業數據安全使用準則。`,
  semesters: [
    {
      id: "semester1",
      name: "2026年第一學期（平日班）",
      dates: ["2026年3月10日", "2026年3月17日", "2026年3月24日", "2026年3月31日"],
      startTime: "19:00",
      endTime: "21:00"
    },
    {
      id: "semester2",
      name: "2026年第一學期（週末班）",
      dates: ["2026年3月15日", "2026年3月22日", "2026年4月5日", "2026年4月12日"],
      startTime: "10:00",
      endTime: "12:00"
    },
    {
      id: "semester3",
      name: "2026年第二學期（平日班）",
      dates: ["2026年5月12日", "2026年5月19日", "2026年5月26日", "2026年6月2日"],
      startTime: "19:30",
      endTime: "21:30"
    }
  ],
  fitFor: "市場、行政、寫作、研發、管理層等所有崗位，尤其適合希望提升工作效率、快速掌握新工具的上班族、創業者及在職人士。無需 AI 基礎，零門檻入學。",
  roi: "工作效率提升30%以上，節省大量重複性工作時間，聚焦高價值任務；掌握 AI 工具可成為職場加分項，提升晉升機會；中小企業可通過 AI 替代部分外包工作，降低運營成本50%以上。",
  career: "掌握 AI 工具提升職場競爭力，適用於各行各業：內容創作崗可提升產出效率，行政崗可實現文書自動化，研發崗可輔助程式開發與 Debug，管理層可優化工作安排與決策效率。同時可拓展副業機會，如 AI 文案策劃、AI 輔助設計等。",
  highlights: [
    "零基礎入門，全程實戰教學",
    "行業定制化場景教學，學完即落地",
    "提供終身課程資料更新服務",
    "結業頒發證書，提升履歷含金量",
    "課後1對1問答指導，解決實際問題"
  ]
};

const difficultyStyles: Record<CourseDifficulty, string> = {
  '初級': 'bg-green-100 text-green-800',
  '中級': 'bg-cyan-100 text-cyan-800',
  '高級': 'bg-blue-100 text-blue-800',
  '專業級': 'bg-slate-100 text-slate-800'
};

export default function CourseDetailPage() {
  const [selectedSemester, setSelectedSemester] = useState<string>(courseDetail.semesters[0].id);
  const [showEnrollForm, setShowEnrollForm] = useState<boolean>(false);
  const currentSemester = courseDetail.semesters.find(sem => sem.id === selectedSemester)!;

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <section className="bg-gray-50 border-b border-gray-100 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
              <a href="/courses" className="hover:text-cyan-700 transition-colors">課程總覽</a>
              <ChevronLeft className="h-4 w-4 mx-2" />
              <span className="text-cyan-700 font-medium">{courseInfo.title}</span>
            </div>
          </div>
        </section>

        {/* 課程標題與核心資訊｜單欄簡潔版，不分左右、節省垂直空間 */}
<section className="py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* 標題區 */}
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-3 mb-3">
        <h1 className="text-3xl font-semibold text-gray-800">{courseInfo.title}</h1>
        <span className={`px-2 py-0.5 rounded-full text-sm font-medium ${difficultyStyles[courseInfo.difficulty]}`}>
          {courseInfo.difficulty}
        </span>
      </div>
      <p className="text-gray-500 mb-5">實戰導向 AI 培訓，協助在職人士把AI技巧直接套用於日常工作</p>

      <div className="flex space-x-10 text-gray-700">
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="h-4 w-4 text-cyan-700" />
          <div>
            <p className="text-xs text-gray-500">總時數</p>
            <p className="text-sm font-medium">{courseInfo.totalHours}小時</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar className="h-4 w-4 text-cyan-700" />
          <div>
            <p className="text-xs text-gray-500">課程模式</p>
            <p className="text-sm font-medium">{courseInfo.schedule}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="h-4 w-4 text-cyan-700" />
          <div>
            <p className="text-xs text-gray-500">每堂時間</p>
            <p className="text-sm font-medium">{currentSemester.startTime}-{currentSemester.endTime}</p>
          </div>
        </div>
      </div>
    </div>

    {/* 適合人群 / 學習回報 / 職業出路，單欄垂直排列 */}
    <div className="space-y-3 md:grid md:grid-cols-3 gap-3">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <Users className="h-4 w-4 text-cyan-700" />
          適合人群
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{courseDetail.fitFor}</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-cyan-700" />
          學習回報
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{courseDetail.roi}</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-base font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-cyan-700" />
          職業出路
        </h2>
        <p className="text-sm text-gray-700 leading-relaxed">{courseDetail.career}</p>
      </div>
    </div>
  </div>
</section>


        {/* 課程主內容區 */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* 主內容區 8/12 */}
              <div className="lg:col-span-8 space-y-10">
                {/* 預覽影片 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative aspect-video bg-gray-100">
                    <img
                      src="https://picsum.photos/id/180/1200/675"
                      alt="AI課程預覽"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white/80 hover:bg-white rounded-full p-4 transition-colors">
                        <PlayCircle className="h-14 w-14 text-cyan-700" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 font-medium">課程預覽影片：AI工具快速入門演示</p>
                  </div>
                </div>

                {/* 課程內容 */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-700" />
                    課程內容
                  </h2>
                  <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
                    {courseDetail.description.split('\n').map((paragraph, idx) =>
                      paragraph ? <p key={idx} className="mb-4">{paragraph}</p> : <br key={idx} />
                    )}
                  </div>
                  <div className="mt-10">
                    <h3 className="font-semibold text-gray-800 mb-5">課程亮點</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {courseDetail.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle className="h-5 w-5 text-cyan-700 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 上課時間 */}
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-cyan-700" />
                    課程時間安排
                  </h2>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">選擇學期</label>
                    <select
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
                    >
                      {courseDetail.semesters.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                          {semester.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-5">{currentSemester.name}｜上課日期</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {currentSemester.dates.map((date, idx) => (
                        <div key={idx} className="bg-cyan-50 border border-cyan-100 rounded-xl p-5 text-center">
                          <p className="text-gray-800 font-medium">第{idx + 1}堂</p>
                          <p className="text-gray-700 text-sm mt-2">{date}</p>
                          <p className="text-cyan-700 text-sm mt-1">{currentSemester.startTime}-{currentSemester.endTime}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


              {/* 右側報名卡片 4/12，sticky 留足上下安全邊距，防止撞導航 */}
              <div className="lg:col-span-4 space-y-8">
                <div className="bg-gray-50 rounded-xl p-8 sticky top-24 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">課程報名</h2>
                  <div className="mb-6">
                    <p className="text-gray-500 text-sm mb-1">課程費用</p>
                    <p className="text-3xl font-bold text-cyan-700">HK${courseDetail.price}</p>
                    <p className="text-sm text-gray-500 mt-2">包含課程資料、結業證書</p>
                  </div>
                  <div className="space-y-4 mt-8">
                    <button
                      onClick={() => setShowEnrollForm(true)}
                      className="w-full bg-cyan-700 text-white py-3 rounded-3xl hover:bg-cyan-800 transition-colors font-medium flex items-center justify-center gap-2"
                    >
                      立即報名
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button className="w-full border-2 border-cyan-700 text-cyan-700 py-3 rounded-3xl hover:bg-cyan-700 hover:text-white transition-colors font-medium">
                      查詢團報優惠
                    </button>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600">
                    <p className="font-medium mb-2">報名須知</p>
                    <ul className="space-y-2">
                      <li>• 線上支付 / 銀行轉賬均可</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 報名彈窗 */}
        {showEnrollForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">課程報名表</h2>
                <button
                  onClick={() => setShowEnrollForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">姓名 *</label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">聯絡電話 *</label>
                      <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">電子郵箱 *</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">選擇學期 *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none" required>
                      {courseDetail.semesters.map((semester) => (
                        <option key={semester.id} value={semester.id}>
                          {semester.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">支付方式 *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 border border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="text-cyan-600" defaultChecked />
                        <span>線上信用卡支付</span>
                      </label>
                      <label className="flex items-center gap-3 border border-gray-300 rounded-xl p-4 cursor-pointer hover:bg-gray-50">
                        <input type="radio" name="payment" className="text-cyan-600" />
                        <span>銀行轉賬</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="flex items-start gap-3 text-sm text-gray-700 cursor-pointer">
                      <input type="checkbox" className="mt-1 text-cyan-600" required />
                      <span>我已閱讀並同意《課程條款與細則》及《隱私政策聲明》*</span>
                    </label>
                  </div>
                  <button type="submit" className="w-full bg-cyan-700 text-white py-3 rounded-3xl hover:bg-cyan-800 transition-colors font-medium">
                    提交報名
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
