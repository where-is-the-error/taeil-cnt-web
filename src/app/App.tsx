import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CompanyPage } from './pages/CompanyPage';
import { BusinessPage } from './pages/BusinessPage';
import { InnovationPage } from './pages/InnovationPage';
import { PRPage } from './pages/PRPage';
import { CareersPage } from './pages/CareersPage';
import { ESGPage } from './pages/ESGPage';
import { EmailPolicySection } from './components/EmailPolicySection';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/*" element={<CompanyPage />} />
          <Route path="/business/*" element={<BusinessPage />} />
          <Route path="/innovation/*" element={<InnovationPage />} />
          <Route path="/pr/*" element={<PRPage />} />
          <Route path="/careers/*" element={<CareersPage />} />
          <Route path="/esg" element={<ESGPage />} />
          <Route path="/email-policy" element={<div className="pt-24"><EmailPolicySection /></div>} />
        </Routes>

        {/* Footer */}
        <footer className="bg-[#0E2D5E] text-white/70 py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#1A5CB8] rounded flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white">TAEIL C&T</span>
                </div>
                <p className="text-sm">
                  더 나은 내일을 건설합니다<br />
                  A Better Tomorrow
                </p>
              </div>

              <div>
                <h4 className="text-white mb-4">회사</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/company" className="hover:text-white transition-colors">회사소개</Link></li>
                  <li><Link to="/business" className="hover:text-white transition-colors">포트폴리오</Link></li>
                  <li><Link to="/innovation" className="hover:text-white transition-colors">혁신</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white mb-4">정보</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/careers" className="hover:text-white transition-colors">인재채용</Link></li>
                  <li><Link to="/esg" className="hover:text-white transition-colors">ESG</Link></li>
                  <li><Link to="/email-policy" className="hover:text-white transition-colors">이메일 무단수집 거부</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white mb-4">연락처</h4>
                <ul className="space-y-2 text-sm">
                  <li>서울 금천구 가산디지털2로 101</li>
                  <li>Tel: 02-XXXX-XXXX</li>
                  <li>Email: info@taeil.co.kr</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 text-center text-sm">
              <p>&copy; 2026 주식회사 태일씨앤티. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}