import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', color: '#00f5ff' },
  { type: 'triangle', color: '#bf00ff' },
  { type: 'square', color: '#39ff14' },
  { type: 'diamond', color: '#ff00ff' },
  { type: 'circle', color: '#ffff00' },
  { type: 'triangle', color: '#00f5ff' },
  { type: 'square', color: '#bf00ff' },
  { type: 'diamond', color: '#39ff14' },
  { type: 'circle', color: '#ff00ff' },
  { type: 'triangle', color: '#ffff00' },
  { type: 'square', color: '#00f5ff' },
  { type: 'diamond', color: '#bf00ff' },
];

const Shape: React.FC<{ type: string; color: string; size: number }> = ({ type, color, size }) => {
  switch (type) {
    case 'circle':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      );
    case 'triangle':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M12 4L20 18H4L12 4Z" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      );
    case 'square':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect x="5" y="5" width="14" height="14" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      );
    case 'diamond':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke={color} strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
};

export const FloatingIcons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const size = 20 + Math.random() * 20;
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2,
            }}
          >
            <Shape type={shape.type} color={shape.color} size={size} />
          </motion.div>
        );
      })}
      
      {/* Additional glowing dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: 3 + Math.random() * 4,
            height: 3 + Math.random() * 4,
            backgroundColor: ['#00f5ff', '#bf00ff', '#39ff14', '#ff00ff'][i % 4],
            boxShadow: `0 0 6px ${['#00f5ff', '#bf00ff', '#39ff14', '#ff00ff'][i % 4]}`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.5 + Math.random() * 1.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};
