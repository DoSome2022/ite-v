'use client';
import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Clock, Calendar, CheckCircle, ChevronRight, X, ArrowDown, Award, RotateCcw } from 'lucide-react';
import Link from 'next/link';

type CourseItem = {
  id: number;
  title: string;
  enTitle: string;
  category: string;
  level: string;
  duration: string;
  mode: string;
  startDate: string;
  tags: string[];
  description: string;
  isFeatured: boolean;
};

type FilterOpts = {
  categories: string[];
  levels: string[];
  fundingTags: string[];
  modes: string[];
};

type TempFilterState = {
  category: string | null;
  selectedLevels: string[];
  selectedFunding: string[];
  searchKeyword: string;
};

interface Props {
  courseList: CourseItem[];
  filterOpts: FilterOpts;
}

export default function CoursesFilterClient({ courseList, filterOpts }: Props) {
  // 【臨時篩選條件】選擇時先存在這，不立刻渲染列表
  const [tempFilter, setTempFilter] = useState<TempFilterState>({
    category: null,
    selectedLevels: [],
    selectedFunding: [],
    searchKeyword: '',
  });
  // 【已套用的篩選條件】按下確認後才覆寫
  const [appliedFilter, setAppliedFilter] = useState<TempFilterState>({
    category: null,
    selectedLevels: [],
    selectedFunding: [],
    searchKeyword: '',
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 點擊【確認套用篩選】
  const handleApplyFilter = () => {
    setAppliedFilter({ ...tempFilter });
    setIsFilterOpen(false);
  };

  // 重設所有篩選
  const handleResetFilter = () => {
    const emptyState: TempFilterState = {
      category: null,
      selectedLevels: [],
      selectedFunding: [],
      searchKeyword: '',
    };
    setTempFilter(emptyState);
    setAppliedFilter(emptyState);
  };

  // 計算過濾後課程（依 appliedFilter）
  const filteredCourses = useMemo(() => {
    return courseList.filter((course) => {
      // 關鍵字搜尋
      const kw = appliedFilter.searchKeyword.trim().toLowerCase();
      if (kw) {
        const matchText = `${course.title} ${course.enTitle} ${course.description} ${course.tags.join(' ')}`.toLowerCase();
        if (!matchText.includes(kw)) return false;
      }

      // 分類篩選
      if (appliedFilter.category && course.category !== appliedFilter.category) return false;

      // 難度多選
      if (appliedFilter.selectedLevels.length > 0) {
        const hasMatch = appliedFilter.selectedLevels.some(lv => course.level.includes(lv));
        if (!hasMatch) return false;
      }

      // 資助標籤多選
      if (appliedFilter.selectedFunding.length > 0) {
        const hasTag = appliedFilter.selectedFunding.some(tag => course.tags.some(t => t.includes(tag)));
        if (!hasTag) return false;
      }

      return true;
    });
  }, [courseList, appliedFilter]);

  const toggleLevel = (level: string) => {
    const arr = tempFilter.selectedLevels.includes(level)
      ? tempFilter.selectedLevels.filter(i => i !== level)
      : [...tempFilter.selectedLevels, level];
    setTempFilter(prev => ({ ...prev, selectedLevels: arr }));
  };

  const toggleFunding = (tag: string) => {
    const arr = tempFilter.selectedFunding.includes(tag)
      ? tempFilter.selectedFunding.filter(i => i !== tag)
      : [...tempFilter.selectedFunding, tag];
    setTempFilter(prev => ({ ...prev, selectedFunding: arr }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* 左側篩選側欄 */}
      <aside className={`lg:w-1/4 ${isFilterOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
        <div className="flex justify-between items-center lg:hidden mb-6">
          <h3 className="text-xl font-bold">篩選課程</h3>
          <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
        </div>

        <div className="space-y-8">
          {/* 搜尋框 */}
          <div className="relative">
            <input
              type="text"
              placeholder="搜尋課程關鍵字..."
              value={tempFilter.searchKeyword}
              onChange={(e) => setTempFilter(p => ({ ...p, searchKeyword: e.target.value }))}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
          </div>

          {/* 專業領域 (Subject) */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              專業領域 <span className="text-xs font-normal text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Subject</span>
            </h3>
            <div className="space-y-2">
              {filterOpts.categories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center transition ${tempFilter.category === cat ? 'bg-slate-700 border-blue-600' : 'border-slate-300 bg-white group-hover:border-blue-400'}`}>
                    {tempFilter.category === cat && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <input
                    type="radio"
                    name="category"
                    className="hidden"
                    checked={tempFilter.category === cat}
                    onChange={() => setTempFilter(p => ({ ...p, category: p.category === cat ? null : cat }))}
                  />
                  <span className={`${tempFilter.category === cat ? 'text-blue-700 font-medium' : 'text-slate-600'}`}>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 課程難度 多選 */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">課程難度</h3>
            <div className="flex flex-wrap gap-2">
              {filterOpts.levels.map((level) => (
                <button
                  key={level}
                  onClick={() => toggleLevel(level)}
                  className={`text-sm px-3 py-1.5 rounded-md border transition ${
                    tempFilter.selectedLevels.includes(level)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* 資助與認證 多選 */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">資助與認證</h3>
            <div className="space-y-2">
              {filterOpts.fundingTags.map((item) => (
                <label key={item} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tempFilter.selectedFunding.includes(item)}
                    onChange={() => toggleFunding(item)}
                    className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-slate-600">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 篩選操作按鈕：確認套用 / 重設 */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleApplyFilter}
              className="flex-1 bg-slate-700 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2"
            >
              <CheckCircle size={16} /> 篩選
            </button>
            <button
              onClick={handleResetFilter}
              className="flex-1 border border-slate-300 text-slate-700 py-2.5 rounded-lg font-medium hover:bg-slate-100 transition flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} /> 重設
            </button>
          </div>
        </div>
      </aside>

      {/* 手機版 打開篩選彈窗按鈕 */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-white border border-slate-300 py-3 rounded-lg font-medium text-slate-700 shadow-sm"
        >
          <Filter className="w-4 h-4" /> 篩選課程條件
        </button>
      </div>

      {/* 右側課程列表 */}
      <div className="flex-1">
        <div className="mb-6 flex justify-between items-center">
          <span className="text-slate-500 font-medium">顯示 {filteredCourses.length} 個學程</span>
          {/* <select className="bg-transparent border-none text-slate-700 font-medium cursor-pointer focus:ring-0">
            <option>排序：最新開課</option>
            <option>排序：熱門程度</option>
          </select> */}
        </div>

        <div className="space-y-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
              {course.isFeatured && (
                <div className="absolute top-0 right-0 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-bl-lg">
                  重點推薦
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition">
                    {course.title}
                  </h3>
                  <h4 className="text-sm font-medium text-slate-500 mb-4 font-serif italic">
                    {course.enTitle}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        <CheckCircle className="w-3 h-3 text-green-500" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full md:w-56 md:border-l border-slate-100 md:pl-6 flex flex-col justify-between shrink-0">
                  <div className="space-y-3 text-sm text-slate-600 mb-6 md:mb-0">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>時數：{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 flex items-center justify-center"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span></div>
                      <span>模式：{course.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>開課：{course.startDate}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <Link href='/course'>
                      <button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-slate-600 transition flex items-center justify-center gap-2">
                        查看大綱 <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                    <button className="w-full bg-white text-slate-600 border border-slate-200 font-medium py-2.5 rounded-lg hover:bg-slate-50 transition text-sm">
                      下載簡章 (PDF)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 空狀態：無符合課程 */}
        {filteredCourses.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            沒有符合篩選條件的課程，請嘗試重設篩選條件
          </div>
        )}

        {/* 分頁 */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="p-2 border border-slate-200 rounded-md text-slate-400 hover:text-slate-600 disabled:opacity-50" disabled>上一頁</button>
            <button className="w-10 h-10 bg-slate-700 text-white rounded-md font-bold">1</button>
            <button className="w-10 h-10 hover:bg-slate-100 text-slate-600 rounded-md font-medium transition">2</button>
            <button className="w-10 h-10 hover:bg-slate-100 text-slate-600 rounded-md font-medium transition">3</button>
            <span className="text-slate-400 px-2">...</span>
            <button className="p-2 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50">下一頁</button>
          </nav>
        </div>
      </div>
    </div>
  );
}
