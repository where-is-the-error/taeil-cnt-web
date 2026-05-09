import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

export function JobOpeningsSection() {
  const openings = [
    {
      title: '건축 현장 관리자',
      department: '건설사업부',
      location: '서울/경기',
      type: '정규직',
      experience: '경력 3년 이상',
      deadline: '상시채용'
    },
    {
      title: '건축 설계 담당',
      department: '설계팀',
      location: '서울',
      type: '정규직',
      experience: '경력 5년 이상',
      deadline: '2026.05.31'
    },
    {
      title: '안전 관리자',
      department: '안전관리팀',
      location: '서울/경기/부산',
      type: '정규직',
      experience: '경력 2년 이상',
      deadline: '상시채용'
    },
    {
      title: '견적 담당',
      department: '영업팀',
      location: '서울',
      type: '정규직',
      experience: '경력 3년 이상',
      deadline: '2026.06.15'
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
          <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">JOB OPENINGS</div>
          <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
            채용 공고
          </h2>
          <p className="text-xl text-[#374151] max-w-2xl mx-auto">
            태일씨앤티와 함께 성장할 인재를 찾습니다
          </p>
        </motion.div>

        <div className="space-y-6">
          {openings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-[#F3F5F8] p-8 hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#E8EEF7] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A5CB8] transition-colors">
                      <Briefcase className="w-6 h-6 text-[#1A5CB8] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-[#0E2D5E] mb-2">{job.title}</h3>
                      <div className="text-[#374151]">{job.department}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-[#374151]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-sm text-[#374151]/60 mb-1">지원 마감</div>
                    <div className="text-[#0E2D5E]">{job.deadline}</div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-[#374151]/40 group-hover:text-[#1A5CB8] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-[#1A5CB8] text-white hover:bg-[#0E2D5E] transition-colors">
            입사지원하기
          </button>
          <p className="mt-6 text-[#374151]">
            지원을 원하시는 포지션을 클릭하여 상세 정보를 확인하세요
          </p>
        </motion.div>
      </div>
    </section>
  );
}