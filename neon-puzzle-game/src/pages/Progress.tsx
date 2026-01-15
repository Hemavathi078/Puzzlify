import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';
import { NeonCard } from '../components/common/NeonCard';
import { getAccuracyPercentage } from '../utils/gameLogic';
import { getCategoryName } from '../data/puzzles';
import type { PuzzleCategory } from '../types/puzzle';

interface ProgressProps {
  onBack: () => void;
}

const categories: PuzzleCategory[] = [
  'number-series', 'logical-patterns', 'missing-number', 'odd-one-out', 'word-logic',
  'general-knowledge', 'math-puzzles', 'memory-sequence', 'spatial-reasoning',
  'code-breaker', 'riddles', 'speed-math', 'visual-puzzles', 'word-scramble',
  'sequence-completion', 'true-false'
];

export const Progress: React.FC<ProgressProps> = ({ onBack }) => {
  const { progress } = useGame();
  const overallAccuracy = getAccuracyPercentage(progress.totalCorrect, progress.totalPuzzlesSolved);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-6 px-4 relative">
      {/* Back Button */}
      <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={onBack}
        className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-lg border border-[#bf00ff] text-[#bf00ff] bg-[#12121a] hover:bg-[#bf00ff]/20 transition-all"
        style={{ boxShadow: '0 0 15px rgba(191,0,255,0.2)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-medium">Home</span>
      </motion.button>

      <div className="max-w-4xl mx-auto pt-12">
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="text-white">Your </span>
          <span className="text-[#00f5ff]" style={{ textShadow: '0 0 15px #00f5ff' }}>Progress</span>
        </motion.h1>
        <p className="text-gray-400 text-center mb-8">Track your brain training journey</p>

        {/* Stats */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          <NeonCard variant="cyan" glowOnHover={false} className="text-center p-4">
            <div className="text-2xl font-bold text-[#00f5ff]">{progress.totalPuzzlesSolved}</div>
            <div className="text-gray-400 text-xs">Solved</div>
          </NeonCard>
          <NeonCard variant="green" glowOnHover={false} className="text-center p-4">
            <div className="text-2xl font-bold text-[#39ff14]">{progress.totalCorrect}</div>
            <div className="text-gray-400 text-xs">Correct</div>
          </NeonCard>
          <NeonCard variant="purple" glowOnHover={false} className="text-center p-4">
            <div className="text-2xl font-bold text-[#bf00ff]">{overallAccuracy}%</div>
            <div className="text-gray-400 text-xs">Accuracy</div>
          </NeonCard>
          <NeonCard variant="pink" glowOnHover={false} className="text-center p-4">
            <div className="text-2xl font-bold text-[#ff00ff]">{progress.highestScore}</div>
            <div className="text-gray-400 text-xs">High Score</div>
          </NeonCard>
          <NeonCard variant="cyan" glowOnHover={false} className="text-center p-4">
            <div className="text-2xl font-bold text-[#ff6600]">{progress.bestStreak}</div>
            <div className="text-gray-400 text-xs">Best Streak</div>
          </NeonCard>
        </motion.div>

        {/* Levels */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="mb-8">
          <h2 className="text-xl font-bold text-white mb-3">Levels Completed</h2>
          <div className="flex flex-wrap gap-3">
            {(['beginner', 'intermediate', 'advanced', 'expert'] as const).map((level) => (
              <div key={level} className={`px-4 py-2 rounded-lg border ${progress.levelsCompleted[level]
                ? 'border-[#39ff14] bg-[#39ff14]/10 text-[#39ff14]' : 'border-[#333] bg-[#12121a] text-gray-500'}`}>
                {progress.levelsCompleted[level] ? '✓' : '○'} {level.charAt(0).toUpperCase() + level.slice(1)}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-xl font-bold text-white mb-3">Category Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {categories.map((cat) => {
              const stats = progress.categoryStats[cat] || { solved: 0, correct: 0 };
              const catAccuracy = getAccuracyPercentage(stats.correct, stats.solved);
              return (
                <div key={cat} className="bg-[#12121a] rounded-xl p-4 border border-[#1f1f2e] flex justify-between items-center">
                  <span className="text-white font-medium">{getCategoryName(cat)}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-gray-400">Solved: <span className="text-[#00f5ff]">{stats.solved}</span></span>
                    <span className="text-gray-400">Acc: <span className="text-[#39ff14]">{catAccuracy}%</span></span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
