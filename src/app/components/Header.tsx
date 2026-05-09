import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuStructure = [
    {
      title: '회사소개',
      path: '/company',
      submenu: [
        { title: '인사말', path: '/company#greeting' },
        { title: '경영이념', path: '/company#philosophy' },
        { title: '회사연혁', path: '/company#history' },
        { title: '기구조직도', path: '/company#organization' },
        { title: '업·면허/인증', path: '/company#certifications' },
        { title: '주거래 시공사', path: '/company#partners' },
        { title: '찾아오는길', path: '/company#location' }
      ]
    },
    {
      title: '사업실적',
      path: '/business',
      submenu: [
        { title: '공사수주 현황', path: '/business#portfolio' },
        { title: '건설시공능력', path: '/business#capability' },
        { title: '품질경영', path: '/business#quality' },
        { title: '안전경영', path: '/business#safety' }
      ]
    },
    {
      title: '기술혁신',
      path: '/innovation',
      submenu: [
        { title: '기술혁신 비전', path: '/innovation#tech-vision' },
        { title: '기술혁신 News', path: '/innovation#tech-news' }
      ]
    },
    {
      title: '홍보센터',
      path: '/pr',
      submenu: [
        { title: 'News', path: '/pr#news' },
        { title: '사회공헌', path: '/pr#social' },
        { title: '홍보자료', path: '/pr#materials' }
      ]
    },
    {
      title: '인재채용',
      path: '/careers',
      submenu: [
        { title: '인사제도', path: '/careers#hr' },
        { title: '복리후생', path: '/careers#benefits' },
        { title: '채용가이드', path: '/careers#guide' },
        { title: '채용공고', path: '/careers#jobs' },
        { title: '채용FAQ', path: '/careers#faq' }
      ]
    },
    {
      title: 'ESG경영',
      path: '/esg',
      submenu: []
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isHomePage
          ? scrolled
            ? 'bg-[#0E2D5E] border-b border-white/10'
            : 'bg-transparent'
          : 'bg-[#0E2D5E] border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-[#1A5CB8] rounded flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white tracking-tight">TAEIL C&T</div>
                <div className="text-xs text-white/60">태일씨앤티</div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {menuStructure.map((menu, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={menu.path}
                  className="flex items-center gap-1 px-6 py-8 text-sm text-white/80 hover:text-white transition-colors"
                >
                  {menu.title}
                  {menu.submenu.length > 0 && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {menu.submenu.length > 0 && (
                  <AnimatePresence>
                    {activeDropdown === menu.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 min-w-[200px] bg-[#0E2D5E] border border-white/10 shadow-xl"
                      >
                        {menu.submenu.map((submenu, subIndex) => (
                          <Link
                            key={subIndex}
                            to={submenu.path}
                            className="block px-6 py-3 text-sm text-white/80 hover:bg-[#1A5CB8] hover:text-white transition-colors"
                          >
                            {submenu.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-6 border-t border-white/10"
            >
              <div className="space-y-4">
                {menuStructure.map((menu, index) => (
                  <div key={index}>
                    <Link
                      to={menu.path}
                      className="block text-sm text-white/80 hover:text-white transition-colors mb-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {menu.title}
                    </Link>
                    {menu.submenu.length > 0 && (
                      <div className="ml-4 space-y-2">
                        {menu.submenu.map((submenu, subIndex) => (
                          <Link
                            key={subIndex}
                            to={submenu.path}
                            className="block text-sm text-white/60 hover:text-[#B8922A] transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {submenu.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}