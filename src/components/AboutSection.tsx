
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
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-xl">
            About Me
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 shadow-lg"></div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/80 backdrop-blur-lg rounded-3xl p-10 border border-purple-500/40 shadow-2xl shadow-purple-500/20">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8" 
               style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
              I'm a passionate Electronics and Communication Engineering student with a deep love for 
              technology and innovation. My journey in the world of development started with curiosity 
              and has evolved into a full-stack expertise spanning modern web technologies.
            </p>
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8"
               style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)' }}>
              When I'm not coding, you'll find me exploring new technologies, participating in hackathons, 
              or dreaming about the next big project. I believe in the power of technology to solve 
              real-world problems and create meaningful impact.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Innovation Enthusiast'].map((trait) => (
                <motion.span
                  key={trait}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-full border border-purple-400/50 text-lg font-bold text-white shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  style={{ textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)' }}
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
