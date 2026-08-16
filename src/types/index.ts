export interface ConceptPill {
  id: string;
  term: string;
  phonetic?: string;
  category: string;
  translation: string;
  itExplanation: string; // Explicação de Gestão de TI / Programação em Português
  whyItMatters: string;  // Por que você precisa saber disso
  exampleSentenceEn: string;
  exampleSentencePt: string;
  keyTakeaway: string;
  codeSnippet?: string;  // Trecho de código ou consulta SQL opcional
}

export type ExerciseType = 'multiple_choice' | 'match_pairs' | 'fill_blank' | 'sentence_builder' | 'scenario';

export interface BaseExercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  promptHighlight?: string;
  conceptTerm?: string;
  audioPronunciation?: string;
}

export interface MultipleChoiceExercise extends BaseExercise {
  type: 'multiple_choice';
  options: string[];
  correctIndex: number;
  explanation: string;
  contextSnippet?: string;
  codeSnippet?: string;
}

export interface MatchPairsExercise extends BaseExercise {
  type: 'match_pairs';
  pairs: {
    id: string;
    english: string;
    portuguese: string;
  }[];
}

export interface FillBlankExercise extends BaseExercise {
  type: 'fill_blank';
  sentenceBefore: string;
  sentenceAfter: string;
  options: string[];
  correctAnswer: string;
  translation: string;
  explanation: string;
  codeSnippet?: string;
}

export interface SentenceBuilderExercise extends BaseExercise {
  type: 'sentence_builder';
  scrambledWords: string[];
  correctSentence: string[];
  portugueseTranslation: string;
}

export interface ScenarioExercise extends BaseExercise {
  type: 'scenario';
  role: string;
  contextTitle: string;
  situation: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export type Exercise =
  | MultipleChoiceExercise
  | MatchPairsExercise
  | FillBlankExercise
  | SentenceBuilderExercise
  | ScenarioExercise;

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  conceptPills: ConceptPill[];
  exercises: Exercise[];
  xpReward: number;
}

export type TrackId = 'gti' | 'python' | 'algorithms' | 'database';

export interface Module {
  id: string;
  trackId: TrackId;
  unitNumber: number;
  levelTag?: 'Iniciante' | 'Básico' | 'Intermediário' | 'Avançado';
  title: string;
  subtitle: string;
  description: string;
  themeColor: string; // Hex color
  accentColor: string;
  icon: string;
  lessons: Lesson[];
}

export interface UserProgress {
  completedLessonIds: string[];
  currentStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  totalXp: number;
  hearts: number;
  maxHearts: number;
  gems: number;
  unlockedAchievements: string[];
  glossaryFavorites: string[];
  memorizedExpressionIds: string[];
  activeTrackId: TrackId;
  soundEnabled: boolean;
  notificationsEnabled: boolean;
  dailyReminderHour: number; // 0-23 (e.g. 19 for 19:00)
  theme?: 'dark' | 'light';
}

export interface GlossaryItem {
  id: string;
  term: string;
  phonetic: string;
  acronymFull?: string;
  category: 'Infra & Cloud' | 'Ágil & Projetos' | 'Governança & ITIL' | 'Segurança & Dados' | 'Operações & Negócios' | 'Python & Código' | 'IA & Dados' | 'Algoritmos & Lógica' | 'Banco de Dados & SQL';
  translation: string;
  itDefinition: string;
  managementContext: string;
  exampleEn: string;
  examplePt: string;
  relatedTerms?: string[];
}

export interface MemorizationExpression {
  id: string;
  expression: string;
  phonetic: string;
  category: 'Reuniões & Negócios' | 'Gestão de Crise & Suporte' | 'Metodologias Ágeis' | 'Python & Lógica' | 'Infra & Cloud';
  literalTranslation: string;
  realItMeaning: string;
  mnemonicTrigger: string;
  exampleEn: string;
  examplePt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'progress' | 'streak' | 'accuracy' | 'special';
  isUnlocked: (progress: UserProgress) => boolean;
}
