import type { Puzzle, PuzzleCategory, Difficulty, UserProgress } from '../types/puzzle';
import { allPuzzles } from '../data/puzzles';

const STORAGE_KEY = 'neon-puzzle-progress';

export const getPuzzlesByCategory = (category: PuzzleCategory): Puzzle[] => {
  return allPuzzles.filter(p => p.category === category);
};

export const getPuzzlesByDifficulty = (difficulty: Difficulty): Puzzle[] => {
  return allPuzzles.filter(p => p.difficulty === difficulty);
};

export const getPuzzlesForGame = (category: PuzzleCategory, difficulty: Difficulty, count: number = 10): Puzzle[] => {
  const filtered = allPuzzles.filter(p => p.category === category && p.difficulty === difficulty);
  return shuffleArray(filtered).slice(0, count);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const calculateTimeBonus = (timeLimit: number, timeTaken: number): number => {
  const timeRemaining = timeLimit - timeTaken;
  if (timeRemaining <= 0) return 0;
  const bonusPercentage = timeRemaining / timeLimit;
  return Math.floor(bonusPercentage * 5);
};

export const calculateScore = (basePoints: number, timeBonus: number, streak: number): number => {
  const streakMultiplier = 1 + (streak * 0.1);
  return Math.floor((basePoints + timeBonus) * streakMultiplier);
};

export const getDefaultProgress = (): UserProgress => ({
  totalPuzzlesSolved: 0,
  totalCorrect: 0,
  totalWrong: 0,
  highestScore: 0,
  bestStreak: 0,
  levelsCompleted: {
    beginner: false,
    intermediate: false,
    advanced: false,
    expert: false
  },
  categoryStats: {
    'number-series': { solved: 0, correct: 0 },
    'logical-patterns': { solved: 0, correct: 0 },
    'missing-number': { solved: 0, correct: 0 },
    'odd-one-out': { solved: 0, correct: 0 },
    'word-logic': { solved: 0, correct: 0 },
    'general-knowledge': { solved: 0, correct: 0 },
    'math-puzzles': { solved: 0, correct: 0 },
    'memory-sequence': { solved: 0, correct: 0 },
    'spatial-reasoning': { solved: 0, correct: 0 },
    'code-breaker': { solved: 0, correct: 0 },
    'riddles': { solved: 0, correct: 0 },
    'speed-math': { solved: 0, correct: 0 },
    'visual-puzzles': { solved: 0, correct: 0 },
    'word-scramble': { solved: 0, correct: 0 },
    'sequence-completion': { solved: 0, correct: 0 },
    'true-false': { solved: 0, correct: 0 }
  }
});

export const loadProgress = (): UserProgress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return getDefaultProgress();
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
};

export const updateProgress = (
  currentProgress: UserProgress,
  category: PuzzleCategory,
  difficulty: Difficulty,
  correct: number,
  wrong: number,
  score: number,
  streak: number
): UserProgress => {
  const updated = { ...currentProgress };
  
  updated.totalPuzzlesSolved += correct + wrong;
  updated.totalCorrect += correct;
  updated.totalWrong += wrong;
  
  if (score > updated.highestScore) {
    updated.highestScore = score;
  }
  
  if (streak > updated.bestStreak) {
    updated.bestStreak = streak;
  }
  
  if (correct >= 7) {
    updated.levelsCompleted[difficulty] = true;
  }
  
  updated.categoryStats[category].solved += correct + wrong;
  updated.categoryStats[category].correct += correct;
  
  saveProgress(updated);
  return updated;
};

export const getAccuracyPercentage = (correct: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

export const isDifficultyUnlocked = (difficulty: Difficulty, progress: UserProgress): boolean => {
  switch (difficulty) {
    case 'beginner':
      return true;
    case 'intermediate':
      return progress.levelsCompleted.beginner || progress.totalCorrect >= 10;
    case 'advanced':
      return progress.levelsCompleted.intermediate || progress.totalCorrect >= 30;
    case 'expert':
      return progress.levelsCompleted.advanced || progress.totalCorrect >= 60;
    default:
      return false;
  }
};
