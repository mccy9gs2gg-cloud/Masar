import React, { useState } from 'react';
import { UniversityMajor, Language, PageId } from '../../types';
import { majorsData } from '../../data/majors';
import { universitiesData } from '../../data/universities';
import { categoryLabels, translations } from '../../data/translations';
import {
  Scale,
  Plus,
  X,
  BookmarkCheck,
  CheckCircle2,
  Clock,
  Building2,
  BookOpen,
  Briefcase,
  AlertCircle,
} from 'lucide-react';

interface ComparePageProps {
  lang: Language;
  compareMajorIds: string[];
  onToggleCompareMajor: (majorId: string) => void;
  onClearCompare: () => void;
  savedMajorIds: string[];
  onToggleSaveMajor: (majorId: string) => void;
  setCurrentPage: (page: PageId) => void;
  onSelectMajor: (major: UniversityMajor) => void;
}

export const ComparePage: React.FC<ComparePageProps> = ({
  lang,
  compareMajorIds,
  onToggleCompareMajor,
  onClearCompare,
  savedMajorIds,
  onToggleSaveMajor,
  setCurrentPage,
  onSelectMajor,
}) => {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  // Selected majors objects
  const selectedMajors = majorsData.filter((m) => compareMajorIds.includes(m.id));

  // Available majors to add (up to 3 can be compared at once)
  const availableToAdd = majorsData.filter(
    (m) =>
      !compareMajorIds.includes(m.id) &&
      (filterQuery === '' ||
        m.name.ar.toLowerCase().includes(filterQuery.toLowerCase()) ||
        m.name.en.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Title & Philosophy */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-start">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>{lang === 'ar' ? 'أداة التحليل المتكافئ' : 'Equitable Comparison'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102A43]">
            {lang === 'ar' ? 'مقارنة التخصصات الجامعية' : 'Compare University Majors'}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'ar'
              ? 'قارن بين تخصصين أو ثلاثة وجهًا لوجه لفهم الفروقات في طبيعة الدراسة، الساعات العملية، المقررات، والمسارات الوظيفية دون مفاضلة مسبقة؛ فلكل تخصص مجاله وقيمته.'
              : 'Compare two or three majors side-by-side to understand academic curricula, lab intensity, and career paths without subjective hierarchy.'}
          </p>
        </div>

        {compareMajorIds.length > 0 && (
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSelectorOpen(true)}
              disabled={compareMajorIds.length >= 3}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                compareMajorIds.length >= 3
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-[#278C78] hover:bg-[#1f7060] text-white shadow-xs'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>{lang === 'ar' ? 'إضافة تخصص آخر' : 'Add Another Major'}</span>
            </button>

            <button
              onClick={onClearCompare}
              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors"
            >
              {lang === 'ar' ? 'مسح المقارنة' : 'Clear All'}
            </button>
          </div>
        )}
      </div>

      {/* Modal / Dropdown to select a major to add */}
      {selectorOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-[#102A43]">
                {lang === 'ar' ? 'اختر تخصصًا لإضافته للمقارنة' : 'Select a Major to Compare'}
              </h3>
              <button
                onClick={() => setSelectorOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder={lang === 'ar' ? 'ابحث باسم التخصص...' : 'Search major name...'}
              className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#278C78]"
              autoFocus
            />

            <div className="max-h-60 overflow-y-auto space-y-1 divide-y divide-slate-100">
              {availableToAdd.map((m) => (
                <div
                  key={m.id}
                  onClick={() => {
                    onToggleCompareMajor(m.id);
                    setSelectorOpen(false);
                    setFilterQuery('');
                  }}
                  className="py-2.5 px-2 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center justify-between text-start"
                >
                  <div>
                    <div className="text-xs font-bold text-[#102A43]">{m.name[lang]}</div>
                    <div className="text-[11px] text-slate-500">
                      {categoryLabels[m.category][lang]} · {m.studyDuration[lang]}
                    </div>
                  </div>
                  <Plus className="w-4 h-4 text-[#278C78]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Comparison Grid View */}
      {selectedMajors.length > 0 ? (
        <div className="space-y-6">
          {/* Side-by-side Top Header Cards */}
          <div
            className={`grid gap-6 ${
              selectedMajors.length === 1
                ? 'grid-cols-1 md:grid-cols-2'
                : selectedMajors.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-3'
            }`}
          >
            {selectedMajors.map((major) => {
              const cat = categoryLabels[major.category];
              const isSaved = savedMajorIds.includes(major.id);

              return (
                <div
                  key={major.id}
                  className="bg-white rounded-2xl p-6 border-2 border-[#278C78]/30 shadow-md relative flex flex-col justify-between text-start"
                >
                  <button
                    onClick={() => onToggleCompareMajor(major.id)}
                    className="absolute top-4 end-4 p-1.5 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    title={lang === 'ar' ? 'إزالة من المقارنة' : 'Remove from compare'}
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[#278C78]">
                      {cat[lang]}
                    </span>
                    <h3 className="text-xl font-bold text-[#102A43] pe-6">
                      {major.name[lang]}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {major.shortDescription[lang]}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectMajor(major)}
                      className="text-xs font-semibold text-[#183C59] hover:underline"
                    >
                      {translations.common.details[lang]}
                    </button>

                    <button
                      onClick={() => onToggleSaveMajor(major.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        isSaved
                          ? 'bg-[#B9F0DF] text-[#102A43]'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      <BookmarkCheck className="w-3.5 h-3.5" />
                      <span>{isSaved ? translations.common.savedToPlan[lang] : translations.common.saveToPlan[lang]}</span>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Prompt Card to Add Another Major if fewer than 3 */}
            {selectedMajors.length < 3 && (
              <div
                onClick={() => setSelectorOpen(true)}
                className="rounded-2xl border-2 border-dashed border-slate-300 hover:border-[#278C78] bg-slate-50/50 hover:bg-[#B9F0DF]/10 p-6 flex flex-col items-center justify-center text-center cursor-pointer min-h-[180px] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-2xs text-[#278C78] flex items-center justify-center mb-3">
                  <Plus className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-[#102A43]">
                  {lang === 'ar' ? 'أضف تخصصًا آخر للمقارنة' : 'Add Another Major to Compare'}
                </div>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">
                  {lang === 'ar'
                    ? 'يمكنك مقارنة حتى ٣ تخصصات في نفس الوقت'
                    : 'You can compare up to 3 majors side by side'}
                </p>
              </div>
            )}
          </div>

          {/* Detailed Side-by-Side Comparison Matrix */}
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs text-start">
            {/* Row 1: Study Duration */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#278C78]" />
                <span>{translations.common.duration[lang]}</span>
              </h4>
              <div
                className={`grid gap-6 ${
                  selectedMajors.length === 1
                    ? 'grid-cols-1'
                    : selectedMajors.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedMajors.map((m) => (
                  <div key={m.id} className="text-sm font-semibold text-slate-800">
                    {m.studyDuration[lang]}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Practical vs Theoretical Nature */}
            <div className="p-5 border-b border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2 mb-3">
                <Scale className="w-4 h-4 text-[#278C78]" />
                <span>{translations.common.natureBalance[lang]}</span>
              </h4>
              <div
                className={`grid gap-6 ${
                  selectedMajors.length === 1
                    ? 'grid-cols-1'
                    : selectedMajors.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedMajors.map((m) => (
                  <div key={m.id} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>{m.natureOfStudy.practicalPercent}% {translations.common.practical[lang]}</span>
                      <span>{m.natureOfStudy.theoreticalPercent}% {translations.common.theoretical[lang]}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                      <div
                        className="bg-[#278C78] h-full"
                        style={{ width: `${m.natureOfStudy.practicalPercent}%` }}
                      />
                      <div
                        className="bg-[#183C59] h-full"
                        style={{ width: `${m.natureOfStudy.theoreticalPercent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Important School Subjects */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-[#278C78]" />
                <span>{lang === 'ar' ? 'المواد المدرسية الأساسية' : 'Key School Prerequisites'}</span>
              </h4>
              <div
                className={`grid gap-6 ${
                  selectedMajors.length === 1
                    ? 'grid-cols-1'
                    : selectedMajors.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedMajors.map((m) => (
                  <div key={m.id} className="space-y-1">
                    {m.importantSubjects[lang].map((s, idx) => (
                      <div key={idx} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#278C78] shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 4: Core Curriculum Topics */}
            <div className="p-5 border-b border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-[#278C78]" />
                <span>{translations.common.subjects[lang]}</span>
              </h4>
              <div
                className={`grid gap-6 ${
                  selectedMajors.length === 1
                    ? 'grid-cols-1'
                    : selectedMajors.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedMajors.map((m) => (
                  <ul key={m.id} className="space-y-1.5 text-xs text-slate-700">
                    {m.whatStudentsStudy[lang].map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#278C78] font-bold">·</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Row 5: Skills Required */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#278C78]" />
                <span>{translations.common.skills[lang]}</span>
              </h4>
              <div
                className={`grid gap-6 ${
                  selectedMajors.length === 1
                    ? 'grid-cols-1'
                    : selectedMajors.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedMajors.map((m) => (
                  <ul key={m.id} className="space-y-1.5 text-xs text-slate-700">
                    {m.skillsNeeded[lang].map((sk, idx) => (
                      <li key={idx} className="p-2 bg-white rounded border border-slate-200">
                        {sk}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Row 6: Career Pathways */}
            <div className="p-5 border-b border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2 mb-3">
                <Briefcase className="w-4 h-4 text-[#278C78]" />
                <span>{translations.common.careers[lang]}</span>
              </h4>
              <div
                className={`grid gap-6 ${
                  selectedMajors.length === 1
                    ? 'grid-cols-1'
                    : selectedMajors.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedMajors.map((m) => (
                  <ul key={m.id} className="space-y-1.5 text-xs text-slate-700">
                    {m.careerPathways[lang].map((c, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#278C78] font-bold">✓</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            {/* Row 7: Available Universities in Oman */}
            <div className="p-5 bg-slate-50/70">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#278C78]" />
                <span>{translations.common.institutionsInOman[lang]}</span>
              </h4>
              <div
                className={`grid gap-6 ${
                  selectedMajors.length === 1
                    ? 'grid-cols-1'
                    : selectedMajors.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {selectedMajors.map((m) => {
                  const unis = universitiesData.filter((u) => m.universitiesInOman.includes(u.id));
                  return (
                    <div key={m.id} className="space-y-1 text-xs">
                      {unis.map((u) => (
                        <div
                          key={u.id}
                          className="p-1.5 bg-white rounded border border-slate-200 text-slate-800 font-medium"
                        >
                          {u.name[lang]} ({u.shortName})
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[#B9F0DF]/40 text-[#278C78] flex items-center justify-center mx-auto">
            <Scale className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#102A43]">
              {lang === 'ar' ? 'لم تقم بتحديد تخصصات للمقارنة بعد' : 'No Majors Selected for Comparison'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              {lang === 'ar'
                ? 'تصفح دليل التخصصات واضغط على زر المقارنة (⚖️) لأي تخصص تود وضعه جنباً إلى جنب مع خياراتك الأخرى.'
                : 'Browse the majors directory and tap the compare icon (⚖️) on any major you want to inspect.'}
            </p>
          </div>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage('majors')}
              className="px-6 py-3 bg-[#102A43] hover:bg-[#183C59] text-white text-xs font-semibold rounded-xl transition-colors"
            >
              {lang === 'ar' ? 'تصفح دليل التخصصات' : 'Explore Majors Directory'}
            </button>
            <button
              onClick={() => {
                // Quick demo comparison: Medicine vs Pharmacy
                onToggleCompareMajor('medicine');
                onToggleCompareMajor('pharmacy');
              }}
              className="px-5 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
            >
              {lang === 'ar' ? 'تجربة مقارنة سريعة (الطب vs الصيدلة)' : 'Sample Comparison (Medicine vs Pharmacy)'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
