import React from 'react';
import { Check, Lock, Star, Sparkles, BookOpen, ChevronRight, Server, Kanban, ShieldCheck, Lock as LockIcon, TrendingUp, Code, Terminal, Package, Zap, Database, Brain, Layers } from 'lucide-react';
import { Module, Lesson, UserProgress, TrackId } from '../types';
import { soundService } from '../services/soundService';

interface ModuleMapProps {
  modules: Module[];
  progress: UserProgress;
  activeTrack: TrackId;
  onChangeTrack: (track: TrackId) => void;
  onSelectLesson: (lesson: Lesson) => void;
}

export const ModuleMap: React.FC<ModuleMapProps> = ({
  modules,
  progress,
  activeTrack,
  onChangeTrack,
  onSelectLesson
}) => {
  // Helper for module icons
  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return <Server size={22} />;
      case 'Kanban': return <Kanban size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'Lock': return <LockIcon size={22} />;
      case 'TrendingUp': return <TrendingUp size={22} />;
      case 'Code': return <Code size={22} />;
      case 'Terminal': return <Terminal size={22} />;
      case 'Package': return <Package size={22} />;
      case 'Zap': return <Zap size={22} />;
      case 'Database': return <Database size={22} />;
      case 'Brain': return <Brain size={22} />;
      case 'Layers': return <Layers size={22} />;
      default: return <BookOpen size={22} />;
    }
  };

  const tracks = [
    {
      id: 'gti' as TrackId,
      shortLabel: 'GTI',
      subLabel: 'Gestão de TI',
      icon: Server,
      color: '#10b981',
      darkColor: '#064e3b',
      shadow: '#047857'
    },
    {
      id: 'python' as TrackId,
      shortLabel: 'Python',
      subLabel: 'Automação & APIs',
      icon: Code,
      color: '#38bdf8',
      darkColor: '#0c4a6e',
      shadow: '#0284c7'
    },
    {
      id: 'algorithms' as TrackId,
      shortLabel: 'Algoritmos',
      subLabel: 'Lógica & Big-O',
      icon: Brain,
      color: '#a855f7',
      darkColor: '#4c1d95',
      shadow: '#7e22ce'
    },
    {
      id: 'database' as TrackId,
      shortLabel: 'SQL & Dados',
      subLabel: 'Banco de Dados',
      icon: Database,
      color: '#0ea5e9',
      darkColor: '#0369a1',
      shadow: '#0284c7'
    }
  ];

  // Filter modules for active track
  const currentModules = modules.filter(m => m.trackId === activeTrack);

  // Determine if a lesson is unlocked
  const isLessonUnlocked = (moduleIdx: number, lessonIdx: number): boolean => {
    if (moduleIdx === 0 && lessonIdx === 0) return true;

    // Check all previous lessons in current track
    let allPrevCompleted = true;
    for (let m = 0; m <= moduleIdx; m++) {
      const currentModule = currentModules[m];
      const maxLesson = m === moduleIdx ? lessonIdx : currentModule.lessons.length;

      for (let l = 0; l < maxLesson; l++) {
        const checkLessonId = currentModule.lessons[l].id;
        if (!progress.completedLessonIds.includes(checkLessonId)) {
          allPrevCompleted = false;
          break;
        }
      }
      if (!allPrevCompleted) break;
    }

    return allPrevCompleted;
  };

  const getTrackBannerInfo = (track: TrackId) => {
    switch (track) {
      case 'gti':
        return {
          title: 'Trilha de Inglês Técnico para GTI',
          desc: 'Infraestrutura, governança ITIL, metodologias ágeis, segurança e liderança executiva.'
        };
      case 'python':
        return {
          title: 'Trilha de Python para Gestores de TI',
          desc: 'Lógica, sintaxe em inglês, tratamento de erros, consumo de APIs e automação de rotinas.'
        };
      case 'algorithms':
        return {
          title: 'Trilha de Algoritmos & Pensamento Computacional',
          desc: 'Decomposição, estruturas de dados (FIFO/LIFO), pseudocódigo, ordenação e eficiência Big-O.'
        };
      case 'database':
        return {
          title: 'Trilha de Banco de Dados & SQL Corporativo',
          desc: 'Modelagem relacional, Chaves (PK/FK), consultas SQL, JOINs, GROUP BY e propriedades ACID.'
        };
    }
  };

  const activeBanner = getTrackBannerInfo(activeTrack);
  const activeTrackObj = tracks.find(t => t.id === activeTrack) || tracks[0];

  return (
    <div style={{
      maxWidth: '720px',
      margin: '0 auto',
      padding: '1.5rem 1rem 6rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.75rem'
    }}>
      {/* Redesigned 4-Track Segmented Selector (No text cramping) */}
      <div style={{
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.25rem',
        padding: '0.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '0.5rem'
      }}>
        {tracks.map((t) => {
          const Icon = t.icon;
          const isActive = activeTrack === t.id;

          return (
            <button
              key={t.id}
              onClick={() => {
                soundService.playClick();
                onChangeTrack(t.id);
              }}
              className="btn-3d"
              style={{
                backgroundColor: isActive ? t.color : '#0f172a',
                color: isActive ? '#0f172a' : '#f8fafc',
                border: isActive ? `1px solid ${t.color}` : '1px solid #1e293b',
                boxShadow: isActive ? `0 3px 0 ${t.shadow}` : 'none',
                padding: '0.65rem 0.5rem',
                borderRadius: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.2rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Icon size={16} strokeWidth={isActive ? 2.8 : 2} />
                <span style={{ fontSize: '0.88rem', fontWeight: 900 }}>
                  {t.shortLabel}
                </span>
              </div>
              <span style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                color: isActive ? '#0f172a' : '#94a3b8',
                opacity: isActive ? 0.9 : 0.75,
                lineHeight: 1
              }}>
                {t.subLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Track Description Banner */}
      <div style={{
        backgroundColor: '#131b2e',
        border: `2px solid ${activeTrackObj.color}`,
        borderRadius: '1.25rem',
        padding: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: `0 4px 16px ${activeTrackObj.color}22`
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: activeTrackObj.darkColor,
          border: `2px solid ${activeTrackObj.color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: activeTrackObj.color,
          flexShrink: 0
        }}>
          <Sparkles size={24} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
            {activeBanner.title}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.2rem' }}>
            {activeBanner.desc}
          </p>
        </div>
      </div>

      {/* Modules List */}
      {currentModules.map((module, mIdx) => {
        const completedCount = module.lessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
        const totalLessons = module.lessons.length;
        const isModuleComplete = completedCount === totalLessons && totalLessons > 0;

        return (
          <div key={module.id} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Unit Header Card */}
            <div style={{
              backgroundColor: '#131b2e',
              border: `2px solid ${module.themeColor}`,
              borderRadius: '1.25rem',
              padding: '1.25rem 1.5rem',
              boxShadow: `0 4px 20px ${module.themeColor}22`,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '6px',
                backgroundColor: module.themeColor
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{
                    color: module.themeColor,
                    backgroundColor: '#0f172a',
                    padding: '0.4rem',
                    borderRadius: '0.5rem',
                    display: 'flex'
                  }}>
                    {getModuleIcon(module.icon)}
                  </div>
                  <div>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: module.themeColor
                    }}>
                      Unidade {module.unitNumber}
                    </span>
                    {module.levelTag && (
                      <span style={{
                        marginLeft: '0.5rem',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        backgroundColor: '#0f172a',
                        color: '#94a3b8',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '0.35rem',
                        border: '1px solid #1e293b'
                      }}>
                        {module.levelTag}
                      </span>
                    )}
                  </div>
                </div>

                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  backgroundColor: isModuleComplete ? '#064e3b' : '#1e293b',
                  color: isModuleComplete ? '#34d399' : '#94a3b8',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '999px',
                  border: isModuleComplete ? '1px solid #10b981' : '1px solid #334155'
                }}>
                  {completedCount}/{totalLessons} Concluídas
                </span>
              </div>

              <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.01em' }}>
                {module.title}
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>
                {module.description}
              </p>
            </div>

            {/* Path of Lessons Nodes */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              position: 'relative',
              padding: '1rem 0'
            }}>
              {module.lessons.map((lesson, lIdx) => {
                const isCompleted = progress.completedLessonIds.includes(lesson.id);
                const isUnlocked = isLessonUnlocked(mIdx, lIdx);
                const isCurrentActive = isUnlocked && !isCompleted;

                const xOffsets = [0, 35, -35, 20, -20];
                const xOffset = xOffsets[lIdx % xOffsets.length];

                return (
                  <div
                    key={lesson.id}
                    style={{
                      transform: `translateX(${xOffset}px)`,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    {isCurrentActive && (
                      <div className="animate-bounce-slow" style={{
                        position: 'absolute',
                        top: '-32px',
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        fontWeight: 900,
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '0.6rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        zIndex: 10,
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <span>COMEÇAR</span>
                        <ChevronRight size={14} strokeWidth={3} />
                      </div>
                    )}

                    <button
                      disabled={!isUnlocked}
                      onClick={() => {
                        soundService.playClick();
                        onSelectLesson(lesson);
                      }}
                      className={`level-node-btn ${isCurrentActive ? 'level-node-active' : ''}`}
                      style={{
                        backgroundColor: isCompleted
                          ? module.themeColor
                          : isCurrentActive
                            ? module.themeColor
                            : '#1e293b',
                        border: isCompleted
                          ? `3px solid #ffffff`
                          : isCurrentActive
                            ? `3px solid #ffffff`
                            : '2px solid #334155',
                        boxShadow: isCompleted
                          ? `0 6px 0 ${module.accentColor}`
                          : isCurrentActive
                            ? `0 6px 0 ${module.accentColor}`
                            : '0 4px 0 #0f172a',
                        color: isUnlocked ? '#ffffff' : '#64748b',
                        cursor: isUnlocked ? 'pointer' : 'not-allowed'
                      }}
                    >
                      {isCompleted ? (
                        <Check size={34} strokeWidth={3.5} />
                      ) : isUnlocked ? (
                        <Star size={30} fill="#ffffff" strokeWidth={1} />
                      ) : (
                        <Lock size={26} />
                      )}
                    </button>

                    <div style={{
                      marginTop: '0.6rem',
                      textAlign: 'center',
                      maxWidth: '180px'
                    }}>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: isUnlocked ? '#ffffff' : '#64748b',
                        display: 'block'
                      }}>
                        {lesson.title}
                      </span>
                      <span style={{
                        fontSize: '0.72rem',
                        color: isUnlocked ? '#94a3b8' : '#475569',
                        fontWeight: 600
                      }}>
                        +{lesson.xpReward} XP
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
