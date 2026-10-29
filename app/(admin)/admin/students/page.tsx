'use client';
import { useState } from 'react';

type StudentAcc = {
  uid: string;
  name: string;
  email: string;
  password: string;
  enrolledCourses: string[];
};

export default function AdminStudentPage() {
  const [students, setStudents] = useState<StudentAcc[]>([
    { uid:'S001', name:'Wong Siu Ling', email:'wsl@test.com', password:'****', enrolledCourses:['C001'] }
  ]);
  const [form, setForm] = useState<StudentAcc>({
    uid:'', name:'', email:'', password:'', enrolledCourses:[]
  });
  // 正在編輯的學生原始編號（null = 新增模式）
  const [editingUid, setEditingUid] = useState<string | null>(null);

  const resetForm = () => {
    setForm({ uid:'', name:'', email:'', password:'', enrolledCourses:[] });
    setEditingUid(null);
  };

  const startEdit = (s: StudentAcc) => {
    setForm(s);
    setEditingUid(s.uid);
  };

  const save = () => {
    if(!form.uid.trim() || !form.email.trim()) return;
    if (editingUid !== null) {
      // 編輯模式：按「原始編號」更新，允許修改編號本身
      setStudents(prev => prev.map(x => x.uid === editingUid ? form : x));
    } else {
      // 新增模式：拒絕重複編號，避免靜默覆蓋舊帳號
      if (students.some(x => x.uid === form.uid.trim())) {
        alert(`學生編號 ${form.uid.trim()} 已存在，請改用其他編號`);
        return;
      }
      setStudents(prev => [...prev, { ...form, uid: form.uid.trim() }]);
    }
    resetForm();
  };
  const del = (uid:string) => {
    setStudents(prev => prev.filter(x => x.uid !== uid));
    // 若刪除的正是表單中正在編輯的記錄，清空表單避免「復活」
    if (editingUid === uid) resetForm();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">學生帳號管理</h1>
      <p className="text-gray-500 mb-6">新增、編輯、刪除學生登入帳號，綁定已報讀課程</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-4 text-slate-700">{editingUid ? `修改學生 ${editingUid}` : '新增 / 修改學生'}</h2>
          <div className="space-y-3">
            <input
              placeholder="學生編號 S001"
              value={form.uid}
              onChange={e=>setForm({...form, uid:e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            <input
              placeholder="學生姓名"
              value={form.name}
              onChange={e=>setForm({...form, name:e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            <input
              placeholder="登入Email"
              value={form.email}
              onChange={e=>setForm({...form, email:e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            <input
              placeholder="密碼"
              value={form.password}
              onChange={e=>setForm({...form, password:e.target.value})}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
            <div className="flex gap-2">
              <button onClick={save} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">儲存</button>
              {editingUid && (
                <button onClick={resetForm} className="px-4 border border-gray-200 text-gray-600 py-2 rounded-lg hover:bg-gray-50">取消</button>
              )}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold mb-4 text-slate-700">學生帳號列表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-2 text-left">UID</th>
                  <th className="p-2 text-left">姓名</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">已報讀課程</th>
                  <th className="p-2 text-center">操作</th>
                </tr>
              </thead>
              <tbody>
                {students.map(s=>(
                  <tr key={s.uid} className="border-t border-gray-100">
                    <td className="p-2 font-mono">{s.uid}</td>
                    <td className="p-2">{s.name}</td>
                    <td className="p-2">{s.email}</td>
                    <td className="p-2">{s.enrolledCourses.join(', ') || '-'}</td>
                    <td className="p-2 text-center">
                      <button onClick={()=>startEdit(s)} className="text-blue-600 mr-2">編輯</button>
                      <button onClick={()=>del(s.uid)} className="text-red-500">刪除</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
