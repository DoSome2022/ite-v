import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CoreCourseContent from './CoreCourseContent';

export const metadata = {
  title: "核心課程體系｜InnoTrendEDU 香港企業科技培訓中心",
  description: "InnoTrendEDU企業核心培訓課程，包含網絡安全、AI應用、數據分析、Python、工作流程自動化、SQL、Web開發等NITTP資助課程，幫香港中小企數碼轉型。",
};

export default function CorePage() {
  return (
    <>
      <Nav />
      <CoreCourseContent />
      <Footer />
    </>
  );
}
