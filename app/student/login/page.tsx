import type { Metadata } from 'next';
import StudentLoginClient from './StudentLoginClient';

export const metadata: Metadata = {
  title: '學生登入｜宏業創科教育',
  description: 'ITE學生專屬登入頁，輸入帳號密碼登入學生系統，查閱課堂筆記、上課時間及作業。',
  alternates: {
    canonical: '/student/login',
  },
};

export default function StudentLoginPage() {
  return <StudentLoginClient />;
}
