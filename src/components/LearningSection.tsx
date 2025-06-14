
import React from 'react';
import { motion } from 'framer-motion';

const LearningSection = () => {
  const currentlyLearning = [
    "Next.js 14", "TypeScript", "Prisma ORM", "Docker", 
    "Machine Learning", "DevOps", "AWS"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Currently Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
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
                <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <span className="text-white font-medium">{tech}</span>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(139, 92, 246, 0.7)',
                        '0 0 0 10px rgba(139, 92, 246, 0)',
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
