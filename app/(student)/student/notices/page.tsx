const noticeList = [
  {
    id: 1,
    title: "課堂時間調整通知",
    date: "2026-10-01",
    content: "部分AI課程上課時段有所調整，請登入查看你的課程時間。",
  },
];

export default function NoticesPage() {
  return (
    <div>
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-slate-900 mb-8">
        學院資訊 <span className="text-gray-500 font-normal">Notices</span>
      </h1>
      <div className="space-y-4">
        {noticeList.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-slate-900">{item.title}</h3>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
            <p className="text-gray-500 text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
