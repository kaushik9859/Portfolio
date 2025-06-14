import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Core Member",
      organization: "GDG on Campus",
      duration: "Sep 2024 - Present",
      description: "Volunteering to organize workshops, hackathons, and tech events while fostering a community of developers.",
      logo: "/assets/logos/gdgcLogo.png" // Path to the GDG logo in the public folder
    },
    {
      title: "Volunteer",
      organization: "National Service Scheme (NSS)",
      duration: "Sep 2023 - May 2025",
      description: "Actively participated in community service initiatives, awareness campaigns, and social welfare activities to contribute to societal development.",
      logo: "/assets/logos/nssLogo.jpg" // Path to the NSS logo in the public folder
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

        {/* Flexbox for row layout */}
        <div className="flex flex-row justify-center items-center gap-8">
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
              <div className="mb-4 flex justify-center">
                <img
                  src={exp.logo}
                  alt={`${exp.organization} Logo`}
                  className="h-16 w-16 object-contain"
                />
              </div>
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
