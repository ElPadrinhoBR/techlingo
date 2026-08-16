import React, { useState, useEffect } from 'react';
import { X, Heart, CheckCircle2, AlertCircle, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Lesson, Exercise } from '../types';
import { ConceptCard } from './ConceptCard';
import { MultipleChoiceExercise } from './exercises/MultipleChoiceExercise';
import { MatchPairsExercise } from './exercises/MatchPairsExercise';
import { FillBlankExercise } from './exercises/FillBlankExercise';
import { SentenceBuilderExercise } from './exercises/SentenceBuilderExercise';
import { ScenarioExercise } from './exercises/ScenarioExercise';
import { soundService } from '../services/soundService';

interface LessonModalProps {
  lesson: Lesson;
  hearts: number;
  onClose: () => void;
  onLessonComplete: (lessonId: string, xpEarned: number) => void;
  onLoseHeart: () => void;
  onRefillHearts: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  hearts,
  onClose,
  onLessonComplete,
  onLoseHeart,
  onRefillHearts
}) => {
  // Sequence: Concept Pills first, then Exercises
  const totalConcepts = lesson.conceptPills.length;
  const totalExercises = lesson.exercises.length;
  const totalSteps = totalConcepts + totalExercises;

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCurrentCorrect, setIsCurrentCorrect] = useState<boolean>(false);
  const [explanationText, setExplanationText] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Form states for exercises
  const [mcSelectedIndex, setMcSelectedIndex] = useState<number | null>(null);
  const [fillSelectedWord, setFillSelectedWord] = useState<string | null>(null);
  const [sentenceWords, setSentenceWords] = useState<string[]>([]);
  const [scenarioSelectedId, setScenarioSelectedId] = useState<string | null>(null);
  const [matchPairsDone, setMatchPairsDone] = useState<boolean>(false);

  const isConceptStep = currentStepIndex < totalConcepts;
  const currentConcept = isConceptStep ? lesson.conceptPills[currentStepIndex] : null;
  const currentExercise: Exercise | null = !isConceptStep
    ? lesson.exercises[currentStepIndex - totalConcepts]
    : null;

  // Reset exercise state on step change
  const resetExerciseState = () => {
    setIsChecked(false);
    setIsCurrentCorrect(false);
    setExplanationText('');
    setMcSelectedIndex(null);
    setFillSelectedWord(null);
    setSentenceWords([]);
    setScenarioSelectedId(null);
    setMatchPairsDone(false);
  };

  const handleNextStep = () => {
    if (currentStepIndex + 1 >= totalSteps) {
      // Lesson Finished!
      setIsCompleted(true);
      soundService.playComplete();
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.log('Confetti triggered', e);
      }
      onLessonComplete(lesson.id, lesson.xpReward);
    } else {
      resetExerciseState();
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleCheckAnswer = () => {
    if (!currentExercise || isChecked) return;

    let correct = false;
    let explanation = '';

    switch (currentExercise.type) {
      case 'multiple_choice':
        if (mcSelectedIndex === null) return;
        correct = mcSelectedIndex === currentExercise.correctIndex;
        explanation = currentExercise.explanation;
        break;

      case 'fill_blank':
        if (!fillSelectedWord) return;
        correct = fillSelectedWord.toLowerCase() === currentExercise.correctAnswer.toLowerCase();
        explanation = currentExercise.explanation;
        break;

      case 'sentence_builder':
        if (sentenceWords.length === 0) return;
        correct = sentenceWords.join(' ') === currentExercise.correctSentence.join(' ');
        explanation = `Frase correta: "${currentExercise.correctSentence.join(' ')}"`;
        break;

      case 'scenario':
        if (!scenarioSelectedId) return;
        const selectedOpt = currentExercise.options.find(o => o.id === scenarioSelectedId);
        correct = !!selectedOpt?.isCorrect;
        explanation = selectedOpt?.feedback || '';
        break;

      case 'match_pairs':
        correct = matchPairsDone;
        break;
    }

    setIsChecked(true);
    setIsCurrentCorrect(correct);
    setExplanationText(explanation);

    if (correct) {
      soundService.playCorrect();
    } else {
      soundService.playIncorrect();
      soundService.playHeartLost();
      onLoseHeart();
    }
  };

  // Determine if check button can be enabled
  const canCheck = () => {
    if (!currentExercise) return false;
    switch (currentExercise.type) {
      case 'multiple_choice':
        return mcSelectedIndex !== null;
      case 'fill_blank':
        return fillSelectedWord !== null;
      case 'sentence_builder':
        return sentenceWords.length > 0;
      case 'scenario':
        return scenarioSelectedId !== null;
      case 'match_pairs':
        return matchPairsDone;
      default:
        return false;
    }
  };

  const progressPercentage = Math.round((currentStepIndex / totalSteps) * 100);

  if (isCompleted) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0b0f19',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}>
        <div className="animate-pop-in" style={{
          maxWidth: '480px',
          width: '100%',
          backgroundColor: '#131b2e',
          border: '2px solid #243253',
          borderRadius: '1.5rem',
          padding: '2rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          boxShadow: '0 12px 36px rgba(0,0,0,0.5)'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#064e3b',
            border: '3px solid #10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#10b981'
          }}>
            <Award size={46} />
          </div>

          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff' }}>
              Lição Concluída!
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.35rem' }}>
              Você dominou novos termos e conceitos de Gestão de TI.
            </p>
          </div>

          {/* Reward cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            width: '100%'
          }}>
            <div style={{
              backgroundColor: '#0f172a',
              border: '1.5px solid #1e293b',
              padding: '1rem',
              borderRadius: '1rem',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase' }}>
                XP Ganho
              </span>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#38bdf8', marginTop: '0.2rem' }}>
                +{lesson.xpReward} XP
              </div>
            </div>

            <div style={{
              backgroundColor: '#0f172a',
              border: '1.5px solid #1e293b',
              padding: '1rem',
              borderRadius: '1rem',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>
                Status
              </span>
              <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#10b981', marginTop: '0.3rem' }}>
                100% OK
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundService.playClick();
              onClose();
            }}
            className="btn-3d btn-3d-green"
            style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}
          >
            Continuar para a Trilha
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#0b0f19',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }}>
      {/* Top Header with Progress and Lives */}
      <div style={{
        padding: '1rem 1.5rem',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        gap: '1.25rem',
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto'
      }}>
        <button
          onClick={() => {
            soundService.playClick();
            if (window.confirm('Deseja realmente sair? O progresso desta lição não será salvo.')) {
              onClose();
            }
          }}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          <X size={24} />
        </button>

        {/* Progress bar container */}
        <div style={{
          flex: 1,
          height: '14px',
          backgroundColor: '#1e293b',
          borderRadius: '999px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            height: '100%',
            width: `${progressPercentage}%`,
            backgroundColor: '#10b981',
            borderRadius: '999px',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }} />
        </div>

        {/* Hearts counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          color: '#ef4444',
          fontWeight: 800,
          fontSize: '1rem'
        }}>
          <Heart size={20} fill="#ef4444" />
          <span>{hearts}</span>
        </div>
      </div>

      {/* Out of Hearts Warning */}
      {hearts <= 0 ? (
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            maxWidth: '460px',
            textAlign: 'center',
            backgroundColor: '#131b2e',
            border: '2px solid #ef4444',
            borderRadius: '1.5rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            alignItems: 'center'
          }}>
            <Heart size={54} color="#ef4444" />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f8fafc' }}>
              Você ficou sem vidas!
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              Recupere vidas praticando termos rápidos no modo treino ou restaurando sua energia.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
              <button
                onClick={() => {
                  onRefillHearts();
                  soundService.playClick();
                }}
                className="btn-3d btn-3d-green"
                style={{ width: '100%' }}
              >
                Recuperar Vidas Gratuitamente
              </button>
              <button
                onClick={onClose}
                className="btn-3d btn-3d-secondary"
                style={{ width: '100%' }}
              >
                Voltar para a Trilha
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Main Step Content Area */
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1.5rem 1.25rem 8rem 1.25rem',
          maxWidth: '800px',
          width: '100%',
          margin: '0 auto'
        }}>
          {isConceptStep && currentConcept && (
            <ConceptCard
              concept={currentConcept}
              onContinue={handleNextStep}
            />
          )}

          {!isConceptStep && currentExercise && (
            <>
              {currentExercise.type === 'multiple_choice' && (
                <MultipleChoiceExercise
                  exercise={currentExercise}
                  selectedIndex={mcSelectedIndex}
                  onSelect={(idx) => setMcSelectedIndex(idx)}
                  isChecked={isChecked}
                />
              )}

              {currentExercise.type === 'match_pairs' && (
                <MatchPairsExercise
                  exercise={currentExercise}
                  onComplete={(done) => {
                    setMatchPairsDone(done);
                    setIsChecked(true);
                    setIsCurrentCorrect(true);
                  }}
                  isChecked={isChecked}
                />
              )}

              {currentExercise.type === 'fill_blank' && (
                <FillBlankExercise
                  exercise={currentExercise}
                  selectedWord={fillSelectedWord}
                  onSelect={(word) => setFillSelectedWord(word)}
                  isChecked={isChecked}
                />
              )}

              {currentExercise.type === 'sentence_builder' && (
                <SentenceBuilderExercise
                  exercise={currentExercise}
                  selectedWords={sentenceWords}
                  onWordToggle={(word, fromBank, index) => {
                    if (fromBank) {
                      setSentenceWords((prev) => [...prev, word]);
                    } else {
                      setSentenceWords((prev) => prev.filter((_, i) => i !== index));
                    }
                  }}
                  isChecked={isChecked}
                />
              )}

              {currentExercise.type === 'scenario' && (
                <ScenarioExercise
                  exercise={currentExercise}
                  selectedOptionId={scenarioSelectedId}
                  onSelect={(id) => setScenarioSelectedId(id)}
                  isChecked={isChecked}
                />
              )}
            </>
          )}
        </div>
      )}

      {/* Bottom Floating Feedback Bar (Only during exercises) */}
      {!isConceptStep && hearts > 0 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: isChecked
            ? isCurrentCorrect
              ? '#064e3b'
              : '#7f1d1d'
            : '#0f172a',
          borderTop: `2px solid ${
            isChecked
              ? isCurrentCorrect
                ? '#10b981'
                : '#ef4444'
              : '#1e293b'
          }`,
          padding: '1.25rem',
          zIndex: 45,
          transition: 'all 0.2s ease'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {/* Feedback Message */}
            <div style={{ flex: 1, minWidth: '220px' }}>
              {isChecked ? (
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: isCurrentCorrect ? '#34d399' : '#fca5a5',
                    fontWeight: 900,
                    fontSize: '1.1rem'
                  }}>
                    {isCurrentCorrect ? (
                      <>
                        <CheckCircle2 size={22} />
                        Excelente! Resposta correta!
                      </>
                    ) : (
                      <>
                        <AlertCircle size={22} />
                        Não foi dessa vez...
                      </>
                    )}
                  </div>
                  {explanationText && (
                    <p style={{
                      color: isCurrentCorrect ? '#a7f3d0' : '#fecaca',
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                      lineHeight: '1.4'
                    }}>
                      {explanationText}
                    </p>
                  )}
                </div>
              ) : (
                <span style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600 }}>
                  Selecione sua resposta para validar
                </span>
              )}
            </div>

            {/* Action Button */}
            {!isChecked ? (
              <button
                disabled={!canCheck()}
                onClick={handleCheckAnswer}
                className="btn-3d btn-3d-green"
                style={{
                  minWidth: '150px',
                  opacity: canCheck() ? 1 : 0.4,
                  cursor: canCheck() ? 'pointer' : 'not-allowed'
                }}
              >
                Verificar
              </button>
            ) : (
              <button
                onClick={handleNextStep}
                className={`btn-3d ${isCurrentCorrect ? 'btn-3d-green' : 'btn-3d-red'}`}
                style={{ minWidth: '150px' }}
              >
                Continuar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
