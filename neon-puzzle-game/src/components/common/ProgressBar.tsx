import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">{label}</span>
          <span className="text-[#00f5ff] font-bold">{current}/{total}</span>
        </div>
      )}
      <div className="h-2 bg-[#1f1f2e] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-[#00f5ff] to-[#bf00ff]"
          style={{
            boxShadow: '0 0 10px #00f5ff, 0 0 20px #bf00ff'
          }}
        />
      </div>
    </div>
  );
};
