import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface DigitalTimerProps {
  duration: number;
  onTimeout: () => void;
  isPaused?: boolean;
}

export const DigitalTimer: React.FC<DigitalTimerProps> = ({ duration, onTimeout, isPaused = false }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          clearInterval(timer);
          onTimeout();
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, onTimeout, duration]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isWarning = timeLeft <= 10;
  const isCritical = timeLeft <= 5;

  const getColor = () => {
    if (isCritical) return '#ff0000';
    if (isWarning) return '#ffff00';
    return '#00f5ff';
  };

  const formatDigit = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={isCritical ? { scale: [1, 1.02, 1] } : {}}
        transition={{ repeat: Infinity, duration: 0.4 }}
        className="relative"
      >
        <div 
          className="bg-[#0a0a0f] rounded-2xl px-5 py-3 border-2 flex items-center gap-1"
          style={{ 
            borderColor: getColor(),
            boxShadow: `0 0 25px ${getColor()}30`
          }}
        >
          {formatDigit(minutes).split('').map((digit, i) => (
            <div
              key={`min-${i}`}
              className="w-10 h-14 bg-[#12121a] rounded-lg flex items-center justify-center"
            >
              <span 
                className="text-3xl font-mono font-bold"
                style={{ color: getColor(), textShadow: `0 0 10px ${getColor()}` }}
              >
                {digit}
              </span>
            </div>
          ))}

          <div className="flex flex-col gap-1.5 mx-1.5">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: getColor() }}
            />
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: getColor() }}
            />
          </div>

          {formatDigit(seconds).split('').map((digit, i) => (
            <motion.div
              key={`sec-${i}`}
              animate={isCritical && i === 1 ? { backgroundColor: ['#12121a', '#1a0808', '#12121a'] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-10 h-14 bg-[#12121a] rounded-lg flex items-center justify-center"
            >
              <span 
                className="text-3xl font-mono font-bold"
                style={{ color: getColor(), textShadow: `0 0 10px ${getColor()}` }}
              >
                {digit}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
