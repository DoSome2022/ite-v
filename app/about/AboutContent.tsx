'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle } from 'lucide-react';

export default function AboutContent() {
  return (
    <>
      {/* 首頁 Banner 區 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-light text-gray-400 mb-2">INNOVATION TREND EDUCATION</h2>
            <h3 className="text-2xl font-semibold text-cyan-700 mb-4">InnoTrendEDU 企業科技轉型的起點</h3>
            <p className="text-gray-600 mb-6 font-bold">
              專注於把科技能力「真正落地」到企業日常營運之中。我們多年來應對過不同行業的培訓與轉型需要，熟悉各類團隊常見痛點：流程靠人手、資料分散、報表慢又唔準、跨部門協作斷層、資訊安全靠「小心啲」但無方法論。
            </p>
            <p className="text-gray-600 mb-6 font-light">
              教師隊伍平均擁有超過15年的實戰經驗，成員均為現職於各大政府認可院校的專業人士。此外，我們的講師也包括科技創業公司的創始人，他們不僅具備深厚的學術背景，還擁有豐富的企業服務案例，並熟悉行業的最新技術發展趨勢。教師們將分享一手的創業經驗與市場洞察，讓學員在學習過程中獲得寶貴的行業洞見。
            </p>
            <p className="text-gray-600 mb-6 font-light">
              因此，我們的角色不止是授課——而是以行業理解＋可執行方案，協助企業建立可複製的工作方式，甚至支援跨企業/跨部門的指導與能力對齊，從效率、風險控制到人才成長，全面提升競爭力。
            </p>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg">
            <Image
              src="/banner.jpg"
              alt="ITE科技城市"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-linear-to-t from-white/90 to-transparent"></div> */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-600/30"></div>
          </div>
        </div>
      </section>

      {/* ITE核心: 創新與改變 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-light text-gray-500 mb-8">ITE核心: 創新與改變</h2>
        <div className="flex justify-between gap-2 md:gap-5">
          <div className="md:ml-20">
            <div className="overflow-hidden">
              <Image
                src="/b1.png"
                alt="科技圖示"
                width={200}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="/b2.png"
                alt="科技建築"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <Image
              src="/b3.png"
              alt="科技建築"
              width={200}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center ml-5">
            <p className="text-gray-600 font-light">
              在科技驅動未來的時代，IT人才是社會發展的核心引擎。ITE教育中心自2019年成立以來，便肩負著一個清晰的使命：建立一個連接「教育」、「產業」與「科技」的堅實橋樑。我們不僅是傳授技能的培訓機構，更是孕育下一代科技領袖的創新搖籃。
            </p>
          </div>
        </div>
      </section>

      {/* ITE優勢 Why Us */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">ITE優勢｜Why Us？</h2>
        <p className="text-gray-600 mt-2 text-lg">
          我們最核心價值是<strong className="text-cyan-700">技術轉移落地</strong>：循序漸進、由淺入深，學完即有成果。
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">實戰導向教學，學完即刻用</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="text-cyan-600 mt-1 shrink-0" size={18} />
                <span>每個課題以 Demo 示範帶領，講師親自示範操作流程</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-cyan-600 mt-1 shrink-0" size={18} />
                <span>學員跟隨實習，親手操作，做到成功出結果</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="text-cyan-600 mt-1 shrink-0" size={18} />
                <span>課後提供可直接帶回公司的流程文件、模板、自動化小工具</span>
              </li>
            </ul>
            <p className="mt-4 text-gray-600">
              確保學員<strong>做到、用到、交到</strong>，唔只背理論，課後可直接套用於日常工作。
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">NITTP 認可培訓｜課程最高50%資助</h3>
            <p className="text-gray-600 mb-4">
              InnoTrendEDU 為「新型工業化及科技培訓計劃（NITTP）」認可培訓機構，企業報讀合資格課程，可申請課程費用<strong className='text-xl text-cyan-700'>50%資助</strong>，降低企業培訓成本。
            </p>
            <p className="text-gray-600">
              課程經嚴格審核，針對香港本地企業需要，覆蓋多個行業範疇：資訊科技、AI數據分析、數碼媒體、電子工程、物流、零售出入口、可持續發展、品質改善、生物醫護科技等。
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/enterprise-courses">
            <button className="px-5 py-2 border-cyan-800 border-2 text-gray-800 rounded-3xl flex items-center gap-2 hover:bg-cyan-800 hover:text-white transition-colors">
              <span>查看所有企業課程</span>
              <ChevronRight size={16} />
            </button>
          </Link>
          <Link href="https://wa.me/51001888">
            <button className="px-5 py-2 border-cyan-800 border-2 text-gray-800 rounded-3xl flex items-center gap-2 hover:bg-cyan-800 hover:text-white transition-colors">
              <span>索取企業客製化方案 / 報價</span>
              <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* 適合對象 SEO Section */}
      <section className="py-12 border-t border-slate-200">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">適合哪些企業報讀培訓？</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-cyan-700 mb-2">中小企業管理團隊</h3>
            <p className="text-gray-600">想簡化內部流程、減少人手重複工作，利用數碼工具提升團隊生產力。</p>
          </div>
          <div className="p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-cyan-700 mb-2">IT及營運部門</h3>
            <p className="text-gray-600">學習數據處理、自動化、資訊安全，建立穩定、可擴展的內部系統。</p>
          </div>
          <div className="p-6 rounded-lg shadow-sm border-gray-200">
            <h3 className="font-semibold text-cyan-700 mb-2">人力資源 / 培訓負責人</h3>
            <p className="text-gray-600">尋找NITTP資助企業培訓，為團隊安排系統化、可落地的科技課程。</p>
          </div>
        </div>
      </section>

      {/* 常見Q&A 提升SEO */}
      <section className="py-12 border-t border-slate-200">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">常見問題 FAQ</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">InnoTrendEDU 是NITTP認可培訓機構嗎？</h3>
            <p className="text-gray-600 mt-2">是的。我們為NITTP新型工業化及科技培訓計劃認可培訓機構，合資格企業報讀指定課程可申請最多50%課程資助。</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">企業培訓可以客製化內容嗎？</h3>
            <p className="text-gray-600 mt-2">可以。我們可按企業業務場景，設計專屬課程內容，例如部門自動化、數據報表、AI應用、資訊安全等內部培訓。</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">課程會在企業公司上堂，還是到InnoTrendEDU培訓中心？</h3>
            <p className="text-gray-600 mt-2">兩種模式都可以選擇：可到貴公司現場授課，或安排學員到我們培訓中心上課。</p>
          </div>
        </div>
      </section>

      {/* 聯絡CTA */}
      <section className="py-12 border-t border-slate-200">
        <div className="bg-slate-100 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-4">想了解更多企業科技培訓方案？</h2>
          <p className="text-gray-700 mb-6">歡迎聯絡我們，免費諮詢企業培訓需求，查詢NITTP資助申請細節與課程報價。</p>
          <div className="flex flex-wrap gap-4">
            <Link href="https://wa.me/51001888">
              <button className="px-6 py-3 bg-cyan-700 text-white rounded-3xl flex items-center gap-2 hover:bg-cyan-800 transition-colors">
                <span>WhatsApp 即時查詢</span>
                <ChevronRight size={16} />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 border-cyan-700 border-2 text-cyan-700 rounded-3xl flex items-center gap-2 hover:bg-cyan-700 hover:text-white transition-colors">
                <span>前往聯絡我們</span>
                <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
