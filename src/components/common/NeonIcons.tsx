import { motion } from 'framer-motion';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const CheckIcon: React.FC<IconProps> = ({ size = 80, color = '#39ff14', className = '' }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill={`${color}20`} />
    <motion.path
      d="M8 12l3 3 5-6"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{ filter: `drop-shadow(0 0 8px ${color})` }}
    />
  </motion.svg>
);

export const CrossIcon: React.FC<IconProps> = ({ size = 80, color = '#ff00ff', className = '' }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    initial={{ scale: 0, rotate: 180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill={`${color}20`} />
    <motion.path
      d="M8 8l8 8M16 8l-8 8"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      style={{ filter: `drop-shadow(0 0 8px ${color})` }}
    />
  </motion.svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 40, color = '#ffff00', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill={color}
      stroke={color}
      strokeWidth="1"
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    />
  </svg>
);

export const FireIcon: React.FC<IconProps> = ({ size = 32, color = '#ff6600', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 23c-4.97 0-9-3.58-9-8 0-3.18 2.56-6.37 5.24-8.67.4-.34 1.02-.1 1.08.42.24 2.01 1.12 3.87 2.68 5.25.2-2.5 1.5-4.8 3.5-6.5.35-.3.88-.12 1 .32.5 1.8 1.5 3.5 3 4.68C21.56 12.5 21 16.5 21 17c0 3.31-4.03 6-9 6z"
      fill={color}
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    />
  </svg>
);

export const BrainIcon: React.FC<IconProps> = ({ size = 40, color = '#bf00ff', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 4.5c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l.5.5c-1 1-1.5 2.5-1 4 .5 1.5 2 2.5 3.5 2.5h1v3h4v-3h1c1.5 0 3-1 3.5-2.5s0-3-1-4l.5-.5c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0"
      stroke={color}
      strokeWidth="1.5"
      fill={`${color}30`}
      strokeLinecap="round"
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    />
  </svg>
);

export const LightbulbIcon: React.FC<IconProps> = ({ size = 32, color = '#ffff00', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill={`${color}20`}
      style={{ filter: `drop-shadow(0 0 8px ${color})` }}
    />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({ size = 40, color = '#ffd700', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M6 9H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3M18 9h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3M6 5h12v6a6 6 0 0 1-12 0V5zM9 21h6M12 17v4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill={`${color}30`}
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    />
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ size = 40, color = '#00f5ff', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L8 8l-4 2 2 4-2 4 4 2 4 6 4-6 4-2-2-4 2-4-4-2-4-6z"
      stroke={color}
      strokeWidth="1.5"
      fill={`${color}20`}
      style={{ filter: `drop-shadow(0 0 6px ${color})` }}
    />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ size = 40, color = '#ff00ff', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1.5" style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    <circle cx="12" cy="12" r="2" fill={color} style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ size = 40, color = '#00f5ff', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill={`${color}10`} style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
    <path d="M12 6v6l4 2" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ size = 24, color = '#00f5ff', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7l2-7z"
      fill={color}
      style={{ filter: `drop-shadow(0 0 4px ${color})` }}
    />
  </svg>
);

export const PuzzleIcon: React.FC<IconProps> = ({ size = 32, color = '#bf00ff', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M20 14v4a2 2 0 0 1-2 2h-4m0 0v-2a2 2 0 1 0-4 0v2m4 0H6a2 2 0 0 1-2-2v-4m0 0h2a2 2 0 1 0 0-4H4m0 4V6a2 2 0 0 1 2-2h4m0 0V2a2 2 0 1 1 4 0v2m-4 0h4a2 2 0 0 1 2 2v4m0 0h2a2 2 0 1 1 0 4h-2"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      style={{ filter: `drop-shadow(0 0 4px ${color})` }}
    />
  </svg>
);

export const NumberIcon: React.FC<IconProps> = ({ size = 32, color = '#00f5ff', className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <text x="4" y="18" fontSize="16" fontWeight="bold" fill={color} style={{ filter: `drop-shadow(0 0 4px ${color})` }}>
      123
    </text>
  </svg>
);
