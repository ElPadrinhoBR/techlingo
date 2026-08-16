// Robust Speech Synthesis & Audio Pronunciation Service
// Supports Native Android TTS (via Capacitor), Browser Web Speech API & HTML5 Audio fallback

import { TextToSpeech } from '@capacitor-community/text-to-speech';
import { Capacitor } from '@capacitor/core';

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private enVoice: SpeechSynthesisVoice | null = null;
  private isBrowserSpeechSupported: boolean = false;
  private isNative: boolean = false;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private fallbackAudio: HTMLAudioElement | null = null;

  constructor() {
    this.isNative = Capacitor.isNativePlatform();

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isBrowserSpeechSupported = true;
      this.loadVoices();

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    try {
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
    } catch (e) {
      console.warn('Error loading voices:', e);
    }
    return null;
  }

  private cleanTextForSpeech(text: string): string {
    return text
      .replace(/\/[^/]+\//g, '')
      .replace(/Sev-1/g, 'Severity 1')
      .replace(/GTI/g, 'IT Management')
      .replace(/[()]/g, ' ')
      .trim();
  }

  // Fallback using HTMLAudioElement
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

    // 1. If running as Native Android/iOS App via Capacitor, use Native TextToSpeech
    if (this.isNative || Capacitor.getPlatform() === 'android') {
      try {
        await TextToSpeech.stop();
        await TextToSpeech.speak({
          text: text,
          lang: 'en-US',
          rate: rate,
          pitch: 1.0,
          volume: 1.0,
          category: 'ambient'
        });
        return;
      } catch (nativeErr) {
        console.warn('Capacitor native TTS failed, falling back to Web Speech/Audio:', nativeErr);
      }
    }

    // 2. Desktop Browser Web Speech API
    if (this.isBrowserSpeechSupported && this.synth) {
      return new Promise((resolve) => {
        try {
          this.synth!.resume();
          const voice = this.enVoice || this.loadVoices();

          const utterance = new SpeechSynthesisUtterance(text);
          this.activeUtterance = utterance;

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
          utterance.onerror = () => {
            finish();
            this.playFallbackAudio(text);
          };

          const timeout = setTimeout(() => {
            if (!hasEnded) {
              this.synth?.cancel();
              finish();
              this.playFallbackAudio(text);
            }
          }, 3500);

          this.synth!.cancel();
          setTimeout(() => {
            if (this.synth) {
              this.synth.resume();
              this.synth.speak(utterance);
            }
          }, 20);
        } catch (err) {
          console.warn('Web Speech API error:', err);
          this.playFallbackAudio(text).then(resolve);
        }
      });
    }

    // 3. Fallback online audio stream
    return this.playFallbackAudio(text);
  }

  public async stop(): Promise<void> {
    if (this.isNative) {
      try {
        await TextToSpeech.stop();
      } catch (e) {
        console.warn('Error stopping native TTS:', e);
      }
    }
    if (this.synth) {
      this.synth.cancel();
    }
    if (this.fallbackAudio) {
      this.fallbackAudio.pause();
      this.fallbackAudio.currentTime = 0;
    }
  }
}

export const speechService = new SpeechService();
