'use client';
import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ChevronUp, ChevronDown } from 'lucide-react';
import WaveHeroBg from '@/components/WaveHeroBg';

// 導入圖片資源
import Image from "next/image"; // 導入 Next.js 的 Image 組件
import Teacher_WaiLung from "@/public/Teacher_WaiLung.webp";
import Teacher_HoncyLee from "@/public/Teacher_HoncyLee.webp";
import Teacher_Eric from "@/public/Teacher_Eric.png";
import Teacher_JTsang from "@/public/Teacher_JTsang.png";
import Teacher_Antoninus from "@/public/Teacher_Antoninus.jpeg";
import Teacher_CSFung from "@/public/Teacher_CSFung.png";
import Teacher_Oscar from "@/public/Teacher_Oscar.jpeg";


// 教師數據
const teamMembers = [
  {
    id: 1,
    name: "Mr. Aaron Wai",
    position: "Teacher",
    avatar: Teacher_WaiLung,
    intro: "Accomplished and versatile professional with enterprise experience in sales management, business forecasting, and planning, supported by a strong academic background. Wai holds graduate and postgraduate degrees in engineering and computer sciences, bringing a unique blend of technical expertise and entrepreneurial drive to the table. He has successfully navigated both the commercial and technical landscapes, with a proven track record in expanding distribution networks in the South China market and implementing automated systems.",
    technicalBg: [
      "Solid technical expertise in engineering and computer sciences, with hands-on experience in digital imaging, software, and hardware products, as well as network fault recovery strategies.",
      "Proficient in Full-Stack Development: Extensive command of HTML, CSS, JavaScript, React.JS, Node.js, Express, Python, and R.",
      "Advanced skills in Python Frameworks: Specializes in Django development including Model-View-Template (MVT) Architecture, Object-Relational Mapping (ORM), built-in Admin Interfaces, scalability, third-party integrations, and flexible deployment."
    ],
    educationalContrib: [
      "Educational Leadership: Successfully led City University HK (ERB) programs, teaching certifications in Frontend Web Developer (ReactJS) and Backend Web Developer (Node.js, Express, API, MVC).",
      "Specialized Instruction: Experienced in teaching complex topics such as data mining, machine learning in financial markets using Python and R, and web scraping with Selenium.",
      "Strategic Business Development: demonstrated ability to orchestrate interdepartmental teamwork to strengthen web capabilities, manage marketing functions (product management, localization), and conduct technology transfer initiatives.",
      "Strong believer that we should take from the society and give back to the society."
    ],
    expertise: [
      "Web Development: HTML/CSS/JavaScript/React.JS/Node.js/Express",
      "Data Science: Python/R/Selenium/Data Mining/Machine Learning in Financial Markets",
      "Framework Architecture: Django/MVT/ORM/API/MVC",
      "Business Management: Sales Forecasting/Budgeting/Personnel Management/Inventory Control",
      "Financial & Risk Management: Accounting Systems/Interest & FX Risk/Account Payment Risk",
      "Marketing & Sales: Product Localization/Exhibitions/South China Market Development",
      "Consulting: Web and System Development Initiatives"
    ],
    bio: "He excels at employing a broad spectrum of professional experiences to act as a consultant for web and system development initiatives. His experience allows him to foster innovation through interdepartmental teamwork and deliver targeted technology transfers across diverse organizations."
  },
  {
    id: 2,
    name: "Mr. Honcy Lee",
    position: "Teacher",
    avatar: Teacher_HoncyLee,
    intro: "Accomplished and versatile professional with a high level of expertise in finance and accounting, supported by a strong educational foundation and extensive industry experience. Mr. Lee holds a BA in Accounting & Finance and a Postgraduate Diploma in Financial Analytics and Algo Trading (with distinction), bringing a unique entrepreneurial drive to the table. He combines over a decade of experience in multinational financial institutions with a leadership role as a founder and director of an IT and financial data analytics company.",
    technicalBg: [
      "Solid technical expertise in Data Science and Financial Technology, bridging traditional accounting principles with advanced algorithmic trading and analysis strategies.",
      "Proficient in Data Analysis and Machine Learning: Deep command of the Python ecosystem including Pandas, NumPy, Polars, and Numba, alongside ML frameworks like Scikit-Learn, XGBoost, TensorFlow, and Keras.",
      "Advanced skills in Data Integration and Automation: Specialized in complex Web Scraping (BeautifulSoup, Selenium, Scrapy, Session management), Cross-platform Automation (Mac/Linux/Windows), and Cloud Computing (AWS, Google Colab). Strong capability in Version Control (Git) and Web Development (Django, APIs)."
    ],
    educationalContrib: [
      "Experienced Educator: Successfully taught over 600 hours of Python Data Analytics at several institutes in Hong Kong, translating complex data concepts into actionable skills for students.",
      "Leadership and Enterprise Experience: Serves as Founder and Director for a financial data analytics firm and has held the position of Managing Director in a private tech company.",
      "Institutional Expertise: Possesses over 10 years of robust work experience within various multinational financial institutions, ensuring a deep understanding of corporate financial and accounting report analysis."
    ],
    expertise: [
      "Data Analysis Tools: Python/SQL/Pandas/NumPy/Polars/Numba/ScPy",
      "Machine Learning: Sklearn/XGBoost/TensorFlow/Keras",
      "Data Visualization: Tableau/PowerBI/Matplotlib/Seaborn/crazySession",
      "Cloud Services: Google Colab/Kens",
      "Version Control: Git/GitHub",
      "Web Development: Django/HTML/CSS/Javascript/APIs",
      "Automation: Scheduled Task in all Mac/Linux/Windows",
      "Finance & Business: Corporate Financial Report/Accounting Report analysis/Startup kickstart project"
    ],
    bio: "He excels at communicating complex concepts and empowering students with the analytical skills needed to thrive in data-driven environments. His expertise in both the theoretical and practical aspects of finance, accounting, and data analysis makes him a valuable asset in any educational or professional setting."
  },
    {
    id: 3,
    name: "Mr. Eric",
    position: "Teacher",
    avatar: Teacher_Eric,
    intro: "Accomplished and versatile professional with extensive experience in full-stack development, enterprise system analysis, and emerging AI technologies. With a strong foundation as an Analyst Programmer spanning nearly a decade in ERP and management systems, Eric has successfully pivoted into the forefront of Artificial Intelligence and education. He holds a diverse range of recent professional certifications from Google in Cybersecurity, Data Analytics, UX Design, and AI, demonstrating a relentless commitment to upskilling and adapting to modern tech trends.",
    technicalBg: [
      "Solid technical expertise in full-stack web and mobile application development, proficient in Next.js, React, Node.js, Ionic, Python, and Django, supported by strong database management skills in PostgreSQL, MySQL, and MongoDB.",
      "Advanced skills in GenAI and Automation: Deeply experienced in LLM Inference, RAG deployment, Prompt Engineering, AIGC, and Agentic Automation using n8n and Python.",
      "Enterprise System Legacy: Over 9 years of robust experience designing and maintaining complex systems including ERPs (Electronics, F&B), Insurance Policy Management, and Logistics Waybill systems for MNCs and local corporations."
    ],
    educationalContrib: [
      "GenAI Educator: Currently serves as a teacher at Innovation Trend Education Centre, delivering regular and on-site practical training in cutting-edge topics such as Large Language Models (LLM), Agentic Automation, and Model Context Protocol (MCP).",
      "Digital Transformation Projects: As a freelance developer, successfully delivered high-profile projects including the EMSD Annual Report 2023, Web3 prototypes for TVP, and interactive React-based applications.",
      "Commitment to Mentorship: Recognized for character traits such as being analytical, logical, and responsible, with a specific focus on mentoring others in technical disciplines."
    ],
    expertise: [
      "Generative AI: LLM Inference/RAG Deployment/Prompt Engineering/n8n/Agentic Automation",
      "Web Frameworks: Next.js/React/Node.js/Django/Ionic",
      "Cloud & Infrastructure: AWS/GCP/Google IT Automation",
      "Databases: PostgreSQL/MySQL/MongoDB",
      "Enterprise Solutions: ERP Systems/Insurance Brokerage Systems/Logistics Management",
      "Specialized Certifications: Google Cybersecurity/Google Data Analytics/Google UX Design",
      "Development Tools: Git/Mobile App Development"
    ],
    bio: "He excels at bridging the gap between established enterprise architectures and innovative AI solutions, utilizing his analytical and problem-solving skills to mentor students and deploy practical, high-impact digital products."
  },
  {
    id: 4,
    name: "Mr. J Tsang",
    position: "Teacher",
    avatar: Teacher_JTsang,
    intro: "Accomplished and versatile Senior 3D Artist and Modeller with over two decades of industry experience in top-tier film production, animation, and video game development. TSANG brings a rich blend of traditional fine arts foundation and modern digital craftsmanship, contributing to international blockbuster films and major gaming titles. A dedicated professional with a proven track record of evolving from an Animator to a Senior Modeller, now expanding into modern web frameworks to bridge artistic vision with technical execution.",
    technicalBg: [
      "Solid technical expertise in 3D computer animation, digital sculpting, and real-time rendering, with profound experience in cinematic production pipelines for both film and games.",
      "Proficient in high-end 3D software and engines: Capable of executing complex modeling tasks using Maya, ZBrush, Blender, Softimage, and integrating assets into Unity3D and Unreal Engine.",
      "Advanced skills in Visual Production: Extensive experience in creating assets for high-profile projects such as TMNT, Astro Boy, Mulan (Disney), and Journey to the West: Conquering the Demons. Skilled in post-production using After Effects and Photoshop."
    ],
    educationalContrib: [
      "Senior Industry Contributor: Served as a core artistic talent for renowned studios including Imagi Animation Studios, Different Digital Design, and Lzybug Studio for over 20 years.",
      "Cross-Media Versatility: Successfully transitioned skills across mediums, from feature animations and live-action VFX to Game Cinematics (Xbox’s Monster Hunter Frontier) and specialized Pachinko animations.",
      "Recently updated skills with a 2024 Certificate in Python Web Framework Development (ERB), demonstrating adaptability to new technical workflows."
    ],
    expertise: [
      "3D Modeling & Sculpting: ZBrush / Maya / Blender / Softimage",
      "Game Engines: Unreal Engine / Unity3D",
      "Compositing & Imaging: After Effects / Photoshop",
      "Programming & Office: Python (Web Framework) / MS Office (Word, Excel, PowerPoint)",
      "Key Projects: TMNT / Astro Boy / Mulan / Journey to the West / Monster Hunter Frontier (CG)",
      "Languages: English / Chinese Typing",
    ],
    bio: "He excels at delivering high-quality visual assets that meet the rigorous demands of large-scale production environments, combining artistic flair with technical precision to bring characters and worlds to life."
  },
  {
  id: 5,
  name: "Mr. Antoninus Yeung",
  position: "Teacher",
  avatar: Teacher_Antoninus,
  intro: "Accomplished and versatile professional with a robust background in accounting, business management, and system re-engineering. Antoninus holds multiple graduate degrees in business disciplines, complemented by professional certifications as an accountant in Australia, the UK, and Hong Kong. With over 30 years of experience in commercial environments, he brings a unique blend of analytical skills and strategic insight to drive business innovation and optimize operational efficiency.",
  technicalBg: [
    "Solid technical expertise in database management, including relational databases (RDBMS) and NoSQL systems, with hands-on experience in Oracle, MSSQL, MySQL, and MongoDB.",
    "Proficient in Microsoft Office Suite and VBA, enhancing productivity and automating workflows.",
    "Familiar with business intelligence tools, including SharePoint, Power BI, and Power Automate, to facilitate data-driven decision-making."
  ],
  educationalContrib: [
    "In-House Coaching: Experienced in mentoring individuals and teams, fostering a collaborative environment that encourages professional growth and skill enhancement.",
    "Business System Re-engineering: Demonstrated ability to innovate business processes, enhancing operational efficiency and driving organizational success.",
    "Commercial Acumen: Proven track record in executing marketing strategies and managing complex business functions, ensuring alignment with organizational goals."
  ],
  expertise: [
    "Accounting & Financial Management: Professional Accountant with proficiency in financial analysis, budgeting, and risk management.",
    "Database Management: Expert in Oracle, MSSQL, MySQL, and MongoDB.",
    "Automation & Productivity: Advanced skills in Microsoft Office, VBA, and integrated business solutions.",
    "Business Development: Experienced in system re-engineering and innovation, focusing on creating efficient business models.",
    "Cyber Security: Knowledgeable in cybersecurity principles with a Certified Information Security Professional (CISP) credential."
    
  ],
  bio: "Antoninus excels at leveraging his extensive professional experience to act as a consultant for business system innovations. His background enables him to foster collaboration across departments and implement effective strategies that enhance organizational performance."
  },
  {
  id: 6,
  name: "Mr. Oscar Lo",
  position: "Analyst Programmer & Senior Educator",
  avatar: Teacher_Oscar,
  intro: "Oscar Lo is a distinguished Analyst Programmer and Senior Educator with an extensive track record in enterprise-level software development and technical training. With professional experience at IBM, he has spearheaded the development of high-profile enterprise platforms, specializing in microservices, API architecture, and high-performance commercial systems. As a high-volume educator, Oscar has taught over 4,500+ hours of professional programming courses over the past three years.",
  technicalBg: [
    "Enterprise Software Development: Led the development of high-profile enterprise platforms at IBM with expertise in microservices, API architecture, and high-performance commercial systems.",
    "Backend Engineering Specialization: Expert in breaking down complex backend concepts including Java, Spring Boot, and SQL into digestible, actionable knowledge for students.",
    "Practical System Development: Hands-on experience building automated recruitment plugins and market data extractors with technical insights beyond standard textbooks."
  ],
  educationalContrib: [
    "Professional Programming Instructor: Taught over 4,500+ hours of professional programming courses in the past three years to students of various levels.",
    "Industry Skill Empowerment: Bridges multinational corporate development experience with classroom teaching to equip tech talents with exact industry-demanded skill sets.",
    "Technical Knowledge Translation: Specializes in simplifying complex engineering concepts for effective learning and practical application."
  ],
  expertise: [
    "Backend Engineering: Java / Spring Boot / Spring Data JPA / RESTful API Design",
    "Database Management: SQL / PostgreSQL / MySQL / Database Schema Design",
    "Data Analysis Tools: Python / Pandas / Numpy / Polars / Numba / SciPy",
    "Data Integration & Automation: Web Scraping / BeautifulSoup / Selenium / Scrapy / Session Management",
    "Web Development: Django / HTML / CSS / JavaScript / Flowbite",
    "Version Control & Collaboration: Git / GitHub / GitLab / Git Flow",
    "Enterprise Experience: Microservices Architecture / Performance Testing / Enterprise Platform Development (IBM)",
    "Project Management: Automated Productivity Tools / GUI-based Scrapers (PyQt5) / Market Data Analytics"
  ],
  bio: "His deep technical expertise combined with extensive enterprise development experience enables him to deliver industry-relevant education. By bridging the gap between corporate development at a multinational level and passionate classroom teaching, Oscar excels at empowering the next generation of tech talent with the exact skill sets demanded by today’s industry."
  },
  {
  id: 7,
  name: "Ms. CS Fung",
  position: "Teacher",
  avatar: Teacher_CSFung,
  intro: "An adaptable and highly experienced educator who began her teaching journey at age 16, building over a decade of extensive experience in language instruction. Backed by an academic foundation in English Studies and complemented by studies in Japanese and Business, Ms. CS Fung has been continuously entrusted to lead engaging English Enhancement Courses across various primary and secondary schools. Uniquely positioning herself at the intersection of modern technology and education, she combines teaching pragmatism with current digital tech literacies.",
  technicalBg: [
    "Competent Technical Command: Equipped with a solid understanding of Artificial Intelligence (AI) applications and how modern educational tooling converges with everyday workflows.",
    "Foundation in Programming: Formally trained in Full-stack web development basics, enabling logic-oriented systematic approaches to lesson plannings and complex problem-solving."
  ],
  educationalContrib: [
    "Core Language Instruction: Over 10 years of consistent, successful delivery in designing and teaching English language enhancement components geared toward young educators and multi-level students in registered primary and secondary schools.",
    "Pedagogical Translation: Highly regarded for her unique attribute of stripping down and simplifying immensely complex linguistic and technical concepts into digestible learning milestones for absolute beginners to intermediate learners.",
    "Versatility in Delivery: Has developed a refined pedagogical toolkit to distinctively dynamically adapt teaching styles to address the widely ranging needs spanning different age groups."
  ],
  expertise: [
    "Educational Subjects: English Studies / Japanese Language Basics / Business Frameworks",
    "Instruction Design: English Enhancement Course Delivery / Cross-Age Cohort Pedagogical Design",
    "Modern Tools: AI-assisted Learning Integration / Foundations in Full-Stack Web Methodologies"
  ],
  bio: "Equipped with a diverse fusion of linguistic and forward-looking capabilities, Ms. CS Fung excels at simplifying complex subjects for students. Her outstanding adaptive capacities guarantee that all curriculum learning outcomes are smoothly achieved and material perfectly understood natively across diverse age spectrums limitlessly."
  },
];

export default function OurTeamClient() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  return (
  <>
    <Nav />
    <main className="min-h-screen bg-gray-50">
      {/* Hero Banner  */}
      <section className="relative h-[420px] overflow-hidden">
        {/* Matrix 數字海背景取代 img */}
        <div className="absolute inset-0 w-full h-full">
          <WaveHeroBg />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Our Professional Team｜我們專業的教育團隊</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            教師隊伍平均擁有超過15年的職業經驗，成員均為現職於各大政府認可院校的專業人士。此外，我們的講師也包括科技擁有公司的創業服務案例，他們不僅具備深厚的學術背景，還擁有豐富的企業服務案例，並熱衷行業的最新技術發展趨勢。教師們將分享一手的創業行業與市場洞察，讓學員在學習過程中獲得寶貴的行業洞見。
          </p>
        </div>
      </section>

      {/* 逐個老師卡片列表 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {teamMembers.map((member) => {
            const isExpanded = expandedIds.includes(member.id);
            return (
              <div key={member.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className={`p-6 sm:p-8 transition-all duration-300 overflow-hidden ${isExpanded ? 'h-auto' : 'h-[260px]'}`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-200 shrink-0">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">{member.name}</h2>
                      <p className="text-gray-500 mt-1">{member.position}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed">{member.intro}</p>

                  {/* 移除 isExpanded 條件渲染，內容永遠在DOM內，只用CSS裁切 */}
                  {member.technicalBg && (
                    <div className="mb-8">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Technical Background</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        {member.technicalBg.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.educationalContrib && (
                    <div className="mb-8">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Professional & Educational Contributions</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        {member.educationalContrib.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.expertise && (
                    <div className="mb-8">
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Expertise</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        {member.expertise.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {member.bio && (
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Bio</h5>
                      <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                    </div>
                  )}
                </div>
                {/* 展開/收合按鈕，lucide icon版本 */}
                <div className="px-6 sm:px-8 pb-6">
                  <button
                    onClick={() =>
                      setExpandedIds((prev) =>
                        prev.includes(member.id)
                          ? prev.filter((id) => id !== member.id)
                          : [...prev, member.id]
                      )
                    }
                    className="text-slate-600 hover:text-slate-800 font-medium inline-flex items-center gap-1"
                  >
                    {isExpanded ? (
                      <>收合詳細資料 <ChevronUp size={18} /></>
                    ) : (
                      <>查看更多 <ChevronDown size={18} /></>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
    <Footer />
  </>
)

}
