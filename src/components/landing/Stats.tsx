import { motion } from 'framer-motion';

const stats = [
  { number: '16', label: 'Game Categories', color: '#00f5ff' },
  { number: '120+', label: 'Unique Puzzles', color: '#bf00ff' },
  { number: '4', label: 'Difficulty Levels', color: '#39ff14' },
  { number: '∞', label: 'Replayability', color: '#ff00ff' }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center p-4 rounded-xl bg-[#12121a]/50 border border-[#1f1f2e]"
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}50` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
