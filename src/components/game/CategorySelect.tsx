import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { PuzzleCategory } from '../../types/puzzle';
import { getCategoryName } from '../../data/puzzles';

interface CategorySelectProps {
  onSelect: (category: PuzzleCategory) => void;
  onBack: () => void;
}

const categories: { id: PuzzleCategory; color: string; demo: string[]; emoji: string; example: string }[] = [
  { id: 'number-series', color: '#00f5ff', demo: ['2', '4', '6', '?'], emoji: '🔢', example: 'Find the next number' },
  { id: 'logical-patterns', color: '#bf00ff', demo: ['▲', '●', '▲', '?'], emoji: '🔷', example: 'Complete the pattern' },
  { id: 'missing-number', color: '#39ff14', demo: ['3', '×', '?', '=', '15'], emoji: '❓', example: 'Find the missing value' },
  { id: 'odd-one-out', color: '#ff00ff', demo: ['🍎', '🍌', '🥕', '🍇'], emoji: '🎯', example: 'Spot the different one' },
  { id: 'word-logic', color: '#00f5ff', demo: ['Hot', '→', 'Cold'], emoji: '💬', example: 'Find the relationship' },
  { id: 'general-knowledge', color: '#bf00ff', demo: ['🌍', '📚', '💡'], emoji: '🧠', example: 'Test your knowledge' },
  { id: 'math-puzzles', color: '#39ff14', demo: ['8', '×', '5', '=', '?'], emoji: '➕', example: 'Solve the equation' },
  { id: 'memory-sequence', color: '#ff00ff', demo: ['🔴', '🔵', '🟢', '?'], emoji: '🎮', example: 'Remember the order' },
  { id: 'spatial-reasoning', color: '#00f5ff', demo: ['⬡', '→', '🔄', '?'], emoji: '📐', example: 'Think in 3D' },
  { id: 'code-breaker', color: '#bf00ff', demo: ['A→1', 'B→2', 'C→?'], emoji: '🔐', example: 'Crack the cipher' },
  { id: 'riddles', color: '#39ff14', demo: ['🤔', '💭', '💡'], emoji: '🎭', example: 'Solve brain teasers' },
  { id: 'speed-math', color: '#ff00ff', demo: ['17', '×', '6', '=', '?'], emoji: '⚡', example: 'Quick calculations' },
  { id: 'visual-puzzles', color: '#00f5ff', demo: ['👁️', '🔍', '✨'], emoji: '🖼️', example: 'Count & observe' },
  { id: 'word-scramble', color: '#bf00ff', demo: ['P', 'U', 'Z', 'L', 'E'], emoji: '🔤', example: 'Unscramble words' },
  { id: 'sequence-completion', color: '#39ff14', demo: ['Mon', 'Tue', 'Wed', '?'], emoji: '📅', example: 'Complete the series' },
  { id: 'true-false', color: '#ff00ff', demo: ['✅', '❌', '?'], emoji: '⚖️', example: 'Fact or fiction?' }
];

export const CategorySelect: React.FC<CategorySelectProps> = ({ onSelect, onBack }) => {
  // Handle browser back button / touchpad swipe
  useEffect(() => {
    const handlePopState = () => {
      onBack();
    };
    
    // Push a state so we can detect back navigation
    window.history.pushState({ screen: 'category' }, '');
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [onBack]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center px-3 sm:px-4 py-4 sm:py-6 relative"
    >
      {/* Back Button - Top Left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onBack}
        className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-[#bf00ff] text-[#bf00ff] bg-[#12121a] hover:bg-[#bf00ff]/20 transition-all duration-200"
        style={{ boxShadow: '0 0 15px rgba(191,0,255,0.2)' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4">
          <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xs sm:text-sm font-medium">Home</span>
      </motion.button>

      <motion.h1
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 mt-12 sm:mt-14"
      >
        <span className="text-white">Choose Your </span>
        <span className="text-[#00f5ff]" style={{ textShadow: '0 0 10px #00f5ff' }}>Challenge</span>
      </motion.h1>
      <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">16 categories • 120+ levels</p>
      
      {/* 3 cards per row on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl w-full">
        {categories.map((cat, index) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelect(cat.id)}
            className="relative p-5 sm:p-6 rounded-2xl bg-[#12121a] border-2 text-left cursor-pointer overflow-hidden group transition-all duration-200"
            style={{ borderColor: `${cat.color}25` }}
          >
            {/* Glow effect on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `radial-gradient(circle at center, ${cat.color}20 0%, transparent 70%)` }}
            />

            {/* Animated border on hover */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ 
                border: `2px solid ${cat.color}`,
                boxShadow: `0 0 25px ${cat.color}30, inset 0 0 25px ${cat.color}10`
              }}
            />

            {/* Header with emoji and title */}
            <div className="relative flex items-center gap-3 mb-4">
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-2xl sm:text-3xl transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
              >
                {cat.emoji}
              </div>
              <div className="flex-1">
                <h3 
                  className="text-base sm:text-lg font-bold transition-all duration-200"
                  style={{ color: cat.color }}
                >
                  {getCategoryName(cat.id)}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">{cat.example}</p>
              </div>
            </div>

            {/* Demo Visual */}
            <div className="relative bg-[#0a0a0f] rounded-xl p-3 sm:p-4 flex items-center justify-center gap-2 min-h-[55px] sm:min-h-[65px]">
              {cat.demo.map((item, idx) => (
                <motion.span
                  key={idx}
                  className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-mono font-bold transition-all duration-200 group-hover:scale-105"
                  style={{ 
                    backgroundColor: `${cat.color}15`, 
                    color: cat.color,
                    border: `1px solid ${cat.color}40`,
                    textShadow: `0 0 10px ${cat.color}50`
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Bottom accent line */}
            <div
              className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 rounded-b-2xl"
              style={{ backgroundColor: cat.color, boxShadow: `0 0 15px ${cat.color}` }}
            />

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-0 h-1 group-hover:w-8 transition-all duration-300 rounded-tr-2xl" style={{ backgroundColor: cat.color }} />
            <div className="absolute top-0 right-0 w-1 h-0 group-hover:h-8 transition-all duration-300 rounded-tr-2xl" style={{ backgroundColor: cat.color }} />

            {/* Play icon on hover */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${cat.color}20`, border: `1px solid ${cat.color}` }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill={cat.color} style={{ filter: `drop-shadow(0 0 6px ${cat.color})` }}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
