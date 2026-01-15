export type PuzzleCategory = 
  | 'number-series'
  | 'logical-patterns'
  | 'missing-number'
  | 'odd-one-out'
  | 'word-logic'
  | 'general-knowledge'
  | 'math-puzzles'
  | 'memory-sequence'
  | 'spatial-reasoning'
  | 'code-breaker'
  | 'riddles'
  | 'speed-math'
  | 'visual-puzzles'
  | 'word-scramble'
  | 'sequence-completion'
  | 'true-false';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Puzzle {
  id: string;
  category: PuzzleCategory;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  timeLimit: number; // in seconds
  points: number;
}

export interface GameState {
  currentScreen: 'landing' | 'category' | 'difficulty' | 'game' | 'feedback' | 'result' | 'progress';
  selectedCategory: PuzzleCategory | null;
  selectedDifficulty: Difficulty | null;
  currentPuzzleIndex: number;
  puzzles: Puzzle[];
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  timeBonus: number;
  streak: number;
  bestStreak: number;
  answers: { puzzleId: string; answer: string; correct: boolean; timeTaken: number }[];
  lastAnswer: { correct: boolean; explanation: string } | null;
}

export interface UserProgress {
  totalPuzzlesSolved: number;
  totalCorrect: number;
  totalWrong: number;
  highestScore: number;
  bestStreak: number;
  levelsCompleted: {
    beginner: boolean;
    intermediate: boolean;
    advanced: boolean;
    expert: boolean;
  };
  categoryStats: Record<PuzzleCategory, { solved: number; correct: number }>;
}

export type GameAction =
  | { type: 'SET_SCREEN'; payload: GameState['currentScreen'] }
  | { type: 'SELECT_CATEGORY'; payload: PuzzleCategory }
  | { type: 'SELECT_DIFFICULTY'; payload: Difficulty }
  | { type: 'START_GAME'; payload: Puzzle[] }
  | { type: 'SUBMIT_ANSWER'; payload: { answer: string; timeTaken: number } }
  | { type: 'NEXT_PUZZLE' }
  | { type: 'SHOW_FEEDBACK'; payload: { correct: boolean; explanation: string } }
  | { type: 'TIMEOUT' }
  | { type: 'FINISH_GAME' }
  | { type: 'RESET_GAME' };
