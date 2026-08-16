import React, { useState } from 'react';
import { Volume2, Lightbulb, Sparkles, Compass, CheckCircle2 } from 'lucide-react';
import { ConceptPill } from '../types';
import { speechService } from '../services/speechService';

interface ConceptCardProps {
  concept: ConceptPill;
  onContinue: () => void;
}

export const ConceptCard: React.FC<ConceptCardProps> = ({ concept, onContinue }) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const handlePlayAudio = async (text: string) => {
    setIsPlaying(text);
    await speechService.speak(text);
    setIsPlaying(null);
  };

  return (
    <div className="animate-pop-in" style={{
      maxWidth: '560px',
      margin: '0 auto',
      backgroundColor: '#131b2e',
      border: '2px solid #243253',
      borderRadius: '1.5rem',
      padding: '1.5rem',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem'
    }}>
      {/* Header with pill tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          backgroundColor: '#1e293b',
          color: '#38bdf8',
          padding: '0.35rem 0.75rem',
          borderRadius: '999px',
          border: '1px solid #334155',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}>
          <Sparkles size={13} />
          Pílula de Conceito: {concept.category}
        </span>
      </div>

      {/* Main Term & Audio Trigger */}
      <div style={{
        backgroundColor: '#0f172a',
        borderRadius: '1.25rem',
        padding: '1.25rem',
        border: '1.5px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-mono)'
            }}>
              {concept.term}
            </h2>
            {concept.phonetic && (
              <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic' }}>
                {concept.phonetic}
              </span>
            )}
          </div>
          <p style={{ fontSize: '1rem', color: '#10b981', fontWeight: 700, marginTop: '0.2rem' }}>
            {concept.translation}
          </p>
        </div>

        <button
          onClick={() => handlePlayAudio(concept.term)}
          title="Escutar pronúncia em inglês"
          className={`btn-3d ${isPlaying === concept.term ? 'btn-3d-green' : 'btn-3d-blue'}`}
          style={{
            padding: '0.75rem',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            flexShrink: 0,
            transform: isPlaying === concept.term ? 'scale(1.08)' : 'scale(1)'
          }}
        >
          <Volume2 size={22} className={isPlaying === concept.term ? 'animate-bounce-slow' : ''} />
        </button>
      </div>

      {/* What it means in IT Management */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        backgroundColor: '#17223b',
        padding: '1rem 1.2rem',
        borderRadius: '1rem',
        borderLeft: '4px solid #3b82f6'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#60a5fa', fontWeight: 800, fontSize: '0.85rem' }}>
          <Lightbulb size={16} />
          O que significa na Gestão de TI?
        </div>
        <p style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.5' }}>
          {concept.itExplanation}
        </p>
      </div>

      {/* Why it matters for IT Managers */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        backgroundColor: '#162235',
        padding: '1rem 1.2rem',
        borderRadius: '1rem',
        borderLeft: '4px solid #10b981'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontWeight: 800, fontSize: '0.85rem' }}>
          <Compass size={16} />
          Por que você precisa saber disso?
        </div>
        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.45' }}>
          {concept.whyItMatters}
        </p>
      </div>

      {/* Example Sentence with Audio */}
      <div style={{
        backgroundColor: '#0b1120',
        padding: '0.85rem 1rem',
        borderRadius: '0.85rem',
        border: '1px dashed #334155',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem'
      }}>
        <div>
          <p style={{ color: '#f8fafc', fontSize: '0.9rem', fontWeight: 700 }}>
            "{concept.exampleSentenceEn}"
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem' }}>
            "{concept.exampleSentencePt}"
          </p>
        </div>
        <button
          onClick={() => handlePlayAudio(concept.exampleSentenceEn)}
          title="Ouvir frase de exemplo"
          style={{
            background: isPlaying === concept.exampleSentenceEn ? '#1e293b' : 'transparent',
            border: 'none',
            color: isPlaying === concept.exampleSentenceEn ? '#10b981' : '#38bdf8',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Volume2 size={18} />
        </button>
      </div>

      {/* Takeaway & Continue button */}
      <button
        onClick={onContinue}
        className="btn-3d btn-3d-green"
        style={{
          width: '100%',
          marginTop: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          fontSize: '1rem'
        }}
      >
        <CheckCircle2 size={20} />
        Entendido! Vamos praticar
      </button>
    </div>
  );
};
