import { HRSection } from '../components/HRSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { RecruitmentGuideSection } from '../components/RecruitmentGuideSection';
import { FAQSection } from '../components/FAQSection';
import { JobOpeningsSection } from '../components/JobOpeningsSection';

export function CareersPage() {
  return (
    <div className="pt-24">
      <HRSection />
      <BenefitsSection />
      <RecruitmentGuideSection />
      <FAQSection />
      <JobOpeningsSection />
    </div>
  );
}
