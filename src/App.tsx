/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Language, UniversityMajor, UserFuturePlan, MajorCategory } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MajorDetailModal } from './components/MajorDetailModal';
import { HomePage } from './components/pages/HomePage';
import { InterestQuizPage } from './components/pages/InterestQuizPage';
import { MajorsPage } from './components/pages/MajorsPage';
import { UniversitiesPage } from './components/pages/UniversitiesPage';
import { ComparePage } from './components/pages/ComparePage';
import { ExperiencesPage } from './components/pages/ExperiencesPage';
import { AskStudentPage } from './components/pages/AskStudentPage';
import { FuturePlanPage } from './components/pages/FuturePlanPage';
import { CounselorPage } from './components/pages/CounselorPage';
import { AboutPage } from './components/pages/AboutPage';
import { majorsData } from './data/majors';

const STORAGE_KEY_PLAN = 'masar_future_plan_v1';
const STORAGE_KEY_LANG = 'masar_lang_v1';

const defaultChecklist = [
  {
    id: 'chk-1',
    text: {
      ar: 'خوض نشاط استكشاف الاهتمامات على مسار وتحديد المجال الأقرب',
      en: 'Complete the Interests Exploration assessment on MASAR',
    },
    completed: false,
  },
  {
    id: 'chk-2',
    text: {
      ar: 'حفظ ٣ تخصصات جامعية على الأقل ومقارنة طبيعة دراستها وسوق العمل',
      en: 'Bookmark at least 3 candidate majors and compare curricula',
    },
    completed: false,
  },
  {
    id: 'chk-3',
    text: {
      ar: 'الاطلاع على دليل الطالب الصادر من مركز القبول الموحد (HEAC)',
      en: 'Review the official HEAC Unified Admission Student Handbook',
    },
    completed: false,
  },
  {
    id: 'chk-4',
    text: {
      ar: 'التحدث مع أخصائي التوجيه المهني بالمدرسة لمراجعة خيارات المواد',
      en: 'Consult with your school career guidance counselor regarding subject selection',
    },
    completed: false,
  },
  {
    id: 'chk-5',
    text: {
      ar: 'قراءة تجارب طلبة الجامعات في قسم "تجارب الطلبة" للاطلاع على الواقع العملي',
      en: 'Read authentic reflections in "Student Stories" for candid insights',
    },
    completed: false,
  },
  {
    id: 'chk-6',
    text: {
      ar: 'استكشاف الجامعات في عُمان وزيارة مواقعها الرسمية أو أيامها المفتوحة',
      en: 'Explore Omani universities and inspect official program requirements',
    },
    completed: false,
  },
];

export default function App() {
  // 1. Language state (Arabic default as required by user)
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY_LANG) : null;
      return (saved === 'en' || saved === 'ar') ? saved : 'ar';
    } catch {
      return 'ar';
    }
  });

  // 2. Active Page State (Always boots straight to Home without any login gate)
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // 3. User Future Plan State in localStorage (Safely initialized for incognito)
  const [futurePlan, setFuturePlan] = useState<UserFuturePlan>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(STORAGE_KEY_PLAN);
        if (saved) {
          return JSON.parse(saved);
        }
      }
    } catch {
      // In-memory fallback for strict private/incognito browsing
    }
    return {
      savedMajorIds: ['software-eng', 'medicine'],
      savedUniversityIds: ['squ', 'utas'],
      checklist: defaultChecklist,
      personalNotes: '',
    };
  });

  // 4. Compare Majors List State (IDs)
  const [compareMajorIds, setCompareMajorIds] = useState<string[]>(['software-eng', 'cs']);

  // 5. Active Major Modal State
  const [selectedMajor, setSelectedMajor] = useState<UniversityMajor | null>(null);

  // Sync Language with HTML tag attributes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'MASAR | مسار — مستقبلك يبدأ بفهم خياراتك'
        : 'MASAR | Career & University Exploration in Oman';
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY_LANG, lang);
      }
    } catch {
      // Silently continue in strict private mode
    }
  }, [lang]);

  // Sync Future Plan to localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY_PLAN, JSON.stringify(futurePlan));
      }
    } catch {
      // Silently continue in strict private mode
    }
  }, [futurePlan]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  // Major Saving Handler
  const handleToggleSaveMajor = (majorId: string) => {
    setFuturePlan((prev) => {
      const exists = prev.savedMajorIds.includes(majorId);
      return {
        ...prev,
        savedMajorIds: exists
          ? prev.savedMajorIds.filter((id) => id !== majorId)
          : [...prev.savedMajorIds, majorId],
      };
    });
  };

  // University Saving Handler
  const handleToggleSaveUniversity = (uniId: string) => {
    setFuturePlan((prev) => {
      const exists = prev.savedUniversityIds.includes(uniId);
      return {
        ...prev,
        savedUniversityIds: exists
          ? prev.savedUniversityIds.filter((id) => id !== uniId)
          : [...prev.savedUniversityIds, uniId],
      };
    });
  };

  // Compare Toggle Handler
  const handleToggleCompareMajor = (majorId: string) => {
    setCompareMajorIds((prev) => {
      if (prev.includes(majorId)) {
        return prev.filter((id) => id !== majorId);
      }
      if (prev.length >= 3) {
        // Replace the oldest
        return [prev[1], prev[2], majorId];
      }
      return [...prev, majorId];
    });
  };

  const handleClearCompare = () => {
    setCompareMajorIds([]);
  };

  // Quiz completion handler
  const handleSaveQuizResultToPlan = (category: MajorCategory) => {
    setFuturePlan((prev) => ({
      ...prev,
      targetFieldCategory: category,
      lastQuizResult: {
        date: new Date().toISOString().split('T')[0],
        topCategory: category,
      },
      // Mark quiz checklist task as completed
      checklist: prev.checklist.map((item) =>
        item.id === 'chk-1' ? { ...item, completed: true } : item
      ),
    }));
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[#F7F8F5] text-[#102A43] ${
        lang === 'ar' ? 'font-arabic' : 'font-latin'
      }`}
    >
      {/* Sticky Bilingual Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lang={lang}
        toggleLanguage={toggleLanguage}
        savedMajorsCount={futurePlan.savedMajorIds.length}
        compareMajorsCount={compareMajorIds.length}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            lang={lang}
            onSelectMajor={(m) => setSelectedMajor(m)}
            savedMajorIds={futurePlan.savedMajorIds}
            onToggleSaveMajor={handleToggleSaveMajor}
          />
        )}

        {currentPage === 'quiz' && (
          <InterestQuizPage
            lang={lang}
            setCurrentPage={setCurrentPage}
            onSelectMajor={(m) => setSelectedMajor(m)}
            onSaveQuizResultToPlan={handleSaveQuizResultToPlan}
          />
        )}

        {currentPage === 'majors' && (
          <MajorsPage
            lang={lang}
            onSelectMajor={(m) => setSelectedMajor(m)}
            savedMajorIds={futurePlan.savedMajorIds}
            onToggleSaveMajor={handleToggleSaveMajor}
            compareMajorIds={compareMajorIds}
            onToggleCompareMajor={handleToggleCompareMajor}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'universities' && (
          <UniversitiesPage
            lang={lang}
            savedUniversityIds={futurePlan.savedUniversityIds}
            onToggleSaveUniversity={handleToggleSaveUniversity}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'compare' && (
          <ComparePage
            lang={lang}
            compareMajorIds={compareMajorIds}
            onToggleCompareMajor={handleToggleCompareMajor}
            onClearCompare={handleClearCompare}
            savedMajorIds={futurePlan.savedMajorIds}
            onToggleSaveMajor={handleToggleSaveMajor}
            setCurrentPage={setCurrentPage}
            onSelectMajor={(m) => setSelectedMajor(m)}
          />
        )}

        {currentPage === 'experiences' && (
          <ExperiencesPage lang={lang} setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'ask' && (
          <AskStudentPage lang={lang} setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'plan' && (
          <FuturePlanPage
            lang={lang}
            futurePlan={futurePlan}
            setFuturePlan={setFuturePlan}
            setCurrentPage={setCurrentPage}
            onSelectMajor={(m) => setSelectedMajor(m)}
            onRemoveSavedMajor={handleToggleSaveMajor}
            onRemoveSavedUniversity={handleToggleSaveUniversity}
          />
        )}

        {currentPage === 'counselor' && (
          <CounselorPage lang={lang} setCurrentPage={setCurrentPage} />
        )}

        {currentPage === 'about' && (
          <AboutPage lang={lang} setCurrentPage={setCurrentPage} />
        )}
      </main>

      {/* Comprehensive Institutional Footer */}
      <Footer setCurrentPage={setCurrentPage} lang={lang} />

      {/* Major Detail Inspect Modal */}
      <MajorDetailModal
        major={selectedMajor}
        onClose={() => setSelectedMajor(null)}
        lang={lang}
        onSaveToPlan={handleToggleSaveMajor}
        isSavedInPlan={selectedMajor ? futurePlan.savedMajorIds.includes(selectedMajor.id) : false}
        onToggleCompare={handleToggleCompareMajor}
        isInCompare={selectedMajor ? compareMajorIds.includes(selectedMajor.id) : false}
        onNavigateToPage={setCurrentPage}
      />
    </div>
  );
}
