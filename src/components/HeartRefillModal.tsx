import React from 'react';
import { X, Heart, Dumbbell, Sparkles } from 'lucide-react';
import { soundService } from '../services/soundService';

interface HeartRefillModalProps {
  isOpen: boolean;
  hearts: number;
  maxHearts: number;
  onClose: () => void;
  onRefill: () => void;
  onGoToPractice: () => void;
}

export const HeartRefillModal: React.FC<HeartRefillModalProps> = ({
  isOpen,
  hearts,
  maxHearts,
  onClose,
  onRefill,
  onGoToPractice
}) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(4px)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="animate-pop-in" style={{
        maxWidth: '440px',
        width: '100%',
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
        position: 'relative'
      }}>
        <button
          onClick={() => {
            soundService.playClick();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#451a1a',
            border: '2px solid #ef4444',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ef4444'
          }}>
            <Heart size={36} fill="#ef4444" />
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff' }}>
            Vidas de Aprendizado
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            Você possui atualmente <strong>{hearts} de {maxHearts}</strong> vidas. Você perde uma vida quando erra uma questão na trilha.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Practice Option */}
          <button
            onClick={() => {
              soundService.playClick();
              onClose();
              onGoToPractice();
            }}
            className="btn-3d btn-3d-blue"
            style={{
              padding: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.95rem'
            }}
          >
            <Dumbbell size={18} />
            Treinar Termos & Recuperar Vida
          </button>

          {/* Instant Refill */}
          <button
            onClick={() => {
              soundService.playCorrect();
              onRefill();
              onClose();
            }}
            className="btn-3d btn-3d-green"
            style={{
              padding: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '0.95rem'
            }}
          >
            <Sparkles size={18} />
            Recarregar Todas as Vidas (Grátis)
          </button>
        </div>
      </div>
    </div>
  );
};
