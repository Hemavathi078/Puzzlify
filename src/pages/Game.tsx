import { useGame } from '../context/GameContext';
import { PuzzleCard } from '../components/game/PuzzleCard';
import { motion } from 'framer-motion';

interface GameProps {
  onExit: () => void;
}

export const Game: React.FC<GameProps> = ({ onExit }) => {
  const { state, dispatch } = useGame();
  const currentPuzzle = state.puzzles[state.currentPuzzleIndex];

  if (!currentPuzzle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-white text-xl mb-4">No puzzles available</p>
        <button onClick={onExit} className="text-[#bf00ff]">Go Back</button>
      </div>
    );
  }

  const handleAnswer = (answer: string, timeTaken: number) => {
    dispatch({ type: 'SUBMIT_ANSWER', payload: { answer, timeTaken } });
  };

  const handleTimeout = () => {
    dispatch({ type: 'TIMEOUT' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-6 px-4 relative"
    >
      {/* Exit Button - Top Right */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onExit}
        className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-lg border border-[#ff00ff] text-[#ff00ff] bg-[#12121a] hover:bg-[#ff00ff]/20 transition-all duration-200"
        style={{ boxShadow: '0 0 15px rgba(255,0,255,0.2)' }}
      >
        <span className="text-sm font-medium">Exit</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
        </svg>
      </motion.button>

      <div className="max-w-3xl mx-auto pt-8">
        <PuzzleCard
          key={currentPuzzle.id}
          puzzle={currentPuzzle}
          currentIndex={state.currentPuzzleIndex}
          totalPuzzles={state.puzzles.length}
          score={state.score}
          streak={state.streak}
          onAnswer={handleAnswer}
          onTimeout={handleTimeout}
        />
      </div>
    </motion.div>
  );
};
