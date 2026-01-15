import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Difficulty } from '../../types/puzzle';
import { useGame } from '../../context/GameContext';
import { isDifficultyUnlocked } from '../../utils/gameLogic';
import { getCategoryName } from '../../data/puzzles';

interface JourneyMapProps {
  onSelectLevel: (difficulty: Difficulty) => void;
  onBack: () => void;
}

const levels: { id: Difficulty; name: string; color: string }[] = [
  { id: 'beginner', name: 'Beginner', color: '#39ff14' },
  { id: 'intermediate', name: 'Intermediate', color: '#ffff00' },
  { id: 'advanced', name: 'Advanced', color: '#ff00ff' },
  { id: 'expert', name: 'Expert', color: '#bf00ff' }
];

export const JourneyMap: React.FC<JourneyMapProps> = ({ onSelectLevel, onBack }) => {
  const { state, progress } = useGame();
  const categoryName = state.selectedCategory ? getCategoryName(state.selectedCategory) : '';

  // Handle browser back button / touchpad swipe
  useEffect(() => {
    const handlePopState = () => {
      onBack();
    };
    
    window.history.pushState({ screen: 'difficulty' }, '');
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center px-4 py-6 relative overflow-hidden">
      
      {/* Back Button */}
      <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} onClick={onBack}
        className="absolute top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-lg border border-[#bf00ff] text-[#bf00ff] bg-[#12121a] hover:bg-[#bf00ff]/20 transition-all"
        style={{ boxShadow: '0 0 15px rgba(191,0,255,0.2)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-medium">Back</span>
      </motion.button>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              width: 2 + Math.random() * 2, height: 2 + Math.random() * 2,
              backgroundColor: ['#00f5ff', '#bf00ff', '#39ff14', '#ff00ff'][i % 4] }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5 + Math.random(), repeat: Infinity, delay: i * 0.05 }} />
        ))}
      </div>

      {/* Welcome Message with Category Name */}
      <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="text-center mt-12 mb-2">
        <p className="text-gray-400 text-sm mb-1">Welcome to</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="text-[#00f5ff]" style={{ textShadow: '0 0 15px #00f5ff' }}>{categoryName}</span>
        </h1>
      </motion.div>

      <motion.h2 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
        className="text-xl md:text-2xl font-bold text-center mb-1">
        <span className="text-white">Choose Your </span>
        <span className="text-[#bf00ff]" style={{ textShadow: '0 0 10px #bf00ff' }}>Track</span>
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-gray-400 text-sm mb-8">Pick a difficulty to begin your adventure</motion.p>

      {/* Vertical Journey Path */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
          <motion.div className="w-full h-full rounded-full"
            style={{ background: 'linear-gradient(to bottom, #39ff14, #ffff00, #ff00ff, #bf00ff)' }}
            initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 0.4 }}
            transition={{ duration: 1, ease: 'easeOut' }} />
        </div>

        {/* Level Nodes */}
        <div className="relative flex flex-col gap-6">
          {levels.map((level, index) => {
            const unlocked = isDifficultyUnlocked(level.id, progress);
            const completed = progress.levelsCompleted[level.id];
            const isLeft = index % 2 === 0;

            return (
              <motion.div key={level.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                
                {/* Card */}
                <motion.button
                  whileHover={unlocked ? { scale: 1.03 } : {}}
                  whileTap={unlocked ? { scale: 0.97 } : {}}
                  onClick={() => unlocked && onSelectLevel(level.id)}
                  disabled={!unlocked}
                  className={`flex-1 p-4 rounded-xl border-2 transition-all ${unlocked ? 'cursor-pointer bg-[#12121a]' : 'cursor-not-allowed bg-[#0a0a0f] opacity-50'}`}
                  style={{ borderColor: unlocked ? level.color : '#333', boxShadow: unlocked ? `0 0 20px ${level.color}25` : 'none' }}>
                  <div className={`flex items-center gap-3 ${isLeft ? '' : 'flex-row-reverse'}`}>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: unlocked ? level.color : '#444', backgroundColor: unlocked ? `${level.color}15` : '#1a1a1a' }}>
                      {unlocked ? (
                        completed ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12l5 5L20 7" stroke={level.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill={level.color}>
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2">
                          <rect x="5" y="11" width="14" height="10" rx="2"/>
                          <path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                      )}
                    </div>
                    {/* Text */}
                    <div className={isLeft ? 'text-left' : 'text-right'}>
                      <p className="font-bold" style={{ color: unlocked ? level.color : '#555' }}>{level.name}</p>
                      <p className="text-xs text-gray-500">{unlocked ? (completed ? 'Completed!' : 'Ready to play') : 'Locked'}</p>
                    </div>
                  </div>
                </motion.button>

                {/* Center Node */}
                <div className="relative z-10">
                  <motion.div className="w-5 h-5 rounded-full border-3"
                    style={{ backgroundColor: unlocked ? level.color : '#333', borderColor: '#0a0a0f',
                      boxShadow: unlocked ? `0 0 15px ${level.color}` : 'none' }}
                    animate={unlocked && !completed ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }} />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
