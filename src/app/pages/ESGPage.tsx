import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export function ESGPage() {
  return (
    <div className="pt-24">
      <section className="py-40 bg-[#F3F5F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">ESG MANAGEMENT</div>
            <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
              ESG 경영
            </h2>
            <p className="text-xl text-[#374151] max-w-2xl">
              환경, 사회, 지배구조의 조화로운 발전을 추구합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-[#E8EEF7]">
            {[
              {
                letter: 'E',
                title: '환경',
                subtitle: 'Environment',
                bgColor: 'bg-[#1A5CB8]',
                textColor: 'text-[#1A5CB8]',
                items: [
                  '안양천 산책로 정화 활동 클린데이',
                  '폐배터리 복원 사업 진출',
                  '한라건설 기술 공모전 표창'
                ]
              },
              {
                letter: 'S',
                title: '사회',
                subtitle: 'Social',
                bgColor: 'bg-[#0E2D5E]',
                textColor: 'text-[#0E2D5E]',
                items: [
                  '나눔명문기업 가입 (3년간 1억 원 기부)',
                  '시리아 지진 피해 성금 1,397만 원 전달',
                  '가족친화인증 기업'
                ]
              },
              {
                letter: 'G',
                title: '지배구조',
                subtitle: 'Governance',
                bgColor: 'bg-[#B8922A]',
                textColor: 'text-[#B8922A]',
                items: [
                  'Bottom-up 수평적 소통 문화',
                  '신문고 제도 운영',
                  '노사협의회 활성화'
                ]
              }
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12"
              >
                <div className={`w-16 h-16 ${section.bgColor} text-white text-3xl flex items-center justify-center mb-6`}>
                  {section.letter}
                </div>
                <h3 className="text-2xl text-[#0E2D5E] mb-2">{section.title}</h3>
                <div className="text-sm text-[#374151]/50 mb-8">{section.subtitle}</div>
                <ul className="space-y-4">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[#374151]">
                      <CheckCircle className={`w-5 h-5 ${section.textColor} mt-0.5 flex-shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}