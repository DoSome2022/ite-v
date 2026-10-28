'use client';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';
import Link from "next/link"

// 模擬數據
const articles = [
  {
  title: "Article 1",
  date: "30.12.2025",
  img: "https://picsum.photos/id/140/200/150",
  link: "/news/post",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 2",
  date: "12.12.2025",
  img: "https://picsum.photos/id/141/200/150",
  link: "/news/post",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 3",
  date: "18.11.2025",
  img: "https://picsum.photos/id/142/200/150",
  link: "/news/post",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
  title: "Article 4",
  date: "1.9.2025",
  img: "https://picsum.photos/id/143/200/150",
  link: "/news/post",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

export default function TechNewsPage() {
  // 動態獲取當年
  const currentYear = new Date().getFullYear();

  return (
    <>
    <Nav/>
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 文章區塊 */}
        <section>
          <h2 className="text-2xl font-light text-gray-500 mb-8">技術資訊</h2>
          <div className="grid gap-6 mb-6">
            {articles.map((article, idx) => (
              <Link href={article.link}>
                <div key={idx} className="flex gap-4">
                  <img 
                    src={article.img} 
                    alt={`Article ${idx+1}`} 
                    className="w-2/4 h-1/5 object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
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
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}