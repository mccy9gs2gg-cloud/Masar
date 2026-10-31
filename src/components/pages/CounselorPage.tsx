import React, { useState } from 'react';
import { Language, PageId } from '../../types';
import { counselorResourcesData, CounselorResource } from '../../data/counselorResources';
import { translations } from '../../data/translations';
import {
  Briefcase,
  BookOpen,
  Download,
  Plus,
  CheckCircle2,
  Users,
  Compass,
  Sparkles,
  ExternalLink,
  X,
  Clock,
} from 'lucide-react';

interface CounselorPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const CounselorPage: React.FC<CounselorPageProps> = ({ lang, setCurrentPage }) => {
  const [selectedResource, setSelectedResource] = useState<CounselorResource | null>(null);
  const [suggestModalOpen, setSuggestModalOpen] = useState(false);
  const [suggestSuccess, setSuggestSuccess] = useState(false);

  // Suggest form state
  const [teacherName, setTeacherName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [resourceTitle, setResourceTitle] = useState('');
  const [resourceDescription, setResourceDescription] = useState('');

  const handleSuggestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherName || !resourceTitle) return;

    setSuggestSuccess(true);
    setTimeout(() => {
      setSuggestModalOpen(false);
      setSuggestSuccess(false);
      setTeacherName('');
      setSchoolName('');
      setResourceTitle('');
      setResourceDescription('');
    }, 2200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-start">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>{lang === 'ar' ? 'بوابة الكادر التعليمي والإرشادي' : 'Educator & Counselor Hub'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102A43]">
            {lang === 'ar' ? 'ركن المعلمين وأخصائيي التوجيه المهني' : 'Teachers & Career Counselors Hub'}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'ar'
              ? 'حقيبة أدوات وأنشطة صفية مصممة خصيصًا لمساندة أخصائيي التوجيه المهني والمعلمين في مدارس سلطنة عُمان خلال حصص التوجيه وإرشاد الطلبة لاختيار المواد والتخصصات.'
              : 'Classroom lesson guides, workshop activities, and HEAC frameworks designed to support Omani career guidance specialists.'}
          </p>
        </div>

        <button
          onClick={() => setSuggestModalOpen(true)}
          className="px-5 py-3 rounded-xl bg-[#278C78] hover:bg-[#1f7060] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors shrink-0 self-start md:self-auto"
        >
          <Plus className="w-4 h-4 text-[#B9F0DF]" />
          <span>{lang === 'ar' ? 'اقترح موردًا تعليميًا جديدًا' : 'Suggest an Educational Resource'}</span>
        </button>
      </div>

      {/* Featured Lesson Guides Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#102A43]">
          {lang === 'ar' ? 'أنشطة وحصص التوجيه المهني المقترحة' : 'Curated Guidance Lesson Plans & Activities'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counselorResourcesData.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Quiet unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-[#278C78] font-bold">{res.category[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{res.duration[lang]}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#102A43] leading-snug">
                  {res.title[lang]}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {res.summary[lang]}
                </p>

                <div className="pt-2 text-[11px] text-[#183C59] font-semibold">
                  {lang === 'ar' ? 'المرحلة المستهدفة:' : 'Target Audience:'} {res.targetGrades[lang]}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedResource(res)}
                  className="text-xs font-bold text-[#278C78] hover:underline"
                >
                  {lang === 'ar' ? 'عرض خطة النشاط الصفية' : 'View Lesson Plan'}
                </button>

                <button
                  onClick={() => setSelectedResource(res)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#102A43] hover:bg-slate-100 transition-colors"
                  title={lang === 'ar' ? 'تحميل / قراءة' : 'Read'}
                >
                  <BookOpen className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Classroom Integration Tips with MASAR */}
      <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="space-y-2">
          <div className="text-xs text-[#B9F0DF] font-semibold uppercase tracking-wider">
            {lang === 'ar' ? 'كيف توظف مسار في مدرستك؟' : 'Integrating MASAR in Your School'}
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            {lang === 'ar'
              ? 'تفعيل مسار في غرف مصادر التعلم وحصص التوجيه المهني'
              : 'Utilizing MASAR during Career Guidance Sessions'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-200">
          <div className="p-4 bg-white/10 rounded-xl space-y-2">
            <div className="font-bold text-[#B9F0DF] text-sm">
              {lang === 'ar' ? '١. ورش العمل التفاعلية' : '1. Interactive Workshops'}
            </div>
            <p className="leading-relaxed">
              {lang === 'ar'
                ? 'خصص ١٥ دقيقة في بداية حصة التوجيه ليخوض الطلبة نشاط "اكتشف اهتماماتك" وحفظ النتائج في منظمهم الأكاديمي.'
                : 'Dedicate 15 minutes for students to complete the Interests Exploration questionnaire and save findings.'}
            </p>
          </div>

          <div className="p-4 bg-white/10 rounded-xl space-y-2">
            <div className="font-bold text-[#B9F0DF] text-sm">
              {lang === 'ar' ? '٢. تفكيك الحيرة التخصصية' : '2. Resolving Dilemmas'}
            </div>
            <p className="leading-relaxed">
              {lang === 'ar'
                ? 'استخدم أداة "مقارنة التخصصات" على الشاشة الذكية بالصف للمقارنة بين التخصصات المتشابهة وإبراز الفروقات الجوهرية.'
                : 'Project the Major Comparison tool onto smartboards to analyze curriculum differences between adjacent fields.'}
            </p>
          </div>

          <div className="p-4 bg-white/10 rounded-xl space-y-2">
            <div className="font-bold text-[#B9F0DF] text-sm">
              {lang === 'ar' ? '٣. مجالس أولياء الأمور' : '3. Parent-Teacher Councils'}
            </div>
            <p className="leading-relaxed">
              {lang === 'ar'
                ? 'شارك رابط منصة مسار مع أولياء الأمور لتشجيع الحوار الأسري البنّاء حول خيارات الطالب دون فرض مسارات محددة.'
                : 'Encourage parents to explore MASAR alongside their children to foster constructive home career discussions.'}
            </p>
          </div>
        </div>
      </div>

      {/* Resource Detail Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 border border-slate-200 my-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#278C78]">
                  {selectedResource.category[lang]} · {selectedResource.duration[lang]}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#102A43]">
                  {selectedResource.title[lang]}
                </h3>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-slate-700 max-h-[60vh] overflow-y-auto pe-2">
              <div>
                <h4 className="font-bold text-[#102A43] mb-1">
                  {lang === 'ar' ? 'أهداف النشاط التوجيهي:' : 'Guidance Objectives:'}
                </h4>
                <ul className="space-y-1.5 list-disc ps-5 text-slate-600">
                  {selectedResource.objectives[lang].map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">
                  {lang === 'ar' ? 'طريقة تنفيذ النشاط في الصف:' : 'Classroom Execution Flow:'}
                </h4>
                <p className="bg-[#F7F8F5] p-4 rounded-xl border border-slate-200 leading-relaxed text-slate-800">
                  {selectedResource.classroomActivity[lang]}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#102A43] mb-1">
                  {lang === 'ar' ? 'المواد والأدوات المطلوبة:' : 'Materials Needed:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedResource.materialsNeeded[lang].map((mat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 rounded-md text-xs text-slate-700"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {lang === 'ar' ? 'مسار · قسم التوجيه المهني المدرسي' : 'MASAR · School Guidance Division'}
              </span>
              <button
                onClick={() => setSelectedResource(null)}
                className="px-5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                {translations.common.close[lang]}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Suggest Resource Modal */}
      {suggestModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-200 text-start">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-[#102A43]">
                {lang === 'ar' ? 'اقتراح نشاط أو مورد توجيه مهني' : 'Suggest Guidance Resource'}
              </h3>
              <button
                onClick={() => setSuggestModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {suggestSuccess ? (
              <div className="p-6 text-center space-y-3 bg-[#B9F0DF]/30 rounded-xl">
                <CheckCircle2 className="w-10 h-10 text-[#278C78] mx-auto" />
                <h4 className="text-sm font-bold text-[#102A43]">
                  {lang === 'ar' ? 'شكرًا لجهودك التربوية!' : 'Thank you for your contribution!'}
                </h4>
                <p className="text-xs text-slate-600">
                  {lang === 'ar'
                    ? 'سيقوم فريق مسار بمراجعة المورد وإضافته لخدمة أخصائيي التوجيه في السلطنة.'
                    : 'Our team will review your suggested activity to enrich national school toolkits.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSuggestSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'اسم المعلم / الأخصائي' : 'Educator Name'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: أ. سالم المعولي' : 'e.g. Salim Al-Maawali'}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'المدرسة / المحافظة التعليمية' : 'School / Educational Governorate'}
                  </label>
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: مدرسة كعب بن زيد - محافظة مسقط' : 'e.g. Muscat Governorate'}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'عنوان النشاط أو المورد' : 'Resource / Activity Title'} *
                  </label>
                  <input
                    type="text"
                    required
                    value={resourceTitle}
                    onChange={(e) => setResourceTitle(e.target.value)}
                    placeholder={lang === 'ar' ? 'مثال: لعبة المهن المستقبلية' : 'e.g. Future Careers Simulation'}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'وصف النشاط وكيفية تنفيذه' : 'Activity Description & Flow'}
                  </label>
                  <textarea
                    rows={3}
                    value={resourceDescription}
                    onChange={(e) => setResourceDescription(e.target.value)}
                    placeholder={lang === 'ar' ? 'اشرح فكرة النشاط باختصار...' : 'Describe the lesson flow...'}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSuggestModalOpen(false)}
                    className="px-4 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
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
