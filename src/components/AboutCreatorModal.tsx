import React from 'react';
import { X, User, Github, Terminal, Code, Cpu, BookOpen, Layers, CheckCircle2, Award } from 'lucide-react';
import { soundService } from '../services/soundService';

interface AboutCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutCreatorModal: React.FC<AboutCreatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
              width: '90px',
              height: '90px',
              flexShrink: 0
            }}>
              <img
                src="/creator_photo.jpg"
                alt="Roberto Leandro Mendonça Corrêa"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #58a6ff',
                  boxShadow: '0 0 15px rgba(88, 166, 255, 0.4)'
                }}
                onError={(e) => {
                  // Fallback to avatar if offline/missing
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

          {/* Mission Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid #21262d', paddingBottom: '0.4rem' }}>
              <BookOpen size={18} color="#58a6ff" />
              Sobre o Projeto TechLingo
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              O <strong>TechLingo</strong> foi concebido, arquitetado e desenvolvido por <strong>Roberto Leandro Mendonça Corrêa</strong> com o propósito de capacitar estudantes e futuros gestores de TI a dominarem o vocabulário técnico de TI, programação e banco de dados de maneira prática, intuitiva e gamificada.
            </p>
            <div style={{
              backgroundColor: '#161b22',
              borderLeft: '4px solid #58a6ff',
              padding: '0.85rem 1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              marginTop: '0.3rem'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#58a6ff', display: 'block', textTransform: 'uppercase' }}>
                Concepção & Autoria:
              </span>
              <p style={{ fontSize: '0.86rem', color: '#c9d1d9', lineHeight: '1.5', margin: '0.2rem 0 0 0' }}>
                <em>"Desenvolvido por <strong>Roberto Leandro Mendonça Corrêa</strong> para preencher a lacuna entre o ensino tradicional e as reais exigências do mercado corporativo de TI global."</em>
              </p>
            </div>
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

          {/* Key Features Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid #21262d', paddingBottom: '0.4rem' }}>
              <Layers size={18} color="#d2a8ff" />
              Conteúdo Completo do TechLingo
            </h3>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.86rem', lineHeight: '1.7', margin: 0, color: '#8b949e' }}>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Gestão de TI (10 Unidades):</strong> Infraestrutura, Scrum, ITIL 4, Segurança, CI/CD, FinOps, Fornecedores, Big Data, TOGAF/COBIT e CIO.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Python & Automação (4 Unidades):</strong> Sintaxe, Listas/Dicionários, try/except, APIs REST e Pandas.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Algoritmos (6 Unidades):</strong> Decomposição, FIFO/LIFO, Árvores, Busca Binária, Big-O e Programação Dinâmica.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Banco de Dados (7 Unidades):</strong> Chaves (PK/FK), SQL Queries, DML, JOINs, GROUP BY, ACID e Índices.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Aba Memorizar:</strong> Mais de 35 expressões reais com áudio e mnemônicos visuais.</li>
            </ul>
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
