import { motion } from 'motion/react';
import { Users, BarChart3, Award, TrendingUp, Shield, Target } from 'lucide-react';

export function HRSection() {
  return (
    <section id="hr" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">HR SYSTEM</div>
          <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
            인재제도
          </h2>
          <p className="text-xl text-[#374151] max-w-2xl">
            인재의 발굴, 평가, 보상이 하나의 시스템으로 연결됩니다
          </p>
        </motion.div>

        {/* Main Systems Grid */}
        <div className="grid lg:grid-cols-3 gap-px bg-[#F3F5F8] mb-20">
          {/* 인재상 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0E2D5E] p-16 text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#1A5CB8]/0 group-hover:bg-[#1A5CB8]/20 transition-colors duration-500" />
            <div className="relative z-10">
              <Users className="w-12 h-12 mb-8 text-[#B8922A]" />
              <h3 className="text-3xl mb-6">인재상</h3>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#B8922A] rounded-full mt-2 flex-shrink-0" />
                  <div>전문성과 책임감을 겸비한 인재</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#B8922A] rounded-full mt-2 flex-shrink-0" />
                  <div>혁신적 사고로 도전하는 인재</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#B8922A] rounded-full mt-2 flex-shrink-0" />
                  <div>소통과 협업을 중시하는 인재</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 평가제도 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-16 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[#F3F5F8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <BarChart3 className="w-12 h-12 mb-8 text-[#0E2D5E]" />
              <h3 className="text-3xl mb-6 text-[#0E2D5E]">평가제도</h3>
              <div className="space-y-4 text-[#374151]">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0E2D5E] rounded-full mt-2 flex-shrink-0" />
                  <div>객관적이고 공정한 성과 평가</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0E2D5E] rounded-full mt-2 flex-shrink-0" />
                  <div>역량 기반 다면 평가 시스템</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0E2D5E] rounded-full mt-2 flex-shrink-0" />
                  <div>지속적인 피드백 문화</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 보상제도 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A5CB8] p-16 text-white relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="relative z-10">
              <TrendingUp className="w-12 h-12 mb-8" />
              <h3 className="text-3xl mb-6">보상제도</h3>
              <div className="space-y-4 text-white/90">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>성과 기반 인센티브 제도</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>경쟁력 있는 급여 체계</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>다양한 복리후생 프로그램</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="p-8 border border-[#F3F5F8] hover:border-[#1A5CB8] transition-colors">
            <Shield className="w-8 h-8 text-[#1A5CB8] mb-4" />
            <h4 className="text-lg text-[#0E2D5E] mb-2">워라밸 보장</h4>
            <p className="text-sm text-[#374151]">
              가족친화인증 기업으로서 일과 삶의 균형을 지원합니다
            </p>
          </div>

          <div className="p-8 border border-[#F3F5F8] hover:border-[#1A5CB8] transition-colors">
            <Target className="w-8 h-8 text-[#1A5CB8] mb-4" />
            <h4 className="text-lg text-[#0E2D5E] mb-2">성장 기회</h4>
            <p className="text-sm text-[#374151]">
              교육 지원과 경력 개발 프로그램을 통한 지속적 성장
            </p>
          </div>

          <div className="p-8 border border-[#F3F5F8] hover:border-[#1A5CB8] transition-colors">
            <Award className="w-8 h-8 text-[#B8922A] mb-4" />
            <h4 className="text-lg text-[#0E2D5E] mb-2">수평적 문화</h4>
            <p className="text-sm text-[#374151]">
              Bottom-up 소통 문화와 신문고 제도로 열린 조직 구현
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}