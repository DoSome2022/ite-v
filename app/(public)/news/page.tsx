'use client';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

const eventData = {
  title: "EVENT",
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 教師們將分享一手的業界與市場洞察，讓學員在學習過程中獲得寶貴的行業洞見。",
  images: [
    { id: 1, url: "/event.png" }
  ]
};

const techNews = [
  {
    id: 1, 
    title: "Article 1",
    date: "30.12.2025",
    img: "https://picsum.photos/id/130/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 2, 
    title: "Article 2",
    date: "12.12.2025",
    img: "https://picsum.photos/id/100/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 3, 
    title: "Article 3",
    date: "18.11.2025",
    img: "https://picsum.photos/id/111/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 4, 
    title: "Article 4",
    date: "1.9.2025",
    img: "https://picsum.photos/id/80/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

const pastEvents = [
  {
    id: 1, 
    title: "Article 1",
    date: "30.12.2025",
    img: "https://picsum.photos/id/182/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 2, 
    title: "Article 2",
    date: "12.12.2025",
    img: "https://picsum.photos/id/183/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 3, 
    title: "Article 3",
    date: "18.11.2025",
    img: "https://picsum.photos/id/184/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 4, 
    title: "Article 4",
    date: "1.9.2025",
    img: "https://picsum.photos/id/186/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

const studentWorks = [
  {
    id: 1, 
    title: "Project A",
    author: "Student A",
    subject: "Web Development",
    img: "https://picsum.photos/id/190/300/200",
    link: "/news/post"
  },
  {
    id: 2, 
    title: "Project B",
    author: "Student B",
    subject: "Python",
    img: "https://picsum.photos/id/191/300/200",
    link: "/news/post"
  }
];

const articles = [
  {
    id: 1, 
    title: "Article 1",
    date: "30.12.2025",
    img: "https://picsum.photos/id/140/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 2, 
    title: "Article 2",
    date: "12.12.2025",
    img: "https://picsum.photos/id/141/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 3, 
    title: "Article 3",
    date: "18.11.2025",
    img: "https://picsum.photos/id/142/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: 4, 
    title: "Article 4",
    date: "1.9.2025",
    img: "https://picsum.photos/id/143/200/150",
    link: "/news/post",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

export default function NewsEventPage() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* EVENT */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
              <div className='text-right'>
                <div className="w-48 h-3 bg-blue-950 mb-6 ml-auto"></div>
                <h2 className="text-3xl font-light text-gray-500 mb-2">
                  {eventData.title.replace("2025", currentYear.toString())}
                </h2>
                <p className="text-gray-700 mb-6">
                  {eventData.desc}
                </p>
                <Link href="/news/tech-news">
                  <button className="bg-blue-950 text-white px-5 py-1 rounded flex ml-auto items-center gap-2 hover:bg-sky-500 transition-colors">
                    更多
                    <ChevronRight size={16} />
                  </button>
                </Link>
              </div>
              <div>
                {eventData.images.map((img) => (
                  <img
                    key={img.id} 
                    src={img.url}
                    alt={`Event ${img.id}`}
                    className="w-full h-auto object-cover"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Tech News*/}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-gray-500 mb-8">技術資訊</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {techNews.map((news) => (
                <Link 
                  key={news.id} 
                  href={news.link}
                  className="block" // 防止 Link 默認 inline 导致布局问题
                >
                  <div className="flex gap-4">
                    <img
                      src={news.img}
                      alt={`Tech news ${news.id}`}
                      className="w-24 h-20 object-cover"
                    />
                    <div>
                      <p className="text-gray-700 text-md font-bold line-clamp-3">
                        {news.title}
                      </p>
                      <p className="text-sm text-gray-400 mb-1">
                        {news.date.replace("2025", currentYear.toString())}
                      </p>
                      <p className="text-gray-700 text-sm line-clamp-3">
                        {news.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/news/tech-news">
                <button className="bg-blue-950 text-white px-10 py-1 rounded flex items-center gap-2 hover:bg-sky-500 transition-colors">
                  更多
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </section>

          {/* Event */}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-gray-500 mb-8">過往活動</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {pastEvents.map((event) => (
                <Link
                  key={event.id}
                  href={event.link}
                  className="block"
                >
                  <div className="relative">
                    <img
                      src={event.img}
                      alt={`Past event ${event.id}`}
                      className="w-full h-50 object-cover"
                    />
                    <div className="absolute bottom-0 w-full text-white bg-black/40 px-2 py-2 text-sm">
                      {event.date.replace("2025", currentYear.toString())}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                      {event.title}
                    </p>
                    <p className="text-gray-700 text-sm mt-2 line-clamp-2">
                      {event.desc}
                    </p>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/news/tech-news">
                <button className="bg-blue-950 text-white px-10 py-1 rounded flex items-center gap-2 hover:bg-sky-500 transition-colors">
                  更多
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </section>

          {/* Student classwork */}
          <section className="mb-16">
            <h2 className="text-2xl font-light text-gray-500 mb-8">學生作品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              
              {studentWorks.map((work) => (
                <Link
                  key={work.id} 
                  href={work.link}
                  className="block"
                >
                  <div className="text-center">
                    <img
                      src={work.img}
                      alt={work.title}
                      className="w-full h-40 object-cover mb-3"
                    />
                    <h3 className="text-lg font-medium text-gray-800">{work.title}</h3>
                    <p className="text-gray-400 text-sm">{work.subject}</p>
                    <p className="text-gray-600 text-sm">{work.author}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Link href="/news/tech-news">
                <button className="bg-blue-950 text-white px-10 py-1 rounded flex items-center gap-2 hover:bg-sky-500 transition-colors">
                  更多
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </section>

          {/* Article */}
          <section>
            <h2 className="text-2xl font-light text-gray-500 mb-8">文章</h2>
            <div className="grid gap-6 mb-6">
              {articles.map((article) => (
                <Link
                  key={article.id} 
                  href={article.link}
                  className="block"
                >
                  <div className="flex gap-4">
                    <img
                      src={article.img}
                      alt={`Article ${article.id}`}
                      className="w-24 h-20 object-cover"
                    />
                    <div>
                      <p className=" text-gray-700 text-md font-bold line-clamp-3">
                        {article.title}
                      </p>
                      <p className="text-sm text-gray-500 mb-1">
                        {article.date.replace("2025", currentYear.toString())}
                      </p>
                      
                      <p className="text-gray-700 text-sm line-clamp-3">
                        {article.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/news/tech-news">
                <button className="bg-blue-950 text-white px-10 py-1 rounded flex items-center gap-2 hover:bg-sky-500 transition-colors">
                  更多
                  <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}