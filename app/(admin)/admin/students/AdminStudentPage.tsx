// app/admin/students/AdminStudentPage.tsx (Client Component CRUD)
'use client';
import { useState, useEffect } from "react";
import { User } from "@/types";
import { getLocalItem, setLocalItem } from "@/lib/mockData";
export default function AdminStudentPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const load = () => setUsers(getLocalItem<User[]>("users"));
  useEffect(() => { load(); }, []);

  const createStudent = () => {
    const newUser: User = {
      id: `stu-${Date.now()}`,
      email: form.email,
      password: form.password,
      name: form.name,
      role: "student"
    };
    const allUsers = getLocalItem<User[]>("users");
    allUsers.push(newUser);
    setLocalItem("users", allUsers);
    load();
    setForm({ email: "", password: "", name: "" });
  };

  const deleteStudent = (id: string) => {
    const allUsers = getLocalItem<User[]>("users").filter(u => u.id !== id);
    setLocalItem("users", allUsers);
    load();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">學生帳號管理（Admin建立學生帳戶）</h1>
      <div className="border p-4 rounded mb-8">
        <h3 className="font-semibold mb-3">新增學生帳號</h3>
        <input className="border p-2 w-full mb-2" placeholder="姓名" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input className="border p-2 w-full mb-2" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input className="border p-2 w-full mb-2" placeholder="密碼" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button onClick={createStudent} className="bg-cyan-600 text-white px-4 py-2 rounded">建立帳號</button>
      </div>
      <div>
        <h3 className="font-semibold mb-3">學生列表</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">姓名</th>
              <th className="border p-2 text-left">Email</th>
              <th className="border p-2">操作</th>
            </tr>
          </thead>
          <tbody>
            {users.filter(u => u.role === "student").map(u => (
              <tr key={u.id}>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">
                  <button onClick={()=>deleteStudent(u.id)} className="bg-red-500 text-white px-2 py-1 rounded">刪除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
