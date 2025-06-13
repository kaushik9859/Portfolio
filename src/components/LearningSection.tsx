
import React from 'react';
import { motion } from 'framer-motion';

const LearningSection = () => {
  const currentlyLearning = [
    "Next.js 14", "TypeScript", "Prisma ORM", "Docker", "Kubernetes", 
    "Machine Learning", "DevOps", "System Design", "GraphQL", "AWS"
  ];

  return (
    <section id="learning" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-xl">
            Currently Learning
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 shadow-lg"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {currentlyLearning.map((tech, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="px-8 py-4 bg-slate-800/80 backdrop-blur-lg rounded-2xl border border-purple-400/50 shadow-2xl shadow-purple-500/20">
                  <span className="text-white font-bold text-lg" style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}>
                    {tech}
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(139, 92, 246, 0.7)',
                        '0 0 0 15px rgba(139, 92, 246, 0)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
