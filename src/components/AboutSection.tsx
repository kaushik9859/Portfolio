import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I'm a passionate Electronics and Communication Engineering student with a deep love for 
              technology and innovation. My journey in the world of development started with curiosity 
              and has evolved into a full-stack expertise spanning modern web technologies.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
              or dreaming about the next big project. I believe in the power of technology to solve 
              real-world problems and create meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Enthusiast'].map((trait) => (
                <motion.span
                  key={trait}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;