'use client';
import { useState } from 'react';
import { Search, CheckCircle, XCircle, UserPlus } from 'lucide-react';

type Application = {
  id: string;
  name: string;
  phone: string;
  email: string;
  courseName: string;
  courseId: string;
  term: string;
  tuitionFee: number;
  depositPaid: boolean;
  fullPaid: boolean;
  studentAccountCreated: boolean;
};

const mockList: Application[] = [
  {
    id: 'AP001',
    name: 'Chan Tai Man',
    phone: '98765432',
    email: 'ctm@test.com',
    courseName: 'AI商業應用證書',
    courseId: 'C001',
    term: '2026 Q4',
    tuitionFee: 4800,
    depositPaid: true,
    fullPaid: false,
    studentAccountCreated: false
  },
  {
    id: 'AP002',
    name: 'Wong Siu Ling',
    phone: '91234567',
    email: 'wsl@test.com',
    courseName: '網絡安全入門',
    courseId: 'C002',
    term: '2026 Q4',
    tuitionFee: 3600,
    depositPaid: true,
    fullPaid: true,
    studentAccountCreated: true
  }
];

export default function AdminApplicationPage() {
  const [list, setList] = useState<Application[]>(mockList);
  const [keyword, setKeyword] = useState('');

  const filtered = list.filter(i =>
    i.name.toLowerCase().includes(keyword.toLowerCase())
    || i.email.toLowerCase().includes(keyword.toLowerCase())
    || i.courseId.toLowerCase().includes(keyword.toLowerCase())
  );

  const toggleDeposit = (id: string) => {
    setList(prev => prev.map(x => x.id === id ? {...x, depositPaid: !x.depositPaid} : x))
  };
  const toggleFullPay = (id: string) => {
    setList(prev => prev.map(x => x.id === id ? {...x, fullPaid: !x.fullPaid} : x))
  };
  const createStudentAcc = (id: string) => {
    setList(prev => prev.map(x => x.id === id ? {...x, studentAccountCreated: true} : x))
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">報名列表 Application List</h1>
      <p className="text-gray-500 mb-6">跟進學員留位費、全數學費、開立學生帳戶</p>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
          <input
            value={keyword}
            onChange={e=>setKeyword(e.target.value)}
            placeholder="搜尋姓名 / Email / 課程ID"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-white"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 font-medium text-gray-600">姓名</th>
              <th className="text-left p-3 font-medium text-gray-600">聯絡電話</th>
              <th className="text-left p-3 font-medium text-gray-600">Email</th>
              <th className="text-left p-3 font-medium text-gray-600">課程名稱</th>
              <th className="text-left p-3 font-medium text-gray-600">課程ID</th>
              <th className="text-left p-3 font-medium text-gray-600">學期</th>
              <th className="text-left p-3 font-medium text-gray-600">學費</th>
              <th className="text-center p-3 font-medium text-gray-600">留位費</th>
              <th className="text-center p-3 font-medium text-gray-600">全數學費</th>
              <th className="text-center p-3 font-medium text-gray-600">學生帳戶</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(item => (
              <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.courseName}</td>
                <td className="p-3 font-mono">{item.courseId}</td>
                <td className="p-3">{item.term}</td>
                <td className="p-3">${item.tuitionFee}</td>
                <td className="p-3 text-center">
                  <button onClick={()=>toggleDeposit(item.id)}>
                    {item.depositPaid
                      ? <CheckCircle className="text-emerald-500" size={20}/>
                      : <XCircle className="text-gray-300" size={20}/>
                    }
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button onClick={()=>toggleFullPay(item.id)}>
                    {item.fullPaid
                      ? <CheckCircle className="text-emerald-500" size={20}/>
                      : <XCircle className="text-gray-300" size={20}/>
                    }
                  </button>
                </td>
                <td className="p-3 text-center">
                  {item.studentAccountCreated
                    ? <span className="text-emerald-600 text-xs">已開立</span>
                    : <button
                        onClick={()=>createStudentAcc(item.id)}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs"
                      >
                        <UserPlus size={14}/> 開帳戶
                      </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
