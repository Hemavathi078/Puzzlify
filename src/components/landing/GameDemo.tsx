import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allDemoGames = [
  { title: 'Number Series', type: 'Pattern Recognition', example: '2, 4, 6, 8, ?', answer: '10', color: '#00f5ff', demo: ['2', '4', '6', '8', '?'], tip: 'Look for addition, multiplication, or square patterns' },
  { title: 'Code Breaker', type: 'Cipher Puzzle', example: 'A=1, B=2... CAB = ?', answer: '312', color: '#bf00ff', demo: ['C→3', 'A→1', 'B→2'], tip: 'Assign numbers to letters systematically' },
  { title: 'Riddles', type: 'Brain Teaser', example: 'I have hands but cannot clap', answer: 'Clock', color: '#39ff14', demo: ['🤔', '💭', '💡'], tip: 'Think about multiple meanings of words' },
  { title: 'Speed Math', type: 'Quick Calculate', example: '17 × 6 = ?', answer: '102', color: '#ff00ff', demo: ['17', '×', '6'], tip: 'Break numbers into easier parts' },
  { title: 'Word Scramble', type: 'Word Puzzle', example: 'ZZELUP', answer: 'PUZZLE', color: '#00f5ff', demo: ['Z', 'Z', 'E', 'L', 'U', 'P'], tip: 'Find common letter combinations first' },
  { title: 'True or False', type: 'Fact Check', example: 'Moon produces its own light', answer: 'False', color: '#bf00ff', demo: ['✓', '✗'], tip: 'Watch for absolute words like always/never' },
  { title: 'Logical Patterns', type: 'Visual Logic', example: '🔺 🔵 🔺 🔵 ?', answer: '🔺', color: '#39ff14', demo: ['▲', '●', '▲', '●', '?'], tip: 'Look for alternating or repeating sequences' },
  { title: 'Missing Number', type: 'Equation Solver', example: '3 × ? = 15', answer: '5', color: '#ff00ff', demo: ['3', '×', '?', '=', '15'], tip: 'Work backwards from the result' },
  { title: 'Odd One Out', type: 'Classification', example: 'Apple, Banana, Carrot, Mango', answer: 'Carrot', color: '#00f5ff', demo: ['🍎', '🍌', '🥕', '🥭'], tip: 'Find what most items have in common' },
  { title: 'Word Logic', type: 'Verbal Analogy', example: 'Hot:Cold :: Day:?', answer: 'Night', color: '#bf00ff', demo: ['Hot', '→', 'Cold', '=', 'Day', '→', '?'], tip: 'Identify the relationship in the first pair' },
  { title: 'General Knowledge', type: 'Trivia Quiz', example: 'Largest planet in solar system?', answer: 'Jupiter', color: '#39ff14', demo: ['🌍', '❓'], tip: 'Trust your first instinct' },
  { title: 'Math Puzzles', type: 'Problem Solving', example: 'Area of 8×5 rectangle?', answer: '40', color: '#ff00ff', demo: ['8', '×', '5', '=', '?'], tip: 'Break complex problems into steps' },
  { title: 'Memory Sequence', type: 'Recall Challenge', example: '🔴🔵🟢 - 2nd color?', answer: '🔵', color: '#00f5ff', demo: ['●', '●', '●', '?'], tip: 'Focus on patterns, not individual items' },
  { title: 'Spatial Reasoning', type: '3D Thinking', example: 'Cube has how many faces?', answer: '6', color: '#bf00ff', demo: ['⬡', '?'], tip: 'Visualize the shape in your mind' },
  { title: 'Visual Puzzles', type: 'Observation', example: 'Count: △△△△△', answer: '5', color: '#39ff14', demo: ['△', '△', '△', '△', '△'], tip: 'Count systematically left to right' },
  { title: 'Sequence Completion', type: 'Order Logic', example: 'Mon, Tue, Wed, ?', answer: 'Thu', color: '#ff00ff', demo: ['M', 'T', 'W', '?'], tip: 'Think about common sequences you know' },
];

export const GameDemo: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const displayedGames = showAll ? allDemoGames : allDemoGames.slice(0, 6);

  const toggleReveal = (i: number) => {
    const n = new Set(revealed);
    if (n.has(i)) n.delete(i); else n.add(i);
    setRevealed(n);
  };

  return (
    <section id="games" className="py-20 px-4 bg-[#0d0d14]">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">Game Previews</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-gray-400 text-center mb-12">See how each game type works • Click cards to reveal answers</motion.p>
      
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        <AnimatePresence>
          {displayedGames.map((g, i) => (
            <motion.div 
              key={g.title} 
              layout
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              onHoverStart={() => setActiveIndex(i)} 
              onHoverEnd={() => setActiveIndex(null)}
              onClick={() => toggleReveal(i)} 
              className="cursor-pointer"
            >
              <motion.div 
                className="bg-[#12121a] rounded-2xl border-2 p-5 h-full relative overflow-hidden"
                style={{ borderColor: `${g.color}20` }}
                whileHover={{ borderColor: g.color, boxShadow: `0 0 30px ${g.color}20` }}
                transition={{ duration: 0.2 }}
              >
                {/* Corner accents */}
                <motion.div className="absolute top-0 left-0 w-8 h-0.5" style={{ backgroundColor: g.color, transformOrigin: 'left' }}
                  animate={{ scaleX: activeIndex === i ? 1 : 0 }} transition={{ duration: 0.2 }} />
                <motion.div className="absolute top-0 left-0 w-0.5 h-8" style={{ backgroundColor: g.color, transformOrigin: 'top' }}
                  animate={{ scaleY: activeIndex === i ? 1 : 0 }} transition={{ duration: 0.2 }} />
                <motion.div className="absolute bottom-0 right-0 w-8 h-0.5" style={{ backgroundColor: g.color, transformOrigin: 'right' }}
                  animate={{ scaleX: activeIndex === i ? 1 : 0 }} transition={{ duration: 0.2 }} />
                <motion.div className="absolute bottom-0 right-0 w-0.5 h-8" style={{ backgroundColor: g.color, transformOrigin: 'bottom' }}
                  animate={{ scaleY: activeIndex === i ? 1 : 0 }} transition={{ duration: 0.2 }} />

                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs px-2 py-1 rounded-full border" 
                    style={{ borderColor: `${g.color}50`, color: g.color }}>{g.type}</span>
                  <motion.div className="w-2 h-2 rounded-full" style={{ backgroundColor: g.color }}
                    animate={{ boxShadow: activeIndex === i ? `0 0 12px ${g.color}` : `0 0 4px ${g.color}` }} />
                </div>

                {/* Title */}
                <motion.h3 className="text-lg font-bold text-white mb-3"
                  animate={{ color: activeIndex === i ? g.color : '#fff' }} transition={{ duration: 0.2 }}>{g.title}</motion.h3>
                
                {/* Demo Visual */}
                <div className="bg-[#0a0a0f] rounded-xl p-3 mb-3 min-h-[60px] flex items-center justify-center">
                  <div className="flex gap-1.5 flex-wrap justify-center">
                    {g.demo.map((item, idx) => (
                      <motion.div key={idx} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-2 py-1.5 rounded-md text-xs font-mono font-bold"
                        style={{ backgroundColor: `${g.color}15`, color: g.color, border: `1px solid ${g.color}30` }}>
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Question */}
                <p className="text-gray-400 text-sm text-center mb-2">{g.example}</p>
                
                {/* Answer/Tip Section */}
                <div className="text-center min-h-[50px]">
                  <AnimatePresence mode="wait">
                    {revealed.has(i) ? (
                      <motion.div key="answer" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="mb-1">
                          <span className="text-gray-500 text-sm">Answer: </span>
                          <span className="font-bold text-[#39ff14]">{g.answer}</span>
                        </div>
                        <p className="text-xs text-gray-600 italic">💡 {g.tip}</p>
                      </motion.div>
                    ) : (
                      <motion.span key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="text-gray-600 text-sm">Tap to reveal answer & tip</motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Shine effect */}
                <motion.div className="absolute inset-0 pointer-events-none"
                  style={{ background: `linear-gradient(105deg, transparent 40%, ${g.color}08 50%, transparent 60%)` }}
                  initial={{ x: '-100%' }} animate={{ x: activeIndex === i ? '100%' : '-100%' }}
                  transition={{ duration: 0.4 }} />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View More / View Less Button */}
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-3 rounded-xl font-bold border-2 border-[#bf00ff] text-[#bf00ff] bg-transparent hover:bg-[#bf00ff]/10 transition-all overflow-hidden"
          style={{ boxShadow: '0 0 20px rgba(191,0,255,0.2)' }}
        >
          <span className="relative z-10 flex items-center gap-2 justify-center">
            {showAll ? (
              <>
                Show Less
                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  animate={{ y: [0, -3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  <path d="M18 15l-6-6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </>
            ) : (
              <>
                View All {allDemoGames.length} Games
                <motion.svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  animate={{ y: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </>
            )}
          </span>
          
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${showAll ? '#00f5ff' : '#bf00ff'}30, transparent)`,
            }}
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
        
        {!showAll && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 text-sm mt-3"
          >
            +{allDemoGames.length - 6} more game types to explore
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};
