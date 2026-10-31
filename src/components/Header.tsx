import React, { useState } from 'react';
import { PageId, Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import {
  Compass,
  BookOpen,
  GraduationCap,
  Scale,
  MessageSquare,
  HelpCircle,
  BookmarkCheck,
  Briefcase,
  Info,
  Menu,
  X,
  Languages,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  toggleLanguage: () => void;
  savedMajorsCount: number;
  compareMajorsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  lang,
  toggleLanguage,
  savedMajorsCount,
  compareMajorsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations.nav;

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: t.home[lang], icon: null },
    { id: 'quiz', label: t.quiz[lang], icon: <Compass className="w-4 h-4" /> },
    { id: 'majors', label: t.majors[lang], icon: <BookOpen className="w-4 h-4" /> },
    { id: 'universities', label: t.universities[lang], icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'compare', label: t.compare[lang], icon: <Scale className="w-4 h-4" /> },
    { id: 'experiences', label: t.experiences[lang], icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'ask', label: t.ask[lang], icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'plan', label: t.plan[lang], icon: <BookmarkCheck className="w-4 h-4" /> },
    { id: 'counselor', label: t.counselor[lang], icon: <Briefcase className="w-4 h-4" /> },
    { id: 'about', label: t.about[lang], icon: <Info className="w-4 h-4" /> },
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F8F5]/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer shrink-0 transition-transform active:scale-95"
            role="button"
            tabIndex={0}
            aria-label="MASAR Home"
          >
            <Logo lang={lang} showSlogan={false} />
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const hasBadge =
                (item.id === 'plan' && savedMajorsCount > 0) ||
                (item.id === 'compare' && compareMajorsCount > 0);
              const badgeNum = item.id === 'plan' ? savedMajorsCount : compareMajorsCount;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2.5 py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#278C78] font-semibold'
                      : 'text-slate-700 hover:text-[#102A43]'
                  }`}
                >
                  <span>{item.label}</span>
                  {hasBadge && (
                    <span className="w-4 h-4 rounded-full bg-[#278C78] text-white text-[10px] font-bold flex items-center justify-center">
                      {badgeNum}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-2 h-0.5 bg-[#278C78] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Medium Screen Nav Dropdown / Quick Links */}
          <div className="hidden lg:flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('quiz')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                currentPage === 'quiz' ? 'bg-[#278C78] text-white' : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              {t.quiz[lang]}
            </button>
            <button
              onClick={() => handleNavClick('majors')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                currentPage === 'majors' ? 'bg-[#278C78] text-white' : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              {t.majors[lang]}
            </button>
            <button
              onClick={() => handleNavClick('compare')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                currentPage === 'compare' ? 'bg-[#278C78] text-white' : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              {t.compare[lang]} {compareMajorsCount > 0 ? `(${compareMajorsCount})` : ''}
            </button>
            <button
              onClick={() => handleNavClick('plan')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                currentPage === 'plan' ? 'bg-[#278C78] text-white' : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              {t.plan[lang]} {savedMajorsCount > 0 ? `(${savedMajorsCount})` : ''}
            </button>
          </div>

          {/* Zone 3: Actions - Language Switch & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 hover:border-[#278C78] text-slate-800 text-xs font-semibold bg-white shadow-2xs hover:bg-[#F2E9D8]/40 transition-colors whitespace-nowrap"
              aria-label="Switch Language"
            >
              <Languages className="w-3.5 h-3.5 text-[#278C78]" />
              <span>{t.langSwitch[lang]}</span>
            </button>

            {/* Quick Action: Start Exploring Quiz CTA on Desktop */}
            <button
              onClick={() => handleNavClick('quiz')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#102A43] hover:bg-[#183C59] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <Compass className="w-3.5 h-3.5 text-[#B9F0DF]" />
              <span>{lang === 'ar' ? 'ابدأ الاستكشاف' : 'Start Exploring'}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-[#102A43] hover:bg-slate-200/50 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const hasBadge =
                (item.id === 'plan' && savedMajorsCount > 0) ||
                (item.id === 'compare' && compareMajorsCount > 0);
              const badgeNum = item.id === 'plan' ? savedMajorsCount : compareMajorsCount;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-start ${
                    isActive
                      ? 'bg-[#B9F0DF]/30 text-[#102A43] font-semibold border border-[#278C78]/20'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#278C78]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {hasBadge && (
                    <span className="px-2 py-0.5 rounded-full bg-[#278C78] text-white text-xs font-bold">
                      {badgeNum}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {lang === 'ar' ? 'سلطنة عُمان · مسار' : 'Sultanate of Oman · MASAR'}
            </span>
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold text-[#278C78] hover:underline flex items-center gap-1"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{t.langSwitch[lang]}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
