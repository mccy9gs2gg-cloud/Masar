import { QuizQuestion } from '../types';

export const quizQuestionsData: QuizQuestion[] = [
  {
    id: 1,
    question: {
      ar: 'عندما تواجه مشكلة معقدة أو غير متوقعة، كيف تفضل التعامل معها؟',
      en: 'When facing a complex or unexpected problem, how do you prefer to tackle it?',
    },
    context: {
      ar: 'يكشف هذا السؤال عن نمط تفكيرك الأساسي وطريقتك المفضلة في التحليل وحل التحديات.',
      en: 'This question highlights your primary cognitive style in resolving everyday and academic hurdles.',
    },
    options: [
      {
        label: {
          ar: 'تفكيكها منطقيًا إلى معادلات أو خطوات خوارزمية منظمة',
          en: 'Deconstruct it logically into mathematical steps or algorithmic rules',
        },
        scores: { it: 3, science: 3, engineering: 2 },
      },
      {
        label: {
          ar: 'فحص الجوانب الميكانيكية أو الفيزيائية وتجربة حل عملي ملموس بيدي',
          en: 'Examine physical/mechanical components and test hands-on prototypes',
        },
        scores: { engineering: 3, creative: 1, science: 1 },
      },
      {
        label: {
          ar: 'التحدث مع الناس وفهم مشاعرهم ودوافعهم للوصول إلى حل يرضي الجميع',
          en: 'Engage people, understand emotional motives, and reach empathetic consensus',
        },
        scores: { humanities: 3, health: 2, business: 2 },
      },
      {
        label: {
          ar: 'تخيل حلول غير تقليدية، ورسم أفكار بصرية إبداعية من خارج الصندوق',
          en: 'Brainstorm unconventional possibilities and sketch creative visual concepts',
        },
        scores: { creative: 3, it: 1, business: 1 },
      },
    ],
  },
  {
    id: 2,
    question: {
      ar: 'في بيئة عملك أو دراستك المستقبلية، أين تجد نفسك أكثر حماسًا وإنتاجية؟',
      en: 'In your future workplace or study environment, where do you see yourself most energized?',
    },
    context: {
      ar: 'يساعدك هذا على التمييز بين بيئات العمل المعتمدة على الآلات والتقنية، أو البشر والتفاعل الاجتماعي.',
      en: 'Helps differentiate between human-centric social environments versus technology-driven spaces.',
    },
    options: [
      {
        label: {
          ar: 'التعامل المباشر مع الناس والمرضى أو الطلاب لتقديم الرعاية والتوجيه',
          en: 'Direct human interaction with patients or students offering care and guidance',
        },
        scores: { health: 3, humanities: 3 },
      },
      {
        label: {
          ar: 'العمل مع الأنظمة الحاسوبية، والبرمجيات، والخوادم السحابية والذكاء الاصطناعي',
          en: 'Working with software frameworks, cloud architectures, and machine learning models',
        },
        scores: { it: 3, engineering: 1 },
      },
      {
        label: {
          ar: 'قيادة فرق العمل والتفاوض وعقد الصفقات في مكاتب الشركات والمؤسسات',
          en: 'Leading enterprise teams, negotiating deals, and managing strategic business growth',
        },
        scores: { business: 3, humanities: 1 },
      },
      {
        label: {
          ar: 'داخل استوديوهات التصميم أو ورش الفنون والوسائط الرقمية',
          en: 'Inside creative design studios, art workshops, or digital media labs',
        },
        scores: { creative: 3 },
      },
    ],
  },
  {
    id: 3,
    question: {
      ar: 'ما مدى اهتمامك بالعلوم الطبية وصحة الإنسان والأحياء الدقيقة؟',
      en: 'How drawn are you to medical sciences, human health, and biological organisms?',
    },
    context: {
      ar: 'القطاع الصحي يتطلب شغفًا بالعلوم الحيوية ورغبة صادقة في الخدمة الإنسانية الدؤوبة.',
      en: 'Healthcare requires a dedicated interest in life sciences and genuine commitment to service.',
    },
    options: [
      {
        label: {
          ar: 'شغوف جدًا؛ أحب معرفة كيف تتفاعل الأدوية وتشخيص الأمراض ومساعدة المرضى',
          en: 'Deeply passionate; eager to understand drug dynamics, diagnostics, and patient healing',
        },
        scores: { health: 4, science: 2 },
      },
      {
        label: {
          ar: 'أهتم بالجانب البيولوجي والوراثي والبيئة الطبيعية أكثر من العمل السريري بالمستشفى',
          en: 'Interested in genetics, lab biology, and ecology rather than bedside hospital care',
        },
        scores: { science: 3, health: 1 },
      },
      {
        label: {
          ar: 'أفضل الجانب الهندسي في المستشفيات (مثل تصميم وصيانة أجهزة الرنين والقلب)',
          en: 'Drawn to the engineering side (e.g. maintaining MRI systems and medical hardware)',
        },
        scores: { engineering: 3, health: 2 },
      },
      {
        label: {
          ar: 'اهتمامي محدود جدًا بالطب والأحياء؛ أميل أكثر للتكنولوجيا أو الاقتصاد والفنون',
          en: 'Very limited interest in biology; strongly prefer computing, business, or the arts',
        },
        scores: { it: 2, business: 2, creative: 2 },
      },
    ],
  },
  {
    id: 4,
    question: {
      ar: 'عندما يُطلب منك تنفيذ مشروع مدرسي أو جامعي، أي جزء تندمج فيه بحماس أكبر؟',
      en: 'When assigned a major project, which phase sparks your deepest enthusiasm?',
    },
    context: {
      ar: 'يكشف هذا السؤال عن دورك الطبيعي داخل فرق العمل وميولك الفطرية.',
      en: 'Highlights your natural inclination inside collaborative teams and creative workflows.',
    },
    options: [
      {
        label: {
          ar: 'تصميم الهوية البصرية، واختيار الألوان، والإخراج الجمالي للتقارير والعروض',
          en: 'Designing visual identity, typography, layout aesthetics, and video presentation',
        },
        scores: { creative: 4 },
      },
      {
        label: {
          ar: 'برمجة التطبيق أو الموقع أو تجميع النموذج التقني واختباره عمليًا',
          en: 'Coding the software logic or assembling and testing the technical prototype',
        },
        scores: { it: 3, engineering: 2 },
      },
      {
        label: {
          ar: 'تنظيم مهام الفريق، وحساب الميزانية التقديرية، وإلقاء العرض أمام الجمهور',
          en: 'Delegating team tasks, balancing estimated budgets, and delivering the keynote pitch',
        },
        scores: { business: 3, humanities: 2 },
      },
      {
        label: {
          ar: 'البحث المعمق في المصادر، وجمع البيانات الإحصائية، وصياغة التحليل المكتوب',
          en: 'Deep scholarly literature research, gathering empirical data, and analytical writing',
        },
        scores: { science: 2, humanities: 3 },
      },
    ],
  },
  {
    id: 5,
    question: {
      ar: 'هل تجد متعة في قيادة وتوجيه الآخرين وتنظيم الفعاليات والمشاريع؟',
      en: 'Do you enjoy leadership, orchestrating initiatives, and directing project logistics?',
    },
    context: {
      ar: 'المهارات القيادية والإدارية تعد مؤشرًا قويًا لقطاعات الأعمال واللوجستيات والعلوم الاجتماعية.',
      en: 'Leadership and administrative mindset is a strong indicator for business, logistics, and management.',
    },
    options: [
      {
        label: {
          ar: 'نعم جدًا؛ أستمتع بتولي زمام المبادرة وتنسيق جهود الفريق وتوزيع المهام',
          en: 'Very much; I thrive on spearheading initiatives, coordinating teams, and delegating',
        },
        scores: { business: 3, humanities: 2 },
      },
      {
        label: {
          ar: 'أفضل أن أكون خبيرًا تخصصيًا أركز بعمق على عملي التقني أو التحليلي الفردي',
          en: 'Prefer deep individual craft: focusing intensely on technical or analytical mastery',
        },
        scores: { it: 2, science: 3, engineering: 2 },
      },
      {
        label: {
          ar: 'أقود عبر الأفكار الإبداعية والتصميم بدلاً من الإدارة الإجرائية الرسمية',
          en: 'Lead through creative vision, aesthetic art direction, and conceptual storytelling',
        },
        scores: { creative: 3 },
      },
      {
        label: {
          ar: 'أحب تنظيم المساعدات المجتمعية والتطوع ودعم الأشخاص الذين يواجهون صعوبات',
          en: 'Love organizing community outreach, volunteering, and empowering underserved groups',
        },
        scores: { humanities: 3, health: 2 },
      },
    ],
  },
  {
    id: 6,
    question: {
      ar: 'ما هو شعورك الحقيقي تجاه الرياضيات البحتة، المعادلات، والبيانات الرقمية؟',
      en: 'What is your genuine sentiment toward mathematics, equations, and numerical data?',
    },
    context: {
      ar: 'الرياضيات متطلب مفصلي في تخصصات الهندسة والتقنية والعلوم والمالية.',
      en: 'Math is a foundational requirement across STEM, finance, and analytical domains.',
    },
    options: [
      {
        label: {
          ar: 'أحب لغة الأرقام وأجد متعة حقيقية عند حل مسألة رياضية أو تحليل إحصائي',
          en: 'I genuinely enjoy quantitative reasoning and solving rigorous mathematical problems',
        },
        scores: { science: 3, engineering: 3, it: 2, business: 2 },
      },
      {
        label: {
          ar: 'أحب الرياضيات التطبيقية المرتبطة بالمال، الأسهم، والأرباح وحسابات المشاريع',
          en: 'Appreciate applied commercial math: budgeting, stock markets, and project ROI',
        },
        scores: { business: 3, it: 1 },
      },
      {
        label: {
          ar: 'أستطيع التعامل مع الرياضيات الضرورية لتخصصي، ولكن لا أود أن تكون جوهر كل دراستي',
          en: 'Can manage necessary formulas, but do not want pure math to dominate every module',
        },
        scores: { health: 2, creative: 1 },
      },
      {
        label: {
          ar: 'أفضل التعبير اللغوي والكتابي، والتحليل الاجتماعي، والتصميم الفني على حساب الأرقام',
          en: 'Strongly lean towards verbal expression, social reasoning, or visual artistic design',
        },
        scores: { humanities: 3, creative: 2 },
      },
    ],
  },
  {
    id: 7,
    question: {
      ar: 'هل تميل في نمط دراستك إلى التطبيقات والأنشطة العملية أم القراءة والنظريات الفكرية؟',
      en: 'In your learning style, do you gravitate toward hands-on practical application or theoretical concepts?',
    },
    context: {
      ar: 'يساعدك هذا المعيار في اختيار تخصص يتوافق مع أسلوبك المفضل في الاستيعاب وتطبيق المعرفة.',
      en: 'Helps determine whether your stamina suits lab/studio workshops or deep scholarly literature.',
    },
    options: [
      {
        label: {
          ar: 'تطبيقي وعملي بامتياز: تجارب مختبرية، ورش ميكانيكية، أو استوديوهات تصميم',
          en: 'Highly hands-on: laboratory experiments, mechanical workshops, or design studios',
        },
        scores: { engineering: 3, creative: 2, health: 2 },
      },
      {
        label: {
          ar: 'تطبيقي رقمي: بناء أكواد وبرمجيات، ومحاكاة حاسوبية، وتجارب افتراضية',
          en: 'Digital hands-on: writing software pipelines, cyber simulations, and algorithms',
        },
        scores: { it: 3 },
      },
      {
        label: {
          ar: 'تأملي ونظري: القراءة المعمقة، دراسة السوابق القانونية، والنصوص الفكرية والسياسات',
          en: 'Reflective & theoretical: in-depth reading, legal precedents, and philosophical texts',
        },
        scores: { humanities: 3, science: 1 },
      },
      {
        label: {
          ar: 'مزيج مرن: أحب النظريات عندما تكون قابلة للتطبيق الفوري في مشاريع تجارية واقعية',
          en: 'Flexible hybrid: enjoy conceptual models when quickly testable in live markets',
        },
        scores: { business: 3, health: 1 },
      },
    ],
  },
];
