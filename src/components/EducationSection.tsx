
import React from 'react';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electronics and Communication Engineering",
      institution: "Your University",
      year: "2021 - 2025",
      distinction: "Current CGPA: 8.5/10",
      description: "Specialized in digital systems, signal processing, and modern communication technologies."
    },
    {
      degree: "Higher Secondary",
      field: "Science Stream",
      institution: "Your School",
      year: "2019 - 2021",
      distinction: "95.2%",
      description: "Strong foundation in Mathematics, Physics, and Chemistry."
    }
  ];

  return (
    <section id="education" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-xl text-purple-400 mb-2">{edu.field}</p>
                    <p className="text-gray-400">{edu.institution}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-sm font-medium">
                      {edu.year}
                    </span>
                    <p className="text-green-400 font-semibold mt-2">{edu.distinction}</p>
                  </div>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
