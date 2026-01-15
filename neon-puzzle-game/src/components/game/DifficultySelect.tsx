import { motion } from 'framer-motion';
import { NeonCard } from '../common/NeonCard';
import { NeonButton } from '../common/NeonButton';
import type { Difficulty, PuzzleCategory } from '../../types/puzzle';
import { useGame } from '../../context/GameContext';
import { isDifficultyUnlocked } from '../../utils/gameLogic';
import { getCategoryName, getCategoryIcon } from '../../data/puzzles';

interface DifficultySelectProps {
  category: PuzzleCategory;
  onSelect: (difficulty: Difficulty) => void;
  onBack: () => void;
}

const difficulties: { id: Difficulty; label: string; icon: string; color: string; variant: 'cyan' | 'purple' | 'green' | 'pink' }[] = [
  { id: 'beginner', label: 'Beginner', icon: '🟢', color: '#39ff14', variant: 'green' },
  { id: 'intermediate', label: 'Intermediate', icon: '🟡', color: '#ffff00', variant: 'cyan' },
  { id: 'advanced', label: 'Advanced', icon: '🔴', color: '#ff00ff', variant: 'pink' },
  { id: 'expert', label: 'Expert', icon: '🟣', color: '#bf00ff', variant: 'purple' }
];

export const DifficultySelect: React.FC<DifficultySelectProps> = ({ category, onSelect, onBack }) => {
  const { progress } = useGame();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <div className="text-6xl mb-4">{getCategoryIcon(category)}</div>
      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center mb-2"
      >
        <span className="text-[#00f5ff] neon-text-cyan">{getCategoryName(category)}</span>
      </motion.h1>
      <p className="text-gray-400 text-lg mb-10">Select your difficulty level</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full mb-10">
        {difficulties.map((diff, index) => {
          const unlocked = isDifficultyUnlocked(diff.id, progress);
          return (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <NeonCard
                variant={diff.variant}
                onClick={unlocked ? () => onSelect(diff.id) : undefined}
                className={`text-center ${!unlocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                glowOnHover={unlocked}
              >
                <div className="text-5xl mb-3">{diff.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{diff.label}</h3>
                {!unlocked && (
                  <p className="text-gray-500 text-sm">🔒 Complete previous levels to unlock</p>
                )}
              </NeonCard>
            </motion.div>
          );
        })}
      </div>
      
      <NeonButton onClick={onBack} variant="purple">
        ← Back to Categories
      </NeonButton>
    </motion.div>
  );
};
