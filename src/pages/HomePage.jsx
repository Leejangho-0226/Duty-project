// ===============================
// 공통 컴포넌트
// ===============================
import Header from '../components/common/Header.jsx';
import Footer from '../components/common/Footer.jsx';

// ===============================
// 섹션 컴포넌트
// ===============================
import CompanyHero from '../sections/CompanyHero.jsx';
import PartnersSection from '../sections/PartnersSection.jsx';
import ProreSection from '../sections/ProreSection.jsx';
import HealingSection from '../sections/HealingSection.jsx';
import DutyOnSection from '../sections/DutyOnSection.jsx';
import QuestionSection from '../sections/QuestionSection.jsx';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="w-full">
        <CompanyHero />
        <PartnersSection />
        <ProreSection />
        <HealingSection />
        <DutyOnSection />
        <QuestionSection />
      </main>

      <Footer />
    </div>
  );
}
