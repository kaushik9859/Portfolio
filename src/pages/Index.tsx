
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
import CursorParticleEffect from '../components/CursorParticleEffect';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden relative">
      {/* Background effects */}
      <ParticleBackground />
      <CursorParticleEffect />
      
      {/* Content overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none z-5"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content with enhanced visibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        {/* Content sections with enhanced backgrounds */}
        <div className="space-y-0">
          <div className="bg-gradient-to-b from-transparent via-black/10 to-transparent">
            <HeroSection />
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 backdrop-blur-sm">
            <AboutSection />
          </div>
          
          <div className="bg-gradient-to-l from-blue-900/20 via-transparent to-purple-900/20 backdrop-blur-sm">
            <EducationSection />
          </div>
          
          <div className="bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30 backdrop-blur-sm">
            <ExperienceSection />
          </div>
          
          <div className="bg-gradient-to-b from-purple-900/30 via-pink-900/20 to-purple-900/30 backdrop-blur-sm">
            <LearningSection />
          </div>
          
          <div className="bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20 backdrop-blur-sm">
            <CertificatesSection />
          </div>
          
          <div className="bg-gradient-to-l from-purple-900/20 via-transparent to-pink-900/20 backdrop-blur-sm">
            <ProjectsSection />
          </div>
          
          <div className="bg-gradient-to-r from-slate-900/30 via-transparent to-slate-900/30 backdrop-blur-sm">
            <TechStackSection />
          </div>
          
          <div className="bg-gradient-to-b from-purple-900/20 via-pink-900/20 to-purple-900/20 backdrop-blur-sm">
            <AchievementsSection />
          </div>
          
          <div className="bg-gradient-to-t from-slate-900/40 via-purple-900/20 to-transparent backdrop-blur-sm">
            <ContactSection />
          </div>
        </div>
      </motion.div>

      <BackToTop />

      {/* Enhanced Footer */}
      <footer className="relative py-8 text-center border-t border-purple-500/20 bg-gradient-to-t from-slate-900 via-purple-900/30 to-transparent backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <div className="relative z-10">
          <p className="text-gray-300 font-medium">
            © 2024 Portfolio. Made with ❤️ and cosmic inspiration.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
