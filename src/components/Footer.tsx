import React from 'react';
import { PageId, Language } from '../types';
import { translations } from '../data/translations';
import { Logo } from './Logo';
import {
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  Compass,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, lang }) => {
  const t = translations.nav;

  const handleLink = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#102A43] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" lang={lang} showSlogan={true} />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {lang === 'ar'
                ? 'شركة مسار الطلابية المدرسية — مبادرة ريادية تعليمية بسلطنة عُمان لمساعدة طلبة المدارس على استكشاف ميولهم والتعرف على التخصصات والجامعات بثقة ووعي. رئيس الشركة: حسنين باسم عبد الرزاق.'
                : 'MASAR Student School Company — An educational enterprise in Oman guiding school students through academic discovery and confident future planning. President: Hassanain Basim Abdul Razzaq.'}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#B9F0DF]">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#278C78]" />
              <span>
                {lang === 'ar'
                  ? 'منصة آمنة: لا نجمع بيانات شخصية حساسة وخالية من الإعلانات التجارية.'
                  : 'Safe & Student-First: Zero invasive tracking, free and ad-free.'}
              </span>
            </div>
          </div>

          {/* Column 2: Core Platform Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'أدوات الاستكشاف' : 'Exploration Tools'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLink('quiz')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.quiz[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('majors')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.majors[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('universities')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.universities[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('compare')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.compare[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('plan')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.plan[lang]}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Insights */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'المجتمع والإرشاد' : 'Community & Guidance'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleLink('experiences')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.experiences[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('ask')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.ask[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('counselor')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.counselor[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-[#B9F0DF] transition-colors text-start"
                >
                  {t.about[lang]}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Omani Higher Ed Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'بوابات رسمية معتمدة' : 'Official Portals'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.heac.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B9F0DF] transition-colors"
                >
                  <span>{lang === 'ar' ? 'مركز القبول الموحد (HEAC)' : 'Unified Admission Centre'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.moheri.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B9F0DF] transition-colors"
                >
                  <span>{lang === 'ar' ? 'وزارة التعليم العالي (MoHERI)' : 'Ministry of Higher Education'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.moe.gov.om"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#B9F0DF] transition-colors"
                >
                  <span>{lang === 'ar' ? 'بوابة سلطنة عُمان التعليمية (MOE)' : 'Educational Portal (MOE)'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#278C78]" />
                  <span>{lang === 'ar' ? 'مسقط، سلطنة عُمان' : 'Muscat, Sultanate of Oman'}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Community Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} مسار | MASAR.{' '}
            {lang === 'ar'
              ? 'شركة طلابية مدرسية بسلطنة عُمان. رئيس الشركة: حسنين باسم عبد الرزاق.'
              : 'Student School Company in the Sultanate of Oman. President: Hassanain Basim Abdul Razzaq.'}
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLink('about')}
              className="hover:text-white transition-colors"
            >
              {lang === 'ar' ? 'سياسة الخصوصية وأمان الطلبة' : 'Privacy & Safety Policy'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleLink('about')}
              className="hover:text-white transition-colors"
            >
              {lang === 'ar' ? 'إرشادات المجتمع والمصداقية' : 'Community Guidelines'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
