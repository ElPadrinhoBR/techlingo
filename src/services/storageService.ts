// Dual-Layer Progress Storage Engine for Web & Android/iOS Native (Capacitor Preferences)
import { Preferences } from '@capacitor/preferences';
import { UserProgress } from '../types';

export const STORAGE_KEY = 'techlingo_user_progress_v4';
const LEGACY_KEYS = [
  'techlingo_user_progress_v3',
  'techlingo_user_progress_v2',
  'techlingo_user_progress'
];

export const defaultProgress: UserProgress = {
  completedLessonIds: [],
  currentStreak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalXp: 0,
  hearts: 5,
  maxHearts: 5,
  gems: 50,
  unlockedAchievements: [],
  glossaryFavorites: [],
  memorizedExpressionIds: [],
  activeTrackId: 'gti',
  soundEnabled: true,
  notificationsEnabled: false,
  dailyReminderHour: 19,
  theme: 'dark'
};

class StorageService {
  /**
   * Synchronously load progress from localStorage or migrate from legacy keys.
   */
  public loadInitialProgress(): UserProgress {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        // Try current storage key
        let saved = localStorage.getItem(STORAGE_KEY);

        // If not found, check legacy keys for automatic migration
        if (!saved) {
          for (const legKey of LEGACY_KEYS) {
            const legData = localStorage.getItem(legKey);
            if (legData) {
              saved = legData;
              // Migrate to current key
              localStorage.setItem(STORAGE_KEY, legData);
              break;
            }
          }
        }

        if (saved) {
          const parsed = JSON.parse(saved);
          return this.sanitizeProgress(parsed);
        }
      }
    } catch (e) {
      console.warn('LocalStorage load warning:', e);
    }
    return defaultProgress;
  }

  /**
   * Asynchronously load and synchronize from native Capacitor Preferences (SharedPreferences on Android).
   */
  public async loadNativeProgress(): Promise<UserProgress | null> {
    try {
      const { value } = await Preferences.get({ key: STORAGE_KEY });
      if (value) {
        const parsed = JSON.parse(value);
        const sanitized = this.sanitizeProgress(parsed);
        // Sync back to localStorage as cache
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
        }
        return sanitized;
      }
    } catch (e) {
      console.warn('Native Preferences load warning:', e);
    }
    return null;
  }

  /**
   * Persist progress to both LocalStorage (instant synchronous) and Native Preferences (async disk write).
   */
  public async saveProgress(progress: UserProgress): Promise<void> {
    const sanitized = this.sanitizeProgress(progress);
    const serialized = JSON.stringify(sanitized);

    // 1. Instant sync write to LocalStorage
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(STORAGE_KEY, serialized);
      }
    } catch (e) {
      console.warn('LocalStorage save warning:', e);
    }

    // 2. Native OS write via Capacitor Preferences (SharedPreferences on Android)
    try {
      await Preferences.set({
        key: STORAGE_KEY,
        value: serialized
      });
    } catch (e) {
      console.warn('Native Preferences save warning:', e);
    }
  }

  /**
   * Sanitize and fill any missing properties from updates
   */
  private sanitizeProgress(data: any): UserProgress {
    if (!data || typeof data !== 'object') return defaultProgress;

    return {
      completedLessonIds: Array.isArray(data.completedLessonIds) ? Array.from(new Set(data.completedLessonIds)) : [],
      currentStreak: typeof data.currentStreak === 'number' && data.currentStreak > 0 ? data.currentStreak : 1,
      lastActiveDate: typeof data.lastActiveDate === 'string' ? data.lastActiveDate : new Date().toISOString().split('T')[0],
      totalXp: typeof data.totalXp === 'number' ? Math.max(0, data.totalXp) : 0,
      hearts: typeof data.hearts === 'number' ? Math.max(0, data.hearts) : 5,
      maxHearts: 5,
      gems: typeof data.gems === 'number' ? data.gems : 50,
      unlockedAchievements: Array.isArray(data.unlockedAchievements) ? data.unlockedAchievements : [],
      glossaryFavorites: Array.isArray(data.glossaryFavorites) ? data.glossaryFavorites : [],
      memorizedExpressionIds: Array.isArray(data.memorizedExpressionIds) ? Array.from(new Set(data.memorizedExpressionIds)) : [],
      activeTrackId: ['gti', 'python', 'algorithms', 'database'].includes(data.activeTrackId) ? data.activeTrackId : 'gti',
      soundEnabled: data.soundEnabled !== false,
      notificationsEnabled: data.notificationsEnabled === true,
      dailyReminderHour: typeof data.dailyReminderHour === 'number' ? data.dailyReminderHour : 19,
      theme: data.theme === 'light' ? 'light' : 'dark'
    };
  }
}

export const storageService = new StorageService();
