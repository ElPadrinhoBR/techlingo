import React from 'react';
import { Trophy, Zap, Flame, Award, CheckCircle, Lock, Rocket, Cloud, Kanban, ShieldCheck, Crown, Code, Brain, User, Sparkles, Cpu, Layers, Github, BookOpen } from 'lucide-react';
import { UserProgress } from '../types';
import { achievementsData } from '../data/achievements';
import { soundService } from '../services/soundService';

interface ProfileViewProps {
  progress: UserProgress;
  onOpenAboutModal: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ progress, onOpenAboutModal }) => {
  // Compute student title based on XP
  const getCareerTitle = (xp: number) => {
    if (xp < 50) return { title: 'Estagiário de GTI', level: 1, nextAt: 50 };
    if (xp < 150) return { title: 'Analista Júnior de TI', level: 2, nextAt: 150 };
    if (xp < 300) return { title: 'Analista Pleno de Governança', level: 3, nextAt: 300 };
    if (xp < 600) return { title: 'Coordenador / Tech Lead', level: 4, nextAt: 600 };
    return { title: 'Chief Information Officer (CIO)', level: 5, nextAt: 1000 };
  };

  const career = getCareerTitle(progress.totalXp);
  const xpPercentage = Math.min(100, Math.round((progress.totalXp / career.nextAt) * 100));

  const getAchievementIcon = (iconName: string, isUnlocked: boolean) => {
    const props = { size: 24, color: isUnlocked ? '#f59e0b' : '#64748b' };
    switch (iconName) {
      case 'Rocket': return <Rocket {...props} />;
      case 'Cloud': return <Cloud {...props} />;
      case 'Kanban': return <Kanban {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Lock': return <Lock {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'Code': return <Code {...props} />;
      case 'Brain': return <Brain {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <div style={{
      maxWidth: '740px',
      margin: '0 auto',
      padding: '1.5rem 1rem 6rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.75rem'
    }}>
      {/* Top Action Bar: About the Creator Button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => {
            soundService.playClick();
            onOpenAboutModal();
          }}
          className="btn-3d btn-3d-blue"
          style={{
            padding: '0.65rem 1.25rem',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '0.85rem'
          }}
        >
          <Github size={18} />
          <span>Sobre o Criador (README.md)</span>
        </button>
      </div>

      {/* Profile / Career Level Card */}
      <div style={{
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.35)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#064e3b',
            border: '3px solid #10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.75rem',
            color: '#10b981'
          }}>
            🎓
          </div>

          <div>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#38bdf8',
              backgroundColor: '#0f172a',
              padding: '0.2rem 0.6rem',
              borderRadius: '0.4rem',
              border: '1px solid #1e293b',
              textTransform: 'uppercase'
            }}>
              Nível {career.level} da Carreira GTI
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff', marginTop: '0.2rem' }}>
              {career.title}
            </h2>
          </div>
        </div>

        {/* Level XP Bar */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.4rem' }}>
            <span>Progresso para próximo cargo</span>
            <span>{progress.totalXp} / {career.nextAt} XP</span>
          </div>
          <div style={{
            height: '10px',
            backgroundColor: '#0f172a',
            borderRadius: '999px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${xpPercentage}%`,
              backgroundColor: '#38bdf8',
              borderRadius: '999px',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: '1rem'
      }}>
        <div style={{
          backgroundColor: '#131b2e',
          border: '1.5px solid #243253',
          padding: '1.25rem 1rem',
          borderRadius: '1.25rem',
          textAlign: 'center'
        }}>
          <Zap size={24} color="#38bdf8" style={{ margin: '0 auto 0.4rem auto' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff' }}>
            {progress.totalXp}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700 }}>
            Total de XP
          </div>
        </div>

        <div style={{
          backgroundColor: '#131b2e',
          border: '1.5px solid #243253',
          padding: '1.25rem 1rem',
          borderRadius: '1.25rem',
          textAlign: 'center'
        }}>
          <Flame size={24} color="#f59e0b" style={{ margin: '0 auto 0.4rem auto' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff' }}>
            {progress.currentStreak}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700 }}>
            Dias de Ofensiva
          </div>
        </div>

        <div style={{
          backgroundColor: '#131b2e',
          border: '1.5px solid #243253',
          padding: '1.25rem 1rem',
          borderRadius: '1.25rem',
          textAlign: 'center'
        }}>
          <CheckCircle size={24} color="#10b981" style={{ margin: '0 auto 0.4rem auto' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ffffff' }}>
            {progress.completedLessonIds.length}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 700 }}>
            Lições Concluídas
          </div>
        </div>
      </div>

      {/* SOBRE O AUTOR: ROBERTO LEANDRO MENDONÇA CORRÊA */}
      <div style={{
        backgroundColor: '#131b2e',
        border: '2px solid #3b82f6',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        boxShadow: '0 8px 24px rgba(59, 130, 246, 0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow accent */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          backgroundColor: '#3b82f6',
          filter: 'blur(50px)',
          opacity: 0.2,
          pointerEvents: 'none'
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              backgroundColor: '#1e3a8a',
              border: '2px solid #38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#38bdf8',
              flexShrink: 0
            }}>
              <User size={26} />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff' }}>
                  Roberto Leandro Mendonça Corrêa
                </h3>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#38bdf8',
                  backgroundColor: '#0f172a',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.4rem',
                  border: '1px solid #1e293b'
                }}>
                  Criador do Projeto
                </span>
              </div>
              <span style={{ fontSize: '0.88rem', color: '#94a3b8', fontWeight: 700 }}>
                Estudante de Gestão da Tecnologia da Informação (GTI)
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundService.playClick();
              onOpenAboutModal();
            }}
            className="btn-3d btn-3d-secondary"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          >
            <BookOpen size={15} />
            <span>Ver Detalhes</span>
          </button>
        </div>

        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '1rem',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontSize: '0.88rem', fontWeight: 800 }}>
            <Sparkles size={18} />
            <span>Engenharia & Concepção do Projeto</span>
          </div>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.55' }}>
            O <strong>TechLingo</strong> foi idealizado e desenvolvido por <strong>Roberto Leandro Mendonça Corrêa</strong> para capacitar estudantes e profissionais de GTI que nunca tiveram contato com o inglês técnico, ensinando de forma prática, gamificada e intuitiva.
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5' }}>
            💡 <em>Plataforma completa e interativa concebida para acelerar a fluência técnica e o domínio de vocabulário corporativo de Tecnologia da Informação.</em>
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Linguagens & Tecnologias Utilizadas:
          </span>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              { name: 'TypeScript', color: '#38bdf8', bg: '#0c4a6e' },
              { name: 'React 18', color: '#60a5fa', bg: '#1e3a8a' },
              { name: 'HTML5 & CSS3 3D', color: '#34d399', bg: '#064e3b' },
              { name: 'Web Speech API (Voz Nativa)', color: '#f472b6', bg: '#831843' },
              { name: 'Web Audio API (Síntese Musical)', color: '#fbbf24', bg: '#78350f' },
              { name: 'Web Notifications', color: '#a78bfa', bg: '#4c1d95' },
              { name: 'Vite', color: '#646cff', bg: '#2e1065' },
              { name: 'Lucide Icons', color: '#f87171', bg: '#7f1d1d' },
              { name: 'Canvas Confetti', color: '#2dd4bf', bg: '#134e4a' }
            ].map((tech) => (
              <span
                key={tech.name}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  color: tech.color,
                  backgroundColor: tech.bg,
                  padding: '0.35rem 0.65rem',
                  borderRadius: '0.5rem',
                  border: `1px solid ${tech.color}44`
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Badges and Achievements Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}>
          <Trophy size={22} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>
            Conquistas e Emblemas
          </h3>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem'
        }}>
          {achievementsData.map((ach) => {
            const isUnlocked = ach.isUnlocked(progress);

            return (
              <div
                key={ach.id}
                style={{
                  backgroundColor: '#131b2e',
                  border: isUnlocked ? '2px solid #f59e0b' : '1.5px solid #1e293b',
                  borderRadius: '1rem',
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  opacity: isUnlocked ? 1 : 0.6
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: isUnlocked ? '#33230a' : '#0f172a',
                  border: isUnlocked ? '2px solid #f59e0b' : '1px solid #334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {getAchievementIcon(ach.icon, isUnlocked)}
                </div>

                <div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: isUnlocked ? '#ffffff' : '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    {ach.title}
                    {isUnlocked && <span style={{ color: '#10b981', fontSize: '0.75rem' }}>✓ Desbloqueado</span>}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                    {ach.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
