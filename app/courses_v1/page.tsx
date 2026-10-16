import type { Metadata } from 'next';
import CoursesClient from './CoursesClient';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '課程體系｜宏業創科教育',
  description: '根據你的崗位、行業和職業目標，選擇最適合你的學習路徑，從效率、風險控制到人才成長，全面提升競爭力。',
  alternates: {
    canonical: '/courses',
  },
};

export default function CoursesPage() {
  return (
  <>
    <Nav />
    <CoursesClient />
    <Footer />
  </>
  )
}
