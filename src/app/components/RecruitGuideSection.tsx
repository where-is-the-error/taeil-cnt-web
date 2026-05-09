import { motion } from 'motion/react';
import { FileText, Users, CheckCircle, UserCheck, Award } from 'lucide-react';

export function RecruitGuideSection() {
  const recruitSteps = [
    { icon: FileText, title: '서류전형', desc: '지원서 및 자기소개서 검토' },
    { icon: Users, title: '1차면접', desc: '실무진 면접' },
    { icon: UserCheck, title: '2차면접', desc: '임원진 면접' },
    { icon: CheckCircle, title: '신체검사', desc: '건강검진 실시' },
    { icon: Award, title: '최종합격', desc: '입사 확정 및 온보딩' }
  ];

  return (
    <section id="guide" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-sm text-emerald-600 tracking-[0.2em] mb-6">RECRUIT GUIDE</div>
          <h2 className="text-5xl lg:text-6xl text-slate-950 mb-8">
            채용가이드
          </h2>
        </motion.div>

        {/* Recruitment Process */}
        <div className="mb-20">
          <h3 className="text-2xl text-slate-950 mb-12">채용 프로세스</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />

            <div className="grid md:grid-cols-5 gap-8 relative">
              {recruitSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 relative z-10">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-emerald-600 mb-2">STEP {index + 1}</div>
                      <h4 className="text-lg text-slate-950 mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Application Requirements */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12"
          >
            <h3 className="text-2xl text-slate-950 mb-8">지원자격</h3>
            <ul className="space-y-4">
              {[
                '학력 및 전공 무관 (직무 관련 전공자 우대)',
                '해당 직무 관련 경력자 우대',
                '남자의 경우 병역필 또는 면제자',
                '해외여행에 결격사유가 없는 자'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12"
          >
            <h3 className="text-2xl text-slate-950 mb-8">제출서류</h3>
            <ul className="space-y-4">
              {[
                '입사지원서 (자사 양식)',
                '자기소개서',
                '최종학력 졸업증명서',
                '경력증명서 (경력자에 한함)',
                '자격증 사본 (해당자에 한함)'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-slate-900 text-white"
        >
          <h4 className="text-lg mb-4">유의사항</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• 제출된 서류는 일체 반환하지 않습니다.</li>
            <li>• 허위 사실이 발견될 경우 채용이 취소될 수 있습니다.</li>
            <li>• 국가보훈대상자 및 장애인은 관련 법규에 의거하여 우대합니다.</li>
            <li>• 전형 일정은 회사 사정에 따라 변경될 수 있습니다.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
