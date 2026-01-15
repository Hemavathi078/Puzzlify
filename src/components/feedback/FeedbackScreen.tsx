import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { NeonButton } from '../common/NeonButton';
import { CheckIcon, CrossIcon, FireIcon, StarIcon } from '../common/NeonIcons';
import { getRandomCorrectMessage, getRandomWrongMessage, getStreakMessage } from '../../utils/encouragement';

interface FeedbackScreenProps {
  correct: boolean;
  explanation: string;
  streak: number;
  onContinue: () => void;
}

export const FeedbackScreen: React.FC<FeedbackScreenProps> = ({ correct, explanation, streak, onContinue }) => {
  const message = useMemo(() => 
    correct ? getRandomCorrectMessage() : getRandomWrongMessage(), 
    [correct]
  );
  
  const streakMessage = useMemo(() => 
    correct ? getStreakMessage(streak) : null,
    [correct, streak]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Icon */}
      <div className="mb-6">
        {correct ? (
          <CheckIcon size={100} color="#39ff14" />
        ) : (
          <CrossIcon size={100} color="#ff00ff" />
        )}
      </div>

      {/* Message */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-center mb-6"
      >
        <h1 
          className={`text-4xl md:text-5xl font-bold ${correct ? 'text-[#39ff14]' : 'text-[#ff00ff]'}`}
          style={{ textShadow: correct ? '0 0 20px #39ff14' : '0 0 20px #ff00ff' }}
        >
          {message.text}
        </h1>
      </motion.div>

      {/* Streak Message */}
      {streakMessage && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
          className="mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6600]/20 to-[#ffff00]/20 border border-[#ff6600]/50 flex items-center gap-3"
        >
          <FireIcon size={28} color="#ff6600" />
          <span className="text-xl font-bold text-white">{streakMessage.text}</span>
          <StarIcon size={24} color="#ffff00" />
        </motion.div>
      )}

      {/* Explanation Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="bg-[#12121a] rounded-2xl border border-[#1f1f2e] p-8 max-w-xl text-center mb-10"
      >
        <p className="text-[#00f5ff] text-sm mb-3 flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Explanation
        </p>
        <p className="text-white text-xl leading-relaxed">{explanation}</p>
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <NeonButton onClick={onContinue} variant={correct ? 'green' : 'pink'} size="lg">
          Continue →
        </NeonButton>
      </motion.div>
    </motion.div>
  );
};
