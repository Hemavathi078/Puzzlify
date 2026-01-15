import { motion } from 'framer-motion';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'cyan' | 'purple' | 'green' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

const variantColors = {
  cyan: '#00f5ff',
  purple: '#bf00ff',
  green: '#39ff14',
  pink: '#ff00ff'
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  onClick,
  variant = 'cyan',
  size = 'md',
  disabled = false,
  className = ''
}) => {
  const color = variantColors[variant];

  return (
    <motion.button
      whileHover={disabled ? {} : { 
        scale: 1.05,
        boxShadow: `0 0 25px ${color}50, 0 0 50px ${color}30`
      }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        relative font-bold rounded-xl border-2 transition-all duration-300 overflow-hidden
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      style={{ 
        borderColor: color,
        color: color,
        backgroundColor: 'transparent',
        boxShadow: disabled ? 'none' : `0 0 10px ${color}20`
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = `${color}20`;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {/* Shine effect */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 opacity-0"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}30, transparent)`,
          }}
          whileHover={{
            opacity: 1,
            x: ['-100%', '100%'],
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
