import React, { useState } from 'react';
import { Language, PageId, MajorCategory, UniversityMajor } from '../../types';
import { quizQuestionsData } from '../../data/quizQuestions';
import { categoryLabels, translations } from '../../data/translations';
import { majorsData } from '../../data/majors';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  AlertCircle,
  BookmarkCheck,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  BookOpen,
} from 'lucide-react';

interface InterestQuizPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
  onSelectMajor: (major: UniversityMajor) => void;
  onSaveQuizResultToPlan: (category: MajorCategory) => void;
}

export const InterestQuizPage: React.FC<InterestQuizPageProps> = ({
  lang,
  setCurrentPage,
  onSelectMajor,
  onSaveQuizResultToPlan,
}) => {
  const isRtl = lang === 'ar';
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;
  const PrevIcon = isRtl ? ArrowRight : ArrowLeft;

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [savedToPlanSuccess, setSavedToPlanSuccess] = useState<boolean>(false);

  const totalQuestions = quizQuestionsData.length;
  const currentQ = quizQuestionsData[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentStep]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
    setSavedToPlanSuccess(false);
  };

  // Calculate scores per category
  const calculateResults = (): {
    topCategory: MajorCategory;
    categoryScores: Record<MajorCategory, number>;
    sortedCategories: [MajorCategory, number][];
  } => {
    const scores: Record<MajorCategory, number> = {
      health: 0,
      engineering: 0,
      it: 0,
      business: 0,
      science: 0,
      humanities: 0,
      creative: 0,
    };

    Object.entries(selectedAnswers).forEach(([qIndexStr, optIdx]) => {
      const qIdx = parseInt(qIndexStr, 10);
      const question = quizQuestionsData[qIdx];
      if (question && question.options[optIdx]) {
        const optScores = question.options[optIdx].scores;
        Object.entries(optScores).forEach(([cat, val]) => {
          if (val) {
            scores[cat as MajorCategory] += val;
          }
        });
      }
    });

    const sortedCategories = (Object.entries(scores) as [MajorCategory, number][]).sort(
      (a, b) => b[1] - a[1]
    );

    const topCategory = sortedCategories[0][0];

    return { topCategory, categoryScores: scores, sortedCategories };
  };

  const results = isCompleted ? calculateResults() : null;

  // Category Rationales
  const rationales: Record<MajorCategory, { ar: string; en: string }> = {
    health: {
      ar: 'أظهرت إجاباتك ميلاً قويًا نحو العلوم الحيوية والرغبة في رعاية الإنسان وتقديم العون المباشر، وتفضيل البيئات السريرية والمختبرية المعنية بالصحة العامة والطب.',
      en: 'Your responses reveal strong interest in life sciences, biological systems, and a high desire for human care, diagnostic inquiry, and clinical health environments.',
    },
    it: {
      ar: 'تشير اختياراتك إلى شغف كبير بحل المشكلات الخوارزمية، والتعامل مع التقنيات الرقمية والبرمجيات، والاهتمام بأنظمة الذكاء الاصطناعي والأمن السيبراني وتحليل البيانات.',
      en: 'Your choices highlight a keen passion for computational logic, algorithmic problem-solving, software engineering, and fast-moving AI & cyber technologies.',
    },
    engineering: {
      ar: 'تبرز إجاباتك ميلاً واضحًا نحو التفكير الفيزيائي والميكانيكي والتطبيقي، والرغبة في بناء وتصميم البنى الأساسية والأنظمة الواقعية والحلول الهندسية الملموسة.',
      en: 'Your answers indicate an appetite for applied physics, mathematics, and hands-on systems design, with enthusiasm for building tangible infrastructure and mechanics.',
    },
    business: {
      ar: 'تعكس تفضيلاتك حماسًا نحو القيادة، والتخطيط الاستراتيجي، وإدارة المشاريع، والتفاوض، وفهم سلاسل الإمداد والأسواق المالية والاقتصادية.',
      en: 'Your selections reflect leadership drive, organizational strategy, project management instincts, and interest in financial dynamics and global supply chains.',
    },
    science: {
      ar: 'أظهرت نتائجك نزعة استكشافية عميقة نحو أسرار الطبيعة، والتجارب المخبرية، والبحث العلمي الأكاديمي، والمعادلات الرياضية والتنوع البيولوجي في عُمان.',
      en: 'Your responses signify strong academic curiosity for natural phenomena, rigorous empirical laboratory research, pure mathematics, and biodiversity.',
    },
    humanities: {
      ar: 'تشير إجاباتك إلى اهتمام عالٍ بالقضايا المجتمعية، والعدالة والقانون، والتواصل اللغوي، والتعليم وإرشاد وتنمية أفراد المجتمع.',
      en: 'Your choices showcase empathy for social dynamics, jurisprudence and justice, cross-cultural communication, education, and human psychology.',
    },
    creative: {
      ar: 'أبرزت اختياراتك حسًا جماليًا وفراغيًا متقدمًا، وشغفًا بالتعبير البصري، وتصميم الهويات والمباني، وإنتاج الوسائط والرسوم المتحركة.',
      en: 'Your preferences demonstrate high aesthetic sensibilities, spatial perception, visual storytelling, and enthusiasm for architecture, graphics, and digital media.',
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#278C78] uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>{lang === 'ar' ? 'استكشاف الميول والشغف' : 'Interests Exploration'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#102A43]">
          {lang === 'ar' ? 'اكتشف اهتماماتك الأكاديمية' : 'Discover Your Academic Interests'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'ar'
            ? 'أجب على الأسئلة التوجيهية للتعرف على المجالات الأكاديمية الأقرب لنمط تفكيرك وشغفك الدراسي.'
            : 'Answer reflective questions to identify academic fields that align with your thinking style.'}
        </p>

        {/* Mandatory Explicit Disclaimer */}
        <div className="mt-4 p-3 bg-[#F2E9D8]/60 border border-[#F2E9D8] rounded-xl text-xs text-slate-700 flex items-start gap-2.5 text-start">
          <AlertCircle className="w-4 h-4 text-[#183C59] shrink-0 mt-0.5" />
          <p>
            <span className="font-bold">
              {lang === 'ar' ? 'تنويه مهم:' : 'Important Notice:'}
            </span>{' '}
            {lang === 'ar'
              ? 'هذا النشاط هو استكشاف ذاتي توجيهي غير رسمي، وليس اختبارًا نفسيًا أو مهنيًا معتمدًا جازمًا. هو أداة لمساعدتك على فتح آفاق التفكير ومناقشة الخيارات مع مرشدك المهني ووالديك.'
              : 'This is an informal self-exploration activity, not a scientifically validated psychological or career assessment. It does not dictate your future, but opens thoughtful paths for discussion.'}
          </p>
        </div>
      </div>

      {!isCompleted ? (
        /* QUIZ PROGRESSION INTERFACE */
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-8">
          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>
                {lang === 'ar'
                  ? `السؤال ${currentStep + 1} من ${totalQuestions}`
                  : `Question ${currentStep + 1} of ${totalQuestions}`}
              </span>
              <span className="tabular-nums font-mono text-[#278C78]">
                {Math.round(((currentStep + 1) / totalQuestions) * 100)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#278C78] h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2 text-start">
            <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] leading-snug">
              {currentQ.question[lang]}
            </h2>
            <p className="text-xs text-slate-500">
              {currentQ.context[lang]}
            </p>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentStep] === idx;

              return (
                <div
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 sm:p-5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 text-start ${
                    isSelected
                      ? 'border-[#278C78] bg-[#B9F0DF]/15 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-[#278C78] bg-[#278C78]'
                        : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span
                    className={`text-sm sm:text-base leading-relaxed ${
                      isSelected ? 'font-semibold text-[#102A43]' : 'text-slate-700'
                    }`}
                  >
                    {option.label[lang]}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors ${
                currentStep === 0
                  ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                  : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
              }`}
            >
              <PrevIcon className="w-4 h-4" />
              <span>{lang === 'ar' ? 'السؤال السابق' : 'Previous Question'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentStep] === undefined}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                selectedAnswers[currentStep] === undefined
                  ? 'opacity-50 cursor-not-allowed bg-slate-200 text-slate-500'
                  : 'bg-[#278C78] hover:bg-[#1f7060] text-white shadow-sm'
              }`}
            >
              <span>
                {currentStep === totalQuestions - 1
                  ? lang === 'ar' ? 'عرض النتائج والتوصيات' : 'Show Results & Matches'
                  : lang === 'ar' ? 'السؤال التالي' : 'Next Question'}
              </span>
              <NextIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* RESULTS & RECOMMENDATIONS VIEW */
        results && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Match Banner */}
            <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-4 text-start">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B9F0DF]">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'المجال الأقرب لاهتماماتك بناءً على إجاباتك' : 'Top Aligned Academic Field'}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {categoryLabels[results.topCategory][lang]}
                </h2>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
                  {rationales[results.topCategory][lang]}
                </p>

                {/* Save to plan action */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      onSaveQuizResultToPlan(results.topCategory);
                      setSavedToPlanSuccess(true);
                    }}
                    className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors ${
                      savedToPlanSuccess
                        ? 'bg-[#B9F0DF] text-[#102A43]'
                        : 'bg-white text-[#102A43] hover:bg-slate-100'
                    }`}
                  >
                    <BookmarkCheck className="w-4 h-4 text-[#278C78]" />
                    <span>
                      {savedToPlanSuccess
                        ? lang === 'ar' ? 'تم الحفظ في خطتك المستقبلية ✓' : 'Saved to Your Future Plan ✓'
                        : lang === 'ar' ? 'حفظ التوصية في خطتي المستقبلية' : 'Save Recommendation to My Plan'}
                    </span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'إعادة الإجابة من جديد' : 'Retake Quiz'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Field Breakdown Breakdown Ranking */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6 text-start">
              <h3 className="text-lg font-bold text-[#102A43]">
                {lang === 'ar' ? 'مؤشرات التوافق عبر كافة المجالات' : 'Affinity Across All Academic Fields'}
              </h3>

              <div className="space-y-4">
                {results.sortedCategories.map(([cat, score], idx) => {
                  const maxScore = Math.max(...Object.values(results.categoryScores), 1);
                  const percentage = Math.round((score / maxScore) * 100);
                  const label = categoryLabels[cat];

                  return (
                    <div key={cat} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-[#102A43] flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span>{label[lang]}</span>
                        </span>
                        <span className="text-slate-500 font-mono text-[11px]">
                          {percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-700 ${
                            idx === 0
                              ? 'bg-[#278C78]'
                              : idx === 1
                              ? 'bg-[#183C59]'
                              : 'bg-slate-300'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Suggested Majors from the Top Category */}
            <div className="space-y-4 text-start">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#102A43]">
                  {lang === 'ar' ? 'تخصصات جامعية مقترحة للاستكشاف' : 'Suggested Majors to Explore'}
                </h3>
                <button
                  onClick={() => setCurrentPage('majors')}
                  className="text-xs font-bold text-[#278C78] hover:underline flex items-center gap-1"
                >
                  <span>{lang === 'ar' ? 'الدليل الكامل' : 'All Majors'}</span>
                  <NextIcon className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {majorsData
                  .filter((m) => m.category === results.topCategory)
                  .map((major) => (
                    <div
                      key={major.id}
                      onClick={() => onSelectMajor(major)}
                      className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#278C78] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[11px] text-slate-500 mb-1">
                          {major.studyDuration[lang]}
                        </div>
                        <h4 className="text-sm font-bold text-[#102A43] mb-2">
                          {major.name[lang]}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {major.shortDescription[lang]}
                        </p>
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#278C78] font-semibold">
                        <span>{translations.common.details[lang]}</span>
                        <NextIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
