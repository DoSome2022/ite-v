import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import AboutContent from './AboutContent';

export const metadata = {
  title: "關於我們｜InnoTrendEDU 香港科技培訓中心",
  description: "認識InnoTrendEDU的理念、教學優勢，了解我們的企業科技培訓、NITTP資助課程，聯絡我們查詢團體或個人課程。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Nav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
}
