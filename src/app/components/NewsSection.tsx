import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export function NewsSection() {
  const news = [
    {
      title: '한라건설부문 2019년 1분기 우수 시공사 정기 시공',
      date: '2019-05-14',
      category: 'NEWS',
      image: 'https://images.unsplash.com/photo-1771834683942-a973fe0b5bf8'
    },
    {
      title: '태일씨앤티(주)에서 2018년 시리아 지진피해 성금(약1,397만원) 전달식 진행',
      date: '2018-12-18',
      category: 'CSR',
      image: 'https://images.unsplash.com/photo-1764499048254-82d78f9bc39a'
    },
    {
      title: '수원역 S-PLEX 최우수 시공사 인증(5년연속) 획득',
      date: '2018-11-09',
      category: 'AWARD',
      image: 'https://images.unsplash.com/photo-1759912497669-f2b90b1d3fec'
    },
    {
      title: '태일씨앤티 2018년 최우수 협력업체로 선정',
      date: '2018-09-20',
      category: 'AWARD',
      image: 'https://images.unsplash.com/photo-1691161372406-4c65ac71ccb0'
    },
    {
      title: '제3회 디지털 건설 대전환 대토론회에서 김경수 회장 발표',
      date: '2018-08-15',
      category: 'EVENT',
      image: 'https://images.unsplash.com/photo-1641155049992-8cba3e42f632'
    },
    {
      title: 'K-IBA 건설 기술 혁신 대상 수상',
      date: '2018-07-28',
      category: 'AWARD',
      image: 'https://images.unsplash.com/photo-1739599211500-74e04a9ca175'
    }
  ];

  return (
    <section id="news" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">NEWS</div>
          <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
            소식
          </h2>
          <p className="text-xl text-[#374151]">
            태일씨앤티의 최신 소식을 확인하세요
          </p>
        </motion.div>

        <div className="space-y-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center pb-8 border-b border-[#F3F5F8] hover:border-[#1A5CB8] transition-colors">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F5F8]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#1A5CB8] text-white text-xs tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 text-sm text-[#374151]/60 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-2xl text-[#0E2D5E] mb-4 group-hover:text-[#1A5CB8] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#1A5CB8]">
                    <span className="text-sm">자세히 보기</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 flex items-center justify-center ${
                page === 1
                  ? 'bg-[#1A5CB8] text-white'
                  : 'bg-[#F3F5F8] text-[#374151] hover:bg-[#E8EEF7]'
              } transition-colors`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}