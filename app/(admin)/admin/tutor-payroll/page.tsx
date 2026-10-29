'use client';
import { useState } from 'react';

type TutorPayroll = {
  payrollId: string;
  tutorName: string;
  tutorId: string;
  totalHours: number;
  ratePerHour: number;
  amount: number;
  period: string;
  status: 'unpaid' | 'paid';
  payDate: string;
};

const mockPayroll: TutorPayroll[] = [
  {
    payrollId: 'PAY001',
    tutorName: 'Aaron Lung',
    tutorId: 'T001',
    totalHours: 12,
    ratePerHour: 350,
    amount: 4200,
    period: '2026-10',
    status: 'unpaid',
    payDate: ''
  }
];

// 以香港時區取得今天日期（toISOString 為 UTC，凌晨時段會記錯一天）
const getTodayHK = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Hong_Kong' });

export default function AdminTutorPayrollPage() {
  const [list, setList] = useState<TutorPayroll[]>(mockPayroll);

  const togglePaid = (pid: string) => {
    setList(prev => prev.map(p => {
      if (p.payrollId !== pid) return p;
      const newStatus = p.status === 'paid' ? 'unpaid' : 'paid';
      return {
        ...p,
        status: newStatus,
        payDate: newStatus === 'paid' ? getTodayHK() : ''
      };
    }));
  };

  const getBadge = (s: TutorPayroll['status']) => {
    if(s === 'paid') return <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">已出糧</span>
    return <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">未支付</span>
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">導師薪金記錄 Tutor Payroll</h1>
      <p className="text-gray-500 mb-6">按教學時數 × 時薪計算，標記出糧狀態</p>

      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 font-medium text-gray-600">薪金編號</th>
              <th className="text-left p-3 font-medium text-gray-600">導師</th>
              <th className="text-center p-3 font-medium text-gray-600">總時數</th>
              <th className="text-center p-3 font-medium text-gray-600">時薪</th>
              <th className="text-center p-3 font-medium text-gray-600">金額</th>
              <th className="text-left p-3 font-medium text-gray-600">計算期</th>
              <th className="text-center p-3 font-medium text-gray-600">狀態</th>
              <th className="text-left p-3 font-medium text-gray-600">出糧日期</th>
              <th className="text-center p-3 font-medium text-gray-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {list.map(item => (
              <tr key={item.payrollId} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-3 font-mono">{item.payrollId}</td>
                <td className="p-3">{item.tutorName} ({item.tutorId})</td>
                <td className="p-3 text-center">{item.totalHours} h</td>
                <td className="p-3 text-center">${item.ratePerHour}</td>
                <td className="p-3 text-center font-semibold">${item.amount}</td>
                <td className="p-3">{item.period}</td>
                <td className="p-3 text-center">{getBadge(item.status)}</td>
                <td className="p-3">{item.payDate || '-'}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => togglePaid(item.payrollId)}
                    className="text-blue-600 text-xs hover:underline"
                  >
                    {item.status === 'paid' ? '改為未付' : '標記已出糧'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
