
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import LearningSection from '../components/LearningSection';
import CertificatesSection from '../components/CertificatesSection';
import ProjectsSection from '../components/ProjectsSection';
import TechStackSection from '../components/TechStackSection';
import AchievementsSection from '../components/AchievementsSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import ParticleBackground from '../components/ParticleBackground';
import BackToTop from '../components/BackToTop';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <LearningSection />
        <CertificatesSection />
        <ProjectsSection />
        <TechStackSection />
        <AchievementsSection />
        <ContactSection />
      </motion.div>

      <BackToTop />

      {/* Footer */}
      <footer className="relative py-8 text-center border-t border-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="relative z-10">
          <p className="text-gray-400">© 2024 Portfolio. Made with ❤️ and cosmic inspiration.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
