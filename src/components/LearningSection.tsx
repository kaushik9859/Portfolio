
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  Globe, 
  Layers, 
  Terminal, 
  GitBranch,
  Zap,
  Brain
} from 'lucide-react';

const LearningSection = () => {
  const currentlyLearning = [
    { name: "Next.js 14", icon: <Globe className="w-5 h-5" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
    { name: "Prisma ORM", icon: <Database className="w-5 h-5" /> },
    { name: "Docker", icon: <Layers className="w-5 h-5" /> },
    { name: "Kubernetes", icon: <Cloud className="w-5 h-5" /> },
    { name: "Machine Learning", icon: <Brain className="w-5 h-5" /> },
    { name: "DevOps", icon: <Terminal className="w-5 h-5" /> },
    { name: "System Design", icon: <Cpu className="w-5 h-5" /> },
    { name: "GraphQL", icon: <GitBranch className="w-5 h-5" /> },
    { name: "AWS", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <section id="learning" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        {/* Enhanced background overlay for better content visibility */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-3xl"></div>
        
        <div className="relative z-20">
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
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Continuously expanding my knowledge in cutting-edge technologies and frameworks
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentlyLearning.map((tech, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="relative p-6 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-md shadow-xl group-hover:shadow-purple-500/25 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                    
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100"
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
      </div>
    </section>
  );
};

export default LearningSection;
