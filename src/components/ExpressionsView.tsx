import React, { useState } from 'react';
import { Brain, Volume2, CheckCircle, Circle, Lightbulb, Search, BookmarkCheck } from 'lucide-react';
import { MemorizationExpression } from '../types';
import { expressionsData } from '../data/expressions';
import { speechService } from '../services/speechService';
import { soundService } from '../services/soundService';

interface ExpressionsViewProps {
  memorizedIds: string[];
  onToggleMemorized: (id: string) => void;
}

export const ExpressionsView: React.FC<ExpressionsViewProps> = ({
  memorizedIds,
  onToggleMemorized
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [playingId, setPlayingId] = useState<string | null>(null);

  const categories = [
    'Todas',
    'Reuniões & Negócios',
    'Gestão de Crise & Suporte',
    'Metodologias Ágeis',
    'Python & Lógica',
    'Infra & Cloud'
  ];

  const filtered = expressionsData.filter((item) => {
    const matchesSearch =
      item.expression.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.literalTranslation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.realItMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.mnemonicTrigger.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Todas' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalExpressions = expressionsData.length;
  const memorizedCount = memorizedIds.length;
  const percentage = Math.round((memorizedCount / totalExpressions) * 100);

  const handlePlayAudio = async (e: React.MouseEvent, id: string, text: string) => {
    e.stopPropagation();
    setPlayingId(id);
    await speechService.speak(text);
    setPlayingId(null);
  };

  const handleCheckboxClick = (id: string) => {
    const isNowChecked = !memorizedIds.includes(id);
    if (isNowChecked) {
      soundService.playCorrect();
    } else {
      soundService.playClick();
    }
    onToggleMemorized(id);
  };

  return (
    <div style={{
      maxWidth: '780px',
      margin: '0 auto',
      padding: '1.5rem 1rem 6rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      {/* Header with Memorization Progress */}
      <div style={{
        backgroundColor: 'var(--bg-card)',
        border: '2px solid var(--bg-border)',
        borderRadius: '1.5rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#f59e0b' }}>
            <Brain size={28} />
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-main)' }}>
                Laboratório de Memorização & Expressões de TI
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>
                Expressões idiomáticas do dia a dia corporativo e gatilhos mentais para fixar o aprendizado.
              </p>
            </div>
          </div>

          {/* Badge counter */}
          <div style={{
            backgroundColor: 'var(--bg-card-alt)',
            border: '1.5px solid var(--bg-border-light)',
            padding: '0.45rem 0.85rem',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: '#10b981',
            fontWeight: 800,
            fontSize: '0.9rem'
          }}>
            <BookmarkCheck size={18} />
            <span>{memorizedCount} / {totalExpressions} Memorizadas ({percentage}%)</span>
          </div>
        </div>

        {/* Visual Progress bar */}
        <div style={{
          height: '10px',
          backgroundColor: 'var(--bg-card-alt)',
          borderRadius: '999px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: '#10b981',
            borderRadius: '999px',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>

      {/* Search Input */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', pointerEvents: 'none' }} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar por expressão, tradução ou mnemônico..."
          style={{
            width: '100%',
            padding: '0.85rem 1rem 0.85rem 2.8rem',
            backgroundColor: 'var(--bg-card)',
            border: '2px solid var(--bg-border)',
            borderRadius: '1rem',
            color: 'var(--text-main)',
            fontSize: '0.95rem',
            outline: 'none',
            fontFamily: 'inherit'
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{
              position: 'absolute',
              right: '1rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              fontWeight: 700
            }}
          >
            Limpar
          </button>
        )}
      </div>

      {/* Category Filter Chips */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem'
      }}>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                soundService.playClick();
                setSelectedCategory(cat);
              }}
              style={{
                whiteSpace: 'nowrap',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                border: isSelected ? '1.5px solid #f59e0b' : '1px solid var(--bg-border)',
                backgroundColor: isSelected ? '#33230a' : 'var(--bg-card)',
                color: isSelected ? '#fbbf24' : 'var(--text-muted)',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filtered.map((item) => {
          const isMemorized = memorizedIds.includes(item.id);
          const isPlaying = playingId === item.id;

          return (
            <div
              key={item.id}
              className="animate-pop-in"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: isMemorized ? '2px solid #10b981' : '2px solid var(--bg-border)',
                borderRadius: '1.25rem',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                boxShadow: isMemorized ? '0 4px 16px rgba(16, 185, 129, 0.15)' : '0 4px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Header: Expression, Category & Audio */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: 'var(--text-main)',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {item.expression}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      {item.phonetic}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#0284c7',
                    backgroundColor: 'var(--bg-card-alt)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '0.4rem',
                    display: 'inline-block',
                    marginTop: '0.3rem',
                    border: '1px solid var(--bg-border-light)'
                  }}>
                    {item.category}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={(e) => handlePlayAudio(e, item.id, item.expression)}
                    title="Escutar pronúncia"
                    className={`btn-3d ${isPlaying ? 'btn-3d-green' : 'btn-3d-blue'}`}
                    style={{
                      width: '38px',
                      height: '38px',
                      padding: 0,
                      borderRadius: '50%',
                      transform: isPlaying ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
              </div>

              {/* Literal vs Real IT Meaning */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '0.75rem',
                backgroundColor: 'var(--bg-card-alt)',
                padding: '0.85rem',
                borderRadius: '0.85rem',
                border: '1px solid var(--bg-border-light)'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Tradução ao Pé da Letra:
                  </span>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginTop: '0.15rem' }}>
                    "{item.literalTranslation}"
                  </p>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>
                    Significado Real em TI:
                  </span>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700, marginTop: '0.15rem' }}>
                    {item.realItMeaning}
                  </p>
                </div>
              </div>

              {/* Mnemonic Trigger Box */}
              <div style={{
                backgroundColor: 'var(--bg-subcard)',
                border: '1.5px solid #f59e0b',
                padding: '0.85rem 1rem',
                borderRadius: '0.85rem',
                display: 'flex',
                gap: '0.6rem',
                alignItems: 'flex-start'
              }}>
                <Lightbulb size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#d97706', textTransform: 'uppercase' }}>
                    Gatilho de Memorização (Para não esquecer):
                  </span>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.88rem', lineHeight: '1.45', marginTop: '0.2rem' }}>
                    {item.mnemonicTrigger}
                  </p>
                </div>
              </div>

              {/* Example with Audio */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--bg-subcard)',
                padding: '0.6rem 0.85rem',
                borderRadius: '0.6rem',
                border: '1px dashed var(--bg-border)',
                gap: '0.5rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 700, display: 'block' }}>
                    "{item.exampleEn}"
                  </span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    "{item.examplePt}"
                  </span>
                </div>
                <button
                  onClick={(e) => handlePlayAudio(e, `${item.id}-ex`, item.exampleEn)}
                  title="Ouvir frase de exemplo"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '0.3rem',
                    display: 'flex'
                  }}
                >
                  <Volume2 size={16} />
                </button>
              </div>

              {/* Bottom Checklist Action Button */}
              <button
                onClick={() => handleCheckboxClick(item.id)}
                className={`btn-3d ${isMemorized ? 'btn-3d-green' : 'btn-3d-secondary'}`}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem'
                }}
              >
                {isMemorized ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Memorizado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Circle size={18} />
                    <span>Marcar como Memorizado</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
