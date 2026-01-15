import { motion } from 'framer-motion';

interface NeonCardProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'purple' | 'green' | 'pink';
  onClick?: () => void;
  className?: string;
  glowOnHover?: boolean;
}

const variantColors = {
  cyan: '#00f5ff',
  purple: '#bf00ff',
  green: '#39ff14',
  pink: '#ff00ff'
};

export const NeonCard: React.FC<NeonCardProps> = ({
  children,
  variant = 'cyan',
  onClick,
  className = '',
  glowOnHover = true
}) => {
  const color = variantColors[variant];

  return (
    <motion.div
      whileHover={glowOnHover ? { 
        scale: 1.03, 
        y: -8,
        transition: { type: 'spring', stiffness: 400, damping: 17 }
      } : {}}
      whileTap={onClick ? { scale: 0.97 } : {}}
      onClick={onClick}
      className={`
        relative bg-[#12121a] rounded-2xl border-2 p-6 transition-colors duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{ 
        borderColor: `${color}30`,
      }}
      onMouseEnter={(e) => {
        if (glowOnHover) {
          e.currentTarget.style.borderColor = color;
          e.currentTarget.style.boxShadow = `0 0 20px ${color}30, 0 8px 32px ${color}20`;
        }
      }}
      onMouseLeave={(e) => {
        if (glowOnHover) {
          e.currentTarget.style.borderColor = `${color}30`;
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
    >
      {/* Animated corner accents on hover */}
      {glowOnHover && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-xl opacity-0"
            style={{ borderColor: color }}
            whileHover={{ opacity: 1 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-xl opacity-0"
            style={{ borderColor: color }}
            whileHover={{ opacity: 1 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-xl opacity-0"
            style={{ borderColor: color }}
            whileHover={{ opacity: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-xl opacity-0"
            style={{ borderColor: color }}
            whileHover={{ opacity: 1 }}
          />
        </>
      )}
      {children}
    </motion.div>
  );
};
