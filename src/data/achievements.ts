import { Achievement } from '../types';

export const achievementsData: Achievement[] = [
  {
    id: 'ach-first-step',
    title: 'Primeiro Deploy',
    description: 'Conclua a sua primeira lição de inglês técnico.',
    icon: 'Rocket',
    category: 'progress',
    isUnlocked: (p) => p.completedLessonIds.length >= 1
  },
  {
    id: 'ach-cloud-native',
    title: 'Nativo da Nuvem',
    description: 'Conclua as lições da Unidade 1 (Infraestrutura & Redes).',
    icon: 'Cloud',
    category: 'progress',
    isUnlocked: (p) => ['lesson-1-1', 'lesson-1-2'].every(id => p.completedLessonIds.includes(id))
  },
  {
    id: 'ach-agile-master',
    title: 'Mestre do Scrum',
    description: 'Conclua as lições da Unidade 2 (Metodologias Ágeis & Projetos).',
    icon: 'Kanban',
    category: 'progress',
    isUnlocked: (p) => p.completedLessonIds.includes('lesson-2-1')
  },
  {
    id: 'ach-sla-champion',
    title: 'Guardião do SLA',
    description: 'Conclua as lições da Unidade 3 (Governança & ITIL 4).',
    icon: 'ShieldCheck',
    category: 'progress',
    isUnlocked: (p) => p.completedLessonIds.includes('lesson-3-1')
  },
  {
    id: 'ach-security-officer',
    title: 'Ciberdefensor',
    description: 'Conclua as lições da Unidade 4 (Cibersegurança & LGPD).',
    icon: 'Lock',
    category: 'progress',
    isUnlocked: (p) => p.completedLessonIds.includes('lesson-4-1')
  },
  {
    id: 'ach-python-starter',
    title: 'Pythonista em TI',
    description: 'Conclua a sua primeira lição da Trilha Python.',
    icon: 'Code',
    category: 'progress',
    isUnlocked: (p) => p.completedLessonIds.includes('py-lesson-1-1')
  },
  {
    id: 'ach-python-pro',
    title: 'Mestre em Automação Python',
    description: 'Conclua todas as unidades de Python da plataforma.',
    icon: 'Zap',
    category: 'progress',
    isUnlocked: (p) => ['py-lesson-1-1', 'py-lesson-1-2', 'py-lesson-2-1', 'py-lesson-2-2', 'py-lesson-3-1', 'py-lesson-4-1'].every(id => p.completedLessonIds.includes(id))
  },
  {
    id: 'ach-memory-master',
    title: 'Mente Brilhante de TI',
    description: 'Memorize 10 ou mais expressões corporativas e mnemônicos.',
    icon: 'Brain',
    category: 'special',
    isUnlocked: (p) => p.memorizedExpressionIds.length >= 10
  },
  {
    id: 'ach-streak-3',
    title: 'Ofensiva Ativa',
    description: 'Mantenha 3 dias consecutivos de aprendizado.',
    icon: 'Flame',
    category: 'streak',
    isUnlocked: (p) => p.currentStreak >= 3
  },
  {
    id: 'ach-xp-300',
    title: 'Tech Lead do Inglês',
    description: 'Acumule 300 XP ou mais.',
    icon: 'Crown',
    category: 'progress',
    isUnlocked: (p) => p.totalXp >= 300
  },
  {
    id: 'ach-xp-1000',
    title: 'CIO Supremo',
    description: 'Acumule 1000 XP dominando Gestão de TI e Programação.',
    icon: 'Crown',
    category: 'progress',
    isUnlocked: (p) => p.totalXp >= 1000
  }
];
