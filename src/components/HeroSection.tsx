
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center z-10">
      <div className="text-center">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-pink-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            textShadow: '0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
          }}
        >
          Full Stack Developer
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl text-white font-semibold mb-8 max-w-2xl mx-auto bg-slate-900/40 backdrop-blur-sm rounded-2xl px-8 py-4 border border-purple-500/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
          }}
        >
          ECE Student • Full Stack Developer • Dreamer 🚀
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </motion.button>
          <motion.button
            className="px-10 py-4 border-2 border-purple-400 bg-slate-900/60 backdrop-blur-sm rounded-full font-bold text-lg text-white hover:bg-purple-500/20 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
