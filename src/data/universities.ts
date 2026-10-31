import { UniversityInstitution } from '../types';

export const universitiesData: UniversityInstitution[] = [
  {
    id: 'squ',
    name: { ar: 'جامعة السلطان قابوس', en: 'Sultan Qaboos University (SQU)' },
    shortName: 'SQU',
    type: { ar: 'جامعة حكومية', en: 'Public National University' },
    location: { ar: 'الخوض، محافظة مسقط', en: 'Al Khoudh, Muscat Governorate' },
    website: 'https://www.squ.edu.om',
    description: {
      ar: 'الصرح الأكاديمي الوطني الأول في سلطنة عُمان، تأسست عام 1986. تضم كليات الطب، الهندسة، العلوم، الاقتصاد والعلوم السياسية، التمريض، والآداب والعلوم الاجتماعية، والتربية، والحقوق، والعلوم الزراعية والبحرية.',
      en: 'The premier national university in the Sultanate of Oman, established in 1986. Features colleges of Medicine, Engineering, Science, Economics, Nursing, Arts, Education, Law, and Agricultural Sciences.',
    },
    availableCategories: ['health', 'engineering', 'it', 'business', 'science', 'humanities', 'creative'],
    featuredPrograms: {
      ar: ['الطب البشري والجراحة', 'الهندسة الميكانيكية والكهربائية والمدنية', 'علوم الحاسب والذكاء الاصطناعي', 'المحاسبة والمالية', 'القانون والترجمة'],
      en: ['Doctor of Medicine (MD)', 'Mechanical, Electrical & Civil Engineering', 'Computer Science & AI', 'Accounting & Finance', 'Law & Translation'],
    },
    admissionOverview: {
      ar: 'القبول يتم حصريًا عبر مركز القبول الموحد (HEAC) وفق أعلى المعدلات التنافسية لشهادة دبلوم التعليم العام والبعثات والمنح الحكومية الكاملة.',
      en: 'Admission is conducted exclusively through HEAC with top competitive cutoffs for General Education Diploma holders, fully subsidized by the Government.',
    },
    contact: {
      phone: '+968 2414 1111',
      email: 'admissions@squ.edu.om',
      address: { ar: 'ص.ب 50، الخوض، الرمز البريدي 123، مسقط', en: 'P.O. Box 50, Al-Khoudh, P.C. 123, Muscat' },
    },
  },
  {
    id: 'utas',
    name: { ar: 'جامعة التقنية والعلوم التطبيقية', en: 'University of Technology and Applied Sciences (UTAS)' },
    shortName: 'UTAS',
    type: { ar: 'جامعة حكومية متعددة الفروع', en: 'Public Multi-Campus University' },
    location: { ar: 'مسقط، صحار، نزوى، صلالة، إبراء، عبري، شناص، صور، المصنعة، مسندم', en: 'Muscat, Sohar, Nizwa, Salalah, Ibra, Ibri, Shinas, Sur, Al-Mussanah, Musandam' },
    website: 'https://www.utas.edu.om',
    description: {
      ar: 'أكبر مؤسسة تعليمية وتطبيقية في سلطنة عُمان، تنتشر فروعها في مختلف المحافظات لتقديم برامج البكالوريوس والدبلوم المتقدم في الهندسة، تقنية المعلومات، العلوم التطبيقية، وإدارة الأعمال، والتربية.',
      en: 'The largest applied and technical university in Oman, with regional branches across all governorates offering programs in Engineering, IT, Business, Applied Sciences, and Education.',
    },
    availableCategories: ['engineering', 'it', 'business', 'science', 'creative', 'humanities'],
    featuredPrograms: {
      ar: ['هندسة البرمجيات والأمن السيبراني', 'الهندسة الكهربائية والميكانيكية والمدنية', 'اللوجستيات وسلاسل الإمداد', 'التصميم الجرافيكي والوسائط الرقمية', 'التقنية الحيوية والكيمياء'],
      en: ['Software Engineering & Cybersecurity', 'Electrical, Mechanical & Civil Engineering', 'Logistics & Supply Chain', 'Graphic Design & Digital Media', 'Biotechnology & Applied Chemistry'],
    },
    admissionOverview: {
      ar: 'القبول متاح للمواطنين العمانيين عبر مركز القبول الموحد وفق اشتراطات المعدل في المواد التخصصية، وتوفر برامج الدبلوم والبكالوريوس.',
      en: 'Direct government-funded admission for Omani citizens via HEAC with pathways spanning Diploma to Bachelor degrees.',
    },
    contact: {
      phone: '+968 2447 3600',
      email: 'info@utas.edu.om',
      address: { ar: 'مكتب رئيس الجامعة، الخوير، مسقط', en: 'President Office, Al Khuwair, Muscat' },
    },
  },
  {
    id: 'gutech',
    name: { ar: 'الجامعة الألمانية للتكنولوجيا في عُمان', en: 'German University of Technology in Oman (GUtech)' },
    shortName: 'GUtech',
    type: { ar: 'جامعة خاصة بارتباط أكاديمي ألماني', en: 'Private University affiliated with RWTH Aachen' },
    location: { ar: 'حلبان، محافظة مسقط / جنوب الباطنة', en: 'Halban, Muscat / South Al Batinah' },
    website: 'https://www.gutech.edu.om',
    description: {
      ar: 'تأسست عام 2007 بالتعاون الأكاديمي مع جامعة RWTH Aachen الألمانية المرموقة، وتتميز بتعليم هندسي وتقني بمعايير ألمانية متقدمة وحرم جامعي بيئي مستدام حاصل على جوائز عالمية.',
      en: 'Founded in 2007 in academic partnership with RWTH Aachen University in Germany. Recognized for rigorous engineering and applied science standards and an award-winning eco-campus.',
    },
    availableCategories: ['engineering', 'it', 'creative', 'business', 'science'],
    featuredPrograms: {
      ar: ['الهندسة المعمارية والتصميم الحضري', 'الهندسة الميكانيكية والهندسة البيئية', 'علوم الحاسب والذكاء الاصطناعي', 'اللوجستيات الدولية', 'علوم الأرض التطبيقية'],
      en: ['Architecture & Urban Planning (BSc)', 'Mechanical & Environmental Engineering', 'Computer Science & AI', 'International Logistics', 'Applied Geosciences'],
    },
    admissionOverview: {
      ar: 'يقبل الطلبة عبر بعثات وزارة التعليم العالي والبحث العلمي والابتكار، وكذلك الدارسين على نفقاتهم الخاصة مع متطلب اجتياز اختبار كفاءة اللغة الإنجليزية (IELTS / Foundation).',
      en: 'Admissions open via MoHERI government scholarships and private self-funded tracks. English proficiency assessment required.',
    },
    contact: {
      phone: '+968 2206 1111',
      email: 'admission@gutech.edu.om',
      address: { ar: 'حلبان، طريق مسقط السريع، ص.ب 1816 العذيبة', en: 'Halban, Muscat Expressway, P.O. Box 1816, Azaiba' },
    },
  },
  {
    id: 'nu',
    name: { ar: 'الجامعة الوطنية للعلوم والتكنولوجيا', en: 'National University of Science and Technology' },
    shortName: 'National Uni',
    type: { ar: 'جامعة خاصة رائدة في الطب والهندسة', en: 'Private University (Medicine, Pharmacy & Eng)' },
    location: { ar: 'بوشر وصحار ومسقط', en: 'Bousher, Sohar & Muscat' },
    website: 'https://www.nu.edu.om',
    description: {
      ar: 'تأسست باندماج ثلاث كليات عريقة: كالدونيان الهندسية، وعُمان الطبية، وكلية الصيدلة. ترتبط أكاديميًا بجامعة ساوث كارولينا الأمريكية وجامعة غلاسكو كالدونيان البريطانية.',
      en: 'Formed by merging three historic colleges: Caledonian Engineering, Oman Medical College, and Pharmacy. Academic partnerships with West Virginia University (USA) and Glasgow Caledonian (UK).',
    },
    availableCategories: ['health', 'engineering', 'it'],
    featuredPrograms: {
      ar: ['دكتور في الطب البشري (MD)', 'بكالوريوس الصيدلة (BPharm)', 'الهندسة الطبية الحيوية وهندسة الحاسوب', 'الهندسة المدنية والميكانيكية والنفط والغاز'],
      en: ['Doctor of Medicine (MD)', 'Bachelor of Pharmacy (BPharm)', 'Biomedical & Computer Engineering', 'Civil, Mechanical & Petroleum Engineering'],
    },
    admissionOverview: {
      ar: 'تستقبل طلبة البعثات الحكومية الداخلية والدارسين على نفقتهم، وتفرض شروطًا أكاديمية دقيقة لبرامج الطب والصيدلة تشمل اختبارات المقابلة واللغة الإنجليزية.',
      en: 'Enrolls MoHERI scholarship students and self-sponsored applicants with strict prerequisite GPA for MD and Pharmacy.',
    },
    contact: {
      phone: '+968 2422 6111',
      email: 'info@nu.edu.om',
      address: { ar: 'مرتفعات المطار، بوشر، مسقط', en: 'Airport Heights, Bousher, Muscat' },
    },
  },
  {
    id: 'nizwa',
    name: { ar: 'جامعة نزوى', en: 'University of Nizwa' },
    shortName: 'UoN',
    type: { ar: 'جامعة أهلية غير ربحية', en: 'Private Non-Profit University' },
    location: { ar: 'بركة الموز، محافظة الداخلية', en: 'Birkat Al-Mouz, Ad Dakhiliyah' },
    website: 'https://www.unizwa.edu.om',
    description: {
      ar: 'جامعة أهلية رائدة تأسست عام 2004 في محافظة الداخلية، وتضم حرمًا جامعيًا حديثًا ومركزًا متقدمًا لأبحاث النباتات الطبيعية والطبية والعلوم الحيوية (DARIS).',
      en: 'A premier non-profit university founded in 2004 in Ad Dakhiliyah. Known for its extensive colleges and the renowned DARIS Natural & Medical Products Research Centre.',
    },
    availableCategories: ['health', 'engineering', 'it', 'business', 'science', 'humanities', 'creative'],
    featuredPrograms: {
      ar: ['التمريض والصيدلة وعلوم المختبرات', 'القانون والعلوم القانونية', 'التربية وتأهيل المعلمين', 'علوم الحاسب وهندسة البرمجيات', 'الكيمياء والبيولوجيا الجزيئية'],
      en: ['Nursing, Pharmacy & Laboratory Sciences', 'Law', 'Education & Teacher Training', 'Computer Science & Software Systems', 'Chemistry & Molecular Biology'],
    },
    admissionOverview: {
      ar: 'تقبل الطلبة عبر مركز القبول الموحد والدارسين المستقلين، وتقدم حوافز دراسية ومنحًا للطلبة المتفوقين والضمان الاجتماعي.',
      en: 'Admissions available via HEAC and direct application, offering merit scholarships and social welfare financial aid.',
    },
    contact: {
      phone: '+968 2544 6200',
      email: 'inquiry@unizwa.edu.om',
      address: { ar: 'ص.ب 33، بركة الموز، الرمز البريدي 616، نزوى', en: 'P.O. Box 33, Birkat Al-Mouz, P.C. 616, Nizwa' },
    },
  },
  {
    id: 'sohar',
    name: { ar: 'جامعة صحار', en: 'Sohar University' },
    shortName: 'SU',
    type: { ar: 'أول جامعة خاصة في عُمان', en: 'First Private University in Oman' },
    location: { ar: 'صحار، محافظة شمال الباطنة', en: 'Sohar, North Al Batinah' },
    website: 'https://www.soharuni.edu.om',
    description: {
      ar: 'تأسست عام 2001 كأول جامعة خاصة في السلطنة بالارتباط مع جامعة كوينزلاند الأسترالية، وتتميز بقربها من ميناء صحار والمنطقة الحرة والتركيز على الهندسة والصناعة المتقدمة (مركز إنتاج صحار).',
      en: 'Established in 2001 as the first private university in Oman in association with University of Queensland, Australia. Renowned for its proximity to Sohar Industrial Port and the Intaj Suhar manufacturing hub.',
    },
    availableCategories: ['engineering', 'it', 'business', 'humanities', 'creative', 'science'],
    featuredPrograms: {
      ar: ['الهندسة الميكانيكية والكيميائية والمدنية', 'القانون والتربية', 'علوم الحاسب والشبكات والأمن السيبراني', 'إدارة الأعمال والمحاسبة', 'التصميم الجرافيكي'],
      en: ['Mechanical, Chemical & Civil Engineering', 'Law & Teacher Education', 'Computer Science & Cybersecurity', 'Business Administration & Accounting', 'Graphic Design'],
    },
    admissionOverview: {
      ar: 'قبول عبر البعثات الداخلية بمركز القبول الموحد أو التسجيل المباشر بمعدلات دبلوم التعليم العام.',
      en: 'Admits via HEAC internal scholarships and direct enrollment based on secondary diploma credentials.',
    },
    contact: {
      phone: '+968 2672 0101',
      email: 'info@su.edu.om',
      address: { ar: 'ص.ب 44، الرمز البريدي 311، صحار', en: 'P.O. Box 44, P.C. 311, Sohar' },
    },
  },
  {
    id: 'dhofar',
    name: { ar: 'جامعة ظفار', en: 'Dhofar University' },
    shortName: 'DU',
    type: { ar: 'جامعة خاصة معتمدة دوليًا', en: 'Private Accredited University' },
    location: { ar: 'صلالة، محافظة ظفار', en: 'Salalah, Dhofar Governorate' },
    website: 'https://www.du.edu.om',
    description: {
      ar: 'صرح أكاديمي رائد في جنوب السلطنة بمدينة صلالة، تأسست عام 2004 بالارتباط الأكاديمي مع الجامعة الأمريكية في بيروت (AUB)، وتقدم برامج معتمدة في الهندسة وإدارة الأعمال والآداب والعلوم.',
      en: 'Leading private university in Southern Oman established in 2004 in academic collaboration with the American University of Beirut (AUB), offering accredited programs in Salalah.',
    },
    availableCategories: ['engineering', 'it', 'business', 'humanities', 'creative'],
    featuredPrograms: {
      ar: ['الهندسة الكهربائية وهندسة الحاسب', 'الهندسة الكيميائية والميكانيكية', 'القانون واللغة الإنجليزية والترجمة', 'المالية والمحاسبة وإدارة الأعمال', 'التصميم الداخلي والديكور'],
      en: ['Electrical & Computer Engineering', 'Chemical & Mechanical Engineering', 'Law, English & Translation', 'Finance, Accounting & Management', 'Interior Architecture & Design'],
    },
    admissionOverview: {
      ar: 'متاحة لطلبة مركز القبول الموحد والدارسين من داخل وخارج السلطنة مع برامج سنة تأسيسية باللغة الإنجليزية.',
      en: 'Enrolls students through HEAC national quotas and international self-sponsored students with foundation English.',
    },
    contact: {
      phone: '+968 2323 7000',
      email: 'info@du.edu.om',
      address: { ar: 'صلالة، محافظة ظفار، ص.ب 250، الرمز 211', en: 'Salalah, Dhofar, P.O. Box 250, P.C. 211' },
    },
  },
  {
    id: 'mcbs',
    name: { ar: 'الكلية الحديثة للتجارة والعلوم', en: 'Modern College of Business and Science (MCBS)' },
    shortName: 'MCBS',
    type: { ar: 'كلية جامعية خاصة ذات برامج أمريكية ودولية', en: 'Private Higher Ed Institution (US Affiliated)' },
    location: { ar: 'بوشر، محافظة مسقط', en: 'Bousher, Muscat Governorate' },
    website: 'https://www.mcbs.edu.om',
    description: {
      ar: 'تأسست عام 1996 وتشتهر بالشراكة مع جامعة ميزوري - سانت لويس الأمريكية، وتعد من المؤسسات السباقة في تقديم تخصصات الأمن السيبراني، الذكاء الاصطناعي، إدارة الطيران، والتصميم الرقمي.',
      en: 'Established in 1996 in partnership with the University of Missouri-St. Louis. Pioneer in innovative degrees like Cybersecurity, AI, Airport & Aviation Management, and Digital Media.',
    },
    availableCategories: ['it', 'business', 'creative', 'humanities'],
    featuredPrograms: {
      ar: ['الأمن السيبراني والذكاء الاصطناعي', 'إدارة الطيران والمطارات', 'الرسوم المتحركة والمؤثرات البصرية', 'إدارة سلاسل الإمداد واللوجستيات', 'المالية والمصرفية الإسلامية'],
      en: ['Cybersecurity & Artificial Intelligence', 'Aviation & Airport Management', 'Animation & Visual Effects', 'Supply Chain & Logistics', 'Finance & Islamic Banking'],
    },
    admissionOverview: {
      ar: 'تقبل طلبة البعثات الداخلية والدارسين المستقلين، وتشترط درجات جيدة في اللغة الإنجليزية والرياضيات.',
      en: 'Enrolls HEAC sponsored applicants and direct self-paying candidates with emphasis on English communication.',
    },
    contact: {
      phone: '+968 2458 3583',
      email: 'admissions@mcbs.edu.om',
      address: { ar: 'شارع الكليات، بوشر، مسقط', en: 'College Street, Bousher, Muscat' },
    },
  },
  {
    id: 'majan',
    name: { ar: 'كلية مجان الجامعية', en: 'Majan University College' },
    shortName: 'Majan',
    type: { ar: 'كلية جامعية معتمدة بارتباط بريطاني', en: 'University College (University of Bedfordshire UK)' },
    location: { ar: 'دارسيت، محافظة مسقط', en: 'Darsait, Muscat Governorate' },
    website: 'https://www.majancollege.edu.om',
    description: {
      ar: 'أول كلية جامعية خاصة في سلطنة عُمان تأسست عام 1995، حاصلة على الاعتماد المؤسسي الكامل من الهيئة العمانية للاعتماد الأكاديمي، وترتبط أكاديميًا بجامعة بيدفوردشير البريطانية.',
      en: 'First private higher education college in Oman, founded in 1995. Fully accredited by OAAAQA with academic degrees awarded by the University of Bedfordshire (UK).',
    },
    availableCategories: ['it', 'business', 'humanities'],
    featuredPrograms: {
      ar: ['هندسة البرمجيات وأمن شبكات الحاسب', 'الذكاء الاصطناعي وعلم البيانات', 'المحاسبة والمالية (معتمدة من ACCA)', 'إدارة الموارد البشرية والتسويق الرقمي', 'اللغة الإنجليزية وآدابها'],
      en: ['Software Engineering & Computer Networks', 'Artificial Intelligence & Data Science', 'Accounting & Finance (ACCA accredited)', 'HR Management & Digital Marketing', 'English Language Studies'],
    },
    admissionOverview: {
      ar: 'القبول متاح لطلبة البعثات الحكومية عبر HEAC والتسجيل المباشر بنظامي الدوام الكامل والجزئي للموظفين.',
      en: 'Open through HEAC government scholarships and flexible direct full-time / part-time tracks.',
    },
    contact: {
      phone: '+968 2473 0400',
      email: 'student.recruitment@majancollege.edu.om',
      address: { ar: 'دارسيت، مسقط، ص.ب 710، الرمز البريدي 114', en: 'Darsait, Muscat, P.O. Box 710, P.C. 114' },
    },
  },
  {
    id: 'muscat-uni',
    name: { ar: 'جامعة مسقط', en: 'Muscat University' },
    shortName: 'MU',
    type: { ar: 'جامعة حديثة بارتباطات بريطانية عالية', en: 'Modern University (Aston & Cranfield UK)' },
    location: { ar: 'الغبرة الشمالية، محافظة مسقط', en: 'North Al Ghubrah, Muscat Governorate' },
    website: 'https://www.muscatuniversity.edu.om',
    description: {
      ar: 'تأسست عام 2016 بشراكات استراتيجية مع جامعة أستون وجامعة كرانفيلد بالمملكة المتحدة، وتركز بشكل نوعي على اللوجستيات، الهندسة الكيميائية، وتقنية المعلومات، مع سنة تدريب مهني إلزامية (Year in Industry).',
      en: 'Established in 2016 in partnership with Aston University and Cranfield University (UK). High industry relevance with mandatory professional placement years.',
    },
    availableCategories: ['engineering', 'it', 'business'],
    featuredPrograms: {
      ar: ['اللوجستيات وإدارة سلاسل الإمداد العالمية', 'الهندسة الكيميائية وتكنولوجيا الطاقة', 'علوم الحاسب والذكاء الاصطناعي', 'المحاسبة والتمويل الدولي'],
      en: ['Logistics & Supply Chain Management', 'Chemical Engineering', 'Computer Science & AI', 'Accounting & International Finance'],
    },
    admissionOverview: {
      ar: 'تشترط كفاءة عالية في اللغة الإنجليزية ودرجات جيدة في الرياضيات والمواد العلمية مع تدريب صناعي مكثف.',
      en: 'Requires solid English proficiency, strong STEM grades, and interview for industry placement readiness.',
    },
    contact: {
      phone: '+968 2464 5444',
      email: 'info@muscatuniversity.edu.om',
      address: { ar: 'شارع السلطان قابوس، الغبرة، مسقط', en: 'Sultan Qaboos Street, Al Ghubrah, Muscat' },
    },
  },
];
