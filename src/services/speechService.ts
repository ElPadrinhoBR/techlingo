// Robust Speech Synthesis & Audio Pronunciation Service
// Implements Chrome GC fix, resume() fix, dynamic voice loading, and Google TTS audio fallback

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private enVoice: SpeechSynthesisVoice | null = null;
  private isSupported: boolean = false;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private fallbackAudio: HTMLAudioElement | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isSupported = true;
      this.loadVoices();

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return null;

    // Prioritize natural English voices (US / UK)
    const preferred =
      voices.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Online'))) ||
      voices.find(v => v.lang.startsWith('en-US')) ||
      voices.find(v => v.lang.startsWith('en-GB')) ||
      voices.find(v => v.lang.startsWith('en')) ||
      voices.find(v => v.default);

    if (preferred) {
      this.enVoice = preferred;
      return preferred;
    }
    return null;
  }

  private cleanTextForSpeech(text: string): string {
    // Remove phonetic brackets and extra punctuation for clean pronunciation
    return text
      .replace(/\/[^/]+\//g, '')
      .replace(/Sev-1/g, 'Severity 1')
      .replace(/GTI/g, 'IT Management')
      .replace(/[()]/g, ' ')
      .trim();
  }

  // Fallback using HTMLAudioElement if Web Speech synthesis fails or has no English voice
  private playFallbackAudio(text: string): Promise<void> {
    return new Promise((resolve) => {
      try {
        if (this.fallbackAudio) {
          this.fallbackAudio.pause();
          this.fallbackAudio.currentTime = 0;
        }

        const encoded = encodeURIComponent(text);
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encoded}`;
        
        const audio = new Audio(url);
        this.fallbackAudio = audio;

        audio.onended = () => resolve();
        audio.onerror = () => {
          console.warn('Fallback audio failed or blocked.');
          resolve();
        };

        audio.play().catch((err) => {
          console.warn('Audio play prevented:', err);
          resolve();
        });
      } catch (e) {
        console.warn('Fallback audio error:', e);
        resolve();
      }
    });
  }

  public async speak(rawText: string, rate: number = 0.9): Promise<void> {
    const text = this.cleanTextForSpeech(rawText);
    if (!text) return;

    if (!this.isSupported || !this.synth) {
      return this.playFallbackAudio(text);
    }

    return new Promise((resolve) => {
      try {
        // Fix Chrome stuck speech synthesis
        this.synth!.resume();

        // If voices were not loaded at startup, try to load now
        const voice = this.enVoice || this.loadVoices();

        const utterance = new SpeechSynthesisUtterance(text);
        this.activeUtterance = utterance; // Retain reference to prevent garbage collection bug

        if (voice) {
          utterance.voice = voice;
          utterance.lang = voice.lang;
        } else {
          utterance.lang = 'en-US';
        }

        utterance.rate = rate;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        let hasEnded = false;

        const finish = () => {
          if (!hasEnded) {
            hasEnded = true;
            this.activeUtterance = null;
            resolve();
          }
        };

        utterance.onend = finish;

        utterance.onerror = (e) => {
          console.warn('Web Speech synthesis error, trying fallback audio...', e);
          finish();
          this.playFallbackAudio(text);
        };

        // Safety timeout in case browser never fires onend
        const timeout = setTimeout(() => {
          if (!hasEnded) {
            console.warn('Speech timeout, falling back to audio.');
            this.synth?.cancel();
            finish();
            this.playFallbackAudio(text);
          }
        }, 4000);

        // Cancel previous utterance and trigger speak
        this.synth!.cancel();
        setTimeout(() => {
          if (this.synth) {
            this.synth.resume();
            this.synth.speak(utterance);
          }
        }, 30);
      } catch (err) {
        console.error('SpeechService speak exception:', err);
        this.playFallbackAudio(text).then(resolve);
      }
    });
  }

  public stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.fallbackAudio) {
      this.fallbackAudio.pause();
    }
    this.activeUtterance = null;
  }
}

export const speechService = new SpeechService();
