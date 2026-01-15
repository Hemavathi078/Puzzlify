import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomePopupProps {
  onStartPlaying?: () => void;
}

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ onStartPlaying }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsVisible(false);
  
  const handlePlay = () => {
    setIsVisible(false);
    onStartPlaying?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#12121a] rounded-3xl border-2 border-[#00f5ff]/30 p-6 sm:p-8 max-w-md w-full text-center overflow-hidden"
            style={{ boxShadow: '0 0 50px rgba(0,245,255,0.2), 0 0 100px rgba(191,0,255,0.1)' }}
          >
            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-[#00f5ff] hover:text-[#00f5ff] transition-colors z-10"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>

            {/* Gradient shine effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(125deg, transparent 30%, rgba(0,245,255,0.1) 45%, rgba(191,0,255,0.1) 55%, transparent 70%)',
              }}
              animate={{ 
                backgroundPosition: ['200% 0%', '-200% 0%']
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ 
                background: 'linear-gradient(90deg, #00f5ff, #bf00ff, #ff00ff, #00f5ff)',
                backgroundSize: '300% 100%',
                padding: 2,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
              }}
              animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            {/* Brain Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="mb-4"
            >
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" className="mx-auto">
                <path
                  d="M12 4c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l.5.5c-1 1-1.5 2.5-1 4 .5 1.5 2 2.5 3.5 2.5h1v3h4v-3h1c1.5 0 3-1 3.5-2.5s0-3-1-4l.5-.5c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0"
                  stroke="#00f5ff"
                  strokeWidth="1.5"
                  fill="none"
                  style={{ filter: 'drop-shadow(0 0 15px #00f5ff)' }}
                />
              </svg>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl font-bold mb-2"
            >
              <span className="text-white">Welcome to </span>
              <span className="text-[#00f5ff]" style={{ textShadow: '0 0 15px #00f5ff' }}>PuzzleNeonX!</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base mb-6"
            >
              Train your brain with 16 exciting puzzle categories
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4 sm:gap-6 mb-6"
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#39ff14]">120+</div>
                <div className="text-xs text-gray-500">Puzzles</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#bf00ff]">16</div>
                <div className="text-xs text-gray-500">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#ff00ff]">4</div>
                <div className="text-xs text-gray-500">Levels</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlay}
              className="px-6 sm:px-8 py-3 rounded-xl font-bold text-[#0a0a0f] bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] cursor-pointer"
              style={{ boxShadow: '0 0 20px rgba(0,245,255,0.4)' }}
            >
              Let's Play!
            </motion.button>

            {/* Auto-close indicator */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00f5ff] to-[#bf00ff]"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
