export type Language = 'ar' | 'en';

export type MajorCategory =
  | 'health'
  | 'engineering'
  | 'it'
  | 'business'
  | 'science'
  | 'humanities'
  | 'creative';

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface LocalizedList {
  ar: string[];
  en: string[];
}

export interface UniversityMajor {
  id: string;
  name: LocalizedString;
  category: MajorCategory;
  shortDescription: LocalizedString;
  whatStudentsStudy: LocalizedList;
  importantSubjects: LocalizedList;
  skillsNeeded: LocalizedList;
  careerPathways: LocalizedList;
  studyDuration: LocalizedString;
  universitiesInOman: string[];
  admissionRequirements: LocalizedString;
  natureOfStudy: {
    practicalPercent: number;
    theoreticalPercent: number;
  };
  verifiedStatus: 'verified' | 'provisional';
}

export interface UniversityInstitution {
  id: string;
  name: LocalizedString;
  shortName: string;
  type: LocalizedString; // الحكومية / الخاصة
  location: LocalizedString; // مسقط، نزوى، صحار، صلالة...
  website: string;
  description: LocalizedString;
  availableCategories: MajorCategory[];
  featuredPrograms: LocalizedList;
  admissionOverview: LocalizedString;
  contact: {
    phone: string;
    email: string;
    address: LocalizedString;
  };
}

export interface StudentExperience {
  id: string;
  studentName: string;
  university: LocalizedString;
  major: LocalizedString;
  majorId: string;
  yearOfStudy: LocalizedString;
  whyChosen: LocalizedString;
  whatTheyEnjoy: LocalizedString;
  challenges: LocalizedString;
  wishKnownBefore: LocalizedString;
  adviceForSchoolStudents: LocalizedString;
  category: MajorCategory;
  date: string;
}

export interface StudentQuestion {
  id: string;
  asker: LocalizedString;
  question: LocalizedString;
  category: MajorCategory;
  answeredBy: {
    name: string;
    university: LocalizedString;
    major: LocalizedString;
  };
  answer: LocalizedString;
  date: string;
}

export interface QuizQuestion {
  id: number;
  question: LocalizedString;
  context: LocalizedString;
  options: {
    label: LocalizedString;
    scores: Partial<Record<MajorCategory, number>>;
  }[];
}

export interface FieldRecommendation {
  category: MajorCategory;
  title: LocalizedString;
  matchScore: number;
  rationale: LocalizedString;
  suggestedMajors: string[];
}

export interface ChecklistItem {
  id: string;
  text: LocalizedString;
  completed: boolean;
  isCustom?: boolean;
}

export interface UserFuturePlan {
  savedMajorIds: string[];
  savedUniversityIds: string[];
  checklist: ChecklistItem[];
  personalNotes: string;
  targetFieldCategory?: MajorCategory | '';
  lastQuizResult?: {
    date: string;
    topCategory: MajorCategory;
  };
}

export type PageId =
  | 'home'
  | 'quiz'
  | 'majors'
  | 'universities'
  | 'compare'
  | 'experiences'
  | 'ask'
  | 'plan'
  | 'counselor'
  | 'about';
