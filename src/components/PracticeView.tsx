import React, { useState } from 'react';
import { Dumbbell, Volume2, RotateCw, CheckCircle2, Heart, Zap, Sparkles, HelpCircle, Layers } from 'lucide-react';
import { glossaryData } from '../data/glossary';
import { speechService } from '../services/speechService';
import { soundService } from '../services/soundService';

interface PracticeViewProps {
  hearts: number;
  maxHearts: number;
  onRestoreHeart: () => void;
  onAddXp: (amount: number) => void;
}

type PracticeMode = 'flashcards' | 'quiz';

export const PracticeView: React.FC<PracticeViewProps> = ({
  hearts,
  maxHearts,
  onRestoreHeart,
  onAddXp
}) => {
  const [mode, setMode] = useState<PracticeMode>('flashcards');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  // Flashcards state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [drillScore, setDrillScore] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Speed Quiz state
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isQuizChecked, setIsQuizChecked] = useState<boolean>(false);

  const categories = [
    'Todas',
    'Infra & Cloud',
    'Ágil & Projetos',
    'Governança & ITIL',
    'Segurança & Dados',
    'Operações & Negócios',
    'Python & Código'
  ];

  const filteredItems = glossaryData.filter(item => {
    return selectedCategory === 'Todas' || item.category === selectedCategory;
  });

  const activeItems = filteredItems.length > 0 ? filteredItems : glossaryData;
  const currentItem = activeItems[currentIndex % activeItems.length];

  // Handle Flashcard Action
  const handleNextCard = (known: boolean) => {
    soundService.playClick();
    if (known) {
      soundService.playCorrect();
      setDrillScore((prev) => prev + 1);
      onAddXp(5);

      if (hearts < maxHearts) {
        onRestoreHeart();
      }
    } else {
      soundService.playIncorrect();
    }

    setIsFlipped(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePlayAudio = async (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    setIsSpeaking(true);
    await speechService.speak(text);
    setIsSpeaking(false);
  };

  // Generate 4 multiple choice options for current quiz question
  const currentQuizItem = activeItems[quizIndex % activeItems.length];
  const otherItems = activeItems.filter(i => i.id !== currentQuizItem.id);
  const shuffledOthers = [...otherItems].sort(() => 0.5 - Math.random()).slice(0, 3);
  const quizOptions = React.useMemo(() => {
    return [currentQuizItem, ...shuffledOthers].sort(() => 0.5 - Math.random());
  }, [quizIndex, selectedCategory]);

  const handleSelectQuizOption = (optIndex: number) => {
    if (isQuizChecked) return;
    soundService.playClick();
    setSelectedAnswer(optIndex);
    setIsQuizChecked(true);

    const isCorrect = quizOptions[optIndex].id === currentQuizItem.id;
    if (isCorrect) {
      soundService.playCorrect();
      setQuizScore((prev) => prev + 1);
      onAddXp(10);
      if (hearts < maxHearts) {
        onRestoreHeart();
      }
    } else {
      soundService.playIncorrect();
    }
  };

  const handleNextQuizQuestion = () => {
    soundService.playClick();
    setSelectedAnswer(null);
    setIsQuizChecked(false);
    setQuizIndex((prev) => prev + 1);
  };

  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto',
      padding: '1.5rem 1rem 6rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      {/* Header Banner */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '2px solid var(--bg-border)',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#f59e0b' }}>
            <Dumbbell size={26} />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main)' }}>
              Arena de Treino & Recuperação de Vidas
            </h2>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-card-alt)',
            padding: '0.4rem 0.8rem',
            borderRadius: '0.75rem',
            border: '1px solid var(--bg-border-light)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#ef4444',
            fontWeight: 800,
            fontSize: '0.9rem'
          }}>
            <Heart size={18} fill="#ef4444" />
            Vidas: {hearts}/{maxHearts}
          </div>
        </div>

        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Treine termos de Gestão de TI e programação sem perder vidas. Cada acerto concede <strong>+5 a +10 XP</strong> e <strong>restaura 1 vida</strong>!
        </p>

        {/* Mode Selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem',
          backgroundColor: 'var(--bg-card-alt)',
          padding: '0.35rem',
          borderRadius: '0.85rem'
        }}>
          <button
            onClick={() => {
              soundService.playClick();
              setMode('flashcards');
            }}
            className="btn-3d"
            style={{
              backgroundColor: mode === 'flashcards' ? '#10b981' : 'transparent',
              color: mode === 'flashcards' ? '#ffffff' : 'var(--text-muted)',
              boxShadow: mode === 'flashcards' ? '0 3px 0 #047857' : 'none',
              padding: '0.6rem',
              fontSize: '0.85rem',
              borderRadius: '0.65rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <Layers size={16} />
            <span>Flashcards Interativos</span>
          </button>

          <button
            onClick={() => {
              soundService.playClick();
              setMode('quiz');
            }}
            className="btn-3d"
            style={{
              backgroundColor: mode === 'quiz' ? '#38bdf8' : 'transparent',
              color: mode === 'quiz' ? '#ffffff' : 'var(--text-muted)',
              boxShadow: mode === 'quiz' ? '0 3px 0 #0284c7' : 'none',
              padding: '0.6rem',
              fontSize: '0.85rem',
              borderRadius: '0.65rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.4rem'
            }}
          >
            <HelpCircle size={16} />
            <span>Speed Quiz Rápido</span>
          </button>
        </div>

        {/* Category Filter Chips */}
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          overflowX: 'auto',
          paddingTop: '0.25rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundService.playClick();
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setQuizIndex(0);
                setIsFlipped(false);
                setSelectedAnswer(null);
                setIsQuizChecked(false);
              }}
              style={{
                whiteSpace: 'nowrap',
                padding: '0.35rem 0.75rem',
                borderRadius: '999px',
                border: selectedCategory === cat ? '1px solid #10b981' : '1px solid var(--bg-border)',
                backgroundColor: selectedCategory === cat ? '#064e3b' : 'var(--bg-card-alt)',
                color: selectedCategory === cat ? '#34d399' : 'var(--text-muted)',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* MODE 1: FLASHCARDS */}
      {mode === 'flashcards' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div
            onClick={() => {
              soundService.playClick();
              setIsFlipped(!isFlipped);
            }}
            style={{
              minHeight: '320px',
              backgroundColor: 'var(--bg-card)',
              border: '2px solid var(--bg-border)',
              borderRadius: '1.5rem',
              padding: '2rem 1.5rem',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              userSelect: 'none'
            }}
          >
            <span style={{
              fontSize: '0.75rem',
              color: 'var(--text-dim)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              textTransform: 'uppercase'
            }}>
              <RotateCw size={12} />
              Toque no cartão para virar
            </span>

            {!isFlipped ? (
              <div className="animate-pop-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  backgroundColor: 'var(--bg-card-alt)',
                  color: '#0284c7',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  border: '1px solid var(--bg-border-light)'
                }}>
                  {currentItem.category}
                </span>

                <h3 style={{
                  fontSize: '2.25rem',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)'
                }}>
                  {currentItem.term}
                </h3>

                <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  {currentItem.phonetic}
                </span>

                <button
                  onClick={(e) => handlePlayAudio(e, currentItem.term)}
                  className={`btn-3d ${isSpeaking ? 'btn-3d-green' : 'btn-3d-blue'}`}
                  style={{
                    width: '46px',
                    height: '46px',
                    padding: 0,
                    borderRadius: '50%',
                    marginTop: '0.5rem',
                    transform: isSpeaking ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  <Volume2 size={22} />
                </button>
              </div>
            ) : (
              <div className="animate-pop-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10b981' }}>
                  {currentItem.translation}
                </span>

                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.5', maxWidth: '480px' }}>
                  {currentItem.itDefinition}
                </p>

                <div style={{
                  backgroundColor: 'var(--bg-card-alt)',
                  padding: '0.6rem 1rem',
                  borderRadius: '0.75rem',
                  borderLeft: '3px solid #3b82f6',
                  fontSize: '0.85rem',
                  color: 'var(--text-main)',
                  textAlign: 'left',
                  marginTop: '0.5rem'
                }}>
                  <strong style={{ color: '#2563eb' }}>Gestão & Prática:</strong> {currentItem.managementContext}
                </div>
              </div>
            )}

            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600 }}>
              Cartão {((currentIndex) % activeItems.length) + 1} de {activeItems.length} | Acertos: {drillScore}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
              onClick={() => handleNextCard(false)}
              className="btn-3d btn-3d-secondary"
              style={{ padding: '1rem', fontSize: '1rem' }}
            >
              Ainda com dúvida
            </button>

            <button
              onClick={() => handleNextCard(true)}
              className="btn-3d btn-3d-green"
              style={{ padding: '1rem', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <CheckCircle2 size={20} />
              Já sei esse termo! (+5 XP)
            </button>
          </div>
        </div>
      )}

      {/* MODE 2: SPEED QUIZ */}
      {mode === 'quiz' && (
        <div className="animate-pop-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Question Card */}
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '2px solid var(--bg-border)',
            borderRadius: '1.25rem',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase' }}>
                Questão {((quizIndex) % activeItems.length) + 1} • Placar: {quizScore}
              </span>
              <button
                onClick={(e) => handlePlayAudio(e, currentQuizItem.term)}
                className="btn-3d btn-3d-blue"
                style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
              >
                <Volume2 size={18} />
              </button>
            </div>

            <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main)' }}>
              Qual o significado de <span style={{ color: '#0284c7', fontFamily: 'var(--font-mono)' }}>"{currentQuizItem.term}"</span>?
            </h3>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {quizOptions.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              let stateClass = '';
              if (isQuizChecked) {
                if (opt.id === currentQuizItem.id) {
                  stateClass = 'correct';
                } else if (isSelected) {
                  stateClass = 'incorrect';
                }
              }

              return (
                <div
                  key={opt.id}
                  className={`exercise-option ${stateClass}`}
                  onClick={() => handleSelectQuizOption(idx)}
                  style={{ pointerEvents: isQuizChecked ? 'none' : 'auto' }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? '#38bdf8' : 'var(--bg-card-alt)',
                    color: isSelected ? '#ffffff' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '0.85rem',
                    flexShrink: 0
                  }}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {opt.translation} — <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{opt.itDefinition.substring(0, 75)}...</span>
                  </span>
                </div>
              );
            })}
          </div>

          {isQuizChecked && (
            <button
              onClick={handleNextQuizQuestion}
              className="btn-3d btn-3d-green"
              style={{ width: '100%', padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}
            >
              Próxima Pergunta (+10 XP)
            </button>
          )}
        </div>
      )}
    </div>
  );
};
