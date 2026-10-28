import type { Metadata } from 'next';
import CorporateClient from './CorporateClient';
import hero from '@/public/corporate_banner.jpg';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: '企業培訓｜企業AI培訓與團隊課程',
  description: '提供企業專屬AI培訓、內部工作坊與顧問服務，協助團隊落地AI工具，提升生產力。',
  openGraph: {
    title: '企業培訓｜企業AI培訓與團隊課程',
    description: '提供企業專屬AI培訓、內部工作坊與顧問服務，協助團隊落地AI工具，提升生產力。',
    url: '/corporate',
    type: 'website',
    images: [hero.src],
  },
  alternates: {
    canonical: '/corporate',
  },
};


export default function CorporatePage() {
  return (
    <>
      <Nav />

      {/* 所有互動UI抽去Client組件 */}
      <CorporateClient />
    </>
  );
}