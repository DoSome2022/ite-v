'use client';
import { useState } from 'react';
import {
  Shield,
  Brain,
  BarChart3,
  Code,
  FileCode,
  Repeat,
  RectangleGoggles,
  Video,
  Database,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

// 定義類型
type ThemeColor = 'blue' | 'purple' | 'green';
type CourseDifficulty = '初級' | '中級' | '高級' | '專業級';
type CourseCategory = 'core' | 'tech' | 'business' | 'all';

interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  fitFor: string;
  roi: string;
  career: string;
  difficulty: CourseDifficulty;
}

interface Category {
  id: CourseCategory;
  title: string;
  themeColor: ThemeColor;
  courses: Course[];
}

// 課程數據（新增難度屬性）
const courseCategories: Category[] = [
  {
    id: "core",
    title: "核心課程體系",
    themeColor: "blue",
    courses: [
      {
        id: "course",
        title: "CyberSecurity（網絡安全）",
        icon: <Shield className="h-7 w-7 text-blue-600" />,
        shortDesc: "提升安全意識，保護企業免受網絡攻擊，減少人為疏忽風險",
        fitFor: "所有企業員工、管理層、中小企負責人",
        roi: "降低90%以上因人為疏忽導致的安全風險，減少數據外洩/勒索帶來的經濟損失",
        career: "提升職場安全意識，適用於所有行業，尤其金融、零售、醫療等敏感行業",
        difficulty: "初級"
      },
      {
        id: "ai",
        title: "AI（人工智能應用）",
        icon: <Brain className="h-7 w-7 text-blue-600" />,
        shortDesc: "掌握AI實戰應用，工作效率以倍計提升，節省1/3工作時間",
        fitFor: "市場、行政、寫作、研發、管理層等所有崗位",
        roi: "工作效率提升30%以上，節省大量重複性工作時間，聚焦高價值任務",
        career: "掌握AI工具提升職場競爭力，適用於各行各業，尤其內容創作、辦公室行政、研發等",
        difficulty: "中級"
      },
      {
        id: "data-analytics",
        title: "Data Analytics（數據分析）",
        icon: <BarChart3 className="h-7 w-7 text-blue-600" />,
        shortDesc: "用數據支持商業決策，減成本、提效率、搵清晰方向",
        fitFor: "銷售、營運、市場、管理層、財務等需要做決策的崗位",
        roi: "基於數據優化決策，降低成本15-20%，提升業績20%以上",
        career: "數據分析能力已成為中高層管理崗位的必備技能，就業範圍極廣",
        difficulty: "中級"
      }
    ]
  },
  {
    id: "tech",
    title: "技術技能課程",
    themeColor: "purple",
    courses: [
      {
        id: "web-dev",
        title: "Web Development（網頁開發）",
        icon: <Code className="h-7 w-7 text-purple-600" />,
        shortDesc: "掌握網頁開發核心技能，由入門到商業應用，學完即落地",
        fitFor: "IT從業者、想轉行做技術的人士、企業內負責系統管理的人員",
        roi: "掌握網頁開發技能可提升薪資30-50%，企業可減少外判開支50%以上",
        career: "香港網頁開發崗位需求持續增長，就業機會多，薪資水平高",
        difficulty: "中級"
      },
      {
        id: "python",
        title: "Python（程式開發）",
        icon: <FileCode className="h-7 w-7 text-purple-600" />,
        shortDesc: "由零開始學習Python，將重複性工作程式化，提升效率與競爭力",
        fitFor: "IT從業者、數據分析師、行政人員、財務人員、研發人員",
        roi: "自動化重複性工作，節省50%以上的工作時間，提升個人產出效率",
        career: "Python 是香港IT行業需求最高的語言之一，就業範圍涵蓋金融、科技、政府等",
        difficulty: "初級"
      },
      {
        id: "automation",
        title: "Workflow Automation（工作流程自動化）",
        icon: <Repeat className="h-7 w-7 text-purple-600" />,
        shortDesc: "將重複性工作自動化，同一時間做多幾倍產出，減少人為錯誤",
        fitFor: "行政人員、營運人員、客服、市場人員、中小企負責人",
        roi: "工作流程效率提升60%以上，減少人為錯誤90%，節省人力成本30%",
        career: "自動化技能已成為企業管理層的核心需求，具備此能力者升職機會更高",
        difficulty: "高級"
      }
    ]
  },
  {
    id: "business",
    title: "企業應用課程",
    themeColor: "green",
    courses: [
      {
        id: "ai-video",
        title: "AI＋剪片（AI Video Editing）",
        icon: <Video className="h-7 w-7 text-green-600" />,
        shortDesc: "掌握AI輔助剪片工作流，大幅提升影片製作效率，學完即出片",
        fitFor: "市場部、內容創作團隊、社媒運營、企業宣傳人員",
        roi: "影片製作效率提升50%以上，減少外包成本，加快內容上線速度",
        career: "AI剪片技能是市場/內容崗位的加分項，就業機會覆蓋各行各業",
        difficulty: "初級"
      },
      {
        id: "vr-training",
        title: "VR Game / XR Training（沉浸式培訓）",
        icon: <RectangleGoggles className="h-7 w-7 text-green-600" />,
        shortDesc: "學習VR/遊戲化培訓內容製作，提升培訓效果與記憶點",
        fitFor: "培訓主管、市場主管、產品經理、安全主管",
        roi: "培訓效果提升30%以上，產品展示吸引力增強，客戶轉化率提升15%",
        career: "XR培訓是新興領域，相關人才需求逐漸增加",
        difficulty: "高級"
      },
      {
        id: "sql",
        title: "SQL Database（SQL／資料庫）",
        icon: <Database className="h-7 w-7 text-green-600" />,
        shortDesc: "建立資料查詢與管理能力，打通系統資料到決策的完整鏈路",
        fitFor: "數據分析師、IT人員、財務人員、營運人員",
        roi: "提升數據查詢效率80%以上，減少數據等待時間，加快決策速度",
        career: "SQL是數據相關崗位的必備技能，就業範圍涵蓋各行各業",
        difficulty: "專業級"
      }
    ]
  }
];

// 主題樣式映射
const themeStyles: Record<ThemeColor, {
  bg: string;
  border: string;
  text: string;
  hover: string;
}> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    hover: "hover:bg-blue-100"
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    hover: "hover:bg-purple-100"
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    hover: "hover:bg-green-100"
  }
};

// 難度標籤樣式
const difficultyStyles: Record<CourseDifficulty, string> = {
  '初級': 'bg-green-100 text-green-800',
  '中級': 'bg-blue-100 text-blue-800',
  '高級': 'bg-purple-100 text-purple-800',
  '專業級': 'bg-red-100 text-red-800'
};

export default function CoursesPage() {
  // 搜尋與篩選狀態
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<CourseDifficulty | 'all'>('all');

  // 過濾課程
  const filteredCategories = courseCategories.map(category => {
    // 過濾該分類下的課程
    const filteredCourses = category.courses.filter(course => {
      // 關鍵字過濾
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 分類過濾
      const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
      
      // 難度過濾
      const matchesDifficulty = selectedDifficulty === 'all' || course.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    return {
      ...category,
      courses: filteredCourses
    };
  });

  return (
    <>
      <main className="min-h-screen bg-gray-50">
        {/* 頁面標題區 */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">課程體系</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              根據你的崗位、行業和職業目標，選擇最適合你的學習路徑，從效率、風險控制到人才成長，全面提升競爭力。
            </p>
          </div>
        </section>

        {/* 搜尋與篩選區 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 關鍵字搜尋 */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="搜尋課程名稱或描述..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* 分類篩選 */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as CourseCategory)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="all">所有分類</option>
                <option value="core">核心課程體系</option>
                <option value="tech">技術技能課程</option>
                <option value="business">企業應用課程</option>
              </select>

              {/* 難度篩選 */}
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value as CourseDifficulty | 'all')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              >
                <option value="all">所有難度</option>
                <option value="初級">初級</option>
                <option value="中級">中級</option>
                <option value="高級">高級</option>
                <option value="專業級">專業級</option>
              </select>
            </div>

            {/* 篩選標籤顯示 */}
            {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || searchTerm) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchTerm && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-1">
                    搜尋: {searchTerm}
                    <button onClick={() => setSearchTerm('')} className="text-blue-600 hover:text-blue-800">×</button>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm flex items-center gap-1">
                    分類: {courseCategories.find(c => c.id === selectedCategory)?.title}
                    <button onClick={() => setSelectedCategory('all')} className="text-purple-600 hover:text-purple-800">×</button>
                  </span>
                )}
                {selectedDifficulty !== 'all' && (
                  <span className={`px-3 py-1 ${difficultyStyles[selectedDifficulty]} rounded-full text-sm flex items-center gap-1`}>
                    難度: {selectedDifficulty}
                    <button onClick={() => setSelectedDifficulty('all')} className="text-gray-600 hover:text-gray-800">×</button>
                  </span>
                )}
                {(selectedCategory !== 'all' || selectedDifficulty !== 'all' || searchTerm) && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedDifficulty('all');
                    }}
                    className="ml-auto text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Filter className="h-4 w-4" />
                    清除篩選
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 課程展示區 */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          {filteredCategories.map((category) => {
            // 跳過沒有課程的分類
            if (category.courses.length === 0) return null;
            
            const styles = themeStyles[category.themeColor];
            return (
              <div key={category.id} className="mb-16">
                {/* 分類標題 */}
                <div className="mb-6 flex items-center">
                  <div className={`w-1.5 h-8 ${styles.bg.replace('50', '600')} rounded-full mr-3`}></div>
                  <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
                </div>

                {/* 課程卡片列表 */}
                <div className="grid grid-cols-1 gap-6">
                  {category.courses.map((course) => (
                    <div
                      key={course.id}
                      className={`rounded-xl border ${styles.border} bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md`}
                    >
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                          {/* 課程圖標與標題區 */}
                          <div className="md:col-span-4 flex items-start gap-3">
                            <div className={`${styles.bg} p-2 rounded-lg`}>
                              {course.icon}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                              </div>
                              <p className="my-2 text-gray-600 text-sm">{course.shortDesc}</p>
                              {/* 難度標籤 */}
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyStyles[course.difficulty]}`}>
                                  {course.difficulty}
                                </span>
                            </div>
                          </div>

                          {/* 課程關鍵信息區 */}
                          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium text-gray-700">適合人群</h4>
                              <p className="text-sm text-gray-600">{course.fitFor}</p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium text-gray-700">學習回報</h4>
                              <p className="text-sm text-gray-600">{course.roi}</p>
                            </div>
                            <div className="space-y-1">
                              <h4 className="text-sm font-medium text-gray-700">職業出路</h4>
                              <p className="text-sm text-gray-600">{course.career}</p>
                            </div>
                          </div>
                        </div>

                        {/* 操作按鈕區 */}
                        <div className="mt-6 flex items-center justify-end gap-3">
                          <a
                            href={`/${course.id}`}
                            className={`inline-flex items-center text-sm font-medium ${styles.text} ${styles.hover} px-3 py-1.5 rounded-lg`}
                          >
                            課程詳情
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </a>
                          <button className="inline-flex items-center text-sm font-medium bg-gray-800 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition-colors">
                            諮詢課程
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* 無課程提示 */}
          {filteredCategories.every(cat => cat.courses.length === 0) && (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 text-lg">沒有找到符合條件的課程，請嘗試調整篩選條件</p>
            </div>
          )}

          {/* 企業定制培訓卡片 */}
          <div className="mt-16">
            <div className="mb-6 flex items-center">
              <div className="w-1.5 h-8 bg-orange-600 rounded-full mr-3"></div>
              <h2 className="text-2xl font-semibold text-gray-800">客製化企業培訓課程</h2>
            </div>

            <div className="rounded-xl border border-orange-200 bg-white shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">上門培訓｜團報方案</h3>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• 按行業、部門、崗位度身訂造學習路線與案例</li>
                      <li>• 可配合企業時間，支援實體＋線上混合授課</li>
                      <li>• 跨部門組班，統一目標與交付物，學完即落地</li>
                    </ul>
                  </div>
                  <div className="md:col-span-4 flex items-center justify-end">
                    <button className="inline-flex items-center text-sm font-medium bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                      查詢企業定制方案
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}