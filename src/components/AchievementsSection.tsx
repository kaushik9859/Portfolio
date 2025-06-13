
import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Hackathon Winner",
      description: "1st Place in National Level Hackathon 2023",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Academic Excellence",
      description: "Dean's List for 3 consecutive semesters",
      icon: "🎓",
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Open Source Contributor",
      description: "50+ contributions to open source projects",
      icon: "⭐",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Tech Speaker",
      description: "Delivered talks at 5+ technical conferences",
      icon: "🎤",
      color: "from-purple-400 to-pink-500"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`relative p-6 bg-gradient-to-br ${achievement.color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{achievement.description}</p>
                </div>
                
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
