import React from 'react';
import { PageId, Language, UniversityMajor } from '../../types';
import { translations, categoryLabels } from '../../data/translations';
import { majorsData } from '../../data/majors';
import { initialExperiencesData } from '../../data/experiences';
import {
  Compass,
  BookOpen,
  Scale,
  Users,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookmarkCheck,
  CheckCircle2,
  GraduationCap,
  Quote,
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  onSelectMajor: (major: UniversityMajor) => void;
  savedMajorIds: string[];
  onToggleSaveMajor: (majorId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  lang,
  onSelectMajor,
  savedMajorIds,
  onToggleSaveMajor,
}) => {
  const t = translations;
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  // Selected featured majors across different fields
  const featuredMajors = majorsData.filter((m) =>
    ['medicine', 'software-eng', 'civil-eng', 'logistics', 'cybersecurity', 'architecture'].includes(m.id)
  );

  // Selected student stories for home preview
  const featuredStories = initialExperiencesData.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      {/* SECTION A: Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F7F8F5] to-[#F7F8F5] pt-8 sm:pt-14 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left/Main Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-start">
              {/* Quiet Kicker without pills (Frontend Design §1.A) */}
              <div className="flex items-center gap-2 text-xs font-semibold text-[#278C78] tracking-wide">
                <span>{lang === 'ar' ? 'سلطنة عُمان' : 'Sultanate of Oman'}</span>
                <span aria-hidden="true">·</span>
                <span>{t.hero.kicker[lang]}</span>
              </div>

              {/* Main Headline with text-wrap: balance */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#102A43] leading-[1.18] text-balance">
                {t.hero.title[lang]}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
                {t.hero.desc[lang]}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setCurrentPage('quiz')}
                  className="px-6 py-3.5 bg-[#278C78] hover:bg-[#1f7060] text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center gap-2.5"
                >
                  <Compass className="w-4 h-4 text-[#B9F0DF]" />
                  <span>{t.hero.ctaDiscover[lang]}</span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentPage('majors')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#102A43] text-sm font-semibold rounded-xl border border-slate-300 shadow-2xs transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-[#278C78]" />
                  <span>{t.hero.ctaMajors[lang]}</span>
                </button>
              </div>

              {/* Proof Metric Strip (§1.H Claim-to-Proof Adjacency) */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 text-start">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#102A43] tabular-nums font-mono">
                    {t.hero.bannerProof.stat1.num}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {t.hero.bannerProof.stat1.label[lang]}
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#102A43] tabular-nums font-mono">
                    {t.hero.bannerProof.stat2.num}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {t.hero.bannerProof.stat2.label[lang]}
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[#278C78] tabular-nums font-mono">
                    {t.hero.bannerProof.stat3.num}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {t.hero.bannerProof.stat3.label[lang]}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Column: High-Fidelity Omani Educational Discovery Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 aspect-16/10 bg-[#102A43]">
                <img
                  src="/src/assets/images/masar_hero_discovery_1793374483196.jpg"
                  alt={lang === 'ar' ? 'طلبة عُمانيون يستكشفون مسارات التعليم والجامعات' : 'Omani students exploring university pathways and academic futures'}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-1">
                    <span className="text-[#B9F0DF] font-semibold block">
                      {lang === 'ar' ? 'بوصلة المعرفة والاستكشاف' : 'The Knowledge Beacon'}
                    </span>
                    <span className="text-slate-200 text-[11px] block">
                      {lang === 'ar'
                        ? 'ربط طموحات طلبة المدارس بالجامعات وسوق العمل في عُمان'
                        : 'Bridging school ambitions with Omani higher ed and future careers'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: Main Features (4 Feature Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            {lang === 'ar' ? 'منصة متكاملة' : 'Complete EdTech Ecosystem'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43] text-balance">
            {t.homeFeatures.heading[lang]}
          </h2>
          <p className="text-sm text-slate-600">
            {t.homeFeatures.subheading[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Quiz */}
          <div
            onClick={() => setCurrentPage('quiz')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#278C78] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#B9F0DF]/40 text-[#278C78] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2 group-hover:text-[#278C78] transition-colors">
                {t.homeFeatures.card1.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.homeFeatures.card1.desc[lang]}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#278C78]">
              <span>{lang === 'ar' ? 'خُض التجربة الآن' : 'Take Questionnaire'}</span>
              <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Majors Directory */}
          <div
            onClick={() => setCurrentPage('majors')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#278C78] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F2E9D8] text-[#183C59] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2 group-hover:text-[#278C78] transition-colors">
                {t.homeFeatures.card2.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.homeFeatures.card2.desc[lang]}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#278C78]">
              <span>{lang === 'ar' ? 'تصفح الدليل الشامل' : 'Browse All Majors'}</span>
              <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Compare Majors */}
          <div
            onClick={() => setCurrentPage('compare')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#278C78] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#278C78] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2 group-hover:text-[#278C78] transition-colors">
                {t.homeFeatures.card3.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.homeFeatures.card3.desc[lang]}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#278C78]">
              <span>{lang === 'ar' ? 'قارن بين تخصصين' : 'Compare Side-by-Side'}</span>
              <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Real Student Experiences */}
          <div
            onClick={() => setCurrentPage('experiences')}
            className="group cursor-pointer bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#278C78] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#183C59] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#102A43] mb-2 group-hover:text-[#278C78] transition-colors">
                {t.homeFeatures.card4.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.homeFeatures.card4.desc[lang]}
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#278C78]">
              <span>{lang === 'ar' ? 'اقرأ تجارب الطلبة' : 'Read Student Stories'}</span>
              <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: How MASAR Works (3 Steps) */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
              {t.howItWorks.heading[lang]}
            </h2>
            <p className="text-sm text-slate-600">
              {lang === 'ar'
                ? 'رحلة مرنة تضع الطالب في مركز القرار دون فرض خيارات جاهزة'
                : 'A guided journey empowering students to make informed, self-directed decisions'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#F7F8F5] border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#102A43] text-white font-bold flex items-center justify-center text-sm">
                ١
              </div>
              <h3 className="text-lg font-bold text-[#102A43]">
                {t.howItWorks.step1.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.howItWorks.step1.desc[lang]}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#F7F8F5] border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#278C78] text-white font-bold flex items-center justify-center text-sm">
                ٢
              </div>
              <h3 className="text-lg font-bold text-[#102A43]">
                {t.howItWorks.step2.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.howItWorks.step2.desc[lang]}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#F7F8F5] border border-slate-200 space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#183C59] text-white font-bold flex items-center justify-center text-sm">
                ٣
              </div>
              <h3 className="text-lg font-bold text-[#102A43]">
                {t.howItWorks.step3.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.howItWorks.step3.desc[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: Featured Majors Directory Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#278C78] uppercase tracking-wide">
              {lang === 'ar' ? 'تخصصات بارزة' : 'Featured Disciplines'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43] mt-1">
              {lang === 'ar' ? 'استكشف نماذج من التخصصات الجامعية' : 'Sample University Majors'}
            </h2>
          </div>
          <button
            onClick={() => setCurrentPage('majors')}
            className="text-xs font-bold text-[#278C78] hover:text-[#102A43] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>{lang === 'ar' ? 'عرض جميع التخصصات (٤٥+ تخصص)' : 'View All 45+ Majors'}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMajors.map((major) => {
            const cat = categoryLabels[major.category];
            const isSaved = savedMajorIds.includes(major.id);

            return (
              <div
                key={major.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Quiet unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-medium text-[#278C78]">{cat[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{major.studyDuration[lang]}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#102A43] mb-2">
                    {major.name[lang]}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {major.shortDescription[lang]}
                  </p>

                  {/* Nature split bar mini */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                      <span>{major.natureOfStudy.practicalPercent}% {t.common.practical[lang]}</span>
                      <span>{major.natureOfStudy.theoreticalPercent}% {t.common.theoretical[lang]}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden flex">
                      <div
                        className="bg-[#278C78] h-full"
                        style={{ width: `${major.natureOfStudy.practicalPercent}%` }}
                      />
                      <div
                        className="bg-slate-300 h-full"
                        style={{ width: `${major.natureOfStudy.theoreticalPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectMajor(major)}
                    className="text-xs font-semibold text-[#183C59] hover:text-[#278C78] transition-colors"
                  >
                    {t.common.details[lang]}
                  </button>

                  <button
                    onClick={() => onToggleSaveMajor(major.id)}
                    className={`p-2 rounded-lg text-xs transition-colors ${
                      isSaved
                        ? 'bg-[#B9F0DF] text-[#102A43]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                    title={isSaved ? t.common.savedToPlan[lang] : t.common.saveToPlan[lang]}
                  >
                    <BookmarkCheck className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION E: Student Experiences Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102A43] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mb-10 space-y-2">
            <div className="text-xs font-semibold text-[#B9F0DF] uppercase tracking-wider">
              {lang === 'ar' ? 'صوت طلبة الجامعات في عُمان' : 'Authentic Student Voice'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {lang === 'ar' ? 'تعلم من تجارب من سبقوك إلى قاعات المحاضرات' : 'Learn From Real University Students'}
            </h2>
            <p className="text-sm text-slate-300">
              {lang === 'ar'
                ? 'قصص حقيقية ونصائح صادقة من طلبة يدرسون فعليًا في كليات وجامعات السلطنة.'
                : 'Real reflections from students currently studying in higher education institutions across Oman.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#B9F0DF]">
                    <span className="font-semibold">{story.studentName}</span>
                    <span className="opacity-80">{story.yearOfStudy[lang]}</span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {story.major[lang]}
                    </h4>
                    <span className="text-xs text-slate-300 block">
                      {story.university[lang]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200 italic leading-relaxed line-clamp-4">
                    "{story.adviceForSchoolStudents[lang]}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <button
                    onClick={() => setCurrentPage('experiences')}
                    className="text-xs font-semibold text-[#B9F0DF] hover:underline flex items-center gap-1"
                  >
                    <span>{lang === 'ar' ? 'اقرأ التجربة كاملة' : 'Read Full Story'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <span className="text-xs text-slate-300">
              {lang === 'ar'
                ? 'هل أنت طالب جامعي في عُمان؟ شارك تجربتك لمساعدة الأجيال الصاعدة.'
                : 'Are you an enrolled university student? Share your story to guide school students.'}
            </span>
            <button
              onClick={() => setCurrentPage('experiences')}
              className="px-4 py-2 bg-[#B9F0DF] hover:bg-[#a5ebd5] text-[#102A43] text-xs font-bold rounded-lg transition-colors"
            >
              {lang === 'ar' ? 'شارك تجربتك الجامعية' : 'Share Your Experience'}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION F: Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-[#B9F0DF]/40 text-[#278C78] flex items-center justify-center mx-auto">
          <Sparkles className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102A43] text-balance">
          {t.ctaSection.title[lang]}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          {t.ctaSection.subtitle[lang]}
        </p>
        <div className="pt-2">
          <button
            onClick={() => setCurrentPage('quiz')}
            className="px-8 py-4 bg-[#102A43] hover:bg-[#183C59] text-white text-sm font-semibold rounded-xl shadow-lg transition-all active:scale-[0.98] inline-flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#B9F0DF]" />
            <span>{t.ctaSection.button[lang]}</span>
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
