// 模擬課程數據
const myCourseList = [
  {
    id: 1,
    title: "AI 商業應用與自動化實戰證書",
    mode: "實體 / Zoom",
    duration: "30小時",
    status: "進行中",
  },
];

export default function StudentCoursesPage() {
  return (
    <div>
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-slate-900 mb-8">
        我的課程 <span className="text-gray-500 font-normal">My Courses</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {myCourseList.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-medium text-slate-900">{course.title}</h3>
              <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                {course.status}
              </span>
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <p>上課模式：{course.mode}</p>
              <p>課時：{course.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
