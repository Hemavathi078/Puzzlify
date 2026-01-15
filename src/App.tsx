import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GameProvider, useGame } from './context/GameContext';
import { Landing } from './pages/Landing';
import { Game } from './pages/Game';
import { Result } from './pages/Result';
import { Progress } from './pages/Progress';
import { CategorySelect } from './components/game/CategorySelect';
import { JourneyMap } from './components/game/JourneyMap';
import { FeedbackScreen } from './components/feedback/FeedbackScreen';
import { WelcomePopup } from './components/common/WelcomePopup';
import type { PuzzleCategory, Difficulty } from './types/puzzle';

const AppContent: React.FC = () => {
  const { state, dispatch, startGame } = useGame();

  // Scroll to top when screen changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.currentScreen]);

  const handleStartPlaying = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'category' });
  };

  const handleSelectCategory = (category: PuzzleCategory) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: category });
    dispatch({ type: 'SET_SCREEN', payload: 'difficulty' });
  };

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    dispatch({ type: 'SELECT_DIFFICULTY', payload: difficulty });
    if (state.selectedCategory) {
      startGame(state.selectedCategory, difficulty);
    }
  };

  const handleNextPuzzle = () => {
    dispatch({ type: 'NEXT_PUZZLE' });
  };

  const handlePlayAgain = () => {
    if (state.selectedCategory && state.selectedDifficulty) {
      startGame(state.selectedCategory, state.selectedDifficulty);
    }
  };

  const handleHome = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  const handleProgress = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'progress' });
  };

  const handleExitGame = () => {
    dispatch({ type: 'RESET_GAME' });
  };

  const handleBackToCategories = () => {
    dispatch({ type: 'SET_SCREEN', payload: 'category' });
  };

  const handleSelectCategoryFromLanding = (category: PuzzleCategory) => {
    dispatch({ type: 'SELECT_CATEGORY', payload: category });
    dispatch({ type: 'SET_SCREEN', payload: 'difficulty' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <WelcomePopup onStartPlaying={handleStartPlaying} />
      <AnimatePresence mode="wait">
        {state.currentScreen === 'landing' && (
          <Landing 
            key="landing" 
            onStartPlaying={handleStartPlaying} 
            onSelectCategory={handleSelectCategoryFromLanding}
          />
        )}
        
        {state.currentScreen === 'category' && (
          <CategorySelect
            key="category"
            onSelect={handleSelectCategory}
            onBack={handleHome}
          />
        )}
        
        {state.currentScreen === 'difficulty' && state.selectedCategory && (
          <JourneyMap
            key="difficulty"
            onSelectLevel={handleSelectDifficulty}
            onBack={handleBackToCategories}
          />
        )}
        
        {state.currentScreen === 'game' && (
          <Game key="game" onExit={handleExitGame} />
        )}
        
        {state.currentScreen === 'feedback' && state.lastAnswer && (
          <FeedbackScreen
            key="feedback"
            correct={state.lastAnswer.correct}
            explanation={state.lastAnswer.explanation}
            streak={state.streak}
            onContinue={handleNextPuzzle}
          />
        )}
        
        {state.currentScreen === 'result' && (
          <Result
            key="result"
            onPlayAgain={handlePlayAgain}
            onHome={handleHome}
            onProgress={handleProgress}
          />
        )}
        
        {state.currentScreen === 'progress' && (
          <Progress key="progress" onBack={handleHome} />
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
