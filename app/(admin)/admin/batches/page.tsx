'use client';
import { useState } from 'react';

type Batch = {
  batchId: string;
  courseId: string;
  courseName: string;
  targetMin: number;
  enrolledCount: number;
  status: 'collecting' | 'ready' | 'started';
  term: string;
  note: string;
};

const mockBatches: Batch[] = [
  {
    batchId: 'B26Q4-01',
    courseId: 'C001',
    courseName: 'AI商業應用與自動化實戰證書',
    targetMin: 6,
    enrolledCount: 4,
    status: 'collecting',
    term: '2026 Q4',
    note: '收集留位費中，人數未達標'
  }
];

export default function AdminBatchPage() {
  const [batches, setBatches] = useState<Batch[]>(mockBatches);

  const markReady = (bid:string) => {
    setBatches(prev=>prev.map(x=>x.batchId===bid ? {...x, status:'ready', note:'人數足夠，通知學員繳交餘下學費'} : x))
  };
  const startClass = (bid:string) => {
    setBatches(prev=>prev.map(x=>x.batchId===bid ? {...x, status:'started', note:'已正式開班'} : x))
  };

  const getStatusBadge = (s:Batch['status']) => {
    if(s === 'collecting') return <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs">收集留位費</span>
    if(s === 'ready') return <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">可開班，待收學費</span>
    return <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs">已開班</span>
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">開班管理 Batch Management</h1>
      <p className="text-gray-500 mb-6">學員先付 $500 留位費；達到最低人數後，通知學員繳交剩餘學費</p>

      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 font-medium text-gray-600">班別編號</th>
              <th className="text-left p-3 font-medium text-gray-600">課程</th>
              <th className="text-left p-3 font-medium text-gray-600">學期</th>
              <th className="text-center p-3 font-medium text-gray-600">已報名人數</th>
              <th className="text-center p-3 font-medium text-gray-600">最低開班人數</th>
              <th className="text-center p-3 font-medium text-gray-600">狀態</th>
              <th className="text-left p-3 font-medium text-gray-600">備註</th>
              <th className="text-center p-3 font-medium text-gray-600">操作</th>
            </tr>
          </thead>
          <tbody>
            {batches.map(b => (
              <tr key={b.batchId} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-3 font-mono">{b.batchId}</td>
                <td className="p-3">{b.courseName}</td>
                <td className="p-3">{b.term}</td>
                <td className="p-3 text-center">{b.enrolledCount}</td>
                <td className="p-3 text-center">{b.targetMin}</td>
                <td className="p-3 text-center">{getStatusBadge(b.status)}</td>
                <td className="p-3">{b.note}</td>
                <td className="p-3 text-center">
                  {b.status === 'collecting' && b.enrolledCount >= b.targetMin && (
                    <button onClick={()=>markReady(b.batchId)} className="text-blue-600 text-xs hover:underline">
                      標註可開班 & 發通知
                    </button>
                  )}
                  {b.status === 'ready' && (
                    <button onClick={()=>startClass(b.batchId)} className="text-emerald-600 text-xs hover:underline">
                      正式開班
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
