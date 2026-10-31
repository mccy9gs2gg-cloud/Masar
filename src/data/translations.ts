import { MajorCategory } from '../types';

export const categoryLabels: Record<MajorCategory, { ar: string; en: string; icon: string }> = {
  health: {
    ar: 'الصحة والطب',
    en: 'Health & Medicine',
    icon: 'HeartPulse',
  },
  engineering: {
    ar: 'الهندسة',
    en: 'Engineering',
    icon: 'Wrench',
  },
  it: {
    ar: 'تقنية المعلومات والذكاء الاصطناعي',
    en: 'Information Technology & AI',
    icon: 'Cpu',
  },
  business: {
    ar: 'إدارة الأعمال والاقتصاد',
    en: 'Business & Economics',
    icon: 'Briefcase',
  },
  science: {
    ar: 'العلوم الأساسية والتطبيقية',
    en: 'Science & Mathematics',
    icon: 'Atom',
  },
  humanities: {
    ar: 'العلوم الإنسانية والاجتماعية',
    en: 'Humanities & Social Sciences',
    icon: 'BookOpen',
  },
  creative: {
    ar: 'الفنون والتصميم الرقمي',
    en: 'Creative & Digital Design',
    icon: 'Palette',
  },
};

export const translations = {
  nav: {
    brand: { ar: 'مسار', en: 'MASAR' },
    slogan: { ar: 'مستقبلك يبدأ بفهم خياراتك', en: 'Your Future Starts With Understanding' },
    home: { ar: 'الرئيسية', en: 'Home' },
    quiz: { ar: 'اكتشف اهتماماتك', en: 'Discover Interests' },
    majors: { ar: 'دليل التخصصات', en: 'Majors' },
    universities: { ar: 'جامعات عُمان', en: 'Universities' },
    compare: { ar: 'مقارنة التخصصات', en: 'Compare' },
    experiences: { ar: 'تجارب الطلبة', en: 'Student Stories' },
    ask: { ar: 'اسأل طالبًا جامعيًا', en: 'Ask a Student' },
    plan: { ar: 'خطتي المستقبلية', en: 'My Future Plan' },
    counselor: { ar: 'ركن التوجيه المهني', en: 'Counselor Hub' },
    about: { ar: 'عن مسار', en: 'About MASAR' },
    langSwitch: { ar: 'English', en: 'عربي' },
  },
  common: {
    search: { ar: 'بحث...', en: 'Search...' },
    filter: { ar: 'تصفية', en: 'Filter' },
    all: { ar: 'الكل', en: 'All' },
    category: { ar: 'المجال', en: 'Category' },
    location: { ar: 'المحافظة / الموقع', en: 'Location' },
    saveToPlan: { ar: 'حفظ في خطتي', en: 'Save to My Plan' },
    savedToPlan: { ar: 'محفوظ في خطتك', en: 'Saved in Plan' },
    addToCompare: { ar: 'إضافة للمقارنة', en: 'Add to Compare' },
    inComparison: { ar: 'في المقارنة', en: 'In Comparison' },
    compareNow: { ar: 'قارن الآن', en: 'Compare Now' },
    close: { ar: 'إغلاق', en: 'Close' },
    back: { ar: 'السابق', en: 'Previous' },
    next: { ar: 'التالي', en: 'Next' },
    submit: { ar: 'إرسال', en: 'Submit' },
    reset: { ar: 'إعادة ضبط', en: 'Reset' },
    duration: { ar: 'مدة الدراسة التقديرية', en: 'Estimated Study Duration' },
    years: { ar: 'سنوات', en: 'Years' },
    skills: { ar: 'المهارات المطلوبة', en: 'Key Skills Needed' },
    subjects: { ar: 'أبرز المقررات والموضوعات', en: 'Key Subjects' },
    careers: { ar: 'المسارات المهنية المحتملة', en: 'Potential Career Paths' },
    institutionsInOman: { ar: 'مؤسسات تعليم عالي تطرحه في عُمان', en: 'Offered by Higher Ed in Oman' },
    admissionInfo: { ar: 'شروط وضوابط القبول', en: 'Admission Requirements' },
    natureBalance: { ar: 'طبيعة الدراسة', en: 'Study Nature' },
    practical: { ar: 'تطبيقي وعملي', en: 'Practical' },
    theoretical: { ar: 'نظري وأكاديمي', en: 'Theoretical' },
    verifiedBadge: { ar: 'بيانات موثوقة', en: 'Verified' },
    heacNotice: {
      ar: 'ملاحظة: شروط القبول الدقيقة والحدود الدنيا تُحدد سنويًا عبر دليل الطالب الصادر من مركز القبول الموحد (HEAC).',
      en: 'Note: Precise admission cutoffs are published annually via the Unified Admission Centre (HEAC) Student Handbook.',
    },
    heacLink: {
      ar: 'زيارة موقع مركز القبول الموحد (heac.gov.om)',
      en: 'Visit Unified Admission Centre (heac.gov.om)',
    },
    officialLink: { ar: 'الموقع الرسمي للجامعة', en: 'Official Institution Website' },
    details: { ar: 'عرض التفاصيل', en: 'View Details' },
  },
  hero: {
    kicker: { ar: 'منصة الاستكشاف الأكاديمي والمهني لطلبة سلطنة عُمان', en: 'Academic & Career Exploration for School Students in Oman' },
    title: { ar: 'لا تختَر مستقبلك قبل أن تكتشفه.', en: 'Don’t Choose Your Future Before You Explore It.' },
    desc: {
      ar: 'اكتشف اهتماماتك، استكشف التخصصات الجامعية، قارن المسارات الأكاديمية، وتعلّم من تجارب واقعية لطلبة الجامعات في عُمان. مسار يساعدك على اتخاذ قرارات واعية لمستقبلك.',
      en: 'Explore your interests, discover university majors, compare academic pathways, and learn from real university experiences. MASAR helps you make more informed decisions about your future.',
    },
    ctaDiscover: { ar: 'اكتشف مسارك الآن', en: 'Discover Your Path' },
    ctaMajors: { ar: 'استكشف دليل التخصصات', en: 'Explore University Majors' },
    bannerProof: {
      stat1: { num: '+45', label: { ar: 'تخصص جامعي مدروس', en: 'Academic Majors' } },
      stat2: { num: '+10', label: { ar: 'جامعات وكليات في عُمان', en: 'Omani Universities' } },
      stat3: { num: '100%', label: { ar: 'مجاني ومتاح لجميع الطلبة', en: 'Free for All Students' } },
    },
  },
  homeFeatures: {
    heading: { ar: 'أدوات مسار المتكاملة لمستقبلك', en: 'Integrated Tools for Your Future' },
    subheading: { ar: 'صُممت خصيصًا لترافق طلبة المدارس من الصف التاسع وحتى الثاني عشر نحو وجهتهم الجامعية', en: 'Designed to accompany students from Grades 9 through 12 to their ideal university path' },
    card1: {
      title: { ar: 'اكتشف اهتماماتك', en: 'Discover Your Interests' },
      desc: { ar: 'أجب على أسئلة تفاعلية تفصل بين ميولك العلمية، العملية، والتحليلية لتتعرف على المجالات الأقرب لشغفك.', en: 'Answer interactive questions uncovering your analytical, practical, and scientific leanings.' },
    },
    card2: {
      title: { ar: 'دليل التخصصات الشامل', en: 'Explore University Majors' },
      desc: { ar: 'معلومات وافية عن المقررات، المهارات المطلوبة، وسوق العمل في عُمان لكل تخصص بدقة وموثوقية.', en: 'In-depth breakdown of subjects, skills, and local career market opportunities for every major.' },
    },
    card3: {
      title: { ar: 'مقارنة المسارات الأكاديمية', en: 'Compare Academic Options' },
      desc: { ar: 'ضع تخصصين أو أكثر وجهًا لوجه وقارن طبيعة الدراسة، الساعات العملية، والفرص المهنية.', en: 'Place two or more majors side by side to compare hands-on intensity, courses, and careers.' },
    },
    card4: {
      title: { ar: 'تجارب حقيقية لطلبة الجامعات', en: 'Learn From University Students' },
      desc: { ar: 'قصص ونصائح صريحة من طلبة يدرسون فعليًا في جامعات السلطنة يشاركونك ما تمنوا معرفته قبل القبول.', en: 'Authentic advice and experiences shared by students currently enrolled in Omani universities.' },
    },
  },
  howItWorks: {
    heading: { ar: 'كيف يساعدك مسار في 3 خطوات؟', en: 'How MASAR Works in 3 Steps' },
    step1: {
      title: { ar: '١. اكتشف ذاتك واهتماماتك', en: '1. Discover Yourself' },
      desc: { ar: 'حدد نقاط قوتك وميولك الدراسية عبر نشاط الاستكشاف التفاعلي المبني على أسئلة توجيهية هادفة.', en: 'Identify your strengths and study inclinations through our interactive exploration questionnaire.' },
    },
    step2: {
      title: { ar: '٢. استكشف خياراتك الجامعية', en: '2. Explore Your Options' },
      desc: { ar: 'تصفح التخصصات والجامعات المطروحة في سلطنة عُمان وتعرف على شروط القبول ومتطلبات سوق العمل.', en: 'Browse majors and universities in Oman, understanding admission requirements and market needs.' },
    },
    step3: {
      title: { ar: '٣. اتخذ قرارك بثقة ووعي', en: '3. Make an Informed Decision' },
      desc: { ar: 'ابنِ خطتك الأكاديمية الشخصية وقارن بين رغباتك، وشاركها مع والديك وأخصائي التوجيه المهني.', en: 'Build your personal plan, compare your preferences, and share them with parents and counselors.' },
    },
  },
  ctaSection: {
    title: { ar: 'مستقبلك يستحق أن تكتشفه بعناية. ابدأ رحلتك اليوم مع مسار.', en: 'Your future is worth exploring. Start your journey with MASAR today.' },
    subtitle: { ar: 'منصة مجانية بالكامل، مصممة بأيدي كفاءات وطنية لخدمة أجيال عمان الواعدة.', en: 'Entirely free platform built to empower the ambitious youth of Oman.' },
    button: { ar: 'ابدأ استكشاف اهتماماتك (مجاني)', en: 'Start Exploring (Free)' },
  },
};
