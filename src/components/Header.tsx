import React from 'react';
import { Flame, Heart, Zap, Volume2, VolumeX, Bell, User, Github } from 'lucide-react';
import { UserProgress } from '../types';
import { soundService } from '../services/soundService';

interface HeaderProps {
  progress: UserProgress;
  onOpenHeartModal: () => void;
  onOpenReminderModal: () => void;
  onOpenAboutModal: () => void;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  progress,
  onOpenHeartModal,
  onOpenReminderModal,
  onOpenAboutModal,
  onToggleSound
}) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 40,
      backgroundColor: '#0f172a',
      borderBottom: '2px solid #1e293b',
      padding: '0.65rem 1rem'
    }}>
      <div style={{
        maxWidth: '1080px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.6rem'
      }}>
        {/* Brand Logo & Creator Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 0 #047857',
            color: '#fff',
            fontWeight: 900,
            fontSize: '1.25rem'
          }}>
            TL
          </div>
          <div>
            <h1 style={{
              fontSize: '1.2rem',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              Tech<span style={{ color: '#10b981' }}>Lingo</span>
            </h1>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: '#94a3b8',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Inglês para Gestão de TI
            </span>
          </div>

          {/* Direct "Sobre o Criador" Button in Header */}
          <button
            onClick={() => {
              soundService.playClick();
              onOpenAboutModal();
            }}
            title="Sobre o Criador: Roberto Leandro Mendonça Corrêa"
            style={{
              backgroundColor: '#131b2e',
              border: '1.5px solid #3b82f6',
              color: '#38bdf8',
              padding: '0.3rem 0.65rem',
              borderRadius: '999px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.72rem',
              fontWeight: 800,
              marginLeft: '0.5rem',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.2)'
            }}
          >
            <User size={13} />
            <span>Sobre o Criador</span>
          </button>
        </div>

        {/* Stats & Gamification Elements */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {/* Streak Counter */}
          <div
            title="Ofensiva diária"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#1e293b',
              padding: '0.4rem 0.65rem',
              borderRadius: '0.75rem',
              border: '1px solid #334155',
              fontWeight: 800,
              fontSize: '0.85rem',
              color: progress.currentStreak > 0 ? '#f59e0b' : '#64748b'
            }}
          >
            <Flame size={18} fill={progress.currentStreak > 0 ? '#f59e0b' : 'none'} />
            <span>{progress.currentStreak} {progress.currentStreak === 1 ? 'dia' : 'dias'}</span>
          </div>

          {/* Total XP */}
          <div
            title="Pontos de Experiência (XP)"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: '#1e293b',
              padding: '0.4rem 0.65rem',
              borderRadius: '0.75rem',
              border: '1px solid #334155',
              fontWeight: 800,
              fontSize: '0.85rem',
              color: '#38bdf8'
            }}
          >
            <Zap size={17} fill="#38bdf8" />
            <span>{progress.totalXp} XP</span>
          </div>

          {/* Hearts / Lives */}
          <button
            onClick={() => {
              soundService.playClick();
              onOpenHeartModal();
            }}
            title="Vidas restantes - Clique para recuperar"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: progress.hearts > 1 ? '#1e293b' : '#451a1a',
              padding: '0.4rem 0.65rem',
              borderRadius: '0.75rem',
              border: progress.hearts > 1 ? '1px solid #334155' : '1px solid #ef4444',
              fontWeight: 800,
              fontSize: '0.85rem',
              color: '#ef4444',
              cursor: 'pointer'
            }}
          >
            <Heart size={17} fill="#ef4444" />
            <span>{progress.hearts}/{progress.maxHearts}</span>
          </button>

          {/* Study Reminder Bell */}
          <button
            onClick={() => {
              soundService.playClick();
              onOpenReminderModal();
            }}
            title="Lembretes diários de estudo"
            style={{
              background: progress.notificationsEnabled ? '#0c4a6e' : 'transparent',
              border: progress.notificationsEnabled ? '1px solid #38bdf8' : '1px solid #334155',
              color: progress.notificationsEnabled ? '#38bdf8' : '#94a3b8',
              padding: '0.4rem',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Bell size={17} />
            {progress.notificationsEnabled && (
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#10b981'
              }} />
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            title={progress.soundEnabled ? 'Silenciar efeitos sonoros' : 'Ativar efeitos sonoros'}
            style={{
              background: 'transparent',
              border: '1px solid #334155',
              color: '#94a3b8',
              padding: '0.4rem',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {progress.soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>
        </div>
      </div>
    </header>
  );
};
