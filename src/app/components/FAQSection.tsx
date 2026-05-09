import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '우리 지부장이 있나요?',
      answer: '네, 각 지역별로 지부장이 배치되어 있습니다. 현장 관리 및 지원을 담당하고 있으며, 본사와 긴밀하게 협력하고 있습니다.'
    },
    {
      question: '경력 인정 기준은 무엇인가요?',
      answer: '동종 업계에서의 실무 경력을 기준으로 하며, 경력증명서를 통해 검증합니다. 유사 업무 경험도 일부 인정될 수 있으니 지원 시 상세히 기재해 주시기 바랍니다.'
    },
    {
      question: '퇴직연금제도 지원이 가능한가요?',
      answer: '네, 가능합니다. 태일씨앤티는 확정기여형(DC) 퇴직연금제도를 운영하고 있으며, 근로자의 노후 설계를 적극 지원하고 있습니다.'
    },
    {
      question: '수습 기간(3개월)이 끝난 자 우대 지니까?',
      answer: '수습 기간을 성공적으로 완료한 지원자의 경우, 업무 적응력이 검증되었다고 판단하여 우대합니다. 다만, 신입 지원자도 충분히 기회가 있으니 적극 지원해 주시기 바랍니다.'
    },
    {
      question: '서류전형시 중요하게 보는 부분은?',
      answer: '직무 관련 경력과 역량, 자기소개서의 진정성과 구체성을 중요하게 평가합니다. 또한 지원 동기와 회사에 대한 이해도도 중요한 평가 요소입니다.'
    },
    {
      question: '지원양식에 어떠한 첨 자기소개서를 제출하여야 하는지?',
      answer: '자사 양식을 사용하시되, 자유 형식으로 작성 가능합니다. 성장과정, 지원동기, 입사 후 포부를 중심으로 A4 2페이지 이내로 작성해 주시기 바랍니다.'
    },
    {
      question: '석류 합격자 부르는 안내 이루어 지나요?',
      answer: '서류 전형 합격자에게는 등록하신 연락처로 개별 안내됩니다. 면접 일정과 장소, 준비사항 등을 상세히 안내드리고 있습니다.'
    },
    {
      question: '면접 전형은 어떻게 이루어 지나요?',
      answer: '1차 실무진 면접과 2차 임원진 면접으로 진행됩니다. 직무 적합성, 인성, 조직 적응력 등을 종합적으로 평가하며, 면접 시간은 약 30분~1시간 소요됩니다.'
    },
    {
      question: '면접시 중요하게 보는 내용은 무엇인가요?',
      answer: '직무에 대한 이해도와 열정, 의사소통 능력, 문제해결 능력을 중요하게 ���니다. 또한 회사의 가치관과 부합하는지, 팀워크 역량이 있는지도 평가합니다.'
    },
    {
      question: '현실적 중요도계 부여되어 있는지?',
      answer: '네, 평가 기준별로 가중치가 부여되어 있으며, 직무 역량과 성장 가능성에 높은 비중을 두고 있습니다.'
    }
  ];

  return (
    <section id="faq" className="py-40 bg-[#F3F5F8]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">FAQ</div>
          <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
            채용FAQ
          </h2>
          <p className="text-xl text-[#374151]">
            자주 묻는 질문들을 확인하세요
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F3F5F8] transition-colors"
              >
                <span className="text-lg text-[#0E2D5E] pr-8">Q. {faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-[#1A5CB8] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 py-6 bg-[#F3F5F8] border-t border-[#E8EEF7]">
                      <p className="text-[#374151] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}