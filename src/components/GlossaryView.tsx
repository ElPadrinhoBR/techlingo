import React, { useState } from 'react';
import { Search, Volume2, BookOpen, Tag, Sparkles, Filter } from 'lucide-react';
import { GlossaryItem } from '../types';
import { glossaryData } from '../data/glossary';
import { speechService } from '../services/speechService';
import { soundService } from '../services/soundService';

export const GlossaryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = [
    'Todos',
    'Infra & Cloud',
    'Ágil & Projetos',
    'Governança & ITIL',
    'Segurança & Dados',
    'Operações & Negócios'
  ];

  const filteredItems = glossaryData.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.itDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.acronymFull && item.acronymFull.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'Todos' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const [playingText, setPlayingText] = useState<string | null>(null);

  const handlePlayAudio = async (text: string) => {
    setPlayingText(text);
    await speechService.speak(text);
    setPlayingText(null);
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
      {/* Header */}
      <div style={{
        backgroundColor: '#131b2e',
        border: '2px solid #243253',
        borderRadius: '1.25rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#10b981' }}>
          <BookOpen size={24} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>
            Dicionário Técnico de Gestão de TI
          </h2>
        </div>
        <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
          Consulte termos essenciais, ouça a pronúncia em inglês nativo e entenda a aplicação prática para gestores de tecnologia.
        </p>
      </div>

      {/* Search Input */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Search
          size={20}
          color="#94a3b8"
          style={{ position: 'absolute', left: '1rem', pointerEvents: 'none' }}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquisar por termo em inglês ou significado (ex: SLA, Downtime, Sprint, Deploy)..."
          style={{
            width: '100%',
            padding: '0.85rem 1rem 0.85rem 2.8rem',
            backgroundColor: '#0f172a',
            border: '2px solid #1e293b',
            borderRadius: '1rem',
            color: '#f8fafc',
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
              color: '#94a3b8',
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
                border: isSelected ? '1.5px solid #10b981' : '1px solid #243253',
                backgroundColor: isSelected ? '#064e3b' : '#131b2e',
                color: isSelected ? '#34d399' : '#94a3b8',
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

      {/* Results Count */}
      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
        Exibindo {filteredItems.length} {filteredItems.length === 1 ? 'termo' : 'termos'}
      </div>

      {/* Terms Cards Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filteredItems.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            backgroundColor: '#131b2e',
            borderRadius: '1rem',
            border: '1px solid #1e293b',
            color: '#94a3b8'
          }}>
            Nenhum termo técnico encontrado para "{searchQuery}".
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="animate-pop-in"
              style={{
                backgroundColor: '#131b2e',
                border: '2px solid #243253',
                borderRadius: '1.25rem',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {item.term}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' }}>
                      {item.phonetic}
                    </span>
                  </div>

                  {item.acronymFull && (
                    <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 700 }}>
                      Extenso: {item.acronymFull}
                    </span>
                  )}

                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>
                    {item.translation}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    backgroundColor: '#0f172a',
                    color: '#94a3b8',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #1e293b'
                  }}>
                    {item.category}
                  </span>

                  <button
                    onClick={() => handlePlayAudio(item.term)}
                    title="Escutar pronúncia"
                    className={`btn-3d ${playingText === item.term ? 'btn-3d-green' : 'btn-3d-blue'}`}
                    style={{
                      width: '38px',
                      height: '38px',
                      padding: 0,
                      borderRadius: '50%',
                      transform: playingText === item.term ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
              </div>

              {/* Definition */}
              <p style={{ color: '#e2e8f0', fontSize: '0.92rem', lineHeight: '1.5' }}>
                {item.itDefinition}
              </p>

              {/* Management Context */}
              <div style={{
                backgroundColor: '#0f172a',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                borderLeft: '3px solid #3b82f6',
                fontSize: '0.875rem',
                color: '#93c5fd'
              }}>
                <strong>Visão de Gestão:</strong> {item.managementContext}
              </div>

              {/* Example with Audio */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#0b101d',
                padding: '0.6rem 0.85rem',
                borderRadius: '0.6rem',
                border: '1px dashed #1e293b',
                gap: '0.5rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: '#f8fafc', fontWeight: 700, display: 'block' }}>
                    "{item.exampleEn}"
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    "{item.examplePt}"
                  </span>
                </div>
                <button
                  onClick={() => handlePlayAudio(item.exampleEn)}
                  title="Ouvir frase de exemplo"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#38bdf8',
                    cursor: 'pointer',
                    padding: '0.3rem',
                    display: 'flex'
                  }}
                >
                  <Volume2 size={16} />
                </button>
              </div>

              {/* Related Terms */}
              {item.relatedTerms && item.relatedTerms.length > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <Tag size={13} color="#64748b" />
                  <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700 }}>Relacionados:</span>
                  {item.relatedTerms.map((rel, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSearchQuery(rel)}
                      style={{
                        fontSize: '0.75rem',
                        color: '#38bdf8',
                        backgroundColor: '#1e293b',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '0.4rem',
                        cursor: 'pointer'
                      }}
                    >
                      {rel}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
