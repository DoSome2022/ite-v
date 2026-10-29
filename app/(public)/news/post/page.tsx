'use client';
import Nav from '../../../../components/Nav';
import Footer from '../../../../components/Footer';

// 模擬數據
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