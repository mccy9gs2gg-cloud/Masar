import React from 'react';
import { Language, PageId } from '../../types';
import { translations } from '../../data/translations';
import { Logo } from '../Logo';
import {
  Compass,
  ShieldCheck,
  Eye,
  Target,
  Sparkles,
  Heart,
  Scale,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Lock,
  GraduationCap,
} from 'lucide-react';

interface AboutPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, setCurrentPage }) => {
  const isRtl = lang === 'ar';
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  const values = [
    {
      title: { ar: 'سهولة الوصول والشمولية', en: 'Universal Accessibility' },
      desc: {
        ar: 'منصة مجانية بالكامل ومتاحة لجميع طلبة المدارس من مسندم إلى ظفار دون أي قيود مالية أو اشتراكات.',
        en: '100% free and open access for students across all governorates from Musandam to Dhofar.',
      },
      icon: <Eye className="w-5 h-5 text-[#278C78]" />,
    },
    {
      title: { ar: 'الشفافية والواقعية', en: 'Authentic Transparency' },
      desc: {
        ar: 'نقدم تجارب الطلبة الصريحة ونبرز التحديات الحقيقية لكل تخصص بجانب مميزاته دون تزييف أو ترويج تجاري.',
        en: 'Unfiltered student perspectives balancing realistic rigor with opportunities without promotional spin.',
      },
      icon: <Sparkles className="w-5 h-5 text-[#278C78]" />,
    },
    {
      title: { ar: 'تمكين الطالب واستقلاليته', en: 'Student Empowerment' },
      desc: {
        ar: 'نرشد الطالب ونزوده بالأدوات ليفكر ويتخذ قراره بنفسه؛ فمسار يوجه ولا يقرر نيابة عنك.',
        en: 'We equip students to think critically and decide autonomously; MASAR guides, it never dictates.',
      },
      icon: <Target className="w-5 h-5 text-[#278C78]" />,
    },
    {
      title: { ar: 'التعاون والتكافل الأكاديمي', en: 'Educational Collaboration' },
      desc: {
        ar: 'جسر يربط بين طلبة المدارس، طلبة الجامعات، أخصائيي التوجيه، والمؤسسات الأكاديمية في سلطنة عُمان.',
        en: 'A supportive bridge unifying school students, university seniors, guidance counselors, and colleges.',
      },
      icon: <Users className="w-5 h-5 text-[#278C78]" />,
    },
    {
      title: { ar: 'الموثوقية والأمانة العلمية', en: 'Institutional Reliability' },
      desc: {
        ar: 'اعتماد شروط القبول والتفاصيل الأكاديمية من مصادرها الرسمية الصادرة عن مركز القبول الموحد والجامعات.',
        en: 'Rigorous adherence to verified data derived from HEAC, MoHERI, and official university registries.',
      },
      icon: <Award className="w-5 h-5 text-[#278C78]" />,
    },
    {
      title: { ar: 'تكافؤ الفرص', en: 'Equal Opportunities' },
      desc: {
        ar: 'إتاحة نفس المستوى العالي من الإرشاد والوعي الأكاديمي لكل طالب عماني أينما كان موقعه الجغرافي.',
        en: 'Delivering the same tier of high-quality guidance to every Omani student regardless of location.',
      },
      icon: <Scale className="w-5 h-5 text-[#278C78]" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 text-start">
      {/* Hero / Identity Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex justify-center mb-2">
          <Logo lang={lang} showSlogan={false} />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B9F0DF]/30 text-[#278C78] text-xs font-bold border border-[#278C78]/20">
          <Award className="w-3.5 h-3.5" />
          <span>{lang === 'ar' ? 'شركة طلابية مدرسية · سلطنة عُمان' : 'Student School Company · Sultanate of Oman'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#102A43] text-balance">
          {lang === 'ar' ? 'مستقبلك يبدأ بفهم خياراتك' : 'Your Future Starts With Understanding'}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {lang === 'ar'
            ? 'مسار هي شركة طلابية مدرسية ومنصة تعليمية وطنية رائدة تأسست في سلطنة عُمان، ابتكرها ونفذها طلبة المدارس لتمكين زملائهم الطلبة (خاصة من الصف التاسع وحتى الثاني عشر) من اكتشاف ميولهم واستكشاف التخصصات الجامعية بوعي وثقة.'
            : 'MASAR is an innovative student school company and educational career exploration platform founded in the Sultanate of Oman, built by school students to empower peers (Grades 9–12) to discover their interests and explore higher ed options with clarity.'}
        </p>
      </section>

      {/* Leadership & Student Company Identity Card */}
      <section className="bg-gradient-to-br from-white to-[#F7F8F5] rounded-3xl p-8 sm:p-10 border-2 border-[#278C78]/30 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#278C78] uppercase tracking-wider">
              {lang === 'ar' ? 'الهيكل القيادي للشركة الطلابية' : 'Student Company Leadership'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
              {lang === 'ar' ? 'شركة مسار الطلابية المدرسية' : 'MASAR Student School Company'}
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              {lang === 'ar'
                ? 'مشروع ريادي مدرسي وطني في سلطنة عُمان، يشارك في المسابقات والمبادرات الريادية الطلابية، ويهدف إلى إحداث فارق مجتمعي وتربوي ملموس عبر معالجة الحيرة الأكاديمية وربط طلبة المدارس بالجامعات وسوق العمل.'
                : 'A national school student enterprise in Oman competing in student company initiatives, designed to bridge school education with higher education and the future labor market.'}
            </p>
          </div>

          <div className="bg-[#102A43] text-white p-6 rounded-2xl shadow-md shrink-0 border border-slate-700 md:min-w-[280px] text-start">
            <div className="text-xs font-semibold text-[#B9F0DF] mb-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#B9F0DF]" />
              <span>{lang === 'ar' ? 'رئيس الشركة الطلابية' : 'Company President & CEO'}</span>
            </div>
            <div className="text-xl font-bold text-white tracking-wide">
              {lang === 'ar' ? 'حسنين باسم عبد الرزاق' : 'Hassanain Basim Abdul Razzaq'}
            </div>
            <div className="text-xs text-slate-300 mt-2 pt-2 border-t border-white/10">
              {lang === 'ar' ? 'قيادة وإشراف فريق العمل الطلابي' : 'Leadership & Executive Direction'}
            </div>
          </div>
        </div>

        <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
            <div className="font-bold text-[#102A43]">
              {lang === 'ar' ? 'فكرة طلابية نابعة من الميدان' : 'Student-Led Innovation'}
            </div>
            <p className="text-slate-600">
              {lang === 'ar'
                ? 'ولدت الفكرة من واقع التحديات التي يواجهها الطلبة في اختيار مواد الصف الحادي عشر والثاني عشر وترتيب الرغبات في القبول الموحد.'
                : 'Conceived directly from the practical dilemmas students face in choosing subjects and ranking HEAC preferences.'}
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
            <div className="font-bold text-[#102A43]">
              {lang === 'ar' ? 'كفاءات طلابية طموحة' : 'Ambitious Youth Competencies'}
            </div>
            <p className="text-slate-600">
              {lang === 'ar'
                ? 'فريق العمل يضم كفاءات طلابية متميزة في البحث، والتصميم، وتطوير المنصات الرقمية، والتواصل مع الجامعات العمانية.'
                : 'Team comprised of passionate students in research, UI/UX, software engineering, and university liaison.'}
            </p>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
            <div className="font-bold text-[#102A43]">
              {lang === 'ar' ? 'أثر مستدام لرؤية عُمان 2040' : 'Oman Vision 2040 Impact'}
            </div>
            <p className="text-slate-600">
              {lang === 'ar'
                ? 'تسهم الشركة في توجيه الكوادر الوطنية نحو التخصصات المستقبلية والواعدة التي يحتاجها الاقتصاد العماني.'
                : 'Directly supporting national goals by steering students toward in-demand strategic sectors in Oman.'}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Split Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 text-[#B9F0DF] flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {lang === 'ar' ? 'رسالتنا (Mission)' : 'Our Mission'}
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {lang === 'ar'
              ? 'تمكين طلبة المدارس في سلطنة عُمان بمعلومات ميسرة وتجارب واقعية لطلبة الجامعات، حتى يستكشفوا مستقبلهم الأكاديمي بثقة، ويتخذوا قرارات واعية مبنية على الفهم والميول الحقيقية.'
              : 'To empower school students in Oman with accessible information and real student experiences so they can explore their academic futures with confidence.'}
          </p>
        </div>

        {/* Vision */}
        <div className="bg-[#183C59] text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 text-[#B9F0DF] flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">
            {lang === 'ar' ? 'رؤيتنا (Vision)' : 'Our Vision'}
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {lang === 'ar'
              ? 'أن نكون المنصة الطلابية الأولى والموثوقة للاستكشاف الأكاديمي والمهني في سلطنة عُمان، ومصدر الإلهام الذي يربط طموح المدرسة بآفاق التعليم العالي وسوق العمل.'
              : 'To become a trusted student-centered platform for academic and career exploration in Oman, bridging secondary school ambitions with university reality.'}
          </p>
        </div>
      </section>

      {/* Interconnected Knowledge Visual Banner */}
      <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
          <span className="text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            {lang === 'ar' ? 'تكامل المعرفة' : 'Interconnected Knowledge'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
            {lang === 'ar' ? 'منصة توجّه ولا تفرض القرار' : 'A Platform That Guides, Never Dictates'}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {lang === 'ar'
              ? 'في عالم متسارع، تتداخل العلوم الهندسية مع الطب، وتلتقي البرمجة بالفنون والتصميم. صُمم مسار ليساعدك على فهم كيفية تقاطع هذه المجالات واختيار المسار الذي يعبر عن شغفك الحقيقي.'
              : 'In modern economies, engineering converges with healthcare, while coding infuses creative arts. MASAR illuminates these connections so you can find where your talents intersect.'}
          </p>
        </div>
        <div className="lg:col-span-6 p-6">
          <div className="rounded-2xl overflow-hidden aspect-4/3 bg-[#102A43]">
            <img
              src="/src/assets/images/masar_career_nodes_1793374484588.jpg"
              alt="Interconnected Pathways of Knowledge"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Core Values (6 Values) */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-[#278C78] uppercase tracking-wider">
            {lang === 'ar' ? 'مبادئنا الأساسية' : 'Guiding Principles'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#102A43]">
            {lang === 'ar' ? 'قيم منصة مسار' : 'Core Values of MASAR'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#278C78] transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#B9F0DF]/40 flex items-center justify-center">
                {v.icon}
              </div>
              <h3 className="text-base font-bold text-[#102A43]">
                {v.title[lang]}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {v.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 17: Privacy and Student Safety Protocol */}
      <section className="bg-[#F7F8F5] rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#102A43] text-[#B9F0DF] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#102A43]">
              {lang === 'ar' ? 'ميثاق الخصوصية وأمان الطلبة' : 'Privacy & Student Safety Charter'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'ar' ? 'التزام أخلاقي وتربوي صارم لحماية أبنائنا وبناتنا' : 'Strict ethical safety protocols for minors'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-[#183C59] text-sm flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#278C78]" />
              <span>{lang === 'ar' ? '١. جمع الحد الأدنى من البيانات' : '1. Minimal Data Collection'}</span>
            </h4>
            <p>
              {lang === 'ar'
                ? 'لا نطلب تسجيل دخول أو أرقام بطاقات شخصية أو بريد إلكتروني إلزامي لاستخدام الموقع. تُحفظ خطة الطالب المستقبلية محليًا على جهاز المتصفح الشخصي ولا تُرسل لأي خوادم خارجية.'
                : 'We do not mandate account logins or sensitive personal credentials. Your Future Plan is stored locally on your device.'}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-[#183C59] text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#278C78]" />
              <span>{lang === 'ar' ? '٢. منع المراسلات الخاصة المجهولة' : '2. No Direct Unmoderated Messaging'}</span>
            </h4>
            <p>
              {lang === 'ar'
                ? 'حظر قاطع للمحادثات الخاصة الفردية بين القُصّر والبالغين لتجنب أي إساءة استخدام. يتم طرح ومراجعة كافة الأسئلة بصورة علنية ومراقبة تربويًا.'
                : 'Strict prevention of 1-on-1 private messaging between minors and unknown adults. All Q&A is publicly moderated.'}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-[#183C59] text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#278C78]" />
              <span>{lang === 'ar' ? '٣. المراجعة قبل النشر' : '3. Pre-Publication Moderation'}</span>
            </h4>
            <p>
              {lang === 'ar'
                ? 'تخضع تجارب طلبة الجامعات والأسئلة المطروحة للمراجعة والتدقيق التربوي لحذف أي ألفاظ غير لائقة أو أرقام هواتف خاصة قبل نشرها.'
                : 'Every student testimonial and query is human-moderated to filter inappropriate content or personal phone numbers.'}
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-bold text-[#183C59] text-sm flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#278C78]" />
              <span>{lang === 'ar' ? '٤. الفصل بين الرأي والبيانات الرسمية' : '4. Separating Opinions from Facts'}</span>
            </h4>
            <p>
              {lang === 'ar'
                ? 'نفصل بوضوح تام بين تجارب الطلبة الشخصية (وهي آراء انطباعية قابلة للتفاوت) وبين شروط القبول الرسمية الصادرة من مركز القبول الموحد والجامعات.'
                : 'We clearly differentiate between subjective student reflections and authoritative admission standards from HEAC.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
