import { motion } from 'framer-motion';
import { NeonButton } from '../common/NeonButton';

interface HeroProps {
  onStartPlaying: () => void;
  onHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartPlaying, onHowItWorks }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-16 relative"
    >
      {/* Gradient background glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,245,255,0.3) 0%, rgba(191,0,255,0.15) 50%, transparent 70%)'
        }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <span className="text-white">Train Your Brain with</span>
        <br />
        <span className="bg-gradient-to-r from-[#00f5ff] via-[#bf00ff] to-[#ff00ff] bg-clip-text text-transparent">
          PuzzleNeon Games
        </span>
      </motion.h1>
      
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Solve fun logic puzzles, number series, and brain challenges designed especially for teens.
      </motion.p>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {/* Animated Start Playing Button */}
        <motion.div className="relative">
          {/* Pulsing glow ring */}
          <motion.div
            className="absolute inset-0 rounded-xl"
            style={{ 
              background: 'linear-gradient(90deg, #00f5ff, #bf00ff, #00f5ff)',
              backgroundSize: '200% 100%'
            }}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
              boxShadow: [
                '0 0 20px rgba(0,245,255,0.5)',
                '0 0 30px rgba(191,0,255,0.5)',
                '0 0 20px rgba(0,245,255,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute -inset-1 rounded-xl opacity-50 blur-md"
            style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.button
            onClick={onStartPlaying}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 text-lg font-bold rounded-xl bg-[#0a0a0f] text-[#00f5ff] border-2 border-[#00f5ff] flex items-center gap-2"
            style={{ boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
          >
            <motion.svg 
              width="20" height="20" viewBox="0 0 24 24" fill="currentColor"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <path d="M8 5v14l11-7z"/>
            </motion.svg>
            Start Playing
          </motion.button>
        </motion.div>

        <NeonButton onClick={onHowItWorks} variant="purple" size="lg">
          <span className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            How It Works
          </span>
        </NeonButton>
      </motion.div>
    </motion.section>
  );
};
