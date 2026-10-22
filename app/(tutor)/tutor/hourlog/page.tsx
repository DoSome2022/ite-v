'use client';
import { useState, useMemo } from 'react';

type HourLog = {
  logId: string;
  batchId: string;
  courseName: string;
  lessonDate: string;
  hours: number;
  remark: string;
};

export default function TutorHourLogPage() {
  const [logs] = useState<HourLog[]>([
    { logId: 'L001', batchId: 'B26Q4-01', courseName: 'AI商業應用證書', lessonDate: '2026-10-21', hours: 3, remark: '正常課堂' },
    { logId: 'L002', batchId: 'B26Q4-01', courseName: 'AI商業應用證書', lessonDate: '2026-10-28', hours: 3, remark: '實習練習' },
    { logId: 'L003', batchId: 'B26Q4-02', courseName: '網絡安全入門', lessonDate: '2026-11-02', hours: 2, remark: '' },
    { logId: 'L004', batchId: 'B26Q4-01', courseName: 'AI商業應用證書', lessonDate: '2026-11-09', hours: 3, remark: '' }
  ]);

  // 提取所有年月選項
  const monthOptions = useMemo(() => {
    const set = new Set<string>();
    logs.forEach(item => {
      const ym = item.lessonDate.slice(0, 7);
      set.add(ym);
    });
    return Array.from(set).sort();
  }, [logs]);

  const [selectedYM, setSelectedYM] = useState<string>(monthOptions[0] ?? '');

  const filteredLogs = useMemo(() => {
    return logs.filter(item => item.lessonDate.slice(0, 7) === selectedYM);
  }, [logs, selectedYM]);

  const monthTotalHours = useMemo(() => {
    return filteredLogs.reduce((sum, item) => sum + item.hours, 0);
  }, [filteredLogs]);

  const allTotalHours = useMemo(() => {
    return logs.reduce((sum, item) => sum + item.hours, 0);
  }, [logs]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">教學時數記錄 Teaching Hour Log</h1>
      <p className="text-gray-500 mb-6">按年份月份查閱已登記教學時數，用作薪金計算參考</p>

      <div className="mb-6">
        <label className="text-sm text-gray-600 block mb-2">選擇年月</label>
        <select
          value={selectedYM}
          onChange={(e) => setSelectedYM(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-2 bg-white min-w-[200px]"
        >
          {monthOptions.map(ym => (
            <option key={ym} value={ym}>{ym}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-slate-700">
            本月累計時數：
            <span className="font-bold text-blue-600 text-lg ml-2">{monthTotalHours} h</span>
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-slate-700">
            全年累計總時數：
            <span className="font-bold text-blue-600 text-lg ml-2">{allTotalHours} h</span>
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">記錄ID</th>
              <th className="p-3 text-left">班別</th>
              <th className="p-3 text-left">課程名稱</th>
              <th className="p-3 text-left">上課日期</th>
              <th className="p-3 text-center">時數</th>
              <th className="p-3 text-left">備註</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map(l => (
              <tr key={l.logId} className="border-t border-gray-100 hover:bg-gray-50">
                <td className="p-3 font-mono">{l.logId}</td>
                <td className="p-3">{l.batchId}</td>
                <td className="p-3">{l.courseName}</td>
                <td className="p-3">{l.lessonDate}</td>
                <td className="p-3 text-center">{l.hours}h</td>
                <td className="p-3">{l.remark || '-'}</td>
              </tr>
            ))}
            {filteredLogs.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-gray-400">該月份沒有教學記錄</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
