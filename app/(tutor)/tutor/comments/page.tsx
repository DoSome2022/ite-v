'use client';
import { useState } from 'react';

type StudentComment = {
  id: string;
  name: string;
  courseName: string;
  batchId: string;
  comment: string;
};

const mockData: StudentComment[] = [
  { id: 'S001', name: 'Wong Siu Ling', courseName: 'AI商業應用證書', batchId: 'B26Q4-01', comment: '' },
  { id: 'S002', name: 'Chan Tai Man', courseName: 'AI商業應用證書', batchId: 'B26Q4-01', comment: '' },
  { id: 'S003', name: 'Lee Mei Yee', courseName: '網絡安全入門', batchId: 'B26Q4-02', comment: '' },
];

export default function TutorCommentPage() {
  const [studentList, setStudentList] = useState<StudentComment[]>(mockData);
  const [selectedBatchId, setSelectedBatchId] = useState<string>('B26Q4-01');

  // 取出不重複班別清單
  const batchOptions = Array.from(new Set(studentList.map(s => s.batchId))).map(bid => {
    const sample = studentList.find(s => s.batchId === bid);
    return {
      batchId: bid,
      courseName: sample?.courseName
    };
  });

  // 按選中的班別過濾學生
  const filteredStudents = studentList.filter(s => s.batchId === selectedBatchId);

  const updateComment = (sid: string, val: string) => {
    setStudentList(prev => prev.map(s => s.id === sid ? { ...s, comment: val } : s));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">學生評語 Student Comment</h1>
      <p className="text-gray-500 mb-6">先選擇班別 / 課程，再填寫學生課堂表現、學習建議</p>

      <div className="mb-6">
        <label className="text-sm text-gray-600 block mb-2">選擇班別 / 課程</label>
        <select
          value={selectedBatchId}
          onChange={(e) => setSelectedBatchId(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[360px]"
        >
          {batchOptions.map(opt => (
            <option key={opt.batchId} value={opt.batchId}>
              {opt.batchId}｜{opt.courseName}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredStudents.map(stu => (
          <div key={stu.id} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="font-mono text-slate-500">{stu.id}</span>
                <span className="font-semibold text-slate-800 ml-2">{stu.name}</span>
              </div>
              <span className="text-sm text-gray-500">{stu.courseName}｜{stu.batchId}</span>
            </div>
            <textarea
              value={stu.comment}
              onChange={(e) => updateComment(stu.id, e.target.value)}
              placeholder="在此輸入學生評語，例如：課堂投入、上手速度快，建議多練習Prompt..."
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
