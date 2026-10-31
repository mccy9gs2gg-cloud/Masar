import React, { useState, useMemo } from 'react';
import { UniversityMajor, Language, MajorCategory, PageId } from '../../types';
import { categoryLabels, translations } from '../../data/translations';
import { majorsData } from '../../data/majors';
import {
  Search,
  BookOpen,
  Filter,
  BookmarkCheck,
  Scale,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
} from 'lucide-react';

interface MajorsPageProps {
  lang: Language;
  onSelectMajor: (major: UniversityMajor) => void;
  savedMajorIds: string[];
  onToggleSaveMajor: (majorId: string) => void;
  compareMajorIds: string[];
  onToggleCompareMajor: (majorId: string) => void;
  setCurrentPage: (page: PageId) => void;
}

export const MajorsPage: React.FC<MajorsPageProps> = ({
  lang,
  onSelectMajor,
  savedMajorIds,
  onToggleSaveMajor,
  compareMajorIds,
  onToggleCompareMajor,
  setCurrentPage,
}) => {
  const isRtl = lang === 'ar';
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MajorCategory | 'all'>('all');

  const categories: (MajorCategory | 'all')[] = [
    'all',
    'health',
    'engineering',
    'it',
    'business',
    'science',
    'humanities',
    'creative',
  ];

  // Search and filter logic
  const filteredMajors = useMemo(() => {
    return majorsData.filter((major) => {
      // Category filter
      if (selectedCategory !== 'all' && major.category !== selectedCategory) {
        return false;
      }

      // Search query filter (checks name, description, subjects, careers in both languages)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch =
          major.name.ar.toLowerCase().includes(query) ||
          major.name.en.toLowerCase().includes(query);
        const descMatch =
          major.shortDescription.ar.toLowerCase().includes(query) ||
          major.shortDescription.en.toLowerCase().includes(query);
        const subjectMatch =
          major.whatStudentsStudy.ar.some((s) => s.toLowerCase().includes(query)) ||
          major.whatStudentsStudy.en.some((s) => s.toLowerCase().includes(query));
        const careerMatch =
          major.careerPathways.ar.some((c) => c.toLowerCase().includes(query)) ||
          major.careerPathways.en.some((c) => c.toLowerCase().includes(query));

        return nameMatch || descMatch || subjectMatch || careerMatch;
      }

      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="text-start space-y-3 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#278C78] uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>{lang === 'ar' ? 'الدليل الوطني للتخصصات' : 'National Majors Directory'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#102A43]">
          {lang === 'ar' ? 'دليل التخصصات الجامعية' : 'University Majors Directory'}
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'ar'
            ? 'تصفح كافة التخصصات المطروحة في مؤسسات التعليم العالي بسلطنة عُمان؛ تعرف على المقررات، المهارات المطلوبة، والفرص الوظيفية المرتبطة بكل تخصص.'
            : 'Explore higher education majors across Oman. Understand curricula, key skills, and local career pathways.'}
        </p>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'ar'
                ? 'ابحث باسم التخصص، مقرر، مهارة، أو مهنة (مثال: برمجيات، طب، محاسبة)...'
                : 'Search by major, subject, or career (e.g., Software, Medicine, Finance)...'
            }
            className="w-full ps-11 pe-10 py-3.5 bg-white rounded-xl border border-slate-300 focus:border-[#278C78] focus:ring-2 focus:ring-[#278C78]/20 text-sm text-[#102A43] placeholder-slate-400 shadow-2xs outline-none transition-all"
          />
          <Search className="w-5 h-5 text-slate-400 absolute start-3.5 top-3.5" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute end-3.5 top-3.5 text-slate-400 hover:text-slate-600"
              aria-label="Clear Search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Interactive Category Segmented Tabs (Allowed under §1.A for Interactive Filter Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((catKey) => {
            const isAll = catKey === 'all';
            const isActive = selectedCategory === catKey;
            const label = isAll
              ? lang === 'ar' ? 'جميع المجالات' : 'All Fields'
              : categoryLabels[catKey][lang];

            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#102A43] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Majors Count & Status */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
        <div>
          {lang === 'ar'
            ? `عرض ${filteredMajors.length} تخصص أكاديمي`
            : `Showing ${filteredMajors.length} academic majors`}
        </div>

        {compareMajorIds.length > 0 && (
          <div className="flex items-center gap-2">
            <span className="text-[#278C78] font-semibold">
              {lang === 'ar'
                ? `تم تحديد ${compareMajorIds.length} للمقارنة`
                : `${compareMajorIds.length} selected for comparison`}
            </span>
            <button
              onClick={() => setCurrentPage('compare')}
              className="px-3 py-1 bg-[#278C78] text-white font-bold rounded-md hover:bg-[#1f7060] transition-colors"
            >
              {translations.common.compareNow[lang]}
            </button>
          </div>
        )}
      </div>

      {/* Majors Card Grid */}
      {filteredMajors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMajors.map((major) => {
            const cat = categoryLabels[major.category];
            const isSaved = savedMajorIds.includes(major.id);
            const isInCompare = compareMajorIds.includes(major.id);

            return (
              <div
                key={major.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Quiet Unboxed Metadata (Frontend Design Rule §1.A) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-[#278C78]">{cat[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{major.studyDuration[lang]}</span>
                  </div>

                  <h3
                    onClick={() => onSelectMajor(major)}
                    className="text-lg font-bold text-[#102A43] hover:text-[#278C78] cursor-pointer transition-colors mb-2"
                  >
                    {major.name[lang]}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {major.shortDescription[lang]}
                  </p>

                  {/* Practical vs Theoretical mini ratio bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                      <span>{major.natureOfStudy.practicalPercent}% {translations.common.practical[lang]}</span>
                      <span>{major.natureOfStudy.theoreticalPercent}% {translations.common.theoretical[lang]}</span>
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

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectMajor(major)}
                    className="text-xs font-semibold text-[#183C59] hover:text-[#278C78] transition-colors"
                  >
                    {translations.common.details[lang]}
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onToggleCompareMajor(major.id)}
                      className={`p-2 rounded-lg text-xs transition-colors ${
                        isInCompare
                          ? 'bg-[#278C78] text-white'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title={isInCompare ? translations.common.inComparison[lang] : translations.common.addToCompare[lang]}
                      aria-label="Compare major"
                    >
                      <Scale className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onToggleSaveMajor(major.id)}
                      className={`p-2 rounded-lg text-xs transition-colors ${
                        isSaved
                          ? 'bg-[#B9F0DF] text-[#102A43]'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                      title={isSaved ? translations.common.savedToPlan[lang] : translations.common.saveToPlan[lang]}
                      aria-label="Save major"
                    >
                      <BookmarkCheck className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto space-y-4">
          <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-[#102A43]">
            {lang === 'ar' ? 'لم يتم العثور على تخصصات مطابقة' : 'No matching majors found'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'ar'
              ? 'جرّب تغيير كلمات البحث أو اختيار مجال أكاديمي مختلف.'
              : 'Try searching for different keywords or clear the category filter.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg hover:bg-slate-200 transition-colors"
          >
            {translations.common.reset[lang]}
          </button>
        </div>
      )}
    </div>
  );
};
