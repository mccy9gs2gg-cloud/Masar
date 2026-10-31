import { UniversityMajor } from '../types';

export const majorsData: UniversityMajor[] = [
  // --- HEALTH AND MEDICINE ---
  {
    id: 'medicine',
    name: { ar: 'الطب البشري والجراحة', en: 'Doctor of Medicine (MD)' },
    category: 'health',
    shortDescription: {
      ar: 'تشخيص الأمراض وعلاج المرضى والوقاية من المشاكل الصحية وتطوير الرعاية الطبية السريرية.',
      en: 'Diagnosing diseases, treating patients, preventive healthcare, and advancing clinical patient care.',
    },
    whatStudentsStudy: {
      ar: ['علم التشريح والأنسجة', 'علم وظائف الأعضاء (الفسيولوجيا)', 'علم الأدوية والسموم', 'علم الأمراض السريري', 'الباطنية والجراحة وطب الأطفال', 'أخلاقيات الممارسة الطبية والبحث العلمي'],
      en: ['Human Anatomy & Histology', 'Medical Physiology', 'Pharmacology & Toxicology', 'Clinical Pathology', 'Internal Medicine & Surgery', 'Medical Ethics & Clinical Research'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الكيمياء', 'اللغة الإنجليزية المتقدمة', 'الفيزياء الأساسية'],
      en: ['Biology', 'Chemistry', 'Advanced English', 'Physics'],
    },
    skillsNeeded: {
      ar: ['القدرة على التفكير النقدي وسرعة اتخاذ القرار', 'التواصل الإنساني والتعاطف', 'إدارة الضغوط وساعات العمل الطويلة', 'الدقة والملاحظة السريرية الفائقة'],
      en: ['Critical thinking & diagnostic decision-making', 'Compassionate communication & bedside manner', 'High stress resilience & long-hour focus', 'Meticulous clinical attention to detail'],
    },
    careerPathways: {
      ar: ['طبيب عام / مقيم في المستشفيات الحكومية والخاصة', 'طبيب اختصاصي واستشاري بعد برامج الاختصاص (OMSB)', 'باحث طبي وأكاديمي في كليات الطب', 'مستشار في وزارة الصحة والمراكز الصحية'],
      en: ['General Physician / Resident Doctor in Omani hospitals', 'Medical Specialist via Oman Medical Specialty Board (OMSB)', 'Clinical Academic & Medical Researcher', 'Public Health Consultant in MoH'],
    },
    studyDuration: { ar: '٦ - ٧ سنوات (متضمنة سنة التدريب والامتياز)', en: '6–7 Years (including Foundation & Internship)' },
    universitiesInOman: ['squ', 'nu'],
    admissionRequirements: {
      ar: 'تنافس مرتفع للغاية عبر مركز القبول الموحد (HEAC). يشترط الحصول على معدلات امتياز في الأحياء والكيمياء واللغة الإنجليزية مع اجتياز المقابلة والفحص الطبي.',
      en: 'Extremely competitive via Unified Admission Centre (HEAC). Requires top honors in Biology, Chemistry, and English with successful interview and medical clearance.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'dentistry',
    name: { ar: 'طب وجراحة الأسنان', en: 'Dentistry (BDS)' },
    category: 'health',
    shortDescription: {
      ar: 'العناية بصحة الفم والأسنان وتشخيص وعلاج أمراض الفكين وإجراء العمليات التعويضية والتجميلية.',
      en: 'Oral healthcare, diagnosing and treating maxillofacial and dental diseases, and performing restorative procedures.',
    },
    whatStudentsStudy: {
      ar: ['تشريح الفم والرأس والرقبة', 'استعاضة الأسنان وطب الأسنان التحفظي', 'جراحة الفم والوجه والفكين', 'تقويم الأسنان وطب أسنان الأطفال', 'أمراض اللثة والأنسجة المحيطة'],
      en: ['Oral & Craniofacial Anatomy', 'Prosthodontics & Restorative Dentistry', 'Oral & Maxillofacial Surgery', 'Orthodontics & Pediatric Dentistry', 'Periodontology'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الكيمياء', 'اللغة الإنجليزية', 'المهارات اليدوية الدقيقة'],
      en: ['Biology', 'Chemistry', 'English', 'Fine motor skills'],
    },
    skillsNeeded: {
      ar: ['مهارة ودقة يدوية عالية جدًا', 'الصبر والتعامل الودود مع قلق المرضى', 'الحس الجمالي والتناسق المكاني', 'التركيز الممتد على التفاصيل المجهرية'],
      en: ['High manual dexterity & tactile coordination', 'Patience & calming patient anxiety', 'Aesthetic spatial sense', 'Prolonged micro-detail focus'],
    },
    careerPathways: {
      ar: ['طبيب أسنان في عيادات ومستشفيات وزارة الصحة', 'أخصائي في العيادات ومراكز طب الأسنان الخاصة', 'أخصائي تقويم أسنان أو جراحة فك بعد الاختصاص', 'إدارة وتأسيس عيادات الأسنان التخصصية'],
      en: ['General Dentist in Ministry of Health facilities', 'Specialist in private dental clinics across Oman', 'Orthodontist / Oral Surgeon post OMSB residency', 'Dental clinic director & entrepreneur'],
    },
    studyDuration: { ar: '٥ - ٦ سنوات (متضمنة سنة الامتياز)', en: '5–6 Years (including Clinical Internship)' },
    universitiesInOman: ['squ', 'nu'],
    admissionRequirements: {
      ar: 'معدل عام مرتفع جدًا مع درجات متفوقة في الكيمياء والأحياء عبر مركز القبول الموحد.',
      en: 'Very high competitive GPA with top scores in Chemistry & Biology via HEAC.',
    },
    natureOfStudy: { practicalPercent: 70, theoreticalPercent: 30 },
    verifiedStatus: 'verified',
  },
  {
    id: 'pharmacy',
    name: { ar: 'الصيدلة السريرية والصناعية', en: 'Pharmacy (BPharm / PharmD)' },
    category: 'health',
    shortDescription: {
      ar: 'دراسة تركيب الأدوية، آليات تفاعلها الكيميائي والحيوي في الجسم، وصرف العلاجات والتثقيف الدوائي.',
      en: 'Study of drug formulation, pharmacokinetics, pharmaceutical chemistry, clinical dispensing, and patient counseling.',
    },
    whatStudentsStudy: {
      ar: ['الكيمياء الدوائية والعضوية', 'علم العقاقير والسموم', 'علم الصيدلانيات وحركية الدواء', 'الصيدلة السريرية ورعاية المرضى', 'التشريعات الدوائية ومراقبة الجودة'],
      en: ['Medicinal & Organic Chemistry', 'Pharmacology & Toxicology', 'Pharmaceutics & Pharmacokinetics', 'Clinical Pharmacy & Therapeutics', 'Pharmaceutical Quality & Laws'],
    },
    importantSubjects: {
      ar: ['الكيمياء', 'الأحياء', 'الرياضيات الإحصائية', 'اللغة الإنجليزية'],
      en: ['Chemistry', 'Biology', 'Mathematics/Statistics', 'English'],
    },
    skillsNeeded: {
      ar: ['الدقة الصارمة في الحسابات الدوائية والجرعات', 'الفهم المتعمق للتفاعلات الكيميائية', 'اللباقة في التوجيه والإرشاد الطبي', 'التدقيق المستمر ومنع الأخطاء الطبية'],
      en: ['Meticulous accuracy with calculations & dosages', 'Deep chemical reaction understanding', 'Clear interpersonal counseling', 'Error-prevention rigor'],
    },
    careerPathways: {
      ar: ['صيدلي سريري في المستشفيات والمراكز التخصصية', 'مسؤول رقابة جودة وتسجيل أدوية في الهيئات الدوائية', 'أخصائي أبحاث وتطوير في مصانع الأدوية في عُمان', 'إدارة الصيدليات المجتمعية والتسويق الدوائي'],
      en: ['Clinical Pharmacist in tertiary hospitals', 'Drug Regulatory Officer in Ministry of Health', 'R&D / QA Specialist in Omani pharmaceutical plants', 'Community Pharmacy Director & Medical Representative'],
    },
    studyDuration: { ar: '٥ سنوات', en: '5 Years' },
    universitiesInOman: ['squ', 'nu', 'nizwa'],
    admissionRequirements: {
      ar: 'اشتراط درجات متقدمة في الكيمياء والأحياء واللغة الإنجليزية في شهادة دبلوم التعليم العام.',
      en: 'Requires strong grades in Chemistry, Biology, and English in General Education Diploma.',
    },
    natureOfStudy: { practicalPercent: 55, theoreticalPercent: 45 },
    verifiedStatus: 'verified',
  },
  {
    id: 'nursing',
    name: { ar: 'التمريض العام والتخصصي', en: 'Nursing (BSc Nursing)' },
    category: 'health',
    shortDescription: {
      ar: 'تقديم الرعاية الصحية المباشرة للمرضى، وإدارة الخطط العلاجية، والمساندة في العناية المركزة والعمليات.',
      en: 'Direct patient healthcare delivery, clinical monitoring, holistic bedside care, and acute/critical care management.',
    },
    whatStudentsStudy: {
      ar: ['أساسيات التمريض السريري', 'تمريض الباطنية والجراحة', 'تمريض العناية المركزة والطوارئ', 'تمريض الأمومة والطفولة', 'الصحة النفسية وإدارة التمريض'],
      en: ['Fundamentals of Nursing', 'Adult Medical-Surgical Nursing', 'Critical & Emergency Care Nursing', 'Maternal & Child Health Nursing', 'Mental Health & Leadership'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'اللغة الإنجليزية', 'الكيمياء', 'مهارات التواصل'],
      en: ['Biology', 'English', 'Chemistry', 'Communication'],
    },
    skillsNeeded: {
      ar: ['الرحمة وسرعة البديهة في الطوارئ', 'اللياقة والقدرة على العمل الحركي النشط', 'مهارات الرعاية التمريضية والإبر الوريدية', 'التوثيق الطبي الدقيق'],
      en: ['Compassion & rapid emergency instincts', 'Physical stamina & active care endurance', 'Clinical cannulation & procedure skill', 'Accurate medical documentation'],
    },
    careerPathways: {
      ar: ['ممرض قانوني في مستشفيات وزارة الصحة والمدينة الطبية', 'ممرض عناية مركزة وطوارئ', 'مشرف ومسؤول أجنحة تمريضية', 'أخصائي تمريض مجتمعي وصحة مدرسية'],
      en: ['Registered Staff Nurse in MOH and University Medical City', 'ICU / ER Clinical Nurse Specialist', 'Nurse Manager / Clinical Ward Supervisor', 'School Health & Community Nurse'],
    },
    studyDuration: { ar: '٤ سنوات (بالإضافة إلى سنة الامتياز / التدريب السريري)', en: '4 Years (+ Clinical Training)' },
    universitiesInOman: ['squ', 'nizwa', 'nu'],
    admissionRequirements: {
      ar: 'قبول عبر مركز القبول الموحد، تفوق في مادة الأحياء واللغة الإنجليزية، واجتياز الفحص الطبي والمقابلة الشخصية.',
      en: 'Admission via HEAC with good standing in Biology, English, and passing personal interview/medical check.',
    },
    natureOfStudy: { practicalPercent: 75, theoreticalPercent: 25 },
    verifiedStatus: 'verified',
  },
  {
    id: 'physiotherapy',
    name: { ar: 'العلاج الطبيعي والتأهيل الحركي', en: 'Physiotherapy & Rehabilitation' },
    category: 'health',
    shortDescription: {
      ar: 'إعادة تأهيل المصابين بالحوادث والجلطات والرياضيين عبر التمارين الحركية والعلاج اليدوي والتقنيات الفيزيائية.',
      en: 'Rehabilitating patients with mobility impairments, neuromuscular disorders, sports injuries, and post-surgery recovery.',
    },
    whatStudentsStudy: {
      ar: ['علم التشريح العضلي والعصبي', 'علم الحركة الحيوية والميكانيكا الحيوية', 'العلاج بالتمارين والتقنيات اليدوية', 'تأهيل إصابات العظام والرياضة', 'إعادة التأهيل العصبي وأمراض القلب'],
      en: ['Musculoskeletal & Neuroanatomy', 'Biomechanics & Kinesiology', 'Exercise Therapy & Manual Therapy', 'Orthopedic & Sports Rehabilitation', 'Neurological Rehabilitation'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الفيزياء', 'اللغة الإنجليزية'],
      en: ['Biology', 'Physics', 'English'],
    },
    skillsNeeded: {
      ar: ['اللياقة البدنية والقدرة على مساعدة المرضى حركيًا', 'مهارات التشخيص الحركي الفحصي', 'التشجيع والتحفيز الإيجابي المستمر للمرضى'],
      en: ['Physical stamina for patient mobilization', 'Movement evaluation & manual test acumen', 'Inspirational coaching & patient motivation'],
    },
    careerPathways: {
      ar: ['أخصائي علاج طبيعي في المستشفيات ومراكز التأهيل', 'أخصائي تأهيل إصابات الملاعب والأندية الرياضية العمانية', 'تأهيل الأطفال ذوي الإعاقة الحركية', 'إدارة مراكز العلاج الطبيعي والتأهيل'],
      en: ['Physiotherapist in general hospitals and rehabilitation centers', 'Sports Physical Therapist for clubs and national teams', 'Pediatric rehabilitation specialist', 'Private clinic rehabilitation director'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'nizwa'],
    admissionRequirements: {
      ar: 'الحصول على درجات جيدة جدًا في الأحياء والفيزياء واللغة الإنجليزية عبر نظام HEAC.',
      en: 'Requires competitive marks in Biology, Physics, and English through HEAC.',
    },
    natureOfStudy: { practicalPercent: 70, theoreticalPercent: 30 },
    verifiedStatus: 'verified',
  },
  {
    id: 'med-lab',
    name: { ar: 'علوم المختبرات الطبية', en: 'Medical Laboratory Sciences' },
    category: 'health',
    shortDescription: {
      ar: 'إجراء الفحوصات المخبرية وتحليل عينات الدم والأنسجة والكائنات الدقيقة للمساعدة في التشخيص الطبي الدقيق.',
      en: 'Performing clinical biochemical tests, blood analyses, microbiological cultures, and diagnostic assays.',
    },
    whatStudentsStudy: {
      ar: ['أمراض الدم ونقل الدم', 'الكيمياء الحيوية السريرية', 'علم الأحياء الدقيقة الطبية والطفيليات', 'علم المناعة ومصليات الفيروسات', 'التشخيص الجزيئي والجينات'],
      en: ['Hematology & Blood Banking', 'Clinical Biochemistry', 'Medical Microbiology & Parasitology', 'Immunology & Serology', 'Molecular Diagnostics & Genetics'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الكيمياء', 'اللغة الإنجليزية'],
      en: ['Biology', 'Chemistry', 'English'],
    },
    skillsNeeded: {
      ar: ['الدقة المتناهية والتركيز المخبري', 'التعامل الآمن مع المواد البيولوجية الحيوية', 'إتقان تشغيل الأجهزة التحليلية الحديثة'],
      en: ['Extreme laboratory precision & focus', 'Biohazard safety & aseptic protocol discipline', 'Analytical instrument operation mastery'],
    },
    careerPathways: {
      ar: ['أخصائي مختبر طبي في بنوك الدم والمستشفيات', 'فني تشخيص جزيئي وجيني في المراكز المرجعية', 'مفتش جودة مخبرية في مختبرات الصحة العامة'],
      en: ['Medical Technologist in hospital laboratories & blood banks', 'Molecular & Genetic diagnostics specialist', 'Public health laboratory quality specialist'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'nu', 'sohar'],
    admissionRequirements: {
      ar: 'درجات جيدة جدًا في الأحياء والكيمياء عبر مركز القبول الموحد.',
      en: 'Very good grades in Biology and Chemistry via HEAC.',
    },
    natureOfStudy: { practicalPercent: 75, theoreticalPercent: 25 },
    verifiedStatus: 'verified',
  },
  {
    id: 'radiography',
    name: { ar: 'الأشعة الطبية والتصوير التشخيصي', en: 'Medical Radiography & Diagnostic Imaging' },
    category: 'health',
    shortDescription: {
      ar: 'استخدام تقنيات التصوير الطبي (الأشعة السينية، الرنين المغناطيسي، المقطعية، الموجات الصوتية) لكشف الأمراض.',
      en: 'Operating medical imaging modalities (X-Ray, MRI, CT, Ultrasound) to produce diagnostic images.',
    },
    whatStudentsStudy: {
      ar: ['فيزياء الإشعاع والوقاية الإشعاعية', 'تشريح التصوير الشعاعي', 'تقنيات الرنين المغناطيسي (MRI)', 'التصوير المقطعي المحوسب (CT)', 'الموجات فوق الصوتية'],
      en: ['Radiation Physics & Safety Protection', 'Radiographic Anatomy', 'Magnetic Resonance Imaging (MRI)', 'Computed Tomography (CT)', 'Ultrasound Modalities'],
    },
    importantSubjects: {
      ar: ['الفيزياء', 'الأحياء', 'الرياضيات', 'اللغة الإنجليزية'],
      en: ['Physics', 'Biology', 'Mathematics', 'English'],
    },
    skillsNeeded: {
      ar: ['فهم عميق للفيزياء التطبيقية للأجهزة', 'القدرة على وضعية المريض بدقة عالية', 'الالتزام الصارم بمعايير الأمان الإشعاعي'],
      en: ['Deep comprehension of imaging physics', 'Patient positioning precision', 'Rigorous radiation safety adherence'],
    },
    careerPathways: {
      ar: ['أخصائي تصوير تشخيصي في أقسام الأشعة بالمستشفيات', 'أخصائي رنين مغناطيسي وأشعة مقطعية تخصصية', 'ممثل مبيعات وتدريب على الأجهزة الطبية الإشعاعية'],
      en: ['Diagnostic Radiographer in radiology departments', 'Specialist MRI & CT scanner technologist', 'Medical imaging applications specialist'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ'],
    admissionRequirements: {
      ar: 'درجات تنافسية في الفيزياء والأحياء واللغة الإنجليزية.',
      en: 'Competitive standing in Physics, Biology, and English.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'nutrition',
    name: { ar: 'التغذية العلاجية وعلم الأغذية', en: 'Clinical Nutrition & Dietetics' },
    category: 'health',
    shortDescription: {
      ar: 'تخطيط الأنظمة الغذائية العلاجية للمرضى، والوقاية من أمراض العصر كالسكري والسمنة، وإدارة سلامة الأغذية.',
      en: 'Designing therapeutic diets for clinical conditions, tackling diabetes and obesity, and promoting community wellness.',
    },
    whatStudentsStudy: {
      ar: ['الكيمياء الحيوية الغذائية', 'التغذية السريرية والعلاجية', 'تقييم الحالة التغذوية', 'علوم الأغذية وسلامتها', 'تغذية الرياضيين وتغذية المجتمع'],
      en: ['Nutritional Biochemistry', 'Clinical Nutrition & Dietetics', 'Nutritional Assessment', 'Food Safety & Microbiology', 'Sports & Community Nutrition'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الكيمياء', 'اللغة الإنجليزية'],
      en: ['Biology', 'Chemistry', 'English'],
    },
    skillsNeeded: {
      ar: ['مهارات الإرشاد وتغيير السلوكيات الغذائية', 'حساب السعرات والاحتياجات الغذائية بدقة', 'متابعة الخطط طويلة الأمد للمرضى'],
      en: ['Nutritional counseling & behavioral change', 'Precise caloric & macronutrient calculation', 'Long-term patient empathy'],
    },
    careerPathways: {
      ar: ['أخصائي تغذية علاجية في المستشفيات والعيادات', 'أخصائي تغذية رياضية في المجمعات والأندية', 'مراقب سلامة وجودة أغذية في بلدية مسقط وهيئة حماية المستهلك'],
      en: ['Clinical Dietitian in hospitals & clinics', 'Sports Nutritionist for athletics', 'Food Safety Inspector in municipal authorities'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'nizwa'],
    admissionRequirements: {
      ar: 'متطلب درجات جيدة في الكيمياء والأحياء عبر HEAC.',
      en: 'Good standing in Chemistry and Biology via HEAC.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },
  {
    id: 'public-health',
    name: { ar: 'الصحة العامة وصحة المجتمع', en: 'Public Health' },
    category: 'health',
    shortDescription: {
      ar: 'حماية المجتمعات من الأوبئة، ونشر الوعي الصحي، والتخطيط للسياسات الصحية على المستوى الوطني.',
      en: 'Protecting population health from epidemics, designing prevention policies, and health systems management.',
    },
    whatStudentsStudy: {
      ar: ['علم الوبائيات والإحصاء الحيوي', 'الصحة البيئية والمهنية', 'سياسات وإدارة النظم الصحية', 'التثقيف والترويج الصحي', 'إدارة الكوارث الصحية والأوبئة'],
      en: ['Epidemiology & Biostatistics', 'Environmental & Occupational Health', 'Health Policy & Systems', 'Health Promotion', 'Outbreak & Epidemic Response'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الرياضيات والإحصاء', 'اللغة الإنجليزية'],
      en: ['Biology', 'Math / Statistics', 'English'],
    },
    skillsNeeded: {
      ar: ['التحليل البياني والنمذجة الإحصائية', 'التواصل والتأثير المجتمعي الواسع', 'التخطيط الاستراتيجي وصياغة السياسات'],
      en: ['Data analysis & epidemiological tracking', 'Mass communication & public advocacy', 'Strategic policy formulation'],
    },
    careerPathways: {
      ar: ['أخصائي رصد وبائي بوزارة الصحة', 'محلل سياسات صحية في منظمة الصحة العالمية والهيئات الدولية', 'مشرف سلامة وصحة مهنية في الشركات والمؤسسات'],
      en: ['Epidemiological Surveillance Officer in MoH', 'Health Policy Analyst in WHO / regional agencies', 'HSE / Occupational Health Specialist'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'nu'],
    admissionRequirements: {
      ar: 'معدل جيد في المواد العلمية واللغة الإنجليزية عبر مركز القبول الموحد.',
      en: 'Good performance in sciences and English through HEAC.',
    },
    natureOfStudy: { practicalPercent: 50, theoreticalPercent: 50 },
    verifiedStatus: 'verified',
  },

  // --- ENGINEERING ---
  {
    id: 'civil-eng',
    name: { ar: 'الهندسة المدنية', en: 'Civil Engineering' },
    category: 'engineering',
    shortDescription: {
      ar: 'تخطيط وتصميم وتشييد البنية الأساسية كالمباني، الجسور، السدود، شبكات المياه، والطرق والموانئ.',
      en: 'Planning, designing, and constructing infrastructure including buildings, bridges, highways, ports, and water systems.',
    },
    whatStudentsStudy: {
      ar: ['ميكانيكا المواد والإنشاءات', 'هندسة التربة والأساسات (الجيوتقنية)', 'هندسة النقل والطرق والمرور', 'إدارة المشاريع الإنشائية وعقود الفيدك', 'الهندسة المائية والبيئية'],
      en: ['Structural Mechanics & Analysis', 'Geotechnical & Soil Mechanics', 'Transportation & Highway Engineering', 'Construction Management', 'Water Resources & Hydraulics'],
    },
    importantSubjects: {
      ar: ['الفيزياء', 'الرياضيات البحتة', 'الكيمياء', 'الرسم الهندسي'],
      en: ['Physics', 'Pure Mathematics', 'Chemistry', 'Engineering Graphics'],
    },
    skillsNeeded: {
      ar: ['التحليل الإنشائي وإتقان برامج التصميم (AutoCAD, ETABS)', 'إدارة المواقع الإنشائية وفرق العمل', 'حل المشكلات الميدانية المفاجئة تحت مختلف الظروف'],
      en: ['Structural calculation & CAD tool proficiency', 'Site supervision & contractor management', 'Field problem-solving under varied conditions'],
    },
    careerPathways: {
      ar: ['مهندس موقع ومدير مشاريع إنشائية', 'مهندس تصميم إنشائي في المكاتب الاستشارية الكبرى', 'مهندس بنية أساسية في وزارة الإسكان والتخطيط العمراني ووزارة النقل', 'مهندس جودة ومواد في شركات التطوير العقاري'],
      en: ['Site Construction Engineer / Project Manager', 'Structural Design Consultant', 'Infrastructure Engineer in Ministry of Housing & Transport', 'QA/QC Engineer in leading development firms'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech', 'nu', 'sohar', 'dhofar'],
    admissionRequirements: {
      ar: 'درجات جيدة جدًا في الرياضيات البحتة والفيزياء واللغة الإنجليزية في دبلوم التعليم العام.',
      en: 'Very good scores in Pure Math, Physics, and English in General Education Diploma.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },
  {
    id: 'mech-eng',
    name: { ar: 'الهندسة الميكانيكية', en: 'Mechanical Engineering' },
    category: 'engineering',
    shortDescription: {
      ar: 'تصميم وتصنيع وصيانة الأنظمة الميكانيكية، المحركات، التوربينات، وتكييف الهواء، والروبوتات والآلات الثقيلة.',
      en: 'Designing, analyzing, and maintaining mechanical systems, engines, HVAC, thermodynamics, and manufacturing tools.',
    },
    whatStudentsStudy: {
      ar: ['الديناميكا الحرارية وانتقال الحرارة', 'ميكانيكا الموائع والآلات الهيدروليكية', 'تصميم الماكينات والميكانيكا التطبيقية', 'عمليات التصنيع والمواد الهندسية', 'أنظمة التحكم والاهتزازات'],
      en: ['Thermodynamics & Heat Transfer', 'Fluid Mechanics & Turbomachinery', 'Machine Design & Mechanics of Materials', 'Manufacturing Processes & Metallurgy', 'Control Systems & Vibrations'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة', 'الفيزياء الميكانيكية', 'اللغة الإنجليزية'],
      en: ['Pure Mathematics', 'Classical Physics', 'English'],
    },
    skillsNeeded: {
      ar: ['التفكير التحليلي الميكانيكي والنمذجة ثلاثية الأبعاد (SolidWorks)', 'تشخيص الأعطال الميكانيكية والاهتزازية', 'تصميم أنظمة الطاقة والتبريد بكفاءة'],
      en: ['Mechanical reasoning & 3D CAD modeling (SolidWorks)', 'Vibration & diagnostic troubleshooting', 'Energy-efficient thermal system design'],
    },
    careerPathways: {
      ar: ['مهندس ميكانيكي ومعدات في شركات النفط والغاز (PDO, OQ)', 'مهندس صيانة وتشغيل محطات توليد الطاقة والمياه', 'مهندس تكييف وتهوية (HVAC) في المشاريع الكبرى', 'مهندس تصنيع وروبوتات في المصانع'],
      en: ['Mechanical Engineer at PDO, OQ, or industrial sectors', 'Operations & Maintenance Engineer in power/water plants', 'HVAC & MEP Systems Design Engineer', 'Industrial Automation & Robotics Specialist'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech', 'nu', 'sohar', 'dhofar'],
    admissionRequirements: {
      ar: 'تفوق في مادتي الرياضيات البحتة والفيزياء.',
      en: 'Excellence in Pure Mathematics and Physics.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'elec-eng',
    name: { ar: 'الهندسة الكهربائية وهندسة الطاقة', en: 'Electrical & Power Engineering' },
    category: 'engineering',
    shortDescription: {
      ar: 'توليد ونقل وتوزيع الطاقة الكهربائية، وتطوير الدوائر الإلكترونية، والتحكم الآلي، والطاقة المتجددة (الشمسية والرياح).',
      en: 'Generation, transmission, and distribution of electrical power, renewable solar/wind energy, control, and electronics.',
    },
    whatStudentsStudy: {
      ar: ['تحليل الدوائر الكهربائية والأنظمة الكهرومغناطيسية', 'نظم القوى الكهربائية وشبكات التوزيع', 'أنظمة الطاقة المتجددة (الشمسية وطاقة الرياح)', 'إلكترونيات القوى ومحولات الطاقة', 'أنظمة التحكم الصناعي (SCADA & PLC)'],
      en: ['Circuit Analysis & Electromagnetics', 'Power Systems & Smart Grids', 'Renewable Energy Systems (Solar & Wind)', 'Power Electronics & Drives', 'Industrial Control & SCADA'],
    },
    importantSubjects: {
      ar: ['الفيزياء الكهربائية', 'الرياضيات البحتة', 'اللغة الإنجليزية'],
      en: ['Electrical Physics', 'Pure Mathematics', 'English'],
    },
    skillsNeeded: {
      ar: ['تصميم ومحاكاة الدوائر الكهربائية', 'فهم شبكات التوزيع ذات الجهد العالي والمنخفض', 'معايير السلامة الكهربائية العالمية'],
      en: ['Circuit design & simulation (MATLAB/Simulink)', 'High/Medium voltage grid understanding', 'International electrical safety compliance'],
    },
    careerPathways: {
      ar: ['مهندس قوى وشبكات في شركة نماء لخدمات الكهرباء (Namaa)', 'مهندس مشاريع الطاقة الشمسية والمتجددة في سلطنة عُمان', 'مهندس تحكم وأجهزة دقيقة في المنشآت الصناعية', 'مهندس تصميم التمديدات الكهربائية في المباني الكبرى'],
      en: ['Power Systems Engineer at Namaa Group', 'Renewable Solar & Wind Project Engineer in Oman', 'Instrumentation & Control Engineer in refineries', 'Electrical MEP Building Designer'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'utas', 'nu', 'sohar', 'dhofar'],
    admissionRequirements: {
      ar: 'درجات مرتفعة في الرياضيات البحتة والفيزياء.',
      en: 'High marks in Pure Mathematics and Physics.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },
  {
    id: 'chem-eng',
    name: { ar: 'الهندسة الكيميائية وتكرير البتروكيماويات', en: 'Chemical Engineering' },
    category: 'engineering',
    shortDescription: {
      ar: 'تحويل المواد الخام كيميائيًا وفيزيائيًا إلى منتجات ذات قيمة صناعية مثل البلاستيك، الأسمدة، الوقود، وتصفية المياه.',
      en: 'Transforming raw chemical materials into valuable industrial products like polymers, fertilizers, fuels, and pure water.',
    },
    whatStudentsStudy: {
      ar: ['اتزان المادة والطاقة', 'حركية التفاعلات وتصميم المفاعلات الكيميائية', 'عمليات الفصل ونقل الكتلة', 'تصميم مصافي النفط ومصانع البتروكيماويات', 'السلامة الصناعية وإدارة المخاطر الكيميائية'],
      en: ['Material & Energy Balances', 'Chemical Reaction Kinetics & Reactor Design', 'Mass Transfer & Unit Operations', 'Refinery & Petrochemical Process Design', 'Industrial Safety & Environmental Auditing'],
    },
    importantSubjects: {
      ar: ['الكيمياء', 'الرياضيات البحتة', 'الفيزياء'],
      en: ['Chemistry', 'Pure Mathematics', 'Physics'],
    },
    skillsNeeded: {
      ar: ['محاكاة العمليات الكيميائية (Aspen HYSYS)', 'التحليل الرياضي الديناميكي لمعدلات التدفق والتفاعل', 'الالتزام الصارم ببروتوكولات السلامة'],
      en: ['Process simulation with Aspen HYSYS', 'Reaction thermodynamics & kinetics analytics', 'Rigorous hazard & operability (HAZOP) mastery'],
    },
    careerPathways: {
      ar: ['مهندس عمليات وتشغيل في مصافي النفط (OQ, Salalah Methanol)', 'مهندس في محطات تحلية المياه الضخمة', 'أخصائي تطوير منتجات وبوليمرات في المجمعات البتروكيماوية', 'مهندس استدامة بيئية وخفض الانبعاثات الصناعية'],
      en: ['Process Engineer at OQ, Sohar Refinery, or LNG', 'Desalination Process Plant Specialist', 'Polymer & Petrochemical Product Specialist', 'Environmental Emissions Reduction Engineer'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'utas', 'nu', 'sohar', 'dhofar'],
    admissionRequirements: {
      ar: 'درجات متميزة في الكيمياء والرياضيات البحتة والفيزياء.',
      en: 'Outstanding grades in Chemistry, Pure Math, and Physics.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },
  {
    id: 'petro-eng',
    name: { ar: 'هندسة النفط والغاز والمكامن', en: 'Petroleum & Natural Gas Engineering' },
    category: 'engineering',
    shortDescription: {
      ar: 'استكشاف وحفر وإنتاج النفط والغاز الطبيعي من باطن الأرض وإدارة المكامن الهيدروكربونية بأحدث تقنيات الاستخلاص المعزز.',
      en: 'Exploration, drilling, and production of oil and gas, utilizing enhanced oil recovery (EOR) and reservoir management.',
    },
    whatStudentsStudy: {
      ar: ['جيولوجيا البترول وهندسة المكامن', 'هندسة حفر الآبار النفطية وسوائل الحفر', 'هندسة الإنتاج واستخلاص النفط المعزز (EOR)', 'تقييم التكوينات الصخرية وتسجيل الآبار', 'اقتصاديات الطاقة وإدارة حقول النفط'],
      en: ['Petroleum Geology & Reservoir Engineering', 'Well Drilling Engineering & Fluids', 'Production Tech & Enhanced Oil Recovery (EOR)', 'Formation Evaluation & Well Logging', 'Energy Economics & Field Asset Management'],
    },
    importantSubjects: {
      ar: ['الفيزياء', 'الرياضيات البحتة', 'الكيمياء', 'علوم الأرض الجيولوجية'],
      en: ['Physics', 'Pure Mathematics', 'Chemistry', 'Geology'],
    },
    skillsNeeded: {
      ar: ['تحليل بيانات المكامن والآبار الجوفية', 'استخدام برمجيات النمذجة (Petrel, Eclipse)', 'العمل الميداني في مناطق الصحراء والمنصات'],
      en: ['Subsurface data analytics & well log interpretation', 'Reservoir modeling (Eclipse / Petrel)', 'Field endurance in remote desert concession areas'],
    },
    careerPathways: {
      ar: ['مهندس حفر وإنتاج في شركة تنمية نفط عُمان (PDO) والشركات المشغلة (Oxy, BP)', 'مهندس مكامن ومحاكاة هيدروكربونية', 'مهندس استخلاص معزز للنفط وتقنيات الطاقة الهيدروجينية', 'أخصائي سلامة آبار وسلامة بيئية'],
      en: ['Drilling / Production Engineer at PDO, Oxy, or BP Oman', 'Reservoir Simulation Engineer', 'EOR & Clean Geothermal Transition Specialist', 'Well Integrity & Safety Superintendent'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'utas', 'nu'],
    admissionRequirements: {
      ar: 'تنافس عالٍ في مركز القبول الموحد، تفوق في الرياضيات البحتة والفيزياء.',
      en: 'High HEAC competition; top grades in Pure Math and Physics.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },
  {
    id: 'biomed-eng',
    name: { ar: 'الهندسة الطبية الحيوية', en: 'Biomedical Engineering' },
    category: 'engineering',
    shortDescription: {
      ar: 'دمج مبادئ الهندسة مع العلوم الطبية لتصميم وتطوير وصيانة الأجهزة الطبية والأعضاء الاصطناعية ومعدات التشخيص.',
      en: 'Integrating engineering with medicine to design, manufacture, and maintain medical devices and artificial organs.',
    },
    whatStudentsStudy: {
      ar: ['الأجهزة والقياسات الطبية الحيوية', 'المواد الحيوية والأعضاء الاصطناعية', 'معالجة الإشارات والصور الطبية', 'التشريح وعلم وظائف الأعضاء للمهندسين', 'معايير السلامة والجودة للأجهزة الطبية'],
      en: ['Biomedical Instrumentation & Sensors', 'Biomaterials & Biomechanics', 'Biomedical Signal & Image Processing', 'Physiology for Engineers', 'Medical Device Standards & Calibration'],
    },
    importantSubjects: {
      ar: ['الفيزياء', 'الأحياء', 'الرياضيات البحتة', 'اللغة الإنجليزية'],
      en: ['Physics', 'Biology', 'Pure Mathematics', 'English'],
    },
    skillsNeeded: {
      ar: ['فهم تكاملي بين الدوائر الإلكترونية والجسد البشري', 'معايرة وصيانة الأجهزة الحساسة في غرف العمليات', 'إدارة المعدات الطبية بالمستشفيات'],
      en: ['Hybrid electronics-biological understanding', 'Surgical & ICU device calibration acumen', 'Hospital clinical engineering asset management'],
    },
    careerPathways: {
      ar: ['مهندس أجهزة طبية في المستشفيات الحكومية والمدينة الطبية', 'أخصائي مبيعات ودعم فني في كبرى شركات الأجهزة (Siemens, Philips, GE)', 'أخصائي معايرة ومطابقة في الهيئات الصحية', 'باحث ومطور في تقنيات الرعاية الصحية الذكية'],
      en: ['Clinical Engineer in tertiary hospitals', 'Medical Device Specialist at international healthcare vendors', 'Medical Device Quality & Regulatory Assessor', 'Smart Health Devices R&D Specialist'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'nu', 'utas'],
    admissionRequirements: {
      ar: 'معدلات ممتازة في الرياضيات البحتة والفيزياء والأحياء.',
      en: 'Strong marks in Pure Math, Physics, and Biology.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'env-eng',
    name: { ar: 'الهندسة البيئية والاستدامة', en: 'Environmental Engineering' },
    category: 'engineering',
    shortDescription: {
      ar: 'ابتكار حلول هندسية لمكافحة التلوث، وإدارة النفايات، ومعالجة المياه ومياه الصرف، وخفض الانبعاثات الكربونية.',
      en: 'Developing engineering solutions for pollution control, waste management, water purification, and decarbonization.',
    },
    whatStudentsStudy: {
      ar: ['معالجة المياه العادمة وإعادة التدوير', 'هندسة جودة الهواء والتحكم في الانبعاثات', 'إدارة النفايات الصلبة والخطرة', 'تقييم الأثر البيئي (EIA)', 'الطاقة المتجددة والاقتصاد الدائري'],
      en: ['Water & Wastewater Treatment Design', 'Air Quality & Emissions Control', 'Hazardous & Municipal Waste Management', 'Environmental Impact Assessment (EIA)', 'Renewables & Circular Economy'],
    },
    importantSubjects: {
      ar: ['الكيمياء', 'الأحياء', 'الرياضيات البحتة', 'الفيزياء'],
      en: ['Chemistry', 'Biology', 'Pure Math', 'Physics'],
    },
    skillsNeeded: {
      ar: ['تحليل العينات الملوثة ونمذجة انتشار الانبعاثات', 'معرفة القوانين البيئية العمانية والدولية', 'تصميم حلول مستدامة وصديقة للبيئة'],
      en: ['Pollutant modeling & environmental laboratory testing', 'Omani & international environmental regulations', 'Sustainable circular design thinking'],
    },
    careerPathways: {
      ar: ['مهندس بيئي في هيئة البيئة العمانية', 'أخصائي بيئة واستدامة في شركة بيئة (Be\'ah) وشركات المياه (NAMA)', 'مستشار تقييم الأثر البيئي للمشاريع الصناعية', 'مهندس خفض الكربون والاستدامة في شركات النفط والطاقة'],
      en: ['Environmental Engineer at Environment Authority Oman', 'Sustainability & Waste Specialist at Be\'ah or Namaa', 'EIA Consultant for mega-industrial projects', 'Decarbonization Engineer in industrial complexes'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech'],
    admissionRequirements: {
      ar: 'درجات جيدة في المواد العلمية والرياضيات البحتة.',
      en: 'Solid performance in science disciplines and Pure Math.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },

  // --- INFORMATION TECHNOLOGY ---
  {
    id: 'cs',
    name: { ar: 'علوم الحاسب الآلي', en: 'Computer Science' },
    category: 'it',
    shortDescription: {
      ar: 'دراسة الخوارزميات، البرمجة، هياكل البيانات، النظرية الحاسوبية، وبناء الحلول الرقمية الذكية.',
      en: 'Study of algorithms, programming, data structures, computational theory, and intelligent software creation.',
    },
    whatStudentsStudy: {
      ar: ['البرمجة بلغات متعددة (Python, Java, C++)', 'الخوارزميات وهياكل البيانات وتحليل التعقيد', 'أنظمة التشغيل والمعمارية الحاسوبية', 'قواعد البيانات والأنظمة الموزعة', 'الذكاء الاصطناعي وهندسة الحوسبة السحابية'],
      en: ['Programming (Python, Java, C++, TypeScript)', 'Data Structures & Algorithms Complexity', 'Operating Systems & System Architecture', 'Databases & Distributed Systems', 'Foundations of AI & Cloud Computing'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة', 'اللغة الإنجليزية', 'التفكير المنطقي والفيزياء'],
      en: ['Pure Mathematics', 'English', 'Logical reasoning & Physics'],
    },
    skillsNeeded: {
      ar: ['التفكير الخوارزمي وحل المشكلات المعقدة', 'البرمجة وتتبع الأخطاء البرمجية (Debugging)', 'التعلم الذاتي السريع لمواكبة التطورات المتسارعة'],
      en: ['Algorithmic computational thinking', 'Clean coding & deep debugging capability', 'High velocity self-directed learning'],
    },
    careerPathways: {
      ar: ['مطور برمجيات وتطبيقات في القطاعين الحكومي والخاص', 'مهندس أنظمة حاسوبية وحوسبة سحابية', 'باحث حوسبة ومحلل خوارزميات', 'رائد أعمال مؤسس لشركات تقنية ناشئة'],
      en: ['Full-stack Software Engineer in Omani & global tech firms', 'Cloud & Systems Architect', 'Computational Scientist & Algorithm Engineer', 'Tech Startup Founder & Product Builder'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech', 'sohar', 'mcbs', 'majan', 'dhofar'],
    admissionRequirements: {
      ar: 'درجات متميزة في الرياضيات البحتة أو التطبيقية واللغة الإنجليزية عبر HEAC.',
      en: 'Competitive scores in Pure/Applied Mathematics and English via HEAC.',
    },
    natureOfStudy: { practicalPercent: 70, theoreticalPercent: 30 },
    verifiedStatus: 'verified',
  },
  {
    id: 'software-eng',
    name: { ar: 'هندسة البرمجيات', en: 'Software Engineering' },
    category: 'it',
    shortDescription: {
      ar: 'تطبيق المبادئ الهندسية المنظمة لتصميم وبناء واختبار وصيانة الأنظمة البرمجية الضخمة والموثوقة.',
      en: 'Applying systematic engineering principles to design, test, deploy, and maintain large-scale software systems.',
    },
    whatStudentsStudy: {
      ar: ['هندسة متطلبات البرمجيات وتصميم المعماريات', 'دورات حياة تطوير البرمجيات واختبارها (SDLC & QA)', 'منهجيات أجايل وإدارة المشاريع الرقمية (Scrum)', 'هندسة واجهات وتجربة المستخدم (UI/UX)', 'عمليات البرمجيات والسحابة (DevOps & CI/CD)'],
      en: ['Software Requirements & Architectural Design', 'Software Testing & Quality Assurance (QA)', 'Agile Methodologies & Scrum Project Management', 'UI/UX Interface Engineering', 'DevOps & Continuous Integration / Deployment'],
    },
    importantSubjects: {
      ar: ['الرياضيات', 'اللغة الإنجليزية', 'المنطق الرقمي'],
      en: ['Mathematics', 'English', 'Digital Logic'],
    },
    skillsNeeded: {
      ar: ['إتقان معمارية الأنظمة وأنماط التصميم (Design Patterns)', 'العمل الجماعي والتعاون عبر مستودعات Git', 'ضمان جودة الأكواد وخلوها من الثغرات'],
      en: ['Software architecture & design patterns', 'Collaborative Git team workflows', 'Clean code quality & rigorous test automation'],
    },
    careerPathways: {
      ar: ['مهندس برمجيات رئيسي (Lead Software Engineer)', 'مدير مشاريع تقنية ومنتجات رقمية (Product Manager)', 'مهندس ضمان الجودة واختبار البرمجيات (QA Lead)', 'مهندس DevOps وسحابيات في البنوك والشركات الكبرى'],
      en: ['Senior Software Engineer at enterprise firms', 'Technical Product Manager / Scrum Master', 'Software Quality Assurance Lead', 'DevOps & Site Reliability Engineer in banking/telecom'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech', 'majan', 'mcbs'],
    admissionRequirements: {
      ar: 'معدلات جيدة جدًا في الرياضيات واللغة الإنجليزية.',
      en: 'Very good marks in Mathematics and English.',
    },
    natureOfStudy: { practicalPercent: 75, theoreticalPercent: 25 },
    verifiedStatus: 'verified',
  },
  {
    id: 'cybersecurity',
    name: { ar: 'الأمن السيبراني وأمن المعلومات', en: 'Cybersecurity & Information Security' },
    category: 'it',
    shortDescription: {
      ar: 'حماية الشبكات والأنظمة والبيانات الوطنية والمؤسسية من الهجمات الرقمية والاختراقات والقرصنة.',
      en: 'Protecting networks, devices, and critical infrastructure from digital attacks, breaches, and unauthorized intrusion.',
    },
    whatStudentsStudy: {
      ar: ['أمن الشبكات والتشفير المتقدم (Cryptography)', 'القرصنة الأخلاقية واختبار الاختراق (Penetration Testing)', 'التحقيق الجنائي الرقمي (Digital Forensics)', 'أمن السحابة وإنترنت الأشياء', 'إدارة الحوادث السيبرانية والامتثال القانوني'],
      en: ['Network Security & Cryptography', 'Ethical Hacking & Penetration Testing', 'Digital Forensics & Incident Response', 'Cloud & IoT Security Infrastructure', 'Security Governance, Risk & Compliance (GRC)'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة', 'اللغة الإنجليزية', 'الشبكات والفيزياء'],
      en: ['Pure Mathematics', 'English', 'Networking logic'],
    },
    skillsNeeded: {
      ar: ['التفكير كالمخترق لاكتشاف الثغرات قبل حدوثها', 'تحليل حركة حزم الشبكات (Wireshark) وسجلات الأمان', 'الاستجابة السريعة للطوارئ تحت الضغط الحرج'],
      en: ['Adversarial mindset to identify attack vectors', 'Network packet analysis & security event monitoring', 'Rapid crisis incident response under high pressure'],
    },
    careerPathways: {
      ar: ['أخصائي أمن سيبراني في المركز الوطني للسلامة المعلوماتية (OCERT)', 'مختبر اختراق ومستشار أمان للبنوك والمؤسسات العمانية', 'محلل مركز العمليات الأمنية (SOC Analyst)', 'محقق في الجرائم الإلكترونية والتحليل الرقمي'],
      en: ['Cybersecurity Specialist at OCERT / Cyber Defense Centre', 'Penetration Tester for financial & telecom institutions', 'SOC Analyst (Security Operations Center)', 'Digital Forensics Investigator in law enforcement'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['utas', 'mcbs', 'majan', 'nu', 'sohar'],
    admissionRequirements: {
      ar: 'درجات تنافسية في الرياضيات واللغة الإنجليزية، واجتياز الفحص الأمني والأكاديمي عند الطلب.',
      en: 'Competitive standing in Math and English; high demand in Oman national defense and financial sectors.',
    },
    natureOfStudy: { practicalPercent: 70, theoreticalPercent: 30 },
    verifiedStatus: 'verified',
  },
  {
    id: 'ai-ds',
    name: { ar: 'الذكاء الاصطناعي وتعلم الآلة', en: 'Artificial Intelligence & Machine Learning' },
    category: 'it',
    shortDescription: {
      ar: 'بناء أنظمة ذكية تحاكي القدرات البشرية في التفكير، الرؤية الحاسوبية، معالجة اللغات الطبيعية، والتنبؤ المستقبلي.',
      en: 'Creating intelligent systems capable of human-like perception, computer vision, natural language processing, and automation.',
    },
    whatStudentsStudy: {
      ar: ['تعلم الآلة والشبكات العصبية العميقة (Deep Learning)', 'الرؤية الحاسوبية ومعالجة الصور', 'معالجة اللغات الطبيعية (NLP) والنماذج اللغوية', 'أخلاقيات وحوكمة الذكاء الاصطناعي', 'الرياضيات التطبيقية (الجبر الخطي والاحتمالات)'],
      en: ['Machine Learning & Deep Neural Networks', 'Computer Vision & Pattern Recognition', 'Natural Language Processing (NLP) & LLMs', 'AI Ethics & Responsible Governance', 'Applied Linear Algebra, Calculus & Probability'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة المتقدمة', 'الإحصاء', 'اللغة الإنجليزية', 'علوم الحاسب'],
      en: ['Advanced Pure Math', 'Statistics', 'English', 'Computer Science'],
    },
    skillsNeeded: {
      ar: ['إتقان مكتبات الذكاء الاصطناعي (PyTorch, TensorFlow)', 'الرياضيات المتقدمة وراء خوارزميات التعلم', 'تدريب وتقييم النماذج بكفاءة على الحوسبة السحابية'],
      en: ['AI framework mastery (PyTorch, TensorFlow, Scikit-learn)', 'Rigorous mathematical grasp of loss functions & optimization', 'Model deployment & fine-tuning pipelines'],
    },
    careerPathways: {
      ar: ['مهندس ذكاء اصطناعي (AI Engineer) في برامج التحول الرقمي', 'عالم تعلم آلة (Machine Learning Scientist)', 'أخصائي رؤية حاسوبية وأنظمة ذاتية القيادة', 'مستشار تبني تقنيات الذكاء الاصطناعي في المؤسسات'],
      en: ['AI Engineer across Oman Vision 2040 digital initiatives', 'Machine Learning Research Engineer', 'Computer Vision & Autonomous Systems Developer', 'Enterprise AI Adoption Consultant'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech', 'mcbs'],
    admissionRequirements: {
      ar: 'تفوق واضح في الرياضيات البحتة واللغة الإنجليزية.',
      en: 'Excellence in Pure Mathematics and English.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'data-science',
    name: { ar: 'علم البيانات وتحليل البيانات الضخمة', en: 'Data Science & Big Data Analytics' },
    category: 'it',
    shortDescription: {
      ar: 'استخراج الأنماط والرؤى المفيدة من مجموعات البيانات الهائلة لدعم اتخاذ القرارات الاستراتيجية والتنبؤية.',
      en: 'Extracting actionable patterns and insights from massive datasets to drive strategic decisions and forecasting.',
    },
    whatStudentsStudy: {
      ar: ['التنقيب عن البيانات والتحليل الإحصائي الاستدلالي', 'هندسة البيانات الضخمة (Big Data Pipelines)', 'تصور البيانات ولوحات المعلومات (Power BI, Tableau)', 'البرمجة الإحصائية (Python & R)', 'قواعد البيانات غير العلائقية (NoSQL & SQL)'],
      en: ['Data Mining & Inferential Statistics', 'Big Data Engineering & Distributed Storage', 'Data Visualization (Power BI, Tableau, D3)', 'Statistical Programming in Python & R', 'Advanced SQL & Data Warehousing'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة', 'الإحصاء', 'اللغة الإنجليزية'],
      en: ['Pure Mathematics', 'Statistics', 'English'],
    },
    skillsNeeded: {
      ar: ['سرد القصص بالبيانات وتبسيط الأرقام للإدارة', 'تنظيف وهندسة البيانات الخام بدقة', 'الفطنة في ربط التحليلات بالأعمال التجارية'],
      en: ['Data storytelling & executive visualization', 'Data cleaning, ETL, and feature engineering', 'Translating analytics into business value'],
    },
    careerPathways: {
      ar: ['عالم بيانات ومحلل بيانات في المركز الوطني للإحصاء والمعلومات (NCSI)', 'محلل أعمال وبيانات في قطاع الاتصالات والبنوك', 'مهندس خطوط بيانات (Data Engineer)', 'مستشار تخطيط استراتيجي معتمد على البيانات'],
      en: ['Data Scientist at National Centre for Statistics (NCSI)', 'Business Intelligence Analyst in Omantel / Ooredoo / Banks', 'Data Pipeline Engineer', 'Data-driven Strategy Consultant'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech', 'mcbs', 'majan'],
    admissionRequirements: {
      ar: 'درجات جيدة جدًا في الرياضيات البحتة واللغة الإنجليزية.',
      en: 'Strong marks in Pure Math and English.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'info-sys',
    name: { ar: 'نظم المعلومات الإدارية والتقنية', en: 'Information Systems (IS / MIS)' },
    category: 'it',
    shortDescription: {
      ar: 'الربط الحيوي بين التكنولوجيا وإدارة الأعمال لتنظيم تدفق المعلومات وتحسين كفاءة العمليات المؤسسية.',
      en: 'Bridging technology and business management to streamline digital information flow and enterprise operations.',
    },
    whatStudentsStudy: {
      ar: ['تحليل وتصميم النظم المؤسسية', 'أنظمة تخطيط الموارد (ERP كـ SAP)', 'إدارة مشاريع تقنية المعلومات', 'أمن وتدقيق نظم المعلومات', 'التجارة الإلكترونية والتحول الرقمي'],
      en: ['Systems Analysis & Enterprise Architecture', 'Enterprise Resource Planning (ERP like SAP)', 'IT Project Management', 'Information Systems Audit & Governance', 'E-Business & Digital Transformation'],
    },
    importantSubjects: {
      ar: ['الرياضيات', 'اللغة الإنجليزية', 'أساسيات الاقتصاد والحاسوب'],
      en: ['Mathematics', 'English', 'Business & Tech basics'],
    },
    skillsNeeded: {
      ar: ['القدرة على التوفيق بين لغة المبرمجين ولغة الإدارة', 'توثيق وتخطيط تدفقات العمل المؤسسية', 'مهارات التفاوض وإدارة التغيير التقني'],
      en: ['Bridging technical coders with business leaders', 'Workflow modeling & requirement specification', 'Stakeholder negotiation & tech change management'],
    },
    careerPathways: {
      ar: ['محلل نظم أعمال وتقنية معلومات (Business Analyst)', 'مستشار أنظمة تخطيط الموارد (SAP / Oracle Consultant)', 'مدير خدمات تقنية المعلومات في المؤسسات', 'أخصائي حوكمة وتحول رقمي حكومي'],
      en: ['IT Business Analyst', 'ERP / SAP Enterprise Consultant', 'IT Services Delivery Manager', 'Government Digital Transformation Specialist'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'mcbs', 'nizwa', 'sohar'],
    admissionRequirements: {
      ar: 'قبول عبر مركز القبول الموحد لطلبة الرياضيات البحتة أو التطبيقية.',
      en: 'Open for students with Pure or Applied Math background via HEAC.',
    },
    natureOfStudy: { practicalPercent: 55, theoreticalPercent: 45 },
    verifiedStatus: 'verified',
  },
  {
    id: 'comp-eng',
    name: { ar: 'هندسة الحاسوب والأنظمة المدمجة', en: 'Computer Engineering' },
    category: 'it',
    shortDescription: {
      ar: 'الجمع بين الهندسة الكهربائية وعلوم الحاسب لتصميم المعالجات الدقيقة والأنظمة المدمجة وإنترنت الأشياء (IoT).',
      en: 'Integrating electrical engineering and computer science to design microprocessors, embedded chips, and IoT.',
    },
    whatStudentsStudy: {
      ar: ['الدوائر والمنطق الرقمي', 'تصميم المعمارية والمعالجات الدقيقة (Microprocessors)', 'الأنظمة المدمجة وبرمجة المتحكمات (Embedded Systems)', 'إنترنت الأشياء وشبكات الحساسات اللاسلكية', 'الروبوتات وبرمجة العتاد منخفض المستوى (C/Assembly)'],
      en: ['Digital Logic & Circuit Design', 'Microprocessor & Microcontroller Architecture', 'Embedded Systems & Firmware Development', 'Internet of Things (IoT) & Sensor Networks', 'Robotics & Hardware-Level Programming'],
    },
    importantSubjects: {
      ar: ['الفيزياء', 'الرياضيات البحتة', 'اللغة الإنجليزية'],
      en: ['Physics', 'Pure Mathematics', 'English'],
    },
    skillsNeeded: {
      ar: ['فهم عميق لكيفية تفاعل البرمجيات مع العتاد الفيزيائي', 'تصميم اللوحات الإلكترونية (PCB Design)', 'اختبار واستكشاف أخطاء الشرائح الإلكترونية'],
      en: ['Hardware-software co-design intuition', 'PCB layout & circuit prototyping', 'Microcontroller debugging & hardware instrumentation'],
    },
    careerPathways: {
      ar: ['مهندس أنظمة مدمجة وإنترنت الأشياء', 'مهندس تصميم عتاد وشرائح إلكترونية', 'مهندس أتمتة صناعية وشبكات تحكم حاسوبية', 'مهندس اتصالات وشبكات متطورة'],
      en: ['Embedded Systems & IoT Firmware Engineer', 'Hardware & Electronic Systems Engineer', 'Industrial Automation & Control Engineer', 'Advanced Telecommunications Network Engineer'],
    },
    studyDuration: { ar: '٤ - ٥ سنوات', en: '4–5 Years' },
    universitiesInOman: ['squ', 'utas', 'nu', 'gutech'],
    admissionRequirements: {
      ar: 'درجات ممتازة في الرياضيات البحتة والفيزياء.',
      en: 'Strong grades in Pure Math and Physics.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },

  // --- BUSINESS ---
  {
    id: 'bus-admin',
    name: { ar: 'إدارة الأعمال والإدارة الاستراتيجية', en: 'Business Administration & Management' },
    category: 'business',
    shortDescription: {
      ar: 'قيادة المؤسسات، وتخطيط العمليات، وتطوير نماذج الأعمال، وصنع القرارات التنفيذية لتحقيق النمو والاستدامة.',
      en: 'Leading organizations, operational planning, developing business models, and making executive growth decisions.',
    },
    whatStudentsStudy: {
      ar: ['الإدارة الاستراتيجية ونظريات القيادة', 'السلوك التنظيمي وإدارة الأداء', 'مبادئ ريادة الأعمال وتأسيس المشاريع', 'التسويق والتمويل لغير الماليين', 'إدارة سلاسل الإمداد والتفاوض'],
      en: ['Strategic Management & Leadership', 'Organizational Behavior & Team Dynamics', 'Entrepreneurship & Venture Creation', 'Managerial Finance & Marketing', 'Operations & Negotiations'],
    },
    importantSubjects: {
      ar: ['الرياضيات (البحتة أو التطبيقية)', 'اللغة الإنجليزية', 'الدراسات الاجتماعية'],
      en: ['Pure or Applied Math', 'English', 'Social Studies'],
    },
    skillsNeeded: {
      ar: ['المهارات القيادية والقدرة على توجيه الفرق', 'التفكير الاستراتيجي وحل النزاعات المؤسسية', 'التواصل والتفاوض المقنع'],
      en: ['Leadership & cross-functional delegation', 'Strategic foresight & conflict resolution', 'Persuasive negotiation & stakeholder communication'],
    },
    careerPathways: {
      ar: ['مدير عمليات ومشاريع في كبرى الشركات', 'رائد أعمال مؤسس لشركة تجارية خاصة', 'مستشار تطوير أعمال وإدارة استراتيجية', 'مسؤول تنفيذي في القطاع العام والهيئات الاستثمارية'],
      en: ['Operations Manager / Business Development Lead', 'Independent Entrepreneur & Business Owner', 'Management Consulting Analyst', 'Executive Officer in government authorities & investment funds'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'gutech', 'mcbs', 'nizwa', 'sohar', 'majan', 'dhofar'],
    admissionRequirements: {
      ar: 'مفتوح لخريجي المسارين العلمي والأدبي بدرجات جيدة في الإنجليزية والرياضيات.',
      en: 'Open to both scientific and literary streams with good grades in English and Math.',
    },
    natureOfStudy: { practicalPercent: 50, theoreticalPercent: 50 },
    verifiedStatus: 'verified',
  },
  {
    id: 'accounting',
    name: { ar: 'المحاسبة والتدقيق المالي', en: 'Accounting & Auditing' },
    category: 'business',
    shortDescription: {
      ar: 'تسجيل وتحليل المعاملات المالية، وإعداد القوائم الختامية، والتدقيق الجنائي، والامتثال للأنظمة الضريبية.',
      en: 'Recording financial transactions, preparing balance sheets, forensic auditing, and tax/VAT compliance.',
    },
    whatStudentsStudy: {
      ar: ['المحاسبة المالية والمحاسبة الإدارية', 'معايير المحاسبة الدولية (IFRS)', 'التدقيق الداخلي والخارجي', 'محاسبة التكاليف والضرائب (ضريبة القيمة المضافة في عُمان)', 'نظم المعلومات المحاسبية المحوسبة'],
      en: ['Financial & Managerial Accounting', 'International Financial Reporting Standards (IFRS)', 'Internal & External Auditing Protocols', 'Cost Accounting & Omani VAT Regulations', 'Computerized Accounting Systems'],
    },
    importantSubjects: {
      ar: ['الرياضيات', 'اللغة الإنجليزية', 'التركيز على الأرقام'],
      en: ['Mathematics', 'English', 'Numerical precision'],
    },
    skillsNeeded: {
      ar: ['الدقة والنزاهة الأخلاقية والمهنية المطلقة', 'تحليل القوائم المالية واكتشاف الفروقات الحسابية', 'إتقان برمجيات المحاسبة وجداول البيانات المعقدة'],
      en: ['Uncompromising professional ethics & integrity', 'Financial statement analysis & reconciliation', 'Spreadsheet mastery & specialized accounting software'],
    },
    careerPathways: {
      ar: ['محاسب قانوني معتمد (CPA / ACCA)', 'مدقق حسابات في شركات المحاسبة الكبرى (Big 4 في عُمان)', 'مدقق مالي في جهاز الرقابة المالية والإدارية للدولة', 'مدير مالي (CFO) ورئيس حسابات في المؤسسات'],
      en: ['Chartered Certified Accountant (ACCA / CPA)', 'Auditor in Big Four accounting firms in Muscat', 'Financial Inspector in State Audit Institution', 'Chief Financial Officer (CFO) / Accounts Head'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'mcbs', 'majan', 'nizwa', 'sohar'],
    admissionRequirements: {
      ar: 'درجات جيدة جدًا في الرياضيات واللغة الإنجليزية.',
      en: 'Strong marks in Mathematics and English.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },
  {
    id: 'finance',
    name: { ar: 'المالية والاستثمار والتقنية المالية', en: 'Finance, Investment & FinTech' },
    category: 'business',
    shortDescription: {
      ar: 'إدارة الأموال، أسواق المال والأسهم، إدارة المحافظ الاستثمارية، والصيرفة الإسلامية، والابتكار في التقنية المالية.',
      en: 'Capital management, equity markets, investment portfolios, Islamic banking, and FinTech innovation.',
    },
    whatStudentsStudy: {
      ar: ['إدارة الاستثمار والأوراق المالية (بورصة مسقط)', 'تمويل الشركات وتقييم الأصول', 'المصرفية الإسلامية وأدوات التمويل الشرعي', 'التقنية المالية (FinTech) والبلوكشين', 'إدارة المخاطر المالية والائتمانية'],
      en: ['Investment & Portfolio Analysis (MSX)', 'Corporate Finance & Valuation', 'Islamic Banking & Sharia Financing', 'Financial Technology (FinTech) & Digital Assets', 'Credit & Market Risk Management'],
    },
    importantSubjects: {
      ar: ['الرياضيات', 'الاقتصاد', 'اللغة الإنجليزية'],
      en: ['Mathematics', 'Economics', 'English'],
    },
    skillsNeeded: {
      ar: ['النمذجة المالية والتنبؤ بالتدفقات النقدية', 'تحليل الأسواق وقراءة المؤشرات الاقتصادية الكلية', 'تقييم المخاطر وتوزيع الأصول الاستثمارية'],
      en: ['Financial modeling & discounted cash flow analysis', 'Macroeconomic trend analysis', 'Risk-adjusted portfolio asset allocation'],
    },
    careerPathways: {
      ar: ['محلل استثماري في جهاز الاستثمار العماني (OIA)', 'مسؤول ائتمان واستثمار في البنوك العمانية', 'مدير محافظ في شركات الوساطة ببورصة مسقط', 'محلل مالي للشركات ومستشار تمويل'],
      en: ['Investment Analyst at Oman Investment Authority (OIA)', 'Corporate Credit Officer in Omani banks', 'Portfolio Manager at Muscat Stock Exchange brokerage', 'Corporate Financial Planning Analyst'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'mcbs', 'majan'],
    admissionRequirements: {
      ar: 'معدلات جيدة في الرياضيات واللغة الإنجليزية.',
      en: 'Good performance in Mathematics and English.',
    },
    natureOfStudy: { practicalPercent: 55, theoreticalPercent: 45 },
    verifiedStatus: 'verified',
  },
  {
    id: 'marketing',
    name: { ar: 'التسويق الرقمي وإدارة العلامات التجارية', en: 'Digital Marketing & Brand Management' },
    category: 'business',
    shortDescription: {
      ar: 'فهم سلوك المستهلك، وبناء الهوية المؤسسية، وإدارة الحملات الرقمية على منصات التواصل، وتحسين تجربة العميل.',
      en: 'Understanding consumer psychology, brand building, digital ad optimization, social media strategy, and growth.',
    },
    whatStudentsStudy: {
      ar: ['سلوك المستهلك وعلم نفس الشراء', 'التسويق الرقمي وتحسين محركات البحث (SEO)', 'إدارة العلامات التجارية والاتصال التسويقي', 'تحليلات التسويق وقياس العائد الاستثماري (ROI)', 'استراتيجيات التسعير ودراسة المنافسين'],
      en: ['Consumer Behavior & Market Research', 'Digital Advertising & SEO / Growth Strategy', 'Brand Identity & Strategic Communications', 'Marketing Analytics & CAC/ROI Measurement', 'Pricing Strategies & Competitor Audits'],
    },
    importantSubjects: {
      ar: ['اللغة الإنجليزية', 'التفكير الإبداعي', 'الرياضيات الإحصائية'],
      en: ['English', 'Creative Thinking', 'Basic Statistics'],
    },
    skillsNeeded: {
      ar: ['الإبداع والابتكار في صناعة الحملات الجذابة', 'تحليل بيانات الحملات وتفاعل الجمهور', 'التواصل والتأثير وإدارة الأزمات الإعلامية'],
      en: ['Creative copywriting & visual campaign design', 'Campaign analytics & conversion optimization', 'Persuasive audience engagement & crisis PR'],
    },
    careerPathways: {
      ar: ['مدير تسويق رقمي ومدير علامات تجارية', 'أخصائي نمو وتحليلات حملات إعلانية', 'مستشار تسويق في وكالات الدعاية والإعلان', 'مدير تجربة العملاء (CX) في قطاع التجزئة والخدمات'],
      en: ['Digital Marketing & Brand Strategist', 'Paid Media & Performance Growth Specialist', 'Creative Marketing Agency Lead', 'Customer Experience (CX) Director in retail/services'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'mcbs', 'majan', 'nizwa', 'sohar'],
    admissionRequirements: {
      ar: 'معدل عام جيد مع إتقان اللغة الإنجليزية.',
      en: 'Good academic standing with English proficiency.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'logistics',
    name: { ar: 'اللوجستيات وإدارة سلاسل الإمداد', en: 'Logistics & Supply Chain Management' },
    category: 'business',
    shortDescription: {
      ar: 'تنظيم تدفق البضائع والخدمات والمعلومات من الموردين إلى المستهلك النهائي بكفاءة وسرعة عبر الموانئ والمطارات والمخازن.',
      en: 'Coordinating physical goods, inventory, shipping, and port operations from raw materials to final consumers.',
    },
    whatStudentsStudy: {
      ar: ['إدارة الموانئ والشحن البحري والجوي', 'إدارة المخازن والرقابة على المخزون', 'إدارة سلاسل الإمداد العالمية والتوريد', 'اللوجستيات الخضراء والاستدامة', 'قوانين الجمارك والتجارة الدولية في عُمان'],
      en: ['Port Operations & Maritime / Air Freight', 'Warehouse Management & Inventory Optimization', 'Global Supply Chain Architecture & Procurement', 'Green Logistics & Sustainable Freight', 'Customs Regulations & International Trade in Oman'],
    },
    importantSubjects: {
      ar: ['الرياضيات', 'الجغرافيا الاقتصادية', 'اللغة الإنجليزية'],
      en: ['Mathematics', 'Economic Geography', 'English'],
    },
    skillsNeeded: {
      ar: ['إدارة العمليات وحل الاختناقات اللوجستية', 'التخطيط الاستراتيجي ومراقبة المخزون', 'التنسيق بين شركات الشحن والموانئ والجمارك'],
      en: ['Operations bottleneck resolution & route optimization', 'Strategic inventory forecasting', 'Multimodal coordination with ports (Sohar/Salalah/Duqm)'],
    },
    careerPathways: {
      ar: ['مدير لوجستيات وسلاسل إمداد في مجموعة أسياد (ASYAD)', 'أخصائي عمليات في موانئ الدقم وصلالة وصحار', 'مسؤول مشتريات وتوريد في الشركات الكبرى', 'مدير مستودعات وشحن لشركات التجارة الإلكترونية'],
      en: ['Supply Chain Manager at ASYAD Group', 'Port Operations Specialist at Sohar, Salalah, or Duqm', 'Global Procurement Manager in multinational firms', 'E-commerce Fulfillment & Warehousing Director'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['gutech', 'utas', 'muscat-uni', 'mcbs', 'sohar'],
    admissionRequirements: {
      ar: 'تخصص واعد جدًا ومطلوب في رؤية عُمان 2040. درجات جيدة في الإنجليزية والرياضيات.',
      en: 'High strategic priority under Oman Vision 2040. Good marks in English and Math.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'economics',
    name: { ar: 'الاقتصاد والسياسات العامة', en: 'Economics & Public Policy' },
    category: 'business',
    shortDescription: {
      ar: 'دراسة كيفية توزيع الموارد النادرة، والتضخم، والنمو الاقتصادي، والسياسات المالية والنقدية للدول.',
      en: 'Study of resource allocation, inflation, macroeconomic growth, trade, and monetary/fiscal policies.',
    },
    whatStudentsStudy: {
      ar: ['الاقتصاد الجزئي والاقتصاد الكلي المتقدم', 'القياس الاقتصادي والنمذجة الرياضية (Econometrics)', 'التجارة الدولية وأسعار الصرف', 'اقتصاديات الموارد الطبيعية والطاقة في عُمان', 'السياسات المالية والتنويع الاقتصادي'],
      en: ['Advanced Microeconomics & Macroeconomics', 'Econometrics & Quantitative Modeling', 'International Trade & FX Dynamics', 'Natural Resource & Energy Economics in Oman', 'Fiscal Policy & Economic Diversification'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة', 'الإحصاء', 'اللغة الإنجليزية'],
      en: ['Pure Mathematics', 'Statistics', 'English'],
    },
    skillsNeeded: {
      ar: ['التفكير التحليلي المجرد وربط المتغيرات الاقتصادية', 'التعامل مع البيانات الإحصائية الكبرى ونماذج التنبؤ', 'صياغة التقارير الاستراتيجية لأصحاب القرار'],
      en: ['Abstract analytical thinking & causal deduction', 'Econometric modeling & forecasting software', 'Drafting strategic economic policy briefs'],
    },
    careerPathways: {
      ar: ['باحث اقتصادي في وزارة الاقتصاد والبنك المركزي العماني', 'محلل مخاطر اقتصادية في المؤسسات المالية', 'مستشار في برامج التنويع الاقتصادي (تنفيذ)', 'أكاديمي وباحث في مراكز الدراسات الاقتصادية'],
      en: ['Economic Researcher at Ministry of Economy & Central Bank of Oman', 'Macroeconomic Risk Analyst in investment funds', 'Consultant for Oman 2040 diversification programs', 'Economic Think-Tank & Policy Researcher'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'mcbs'],
    admissionRequirements: {
      ar: 'درجات جيدة جدًا في الرياضيات البحتة واللغة الإنجليزية.',
      en: 'Very good marks in Pure Math and English.',
    },
    natureOfStudy: { practicalPercent: 45, theoreticalPercent: 55 },
    verifiedStatus: 'verified',
  },
  {
    id: 'hr',
    name: { ar: 'إدارة الموارد البشرية وتطوير المواهب', en: 'Human Resources Management' },
    category: 'business',
    shortDescription: {
      ar: 'استقطاب الكفاءات، وتطوير المهارات، وإدارة بيئة العمل، وصياغة سياسات التعمين وحوافز الموظفين.',
      en: 'Talent acquisition, organizational culture, performance development, employee relations, and Omanisation compliance.',
    },
    whatStudentsStudy: {
      ar: ['استقطاب وتوظيف المواهب', 'التدريب والتطوير المؤسسي', 'نظام العمل العماني وقوانين التأمينات الاجتماعية', 'إدارة المكافآت والحوافز والأداء', 'تخطيط التعاقب الوظيفي وثقافة المنظمة'],
      en: ['Talent Acquisition & Headhunting', 'Corporate Learning & Development', 'Omani Labor Law & Social Security Frameworks', 'Compensation, Benefits & Performance Metrics', 'Succession Planning & Culture Building'],
    },
    importantSubjects: {
      ar: ['اللغة الإنجليزية', 'علم النفس والاجتماع', 'مهارات التواصل'],
      en: ['English', 'Psychology/Sociology', 'Communication'],
    },
    skillsNeeded: {
      ar: ['الذكاء العاطفي والاستماع الفعال', 'حل النزاعات العمالية بلباقة وحكمة', 'التوفيق بين مصلحة الموظف وأهداف المؤسسة'],
      en: ['High emotional intelligence & active listening', 'Fair conflict mediation & empathy', 'Aligning staff aspirations with organizational KPIs'],
    },
    careerPathways: {
      ar: ['مدير موارد بشرية (HR Director)', 'أخصائي تدريب وتطوير المواهب المؤسسية', 'مسؤول التعمين واستقطاب الكفاءات الوطنية', 'مستشار استشارات وتطوير تنظيمي'],
      en: ['Human Resources Director', 'Corporate Training & Talent Development Lead', 'Omanisation & Talent Acquisition Specialist', 'Organizational Development Consultant'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['utas', 'mcbs', 'majan', 'nizwa', 'sohar'],
    admissionRequirements: {
      ar: 'معدل جيد في شهادة دبلوم التعليم العام مع إجادة اللغة الإنجليزية.',
      en: 'Good diploma GPA with English competence.',
    },
    natureOfStudy: { practicalPercent: 55, theoreticalPercent: 45 },
    verifiedStatus: 'verified',
  },

  // --- SCIENCE ---
  {
    id: 'biology',
    name: { ar: 'علوم الأحياء والبيولوجيا البحرية', en: 'Biological & Marine Sciences' },
    category: 'science',
    shortDescription: {
      ar: 'استكشاف الكائنات الحية، التنوع البيولوجي الفريد لسلطنة عُمان، علم الوراثة، والبيئة البحرية والثروة السمكية.',
      en: 'Investigating living organisms, Oman’s unique marine ecology, genetics, and fisheries biology.',
    },
    whatStudentsStudy: {
      ar: ['علم الأحياء الخلوية والوراثة الجزيئية', 'البيولوجيا البحرية والمصائد السمكية في بحر عُمان', 'علم البيئة والحفاظ على الحياة الفطرية', 'علم وظائف الأعضاء الحيوانية والنباتية', 'التقنيات الحيوية وطرق البحث الحقلي'],
      en: ['Cellular Biology & Molecular Genetics', 'Marine Biology & Arabian Sea Fisheries', 'Ecology & Wildlife Conservation in Oman', 'Plant & Animal Physiology', 'Biotechnological & Field Research Methods'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الكيمياء', 'اللغة الإنجليزية'],
      en: ['Biology', 'Chemistry', 'English'],
    },
    skillsNeeded: {
      ar: ['الملاحظة الدقيقة في البيئات الميدانية والمختبرات', 'استخدام المجاهر وتقنيات تحليل الحمض النووي', 'الشغف بالحياة الفطرية والبيئة الطبيعية'],
      en: ['Keen field and laboratory observational rigor', 'Microscopy & DNA extraction techniques', 'Passion for marine wildlife and ecosystem conservation'],
    },
    careerPathways: {
      ar: ['باحث أحياء في مركز العلوم البحرية والسمكية بوزارة الثروة الزراعية والسمكية وموارد المياه', 'أخصائي بيئي في المحميات الطبيعية العمانية', 'فني مختبرات وباحث أكاديمي', 'أخصائي جودة الأحياء المائية في شركات الاستزراع السمكي'],
      en: ['Marine Biologist at Marine Science & Fisheries Centre', 'Ecologist in Oman Wildlife Nature Reserves', 'Laboratory Research Specialist in universities', 'Aquaculture Quality Specialist in marine ventures'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'nizwa'],
    admissionRequirements: {
      ar: 'درجات متميزة في مادة الأحياء ومادة الكيمياء.',
      en: 'Top grades in Biology and Chemistry.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'chemistry',
    name: { ar: 'الكيمياء التطبيقية والصناعية', en: 'Applied & Industrial Chemistry' },
    category: 'science',
    shortDescription: {
      ar: 'دراسة خواص المادة، وتفاعلات العناصر، والتحليل الكيميائي لخدمة الصناعات الدوائية والنفطية ومعالجة المياه.',
      en: 'Studying material properties, chemical reactions, and analytical testing for petroleum, water, and pharmaceuticals.',
    },
    whatStudentsStudy: {
      ar: ['الكيمياء التحليلية والأجهزة الحديثة (Chromatography, Spectrometry)', 'الكيمياء العضوية والبوليمرات', 'الكيمياء الفيزيائية والديناميكا الحرارية', 'الكيمياء الصناعية ومراقبة الجودة', 'السلامة الكيميائية وإدارة المخلفات الخطرة'],
      en: ['Analytical Chemistry & Spectroscopic Methods', 'Organic Chemistry & Industrial Polymers', 'Physical Chemistry & Reaction Dynamics', 'Industrial Chemistry & Quality Control', 'Chemical Safety & Hazardous Materials'],
    },
    importantSubjects: {
      ar: ['الكيمياء', 'الرياضيات', 'الفيزياء'],
      en: ['Chemistry', 'Mathematics', 'Physics'],
    },
    skillsNeeded: {
      ar: ['الدقة العالية في التحضير الكيميائي والوزن', 'تشغيل وصيانة أجهزة التحليل الطيفي الدقيقة', 'فهم آليات التفاعل والتصنيع الكيميائي'],
      en: ['High laboratory precision in reagent titration', 'Operation of GC-MS and spectrometry instruments', 'Reaction mechanism deduction'],
    },
    careerPathways: {
      ar: ['كيميائي في مختبرات مراقبة الجودة بشركات النفط والبتروكيماويات', 'محلل كيميائي في هيئة المواصفات والمقاييس', 'أخصائي جودة مياه في محطات التحلية الوطنية', 'باحث كيميائي في الصناعات الدوائية ومستحضرات التجميل'],
      en: ['Chemist in oil & petrochemical QA/QC laboratories', 'Analytical Chemist at Oman Metrology & Standards', 'Water Quality Analyst in national desalination plants', 'Pharmaceutical Formulation Chemist'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'nizwa', 'sohar'],
    admissionRequirements: {
      ar: 'درجات جيدة جدًا في مادة الكيمياء والرياضيات.',
      en: 'Very good marks in Chemistry and Mathematics.',
    },
    natureOfStudy: { practicalPercent: 70, theoreticalPercent: 30 },
    verifiedStatus: 'verified',
  },
  {
    id: 'physics',
    name: { ar: 'الفيزياء والفيزياء التطبيقية', en: 'Physics & Applied Physics' },
    category: 'science',
    shortDescription: {
      ar: 'فهم القوانين الأساسية التي تحكم الكون من الجسيمات دون الذرية إلى حركة المجرات، وتطبيقاتها في البصريات والطاقة.',
      en: 'Exploring the fundamental laws governing the universe, from quantum particles to astrophysics and advanced photonics.',
    },
    whatStudentsStudy: {
      ar: ['الميكانيكا الكلاسيكية والنسبية', 'الكهرومغناطيسية والبصريات والليزر', 'ميكانيكا الكم والفيزياء الذرية', 'الفيزياء النووية والإشعاعية', 'الفيزياء الحاسوبية والنمذجة الرياضية'],
      en: ['Classical Mechanics & Relativity', 'Electromagnetism, Optics & Laser Physics', 'Quantum Mechanics & Atomic Physics', 'Nuclear & Radiation Physics', 'Computational Physics & Simulation'],
    },
    importantSubjects: {
      ar: ['الفيزياء', 'الرياضيات البحتة المتقدمة', 'اللغة الإنجليزية'],
      en: ['Physics', 'Advanced Pure Mathematics', 'English'],
    },
    skillsNeeded: {
      ar: ['القدرة الفائقة على التجريد الرياضي وحل المعادلات التفاضلية', 'التفكير الاستنتاجي القائم على الأدلة التجريبية', 'النمذجة الحاسوبية للظواهر الفيزيائية'],
      en: ['High mathematical abstraction & differential equations', 'Deductive scientific reasoning', 'Computational physics simulation'],
    },
    careerPathways: {
      ar: ['فيزيائي طبي في أقسام العلاج الإشعاعي بالمستشفيات', 'أخصائي أرصاد جوية وعلوم المناخ في هيئة الطيران المدني', 'باحث في تقنيات الطاقة المتجددة وعلوم المواد', 'أكاديمي ومعلم فيزياء للتعليم ما بعد الأساسي'],
      en: ['Medical Physicist in oncology radiotherapy wards', 'Meteorologist at Civil Aviation Authority', 'Renewable Energy & Materials Science Researcher', 'High School Physics Educator / University Academic'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas'],
    admissionRequirements: {
      ar: 'درجات متفوقة في مادتي الفيزياء والرياضيات البحتة.',
      en: 'Top grades in Physics and Pure Mathematics.',
    },
    natureOfStudy: { practicalPercent: 55, theoreticalPercent: 45 },
    verifiedStatus: 'verified',
  },
  {
    id: 'math',
    name: { ar: 'الرياضيات والإحصاء الاكتواري', en: 'Mathematics & Actuarial Statistics' },
    category: 'science',
    shortDescription: {
      ar: 'لغة العلوم والتكنولوجيا؛ دراسة الهياكل الرياضية المجردة، والإحصاء التطبيقي، وحساب المخاطر التأمينية والمالية.',
      en: 'The universal language of science; studying abstract structures, applied statistics, and actuarial risk assessment.',
    },
    whatStudentsStudy: {
      ar: ['التفاضل والتكامل المتقدم والجبر الخطي', 'نظرية الاحتمالات والإحصاء الرياضي', 'التحليل العددي والتحسين الرياضي', 'الرياضيات المالية وحسابات التأمين الاكتوارية', 'التشفير الرياضي والنمذجة الخوارزمية'],
      en: ['Advanced Calculus & Linear Algebra', 'Probability Theory & Mathematical Statistics', 'Numerical Analysis & Mathematical Optimization', 'Financial Mathematics & Actuarial Science', 'Mathematical Cryptography & Modeling'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة', 'التفكير المنطقي التجريدي'],
      en: ['Pure Mathematics', 'Deductive Logic'],
    },
    skillsNeeded: {
      ar: ['البرهان الرياضي الصارم والمنطق التجريدي', 'تحليل المخاطر وبناء النماذج التنبؤية', 'تحويل المشكلات الواقعية إلى معادلات قابلة للحل'],
      en: ['Rigorous mathematical proofs & logic', 'Actuarial risk pricing & stochastic modeling', 'Translating empirical problems into solvable equations'],
    },
    careerPathways: {
      ar: ['خبير اكتواري في شركات التأمين وصناديق التقاعد العمانية', 'محلل كمي ومالي (Quantitative Analyst) في البنوك الاستثمارية', 'عالم رياضيات تطبيقية وتشفير في الأمن السيبراني', 'معلم رياضيات أو باحث أكاديمي'],
      en: ['Actuary in insurance companies & pension funds', 'Quantitative Financial Analyst in investment banking', 'Applied Cryptographer in cybersecurity defense', 'Mathematics Educator & Research Fellow'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas'],
    admissionRequirements: {
      ar: 'تفوق استثنائي في مادة الرياضيات البحتة.',
      en: 'Exceptional performance in Pure Mathematics.',
    },
    natureOfStudy: { practicalPercent: 35, theoreticalPercent: 65 },
    verifiedStatus: 'verified',
  },
  {
    id: 'biotech',
    name: { ar: 'التقانة الحيوية والجينوم', en: 'Biotechnology & Genomics' },
    category: 'science',
    shortDescription: {
      ar: 'استثمار الكائنات الحية والجينات لتطوير أدوية جديدة، ومحاصيل زراعية مقاومة للملوحة والجفاف، وعلاجات جينية.',
      en: 'Harnessing biological systems and genetics to develop novel therapeutics, drought-resistant crops, and biomanufacturing.',
    },
    whatStudentsStudy: {
      ar: ['الهندسة الوراثية وتعديل الجينات (CRISPR)', 'المعلوماتية الحيوية (Bioinformatics) والذكاء الجينومي', 'التقانة الحيوية النباتية والزراعية الصحراوية', 'التخمير الصناعي والتصنيع الدوائي الحيوي', 'الأخلاقيات الحيوية والملكية الفكرية في الجينات'],
      en: ['Genetic Engineering & Gene Editing (CRISPR)', 'Bioinformatics & Computational Genomics', 'Desert Agricultural & Marine Biotechnology', 'Industrial Fermentation & Biopharmaceuticals', 'Bioethics & Genetic Intellectual Property'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الكيمياء', 'الحاسوب والرياضيات'],
      en: ['Biology', 'Chemistry', 'Computing & Math'],
    },
    skillsNeeded: {
      ar: ['استخدام أدوات تسلسل الجينوم وتحليل الشفرات الوراثية', 'مهارات زراعة الأنسجة والخلايا المعقمة', 'التفكير الاستكشافي المبتكر لحل التحديات البيئية'],
      en: ['Next-generation DNA sequencing & genomic software', 'Aseptic cell culture & bioreactor maintenance', 'Innovative exploration for desert farming & health solutions'],
    },
    careerPathways: {
      ar: ['أخصائي جينوم وباحث في مركز عُمان للموارد الوراثية الحيوانية والنباتية (موارد)', 'باحث وراثة جزيئية في المستشفيات والمراكز الجينية المرجعية', 'أخصائي تقنية حيوية زراعية لتطوير المحاصيل المحلية', 'مطور أدوية حيوية ولقاحات في الصناعات الدوائية'],
      en: ['Genomics Specialist at Oman Animal & Plant Genetic Resources (Mawaarid)', 'Molecular Geneticist in diagnostic medical centres', 'Agricultural Biotech Specialist for arid soil enhancement', 'Biopharmaceutical R&D Specialist'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'nizwa'],
    admissionRequirements: {
      ar: 'درجات ممتازة في الأحياء والكيمياء واللغة الإنجليزية.',
      en: 'Strong marks in Biology, Chemistry, and English.',
    },
    natureOfStudy: { practicalPercent: 70, theoreticalPercent: 30 },
    verifiedStatus: 'verified',
  },

  // --- HUMANITIES AND SOCIAL SCIENCES ---
  {
    id: 'law',
    name: { ar: 'القانون والعلوم القانونية', en: 'Law (LLB)' },
    category: 'humanities',
    shortDescription: {
      ar: 'دراسة التشريعات، والدستور، والعدالة، والعقود، والقوانين الجزائية والتجارية، والدفاع عن الحقوق وإرساء النظام.',
      en: 'Studying jurisprudence, constitutional frameworks, contracts, corporate law, penal codes, and legal advocacy.',
    },
    whatStudentsStudy: {
      ar: ['القانون المدني ونظرية الالتزام', 'القانون التجاري والشركات والاستثمار', 'القانون الجزائي والإجراءات الجنائية', 'القانون الدولي العام والخاص', 'الشريعة الإسلامية وأحكام الأسرة', 'المحاكمات الصورية والصياغة القانونية'],
      en: ['Civil Law & Contract Law', 'Commercial Law & Corporate Governance', 'Criminal Law & Criminal Procedures', 'Public & Private International Law', 'Islamic Jurisprudence', 'Moot Court Advocacy & Legal Drafting'],
    },
    importantSubjects: {
      ar: ['اللغة العربية الفصحى', 'الدراسات الاجتماعية', 'اللغة الإنجليزية', 'التفكير المنطقي'],
      en: ['Arabic Language', 'Social Studies', 'English', 'Logical Reasoning'],
    },
    skillsNeeded: {
      ar: ['الفصاحة وقوة الحجة والمرافعة الشفهية والكتابية', 'التحليل الدقيق لنصوص القوانين وتفسيرها', 'الحس الأخلاقي العالي والبحث المتعمق في السوابق'],
      en: ['Articulate oral advocacy & legal brief writing', 'Meticulous statutory analysis & contract review', 'High ethical compass & precedent research rigor'],
    },
    careerPathways: {
      ar: ['محامٍ مترافع أمام المحاكم العمانية بمختلف درجاتها', 'وكيل ادعاء عام في الادعاء العام العماني', 'مستشار وباحث قانوني في الوزارات والمؤسسات الحكومية', 'مدير الشؤون القانونية والعقود في الشركات الكبرى والبنوك'],
      en: ['Licensed Advocate before Omani courts', 'Public Prosecutor in Public Prosecution Oman', 'Legal Advisor in government ministries', 'Head of Legal & Contracts in corporate conglomerates'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'nizwa', 'sohar', 'dhofar'],
    admissionRequirements: {
      ar: 'معدل عام مرتفع وتفوق في اللغة العربية واللغة الإنجليزية والدراسات الاجتماعية.',
      en: 'Competitive GPA with high grades in Arabic, English, and Social Studies.',
    },
    natureOfStudy: { practicalPercent: 40, theoreticalPercent: 60 },
    verifiedStatus: 'verified',
  },
  {
    id: 'psychology',
    name: { ar: 'علم النفس والإرشاد النفسي', en: 'Psychology & Counseling' },
    category: 'humanities',
    shortDescription: {
      ar: 'فهم السلوك البشري، والعمليات العقلية والمشاعر، وتقديم الدعم النفسي والإرشادي للأفراد والمجتمع.',
      en: 'Understanding human behavior, cognition, and emotions, providing counseling, and advancing psychological well-being.',
    },
    whatStudentsStudy: {
      ar: ['علم النفس العام وعلم نفس النمو', 'علم النفس الإكلينيكي والمرضي', 'نظريات الشخصية والقياس النفسي', 'أساليب الإرشاد النفسي والعلاج السلوكي المعرفي', 'علم النفس الاجتماعي والتنظيمي'],
      en: ['General & Developmental Psychology', 'Clinical Psychology & Psychopathology', 'Personality Theories & Psychometrics', 'Counseling Techniques & CBT Fundamentals', 'Social & Organizational Psychology'],
    },
    importantSubjects: {
      ar: ['الأحياء', 'الدراسات الاجتماعية', 'اللغة الإنجليزية'],
      en: ['Biology', 'Social Studies', 'English'],
    },
    skillsNeeded: {
      ar: ['التعاطف العالي والقدرة على الاستماع دون إطلاق أحكام', 'الملاحظة الدقيقة وتطبيق المقاييس والاختبارات النفسية', 'الحفاظ الصارم على سرية المرضى والمسترشدين'],
      en: ['Deep non-judgmental empathy & active listening', 'Psychological testing & diagnostic observation', 'Absolute client confidentiality & ethical boundary discipline'],
    },
    careerPathways: {
      ar: ['أخصائي نفسي سريري في المستشفيات والعيادات النفسية', 'أخصائي إرشاد وتوجيه نفسي في المدارس والجامعات', 'أخصائي علم النفس التنظيمي وتطوير بيئة العمل في الشركات', 'أخصائي رعاية وتأهيل في مراكز ذوي الاحتياجات الخاصة'],
      en: ['Clinical Psychologist in psychiatric clinics & hospitals', 'School Counselor & Student Guidance Specialist', 'Organizational Psychologist in corporate human capital', 'Rehabilitation Counselor in specialized care centres'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'nizwa', 'dhofar'],
    admissionRequirements: {
      ar: 'معدل جيد في شهادة دبلوم التعليم العام مع الرغبة والشغف الإنساني.',
      en: 'Good GPA with human-centric aptitude and communication skills.',
    },
    natureOfStudy: { practicalPercent: 50, theoreticalPercent: 50 },
    verifiedStatus: 'verified',
  },
  {
    id: 'education',
    name: { ar: 'التربية وإعداد المعلمين', en: 'Education & Teacher Preparation' },
    category: 'humanities',
    shortDescription: {
      ar: 'تأهيل المعلمين وصناع التعليم وفق أحدث المناهج وطرق التدريس وتقنيات التعليم لتربية أجيال المستقبل.',
      en: 'Preparing visionary teachers and educators in pedagogy, instructional technology, and modern learning methodologies.',
    },
    whatStudentsStudy: {
      ar: ['طرق واستراتيجيات التدريس الحديثة', 'علم النفس التربوي وإدارة الصف', 'تصميم المناهج والتقويم التربوي', 'تكنولوجيا التعليم والتعليم الرقمي', 'التدريب الميداني والعملي في المدارس'],
      en: ['Modern Pedagogical Teaching Strategies', 'Educational Psychology & Classroom Management', 'Curriculum Design & Educational Assessment', 'EdTech & Digital Instructional Media', 'Practicum & Field Teaching in Omani Schools'],
    },
    importantSubjects: {
      ar: ['مادة التخصص (رياضيات، لغة عربية، علوم، إنجليزي)', 'مهارات التواصل'],
      en: ['Specialty Subject (Math, Arabic, Science, English)', 'Communication'],
    },
    skillsNeeded: {
      ar: ['الصبر والقدرة على إيصال المعلومات بوضوح وجاذبية', 'إدارة الصف وجذب انتباه واهتمام الطلبة', 'مواكبة الوسائل التعليمية التفاعلية الحديثة'],
      en: ['Patience & crystal-clear explanatory clarity', 'Classroom leadership & student engagement', 'Modern interactive digital learning tools mastery'],
    },
    careerPathways: {
      ar: ['معلم في مدارس وزارة التربية والتعليم والمدارس الخاصة', 'أخصائي تطوير مناهج وتقويم تربوي', 'أخصائي تكنولوجيا تعليم وتصميم تعليمي رقمي', 'مدير ومشرف تربوي في الحقل التعليمي'],
      en: ['Certified Teacher in Ministry of Education / Private Schools', 'Curriculum Development Specialist', 'Instructional Designer & EdTech Consultant', 'Educational Supervisor / School Principal'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'nizwa', 'sohar', 'dhofar'],
    admissionRequirements: {
      ar: 'برنامج تنافسي مع اشتراط معدل مرتفع في مادة التخصص، واجتياز المقابلة واختبار الكفايات التخصصية.',
      en: 'Competitive HEAC program requiring high subject scores, specialized competencies test, and panel interview.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },
  {
    id: 'media',
    name: { ar: 'الإعلام والاتصال الجماهيري', en: 'Media & Mass Communication' },
    category: 'humanities',
    shortDescription: {
      ar: 'صناعة الخبر، والإنتاج التلفزيوني والإذاعي، والصحافة الرقمية، وإدارة العلاقات العامة والتواصل المؤسسي.',
      en: 'Journalism, broadcast production, digital news curation, public relations, and corporate communications.',
    },
    whatStudentsStudy: {
      ar: ['الصحافة الرقمية والكتابة للمنصات الإخبارية', 'الإنتاج والإخراج الإذاعي والتلفزيوني', 'العلاقات العامة والاتصال المؤسسي وإدارة الأزمات', 'أخلاقيات وتشريعات الإعلام', 'صناعة البودكاست وتصوير الفيديو التوثيقي'],
      en: ['Digital Journalism & Multimedia News Writing', 'Radio & Television Production and Directing', 'Corporate Public Relations & Crisis Communication', 'Media Law, Ethics & Fact-Checking', 'Podcast Production & Documentary Storytelling'],
    },
    importantSubjects: {
      ar: ['اللغة العربية الفصحى', 'اللغة الإنجليزية', 'التعبير والكتابة الإبداعية'],
      en: ['Arabic Language', 'English', 'Creative Writing & Rhetoric'],
    },
    skillsNeeded: {
      ar: ['الإلقاء والحضور أمام الكاميرا والميكروفون', 'السرعة والمهنية في تحرير الأخبار والتحقيقات', 'إدارة المقابلات وإعداد المحتوى الهادف'],
      en: ['Confident on-camera & broadcast presence', 'Rapid journalistic inquiry & investigative storytelling', 'Interviewing & narrative multimedia editing'],
    },
    careerPathways: {
      ar: ['مذيع وصحفي ومعد برامج في إذاعة وتلفزيون سلطنة عُمان والمنصات الإخبارية', 'مسؤول علاقات عامة واتصال وإعلام في المؤسسات الكبرى', 'صانع محتوى وثائقي ورقمي مستقل', 'محرر صحفي ومسؤول نشر رقمي'],
      en: ['Broadcaster, News Anchor, or Producer at Oman TV & Radio', 'Head of Corporate Communications & PR in public/private sectors', 'Independent Documentary Filmmaker & Digital Storyteller', 'Digital News Editor'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'mcbs', 'nizwa'],
    admissionRequirements: {
      ar: 'تفوق في مادة اللغة العربية واللغة الإنجليزية مع اجتياز المقابلة واختبار الصوت واللغة.',
      en: 'High marks in Arabic and English, plus voice and media aptitude interview.',
    },
    natureOfStudy: { practicalPercent: 65, theoreticalPercent: 35 },
    verifiedStatus: 'verified',
  },
  {
    id: 'languages',
    name: { ar: 'اللغات والترجمة الفورية', en: 'Languages, Linguistics & Translation' },
    category: 'humanities',
    shortDescription: {
      ar: 'دراسة اللغات العالمية وآدابها، وقواعد اللسانيات، والترجمة التحريرية والفورية للتقريب بين الثقافات.',
      en: 'Studying international languages, comparative literature, linguistics, and simultaneous/written translation.',
    },
    whatStudentsStudy: {
      ar: ['نظريات الترجمة والترجمة الفورية في المؤتمرات', 'اللسانيات المقارنة والصوتيات', 'الترجمة القانونية والطبية والدبلوماسية المتخصصة', 'الأدب المقارن والدراسات الثقافية', 'الترجمة بمساعدة الحاسوب (CAT Tools) والذكاء الاصطناعي'],
      en: ['Translation Theories & Simultaneous Conference Interpreting', 'Comparative Linguistics, Syntax & Phonetics', 'Specialized Legal, Medical & Diplomatic Translation', 'Comparative Literature & Intercultural Dialogue', 'Computer-Assisted Translation (CAT) & AI Localization'],
    },
    importantSubjects: {
      ar: ['اللغة الإنجليزية', 'اللغة العربية', 'شغف اللغات (الفرنسية، الألمانية، وغيرها)'],
      en: ['English', 'Arabic', 'Passion for world languages'],
    },
    skillsNeeded: {
      ar: ['سرعة البديهة والتركيز العالي في الترجمة الفورية', 'الحصيلة اللغوية الثرية والمفردات الدقيقة في كلا اللغتين', 'الفهم العميق للسياقات الثقافية والدبلوماسية'],
      en: ['Rapid reflexes & immense mental focus in simultaneous booth interpreting', 'Rich expressive vocabulary in source & target tongues', 'Subtle cultural nuance & diplomatic tact'],
    },
    careerPathways: {
      ar: ['مترجم فوري في المؤتمرات الدولية ووزارة الخارجية العمانية', 'مترجم معتمد للمستندات القانونية والعقود الرسمية', 'أخصائي توطين لغوي (Localization) للبرمجيات والكتب', 'خبير علاقات دولية وملحق ثقافي'],
      en: ['Simultaneous Conference Interpreter for Foreign Ministry & summits', 'Sworn Legal & Commercial Translator', 'Software & Digital Content Localization Specialist', 'International Relations & Diplomatic Liaison'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'nizwa', 'sohar', 'mcbs', 'dhofar'],
    admissionRequirements: {
      ar: 'درجة ممتازة في اللغة الإنجليزية واللغة العربية.',
      en: 'Top grades in English and Arabic.',
    },
    natureOfStudy: { practicalPercent: 60, theoreticalPercent: 40 },
    verifiedStatus: 'verified',
  },

  // --- CREATIVE FIELDS ---
  {
    id: 'architecture',
    name: { ar: 'الهندسة المعمارية والتخطيط الحضري', en: 'Architecture & Urban Planning' },
    category: 'creative',
    shortDescription: {
      ar: 'تصميم المباني والمساحات الحضرية بدمج الهوية العمانية الأصيلة مع أحدث مفاهيم الاستدامة والعمارة الحديثة.',
      en: 'Designing buildings and urban realms, harmonizing authentic Omani heritage with contemporary sustainable architecture.',
    },
    whatStudentsStudy: {
      ar: ['استوديوهات التصميم المعماري (Architectural Studios)', 'تاريخ ونظريات العمارة التراثية والحديثة', 'مواد البناء والإنشاء المعماري المستدام', 'التخطيط الحضري وتصميم المدن الذكية (سلطان هيثم)', 'برمجيات النمذجة (Revit, Rhino, 3ds Max, BIM)'],
      en: ['Architectural Design Studios', 'History & Theory of Heritage & Modern Architecture', 'Building Systems & Sustainable Materials', 'Urban Planning & Smart Cities (e.g. Sultan Haitham City)', 'BIM & Parametric Modeling (Revit, Rhino, Lumion)'],
    },
    importantSubjects: {
      ar: ['الرياضيات البحتة', 'الفيزياء', 'الرسم الحر والتصميم', 'اللغة الإنجليزية'],
      en: ['Pure Mathematics', 'Physics', 'Freehand drawing & Visual Arts', 'English'],
    },
    skillsNeeded: {
      ar: ['الرؤية المكانية ثلاثية الأبعاد والتفكير الفراغي', 'إتقان برامج الرسم المعماري والنمذجة الواقعية', 'الموازنة بين الجمال البصري والوظيفة الهندسية الواقعية'],
      en: ['3D spatial intuition & volumetric thinking', 'Advanced architectural CAD/BIM software proficiency', 'Balancing poetic aesthetics with structural realities'],
    },
    careerPathways: {
      ar: ['مهندس معماري في المكاتب الاستشارية العالمية والمحلية', 'مخطط حضري في وزارة الإسكان والتخطيط العمراني', 'مهندس تصميم في مشاريع المدن الذكية والتراثية', 'مؤسس استوديو تصميم معماري مستقل'],
      en: ['Architectural Designer in leading consulting firms', 'Urban Planner at Ministry of Housing & Urban Planning', 'Project Architect for smart master-planned cities', 'Boutique Architectural Studio Founder'],
    },
    studyDuration: { ar: '٥ سنوات', en: '5 Years' },
    universitiesInOman: ['squ', 'gutech', 'nu', 'dhofar'],
    admissionRequirements: {
      ar: 'درجات ممتازة في الرياضيات البحتة والفيزياء، مع اجتياز اختبار القدرات الفنية والمعمارية والمقابلة.',
      en: 'High grades in Pure Math and Physics, plus mandatory architectural aptitude test and drawing portfolio.',
    },
    natureOfStudy: { practicalPercent: 75, theoreticalPercent: 25 },
    verifiedStatus: 'verified',
  },
  {
    id: 'graphic-design',
    name: { ar: 'التصميم الجرافيكي والاتصال البصري', en: 'Graphic Design & Visual Communication' },
    category: 'creative',
    shortDescription: {
      ar: 'صياغة الرسائل البصرية، وتصميم الهويات البصرية للشركات، وتصميم واجهات المستخدم (UI)، وتنسيق المطبوعات الرقمية.',
      en: 'Crafting compelling visual messages, brand systems, typography, digital print layouts, and digital product interfaces.',
    },
    whatStudentsStudy: {
      ar: ['أسس التصميم والتايبوغرافي (تصميم الخطوط والخط العربي)', 'تصميم الهوية البصرية والعلامات التجارية', 'تصميم واجهات وتجربة المستخدم (UI/UX Design)', 'برمجيات أدوبي الاحترافية (Illustrator, Photoshop, InDesign, Figma)', 'التصوير الفوتوغرافي الإعلاني ونظرية الألوان'],
      en: ['Design Foundations & Arabic / Latin Typography', 'Visual Identity & Corporate Branding', 'UI/UX Interactive Product Design', 'Industry Standard Software (Figma, Illustrator, Photoshop, InDesign)', 'Commercial Photography & Color Theory'],
    },
    importantSubjects: {
      ar: ['الفنون التشكيلية', 'اللغة الإنجليزية', 'الحاسوب'],
      en: ['Visual Arts', 'English', 'Computer Skills'],
    },
    skillsNeeded: {
      ar: ['حس فني راقٍ وتقدير عميق للتكوين والتوازن البصري', 'القدرة على ترجمة أفكار العملاء المجردة إلى صور وهوية مقنعة', 'مواكبة اتجاهات التصميم العالمية المتجددة'],
      en: ['Refined visual aesthetic for layout, space, and balance', 'Translating complex client briefs into iconic branding', 'Continuous trend awareness in digital graphic arts'],
    },
    careerPathways: {
      ar: ['مصمم جرافيك ومصمم هويات بصرية في الوكالات الإبداعية', 'مصمم واجهات وتجربة مستخدم (UI/UX Designer) للتطبيقات', 'مخرج فني (Art Director) في شركات الإعلان والنشر', 'مصمم حر ومستقل يقدم خدماته عالميًا'],
      en: ['Senior Graphic & Brand Designer in creative agencies', 'UI/UX Product Designer for apps and platforms', 'Art Director in advertising agencies and publishing houses', 'Independent Freelance Brand Designer'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['squ', 'utas', 'mcbs', 'nizwa', 'sohar'],
    admissionRequirements: {
      ar: 'معدل جيد في دبلوم التعليم العام مع تقديم ملف أعمال فنية (Portfolio) واجتياز اختبار المهارات التشكيلية.',
      en: 'Good diploma GPA with creative portfolio review and practical visual arts evaluation.',
    },
    natureOfStudy: { practicalPercent: 80, theoreticalPercent: 20 },
    verifiedStatus: 'verified',
  },
  {
    id: 'interior-design',
    name: { ar: 'التصميم الداخلي والديكور المعماري', en: 'Interior Design & Spatial Architecture' },
    category: 'creative',
    shortDescription: {
      ar: 'تشكيل وتنسيق المساحات الداخلية السكنية والتجارية والفندقية باختيار الأثاث، الإضاءة، الخامات، وعلم بيئة المكان.',
      en: 'Transforming interior environments across residential, commercial, and hospitality spaces through lighting, materials, and ergonomics.',
    },
    whatStudentsStudy: {
      ar: ['استوديوهات التصميم الداخلي السكني والتجاري', 'الإضاءة المعمارية وعلم الصوتيات الداخلية', 'خامات ومواد التشطيب والأثاث والمنسوجات', 'الرسم التنفيذي وتفاصيل الإنشاء الداخلي (AutoCAD & 3ds Max)', 'أرغونوميا المساحات والتصميم الشامل'],
      en: ['Residential & Hospitality Interior Studios', 'Architectural Lighting & Interior Acoustics', 'Finishing Materials, Furniture & Textile Specification', 'Executive Technical Drafting & 3D Photorealistic Rendering', 'Ergonomics & Universal Inclusive Spatial Design'],
    },
    importantSubjects: {
      ar: ['الفنون التشكيلية', 'الرياضيات', 'الفيزياء', 'اللغة الإنجليزية'],
      en: ['Visual Arts', 'Mathematics', 'Physics', 'English'],
    },
    skillsNeeded: {
      ar: ['الإحساس المرهف بتناغم الألوان والملمس والخامات', 'الرسم الهندسي ثلاثي الأبعاد وإخراج المناظير الواقعية', 'فهم الميزانيات التقديرية ومواصفات المقاولين'],
      en: ['Sensory intuition for texture, lighting harmony, and color psychology', 'Photorealistic 3D visualization rendering', 'Contractor coordination and bill of quantities (BOQ)'],
    },
    careerPathways: {
      ar: ['مصمم داخلي في استوديوهات وشركات الاستشارات المعمارية', 'مصمم مساحات فندقية ومنتجعات سياحية راقية في عُمان', 'أخصائي تصميم معارض وتجزئة تجارية (Retail Designer)', 'مؤسس شركة تصميم وتنفيذ ديكور'],
      en: ['Interior Designer at prestigious architectural consultancies', 'Hospitality & Luxury Resort Interior Specialist in Oman', 'Commercial Retail & Exhibition Booth Designer', 'Interior Design Practice Founder'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['utas', 'mcbs', 'nizwa', 'dhofar'],
    admissionRequirements: {
      ar: 'اجتياز اختبار القدرات في الرسم الفني والمقابلة الشخصية مع معدل جيد.',
      en: 'Drawing aptitude exam and portfolio interview with good academic standing.',
    },
    natureOfStudy: { practicalPercent: 75, theoreticalPercent: 25 },
    verifiedStatus: 'verified',
  },
  {
    id: 'animation',
    name: { ar: 'الرسوم المتحركة والمؤثرات البصرية', en: 'Animation & Visual Effects (VFX)' },
    category: 'creative',
    shortDescription: {
      ar: 'إحياء الشخصيات والقصص عبر الرسوم المتحركة ثنائية وثلاثية الأبعاد وصناعة المؤثرات البصرية للأفلام والألعاب الرقمية.',
      en: 'Bringing characters and narratives to life via 2D/3D animation, motion graphics, and CGI visual effects.',
    },
    whatStudentsStudy: {
      ar: ['مبادئ التحريك الاثني عشر الأساسية', 'النمذجة ثلاثية الأبعاد ونحت الشخصيات (Maya, Blender, ZBrush)', 'تحريك الشخصيات وتجهيز الهياكل الحركية (Rigging)', 'المؤثرات البصرية ومحاكاة السوائل والنار (Houdini)', 'الإخراج السينمائي ورسم القصة المصورة (Storyboarding)'],
      en: ['12 Classical Principles of Animation', '3D Modeling & Digital Sculpting (Blender, Maya, ZBrush)', 'Character Rigging, Weighting & Kinematics', 'Visual Effects Simulation (Houdini, After Effects)', 'Cinematography, Lighting & Storyboarding'],
    },
    importantSubjects: {
      ar: ['الفنون والرسم', 'الحاسوب والفيزياء الحركية', 'اللغة الإنجليزية'],
      en: ['Visual Arts & Drawing', 'Computing & Physics of Motion', 'English'],
    },
    skillsNeeded: {
      ar: ['الصبر والتركيز الطويل لتنفيذ حركات متقنة إطارًا بإطار', 'فهم عميق لقوانين الجاذبية والحركة وتعبيرات الوجه', 'الشغف بسرد القصص وتصميم عوالم خيالية متكاملة'],
      en: ['Patience for frame-by-frame nuance & keyframe timing', 'Intuitive grasp of physics, anatomy, and expressive emotion', 'Passionate visual storytelling and world-building'],
    },
    careerPathways: {
      ar: ['محرك رسوم متحركة (3D Animator) في استوديوهات الإنتاج والأفلام', 'فنان مؤثرات بصرية (VFX Artist) في الإعلانات والسينما', 'فنان بيئات وشخصيات لألعاب الفيديو الرقمية', 'مصمم جرافيك متحرك (Motion Designer) للمنصات الرقمية'],
      en: ['3D Character Animator in production studios', 'Visual Effects (VFX) Artist for film & commercials', 'Environment & Character Artist for game studios', 'Motion Graphic Designer for broadcasting & brands'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['utas', 'mcbs'],
    admissionRequirements: {
      ar: 'تقديم محفظة أعمال فنية ورسومات، واجتياز اختبار الخيال الفني والتحريك.',
      en: 'Creative portfolio review and visual imagination assessment.',
    },
    natureOfStudy: { practicalPercent: 85, theoreticalPercent: 15 },
    verifiedStatus: 'verified',
  },
  {
    id: 'digital-media',
    name: { ar: 'الإعلام الرقمي وصناعة المحتوى التفاعلي', en: 'Digital Media & Interactive Content' },
    category: 'creative',
    shortDescription: {
      ar: 'دمج الصوت، الصورة، الفيديو، والوسائط التفاعلية لإنتاج محتوى رقمي مؤثر يلائم منصات العصر الحديث.',
      en: 'Merging audio, video, interactive interfaces, and storytelling to engineer impactful digital experiences.',
    },
    whatStudentsStudy: {
      ar: ['تصوير ومونتاج الفيديو الاحترافي (Premiere, DaVinci Resolve)', 'تصميم المحتوى التفاعلي ومنصات البث', 'هندسة الصوت الرقمي وصناعة البودكاست', 'استراتيجيات الانتشار وصناعة المحتوى المؤثر', 'الواقع الافتراضي والمعزز (VR/AR Media)'],
      en: ['Cinematic Video Shooting & Post-Production Editing', 'Interactive Media Design & Live Streaming Tech', 'Digital Audio Engineering & Sound Design', 'Social Content Strategy & Audience Retention', 'Immersive AR/VR Media Production'],
    },
    importantSubjects: {
      ar: ['اللغة الإنجليزية', 'الفنون والتصوير', 'الحاسوب'],
      en: ['English', 'Photography & Visual Arts', 'Computing'],
    },
    skillsNeeded: {
      ar: ['الإبداع وسرعة مواكبة اهتمامات الجيل الصاعد', 'إتقان معدات التصوير الاحترافية والإضاءة والمونتاج', 'مهارة السرد البصري المشوق في الثواني الأولى'],
      en: ['Creative cultural pulse and youth engagement intuition', 'Professional camera gear, lighting, and pacing mastery', 'Hook-driven visual narrative design'],
    },
    careerPathways: {
      ar: ['منتج محتوى ومخرج فيديوهات رقمية للشركات والمنصات', 'مسؤول إنتاج إعلامي رقمي في المؤسسات الحكومية', 'صانع محتوى مستقل ومؤثر في مجالات التعليم والتوعية', 'مهندس صوتيات وبودكاست في شبكات الإعلام'],
      en: ['Digital Content Producer & Video Director for brands', 'Head of Digital Media in government entities', 'Independent Educational Media Creator', 'Podcast & Audio Content Producer'],
    },
    studyDuration: { ar: '٤ سنوات', en: '4 Years' },
    universitiesInOman: ['utas', 'mcbs', 'nizwa'],
    admissionRequirements: {
      ar: 'معدل جيد في دبلوم التعليم العام مع إجادة اللغة الإنجليزية وشغف بالوسائط الرقمية.',
      en: 'Good General Education Diploma standing with English capability and digital media drive.',
    },
    natureOfStudy: { practicalPercent: 80, theoreticalPercent: 20 },
    verifiedStatus: 'verified',
  },
];
