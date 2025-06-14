import React from 'react';
import { motion } from 'framer-motion';

const TechStackSection = () => {
  const techStack = [
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "Next.js", icon: "▲", color: "from-gray-400 to-gray-600" },
    { name: "TypeScript", icon: "📘", color: "from-blue-500 to-blue-600" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600" },
    { name: "Express.js", icon: "🚀", color: "from-yellow-400 to-orange-400" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "Prisma", icon: "🔷", color: "from-indigo-400 to-purple-400" },
    { name: "JavaScript", icon: "📜", color: "from-yellow-300 to-yellow-500" },
    { name: "HTML5", icon: "🌐", color: "from-orange-400 to-red-400" },
    { name: "CSS3", icon: "🎨", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-blue-500" },
    { name: "Git", icon: "📂", color: "from-orange-500 to-red-500" },
    { name: "C++", icon: "💻", color: "from-gray-500 to-blue-500" } // Added C++
  ];

  return (
    <section id="techstack" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`relative p-6 bg-gradient-to-br ${tech.color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:ring-4 group-hover:ring-purple-500`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="text-white font-bold text-sm">{tech.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
