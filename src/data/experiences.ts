import { StudentExperience } from '../types';

export const initialExperiencesData: StudentExperience[] = [
  {
    id: 'exp-1',
    studentName: 'ريان البلوشية',
    university: { ar: 'جامعة السلطان قابوس', en: 'Sultan Qaboos University' },
    major: { ar: 'دكتور في الطب البشري', en: 'Doctor of Medicine (MD)' },
    majorId: 'medicine',
    yearOfStudy: { ar: 'السنة السادسة (المرحلة السريرية)', en: '6th Year (Clinical Phase)' },
    category: 'health',
    whyChosen: {
      ar: 'منذ صغري كان شغفي مساعدة الناس ورؤية الابتسامة على وجوه المرضى بعد الشفاء، وكنت دائمًا منبهرة بكيفية عمل أجهزة الجسم وتناسقها العجيب.',
      en: 'Ever since childhood, my passion was alleviating pain and helping patients recover. I was constantly fascinated by the complexity and synergy of human physiology.',
    },
    whatTheyEnjoy: {
      ar: 'أجمل لحظة هي أثناء الجولات السريرية الصباحية في المستشفى الجامعي، عندما نتحدث مباشرة مع المريض ونشهد تحسن حالته خطوة بخطوة.',
      en: 'The most rewarding moments happen during morning rounds at SQU Hospital when interacting directly with patients and watching their health improve step by step.',
    },
    challenges: {
      ar: 'حجم الحفظ والمذاكرة في السنوات الثلاث الأولى هائل جدًا، وضغط الامتحانات التراكمية، والحاجة إلى تنظيم الوقت الصارم والتضحية ببعض المناسبات الاجتماعية.',
      en: 'The sheer volume of material to memorize in the pre-clinical years is immense. Exam intensity requires disciplined time management and occasional social trade-offs.',
    },
    wishKnownBefore: {
      ar: 'كنت أتمنى لو أدركت أن التفوق في الطب لا يعتمد فقط على الدرجات العالية، بل على القدرة على التحمل النفسي والتعاطف الحقيقي والعمل الجماعي مع الفريق الطبي.',
      en: 'I wish I had known that excelling in medicine is not just about raw test scores, but about emotional resilience, genuine empathy, and multidisciplinary teamwork.',
    },
    adviceForSchoolStudents: {
      ar: 'لا تدخل الطب بسبب رغبة الأهل أو اللقب الاجتماعي. ادخله فقط إذا كنت مستعدًا للتعلم المستمر مدى الحياة وتتحمل رؤية المعاناة الإنسانية بود ورحمة.',
      en: 'Do not enter medicine for family prestige or societal titles. Choose it only if you are committed to lifelong learning and have a compassionate heart.',
    },
    date: '2026-09-15',
  },
  {
    id: 'exp-2',
    studentName: 'فيصل المعمري',
    university: { ar: 'جامعة التقنية والعلوم التطبيقية - مسقط', en: 'UTAS - Muscat' },
    major: { ar: 'هندسة البرمجيات والأمن السيبراني', en: 'Software Engineering & Cybersecurity' },
    majorId: 'software-eng',
    yearOfStudy: { ar: 'السنة الرابعة (سنة التخرج)', en: '4th Year (Graduation Year)' },
    category: 'it',
    whyChosen: {
      ar: 'كنت مهووسًا بالألعاب الإلكترونية والكمبيوتر في المدرسة، وأردت معرفة كيف تُبنى تلك الأنظمة من الداخل وكيف نحميها من القرصنة.',
      en: 'I was obsessed with computing and tech in school and wanted to understand how systems are built from scratch and how to defend them from hacks.',
    },
    whatTheyEnjoy: {
      ar: 'المشاريع العملية والعمل ضمن فرق طلابية في مختبرات الأمن السيبراني والمشاركة في مسابقات الهاكاثون وCTF على مستوى الخليج.',
      en: 'Practical lab challenges, collaborative coding with student teams, and competing in national hackathons and Capture The Flag (CTF) tournaments.',
    },
    challenges: {
      ar: 'المجال يتغير بسرعة جنونية؛ ما تعلمته في السنة الأولى يظهر له أدوات جديدة كليًا في السنة الثالثة، والاعتماد فقط على محاضرات الجامعة لن يجعلك مبرمجًا محترفًا.',
      en: 'The tech stack evolves at breakneck speed. Relying solely on classroom slides is not enough; independent personal coding is mandatory.',
    },
    wishKnownBefore: {
      ar: 'أن بناء سيرة ذاتية مليئة بمشاريع حقيقية على GitHub أهم بكثير من مجرد حفظ النظريات الأكاديمية.',
      en: 'That a tangible portfolio of deployed GitHub projects is far more valuable to Omani tech employers than memorizing pure theory.',
    },
    adviceForSchoolStudents: {
      ar: 'ابدأ بتعلم أساسيات بايثون أو تطوير المواقع من الآن في الصيف عبر يوتيوب والمنصات المجانية؛ ستدخل الجامعة وأنت متقدم بأميال عن زملائك!',
      en: 'Start tinkering with Python or web dev right now during school vacations using free tutorials; you will enter university with an immense head start!',
    },
    date: '2026-10-02',
  },
  {
    id: 'exp-3',
    studentName: 'مريم الحارثية',
    university: { ar: 'الجامعة الألمانية للتكنولوجيا (GUtech)', en: 'German University of Technology (GUtech)' },
    major: { ar: 'الهندسة المعمارية والتخطيط الحضري', en: 'Architecture & Urban Planning' },
    majorId: 'architecture',
    yearOfStudy: { ar: 'السنة الخامسة (مشروع التخرج)', en: '5th Year (Thesis Year)' },
    category: 'creative',
    whyChosen: {
      ar: 'جمعت بين حبي للرسم والفنون وبين اهتمامي بالهندسة وتأثير المباني والشوارع على راحة الإنسان وهويتنا العمانية العريقة.',
      en: 'It was the dream bridge between my love for art, spatial aesthetics, and engineering. I wanted to design spaces that celebrate Omani heritage.',
    },
    whatTheyEnjoy: {
      ar: 'جلسات الاستوديو (Design Studio) وبناء النماذج المجسمة (Physical Models) ثلاثية الأبعاد، واستكشاف حلول المدن المستدامة في عُمان.',
      en: 'Studio culture, late-night model craftsmanship, and exploring biophilic, climate-responsive design for arid Gulf environments.',
    },
    challenges: {
      ar: 'جلسات النقد المعماري (Crits) تكون قاسية أحيانًا عندما ينتقد المحكمون مشروعك بعد أسبوعين من العمل المتواصل، ويتطلب ذلك مرونة نفسية لتقبل الملاحظات.',
      en: 'Design jury reviews (Crits) can be emotionally tough when guest critics dismantle your concept. You need thick skin to turn critique into growth.',
    },
    wishKnownBefore: {
      ar: 'أن المعماري ليس مجرد فنان يرسم مباني جميلة؛ بل هو منسق يتقن الفيزياء الإنشائية ومواد العزل والتكلفة وقوانين البلدية والسلامة.',
      en: 'That an architect is not just an artist drawing sketches; you must master structural load paths, acoustics, cost estimation, and municipal building codes.',
    },
    adviceForSchoolStudents: {
      ar: 'درب عينك على ملاحظة التفاصيل في المباني التراثية كالقلاع والبيوت القديمة في نزوى ومسقط، وتعلم مبادئ الرسم الحر والمنظور.',
      en: 'Train your eyes to analyze historic vernacular architecture in Nizwa and Muscat, and practice freehand perspective sketching.',
    },
    date: '2026-08-20',
  },
  {
    id: 'exp-4',
    studentName: 'عمر الرواحي',
    university: { ar: 'جامعة صحار', en: 'Sohar University' },
    major: { ar: 'الهندسة الميكانيكية والتصنيع', en: 'Mechanical & Manufacturing Engineering' },
    majorId: 'mech-eng',
    yearOfStudy: { ar: 'السنة الثالثة', en: '3rd Year' },
    category: 'engineering',
    whyChosen: {
      ar: 'كنت أحب فك وتركيب الأجهزة المعطلة في المنزل والسيارات، وأردت أن أفهم علم الديناميكا الحرارية والآلات الصناعية وكيف تدور المصانع.',
      en: 'I spent my teenage years dismantling broken appliances and engines at home. I wanted to understand thermodynamics and industrial machinery.',
    },
    whatTheyEnjoy: {
      ar: 'الورش الميكانيكية وتدريب الخراطة واللحام وتشغيل ماكينات CNC الحديثة في مركز أبحاث التصنيع بالجامعة.',
      en: 'Machining workshops, lathe operations, welding, and programming multi-axis CNC routers at the advanced manufacturing center.',
    },
    challenges: {
      ar: 'مقررات الرياضيات المتقدمة والتفاضل والتكامل وحسابات انتقال الحرارة معقدة وتتطلب ممارسة يومية لحل التمارين الهندسية الطويلة.',
      en: 'Differential equations, heat transfer calculus, and finite element math are intensely rigorous; cramming the night before will never work.',
    },
    wishKnownBefore: {
      ar: 'أن المهندس الميكانيكي في عُمان مطلوب في قطاعات متنوعة للغاية: النفط، الموانئ، المصافي، الطاقة المتجددة، وليس فقط في كراجات صيانة السيارات!',
      en: 'That mechanical engineers in Oman are needed everywhere—ports, refineries, solar farms, industrial desalination—not just in vehicle garages!',
    },
    adviceForSchoolStudents: {
      ar: 'اهتم جدًا بمادة الرياضيات البحتة والفيزياء في الصفين الحادي عشر والثاني عشر؛ فهما العمود الفقري الحقيقي لكل سنوات دراستك.',
      en: 'Do not neglect Pure Mathematics and Physics in Grades 11 and 12; they form 90% of the foundation for your engineering studies.',
    },
    date: '2026-09-28',
  },
  {
    id: 'exp-5',
    studentName: 'شهد الفارسية',
    university: { ar: 'الكلية الحديثة للتجارة والعلوم (MCBS)', en: 'Modern College of Business and Science' },
    major: { ar: 'اللوجستيات وإدارة سلاسل الإمداد', en: 'Logistics & Supply Chain Management' },
    majorId: 'logistics',
    yearOfStudy: { ar: 'السنة الثالثة', en: '3rd Year' },
    category: 'business',
    whyChosen: {
      ar: 'قرأت عن رؤية عُمان 2040 وموقع السلطنة الجغرافي الاستراتيجي كبوابة للعالم وموانئها العالمية (صلالة والدقم وصحار)، ورأيت في هذا المجال مستقبل الوظائف القيادية.',
      en: 'I read about Oman Vision 2040 and our strategic coastal location bridging East and West. Logistics is the engine of our national economic future.',
    },
    whatTheyEnjoy: {
      ar: 'دراسة دراسات حالة حية لشركات الملاحة العالمية، والمحاكاة التفاعلية لإدارة المخزون وسفن الحاويات.',
      en: 'Analyzing real container terminal shipping routes, dynamic port logistics software, and multi-modal transit economics.',
    },
    challenges: {
      ar: 'التحكم في سلاسل الإمداد يتطلب تفكيرًا سريعًا للغاية عند حدوث أزمات عالمية كتعطل الملاحة أو ارتفاع أسعار الوقود.',
      en: 'Supply chain management demands ultra-fast contingency planning when global disruptions hit sea routes or fuel indices.',
    },
    wishKnownBefore: {
      ar: 'أهمية مهارات تحليل البيانات وبرامج مثل Excel المتقدم وSAP في إدارة الشحنات؛ فاللوجستيات اليوم رقمية بالكامل وليست مجرد نقل تقليدي.',
      en: 'How data-driven logistics has become. Advanced Excel and ERP systems (SAP) are just as essential as negotiating with shipping lines.',
    },
    adviceForSchoolStudents: {
      ar: 'قوِّ لغتك الإنجليزية وتمرن على التفكير المنطقي وترتيب الأولويات؛ فاللوجستيات قطاع حيوي ومكافئ لأصحاب الشخصية المنظمة.',
      en: 'Hone your business English and organizational reflexes; logistics is deeply rewarding for structured, proactive problem solvers.',
    },
    date: '2026-10-14',
  },
];
