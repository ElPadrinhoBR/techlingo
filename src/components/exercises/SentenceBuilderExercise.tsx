import React from 'react';
import { Shuffle, Volume2 } from 'lucide-react';
import { SentenceBuilderExercise as SentenceBuilderExerciseType } from '../../types';
import { speechService } from '../../services/speechService';
import { soundService } from '../../services/soundService';

interface Props {
  exercise: SentenceBuilderExerciseType;
  selectedWords: string[];
  onWordToggle: (word: string, fromBank: boolean, index: number) => void;
  isChecked: boolean;
}

export const SentenceBuilderExercise: React.FC<Props> = ({
  exercise,
  selectedWords,
  onWordToggle,
  isChecked
}) => {
  const handlePlayAudio = () => {
    soundService.playClick();
    if (exercise.audioPronunciation) {
      speechService.speak(exercise.audioPronunciation);
    } else {
      speechService.speak(exercise.correctSentence.join(' '));
    }
  };

  // Keep track of which scrambled words have been placed
  const bankWords = exercise.scrambledWords.map((word, originalIndex) => {
    const isUsed = selectedWords.includes(word);
    return { word, originalIndex, isUsed };
  });

  return (
    <div className="animate-pop-in" style={{
      maxWidth: '620px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }}>
      {/* Exercise Prompt */}
      <div style={{
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.25rem',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a855f7', fontWeight: 800, fontSize: '0.85rem' }}>
          <Shuffle size={16} />
          Construção de Frase Técnica
        </div>
        <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 800 }}>
          {exercise.prompt}
        </h3>
        <p style={{ fontSize: '1rem', color: '#38bdf8', fontWeight: 700, marginTop: '0.2rem' }}>
          "{exercise.portugueseTranslation}"
        </p>
      </div>

      {/* Assembly Area (Slots) */}
      <div style={{
        minHeight: '90px',
        backgroundColor: '#0f172a',
        border: '2px dashed #243253',
        borderRadius: '1rem',
        padding: '1rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        alignItems: 'center'
      }}>
        {selectedWords.length === 0 ? (
          <span style={{ color: '#475569', fontSize: '0.95rem', fontWeight: 600, margin: 'auto' }}>
            Toque nas palavras abaixo para montar a frase
          </span>
        ) : (
          selectedWords.map((word, idx) => (
            <button
              key={idx}
              disabled={isChecked}
              onClick={() => {
                soundService.playClick();
                onWordToggle(word, false, idx);
              }}
              className="btn-3d btn-3d-blue"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.95rem',
                borderRadius: '0.75rem'
              }}
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Word Bank */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.6rem',
        justifyContent: 'center',
        marginTop: '0.5rem'
      }}>
        {exercise.scrambledWords.map((word, idx) => {
          const isUsed = selectedWords.includes(word);
          return (
            <button
              key={idx}
              disabled={isUsed || isChecked}
              onClick={() => {
                soundService.playClick();
                speechService.speak(word);
                onWordToggle(word, true, idx);
              }}
              className="btn-3d btn-3d-secondary"
              style={{
                padding: '0.6rem 1.1rem',
                fontSize: '0.95rem',
                opacity: isUsed ? 0.25 : 1,
                cursor: isUsed ? 'default' : 'pointer'
              }}
            >
              {word}
            </button>
          );
        })}
      </div>
    </div>
  );
};
