import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactFormSection from './ContactFormSection';

export const metadata = {
  title: "聯絡我們｜InnoTrendEDU 香港科技培訓中心",
  description: "聯絡InnoTrendEDU查詢個人科技進修、企業客製培訓、NITTP資助課程。可填寫網上查詢表單，WhatsApp或親臨我們培訓中心。",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <ContactFormSection />
      <Footer />
    </>
  );
}
