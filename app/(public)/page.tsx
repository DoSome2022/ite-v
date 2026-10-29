'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import MatrixGridHeroBg from '@/components/MatrixGridHeroBg';

// 教師團隊數據｜中英雙語簡介（保留名字，移除頭像avatar相關渲染，數據保留備用）
const teamMembers = [
  {
    id: 1,
    name: "Mr. Aaron Wai",
    avatar: "/Teacher_WaiLung.webp",
    title: "跨領域科技與管理講師",
    bio: "With a multidisciplinary background that bridges tech, finance, sales, and leadership, he brings hands-on corporate experience from building systems, managing teams, and scaling businesses in Asia, all while focusing on practical teaching approaches that emphasize job-ready skills in web development, automation, and data analysis.",
    bioZH: "具備科技、金融、銷售與管理跨領域經驗，曾於亞洲負責系統開發、團隊管理與業務擴展，專注實務教學，教授網頁開發、自動化與數據分析等可直接應用於職場的技能。"
  },
  {
    id: 2,
    name: "Mr. Honcy Lee",
    avatar: "/Teacher_HoncyLee.webp",
    title: "金融科技與數據分析創辦人",
    bio: "The Founder and Director of an IT and financial data analytics company, a former Managing Director at a private tech company, and over 10 years of experience in multinational financial institutions. 10+ Years in Finance & Tech, Now Training the Next Generation of Analysts.",
    bioZH: "資訊科技及金融數據分析公司創辦人，曾任私人科技公司董事總經理，於跨國金融機構擁有超過10年經驗，專門培育新一代數據分析人才。"
  },
  {
    id: 3,
    name: "Mr. Eric",
    avatar: "/Teacher_Eric.png",
    title: "ERP轉型與中小企成長導師",
    bio: "ERP Transformation Mentor with over 15 years of experience in defining industry pain points and driving strategic solutions. As a SME Growth Turbocharger, Eric excels at identifying and capitalizing on opportunities for small and medium enterprises, helping them scale and thrive in a competitive landscape.",
    bioZH: "ERP轉型導師，擁有15年以上行業經驗，擅長拆解中小企業痛點，制定企業數碼轉型方案，協助中小企把握商機、擴展業務。"
  },
];

export default function ITEEducationCenter() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Nav />
      {/* ========== Hero 全幅背景 Banner ========== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Matrix 數字海波浪背景 (Client Component) */}
        <div className="absolute inset-0 z-0">
          <MatrixGridHeroBg />
          {/* 半透明白色遮罩，方便文字閱讀 */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-xl bg-white/90 p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-semibold text-cyan-700 mb-4">
              InnoTrendEDU｜宏業教育中心
            </h1>
            <p className="text-xl font-light text-gray-600 mb-4">
              中小企數碼轉型｜NITTP資助課程
            </p>
            <p className="text-gray-600 mb-8 font-light">
              我們提供企業團體培訓與個人公開進修，協助企業建立可複製的工作方式，也幫助在職人士提升AI、數據分析及網絡安全能力。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/corporate">
                <button className="px-5 py-2 bg-cyan-700 text-white rounded-3xl flex items-center gap-2 hover:bg-cyan-800 transition-colors">
                  <span>企業培訓計劃</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
              <Link href="/courses">
                <button className="px-5 py-2 bg-slate-700 text-white rounded-3xl flex items-center gap-2 hover:bg-slate-800 transition-colors">
                  <span>個人科技進修</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 個人科技進修｜B2C (課程介紹 + 課程特色 合併) ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-2 border-slate-200 rounded-xl my-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* 左側背景圖卡片 */}
          <div className="relative h-36 md:h-96 rounded-xl overflow-hidden order-1 md:order-none">
            <Image
              src="/image/home/banner_1.png"
              alt="香港個人AI課程｜數據分析入門進修班，在職人士技能提升課程"
              fill
              sizes="(max-width:768px)100vw,50vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/10"></div>
          </div>
          <div>
            <div className="border-l-4 border-slate-700 pl-4 mb-6">
              <h2 className="text-4xl font-semibold text-gray-800">個人科技進修課程</h2>
              <p className="text-gray-500 mt-2">公開小班｜在職人士進修｜可獲培訓證書</p>
            </div>
            <p className="text-gray-600 mb-4 font-light">
              提供AI、數據分析入門、網絡安全入門公開班，小班實戰教學，適合在職人士提升職場數碼技能。
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">AI課程</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">數據分析入門</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">網絡安全入門</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm">公開小班</span>
            </div>
            <Link href="/courses">
              <button className="px-5 py-2 bg-slate-700 text-white rounded-3xl flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <span>瀏覽個人課程及報名</span>
                <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
        {/* 個人課程特色，放在同一section內下方 */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">個人進修課程特色</h3>
          <p className="text-gray-600 ">小班實戰教學，適合在職人士利用工餘時間提升職場數碼技能</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">小班互動教學</h4>
            <p className="text-sm text-gray-600">每班人數有限，導師可照顧每位學員，現場即時解答疑問</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">職場導向實習</h4>
            <p className="text-sm text-gray-600">案例取自香港職場場景，學完可直接套用到日常工作</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">課程證書</h4>
            <p className="text-sm text-gray-600">完成課程可獲培訓證書，用作個人技能履歷</p>
          </div>
        </div>
      </section>

      {/* ========== 企業培訓計劃｜B2B (課程介紹 + 靈活培訓模式 合併) ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-xl my-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="border-l-4 border-cyan-700 pl-4 mb-6">
              <h2 className="text-4xl font-semibold text-cyan-800">企業培訓計劃課程</h2>
              <p className="text-gray-500 mt-2">NITTP資助｜中小企數碼轉型｜上門客製培訓</p>
            </div>
            <p className="text-gray-600 mb-4 font-light">
              為企業提供AI、數據分析、網絡安全及客製化培訓，協助團隊把科技能力真正落地到日常營運。
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">企業AI培訓</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">數據分析課程</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">網絡安全培訓</span>
              <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">客製化團培</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/corporate">
                <button className="px-5 py-2 bg-cyan-700 text-white rounded-3xl flex items-center gap-2 hover:bg-cyan-800 transition-colors">
                  <span>瀏覽企業課程</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
              <Link href="https://wa.me/51001888">
                <button className="px-5 py-2 border-2 border-cyan-700 text-cyan-700 rounded-3xl flex items-center gap-2 hover:bg-cyan-700 hover:text-white transition-colors">
                  <span>WhatsApp查詢</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </div>
          {/* 右側背景圖卡片 */}
          <div className="relative h-36 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/image/home/banner_2.png"
              alt="企業科技培訓｜AI、數據分析、網絡安全團隊課程，NITTP資助中小企數碼轉型"
              fill
              sizes="(max-width:768px)100vw,50vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-cyan-900/10"></div>
          </div>
        </div>
        {/* 靈活培訓模式，放在同一section內下方 */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-800 mb-3">靈活企業培訓模式</h3>
          <p className="text-gray-600">按企業場地、時間、團隊規模，彈性安排客製授課形式</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">企業現場內訓</h4>
            <p className="text-sm text-gray-600">到貴公司辦公室/廠房實體授課，直接使用企業真實個案練習</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">線上同步培訓</h4>
            <p className="text-sm text-gray-600">遠端直播授課，跨分部員工同步參與，節省交通與場地成本</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-2">混合式培訓方案</h4>
            <p className="text-sm text-gray-600">線上預習 + 實體工作坊，搭配課後練習與跟進輔導</p>
          </div>
        </div>
      </section>

      {/* ========== 企業培訓客戶｜B2B 行業覆蓋標籤 ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-3">企業培訓客戶</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              多年來為香港各行各業企業提供定制內部培訓，累計完成數十場企業內訓，逾千名在職員工參與課程。
              服務對象涵蓋中小企、連鎖集團及專業服務團隊，課程包含網絡安全、AI應用、數據分析、流程自動化等企業數碼能力培訓，協助團隊提升數碼技能與營運效率。
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">零售連鎖</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">金融服務</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">製造廠房</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">工程公司</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">專業服務公司</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">科技中小企</span>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">NGO機構</span>
          </div>
        </div>
      </section>

      {/* ========== 定制培訓流程｜B2B ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-3">定制培訓流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">由需求對接到課後成效跟進，一套完整企業培訓方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-5">
              <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-semibold mb-2">需求諮詢</h3>
              <p className="text-sm text-gray-600">了解業務痛點、團隊現有能力與培訓目標</p>
            </div>
            <div className="text-center p-5">
              <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-semibold mb-2">課程定制</h3>
              <p className="text-sm text-gray-600">設計行業專屬案例、練習與評估標準</p>
            </div>
            <div className="text-center p-5">
              <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-semibold mb-2">培訓執行</h3>
              <p className="text-sm text-gray-600">實體/線上授課，現場互動與實習練習</p>
            </div>
            <div className="text-center p-5">
              <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center mx-auto mb-3">4</div>
              <h3 className="font-semibold mb-2">成效跟進</h3>
              <p className="text-sm text-gray-600">課後回饋、知識鞏固，協助落地應用</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 底部雙目標CTA｜同時服務企業及個人學員【新增平衡用】 ========== */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-100 mb-4">準備開始你的數碼技能培訓？</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            不論是企業團隊培訓或是個人在職進修，歡迎查詢課程詳情。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/corporate">
              <button className="px-6 py-3 bg-cyan-700 text-white rounded-3xl flex items-center gap-2 hover:bg-cyan-800 transition-colors">
                <span>企業培訓查詢</span>
                <ChevronRight size={16} />
              </button>
            </Link>
            <Link href="/courses">
              <button className="px-6 py-3 bg-slate-700 text-white rounded-3xl flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <span>瀏覽個人課程</span>
                <ChevronRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== 教育團隊區｜共用信任模塊（保留名字，無頭像） ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">我們專業的教育團隊</h2>
        <p className="text-gray-500 text-center mb-8">擁有企業實戰經驗的講師團隊</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-cyan-700 text-sm font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {member.bioZH}
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/ourteam">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
              <span>了解更多講師資訊</span>
              <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
