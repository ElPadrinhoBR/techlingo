import React, { useState, useEffect, useMemo } from 'react';
import { Volume2, Layers } from 'lucide-react';
import { MatchPairsExercise as MatchPairsExerciseType } from '../../types';
import { speechService } from '../../services/speechService';
import { soundService } from '../../services/soundService';

interface Props {
  exercise: MatchPairsExerciseType;
  onComplete: (isSuccess: boolean) => void;
  isChecked: boolean;
}

export const MatchPairsExercise: React.FC<Props> = ({ exercise, onComplete }) => {
  const [selectedEn, setSelectedEn] = useState<string | null>(null);
  const [selectedPt, setSelectedPt] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<{ en: string; pt: string } | null>(null);

  // Shuffle right-side options once
  const shuffledPt = useMemo(() => {
    return [...exercise.pairs].sort(() => Math.random() - 0.5);
  }, [exercise.pairs]);

  const handleSelectEn = (id: string, text: string) => {
    if (matchedIds.includes(id)) return;
    soundService.playClick();
    speechService.speak(text);
    setSelectedEn(id);

    if (selectedPt) {
      checkPair(id, selectedPt);
    }
  };

  const handleSelectPt = (id: string) => {
    if (matchedIds.includes(id)) return;
    soundService.playClick();
    setSelectedPt(id);

    if (selectedEn) {
      checkPair(selectedEn, id);
    }
  };

  const checkPair = (enId: string, ptId: string) => {
    if (enId === ptId) {
      // Correct Match!
      soundService.playCorrect();
      const newMatched = [...matchedIds, enId];
      setMatchedIds(newMatched);
      setSelectedEn(null);
      setSelectedPt(null);

      if (newMatched.length === exercise.pairs.length) {
        onComplete(true);
      }
    } else {
      // Incorrect Match
      soundService.playIncorrect();
      setWrongPair({ en: enId, pt: ptId });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedEn(null);
        setSelectedPt(null);
      }, 700);
    }
  };

  return (
    <div className="animate-pop-in" style={{
      maxWidth: '650px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 800, fontSize: '0.85rem' }}>
          <Layers size={16} />
          Associação de Pares Técnicos
        </div>
        <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', fontWeight: 800 }}>
          {exercise.prompt}
        </h3>
      </div>

      {/* Two Columns for Pairs */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      }}>
        {/* Left Column: English Terms */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', textAlign: 'center' }}>
            Termo em Inglês
          </div>
          {exercise.pairs.map((pair) => {
            const isMatched = matchedIds.includes(pair.id);
            const isSelected = selectedEn === pair.id;
            const isWrong = wrongPair?.en === pair.id;

            return (
              <button
                key={pair.id}
                disabled={isMatched}
                onClick={() => handleSelectEn(pair.id, pair.english)}
                className={`exercise-option ${
                  isMatched ? 'correct' : isWrong ? 'incorrect' : isSelected ? 'selected' : ''
                }`}
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  opacity: isMatched ? 0.6 : 1,
                  cursor: isMatched ? 'default' : 'pointer'
                }}
              >
                <span style={{ fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                  {pair.english}
                </span>
                <Volume2 size={16} color="#38bdf8" />
              </button>
            );
          })}
        </div>

        {/* Right Column: Portuguese Meanings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', textAlign: 'center' }}>
            Significado em Gestão de TI
          </div>
          {shuffledPt.map((pair) => {
            const isMatched = matchedIds.includes(pair.id);
            const isSelected = selectedPt === pair.id;
            const isWrong = wrongPair?.pt === pair.id;

            return (
              <button
                key={pair.id}
                disabled={isMatched}
                onClick={() => handleSelectPt(pair.id)}
                className={`exercise-option ${
                  isMatched ? 'correct' : isWrong ? 'incorrect' : isSelected ? 'selected' : ''
                }`}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  opacity: isMatched ? 0.6 : 1,
                  cursor: isMatched ? 'default' : 'pointer'
                }}
              >
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>
                  {pair.portuguese}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
