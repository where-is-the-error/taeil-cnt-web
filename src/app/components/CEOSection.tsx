import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function CEOSection() {
  return (
    <section id="ceo" className="py-40 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1771834683942-a973fe0b5bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMGNvbmNyZXRlfGVufDF8fHx8MTc3ODExOTUwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="TAEIL C&T"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#1A5CB8]/10 -z-10" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">CEO MESSAGE</div>
              <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8 leading-tight">
                성공적인 프로젝트를 위한<br />
                <span className="text-[#1A5CB8]">신뢰의 아이콘</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#374151] leading-relaxed text-lg">
              <p>
                1994년 (주)지인개발로 시작하여 2013년 현재의 사명으로 변경한 태일씨앤티는
                철근 콘크리트 공사 전문 기업으로서 대한민국 건설산업의 발전을 이끌어왔습니다.
              </p>
              <p>
                우리는 단순히 건물을 짓는 것이 아니라, 더 나은 미래를 건설합니다.
                정밀한 기술력과 혁신적인 공법으로 고객의 신뢰를 얻어왔으며,
                앞으로도 건설업계를 선도하는 기업으로 성장해 나가겠습니다.
              </p>
            </div>

            {/* Quote */}
            <div className="relative pl-12 py-8 border-l-2 border-[#1A5CB8]">
              <Quote className="absolute left-0 top-8 w-8 h-8 text-[#1A5CB8]" />
              <p className="text-2xl text-[#0E2D5E] mb-4">
                "포기는 언제든 할 수 있지만,<br />
                견디고 버티면 성과가 온다"
              </p>
              <div className="text-sm text-[#374151]/60">
                <div>김경수 회장</div>
                <div>배준희 대표이사</div>
              </div>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div>
                <div className="text-sm text-[#374151]/60 mb-2">비전</div>
                <div className="text-[#0E2D5E]">3,000억 원 규모<br />중견기업 도약</div>
              </div>
              <div>
                <div className="text-sm text-[#374151]/60 mb-2">���사</div>
                <div className="text-[#0E2D5E]">서울특별시 금천구<br />가산디지털2로 101</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}