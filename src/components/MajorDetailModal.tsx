import React, { useState } from 'react';
import { UniversityMajor, Language, PageId } from '../types';
import { categoryLabels, translations } from '../data/translations';
import { universitiesData } from '../data/universities';
import {
  X,
  BookmarkCheck,
  Scale,
  Building2,
  GraduationCap,
  Clock,
  Sparkles,
  ExternalLink,
  BookOpen,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Share2,
} from 'lucide-react';

interface MajorDetailModalProps {
  major: UniversityMajor | null;
  onClose: () => void;
  lang: Language;
  onSaveToPlan: (majorId: string) => void;
  isSavedInPlan: boolean;
  onToggleCompare: (majorId: string) => void;
  isInCompare: boolean;
  onNavigateToPage?: (page: PageId) => void;
}

export const MajorDetailModal: React.FC<MajorDetailModalProps> = ({
  major,
  onClose,
  lang,
  onSaveToPlan,
  isSavedInPlan,
  onToggleCompare,
  isInCompare,
  onNavigateToPage,
}) => {
  if (!major) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'careers' | 'universities'>('overview');
  const cat = categoryLabels[major.category];
  const t = translations.common;

  // Find linked universities
  const institutions = universitiesData.filter((u) =>
    major.universitiesInOman.includes(u.id)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200 my-6">
        {/* Header Bar */}
        <div className="bg-[#102A43] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Quiet Unboxed Metadata (Frontend Design Rule §1.A) */}
          <div className="flex items-center gap-2 text-xs text-[#B9F0DF] mb-2 font-medium">
            <span>{cat[lang]}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#B9F0DF]" />
              <span>{major.studyDuration[lang]}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'ar' ? 'سلطنة عُمان' : 'Oman'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {major.name[lang]}
          </h3>
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
            {major.shortDescription[lang]}
          </p>

          {/* Quick Action Ribbon */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10">
            <button
              onClick={() => onSaveToPlan(major.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isSavedInPlan
                  ? 'bg-[#B9F0DF] text-[#102A43]'
                  : 'bg-white/15 hover:bg-white/25 text-white'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>{isSavedInPlan ? t.savedToPlan[lang] : t.saveToPlan[lang]}</span>
            </button>

            <button
              onClick={() => onToggleCompare(major.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isInCompare
                  ? 'bg-[#278C78] text-white'
                  : 'bg-white/15 hover:bg-white/25 text-white'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>{isInCompare ? t.inComparison[lang] : t.addToCompare[lang]}</span>
            </button>

            {onNavigateToPage && (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToPage('experiences');
                }}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/15 hover:bg-white/25 text-white flex items-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#B9F0DF]" />
                <span>{lang === 'ar' ? 'تجارب طلبة التخصص' : 'Student Stories'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation Controls (Interactive Filter Segment) */}
        <div className="flex border-b border-slate-200 bg-[#F7F8F5] px-6 overflow-x-auto gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#278C78] text-[#278C78]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'نظرة عامة والقبول' : 'Overview & Admission'}
          </button>
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'curriculum'
                ? 'border-[#278C78] text-[#278C78]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'ماذا ستدرس؟ والمهارات' : 'Curriculum & Skills'}
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'careers'
                ? 'border-[#278C78] text-[#278C78]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'المستقبل وسوق العمل' : 'Careers & Future'}
          </button>
          <button
            onClick={() => setActiveTab('universities')}
            className={`py-3 px-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'universities'
                ? 'border-[#278C78] text-[#278C78]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {lang === 'ar' ? 'الجامعات في عُمان' : 'Universities in Oman'}
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Practical vs Theoretical Breakdown Visual */}
              <div className="bg-[#F7F8F5] rounded-xl p-5 border border-slate-200">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                  <span>{t.natureBalance[lang]}</span>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-[#278C78] font-bold">
                      {major.natureOfStudy.practicalPercent}% {t.practical[lang]}
                    </span>
                    <span className="text-slate-500 font-bold">
                      {major.natureOfStudy.theoreticalPercent}% {t.theoretical[lang]}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                  <div
                    className="bg-[#278C78] h-full transition-all duration-500"
                    style={{ width: `${major.natureOfStudy.practicalPercent}%` }}
                    title={`${major.natureOfStudy.practicalPercent}% Practical`}
                  />
                  <div
                    className="bg-[#183C59] h-full transition-all duration-500"
                    style={{ width: `${major.natureOfStudy.theoreticalPercent}%` }}
                    title={`${major.natureOfStudy.theoreticalPercent}% Theoretical`}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {lang === 'ar'
                    ? 'يوضح هذا المقياس النسبة التقديرية بين الساعات العملية المعملية والأنشطة التطبيقية مقارنة بالمحاضرات النظرية والقراءات الأكاديمية.'
                    : 'Shows estimated balance between hands-on lab/studio practical hours versus theoretical lectures and readings.'}
                </p>
              </div>

              {/* Admission Guidelines & HEAC Context */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#278C78]" />
                  <span>{t.admissionInfo[lang]}</span>
                </h4>
                <div className="bg-[#F2E9D8]/50 rounded-xl p-4 border border-[#F2E9D8] text-sm text-slate-800 leading-relaxed">
                  <p>{major.admissionRequirements[lang]}</p>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                  <AlertCircle className="w-4 h-4 text-[#278C78] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p>{t.heacNotice[lang]}</p>
                    <a
                      href="https://www.heac.gov.om"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#278C78] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>{t.heacLink[lang]}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'curriculum' && (
            <div className="space-y-6">
              {/* Important High School Subjects */}
              <div>
                <h4 className="text-sm font-bold text-[#102A43] mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#278C78]" />
                  <span>{lang === 'ar' ? 'المواد المدرسية الممهدة للتخصص' : 'Prerequisite School Subjects'}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {major.importantSubjects[lang].map((subj, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F8F5] rounded-lg border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#278C78] shrink-0" />
                      <span>{subj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Students Study (Courses / Topics) */}
              <div>
                <h4 className="text-sm font-bold text-[#102A43] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#278C78]" />
                  <span>{t.subjects[lang]}</span>
                </h4>
                <ul className="space-y-2">
                  {major.whatStudentsStudy[lang].map((topic, idx) => (
                    <li
                      key={idx}
                      className="p-3 bg-white rounded-lg border border-slate-200 text-sm text-slate-700 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#B9F0DF]/60 text-[#102A43] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Needed */}
              <div>
                <h4 className="text-sm font-bold text-[#102A43] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#278C78]" />
                  <span>{t.skills[lang]}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {major.skillsNeeded[lang].map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-emerald-50/50 rounded-lg border border-emerald-100 text-xs text-slate-800 font-medium leading-relaxed"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'careers' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-[#102A43] mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#278C78]" />
                  <span>{t.careers[lang]}</span>
                </h4>
                <div className="space-y-2.5">
                  {major.careerPathways[lang].map((career, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white rounded-xl border border-slate-200 text-sm text-slate-800 flex items-start gap-3 shadow-2xs"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#278C78] mt-2 shrink-0" />
                      <span className="leading-relaxed font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#F7F8F5] rounded-xl p-4 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                <span className="font-bold text-[#102A43]">
                  {lang === 'ar' ? 'سوق العمل في سلطنة عُمان:' : 'Employment Market in Oman:'}
                </span>{' '}
                {lang === 'ar'
                  ? 'تركز رؤية عُمان 2040 ومبادرات التعمين على استقطاب الكفاءات الوطنية المؤهلة في هذا المجال مع التوسع المستمر في المشاريع الاستراتيجية والخدمية.'
                  : 'Aligned with Oman Vision 2040 and nationalization initiatives across key industrial, public, and private growth clusters.'}
              </div>
            </div>
          )}

          {activeTab === 'universities' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#102A43] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#278C78]" />
                <span>{t.institutionsInOman[lang]}</span>
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {institutions.map((inst) => (
                  <div
                    key={inst.id}
                    className="p-4 bg-white rounded-xl border border-slate-200 hover:border-[#278C78] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">
                          {inst.name[lang]}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium">
                          ({inst.shortName})
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        {inst.location[lang]} · {inst.type[lang]}
                      </p>
                    </div>

                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg border border-slate-300 hover:border-[#278C78] text-xs font-semibold text-[#183C59] inline-flex items-center gap-1.5 self-start sm:self-auto hover:bg-slate-50 transition-colors"
                    >
                      <span>{t.officialLink[lang]}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            {lang === 'ar' ? 'منصة مسار · استكشف بوعي' : 'MASAR · Explore with Clarity'}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {t.close[lang]}
          </button>
        </div>
      </div>
    </div>
  );
};
