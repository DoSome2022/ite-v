'use client';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// 合作機構數據
const partners = [
  { id: 1, name: "AIA", logo: "/partners/AIA.jpeg" },
  { id: 2, name: "BNI", logo: "/partners/BNI.jpeg" },
  { id: 3, name: "CT", logo: "/partners/CT.jpeg" },
  { id: 4, name: "HKCYS", logo: "/partners/HKCYS.jpeg" },
  { id: 5, name: "HKJC", logo: "/partners/HKJC.jpeg" },
];

// 教師團隊數據｜中英雙語簡介
const teamMembers = [
  {
    id: 1,
    name: "Mr. Aaron Lung",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Nav />
      {/* ========== 首屏Banner｜H1 SEO核心 ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-semibold text-cyan-700 mb-4">
              InnoTrendEDU｜香港企業科技培訓中心
            </h1>
            <p className="text-xl font-light text-gray-500 mb-4">
              中小企數碼轉型｜NITTP資助課程｜企業團體培訓及個人科技進修
            </p>
            <p className="text-gray-600 mb-6 font-light">
              我們提供實戰導向科技培訓，分為<strong>企業團體培訓計劃</strong>及<strong>個人公開進修班</strong>。企業客戶可申請NITTP課程資助；個人可報讀小班AI、數據分析、網絡安全課程提升職場技能。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/enterprise-courses">
                <button className="px-5 py-2 bg-cyan-700 text-white rounded-3xl flex items-center gap-2 hover:bg-cyan-800 transition-colors">
                  <span>企業培訓計劃</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
              <Link href="/individual-courses">
                <button className="px-5 py-2 border-2 border-slate-700 text-slate-800 rounded-3xl flex items-center gap-2 hover:bg-slate-800 hover:text-white transition-colors">
                  <span>個人科技進修課程</span>
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-lg">
            <Image
              src="/banner.jpg"
              alt="香港企業科技培訓｜中小企數碼轉型課程、個人AI進修班"
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========== 企業培訓計劃課程｜B2B Section（淺灰底色，視覺區分） ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-xl my-8">
        <div className="border-l-4 border-cyan-700 pl-4 mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">企業培訓計劃課程</h2>
          <p className="text-gray-500 mt-2">NITTP資助｜中小企數碼轉型｜上門團體客製培訓</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">1</div>
            <h3 className="text-xl font-medium text-gray-800 mb-4 ml-7">
              CyberSecurity｜企業網絡安全培訓
            </h3>
            <ul className="pl-5 text-gray-600 space-y-3 ml-2">
              <li>
                <span className="font-semibold text-gray-800">痛點：</span>
                駭客無處不在，中招未必因公司規模大，多因「意識唔夠」同「習慣唔好」。
              </li>
              <li>
                <span className="font-semibold text-gray-800">教學：</span>
                從安全意識入手，涵蓋帳號、密碼、權限、釣魚、社工、裝置與雲端使用習慣，搭配生活化＋企業真實案例。
              </li>
              <li>
                <span className="font-semibold text-gray-800">成果：</span>
                認知高風險行為、學會預防與判斷可疑情況，將安全習慣融入企業工作流程，減少「唔小心」造成的災難。
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">2</div>
            <h3 className="text-xl font-medium text-gray-800 mb-4 ml-7">
              AI｜企業AI培訓
            </h3>
            <ul className="pl-5 text-gray-600 space-y-3 ml-2">
              <li>
                <span className="font-semibold text-gray-800">痛點：</span>
                不懂AI實際應用方法，僅會操作工具，無法將AI融入企業日常工作創造價值。
              </li>
              <li>
                <span className="font-semibold text-gray-800">教學：</span>
                由入門到應用，教會AI各場景實用技巧，涵蓋Prompt提問、結果驗證、避坑方法，搭配企業工作實例教學。
              </li>
              <li>
                <span className="font-semibold text-gray-800">成果：</span>
                倍數提升團隊工作效率，平均節省接近1/3時間，將人力轉移到更高價值的工作中。
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">3</div>
            <h3 className="text-xl font-medium text-gray-800 mb-4 ml-7">
              Data Analytics｜企業數據分析課程
            </h3>
            <ul className="pl-5 text-gray-600 space-y-3 ml-2">
              <li>
                <span className="font-semibold text-gray-800">痛點：</span>
                認為數據分析與自身無關，工作中需交KPI卻不懂「用數字講嘢」，企業決策缺乏數據支持。
              </li>
              <li>
                <span className="font-semibold text-gray-800">教學：</span>
                由實務問題出發，涵蓋數據提取、整理、清洗、分析、報表製作與數據呈現，連接至企業決策層面。
              </li>
              <li>
                <span className="font-semibold text-gray-800">成果：</span>
                學會用數據協助企業減成本、提效率，為發展找到更清晰的方向，各崗位都能活用數據。
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 text-6xl font-bold text-gray-200">4</div>
            <h3 className="text-xl font-medium text-gray-800 mb-4 ml-7">
              企業客製化培訓課程｜上門團體培訓
            </h3>
            <ul className="pl-5 text-gray-600 space-y-3 ml-2">
              <li>
                <span className="font-semibold text-gray-800">課程設計：</span>
                按行業、部門、崗位、現有系統與痛點，度身訂造企業數碼轉型學習路線與案例。
              </li>
              <li>
                <span className="font-semibold text-gray-800">授課形式：</span>
                上門／到校／到公司授課，配合企業時間（平日/週末/晚間），支援實體＋線上混合模式。
              </li>
              <li>
                <span className="font-semibold text-gray-800">團報優勢：</span>
                適用政府機構、上市公司、非牟利機構，支持同公司／同部門／跨部門組班，統一目標與交付物，學完即落地。
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 h-80 overflow-hidden rounded-xl">
          <Image
            src="/core.jpg"
            alt="企業科技課程 AI 數據分析 網絡安全培訓 NITTP資助"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Link href="/enterprise-courses">
            <button className="px-6 py-2 bg-cyan-700 text-white rounded-lg flex items-center gap-2 hover:bg-cyan-800 transition-colors">
              <span>查看全部企業課程</span>
              <ChevronRight size={16} />
            </button>
          </Link>
          <Link href="https://wa.me/51001888">
            <button className="px-6 py-2 border-2 border-cyan-700 text-cyan-700 rounded-lg flex items-center gap-2 hover:bg-cyan-700 hover:text-white transition-colors">
              <span>WhatsApp 查詢企業方案</span>
              <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* ========== 個人科技進修課程｜B2C Section（白底 + 深藍左邊框，和B2B強烈區分） ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-2 border-slate-200 rounded-xl my-8">
        <div className="border-l-4 border-slate-700 pl-4 mb-6">
          <h2 className="text-4xl font-semibold text-gray-800">個人科技進修課程</h2>
          <p className="text-gray-500 mt-2">公開小班｜在職人士自我增值｜可獲培訓證書</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-600 mb-4 font-light">
              想自我增值、提升職場競爭力？ITE 提供適合在職人士的公開班 <strong>AI課程、數據分析入門課程、網絡安全入門班</strong>，小班教學，實戰練習為主。
            </p>
            <p className="text-gray-600 mb-4 font-light">
              課程由具企業實戰經驗講師任教，不用深厚技術背景都可以入門，學到可直接用於日常工作的技能，適合上班族、文職、管理人員、創業人士。
            </p>
            <p className="text-gray-600 mb-6 font-light">
              彈性上課時間，實體或線上選擇，完成課程可獲培訓證書，幫助晉升與技能履歷升級。
            </p>
            <Link href="/individual-courses">
              <button className="px-5 py-2 bg-slate-700 text-white rounded-3xl flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <span>瀏覽個人課程及報名</span>
                <ChevronRight size={16} />
              </button>
            </Link>
          </div>
          <div className="relative h-72 overflow-hidden rounded-lg">
            <Image
              src="/individual-course.jpg"
              alt="香港個人AI課程 數據分析入門進修班 在職人士技能提升"
              fill
              sizes="(max-width:768px)100vw,50vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========== 合作機構區 H2｜信任證據 ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-xl my-8">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-2">過往曾經合作機構</h2>
        <p className="text-gray-500 text-center mb-8">我們曾服務不同行業的企業與機構</p>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="w-24 h-12 overflow-hidden flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={`${partner.name} 合作機構 ITE企業培訓`}
                width={100}
                height={100}
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ========== 教育團隊區 H2｜師資信任 ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-2">我們專業的教育團隊</h2>
        <p className="text-gray-500 text-center mb-8">擁有企業實戰經驗的講師團隊</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="relative w-32 h-32 rounded-full border-2 border-gray-200 overflow-hidden mx-auto mb-4">
                <Image
                  src={member.avatar}
                  alt={`${member.name} ${member.title} ITE講師`}
                  fill
                  sizes="(max-width: 640px) 100px, 128px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-1">{member.name}</h3>
              <p className="text-cyan-700 text-sm font-medium mb-3">{member.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
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
