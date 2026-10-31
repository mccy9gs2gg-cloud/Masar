import React, { useState, useMemo } from 'react';
import { StudentQuestion, Language, MajorCategory, PageId } from '../../types';
import { initialQuestionsData } from '../../data/questions';
import { categoryLabels, translations } from '../../data/translations';
import {
  HelpCircle,
  MessageCircle,
  Plus,
  Search,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  AlertCircle,
  X,
} from 'lucide-react';

interface AskStudentPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const AskStudentPage: React.FC<AskStudentPageProps> = ({ lang, setCurrentPage }) => {
  const [questions, setQuestions] = useState<StudentQuestion[]>(initialQuestionsData);
  const [selectedCategory, setSelectedCategory] = useState<MajorCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // New question form state
  const [newQuestionText, setNewQuestionText] = useState('');
  const [studentGrade, setStudentGrade] = useState('طالب بالصف الثاني عشر');
  const [questionCategory, setQuestionCategory] = useState<MajorCategory>('it');

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (selectedCategory !== 'all' && q.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const text = [
          q.question.ar,
          q.question.en,
          q.answer.ar,
          q.answer.en,
          q.asker.ar,
          q.asker.en,
          q.answeredBy.name,
        ]
          .join(' ')
          .toLowerCase();

        return text.includes(query);
      }
      return true;
    });
  }, [questions, selectedCategory, searchQuery]);

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    // Simulate moderated submission
    const newQ: StudentQuestion = {
      id: `q-${Date.now()}`,
      asker: { ar: studentGrade, en: studentGrade },
      question: { ar: newQuestionText, en: newQuestionText },
      category: questionCategory,
      answeredBy: {
        name: lang === 'ar' ? 'فريق سفراء الجامعات (قيد المراجعة)' : 'University Ambassadors (Under Review)',
        university: { ar: 'جامعات سلطنة عُمان', en: 'Omani Universities' },
        major: { ar: 'توجيه أكاديمي', en: 'Academic Guidance' },
      },
      answer: {
        ar: 'تم استلام سؤالك بنجاح! سيقوم فريق مسار بمراجعته وتوجيهه إلى طالب جامعي متخصص في المجال للإجابة عليه ونشره هنا قريبًا.',
        en: 'Your question was submitted successfully! The MASAR team will route it to a specialized university student for an authenticated answer.',
      },
      date: new Date().toISOString().split('T')[0],
    };

    setQuestions((prev) => [newQ, ...prev]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setModalOpen(false);
      setSubmittedSuccess(false);
      setNewQuestionText('');
    }, 2200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-start">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'ar' ? 'مجتمع الإرشاد الآمن' : 'Safe Guidance Community'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#102A43]">
            {lang === 'ar' ? 'اسأل طالبًا جامعيًا' : 'Ask a University Student'}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'ar'
              ? 'اطرح أسئلتك واستفساراتك حول الحياة الجامعية، صعوبة التخصصات، السنة التأسيسية، أو نصائح الاستعداد. يجيبك طلبة يدرسون التخصص حالياً بأسلوب واقعي وموثوق.'
              : 'Submit questions about university life, curriculum rigor, foundation year, or campus preparation. Authentic answers curated by current university peers.'}
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-3 rounded-xl bg-[#278C78] hover:bg-[#1f7060] text-white text-xs font-bold flex items-center gap-2 shadow-sm transition-all shrink-0 self-start md:self-auto"
        >
          <Plus className="w-4 h-4 text-[#B9F0DF]" />
          <span>{lang === 'ar' ? 'اطرح سؤالك الآن' : 'Submit a Question'}</span>
        </button>
      </div>

      {/* Safety & Anti-Private-Messaging Banner (Rule 12 & 17) */}
      <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl flex items-start gap-3 text-xs text-slate-700 text-start">
        <ShieldCheck className="w-5 h-5 text-[#278C78] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-[#102A43]">
            {lang === 'ar' ? 'معايير أمان وخصوصية القُصّر في مسار:' : 'Minor Safety & Privacy Standards:'}
          </span>
          <p className="leading-relaxed">
            {lang === 'ar'
              ? 'حرصًا على سلامة طلبة المدارس، لا تتيح المنصة أي محادثات خاصة أو مباشرة بين الطلبة والبالغين. تتم مراجعة كافة الأسئلة والأجوبة والتأكد من ملاءمتها ونشرها في هذه المساحة العامة فقط لحماية خصوصية الجميع.'
              : 'To safeguard school students, MASAR strictly prohibits unrestricted 1-on-1 private messaging between minors and unknown adults. All questions and answers are moderated, vetted, and published in this public space.'}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'ابحث في الأسئلة (مثال: الطب، السنة التأسيسية، هندسة، برمجة)...'
                  : 'Search questions (e.g. Medicine, Foundation Year, Engineering, Coding)...'
              }
              className="w-full ps-10 pe-3 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-[#102A43] focus:border-[#278C78] outline-none shadow-2xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute start-3 top-3" />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-[#102A43] text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {lang === 'ar' ? 'الكل' : 'All'}
            </button>
            {Object.entries(categoryLabels).map(([catKey, val]) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey as any)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === catKey
                    ? 'bg-[#102A43] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {val[lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions & Answers Feed */}
      <div className="space-y-6">
        {filteredQuestions.map((item) => {
          const cat = categoryLabels[item.category];

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs text-start space-y-6"
            >
              {/* Question Zone */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <span className="text-[#278C78] font-bold">{cat[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.asker[lang]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#102A43] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    س
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102A43] leading-snug">
                    {item.question[lang]}
                  </h3>
                </div>
              </div>

              {/* Answer Zone */}
              <div className="p-5 bg-[#F7F8F5] rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between gap-3 text-xs border-b border-slate-200/70 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#B9F0DF] text-[#102A43] text-xs font-bold flex items-center justify-center">
                      ج
                    </div>
                    <div>
                      <span className="font-bold text-[#183C59]">{item.answeredBy.name}</span>
                      <span className="text-slate-500 mx-1.5">·</span>
                      <span className="text-slate-600">
                        {item.answeredBy.major[lang]} ({item.answeredBy.university[lang]})
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] text-[#278C78] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'إجابة معتمدة' : 'Verified Response'}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed ps-8">
                  {item.answer[lang]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Submit Question Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-200 text-start">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-[#102A43]">
                {lang === 'ar' ? 'طرح سؤال لطلبة الجامعات' : 'Submit a Question to University Students'}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedSuccess ? (
              <div className="p-6 text-center space-y-3 bg-[#B9F0DF]/30 rounded-xl">
                <CheckCircle2 className="w-10 h-10 text-[#278C78] mx-auto" />
                <h4 className="text-sm font-bold text-[#102A43]">
                  {lang === 'ar' ? 'تم إرسال سؤالك للمراجعة والتوجيه!' : 'Question Submitted for Review!'}
                </h4>
                <p className="text-xs text-slate-600">
                  {lang === 'ar'
                    ? 'سيقوم سفراء مسار من طلبة الجامعات بالإجابة عليه قريبًا ونشره هنا.'
                    : 'A university ambassador will provide a verified answer shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'صفك الدراسي / موقعك' : 'Your Grade / Location'}
                  </label>
                  <select
                    value={studentGrade}
                    onChange={(e) => setStudentGrade(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  >
                    <option value="طالب بالصف التاسع">الصف التاسع (Grade 9)</option>
                    <option value="طالب بالصف العاشر">الصف العاشر (Grade 10)</option>
                    <option value="طالب بالصف الحادي عشر">الصف الحادي عشر (Grade 11)</option>
                    <option value="طالب بالصف الثاني عشر">الصف الثاني عشر (Grade 12)</option>
                    <option value="ولي أمر طالب">ولي أمر (Parent)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'المجال الأكاديمي المرتبط' : 'Related Academic Field'}
                  </label>
                  <select
                    value={questionCategory}
                    onChange={(e) => setQuestionCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  >
                    {Object.entries(categoryLabels).map(([catKey, val]) => (
                      <option key={catKey} value={catKey}>
                        {val[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ar' ? 'نص السؤال' : 'Your Question'} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newQuestionText}
                    onChange={(e) => setNewQuestionText(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'مثال: ما الفرق بين دراسة هندسة الحاسوب وعلوم الحاسب في الجامعات العمانية؟'
                        : 'e.g., What are the key differences between Computer Engineering and CS in Oman?'
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg outline-none focus:border-[#278C78]"
                  />
                </div>

                <p className="text-[11px] text-slate-500 leading-normal">
                  {lang === 'ar'
                    ? 'ملاحظة: لا تذكر أرقام هواتف أو حسابات شخصية. يتم مراجعة الأسئلة تربويًا لحماية خصوصيتك.'
                    : 'Note: Do not include phone numbers or private social handles. Safety is strictly moderated.'}
                </p>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
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
