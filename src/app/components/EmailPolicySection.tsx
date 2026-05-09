import { motion } from 'motion/react';
import { ShieldAlert } from 'lucide-react';

export function EmailPolicySection() {
  return (
    <section className="py-32 bg-[#0E2D5E]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ShieldAlert className="w-16 h-16 text-[#B8922A] mx-auto mb-8" />
          <h2 className="text-4xl text-white mb-12">
            이메일무단수집거부
          </h2>

          <div className="text-left space-y-6 text-white/70 leading-relaxed">
            <p>
              본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사 처벌됨을 유념하시기 바랍니다.
            </p>

            <div className="bg-white/10 p-8 mt-8">
              <h3 className="text-xl text-white mb-4">관련 법률</h3>
              <p className="text-sm text-white/60 mb-4">
                정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의2 (전자우편주소의 무단 수집행위 등 금지)
              </p>
              <ul className="space-y-2 text-sm text-white/60 list-disc list-inside">
                <li>누구든지 인터넷 홈페이지 운영자 또는 관리자의 사전 동의 없이 인터넷 홈페이지에서 자동으로 전자우편주소를 수집하는 프로그램이나 그 밖의 기술적 장치를 이용하여 전자우편주소를 수집하여서는 아니된다.</li>
                <li>누구든지 제1항의 규정을 위반하여 수집된 전자우편주소를 판매·유통하여서는 아니된다.</li>
                <li>누구든지 제1항 및 제2항의 규정에 의하여 수집·판매 및 유통이 금지된 전자우편주소임을 알고 이를 정보전송에 이용하여서는 아니된다.</li>
              </ul>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/50">
                개인정보 관련 문의사항은 개인정보보호책임자에게 연락 주시기 바랍니다.<br />
                개인정보보호책임자: 태일씨앤티 경영지원팀<br />
                이메일: info@taeilcnt.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}