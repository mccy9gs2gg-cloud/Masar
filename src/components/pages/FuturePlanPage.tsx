import React, { useState } from 'react';
import { UserFuturePlan, Language, PageId, UniversityMajor } from '../../types';
import { majorsData } from '../../data/majors';
import { universitiesData } from '../../data/universities';
import { categoryLabels, translations } from '../../data/translations';
import {
  BookmarkCheck,
  CheckSquare,
  Square,
  Plus,
  Trash2,
  Printer,
  Sparkles,
  BookOpen,
  Building2,
  Edit3,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
} from 'lucide-react';

interface FuturePlanPageProps {
  lang: Language;
  futurePlan: UserFuturePlan;
  setFuturePlan: React.Dispatch<React.SetStateAction<UserFuturePlan>>;
  setCurrentPage: (page: PageId) => void;
  onSelectMajor: (major: UniversityMajor) => void;
  onRemoveSavedMajor: (majorId: string) => void;
  onRemoveSavedUniversity: (uniId: string) => void;
}

export const FuturePlanPage: React.FC<FuturePlanPageProps> = ({
  lang,
  futurePlan,
  setFuturePlan,
  setCurrentPage,
  onSelectMajor,
  onRemoveSavedMajor,
  onRemoveSavedUniversity,
}) => {
  const isRtl = lang === 'ar';
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const [newChecklistText, setNewChecklistText] = useState('');
  const [targetGoal, setTargetGoal] = useState('');
  const [saveToast, setSaveToast] = useState(false);

  // Fetch full objects for saved majors & universities
  const savedMajors = majorsData.filter((m) =>
    futurePlan.savedMajorIds.includes(m.id)
  );
  const savedUniversities = universitiesData.filter((u) =>
    futurePlan.savedUniversityIds.includes(u.id)
  );

  const completedTasksCount = futurePlan.checklist.filter((i) => i.completed).length;
  const totalTasksCount = futurePlan.checklist.length;
  const progressPercent =
    totalTasksCount > 0 ? Math.round((completedTasksCount / totalTasksCount) * 100) : 0;

  // Toggle checklist task
  const handleToggleChecklist = (id: string) => {
    setFuturePlan((prev) => ({
      ...prev,
      checklist: prev.checklist.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  // Add custom checklist item
  const handleAddChecklistItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChecklistText.trim()) return;

    const newItem = {
      id: `task-${Date.now()}`,
      text: { ar: newChecklistText, en: newChecklistText },
      completed: false,
      isCustom: true,
    };

    setFuturePlan((prev) => ({
      ...prev,
      checklist: [...prev.checklist, newItem],
    }));
    setNewChecklistText('');
  };

  // Remove checklist item
  const handleRemoveChecklistItem = (id: string) => {
    setFuturePlan((prev) => ({
      ...prev,
      checklist: prev.checklist.filter((item) => item.id !== id),
    }));
  };

  // Update personal notes with quick feedback
  const handleNotesChange = (text: string) => {
    setFuturePlan((prev) => ({
      ...prev,
      personalNotes: text,
    }));
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-start">
      {/* Page Title & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            <BookmarkCheck className="w-4 h-4" />
            <span>{lang === 'ar' ? 'منظم الطالب الأكاديمي' : 'Student Academic Planner'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102A43]">
            {lang === 'ar' ? 'خطتي المستقبلية' : 'My Future Plan'}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
            {lang === 'ar'
              ? 'مساحتك الشخصية لتنظيم رغباتك وتتبع مهامك الأكاديمية. تُحفظ هذه البيانات تلقائيًا على متصفح جهازك لضمان خصوصيتك دون الحاجة لإنشاء حساب.'
              : 'Your private workspace to organize target majors, universities, and preparation tasks. Saved locally on your device without an account.'}
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-2 self-start sm:self-auto transition-colors shadow-2xs"
        >
          <Printer className="w-4 h-4 text-[#278C78]" />
          <span>{lang === 'ar' ? 'طباعة / حفظ كـ PDF' : 'Print / Save as PDF'}</span>
        </button>
      </div>

      {/* Progress Card */}
      <div className="bg-gradient-to-r from-[#102A43] to-[#183C59] text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="text-xs text-[#B9F0DF] font-semibold">
            {lang === 'ar' ? 'مؤشر جاهزيتك للمرحلة الجامعية' : 'College Readiness & Exploration Progress'}
          </div>
          <div className="text-2xl sm:text-3xl font-bold">
            {completedTasksCount} / {totalTasksCount}{' '}
            <span className="text-sm font-normal text-slate-300">
              {lang === 'ar' ? 'مهام تم إنجازها' : 'tasks completed'}
            </span>
          </div>
          <p className="text-xs text-slate-300 max-w-md">
            {progressPercent >= 80
              ? lang === 'ar'
                ? 'رائع جدًا! لقد قطعت شوطًا كبيرًا في استكشاف رغباتك وفهم خيارات القبول الموحد.'
                : 'Outstanding! You have accomplished significant milestones toward your academic goals.'
              : lang === 'ar'
              ? 'أكمل مهام قائمة الاستعداد وتصفح التخصصات لرفع جاهزيتك الأكاديمية.'
              : 'Complete preparation tasks and bookmark majors to elevate your readiness.'}
          </p>
        </div>

        <div className="w-full md:w-64 space-y-2 shrink-0">
          <div className="flex items-center justify-between text-xs font-bold text-[#B9F0DF]">
            <span>{lang === 'ar' ? 'نسبة الإنجاز' : 'Completion Rate'}</span>
            <span className="tabular-nums font-mono">{progressPercent}%</span>
          </div>
          <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
            <div
              className="bg-[#B9F0DF] h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Grid: Saved Majors & Saved Universities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Saved Majors Section */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#278C78]" />
              <span>{lang === 'ar' ? 'التخصصات المحفوظة' : 'Saved Majors'} ({savedMajors.length})</span>
            </h3>
            <button
              onClick={() => setCurrentPage('majors')}
              className="text-xs font-semibold text-[#278C78] hover:underline flex items-center gap-1"
            >
              <span>{lang === 'ar' ? 'استكشف المزيد' : 'Explore More'}</span>
              <NextIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {savedMajors.length > 0 ? (
            <div className="space-y-3">
              {savedMajors.map((m) => (
                <div
                  key={m.id}
                  className="p-4 bg-[#F7F8F5] rounded-xl border border-slate-200 flex items-start justify-between gap-3 hover:border-slate-300 transition-colors"
                >
                  <div
                    onClick={() => onSelectMajor(m)}
                    className="cursor-pointer space-y-1 flex-1"
                  >
                    <div className="text-[11px] font-semibold text-[#278C78]">
                      {categoryLabels[m.category][lang]} · {m.studyDuration[lang]}
                    </div>
                    <h4 className="text-sm font-bold text-[#102A43] hover:text-[#278C78] transition-colors">
                      {m.name[lang]}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-1">
                      {m.shortDescription[lang]}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemoveSavedMajor(m.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                    title={lang === 'ar' ? 'حذف من المحفوظات' : 'Remove from plan'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center space-y-2">
              <p className="text-xs text-slate-500">
                {lang === 'ar'
                  ? 'لم تحفظ أي تخصص بعد. تصفح دليل التخصصات واضغط على زر الحفظ.'
                  : 'No majors saved yet. Browse the directory and bookmark interesting paths.'}
              </p>
              <button
                onClick={() => setCurrentPage('majors')}
                className="text-xs font-bold text-[#278C78] hover:underline"
              >
                {lang === 'ar' ? 'فتح دليل التخصصات' : 'Open Majors Directory'}
              </button>
            </div>
          )}
        </div>

        {/* Saved Universities Section */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#278C78]" />
              <span>{lang === 'ar' ? 'الجامعات المستهدفة' : 'Target Universities'} ({savedUniversities.length})</span>
            </h3>
            <button
              onClick={() => setCurrentPage('universities')}
              className="text-xs font-semibold text-[#278C78] hover:underline flex items-center gap-1"
            >
              <span>{lang === 'ar' ? 'استكشف الجامعات' : 'Browse Universities'}</span>
              <NextIcon className="w-3.5 h-3.5" />
            </button>
          </div>

          {savedUniversities.length > 0 ? (
            <div className="space-y-3">
              {savedUniversities.map((u) => (
                <div
                  key={u.id}
                  className="p-4 bg-[#F7F8F5] rounded-xl border border-slate-200 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1 flex-1">
                    <div className="text-[11px] font-semibold text-slate-500">
                      {u.type[lang]} · {u.location[lang]}
                    </div>
                    <h4 className="text-sm font-bold text-[#102A43]">
                      {u.name[lang]}
                    </h4>
                    <a
                      href={u.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#278C78] hover:underline inline-block"
                    >
                      {translations.common.officialLink[lang]} ↗
                    </a>
                  </div>

                  <button
                    onClick={() => onRemoveSavedUniversity(u.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg transition-colors"
                    title={lang === 'ar' ? 'حذف من المحفوظات' : 'Remove from plan'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center space-y-2">
              <p className="text-xs text-slate-500">
                {lang === 'ar'
                  ? 'لم تحفظ أي جامعة بعد. تصفح الجامعات والكليات في سلطنة عُمان.'
                  : 'No universities bookmarked yet. Explore institutions across Oman.'}
              </p>
              <button
                onClick={() => setCurrentPage('universities')}
                className="text-xs font-bold text-[#278C78] hover:underline"
              >
                {lang === 'ar' ? 'فتح دليل الجامعات' : 'Open Universities Directory'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Preparation Checklist Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#102A43]">
              {lang === 'ar' ? 'قائمة الاستعداد الأكاديمي والقبول الجامعي' : 'College Preparation Checklist'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'ar'
                ? 'مهام أساسية ينصح خبراء التوجيه المهني بإنجازها قبل التخرج'
                : 'Essential milestones recommended by guidance counselors'}
            </p>
          </div>

          <span className="text-xs text-[#278C78] font-bold">
            {completedTasksCount} / {totalTasksCount} {lang === 'ar' ? 'مكتملة' : 'Completed'}
          </span>
        </div>

        {/* Checklist Items */}
        <div className="space-y-2.5">
          {futurePlan.checklist.map((item) => (
            <div
              key={item.id}
              className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                item.completed
                  ? 'bg-emerald-50/50 border-emerald-200 text-slate-600 line-through'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
              }`}
            >
              <div
                onClick={() => handleToggleChecklist(item.id)}
                className="cursor-pointer flex items-center gap-3 flex-1 select-none"
              >
                {item.completed ? (
                  <CheckSquare className="w-5 h-5 text-[#278C78] shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400 shrink-0" />
                )}
                <span className="text-xs sm:text-sm font-medium leading-normal">
                  {item.text[lang]}
                </span>
              </div>

              {item.isCustom && (
                <button
                  onClick={() => handleRemoveChecklistItem(item.id)}
                  className="text-slate-400 hover:text-red-500 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add custom item form */}
        <form onSubmit={handleAddChecklistItem} className="flex gap-2 pt-2">
          <input
            type="text"
            value={newChecklistText}
            onChange={(e) => setNewChecklistText(e.target.value)}
            placeholder={
              lang === 'ar'
                ? 'أضف مهمتك الخاصة (مثال: حضور اليوم المفتوح لجامعة السلطان قابوس)...'
                : 'Add a custom milestone (e.g., attend university open day)...'
            }
            className="flex-1 px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#278C78]"
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-[#278C78] hover:bg-[#1f7060] text-white text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'ar' ? 'إضافة' : 'Add'}</span>
          </button>
        </form>
      </div>

      {/* Personal Reflection Notes Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="space-y-0.5">
            <h3 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-[#278C78]" />
              <span>{lang === 'ar' ? 'ملاحظاتي وتأملاتي الشخصية' : 'Personal Reflection Notes'}</span>
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'ar'
                ? 'اكتب أهدافك، محادثاتك مع والديك أو مع أخصائي التوجيه المهني'
                : 'Jot down personal goals, family discussions, and counselor notes'}
            </p>
          </div>

          {saveToast && (
            <span className="text-xs text-[#278C78] font-bold animate-in fade-in">
              {lang === 'ar' ? 'تم الحفظ تلقائيًا ✓' : 'Auto-saved ✓'}
            </span>
          )}
        </div>

        <textarea
          rows={5}
          value={futurePlan.personalNotes}
          onChange={(e) => handleNotesChange(e.target.value)}
          placeholder={
            lang === 'ar'
              ? 'سجّل هنا أي أفكار تراودك حول دراستك الجامعية، النقاط التي ترغب في مناقشتها مع والديك، أو التساؤلات التي تريد طرحها في المدرسة...'
              : 'Write down thoughts about your college choices, discussion points for parents, or questions for your counselor...'
          }
          className="w-full p-4 text-xs sm:text-sm bg-[#F7F8F5] border border-slate-300 rounded-xl outline-none focus:border-[#278C78] leading-relaxed text-[#102A43]"
        />
      </div>
    </div>
  );
};
