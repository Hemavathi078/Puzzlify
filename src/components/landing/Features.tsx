import { motion } from 'framer-motion';
import { NeonCard } from '../common/NeonCard';

const TargetIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
    <circle cx="12" cy="12" r="6" stroke={color} strokeWidth="1.5" />
    <circle cx="12" cy="12" r="2" fill={color} />
  </svg>
);

const NumberIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <text x="2" y="18" fontSize="14" fontWeight="bold" fill={color}>123</text>
  </svg>
);

const ClockIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
    <path d="M12 6v6l4 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TrophyIcon = ({ color }: { color: string }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M6 9H3V6h3M18 9h3V6h-3M6 5h12v6a6 6 0 0 1-12 0V5zM9 21h6M12 17v4" 
      stroke={color} strokeWidth="1.5" strokeLinecap="round" fill={`${color}20`} />
  </svg>
);

const features = [
  { title: 'Improve Logical Thinking', description: 'Sharpen your mind with carefully crafted puzzles', 
    Icon: TargetIcon, color: '#00f5ff', variant: 'cyan' as const },
  { title: 'Master Aptitude Concepts', description: 'Learn number patterns, series, and mathematical logic', 
    Icon: NumberIcon, color: '#bf00ff', variant: 'purple' as const },
  { title: 'Timed Challenges', description: 'Race against the clock and earn bonus points', 
    Icon: ClockIcon, color: '#39ff14', variant: 'green' as const },
  { title: 'Track Progress & Scores', description: 'Watch yourself improve with detailed statistics', 
    Icon: TrophyIcon, color: '#ff00ff', variant: 'pink' as const }
];

export const Features: React.FC = () => (
  <section className="py-20 px-4">
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
      Why This Game?
    </motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
          <NeonCard variant={f.variant} className="h-full text-center">
            <div className="mb-4 flex justify-center" style={{ filter: `drop-shadow(0 0 8px ${f.color})` }}>
              <f.Icon color={f.color} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.description}</p>
          </NeonCard>
        </motion.div>
      ))}
    </div>
  </section>
);
