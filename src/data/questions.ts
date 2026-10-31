import { StudentQuestion } from '../types';

export const initialQuestionsData: StudentQuestion[] = [
  {
    id: 'q-1',
    asker: { ar: 'طالبة بالصف الثاني عشر - مسقط', en: 'Grade 12 Student - Muscat' },
    question: {
      ar: 'هل دراسة الطب البشري صعبة كما يصفها الجميع؟ وهل تنعدم الحياة الاجتماعية تمامًا؟',
      en: 'Is studying medicine as impossibly hard as everyone claims? Does personal life completely disappear?',
    },
    category: 'health',
    answeredBy: {
      name: 'د. خالد الزدجالي (طبيب امتياز)',
      university: { ar: 'جامعة السلطان قابوس', en: 'Sultan Qaboos University' },
      major: { ar: 'الطب البشري', en: 'Doctor of Medicine' },
    },
    answer: {
      ar: 'الطب ليس مستحيلاً، بل يحتاج إلى "استمرارية وانضباط" وليس عبقرية خارقة. ستدرس لساعات أطول بالتأكيد مقارنة ببعض التخصصات، لكن إذا نظمت جدولك الأسبوعي ستجد وقتًا كافيًا للرياضة، لقاء الأصدقاء، وممارسة هواياتك. الصعوبة الحقيقية تكمن في التراكم؛ إذا أهملت أسبوعين متتاليين ستشعر بالضغط الشديد.',
      en: 'Medicine is not impossible; it demands daily consistency and discipline rather than pure genius. You will certainly study more hours than some majors, but with structured weekly planning, you can maintain hobbies, fitness, and family time. The real pitfall is falling behind; missing two weeks makes catching up stressful.',
    },
    date: '2026-10-18',
  },
  {
    id: 'q-2',
    asker: { ar: 'طالب بالصف الحادي عشر - الباطنة', en: 'Grade 11 Student - Al Batinah' },
    question: {
      ar: 'ماذا يجب أن أتوقع في السنة التأسيسية (Foundation Year) في الجامعات والكليات العمانية؟',
      en: 'What should I expect during the Foundation Year in Omani colleges and universities?',
    },
    category: 'it',
    answeredBy: {
      name: 'سارة الشنفرية (طالبة سنة ثانية)',
      university: { ar: 'الجامعة الألمانية للتكنولوجيا (GUtech)', en: 'GUtech' },
      major: { ar: 'علوم الحاسب والذكاء الاصطناعي', en: 'Computer Science & AI' },
    },
    answer: {
      ar: 'السنة التأسيسية هي أهم جسر ينقلك من طريقة التعليم المدرسي إلى نمط البحث والاعتماد على الذات في الجامعة. تركز أساسًا على تقوية اللغة الإنجليزية الأكاديمية (الكتابة، الاستماع، العروض التقديمية)، والرياضيات الأساسية وتطبيقات الحاسب. نصيحتي: خذها بجدية تامة ولا تكتفِ بحد النجاح؛ فالتفوق فيها يفتح لك اختيار التخصص الذي ترغب فيه بسهولة ويجعلك مرتاحًا في سنوات التخصص.',
      en: 'Foundation Year is the vital transition bridge between structured school habits and independent university research. It concentrates heavily on Academic English (essays, presentations, listening), core calculus, and IT fundamentals. Treat it with full seriousness—mastering foundation English removes friction when lectures begin in your specialized major.',
    },
    date: '2026-10-12',
  },
  {
    id: 'q-3',
    asker: { ar: 'طالب بالصف الثاني عشر - الظاهرة', en: 'Grade 12 Student - Ad Dhahirah' },
    question: {
      ar: 'أريد دراسة علوم الحاسب أو هندسة البرمجيات، لكنني لم أدرس البرمجة في المدرسة أبدًا. هل سأواجه مشكلة؟',
      en: 'I want to study Computer Science, but I have never written code in school. Will I struggle?',
    },
    category: 'it',
    answeredBy: {
      name: 'هيثم الكعبي (طالب سنة ثالثة)',
      university: { ar: 'جامعة التقنية والعلوم التطبيقية - عبري', en: 'UTAS - Ibri' },
      major: { ar: 'تقنية المعلومات وعلوم الحاسب', en: 'IT & Computer Science' },
    },
    answer: {
      ar: 'اطمئن تمامًا! برامج علوم الحاسب في عُمان تبدأ معك من الصفر المطلق في مادة مقدمة البرمجة (Programming 101). الأهم من معرفة البرمجة المسبقة هو "التفكير المنطقي والصبر على حل المشكلات". ومع ذلك، يمكنك البدء اليوم بمشاهدة مقاطع أساسيات بايثون لمدة نصف ساعة أسبوعيًا؛ فهذا سيعطيك ثقة مبكرة رائعة.',
      en: 'Do not worry at all! CS curricula in Oman start entirely from scratch in Introduction to Programming. What truly matters is patience, curiosity, and logical problem-solving. Spending 30 minutes a week this summer on basic Python syntax will give you immense initial confidence.',
    },
    date: '2026-10-05',
  },
  {
    id: 'q-4',
    asker: { ar: 'طالبة بالصف العاشر - الداخلية', en: 'Grade 10 Student - Ad Dakhiliyah' },
    question: {
      ar: 'ما هي أكبر التحديات التي يواجهها طالب الهندسة في سنوات دراسته الأولى؟',
      en: 'What are the biggest challenges engineering students encounter in their first years?',
    },
    category: 'engineering',
    answeredBy: {
      name: 'سالم الكندي (طالب سنة رابعة)',
      university: { ar: 'جامعة نزوى', en: 'University of Nizwa' },
      major: { ar: 'الهندسة المدنية', en: 'Civil Engineering' },
    },
    answer: {
      ar: 'أكبر صدمة تواجه الطلبة الجدد هي الانتقال من حل المسائل الجاهزة والمحفوظة في المدرسة إلى فهم التطبيقات الفيزيائية وتصور الهياكل في الفضاء. مقررات الفيزياء الهندسية وحساب التفاضل المتقدم تحتاج إلى حل عشرات التمارين بيدك، وليس مجرد قراءة الحلول الجاهزة بالعين.',
      en: 'The initial shock is moving away from memorized school formulas to genuine spatial reasoning and physical principles. Engineering mechanics and multi-variable calculus require working through problem sets with pen and paper rather than passively scanning slides.',
    },
    date: '2026-09-22',
  },
  {
    id: 'q-5',
    asker: { ar: 'طالب بالصف الثاني عشر - الشرقية', en: 'Grade 12 Student - Ash Sharqiyah' },
    question: {
      ar: 'كيف أستعد نفسيًا وعمليًا لشهور ما بعد التخرج من المدرسة ودخول الجامعة؟',
      en: 'How can I best prepare mentally and practically for the transition between school graduation and university?',
    },
    category: 'humanities',
    answeredBy: {
      name: 'أفنان الوهيبية (خريجة قانون)',
      university: { ar: 'جامعة السلطان قابوس', en: 'Sultan Qaboos University' },
      major: { ar: 'القانون والعلوم الجنائية', en: 'Law' },
    },
    answer: {
      ar: 'استثمر إجازة الصيف في ثلاث أمور: ١) القراءة الواعية عن التخصصات عبر منصة مسار ودليل القبول الموحد. ٢) تقوية لغتك الإنجليزية اليومية عبر البودكاست والمقالات. ٣) تعلّم مهارات الحياة الأساسية كإدارة الميزانية الشخصية، ففي السكن الجامعي ستكون مسؤولاً عن قراراتك ومواعيدك بالكامل.',
      en: 'Invest your summer vacation in three habits: 1) Thoroughly researching majors through MASAR and HEAC handbooks. 2) Improving practical English through podcasts and news articles. 3) Practicing personal responsibility and budgeting, especially if you will reside in campus dorms.',
    },
    date: '2026-09-10',
  },
];
