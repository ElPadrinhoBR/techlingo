import React from 'react';
import { PenTool, Volume2 } from 'lucide-react';
import { FillBlankExercise as FillBlankExerciseType } from '../../types';
import { speechService } from '../../services/speechService';
import { soundService } from '../../services/soundService';

interface Props {
  exercise: FillBlankExerciseType;
  selectedWord: string | null;
  onSelect: (word: string) => void;
  isChecked: boolean;
}

export const FillBlankExercise: React.FC<Props> = ({
  exercise,
  selectedWord,
  onSelect,
  isChecked
}) => {
  const fullSentence = `${exercise.sentenceBefore} ${selectedWord || '...'} ${exercise.sentenceAfter}`;

  const handlePlaySentence = () => {
    soundService.playClick();
    speechService.speak(fullSentence);
  };

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 800, fontSize: '0.85rem' }}>
          <PenTool size={16} />
          Preencha a Lacuna no Relatório de TI
        </div>
        <h3 style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 800 }}>
          {exercise.prompt}
        </h3>
      </div>

      {/* Sentence with Slot */}
      <div style={{
        backgroundColor: '#0f172a',
        border: '2px solid #1e293b',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div style={{
          fontSize: '1.25rem',
          lineHeight: '1.8',
          color: '#f8fafc',
          fontWeight: 700
        }}>
          {exercise.sentenceBefore}{' '}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '110px',
            padding: '0.2rem 0.75rem',
            margin: '0 0.25rem',
            borderRadius: '0.5rem',
            borderBottom: '3px solid #38bdf8',
            backgroundColor: selectedWord ? '#1e293b' : '#172033',
            color: selectedWord
              ? isChecked
                ? selectedWord.toLowerCase() === exercise.correctAnswer.toLowerCase()
                  ? '#10b981'
                  : '#ef4444'
                : '#38bdf8'
              : '#64748b',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800
          }}>
            {selectedWord || '__________'}
          </span>{' '}
          {exercise.sentenceAfter}
        </div>

        {/* Translation in Portuguese */}
        <div style={{
          fontSize: '0.9rem',
          color: '#94a3b8',
          borderTop: '1px solid #1e293b',
          paddingTop: '0.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>💬 Tradução: {exercise.translation}</span>
          <button
            onClick={handlePlaySentence}
            title="Ouvir frase em inglês"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#38bdf8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.25rem'
            }}
          >
            <Volume2 size={18} />
          </button>
        </div>
      </div>

      {/* Options word bank */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        justifyContent: 'center',
        marginTop: '0.5rem'
      }}>
        {exercise.options.map((option, idx) => {
          const isSelected = selectedWord === option;
          return (
            <button
              key={idx}
              disabled={isChecked}
              onClick={() => {
                soundService.playClick();
                speechService.speak(option);
                onSelect(option);
              }}
              className={`btn-3d ${isSelected ? 'btn-3d-blue' : 'btn-3d-secondary'}`}
              style={{
                fontSize: '1rem',
                padding: '0.75rem 1.5rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
