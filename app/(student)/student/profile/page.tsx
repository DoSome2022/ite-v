export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold text-slate-900 mb-8">
        個人資料 <span className="text-gray-500 font-normal">Profile</span>
      </h1>
      <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl">
        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-500 mb-1">姓名</label>
            <p className="text-slate-900">Student Name</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">電郵</label>
            <p className="text-slate-900">student@example.com</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">聯絡電話</label>
            <p className="text-slate-900">+852 XXXX XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}
