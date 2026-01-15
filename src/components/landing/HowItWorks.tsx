import { motion } from 'framer-motion';

const steps = [
  { number: '1', title: 'Choose a puzzle category', description: 'Pick from Number Series, Logic Patterns, and more!', color: '#00f5ff' },
  { number: '2', title: 'Think and solve before time runs out', description: 'Use your brain power to find the answer', color: '#bf00ff' },
  { number: '3', title: 'Get instant feedback', description: 'Learn from explanations after each puzzle', color: '#39ff14' },
  { number: '4', title: 'Earn points and unlock higher levels', description: 'Progress from Beginner to Expert!', color: '#ff00ff' }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 bg-[#0d0d14]">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 text-white"
      >
        How It Works
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            {/* Mobile: Vertical centered layout */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Step Number - Centered on mobile */}
              <div 
                className="flex-shrink-0 w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 text-2xl sm:text-xl font-bold"
                style={{ 
                  borderColor: step.color, 
                  color: step.color,
                  boxShadow: `0 0 20px ${step.color}40`
                }}
              >
                {step.number}
              </div>
              
              {/* Content - Centered text on mobile */}
              <div className="flex-1 w-full bg-[#12121a] rounded-xl p-5 sm:p-6 border border-[#1f1f2e] text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: step.color }}>{step.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{step.description}</p>
              </div>
            </div>

            {/* Connecting line between steps (mobile only) */}
            {index < steps.length - 1 && (
              <div className="flex justify-center sm:hidden my-2">
                <div 
                  className="w-0.5 h-6 rounded-full"
                  style={{ backgroundColor: `${step.color}50` }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
