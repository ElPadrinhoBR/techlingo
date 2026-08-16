import React from 'react';
import { X, User, Github, Terminal, Code, Cpu, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
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
      backgroundColor: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(6px)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="animate-pop-in" style={{
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        backgroundColor: '#0d1117',
        border: '1.5px solid #30363d',
        borderRadius: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
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
            <Github size={20} color="#f0f6fc" />
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#f0f6fc', fontFamily: 'var(--font-mono)' }}>
              README.md — TechLingo Project
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
          color: '#c9d1d9',
          fontFamily: 'inherit'
        }}>
          {/* Header Banner */}
          <div style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '0.85rem',
            padding: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: '#1f6feb22',
              border: '2px solid #58a6ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#58a6ff',
              flexShrink: 0
            }}>
              <User size={30} />
            </div>

            <div>
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
              <p style={{ fontSize: '0.9rem', color: '#8b949e', margin: '0.25rem 0 0 0', fontWeight: 600 }}>
                🎓 Estudante de <strong>Gestão da Tecnologia da Informação (GTI)</strong>
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid #21262d', paddingBottom: '0.4rem' }}>
              <BookOpen size={18} color="#58a6ff" />
              Sobre o Projeto TechLingo
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              O <strong>TechLingo</strong> foi concebido, arquitetado e desenvolvido por <strong>Roberto Leandro Mendonça Corrêa</strong> com a missão de democratizar o acesso ao vocabulário técnico de TI e programação para estudantes e futuros gestores de tecnologia.
            </p>
            <div style={{
              backgroundColor: '#161b22',
              borderLeft: '4px solid #58a6ff',
              padding: '0.85rem 1rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              marginTop: '0.4rem'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#58a6ff', display: 'block', textTransform: 'uppercase' }}>
                Concepção & Autoria:
              </span>
              <p style={{ fontSize: '0.86rem', color: '#c9d1d9', lineHeight: '1.5', margin: '0.2rem 0 0 0' }}>
                <em>"Desenvolvido e estruturado por <strong>Roberto Leandro Mendonça Corrêa</strong> para capacitar alunos e profissionais de GTI através de metodologias ativas de repetição espaçada e prática imersiva."</em>
              </p>
            </div>
          </div>

          {/* Stack & Languages Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid #21262d', paddingBottom: '0.4rem' }}>
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
                { name: 'Web Speech API', desc: 'Síntese de pronúncia nativa em inglês', color: '#f778ba' },
                { name: 'Web Audio API', desc: 'Síntese musical em tempo real', color: '#f59e0b' },
                { name: 'Web Notifications', desc: 'Lembretes push diários de estudo', color: '#10b981' },
                { name: 'Vite', desc: 'Build tooling ultrarrápido com HMR', color: '#646cff' },
                { name: 'Lucide React', desc: 'Biblioteca de ícones vetoriais', color: '#f87171' }
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
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '0.4rem', borderBottom: '1px solid #21262d', paddingBottom: '0.4rem' }}>
              <Layers size={18} color="#d2a8ff" />
              Módulos Implementados no TechLingo
            </h3>
            <ul style={{ paddingLeft: '1.25rem', fontSize: '0.86rem', lineHeight: '1.7', margin: 0, color: '#8b949e' }}>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Gestão de TI (Do Básico ao Avançado):</strong> Infraestrutura, Scrum, ITIL 4, Segurança, CI/CD, FinOps, Fornecedores e Big Data.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Python & Automação (4 Unidades):</strong> Sintaxe, Listas/Dicionários, try/except, APIs REST e Pandas.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Algoritmos (6 Unidades):</strong> Decomposição, FIFO/LIFO, Árvores, Busca Binária, Big-O e Programação Dinâmica.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Trilha Banco de Dados (7 Unidades):</strong> Chaves (PK/FK), SQL Queries, DML, JOINs, GROUP BY, ACID e Índices.</li>
              <li><strong style={{ color: '#c9d1d9' }}>Aba Memorizar:</strong> Mais de 35 expressões de reuniões e mnemônicos com checklist.</li>
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
