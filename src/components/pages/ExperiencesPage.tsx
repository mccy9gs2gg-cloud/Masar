import React, { useState, useMemo } from 'react';
import { StudentExperience, Language, MajorCategory, PageId } from '../../types';
import { initialExperiencesData } from '../../data/experiences';
import { categoryLabels, translations } from '../../data/translations';
import { universitiesData } from '../../data/universities';
import {
  MessageSquare,
  Plus,
  Search,
  Building2,
  GraduationCap,
  Clock,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  X,
  Share2,
} from 'lucide-react';

interface ExperiencesPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const ExperiencesPage: React.FC<ExperiencesPageProps> = ({ lang, setCurrentPage }) => {
  const [experiences, setExperiences] = useState<StudentExperience[]>(initialExperiencesData);
  const [selectedCategory, setSelectedCategory] = useState<MajorCategory | 'all'>('all');
  const [selectedUniversity, setSelectedUniversity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Form State for "Share Your Experience"
  const [formData, setFormData] = useState({
    studentName: '',
    university: '',
    major: '',
    yearOfStudy: '',
    category: 'it' as MajorCategory,
    whyChosen: '',
    whatTheyEnjoy: '',
    challenges: '',
    wishKnownBefore: '',
    adviceForSchoolStudents: '',
    privacyConsent: false,
  });

  const filteredExperiences = useMemo(() => {
    return experiences.filter((exp) => {
      if (selectedCategory !== 'all' && exp.category !== selectedCategory) {
        return false;
      }
      if (selectedUniversity !== 'all') {
        const uniMatch =
          exp.university.ar.includes(selectedUniversity) ||
          exp.university.en.includes(selectedUniversity);
        if (!uniMatch) return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const textToSearch = [
          exp.studentName,
          exp.major.ar,
          exp.major.en,
          exp.university.ar,
          exp.university.en,
          exp.whyChosen.ar,
          exp.whyChosen.en,
          exp.challenges.ar,
          exp.challenges.en,
          exp.adviceForSchoolStudents.ar,
          exp.adviceForSchoolStudents.en,
        ]
          .join(' ')
          .toLowerCase();

        return textToSearch.includes(q);
      }
      return true;
    });
  }, [experiences, selectedCategory, selectedUniversity, searchQuery]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.major || !formData.university || !formData.adviceForSchoolStudents) {
      return;
    }

    // In accordance with safety & review rules:
    // Create new experience object (previewed with moderated indicator)
    const newExp: StudentExperience = {
      id: `exp-${Date.now()}`,
      studentName: formData.studentName,
      university: { ar: formData.university, en: formData.university },
      major: { ar: formData.major, en: formData.major },
      majorId: 'custom',
      yearOfStudy: {
        ar: formData.yearOfStudy || 'طالب جامعي',
        en: formData.yearOfStudy || 'Undergraduate Student',
      },
      category: formData.category,
      whyChosen: { ar: formData.whyChosen, en: formData.whyChosen },
      whatTheyEnjoy: { ar: formData.whatTheyEnjoy, en: formData.whatTheyEnjoy },
      challenges: { ar: formData.challenges, en: formData.challenges },
      wishKnownBefore: { ar: formData.wishKnownBefore, en: formData.wishKnownBefore },
      adviceForSchoolStudents: {
        ar: formData.adviceForSchoolStudents,
        en: formData.adviceForSchoolStudents,
      },
      date: new Date().toISOString().split('T')[0],
    };

    setExperiences((prev) => [newExp, ...prev]);
    setSubmissionSuccess(true);
    setTimeout(() => {
      setModalOpen(false);
      setSubmissionSuccess(false);
      setFormData({
        studentName: '',
        university: '',
        major: '',
        yearOfStudy: '',
        category: 'it',
        whyChosen: '',
        whatTheyEnjoy: '',
        challenges: '',
        wishKnownBefore: '',
        adviceForSchoolStudents: '',
        privacyConsent: false,
      });
    }, 2200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-start">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'ar' ? 'تجارب واقعية ملهمة' : 'Authentic Student Perspectives'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102A43]">
            {lang === 'ar' ? 'تجارب طلبة الجامعات في عُمان' : 'University Student Experiences'}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'ar'
              ? 'أحد أهم مميزات منصة مسار: نقرأ معًا ما يعيشه طلبة جامعات وكليات عُمان فعليًا؛ لماذا اختاروا تخصصاتهم؟ ما الصعوبات التي واجهوها؟ وماذا تمنوا لو عرفوه قبل بدء الدراسة؟'
              : 'Read first-hand reflections from university students in Oman: why they chose their majors, hurdles faced, and what they wish they knew before enrollment.'}
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-3 rounded-xl bg-[#278C78] hover:bg-[#1f7060] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all shrink-0 self-start md:self-auto"
        >
          <Plus className="w-4 h-4 text-[#B9F0DF]" />
          <span>{lang === 'ar' ? 'شارك تجربتك الجامعية' : 'Share Your Experience'}</span>
        </button>
      </div>

      {/* Safety & Moderation Notice Banner */}
      <div className="p-4 bg-[#F2E9D8]/50 border border-[#F2E9D8] rounded-2xl flex items-start gap-3 text-xs text-slate-700 text-start">
        <AlertCircle className="w-4 h-4 text-[#183C59] shrink-0 mt-0.5" />
        <p>
          <span className="font-bold">
            {lang === 'ar' ? 'حماية وخصوصية الطلبة:' : 'Student Safety & Moderation:'}
          </span>{' '}
          {lang === 'ar'
            ? 'تخضع كافة المشاركات للمراجعة والتدقيق التربوي من قِبل فريق مسار قبل النشر لضمان حماية الخصوصية ومصداقية التوجيه وعدم نشر معلومات اتصال شخصية.'
            : 'All submissions are reviewed and moderated by the MASAR team prior to publication to guarantee student privacy, safety, and unbiased mentoring.'}
        </p>
      </div>

      {/* Filters & Search Bar */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Keyword Search */}
          <div className="relative sm:col-span-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ar' ? 'ابحث في التجارب والآراء...' : 'Search in stories & advice...'}
              className="w-full ps-10 pe-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-[#102A43] focus:border-[#278C78] outline-none shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as any)}
            className="px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 font-medium focus:border-[#278C78] outline-none"
          >
            <option value="all">{lang === 'ar' ? 'جميع المجالات الأكاديمية' : 'All Academic Fields'}</option>
            {Object.entries(categoryLabels).map(([catKey, val]) => (
              <option key={catKey} value={catKey}>
                {val[lang]}
              </option>
            ))}
          </select>

          {/* University Filter */}
          <select
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
            className="px-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 font-medium focus:border-[#278C78] outline-none"
          >
            <option value="all">{lang === 'ar' ? 'جميع الجامعات والكليات' : 'All Universities in Oman'}</option>
            {universitiesData.map((u) => (
              <option key={u.id} value={u.shortName}>
                {u.name[lang]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Experiences Cards List */}
      <div className="space-y-6">
        {filteredExperiences.map((exp) => {
          const cat = categoryLabels[exp.category];

          return (
            <div
              key={exp.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-slate-300 shadow-2xs transition-all text-start space-y-6"
            >
              {/* Header Strip: Name, Uni, Major */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-[#278C78]">{cat[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.university[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.yearOfStudy[lang]}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102A43]">
                    {exp.major[lang]}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
                  <GraduationCap className="w-4 h-4 text-[#278C78]" />
                  <span>{exp.studentName}</span>
                </div>
              </div>

              {/* 4 Pillars of the Student Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Why Chosen */}
                <div className="p-4 bg-[#F7F8F5] rounded-xl border border-slate-200/80 space-y-1">
                  <div className="text-xs font-bold text-[#183C59]">
                    {lang === 'ar' ? 'لماذا اخترت هذا التخصص؟' : 'Why I Chose This Major'}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {exp.whyChosen[lang]}
                  </p>
                </div>

                {/* 2. What they enjoy */}
                <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 space-y-1">
                  <div className="text-xs font-bold text-emerald-900">
                    {lang === 'ar' ? 'ما الذي أستمتع به في دراستي؟' : 'What I Truly Enjoy'}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {exp.whatTheyEnjoy[lang]}
                  </p>
                </div>

                {/* 3. Challenges */}
                <div className="p-4 bg-amber-50/40 rounded-xl border border-amber-100 space-y-1">
                  <div className="text-xs font-bold text-amber-900">
                    {lang === 'ar' ? 'أبرز الصعوبات والتحديات' : 'Key Challenges Faced'}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {exp.challenges[lang]}
                  </p>
                </div>

                {/* 4. Wish known before */}
                <div className="p-4 bg-sky-50/40 rounded-xl border border-sky-100 space-y-1">
                  <div className="text-xs font-bold text-sky-900">
                    {lang === 'ar' ? 'ما تمنيت لو عرفته قبل قبولي' : 'What I Wish I Knew Beforehand'}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {exp.wishKnownBefore[lang]}
                  </p>
                </div>
              </div>

              {/* Crucial Advice Callout */}
              <div className="p-4 bg-[#102A43] text-white rounded-xl space-y-1">
                <div className="text-xs font-bold text-[#B9F0DF] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'نصيحتي الذهبية لطلبة المدارس:' : 'Key Advice for School Students:'}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{exp.adviceForSchoolStudents[lang]}"
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submission Modal for University Students */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-200 text-start my-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="space-y-0.5">
                <h3 className="text-lg font-bold text-[#102A43]">
                  {lang === 'ar' ? 'شارك تجربتك مع طلبة المدارس' : 'Share Your Experience with School Students'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'ar'
                    ? 'صوتك يساعد طالبًا حائرًا على اتخاذ قرار أكثر وعيًا لمستقبله'
                    : 'Your authentic voice helps high school students make informed choices'}
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submissionSuccess ? (
              <div className="p-8 text-center space-y-3 bg-[#B9F0DF]/20 rounded-xl border border-[#278C78]/20">
                <CheckCircle2 className="w-12 h-12 text-[#278C78] mx-auto" />
                <h4 className="text-base font-bold text-[#102A43]">
                  {lang === 'ar' ? 'شكرًا لك! تم استلام تجربتك بنجاح' : 'Thank You! Your Experience Was Received'}
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  {lang === 'ar'
                    ? 'سيقوم فريق مسار بمراجعة المشاركة ونشرها لإفادة جميع الطلبة.'
                    : 'The MASAR team will review your submission before publishing it.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ar' ? 'الاسم الأول (أو الاسم المستعار)' : 'First Name / Pseudonym'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder={lang === 'ar' ? 'مثال: محمد المكتومي' : 'e.g. Mohammed M.'}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ar' ? 'الجامعة أو الكلية' : 'University / College'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      placeholder={lang === 'ar' ? 'مثال: جامعة السلطان قابوس' : 'e.g. Sultan Qaboos University'}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ar' ? 'التخصص الجامعي' : 'Major Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.major}
                      onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                      placeholder={lang === 'ar' ? 'مثال: هندسة كيميائية' : 'e.g. Chemical Engineering'}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ar' ? 'السنة الدراسية' : 'Year of Study'}
                    </label>
                    <input
                      type="text"
                      value={formData.yearOfStudy}
                      onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                      placeholder={lang === 'ar' ? 'مثال: سنة رابعة' : 'e.g. 4th Year'}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'لماذا اخترت هذا التخصص؟' : 'Why did you choose this major?'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.whyChosen}
                    onChange={(e) => setFormData({ ...formData, whyChosen: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'ما التحديات التي واجهتها؟ وكيف تغلبت عليها؟' : 'What challenges did you face?'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.challenges}
                    onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'نصيحتك لطلبة المدارس (الصف 9 - 12)' : 'Your advice for school students'} *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.adviceForSchoolStudents}
                    onChange={(e) => setFormData({ ...formData, adviceForSchoolStudents: e.target.value })}
                    placeholder={lang === 'ar' ? 'اكتب نصيحة صريحة وعملية...' : 'Write an honest, constructive tip...'}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[#278C78] focus:ring-[#278C78]"
                  />
                  <label htmlFor="privacyConsent" className="text-[11px] text-slate-600 leading-normal">
                    {lang === 'ar'
                      ? 'أوافق على نشر هذه التجربة على منصة مسار، وأقر بعدم تضمين أي بيانات اتصال شخصية خاصة.'
                      : 'I consent to publishing this experience on MASAR, and confirm no private contact details are disclosed.'}
                  </label>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    {translations.common.close[lang]}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-[#278C78] hover:bg-[#1f7060] rounded-lg shadow-xs"
                  >
                    {translations.common.submit[lang]}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
