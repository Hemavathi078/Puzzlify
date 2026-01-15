import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import type { GameState, GameAction, UserProgress, PuzzleCategory, Difficulty } from '../types/puzzle';
import { loadProgress, updateProgress, calculateTimeBonus, calculateScore, getPuzzlesForGame } from '../utils/gameLogic';

const initialState: GameState = {
  currentScreen: 'landing',
  selectedCategory: null,
  selectedDifficulty: null,
  currentPuzzleIndex: 0,
  puzzles: [],
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  timeBonus: 0,
  streak: 0,
  bestStreak: 0,
  answers: [],
  lastAnswer: null
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, currentScreen: action.payload };
    case 'SELECT_CATEGORY':
      return { ...state, selectedCategory: action.payload, currentScreen: 'difficulty' };
    case 'SELECT_DIFFICULTY':
      return { ...state, selectedDifficulty: action.payload };
    case 'START_GAME':
      return {
        ...state,
        currentScreen: 'game',
        puzzles: action.payload,
        currentPuzzleIndex: 0,
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        timeBonus: 0,
        streak: 0,
        bestStreak: 0,
        answers: [],
        lastAnswer: null
      };
    case 'SUBMIT_ANSWER': {
      const currentPuzzle = state.puzzles[state.currentPuzzleIndex];
      const isCorrect = action.payload.answer === currentPuzzle.correctAnswer;
      const timeBonus = isCorrect ? calculateTimeBonus(currentPuzzle.timeLimit, action.payload.timeTaken) : 0;
      const newStreak = isCorrect ? state.streak + 1 : 0;
      const pointsEarned = isCorrect ? calculateScore(currentPuzzle.points, timeBonus, state.streak) : 0;
      return {
        ...state,
        score: state.score + pointsEarned,
        correctAnswers: isCorrect ? state.correctAnswers + 1 : state.correctAnswers,
        wrongAnswers: isCorrect ? state.wrongAnswers : state.wrongAnswers + 1,
        timeBonus: state.timeBonus + timeBonus,
        streak: newStreak,
        bestStreak: Math.max(state.bestStreak, newStreak),
        answers: [...state.answers, {
          puzzleId: currentPuzzle.id,
          answer: action.payload.answer,
          correct: isCorrect,
          timeTaken: action.payload.timeTaken
        }],
        lastAnswer: { correct: isCorrect, explanation: currentPuzzle.explanation },
        currentScreen: 'feedback'
      };
    }
    case 'TIMEOUT': {
      const currentPuzzle = state.puzzles[state.currentPuzzleIndex];
      return {
        ...state,
        wrongAnswers: state.wrongAnswers + 1,
        streak: 0,
        answers: [...state.answers, {
          puzzleId: currentPuzzle.id,
          answer: '',
          correct: false,
          timeTaken: currentPuzzle.timeLimit
        }],
        lastAnswer: { correct: false, explanation: currentPuzzle.explanation },
        currentScreen: 'feedback'
      };
    }
    case 'NEXT_PUZZLE': {
      const nextIndex = state.currentPuzzleIndex + 1;
      if (nextIndex >= state.puzzles.length) {
        return { ...state, currentScreen: 'result' };
      }
      return { ...state, currentPuzzleIndex: nextIndex, currentScreen: 'game', lastAnswer: null };
    }
    case 'SHOW_FEEDBACK':
      return { ...state, lastAnswer: action.payload, currentScreen: 'feedback' };
    case 'FINISH_GAME':
      return { ...state, currentScreen: 'result' };
    case 'RESET_GAME':
      return { ...initialState };
    default:
      return state;
  }
}

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  progress: UserProgress;
  setProgress: React.Dispatch<React.SetStateAction<UserProgress>>;
  startGame: (category: PuzzleCategory, difficulty: Difficulty) => void;
  finishAndSaveProgress: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [progress, setProgress] = useState<UserProgress>(loadProgress);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  const startGame = (category: PuzzleCategory, difficulty: Difficulty) => {
    const gamePuzzles = getPuzzlesForGame(category, difficulty, 10);
    dispatch({ type: 'START_GAME', payload: gamePuzzles });
  };

  const finishAndSaveProgress = () => {
    if (state.selectedCategory && state.selectedDifficulty) {
      const updated = updateProgress(
        progress,
        state.selectedCategory,
        state.selectedDifficulty,
        state.correctAnswers,
        state.wrongAnswers,
        state.score,
        state.bestStreak
      );
      setProgress(updated);
    }
  };

  return (
    <GameContext.Provider value={{ state, dispatch, progress, setProgress, startGame, finishAndSaveProgress }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
