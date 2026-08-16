import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation, TabType } from './components/Navigation';
import { ModuleMap } from './components/ModuleMap';
import { GlossaryView } from './components/GlossaryView';
import { PracticeView } from './components/PracticeView';
import { ExpressionsView } from './components/ExpressionsView';
import { ProfileView } from './components/ProfileView';
import { LessonModal } from './components/LessonModal';
import { HeartRefillModal } from './components/HeartRefillModal';
import { StudyReminderModal } from './components/StudyReminderModal';
import { AboutCreatorModal } from './components/AboutCreatorModal';
import { gtiModulesData } from './data/modules';
import { pythonModulesData } from './data/pythonModules';
import { algorithmsModulesData } from './data/algorithmsModules';
import { databaseModulesData } from './data/databaseModules';
import { Lesson, UserProgress, TrackId } from './types';
import { soundService } from './services/soundService';
import { notificationService } from './services/notificationService';
import { storageService, defaultProgress } from './services/storageService';

const allModules = [
  ...gtiModulesData,
  ...pythonModulesData,
  ...algorithmsModulesData,
  ...databaseModulesData
];

export const App: React.FC = () => {
  // Load progress synchronously from storageService (LocalStorage / Migrated)
  const [progress, setProgress] = useState<UserProgress>(() => {
    return storageService.loadInitialProgress();
  });

  const [activeTab, setActiveTab] = useState<TabType>('learn');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isHeartModalOpen, setIsHeartModalOpen] = useState<boolean>(false);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);

  // Sync theme attribute on <html> element
  useEffect(() => {
    const currentTheme = progress.theme || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [progress.theme]);

  // Load and reconcile from Native Capacitor Preferences (Android SharedPreferences)
  useEffect(() => {
    storageService.loadNativeProgress().then((nativeData) => {
      if (nativeData) {
        setProgress((current) => {
          // If native storage has more completed lessons or more XP, prioritize it
          const mergedCompleted = Array.from(new Set([
            ...current.completedLessonIds,
            ...nativeData.completedLessonIds
          ]));
          return {
            ...current,
            ...nativeData,
            completedLessonIds: mergedCompleted,
            totalXp: Math.max(current.totalXp, nativeData.totalXp)
          };
        });
      }
    });
  }, []);

  // Sync sound service state
  useEffect(() => {
    soundService.setMuted(!progress.soundEnabled);
  }, [progress.soundEnabled]);

  // Persist progress changes to both LocalStorage and Native Preferences
  useEffect(() => {
    storageService.saveProgress(progress);
  }, [progress]);

  // Check daily study reminder notification
  useEffect(() => {
    if (progress.notificationsEnabled) {
      notificationService.checkDailyReminder(progress.lastActiveDate, progress.currentStreak);
    }
  }, []);

  // Handle lesson completion
  const handleLessonComplete = (lessonId: string, xpReward: number) => {
    const today = new Date().toISOString().split('T')[0];

    setProgress((prev) => {
      const alreadyCompleted = prev.completedLessonIds.includes(lessonId);
      const newCompleted = alreadyCompleted
        ? prev.completedLessonIds
        : [...prev.completedLessonIds, lessonId];

      // Streak check
      let newStreak = prev.currentStreak;
      if (prev.lastActiveDate !== today) {
        const lastDate = new Date(prev.lastActiveDate);
        const currDate = new Date(today);
        const diffDays = Math.round((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

        if (diffDays === 1) {
          newStreak += 1;
        } else if (diffDays > 1) {
          newStreak = 1;
        }
      }

      const updated: UserProgress = {
        ...prev,
        completedLessonIds: newCompleted,
        totalXp: prev.totalXp + xpReward,
        currentStreak: newStreak,
        lastActiveDate: today
      };

      // Force immediate synchronous & async save
      storageService.saveProgress(updated);

      return updated;
    });
  };

  const handleLoseHeart = () => {
    setProgress((prev) => ({
      ...prev,
      hearts: Math.max(0, prev.hearts - 1)
    }));
  };

  const handleRestoreOneHeart = () => {
    setProgress((prev) => ({
      ...prev,
      hearts: Math.min(prev.maxHearts, prev.hearts + 1)
    }));
  };

  const handleFullRefillHearts = () => {
    setProgress((prev) => ({
      ...prev,
      hearts: prev.maxHearts
    }));
  };

  const handleAddXp = (amount: number) => {
    setProgress((prev) => ({
      ...prev,
      totalXp: prev.totalXp + amount
    }));
  };

  const handleToggleSound = () => {
    setProgress((prev) => ({
      ...prev,
      soundEnabled: !prev.soundEnabled
    }));
  };

  const handleToggleTheme = () => {
    setProgress((prev) => ({
      ...prev,
      theme: prev.theme === 'light' ? 'dark' : 'light'
    }));
  };

  const handleChangeTrack = (track: TrackId) => {
    setProgress((prev) => ({
      ...prev,
      activeTrackId: track
    }));
  };

  const handleToggleMemorized = (id: string) => {
    setProgress((prev) => {
      const isAlready = prev.memorizedExpressionIds.includes(id);
      const newMemorized = isAlready
        ? prev.memorizedExpressionIds.filter((item) => item !== id)
        : [...prev.memorizedExpressionIds, id];

      // Reward +15 XP for memorizing a new expression
      const xpBonus = !isAlready ? 15 : 0;

      return {
        ...prev,
        memorizedExpressionIds: newMemorized,
        totalXp: prev.totalXp + xpBonus
      };
    });
  };

  const handleUpdateNotificationSettings = (enabled: boolean, hour: number) => {
    setProgress((prev) => ({
      ...prev,
      notificationsEnabled: enabled,
      dailyReminderHour: hour
    }));
  };

  return (
    <div data-theme={progress.theme || 'dark'} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
      {/* Top App Header */}
      <Header
        progress={progress}
        onOpenHeartModal={() => setIsHeartModalOpen(true)}
        onOpenReminderModal={() => setIsReminderModalOpen(true)}
        onOpenAboutModal={() => setIsAboutModalOpen(true)}
        onToggleSound={handleToggleSound}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Body */}
      <main style={{ flex: 1 }}>
        {activeTab === 'learn' && (
          <ModuleMap
            modules={allModules}
            progress={progress}
            activeTrack={progress.activeTrackId}
            onChangeTrack={handleChangeTrack}
            onSelectLesson={(lesson) => setActiveLesson(lesson)}
          />
        )}

        {activeTab === 'glossary' && (
          <GlossaryView />
        )}

        {activeTab === 'practice' && (
          <PracticeView
            hearts={progress.hearts}
            maxHearts={progress.maxHearts}
            onRestoreHeart={handleRestoreOneHeart}
            onAddXp={handleAddXp}
          />
        )}

        {activeTab === 'expressions' && (
          <ExpressionsView
            memorizedIds={progress.memorizedExpressionIds}
            onToggleMemorized={handleToggleMemorized}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileView
            progress={progress}
            onOpenAboutModal={() => setIsAboutModalOpen(true)}
          />
        )}
      </main>

      {/* Bottom 5-Tab Navigation */}
      <Navigation
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        memorizedCount={progress.memorizedExpressionIds.length}
      />

      {/* Fullscreen Lesson Runner Modal */}
      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          hearts={progress.hearts}
          onClose={() => setActiveLesson(null)}
          onLessonComplete={handleLessonComplete}
          onLoseHeart={handleLoseHeart}
          onRefillHearts={handleFullRefillHearts}
        />
      )}

      {/* Heart Recovery Modal */}
      <HeartRefillModal
        isOpen={isHeartModalOpen}
        hearts={progress.hearts}
        maxHearts={progress.maxHearts}
        onClose={() => setIsHeartModalOpen(false)}
        onRefill={handleFullRefillHearts}
        onGoToPractice={() => setActiveTab('practice')}
      />

      {/* Daily Study Reminder Notification Modal */}
      <StudyReminderModal
        isOpen={isReminderModalOpen}
        onClose={() => setIsReminderModalOpen(false)}
        streak={progress.currentStreak}
        notificationsEnabled={progress.notificationsEnabled}
        reminderHour={progress.dailyReminderHour}
        onUpdateSettings={handleUpdateNotificationSettings}
      />

      {/* About Creator Modal (README style) */}
      <AboutCreatorModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
      />
    </div>
  );
};
