import React, { useState, useMemo } from 'react';
import { UniversityInstitution, Language, MajorCategory, PageId } from '../../types';
import { universitiesData } from '../../data/universities';
import { categoryLabels, translations } from '../../data/translations';
import {
  GraduationCap,
  Search,
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  BookmarkCheck,
  Building2,
  CheckCircle2,
  X,
  Compass,
} from 'lucide-react';

interface UniversitiesPageProps {
  lang: Language;
  savedUniversityIds: string[];
  onToggleSaveUniversity: (uniId: string) => void;
  setCurrentPage: (page: PageId) => void;
}

export const UniversitiesPage: React.FC<UniversitiesPageProps> = ({
  lang,
  savedUniversityIds,
  onToggleSaveUniversity,
  setCurrentPage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedField, setSelectedField] = useState<MajorCategory | 'all'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'public' | 'private'>('all');

  const fields: (MajorCategory | 'all')[] = [
    'all',
    'health',
    'engineering',
    'it',
    'business',
    'science',
    'humanities',
    'creative',
  ];

  // Filtering institutions
  const filteredUniversities = useMemo(() => {
    return universitiesData.filter((uni) => {
      // Field filter
      if (selectedField !== 'all' && !uni.availableCategories.includes(selectedField)) {
        return false;
      }

      // Public / Private type filter
      if (selectedType === 'public' && !uni.id.startsWith('squ') && !uni.id.startsWith('utas')) {
        return false;
      }
      if (selectedType === 'private' && (uni.id === 'squ' || uni.id === 'utas')) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch =
          uni.name.ar.toLowerCase().includes(q) ||
          uni.name.en.toLowerCase().includes(q) ||
          uni.shortName.toLowerCase().includes(q);
        const locMatch =
          uni.location.ar.toLowerCase().includes(q) ||
          uni.location.en.toLowerCase().includes(q);
        const descMatch =
          uni.description.ar.toLowerCase().includes(q) ||
          uni.description.en.toLowerCase().includes(q);
        const progMatch =
          uni.featuredPrograms.ar.some((p) => p.toLowerCase().includes(q)) ||
          uni.featuredPrograms.en.some((p) => p.toLowerCase().includes(q));

        return nameMatch || locMatch || descMatch || progMatch;
      }

      return true;
    });
  }, [selectedField, selectedType, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Visual Header Banner with Campus Image */}
      <div className="relative rounded-3xl overflow-hidden bg-[#102A43] text-white p-8 sm:p-12 border border-slate-800 shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-4 text-start">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B9F0DF] uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>{lang === 'ar' ? 'مؤسسات التعليم العالي' : 'Higher Education in Oman'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {lang === 'ar' ? 'جامعات وكليات سلطنة عُمان' : 'Universities & Colleges in Oman'}
          </h1>

          <p className="text-sm text-slate-200 leading-relaxed">
            {lang === 'ar'
              ? 'دليل رسمي موثوق يستعرض الجامعات الوطنية الحكومية والخاصة المعتمدة في سلطنة عُمان؛ تعرف على الحرم الجامعي، التخصصات المطروحة، وشروط القبول والاتصال.'
              : 'Official verified directory of accredited national public and private higher education institutions across the Sultanate of Oman.'}
          </p>
        </div>

        {/* Decorative campus photo background scrim */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img
            src="/src/assets/images/masar_campus_oman_1793374484200.jpg"
            alt="Oman Campus Architecture"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'ابحث باسم الجامعة أو المحافظة (مسقط، نزوى، صحار، صلالة)...'
                  : 'Search by university or location (Muscat, Nizwa, Sohar, Salalah)...'
              }
              className="w-full ps-11 pe-10 py-3 bg-white rounded-xl border border-slate-300 focus:border-[#278C78] focus:ring-2 focus:ring-[#278C78]/20 text-sm text-[#102A43] placeholder-slate-400 outline-none shadow-2xs"
            />
            <Search className="w-5 h-5 text-slate-400 absolute start-3.5 top-3" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-3.5 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Type Segment Filter (All / Public / Private) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setSelectedType('all')}
              className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedType === 'all'
                  ? 'bg-white text-[#102A43] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'الكل' : 'All'}
            </button>
            <button
              onClick={() => setSelectedType('public')}
              className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedType === 'public'
                  ? 'bg-white text-[#102A43] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'حكومية' : 'Public'}
            </button>
            <button
              onClick={() => setSelectedType('private')}
              className={`flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold rounded-lg transition-colors ${
                selectedType === 'private'
                  ? 'bg-white text-[#102A43] shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'خاصة وأهلية' : 'Private'}
            </button>
          </div>
        </div>

        {/* Academic Field Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {fields.map((fKey) => {
            const isAll = fKey === 'all';
            const isActive = selectedField === fKey;
            const label = isAll
              ? lang === 'ar' ? 'جميع التخصصات' : 'All Fields'
              : categoryLabels[fKey][lang];

            return (
              <button
                key={fKey}
                onClick={() => setSelectedField(fKey)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#183C59] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* University Directory List */}
      <div className="space-y-6">
        {filteredUniversities.map((uni) => {
          const isSaved = savedUniversityIds.includes(uni.id);

          return (
            <div
              key={uni.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all text-start"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2 flex-1">
                  {/* Quiet Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="text-[#278C78] font-bold">{uni.type[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{uni.location[lang]}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#102A43]">
                    {uni.name[lang]}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    {uni.description[lang]}
                  </p>
                </div>

                {/* University Actions */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    onClick={() => onToggleSaveUniversity(uni.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      isSaved
                        ? 'bg-[#B9F0DF] text-[#102A43]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <BookmarkCheck className="w-4 h-4" />
                    <span>
                      {isSaved
                        ? lang === 'ar' ? 'محفوظة في خطتي' : 'Saved in Plan'
                        : lang === 'ar' ? 'حفظ في خطتي' : 'Save to Plan'}
                    </span>
                  </button>

                  <a
                    href={uni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#102A43] hover:bg-[#183C59] text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>{translations.common.officialLink[lang]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Programs and Admission Overview Grid */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Available Programs Highlight */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {lang === 'ar' ? 'أبرز البرامج والتخصصات المطروحة' : 'Featured Programs Offered'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {uni.featuredPrograms[lang].map((prog, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {prog}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Admission Overview */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    {lang === 'ar' ? 'شروط وآلية القبول' : 'Admission Overview'}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed bg-[#F7F8F5] p-3 rounded-lg border border-slate-200">
                    {uni.admissionOverview[lang]}
                  </p>
                </div>
              </div>

              {/* Contact Strip */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#278C78]" />
                  <span dir="ltr">{uni.contact.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#278C78]" />
                  <span>{uni.contact.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#278C78]" />
                  <span>{uni.contact.address[lang]}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
