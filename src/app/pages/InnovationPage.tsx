import { motion } from 'motion/react';
import { Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';

export function InnovationPage() {
  return (
    <div className="pt-24">
      <section className="py-40 bg-[#0E2D5E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm text-[#B8922A] tracking-[0.2em] mb-6">INNOVATION</div>
            <h2 className="text-5xl lg:text-6xl text-white mb-8">
              디지털 전환 및 혁신
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              IT 기반의 스마트 건설을 지향합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-12 border border-white/10"
            >
              <Lightbulb className="w-12 h-12 text-[#B8922A] mb-6" />
              <h3 className="text-3xl text-white mb-6">T.SYSTEM</h3>
              <p className="text-white/60 mb-8">
                2020년 자체 그룹웨어 기반 전자결재 및 VPN을 도입하여
                ERP 및 재택근무 시스템을 구축했습니다.
              </p>
              <div className="space-y-3">
                {['전자결재 시스템', 'ERP 통합 관리', '원격 근무 지원', '건설 표준 시스템 구축'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="w-5 h-5 text-[#1A5CB8]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-12 border border-white/10"
            >
              <TrendingUp className="w-12 h-12 text-[#B8922A] mb-6" />
              <h3 className="text-3xl text-white mb-6">매출 성장</h3>
              <div className="space-y-6">
                {[
                  { year: '2013', amount: '5억 원', percent: 6 },
                  { year: '2017', amount: '800억 원', percent: 93 },
                  { year: '현재', amount: '860억 원', percent: 100 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-white/80">
                      <span>{item.year}</span>
                      <span className="text-white">{item.amount}</span>
                    </div>
                    <div className="w-full bg-white/20 h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="bg-[#1A5CB8] h-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A5CB8] p-12"
          >
            <h3 className="text-3xl text-white mb-8">오픈 이노베이션</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: '로제타텍', desc: '무선 화재 감지 시스템 및 AI 재난 방지 플랫폼' },
                { name: '팀워크', desc: '모바일 클라우드 기반 실시간 협업 플랫폼' },
                { name: '크로스빔', desc: '건설 현장 문서 및 서류 업무 생산성 향상' },
                { name: '오늘의작업장', desc: '현장 작업 지시 및 공정 모니터링 플랫폼' }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm p-6">
                  <div className="text-lg text-white mb-2">{item.name}</div>
                  <div className="text-sm text-white/70">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}