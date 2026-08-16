import React from 'react';
import { Volume2, HelpCircle } from 'lucide-react';
import { MultipleChoiceExercise as MultipleChoiceExerciseType } from '../../types';
import { speechService } from '../../services/speechService';
import { soundService } from '../../services/soundService';

interface Props {
  exercise: MultipleChoiceExerciseType;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  isChecked: boolean;
}

export const MultipleChoiceExercise: React.FC<Props> = ({
  exercise,
  selectedIndex,
  onSelect,
  isChecked
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = React.useState<boolean>(false);

  const handlePlayAudio = async (e: React.MouseEvent, word: string) => {
    e.stopPropagation();
    setIsPlayingAudio(true);
    await speechService.speak(word);
    setIsPlayingAudio(false);
  };

  return (
    <div className="animate-pop-in" style={{
      maxWidth: '600px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }}>
      {/* Question / Prompt */}
      <div style={{
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.25rem',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontWeight: 800, fontSize: '0.85rem' }}>
          <HelpCircle size={16} />
          Pergunta de Múltipla Escolha
        </div>

        <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', fontWeight: 800, lineHeight: 1.4 }}>
          {exercise.prompt}
        </h3>

        {exercise.audioPronunciation && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: '#0f172a',
            padding: '0.75rem 1rem',
            borderRadius: '0.75rem',
            border: '1px solid #1e293b'
          }}>
            <button
              onClick={(e) => handlePlayAudio(e, exercise.audioPronunciation!)}
              className={`btn-3d ${isPlayingAudio ? 'btn-3d-green' : 'btn-3d-blue'}`}
              style={{
                width: '36px',
                height: '36px',
                padding: 0,
                borderRadius: '50%',
                flexShrink: 0,
                transform: isPlayingAudio ? 'scale(1.1)' : 'scale(1)'
              }}
            >
              <Volume2 size={18} />
            </button>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: '#67e8f9', fontWeight: 700 }}>
              {exercise.audioPronunciation}
            </span>
          </div>
        )}
      </div>

      {/* Options List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {exercise.options.map((option, index) => {
          let stateClass = '';
          if (isChecked) {
            if (index === exercise.correctIndex) {
              stateClass = 'correct';
            } else if (index === selectedIndex) {
              stateClass = 'incorrect';
            }
          } else if (index === selectedIndex) {
            stateClass = 'selected';
          }

          return (
            <div
              key={index}
              className={`exercise-option ${stateClass}`}
              onClick={() => {
                if (isChecked) return;
                soundService.playClick();
                onSelect(index);
              }}
              style={{ pointerEvents: isChecked ? 'none' : 'auto' }}
            >
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                backgroundColor: index === selectedIndex ? '#38bdf8' : '#1e293b',
                color: index === selectedIndex ? '#0f172a' : '#94a3b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '0.85rem',
                flexShrink: 0
              }}>
                {String.fromCharCode(65 + index)}
              </div>

              <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9' }}>
                {option}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
