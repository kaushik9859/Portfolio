
import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Technical Lead",
      organization: "University Tech Club",
      duration: "Sep 2023 - Present",
      description: "Leading a team of 15+ developers in building innovative projects and organizing tech events.",
      logo: "🚀"
    },
    {
      title: "Frontend Developer Intern",
      organization: "TechStart Solutions",
      duration: "Jun 2023 - Aug 2023",
      description: "Developed responsive web applications using React and collaborated with cross-functional teams.",
      logo: "💻"
    },
    {
      title: "Event Coordinator",
      organization: "IEEE Student Branch",
      duration: "Jan 2023 - Present",
      description: "Organized technical workshops and seminars, coordinating with industry professionals.",
      logo: "⚡"
    }
  ];

  return (
    <section id="experience" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Clubs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{exp.logo}</div>
              <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-purple-400 font-semibold mb-2">{exp.organization}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
