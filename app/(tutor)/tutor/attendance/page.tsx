'use client';
import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

type AttendStudent = {
  id: string;
  name: string;
  attended: boolean;
};
type AttendBatch = {
  batchId: string;
  courseName: string;
  date: string;
  students: AttendStudent[];
};

const mockBatches: AttendBatch[] = [
  {
    batchId: 'B26Q4-01',
    courseName: 'AI商業應用與自動化實戰證書',
    date: '2026-10-21',
    students: [
      { id: 'S001', name: 'Wong Siu Ling', attended: false },
      { id: 'S002', name: 'Chan Tai Man', attended: false },
      { id: 'S003', name: 'Lee Mei Yee', attended: false },
    ]
  }
];

export default function TutorAttendancePage() {
  const [batchList, setBatchList] = useState<AttendBatch[]>(mockBatches);
  const [selectedBatchId, setSelectedBatchId] = useState<string>(mockBatches[0].batchId);

  const selectedBatch = batchList.find(b => b.batchId === selectedBatchId);

  const toggleAttend = (batchId: string, studentId: string) => {
    setBatchList(prev => prev.map(batch => {
      if (batch.batchId !== batchId) return batch;
      return {
        ...batch,
        students: batch.students.map(s =>
          s.id === studentId ? { ...s, attended: !s.attended } : s
        )
      };
    }))
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">課程點名 Attendance</h1>
      <p className="text-gray-500 mb-6">先選擇班別，再為學生記錄出席</p>

      <div className="mb-6">
        <label className="text-sm text-gray-600 block mb-2">選擇班別 / 課程</label>
        <select
          value={selectedBatchId}
          onChange={(e) => setSelectedBatchId(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[320px]"
        >
          {batchList.map(b => (
            <option key={b.batchId} value={b.batchId}>
              {b.batchId}｜{b.courseName}｜{b.date}
            </option>
          ))}
        </select>
      </div>

      {selectedBatch && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-medium text-gray-600">學生編號</th>
                <th className="text-left p-3 font-medium text-gray-600">學生姓名</th>
                <th className="text-center p-3 font-medium text-gray-600">出席狀態</th>
              </tr>
            </thead>
            <tbody>
              {selectedBatch.students.map(stu => (
                <tr key={stu.id} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-3 font-mono">{stu.id}</td>
                  <td className="p-3">{stu.name}</td>
                  <td className="p-3 text-center">
                    <button onClick={() => toggleAttend(selectedBatch.batchId, stu.id)}>
                      {stu.attended
                        ? <CheckCircle className="text-emerald-500" size={20}/>
                        : <XCircle className="text-gray-300" size={20}/>
                      }
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
