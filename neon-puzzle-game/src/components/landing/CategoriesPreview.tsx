import { useState } from 'react';
import { motion } from 'framer-motion';

interface CategoriesPreviewProps {
  onCategoryClick?: () => void;
}

const categories = [
  { name: 'Number Series', desc: 'Find patterns in sequences', color: '#00f5ff', icon: '123' },
  { name: 'Logical Patterns', desc: 'Identify visual patterns', color: '#bf00ff', icon: '◆◇◆' },
  { name: 'Missing Number', desc: 'Complete the equation', color: '#39ff14', icon: '?=' },
  { name: 'Odd One Out', desc: 'Spot the difference', color: '#ff00ff', icon: '◉○○' },
  { name: 'Word Logic', desc: 'Verbal analogies', color: '#00f5ff', icon: 'A→B' },
  { name: 'General Knowledge', desc: 'Test your knowledge', color: '#bf00ff', icon: 'GK' },
  { name: 'Math Puzzles', desc: 'Fun math problems', color: '#39ff14', icon: '+−×' },
  { name: 'Memory Sequence', desc: 'Remember & recall', color: '#ff00ff', icon: '●●●' },
  { name: 'Spatial Reasoning', desc: 'Think in 3D', color: '#00f5ff', icon: '⬡' },
  { name: 'Code Breaker', desc: 'Crack the cipher', color: '#bf00ff', icon: '※' },
  { name: 'Riddles', desc: 'Brain teasers', color: '#39ff14', icon: '?' },
  { name: 'Speed Math', desc: 'Quick calculations', color: '#ff00ff', icon: '⚡' },
  { name: 'Visual Puzzles', desc: 'Count & observe', color: '#00f5ff', icon: '◐' },
  { name: 'Word Scramble', desc: 'Unscramble words', color: '#bf00ff', icon: 'ABC' },
  { name: 'Sequence Completion', desc: 'Complete the series', color: '#39ff14', icon: '→→' },
  { name: 'True or False', desc: 'Fact or fiction', color: '#ff00ff', icon: '✓✗' }
];

export const CategoriesPreview: React.FC<CategoriesPreviewProps> = ({ onCategoryClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="categories" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          16 Exciting Categories
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          From number patterns to brain teasers, challenge yourself across diverse puzzle types
        </p>
      </motion.div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <motion.button
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            onClick={onCategoryClick}
            className="relative p-4 rounded-xl bg-[#12121a] border-2 text-left transition-all duration-200 cursor-pointer overflow-hidden group"
            style={{ borderColor: hoveredIndex === index ? cat.color : `${cat.color}20` }}
            whileHover={{ y: -4, boxShadow: `0 10px 30px ${cat.color}20` }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `radial-gradient(circle at center, ${cat.color}10 0%, transparent 70%)` }}
            />

            {/* Icon badge */}
            <div className="flex items-start justify-between mb-3 relative">
              <motion.div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                style={{ 
                  backgroundColor: `${cat.color}15`,
                  color: cat.color,
                  border: `1px solid ${cat.color}30`
                }}
                animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {cat.icon}
              </motion.div>
              
              {/* Neon dot */}
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: cat.color }}
                animate={{ 
                  boxShadow: hoveredIndex === index 
                    ? `0 0 10px ${cat.color}, 0 0 20px ${cat.color}` 
                    : `0 0 4px ${cat.color}` 
                }}
              />
            </div>

            {/* Content */}
            <div className="relative">
              <motion.h3
                className="font-bold text-sm mb-1"
                animate={{ color: hoveredIndex === index ? cat.color : '#ffffff' }}
                transition={{ duration: 0.2 }}
              >
                {cat.name}
              </motion.h3>
              <p className="text-gray-500 text-xs">{cat.desc}</p>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className="absolute bottom-0 left-0 h-0.5"
              style={{ backgroundColor: cat.color }}
              initial={{ width: 0 }}
              animate={{ width: hoveredIndex === index ? '100%' : 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Corner accents on hover */}
            <motion.div
              className="absolute top-0 right-0 w-4 h-0.5"
              style={{ backgroundColor: cat.color, transformOrigin: 'right' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-0.5 h-4"
              style={{ backgroundColor: cat.color, transformOrigin: 'top' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
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
          onClick={onCategoryClick}
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
