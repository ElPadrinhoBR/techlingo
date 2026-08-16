// Notification Service for Daily Study Reminders & Streak Preservation

class NotificationService {
  private isSupported: boolean = false;

  constructor() {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      this.isSupported = true;
    }
  }

  public async requestPermission(): Promise<boolean> {
    if (!this.isSupported) return false;
    try {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    } catch (e) {
      console.warn('Error requesting notification permission:', e);
      return false;
    }
  }

  public getPermissionStatus(): NotificationPermission {
    if (!this.isSupported) return 'denied';
    return Notification.permission;
  }

  public sendStudyReminder(streak: number = 1): boolean {
    if (!this.isSupported || Notification.permission !== 'granted') {
      return false;
    }

    try {
      const messages = [
        `🔥 Sua ofensiva de ${streak} dias precisa ser mantida! Pratique 5 minutos de inglês de TI hoje no TechLingo.`,
        `🚀 Bora aprender novos termos de GTI e Python? 5 minutos diários aceleram sua carreira!`,
        `💡 Hora do TechLingo! Novos termos e mnemônicos estão esperando por você.`,
        `⚡ Não deixe sua energia cair! Treine termos técnicos e recupere vidas agora.`
      ];

      const randomMsg = messages[Math.floor(Math.random() * messages.length)];

      const notification = new Notification('TechLingo - Hora de Praticar! 🔥', {
        body: randomMsg,
        icon: '/favicon.svg',
        badge: '/favicon.svg',
        tag: 'techlingo-daily-study',
        requireInteraction: false
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      return true;
    } catch (e) {
      console.error('Failed to trigger notification:', e);
      return false;
    }
  }

  public checkDailyReminder(lastActiveDate: string, currentStreak: number) {
    const today = new Date().toISOString().split('T')[0];
    if (lastActiveDate !== today && this.getPermissionStatus() === 'granted') {
      this.sendStudyReminder(currentStreak);
    }
  }
}

export const notificationService = new NotificationService();
