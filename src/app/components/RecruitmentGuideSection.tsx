import { motion } from 'motion/react';
import { FileText, Users, MessageSquare, Activity, CheckCircle } from 'lucide-react';

export function RecruitmentGuideSection() {
  const steps = [
    {
      icon: FileText,
      title: '서류접수',
      description: '입사지원서 및 관련 서류 제출'
    },
    {
      icon: Users,
      title: '1차 면접',
      description: '실무진 면접 및 직무 적합성 평가'
    },
    {
      icon: MessageSquare,
      title: '2차 면접',
      description: '임원 면접 및 최종 평가'
    },
    {
      icon: Activity,
      title: '신체검사',
      description: '건강검진 실시'
    },
    {
      icon: CheckCircle,
      title: '최종합격',
      description: '입사 확정 및 오리엔테이션'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">RECRUITMENT PROCESS</div>
          <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
            채용 프로세스
          </h2>
          <p className="text-xl text-[#374151] max-w-2xl mx-auto">
            체계적인 채용 절차를 통해 최고의 인재를 선발합니다
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#F3F5F8] -translate-y-1/2 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-[#1A5CB8] rounded-full flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-2xl text-[#0E2D5E] mb-2">{step.title}</div>
                <p className="text-[#374151]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#F3F5F8] p-12"
        >
          <h3 className="text-2xl text-[#0E2D5E] mb-6">지원 안내</h3>
          <ul className="space-y-4 text-[#374151]">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#1A5CB8] mt-0.5 flex-shrink-0" />
              <span>지원서는 홈페이지 채용 공고를 통해 제출하실 수 있습니다</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#1A5CB8] mt-0.5 flex-shrink-0" />
              <span>전형별 합격자에 한하여 개별 연락드립니다</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#1A5CB8] mt-0.5 flex-shrink-0" />
              <span>제출된 서류는 반환되지 않으며, 채용 목적 외에는 사용되지 않습니다</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#1A5CB8] mt-0.5 flex-shrink-0" />
              <span>허위 사실이 발견될 경우 합격이 취소될 수 있습니다</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}