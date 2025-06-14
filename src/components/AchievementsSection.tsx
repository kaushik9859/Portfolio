import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Speech Competition",
      description: "3rd Place in Inter-College Speech Competition",
      icon: "🏆", // Updated to use the same icon for both
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Tug of War",
      description: "3rd Place in Annual Sports Event",
      icon: "🏆", // Updated to use the same icon for both
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="achievements" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Flexbox for row layout and centering */}
        <div className="flex flex-row justify-center items-center gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group w-80 h-80" // Ensures both divs have the same size
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`relative p-6 bg-gradient-to-br ${achievement.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full h-full`}>
                <div className="text-center flex flex-col justify-center items-center h-full">
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
