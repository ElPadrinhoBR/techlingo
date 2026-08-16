import React from 'react';
import { Map, BookOpen, Dumbbell, Trophy, Brain } from 'lucide-react';
import { soundService } from '../services/soundService';

export type TabType = 'learn' | 'glossary' | 'practice' | 'expressions' | 'profile';

interface NavigationProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  memorizedCount?: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  onSelectTab,
  memorizedCount = 0
}) => {
  const tabs = [
    { id: 'learn' as TabType, label: 'Trilhas', icon: Map },
    { id: 'glossary' as TabType, label: 'Dicionário', icon: BookOpen },
    { id: 'practice' as TabType, label: 'Praticar', icon: Dumbbell },
    { id: 'expressions' as TabType, label: 'Memorizar', icon: Brain, badge: memorizedCount > 0 ? memorizedCount : undefined },
    { id: 'profile' as TabType, label: 'Conquistas', icon: Trophy },
  ];

  return (
    <nav style={{
      position: 'sticky',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 35,
      backgroundColor: '#0f172a',
      borderTop: '2px solid #1e293b',
      padding: '0.4rem 0.5rem'
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                soundService.playClick();
                onSelectTab(tab.id);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
                padding: '0.35rem 0.6rem',
                borderRadius: '0.75rem',
                border: 'none',
                background: isActive ? '#1e293b' : 'transparent',
                color: isActive ? '#10b981' : '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                fontWeight: isActive ? 800 : 600,
                fontSize: '0.72rem',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative' }}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {tab.badge !== undefined && (
                  <span style={{
                    position: 'absolute',
                    top: '-6px',
                    right: '-8px',
                    backgroundColor: '#10b981',
                    color: '#ffffff',
                    fontSize: '0.6rem',
                    fontWeight: 900,
                    borderRadius: '999px',
                    padding: '0.1rem 0.35rem',
                    lineHeight: 1
                  }}>
                    {tab.badge}
                  </span>
                )}
              </div>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
