import { LocalizedString, LocalizedList } from '../types';

export interface CounselorResource {
  id: string;
  title: LocalizedString;
  targetGrades: LocalizedString;
  duration: LocalizedString;
  category: LocalizedString;
  objectives: LocalizedList;
  summary: LocalizedString;
  classroomActivity: LocalizedString;
  materialsNeeded: LocalizedList;
}

export const counselorResourcesData: CounselorResource[] = [
  {
    id: 'res-1',
    title: {
      ar: 'ورشة عمل: اكتشاف الميول ونقاط القوة الأكاديمية لطلبة الصف العاشر',
      en: 'Workshop: Uncovering Academic Strengths & Dispositions for Grade 10',
    },
    targetGrades: { ar: 'الصف التاسع والعاشر', en: 'Grades 9 & 10' },
    duration: { ar: '٤٥ دقيقة (حصة توجيه مهني كاملة)', en: '45 Minutes (Full Guidance Period)' },
    category: { ar: 'أنشطة استكشاف الذات', en: 'Self-Exploration Activity' },
    summary: {
      ar: 'نشاط تفاعلي مصمم لأخصائيي التوجيه المهني في مدارس سلطنة عُمان لمساعدة الطلبة على مطابقة مهاراتهم الفطرية بالمسارات الأكاديمية (العلمية والأدبية) قبل اختيار المواد في الصف الحادي عشر.',
      en: 'Interactive lesson plan for Omani career guidance specialists aiding students to align natural talents with STEM or Humanities subject clusters before Grade 11 subject selection.',
    },
    objectives: {
      ar: [
        'مساعدة الطالب على التمييز بين رغباته الشخصية والضغوط المجتمعية',
        'ربط المواد الدراسية المفضلة بقطاعات التخصصات الجامعية السبعة',
        'استخدام أداة مسار للاستكشاف التفاعلي وتوثيق النتائج في خطة الطالب',
      ],
      en: [
        'Differentiate between authentic personal interest and peer/family pressure',
        'Map favorite school subjects to the 7 higher education clusters',
        'Utilize MASAR’s interest assessment and log findings into student roadmaps',
      ],
    },
    classroomActivity: {
      ar: 'تقسيم الصف إلى مجموعات استكشافية رباعية. توزيع ورقة عمل "بوصلة الشغف والقدرة"، حيث يكتب كل طالب ٣ مواد يحبها و٣ مهارات يمارسها خارج المدرسة. تقوم كل مجموعة بربط هذه المهارات بثلاثة تخصصات في دليل مسار، ومناقشة مدى واقعيتها مع المعلم.',
      en: 'Divide class into teams of four. Distribute the "Passion & Competence Compass" worksheet. Each student writes down 3 favorite subjects and 3 personal hobbies, then maps them to 3 majors on MASAR.',
    },
    materialsNeeded: {
      ar: ['أجهزة لوحية أو هواتف لفتح موقع مسار', 'ورقة عمل بوصلة الشغف المطبوعة', 'أقلام ملونة ولوحات عرض جدارية'],
      en: ['Tablets/Laptops to access MASAR', 'Printed Passion Compass Worksheets', 'Colored markers and presentation boards'],
    },
  },
  {
    id: 'res-2',
    title: {
      ar: 'دليل حصة التوجيه: فك رموز دليل الطالب لمركز القبول الموحد (HEAC)',
      en: 'Guidance Session Guide: Decoding the HEAC Student Handbook & Criteria',
    },
    targetGrades: { ar: 'الصف الحادي عشر والثاني عشر', en: 'Grades 11 & 12' },
    duration: { ar: '٥٠ دقيقة', en: '50 Minutes' },
    category: { ar: 'إرشادات القبول الجامعي والبعثات', en: 'HEAC & Scholarship Guidance' },
    summary: {
      ar: 'دليل تطبيقي للأخصائي لشرح آلية احتساب المعدل التنافسي، ورموز البرامج الدراسية، والفرق بين البعثات الداخلية والمنح والجامعات الحكومية في سلطنة عُمان.',
      en: 'Practical walkthrough explaining how competitive scores are calculated, university program codes, and differences between national universities and internal scholarships.',
    },
    objectives: {
      ar: [
        'فهم آلية ترتيب الرغبات بذكاء وتجنب فقدان الفرص الجامعية',
        'توضيح مفهوم المقاعد التنافسية والحدود الدنيا لسنوات سابقة',
        'تعريف الطلبة بموقع مركز القبول الموحد (heac.gov.om) والجدول الزمني للقبول',
      ],
      en: [
        'Understand strategic preference ranking to avoid missing offers',
        'Clarify competitive seat allocations and historic cutoff trends',
        'Familiarize students with official HEAC timelines and registration stages',
      ],
    },
    classroomActivity: {
      ar: 'جلسة محاكاة لترتيب قائمة الرغبات العشر الأولى. يختار كل طالب تخصصاته المستهدفة في مسار، ثم يقوم بترتيبها بحسب الأولوية والواقعية الأكاديمية تحت إشراف الأخصائي.',
      en: 'Mock preference listing exercise: students shortlist 10 candidate majors using MASAR comparison tool, then rank them under counselor supervision.',
    },
    materialsNeeded: {
      ar: ['نسخة رقمية من دليل الطالب الصادر من مركز القبول الموحد', 'نموذج محاكاة الرغبات'],
      en: ['Digital copy of current HEAC Student Handbook', 'Mock preference worksheet'],
    },
  },
  {
    id: 'res-3',
    title: {
      ar: 'ورقة عمل: مقارنة تخصصين متشابهين واكتشاف الفروقات الجوهرية',
      en: 'Worksheet: Side-by-Side Comparison of Adjacent Academic Majors',
    },
    targetGrades: { ar: 'الصف العاشر حتى الثاني عشر', en: 'Grades 10 through 12' },
    duration: { ar: '٣٠ دقيقة', en: '30 Minutes' },
    category: { ar: 'أوراق عمل قابلة للطباعة', en: 'Printable Worksheets' },
    summary: {
      ar: 'ورقة عمل تساعد الطلبة على تجاوز الحيرة الشائعة بين التخصصات المتقاربة (مثل: علوم الحاسب مقابل هندسة البرمجيات، أو الطب البشري مقابل الصيدلة، أو الهندسة الميكانيكية مقابل المدنية).',
      en: 'Structured worksheet helping students disentangle common dilemmas between adjacent disciplines (e.g. Computer Science vs Software Engineering, or Mechanical vs Civil).',
    },
    objectives: {
      ar: [
        'استخدام أداة المقارنة التفاعلية في مسار لدراسة الفروق في المقررات وساعات العملي',
        'تحليل مهارات كل تخصص وسوق العمل العماني المرتبط به',
        'تسجيل قرار مبدئي مسبب يوضح أسباب تفضيل أحد التخصصين',
      ],
      en: [
        'Utilize MASAR’s comparison tool to analyze curriculum differences and lab hours',
        'Analyze skills demanded by each discipline in Oman’s job market',
        'Document a reasoned provisional preference with clear justification',
      ],
    },
    classroomActivity: {
      ar: 'يختار كل طالب تخصصين محتار بينهما، ويملأ جدول المقارنة المكون من ٥ معايير: طبيعة الدراسة اليومية، المهارات الأساسية، المقررات الصعبة، خيارات التوظيف في عُمان، ومدى ملاءمته لشخصيته.',
      en: 'Students pick two dilemmatic majors, filling a 5-dimension rubric: daily learning style, core skills, difficult courses, Omani career outlets, and personal fit.',
    },
    materialsNeeded: {
      ar: ['أداة مقارنة التخصصات على منصة مسار', 'ورقة المقارنة الخماسية'],
      en: ['MASAR Major Comparison Tool', '5-Dimension Comparison Rubric Sheet'],
    },
  },
];
