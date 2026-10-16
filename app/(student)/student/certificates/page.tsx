export default function CertificatesPage() {
  return (
    <div>
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-slate-900 mb-8">
        課程證書 <span className="text-gray-500 font-normal">Certificates</span>
      </h1>

      {/* 空狀態卡片，淺色主站風格 */}
      <div className="bg-white border border-gray-200 rounded-lg p-10 text-center">
        <p className="text-gray-500">暫未有證書，完成課程後將會在此顯示</p>
      </div>
    </div>
  );
}
