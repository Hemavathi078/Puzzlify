import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onStartPlaying?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onStartPlaying }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#00f5ff]/10"
    >
      <div className="w-full px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
        {/* Logo - Left on mobile, stays left on desktop */}
        <motion.div 
          className="flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="sm:w-8 sm:h-8">
              <path
                d="M12 4c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l.5.5c-1 1-1.5 2.5-1 4 .5 1.5 2 2.5 3.5 2.5h1v3h4v-3h1c1.5 0 3-1 3.5-2.5s0-3-1-4l.5-.5c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0"
                stroke="#00f5ff"
                strokeWidth="1.5"
                fill="rgba(0,245,255,0.15)"
                style={{ filter: 'drop-shadow(0 0 6px #00f5ff)' }}
              />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg font-bold leading-tight">
              <span className="text-[#00f5ff]" style={{ textShadow: '0 0 10px #00f5ff' }}>Puzzle</span>
              <span className="text-white">NeonX</span>
            </span>
            <span className="text-[8px] sm:text-[10px] text-gray-500 leading-tight hidden sm:block">Train Your Brain</span>
          </div>
        </motion.div>

        {/* Nav Links - Desktop only */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#games" color="#00f5ff">Games</NavLink>
          <NavLink href="#categories" color="#bf00ff">Categories</NavLink>
          <NavLink href="#how-it-works" color="#39ff14">How It Works</NavLink>
        </nav>

        {/* Right side - Play Now button */}
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg border border-gray-700 text-gray-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </motion.button>

          {/* CTA Button */}
          <motion.button
            onClick={onStartPlaying}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm border border-[#00f5ff] text-[#00f5ff] bg-[#00f5ff]/10 hover:bg-[#00f5ff]/20 transition-all"
            style={{ boxShadow: '0 0 15px rgba(0,245,255,0.2)' }}
          >
            Play Now
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 border-t border-[#00f5ff]/10"
          >
            <nav className="flex flex-col p-4 gap-3">
              <MobileNavLink href="#games" color="#00f5ff" onClick={() => setMobileMenuOpen(false)}>Games</MobileNavLink>
              <MobileNavLink href="#categories" color="#bf00ff" onClick={() => setMobileMenuOpen(false)}>Categories</MobileNavLink>
              <MobileNavLink href="#how-it-works" color="#39ff14" onClick={() => setMobileMenuOpen(false)}>How It Works</MobileNavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLink: React.FC<{ href: string; color: string; children: React.ReactNode }> = ({ href, color, children }) => (
  <motion.a
    href={href}
    className="text-sm text-gray-400 hover:text-white transition-colors relative group"
    whileHover={{ y: -1 }}
  >
    {children}
    <motion.span
      className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
      style={{ backgroundColor: color }}
    />
  </motion.a>
);

const MobileNavLink: React.FC<{ href: string; color: string; onClick: () => void; children: React.ReactNode }> = ({ href, color, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm py-2 px-3 rounded-lg transition-colors"
    style={{ color, backgroundColor: `${color}10` }}
  >
    {children}
  </a>
);
