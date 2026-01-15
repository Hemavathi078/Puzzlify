import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimerProps {
  duration: number;
  onTimeout: () => void;
  isPaused?: boolean;
  onTick?: (remaining: number) => void;
}

export const Timer: React.FC<TimerProps> = ({ duration, onTimeout, isPaused = false, onTick }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        if (onTick) onTick(newTime);
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, onTimeout, onTick]);

  const percentage = (timeLeft / duration) * 100;
  const isWarning = timeLeft <= 5;
  const isCritical = timeLeft <= 3;

  const getColor = () => {
    if (isCritical) return '#ff0000';
    if (isWarning) return '#ffff00';
    return '#00f5ff';
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400 text-sm">Time Remaining</span>
        <motion.span
          animate={isWarning ? { scale: [1, 1.1, 1] } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="text-2xl font-bold"
          style={{ color: getColor(), textShadow: `0 0 10px ${getColor()}` }}
        >
          {timeLeft}s
        </motion.span>
      </div>
      <div className="h-3 bg-[#1f1f2e] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.3 }}
          className="h-full rounded-full"
          style={{
            backgroundColor: getColor(),
            boxShadow: `0 0 10px ${getColor()}, 0 0 20px ${getColor()}`
          }}
        />
      </div>
    </div>
  );
};
