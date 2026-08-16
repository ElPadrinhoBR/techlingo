import React from 'react';
import { Briefcase, AlertTriangle, MessageSquareCode } from 'lucide-react';
import { ScenarioExercise as ScenarioExerciseType } from '../../types';
import { soundService } from '../../services/soundService';

interface Props {
  exercise: ScenarioExerciseType;
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
  isChecked: boolean;
}

export const ScenarioExercise: React.FC<Props> = ({
  exercise,
  selectedOptionId,
  onSelect,
  isChecked
}) => {
  return (
    <div className="animate-pop-in" style={{
      maxWidth: '640px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }}>
      {/* Scenario Context Card */}
      <div style={{
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.25rem',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            color: '#f59e0b',
            backgroundColor: '#261b0c',
            padding: '0.25rem 0.6rem',
            borderRadius: '0.5rem',
            border: '1px solid #78350f',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <Briefcase size={13} />
            Simulação de Gestão: {exercise.role}
          </span>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>
            {exercise.contextTitle}
          </span>
        </div>

        {/* Real life scenario box */}
        <div style={{
          backgroundColor: '#0f172a',
          padding: '1rem',
          borderRadius: '0.85rem',
          borderLeft: '4px solid #f59e0b',
          display: 'flex',
          gap: '0.75rem',
          alignItems: 'flex-start'
        }}>
          <AlertTriangle size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.5' }}>
            {exercise.situation}
          </p>
        </div>

        <h4 style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 800, marginTop: '0.25rem' }}>
          {exercise.prompt}
        </h4>
      </div>

      {/* Response Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {exercise.options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          let stateClass = '';
          if (isChecked) {
            if (option.isCorrect) {
              stateClass = 'correct';
            } else if (isSelected) {
              stateClass = 'incorrect';
            }
          } else if (isSelected) {
            stateClass = 'selected';
          }

          return (
            <div
              key={option.id}
              className={`exercise-option ${stateClass}`}
              onClick={() => {
                if (isChecked) return;
                soundService.playClick();
                onSelect(option.id);
              }}
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.4rem',
                pointerEvents: isChecked ? 'none' : 'auto'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MessageSquareCode size={18} color={isSelected ? '#38bdf8' : '#64748b'} />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                  "{option.text}"
                </span>
              </div>

              {isChecked && isSelected && (
                <div style={{
                  fontSize: '0.85rem',
                  color: option.isCorrect ? '#a7f3d0' : '#fecaca',
                  paddingTop: '0.4rem',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  width: '100%'
                }}>
                  💡 {option.feedback}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
