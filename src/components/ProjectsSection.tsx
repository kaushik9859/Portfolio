import React from 'react';
import { motion } from 'framer-motion';

import ecoclimeImage from '../assets/Projects/ecoclime1.png';
import oikyotaanImage from '../assets/Projects/oikyotaan25.png';
import audiophileImage from '../assets/Projects/audiophile.png';


const ProjectsSection = () => {
  const projects = [
    {
      title: "EcoClime",
      description: "EcoClime is an AI/ML-powered agricultural solution that analyzes weather patterns, vegetation health, and soil data to recommend the best-suited crops for a location. It empowers farmers with actionable insights, enabling sustainable farming practices, improved productivity, and efficient resource management through advanced analytics and real-time data integration.",
      tech: ["React", "vite", "Express", "Node.js", "MongoDB", "Streamlit"],
      image: ecoclimeImage,
      liveLink: "https://ecoclime1.netlify.app/",
      githubLink: "https://github.com/kaushik9859/Ecoclime1"
    },
    {
      title: "Oikyotaan 25",
      description: "Oikyotaan is the official website for the Bengali cultural fest of NIT Silchar. It serves as a comprehensive platform providing all necessary details about the event. The website includes dedicated sections for artist profiles, event schedules, a vibrant gallery, and team information. Visitors can explore detailed descriptions of events, ensuring they have a clear understanding of the fest's offerings. Oikyotaan celebrates Bengali culture and fosters community engagement through its user-friendly and visually appealing interface.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      image: oikyotaanImage,
      liveLink: "https://oikyotaan.in/",
      githubLink: "https://github.com/gdsc-nits-org/Oikyotaan25"
    },
    {
      title: "AudioPhile",
      description: "Audiophile is a sleek and modern audiobook streaming platform designed to provide users with an engaging and intuitive interface. Built with a focus on user experience, the platform allows users to browse, search, and explore a wide range of audiobooks. While it currently contains only the frontend, Audiophile showcases responsive design, seamless navigation, and visually appealing layouts, making it an ideal foundation for a full-fledged audiobook streaming service in the future",
      tech: ["HTML", "CSS", "JavaScript"],
      image: audiophileImage,
      liveLink: "https://audiophile-one-ochre.vercel.app/",
      githubLink: "https://github.com/kaushik9859/Audiophile"
    }
  ];

  return (
    <section id="projects" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="flex-1 px-4 py-2 border border-purple-500 rounded-full text-sm font-medium text-center hover:bg-purple-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
