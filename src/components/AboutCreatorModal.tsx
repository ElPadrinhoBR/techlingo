import React, { useState } from 'react';
import { X, User, Github, Code, BookOpen, Layers, Heart, Copy, Check, ExternalLink, Sparkles } from 'lucide-react';
import { soundService } from '../services/soundService';
import creatorPhoto from '../assets/creator_photo.jpg';

interface AboutCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutCreatorModal: React.FC<AboutCreatorModalProps> = ({ isOpen, onClose }) => {
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const pixKey = 'Santigarudnanda@gmail.com';
  const patreonUrl = 'https://www.patreon.com/ElPadrinho/posts/bem-vindo-ao-o-166799005';

  const handleCopyPix = () => {
    soundService.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(pixKey);
    }
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="animate-pop-in" style={{
        maxWidth: '680px',
        width: '100%',
        maxHeight: '92vh',
        backgroundColor: '#0d1117',
        border: '1.5px solid #30363d',
        borderRadius: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
        overflow: 'hidden'
      }}>
        {/* GitHub Window Top Bar */}
        <div style={{
          backgroundColor: '#161b22',
          borderBottom: '1px solid #30363d',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Github size={20} color="#58a6ff" />
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#f0f6fc', fontFamily: 'var(--font-mono)' }}>
              README.md — Criador do TechLingo
            </span>
          </div>

          <button
            onClick={() => {
              soundService.playClick();
              onClose();
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#8b949e',
              cursor: 'pointer',
              display: 'flex',
              padding: '0.2rem'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* README Body (Scrollable) */}
        <div style={{
          padding: '1.5rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          color: '#c9d1d9'
        }}>
          {/* Creator Hero Card with Real Photo */}
          <div style={{
            backgroundColor: '#161b22',
            border: '1.5px solid #388bfd44',
            borderRadius: '1rem',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            background: 'linear-gradient(135deg, #161b22 0%, #0f1c30 100%)',
            boxShadow: '0 4px 20px rgba(56, 139, 253, 0.15)'
          }}>
            <div style={{
              position: 'relative',
              width: '92px',
              height: '92px',
              flexShrink: 0
            }}>
              <img
                src={creatorPhoto}
                alt="Roberto Leandro Mendonça Corrêa"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #58a6ff',
                  boxShadow: '0 0 16px rgba(88, 166, 255, 0.45)'
                }}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                backgroundColor: '#238636',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '2px solid #0d1117'
              }} title="Online" />
            </div>

            <div style={{ flex: 1, minWidth: '220px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: '#f0f6fc', margin: 0 }}>
                  Roberto Leandro Mendonça Corrêa
                </h2>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#58a6ff',
                  backgroundColor: '#1f6feb22',
                  border: '1px solid #388bfd44',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '999px'
                }}>
                  Autor & Criador
                </span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#8b949e', margin: '0.35rem 0 0 0', fontWeight: 600 }}>
                🎓 Estudante de <strong>Gestão da Tecnologia da Informação (GTI)</strong>
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.72rem', backgroundColor: '#21262d', padding: '0.2rem 0.5rem', borderRadius: '0.35rem', color: '#7ee787', fontWeight: 700 }}>
                  ⚡ CÓDIGO
                </span>
                <span style={{ fontSize: '0.72rem', backgroundColor: '#21262d', padding: '0.2rem 0.5rem', borderRadius: '0.35rem', color: '#79c0ff', fontWeight: 700 }}>
                  💡 CRIATIVIDADE
                </span>
                <span style={{ fontSize: '0.72rem', backgroundColor: '#21262d', padding: '0.2rem 0.5rem', borderRadius: '0.35rem', color: '#d2a8ff', fontWeight: 700 }}>
                  🎯 PROPÓSITO
                </span>
              </div>
            </div>
          </div>

          {/* APOIE O CRIADOR & DOAÇÕES SECTION */}
          <div style={{
            backgroundColor: '#1c1917',
            border: '2px solid #f59e0b',
            borderRadius: '1rem',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 6px 20px rgba(245, 158, 11, 0.15)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b' }}>
              <Heart size={20} fill="#f59e0b" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#ffffff', margin: 0 }}>
                Apoie o Criador & Manutenção do Projeto
              </h3>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#d6d3d1', lineHeight: '1.5', margin: 0 }}>
              Gostou do <strong>TechLingo</strong> e quer apoiar o desenvolvimento contínuo de novos módulos e funcionalidades? Você pode contribuir diretamente:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
              {/* PIX CARD */}
              <div style={{
                backgroundColor: '#0c0a09',
                border: '1.5px solid #22c55e',
                borderRadius: '0.75rem',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#22c55e', textTransform: 'uppercase' }}>
                    🔑 Chave Pix (E-mail)
                  </span>
                  {copiedPix && (
                    <span style={{ fontSize: '0.72rem', color: '#22c55e', fontWeight: 800 }}>
                      ✓ Copiado!
                    </span>
                  )}
                </div>
                <div style={{
                  backgroundColor: '#1c1917',
                  padding: '0.5rem 0.65rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.82rem',
                  color: '#ffffff',
                  fontFamily: 'monospace',
                  wordBreak: 'break-all'
                }}>
                  {pixKey}
                </div>
                <button
                  onClick={handleCopyPix}
                  className="btn-3d"
                  style={{
                    backgroundColor: '#15803d',
                    color: '#ffffff',
                    border: 'none',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer'
                  }}
                >
                  {copiedPix ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copiedPix ? 'Chave Pix Copiada!' : 'Copiar Chave Pix'}</span>
                </button>
              </div>

              {/* PATREON CARD */}
              <div style={{
                backgroundColor: '#0c0a09',
                border: '1.5px solid #f97316',
                borderRadius: '0.75rem',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f97316', textTransform: 'uppercase', display: 'block' }}>
                    🎨 Patreon Oficial
                  </span>
                  <p style={{ fontSize: '0.78rem', color: '#a8a29e', margin: '0.25rem 0 0 0' }}>
                    Apoie mensalmente e acompanhe os bastidores e novas atualizações.
                  </p>
                </div>
                <a
                  href={patreonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d"
                  style={{
                    backgroundColor: '#ea580c',
                    color: '#ffffff',
                    padding: '0.45rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>Acessar Patreon</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid #21262d', paddingBottom: '0.4rem' }}>
              <BookOpen size={18} color="#58a6ff" />
              Sobre o Projeto TechLingo
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              O <strong>TechLingo</strong> foi concebido, arquitetado e desenvolvido por <strong>Roberto Leandro Mendonça Corrêa</strong> com o propósito de capacitar estudantes e futuros gestores de TI a dominarem o vocabulário técnico de TI, programação e banco de dados de maneira prática, intuitiva e gamificada.
            </p>
          </div>

          {/* Stack & Languages Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid #21262d', paddingBottom: '0.4rem' }}>
              <Code size={18} color="#7ee787" />
              Linguagens & Tecnologias Utilizadas
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.6rem'
            }}>
              {[
                { name: 'TypeScript', desc: 'Tipagem estática e interfaces seguras', color: '#3178c6' },
                { name: 'React 18', desc: 'Arquitetura SPA e componentes modulares', color: '#61dafb' },
                { name: 'HTML5 & CSS3', desc: 'Design tátil 3D e micro-interações', color: '#e34f26' },
                { name: 'Android Native TTS', desc: 'Síntese de pronúncia nativa no app', color: '#34d399' },
                { name: 'Web Audio API', desc: 'Síntese musical em tempo real', color: '#f59e0b' },
                { name: 'Web Notifications', desc: 'Lembretes push diários de estudo', color: '#10b981' },
                { name: 'Capacitor', desc: 'Compilação nativa de APK Android', color: '#53b9ea' },
                { name: 'Vite', desc: 'Build tooling ultrarrápido', color: '#646cff' }
              ].map((tech) => (
                <div
                  key={tech.name}
                  style={{
                    backgroundColor: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '0.5rem',
                    padding: '0.65rem 0.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.15rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: tech.color
                    }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f0f6fc', fontFamily: 'var(--font-mono)' }}>
                      {tech.name}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#8b949e' }}>
                    {tech.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          backgroundColor: '#161b22',
          borderTop: '1px solid #30363d',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={() => {
              soundService.playClick();
              onClose();
            }}
            className="btn-3d btn-3d-blue"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
          >
            Fechar README
          </button>
        </div>
      </div>
    </div>
  );
};
