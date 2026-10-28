'use client';
import { ChevronRight } from 'lucide-react';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

// 模擬數據
const eventData = {
  title: "EVENT",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 教師們將分享一手的業界與市場洞察，讓學員在學習過程中獲得寶貴的行業洞見。",
  images: [
    "https://picsum.photos/id/189/300/200"
  ]
};

const techNews = [
  {
  title: "Article 1",
  date: "30.12.2025",
  img: "https://picsum.photos/id/130/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 2",
  date: "12.12.2025",
  img: "https://picsum.photos/id/100/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 3",
  date: "18.11.2025",
  img: "https://picsum.photos/id/111/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 4",
  date: "1.9.2025",
  img: "https://picsum.photos/id/80/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

const pastEvents = [
  {
  title: "Article 1",
  date: "30.12.2025",
  img: "https://picsum.photos/id/182/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 2",
  date: "12.12.2025",
  img: "https://picsum.photos/id/183/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 3",
  date: "18.11.2025",
  img: "https://picsum.photos/id/184/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 4",
  date: "1.9.2025",
  img: "https://picsum.photos/id/186/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

const studentWorks = [
  {
  title: "Project A",
  author: "Student A",
  subject: "Web Development",
  img: "https://picsum.photos/id/190/300/200"
  },
  {
  title: "Project B",
  author: "Student B",
  subject: "Python",
  img: "https://picsum.photos/id/191/300/200"
  }
];

const articles = [
  {
  title: "Article 1",
  date: "30.12.2025",
  img: "https://picsum.photos/id/140/200/150",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

export default function PostPage() {
  // 動態獲取當年
  const currentYear = new Date().getFullYear();

  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 文章區塊 */}
        <section>
          <div className="mb-6">
            {articles.map((article, idx) => (
              <div key={idx} className="">
                <img 
                  src={article.img} 
                  alt={`Article ${idx+1}`} 
                  className="w-2/4 h-1/4 object-cover"
                />
                <div className='w-full md:w-3/4'>
                  <p className="text-sm text-gray-500 mt-5 mb-1">
                    {article.date.replace("2025", currentYear.toString())}
                  </p>
                  <p className="font-bold text-gray-700 text-md line-clamp-3">
                    {article.title}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {article.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}