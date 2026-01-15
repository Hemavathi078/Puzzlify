import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Puzzle } from '../../types/puzzle';
import { DigitalTimer } from '../common/DigitalTimer';
import { ProgressBar } from '../common/ProgressBar';
import { NeonButton } from '../common/NeonButton';
import { getRandomHint } from '../../utils/encouragement';

interface PuzzleCardProps {
  puzzle: Puzzle;
  currentIndex: number;
  totalPuzzles: number;
  score: number;
  streak: number;
  onAnswer: (answer: string, timeTaken: number) => void;
  onTimeout: () => void;
}

export const PuzzleCard: React.FC<PuzzleCardProps> = ({
  puzzle, currentIndex, totalPuzzles, score, streak, onAnswer, onTimeout
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hintText, setHintText] = useState('');
  const [hintsUsed, setHintsUsed] = useState(0);
  const startTimeRef = useRef(Date.now());

  const handleSelect = (option: string) => {
    if (isSubmitting) return;
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (!selectedAnswer || isSubmitting) return;
    setIsSubmitting(true);
    const timeTaken = Math.floor((Date.now() - startTimeRef.current) / 1000);
    onAnswer(selectedAnswer, timeTaken);
  };

  const handleTimeout = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    onTimeout();
  };

  const handleHint = () => {
    if (hintsUsed >= 2) return;
    setHintText(getRandomHint(puzzle.category));
    setShowHint(true);
    setHintsUsed(prev => prev + 1);
    setTimeout(() => setShowHint(false), 4000);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-6">
          <div>
            <span className="text-gray-400 text-sm">Score</span>
            <div className="text-2xl font-bold text-[#00f5ff]" style={{ textShadow: '0 0 10px #00f5ff' }}>{score}</div>
          </div>
          {streak > 0 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <span className="text-gray-400 text-sm">Streak</span>
              <div className="text-2xl font-bold text-[#ff6600] flex items-center gap-1" style={{ textShadow: '0 0 10px #ff6600' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff6600">
                  <path d="M12 23c-4.97 0-9-3.58-9-8 0-3.18 2.56-6.37 5.24-8.67.4-.34 1.02-.1 1.08.42.24 2.01 1.12 3.87 2.68 5.25.2-2.5 1.5-4.8 3.5-6.5.35-.3.88-.12 1 .32.5 1.8 1.5 3.5 3 4.68C21.56 12.5 21 16.5 21 17c0 3.31-4.03 6-9 6z"/>
                </svg>
                {streak}
              </div>
            </motion.div>
          )}
        </div>
        <button onClick={handleHint} disabled={hintsUsed >= 2}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${hintsUsed >= 2 ? 'border-gray-600 text-gray-600 cursor-not-allowed' : 'border-[#bf00ff] text-[#bf00ff] hover:bg-[#bf00ff]/20'}`}
          style={hintsUsed < 2 ? { boxShadow: '0 0 10px rgba(191,0,255,0.2)' } : {}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z" strokeLinecap="round"/>
          </svg>
          Hint ({2 - hintsUsed})
        </button>
      </div>

      {/* Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mb-4 p-4 rounded-xl bg-[#bf00ff]/10 border border-[#bf00ff]/30">
            <p className="text-[#bf00ff] text-center">{hintText}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress */}
      <div className="mb-6">
        <ProgressBar current={currentIndex + 1} total={totalPuzzles} label="Progress" />
      </div>

      {/* Timer */}
      <div className="mb-8">
        <DigitalTimer duration={puzzle.timeLimit} onTimeout={handleTimeout} isPaused={isSubmitting} />
      </div>

      {/* Question */}
      <div className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-8 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center leading-relaxed">{puzzle.question}</h2>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {puzzle.options.map((option, index) => (
          <motion.button key={option} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }} onClick={() => handleSelect(option)} disabled={isSubmitting}
            className={`p-5 rounded-xl border-2 text-lg font-semibold transition-all duration-200
              ${selectedAnswer === option ? 'border-[#00f5ff] bg-[#00f5ff]/15 text-[#00f5ff]' : 'border-[#1f1f2e] bg-[#12121a] text-white hover:border-[#00f5ff]/50'}
              ${isSubmitting ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
            style={selectedAnswer === option ? { boxShadow: '0 0 20px rgba(0,245,255,0.2)' } : {}}>
            {option}
          </motion.button>
        ))}
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <NeonButton onClick={handleSubmit} disabled={!selectedAnswer || isSubmitting} variant="cyan" size="lg">
          Submit Answer →
        </NeonButton>
      </div>
    </motion.div>
  );
};
