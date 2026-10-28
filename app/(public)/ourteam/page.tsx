import type { Metadata } from 'next';
import OurTeamClient from './OurTeamClient';

export const metadata: Metadata = {
  title: '我們的團隊｜宏業創科教育',
  description: '教師隊伍平均擁有超過15年的職業經驗，成員均為現職於各大政府認可院校的專業人士，具備深厚學術背景與豐富企業服務案例。',
  alternates: {
    canonical: '/ourteam',
  },
};

export default function OurTeamPage() {
  return <OurTeamClient />;
}
