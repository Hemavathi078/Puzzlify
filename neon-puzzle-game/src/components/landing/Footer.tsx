import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-4 border-t border-[#1f1f2e] text-center"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l.5.5c-1 1-1.5 2.5-1 4 .5 1.5 2 2.5 3.5 2.5h1v3h4v-3h1c1.5 0 3-1 3.5-2.5s0-3-1-4l.5-.5c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0"
              stroke="#00f5ff"
              strokeWidth="1.5"
              fill="rgba(0,245,255,0.2)"
              style={{ filter: 'drop-shadow(0 0 6px #00f5ff)' }}
            />
          </svg>
          <span className="text-xl font-bold bg-gradient-to-r from-[#00f5ff] to-[#bf00ff] bg-clip-text text-transparent">
            Neon Puzzle
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-2">Version 1.0.0</p>
        <p className="text-gray-600 text-xs">
          Educational game designed to help teens improve logical reasoning and aptitude skills.
          <br />
          All progress is saved locally on your device.
        </p>
      </div>
    </motion.footer>
  );
};
