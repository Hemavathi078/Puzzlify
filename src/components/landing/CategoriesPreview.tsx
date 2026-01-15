import { useState } from 'react';
import { motion } from 'framer-motion';
import type { PuzzleCategory } from '../../types/puzzle';

interface CategoriesPreviewProps {
  onCategoryClick?: (category: PuzzleCategory) => void;
}

const categories: { id: PuzzleCategory; name: string; desc: string; color: string; icon: string; emoji: string }[] = [
  { id: 'number-series', name: 'Number Series', desc: 'Discover hidden patterns in number sequences. Analyze arithmetic, geometric, and complex progressions to find the next number.', color: '#00f5ff', icon: '123', emoji: '🔢' },
  { id: 'logical-patterns', name: 'Logical Patterns', desc: 'Identify visual and logical patterns using shapes, colors, and symbols. Train your pattern recognition skills.', color: '#bf00ff', icon: '◆◇◆', emoji: '🔷' },
  { id: 'missing-number', name: 'Missing Number', desc: 'Find the missing value in equations and mathematical relationships. Strengthen your algebraic thinking.', color: '#39ff14', icon: '?=', emoji: '❓' },
  { id: 'odd-one-out', name: 'Odd One Out', desc: 'Spot the item that doesn\'t belong in a group. Develop classification and categorization skills.', color: '#ff00ff', icon: '◉○○', emoji: '🎯' },
  { id: 'word-logic', name: 'Word Logic', desc: 'Solve verbal analogies and word relationships. Enhance vocabulary and logical reasoning together.', color: '#00f5ff', icon: 'A→B', emoji: '💬' },
  { id: 'general-knowledge', name: 'General Knowledge', desc: 'Test your knowledge across science, history, geography, and more. Learn interesting facts while playing.', color: '#bf00ff', icon: 'GK', emoji: '🧠' },
  { id: 'math-puzzles', name: 'Math Puzzles', desc: 'Solve fun mathematical problems involving area, percentages, and creative calculations.', color: '#39ff14', icon: '+−×', emoji: '➕' },
  { id: 'memory-sequence', name: 'Memory Sequence', desc: 'Remember and recall sequences of colors, numbers, or patterns. Boost your short-term memory.', color: '#ff00ff', icon: '●●●', emoji: '🎮' },
  { id: 'spatial-reasoning', name: 'Spatial Reasoning', desc: 'Think in 3D! Visualize shapes, rotations, and spatial relationships to solve puzzles.', color: '#00f5ff', icon: '⬡', emoji: '📐' },
  { id: 'code-breaker', name: 'Code Breaker', desc: 'Crack ciphers and decode secret messages. Learn the basics of cryptography through puzzles.', color: '#bf00ff', icon: '※', emoji: '🔐' },
  { id: 'riddles', name: 'Riddles', desc: 'Solve tricky brain teasers and riddles. Think outside the box to find clever answers.', color: '#39ff14', icon: '?', emoji: '🎭' },
  { id: 'speed-math', name: 'Speed Math', desc: 'Quick mental calculations under time pressure. Improve your arithmetic speed and accuracy.', color: '#ff00ff', icon: '⚡', emoji: '⚡' },
  { id: 'visual-puzzles', name: 'Visual Puzzles', desc: 'Count objects, spot differences, and observe carefully. Sharpen your visual attention skills.', color: '#00f5ff', icon: '◐', emoji: '🖼️' },
  { id: 'word-scramble', name: 'Word Scramble', desc: 'Unscramble jumbled letters to form words. Expand your vocabulary while having fun.', color: '#bf00ff', icon: 'ABC', emoji: '🔤' },
  { id: 'sequence-completion', name: 'Sequence Completion', desc: 'Complete sequences of days, months, alphabets, and more. Recognize common patterns.', color: '#39ff14', icon: '→→', emoji: '📅' },
  { id: 'true-false', name: 'True or False', desc: 'Determine if statements are facts or fiction. Test your knowledge and critical thinking.', color: '#ff00ff', icon: '✓✗', emoji: '⚖️' }
];

export const CategoriesPreview: React.FC<CategoriesPreviewProps> = ({ onCategoryClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="categories" className="py-16 sm:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
          16 Exciting Categories
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
          From number patterns to brain teasers, challenge yourself across diverse puzzle types
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <motion.button
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={() => onCategoryClick?.(cat.id)}
            className="relative p-4 sm:p-5 rounded-xl bg-[#12121a] border-2 text-left transition-all duration-200 cursor-pointer overflow-hidden group"
            style={{ borderColor: hoveredIndex === index ? cat.color : `${cat.color}20` }}
            whileHover={{ y: -4, boxShadow: `0 10px 30px ${cat.color}25` }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: `radial-gradient(circle at center, ${cat.color}15 0%, transparent 70%)` }}
            />

            {/* Header with emoji and icon */}
            <div className="flex items-center gap-3 mb-3 relative">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: `${cat.color}15`, border: `1px solid ${cat.color}30` }}
              >
                {cat.emoji}
              </div>
              
              <div className="flex-1">
                <motion.h3
                  className="font-bold text-sm sm:text-base"
                  animate={{ color: hoveredIndex === index ? cat.color : '#ffffff' }}
                  transition={{ duration: 0.2 }}
                >
                  {cat.name}
                </motion.h3>
                <span 
                  className="text-xs font-mono px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                >
                  {cat.icon}
                </span>
              </div>

              {/* Play icon */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill={cat.color} style={{ filter: `drop-shadow(0 0 6px ${cat.color})` }}>
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed relative">{cat.desc}</p>

            {/* Bottom accent line */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5"
              style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
              initial={{ width: 0 }}
              animate={{ width: hoveredIndex === index ? '100%' : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Corner accents on hover */}
            <div className="absolute top-0 right-0 w-0 h-0.5 group-hover:w-6 transition-all duration-300" style={{ backgroundColor: cat.color }} />
            <div className="absolute top-0 right-0 w-0.5 h-0 group-hover:h-6 transition-all duration-300" style={{ backgroundColor: cat.color }} />
          </motion.button>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-10"
      >
        <motion.button
          onClick={() => onCategoryClick?.('number-series')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl font-bold border-2 border-[#00f5ff] text-[#00f5ff] bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 transition-all"
          style={{ boxShadow: '0 0 20px rgba(0,245,255,0.2)' }}
        >
          Start Playing Now →
        </motion.button>
      </motion.div>
    </section>
  );
};
