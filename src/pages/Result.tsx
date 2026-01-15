import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { NeonButton } from '../components/common/NeonButton';
import { NeonCard } from '../components/common/NeonCard';
import { CheckIcon, CrossIcon, TrophyIcon } from '../components/common/NeonIcons';
import { getAccuracyPercentage } from '../utils/gameLogic';
import { getCategoryName } from '../data/puzzles';

interface ResultProps {
  onPlayAgain: () => void;
  onHome: () => void;
  onProgress: () => void;
}

export const Result: React.FC<ResultProps> = ({ onPlayAgain, onHome, onProgress }) => {
  const { state, finishAndSaveProgress } = useGame();
  const accuracy = getAccuracyPercentage(state.correctAnswers, state.correctAnswers + state.wrongAnswers);

  useEffect(() => {
    finishAndSaveProgress();
  }, []);

  const getPerformance = () => {
    if (accuracy >= 90) return { color: '#ffd700', message: 'Outstanding! You\'re a genius!' };
    if (accuracy >= 70) return { color: '#39ff14', message: 'Great job! Keep it up!' };
    if (accuracy >= 50) return { color: '#00f5ff', message: 'Good effort! Practice makes perfect!' };
    return { color: '#ff00ff', message: 'Don\'t give up! Try again!' };
  };

  const perf = getPerformance();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} className="mb-6">
        <TrophyIcon size={80} color={perf.color} />
      </motion.div>

      <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4">
        <span className="text-white">Game </span>
        <span className="text-[#00f5ff]" style={{ textShadow: '0 0 15px #00f5ff' }}>Complete!</span>
      </motion.h1>

      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-xl text-gray-300 mb-8">{perf.message}</motion.p>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full mb-10">
        <NeonCard variant="cyan" glowOnHover={false} className="text-center">
          <div className="text-3xl font-bold text-[#00f5ff]">{state.score}</div>
          <div className="text-gray-400 text-sm">Score</div>
        </NeonCard>
        <NeonCard variant="green" glowOnHover={false} className="text-center">
          <div className="text-3xl font-bold text-[#39ff14]">{state.correctAnswers}</div>
          <div className="text-gray-400 text-sm">Correct</div>
        </NeonCard>
        <NeonCard variant="pink" glowOnHover={false} className="text-center">
          <div className="text-3xl font-bold text-[#ff00ff]">{state.wrongAnswers}</div>
          <div className="text-gray-400 text-sm">Wrong</div>
        </NeonCard>
        <NeonCard variant="purple" glowOnHover={false} className="text-center">
          <div className="text-3xl font-bold text-[#bf00ff]">{accuracy}%</div>
          <div className="text-gray-400 text-sm">Accuracy</div>
        </NeonCard>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
        className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-6 max-w-md w-full mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400">Category</span>
          <span className="text-white font-bold">{state.selectedCategory ? getCategoryName(state.selectedCategory) : '-'}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400">Difficulty</span>
          <span className="text-white font-bold capitalize">{state.selectedDifficulty || '-'}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400">Best Streak</span>
          <span className="text-[#ff6600] font-bold">{state.bestStreak}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Time Bonus</span>
          <span className="text-[#00f5ff] font-bold">+{state.timeBonus}</span>
        </div>
      </motion.div>

      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4">
        <NeonButton onClick={onPlayAgain} variant="cyan" size="lg">Play Again</NeonButton>
        <NeonButton onClick={onProgress} variant="purple" size="lg">View Progress</NeonButton>
        <NeonButton onClick={onHome} variant="green" size="lg">Home</NeonButton>
      </motion.div>
    </motion.div>
  );
};
