import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaJsSquare } from 'react-icons/fa'; // Import relevant icons
import { SiTailwindcss, SiMongodb, SiTypescript, SiPrisma, SiExpress, SiNextdotjs, SiCplusplus } from 'react-icons/si'; // Import additional icons

const TechStackSection = () => {
  const techStack = [
    { name: "React", icon: <FaReact className="text-blue-400 group-hover:text-blue-500" />, color: "from-blue-300 to-cyan-300" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400 group-hover:text-green-500" />, color: "from-green-300 to-green-400" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 group-hover:text-blue-600" />, color: "from-blue-400 to-blue-500" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 group-hover:text-green-600" />, color: "from-green-400 to-green-500" },
    { name: "Prisma", icon: <SiPrisma className="text-indigo-400 group-hover:text-indigo-500" />, color: "from-indigo-300 to-purple-400" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 group-hover:text-yellow-500" />, color: "from-yellow-300 to-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-400 group-hover:text-orange-500" />, color: "from-orange-300 to-red-400" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-300 group-hover:text-blue-400" />, color: "from-blue-200 to-blue-300" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400 group-hover:text-cyan-500" />, color: "from-cyan-300 to-blue-400" },
    { name: "Git", icon: <FaGitAlt className="text-orange-400 group-hover:text-orange-500" />, color: "from-orange-300 to-red-400" },
    { name: "Express.js", icon: <SiExpress className="text-gray-400 group-hover:text-gray-500" />, color: "from-gray-300 to-gray-400" },
    { name: "Next.js", icon: <SiNextdotjs className="text-black group-hover:text-gray-800" />, color: "from-gray-700 to-gray-800" },
    { name: "C++", icon: <SiCplusplus className="text-blue-600 group-hover:text-blue-700" />, color: "from-blue-500 to-blue-600" }
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
              whileHover={{ scale: 1.1 }}
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
