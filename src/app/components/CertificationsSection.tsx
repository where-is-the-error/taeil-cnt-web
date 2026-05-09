import { motion } from 'motion/react';
import { Award, Shield, CheckCircle } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      category: '국가',
      items: [
        { name: '대한민국정부', desc: '중소벤처기업부 장관 표창', date: '2023. 11. 21' },
        { name: '대한민국정부', desc: '중소기업청 표창', date: '2022. 11. 16' }
      ]
    },
    {
      category: '인증',
      items: [
        { name: '경영우수', desc: '중소기업 경영혁신형 기업확인서', date: '2023. 11. 30 ~ 2025. 11. 29' },
        { name: '경영우수', desc: '중소기업 경영혁신형 기업확인서', date: '2021. 11. 30 ~ 2023. 11. 29' },
        { name: '경영우수', desc: '중소기업 경영혁신형 기업확인서', date: '2019. 11. 30 ~ 2021. 11. 29' },
        { name: '경영우수', desc: '중소기업 경영혁신형 기업확인서', date: '2017. 11. 30 ~ 2019. 11. 29' }
      ]
    },
    {
      category: '면허',
      items: [
        { name: 'KDIT', desc: '산업통상자원부', date: '2022. 08. 23' },
        { name: 'KC인증마크', desc: '국가기술표준원', date: '2022. 01. 20' },
        { name: '중소벤처기업부', desc: '중소기업 확인서', date: '2021. 12. 20' }
      ]
    }
  ];

  const licenses = [
    { name: '철근콘크리트공사업', number: '2023-11-0001', date: '2023. 11. 01' },
    { name: '토공사업', number: '2023-11-0002', date: '2023. 11. 01' },
    { name: '실내건축공사업', number: '2023-11-0003', date: '2023. 11. 01' }
  ];

  return (
    <section id="certifications" className="py-40 bg-[#F3F5F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-sm text-[#1A5CB8] tracking-[0.2em] mb-6">CERTIFICATIONS & LICENSES</div>
          <h2 className="text-5xl lg:text-6xl text-[#0E2D5E] mb-8">
            업·면허/인증
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl text-[#0E2D5E] mb-12 flex items-center gap-3">
            <Award className="w-8 h-8 text-[#B8922A]" />
            인증 현황
          </h3>

          <div className="space-y-12">
            {certifications.map((category, catIndex) => (
              <div key={catIndex}>
                <h4 className="text-lg text-[#0E2D5E] mb-6 pb-3 border-b-2 border-[#1A5CB8]">
                  {category.category}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05 }}
                      className="bg-white p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-[#E8EEF7] rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="w-6 h-6 text-[#1A5CB8]" />
                      </div>
                      <div className="text-sm text-[#B8922A] mb-2">{item.name}</div>
                      <div className="text-[#0E2D5E] mb-2">{item.desc}</div>
                      <div className="text-sm text-[#374151]/60">{item.date}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Licenses */}
        <div>
          <h3 className="text-2xl text-[#0E2D5E] mb-12 flex items-center gap-3">
            <Shield className="w-8 h-8 text-[#1A5CB8]" />
            보유 면허
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {licenses.map((license, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0E2D5E] text-white p-8 hover:bg-[#1A5CB8] transition-colors group"
              >
                <div className="text-sm text-[#B8922A] group-hover:text-white mb-4">LICENSE</div>
                <h4 className="text-xl mb-4">{license.name}</h4>
                <div className="text-sm text-white/60 group-hover:text-white/80">
                  <div>면허번호: {license.number}</div>
                  <div>발급일: {license.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}