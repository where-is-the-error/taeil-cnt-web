import { motion } from 'motion/react';
import { GraduationCap, Heart, Gift, Users, Calendar, Wallet, Plane, Coffee, ShoppingBag } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: '자녀학자금 교육지원',
    description: '임직원 자녀의 교육비를 지원합니다'
  },
  {
    icon: Heart,
    title: '건강검진지원',
    description: '임직원 및 가족 건강검진 지원'
  },
  {
    icon: Gift,
    title: '경조사 지원',
    description: '경조사 발생 시 경조금 및 경조휴가 지원'
  },
  {
    icon: Users,
    title: '동호회 운영',
    description: '임직원 여가 활동을 위한 동호회 지원'
  },
  {
    icon: Calendar,
    title: '패밀리데이',
    description: '가족과 함께하는 특별한 행사 운영'
  },
  {
    icon: Wallet,
    title: '우리사주 지원',
    description: '임직원 재산형성을 위한 우리사주 지원'
  },
  {
    icon: Plane,
    title: '리프레시 휴가',
    description: '장기근속자 포상 휴가 및 휴가비 지원'
  },
  {
    icon: Coffee,
    title: '사내 카페테리아',
    description: '편안한 휴게 공간 및 식음료 제공'
  },
  {
    icon: ShoppingBag,
    title: '명절 선물',
    description: '명절 및 기념일 선물 지급'
  }
];

export function BenefitsSection() {
  return (
    <section className="py-32 bg-[#F3F5F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">BENEFITS</div>
          <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
            복리후생
          </h2>
          <p className="text-xl text-[#374151] max-w-2xl">
            임직원의 행복한 삶을 지원합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 hover:bg-[#EEF2F9] transition-colors group"
            >
              <benefit.icon className="w-12 h-12 text-[#1A5CB8] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl text-[#0E2D5E] mb-3">{benefit.title}</h3>
              <p className="text-[#374151]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}