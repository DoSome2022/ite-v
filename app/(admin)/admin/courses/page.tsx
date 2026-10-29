'use client';
import { useState } from 'react';

type Course = {
  id: string;
  title: string;
  brochureText: string;
  fee: number;
  deposit: number;
  minStudent: number;
};

export default function AdminCoursePage() {
  const [courseList, setCourseList] = useState<Course[]>([
    {
      id: 'C001',
      title: 'AI商業應用與自動化實戰證書',
      brochureText: '適合在職人士學習AI工具、流程自動化，大量商業案例實戰。',
      fee: 4800,
      deposit: 500,
      minStudent: 6
    }
  ]);

  const [form, setForm] = useState<Course>({
    id: '',
    title: '',
    brochureText: '',
    fee: 0,
    deposit: 500,
    minStudent: 6
  });
  // 正在編輯的課程原始編號（null = 新增模式）
  const [editingId, setEditingId] = useState<string | null>(null);

  const resetForm = () => {
    setForm({ id:'', title:'', brochureText:'', fee:0, deposit:500, minStudent:6 });
    setEditingId(null);
  };

  const startEdit = (c: Course) => {
    setForm(c);
    setEditingId(c.id);
  };

  const submit = () => {
    if (!form.id.trim() || !form.title.trim()) return;
    if (form.fee < 0) {
      alert('學費不可為負數');
      return;
    }
    if (form.minStudent < 1) {
      alert('開班最低人數必須至少為 1 人');
      return;
    }
    if (editingId !== null) {
      // 編輯模式：按「原始編號」更新，允許修改課程 ID 本身
      setCourseList(prev => prev.map(x => x.id === editingId ? { ...form, id: form.id.trim() } : x));
    } else {
      // 新增模式：拒絕重複 ID，避免靜默覆蓋舊課程
      if (courseList.some(x => x.id === form.id.trim())) {
        alert(`課程 ID ${form.id.trim()} 已存在，請改用其他 ID`);
        return;
      }
      setCourseList(prev => [...prev, { ...form, id: form.id.trim() }]);
    }
    resetForm();
  };

  const remove = (cid:string) => {
    setCourseList(prev => prev.filter(x=>x.id !== cid));
    // 若刪除的正是表單中正在編輯的課程，清空表單避免「復活」
    if (editingId === cid) resetForm();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">課程管理 & 課程小冊子</h1>
      <p className="text-gray-500 mb-6">新增 / 編輯課程內容、小冊子文字、收費、開班最低人數</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-4 text-slate-700">{editingId ? `編輯課程 ${editingId}` : '新增 / 編輯課程'}</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-600 block mb-1">課程ID</label>
              <input
                value={form.id}
                onChange={e=>setForm({...form, id:e.target.value})}
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
                placeholder="C003"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">課程名稱</label>
              <input
                value={form.title}
                onChange={e=>setForm({...form, title:e.target.value})}
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">課程小冊子內容</label>
              <textarea
                value={form.brochureText}
                onChange={e=>setForm({...form, brochureText:e.target.value})}
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">學費 HK$</label>
              <input
                type="number"
                value={form.fee}
                onChange={e=>setForm({...form, fee:Number(e.target.value)})}
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">留位費 (固定 $500)</label>
              <input
                type="number"
                value={form.deposit}
                readOnly
                className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 block mb-1">開班最低人數</label>
              <input
                type="number"
                value={form.minStudent}
                onChange={e=>setForm({...form, minStudent:Number(e.target.value)})}
                className="w-full border border-gray-200 rounded-lg px-3 py-2"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={submit}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                儲存課程
              </button>
              {editingId && (
                <button onClick={resetForm} className="px-4 border border-gray-200 text-gray-600 py-2 rounded-lg hover:bg-gray-50">取消</button>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-4 text-slate-700">課程列表</h2>
          <div className="space-y-4">
            {courseList.map(c => (
              <div key={c.id} className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                <div className="flex justify-between">
                  <p className="font-semibold text-slate-800">{c.id}｜{c.title}</p>
                  <div className="flex gap-3">
                    <button onClick={()=>startEdit(c)} className="text-blue-600 text-sm">編輯</button>
                    <button onClick={()=>remove(c.id)} className="text-red-500 text-sm">刪除</button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{c.brochureText}</p>
                <div className="mt-2 text-sm">
                  <span className="mr-4">學費：${c.fee}</span>
                  <span className="mr-4">留位費：${c.deposit}</span>
                  <span>最低開班人數：{c.minStudent}人</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
