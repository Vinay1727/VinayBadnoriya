import React, { useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import AIBackground from './components/AIBackground';
import Hero from './components/Hero';
import ScrollShowcase from './components/ScrollShowcase';
import ImageCarousel from './components/ImageCarousel';
import About from './components/About';
import Resume from './components/Resume';
import ResumeDownload from './components/ResumeDownload';
import Portfolio from './components/Portfolio';
import GitHub from './components/GitHub';
import Testimonials from './components/Testimonials';
import PortfolioMarquee from './components/PortfolioMarquee';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import ParticlesAnimation from './components/ParticlesAnimation';
import AnimatedShapes from './components/AnimatedShapes';
import VideoShowcase from './components/VideoShowcase';
import ScrollRobot from './components/ScrollRobot';

export default function App() {
  useEffect(() => {
    // Apply saved theme from localStorage
    const savedTheme = localStorage.getItem('site-theme') || 'dark';

    if (savedTheme !== 'light') {
      document.documentElement.classList.add(savedTheme + '-theme');
    }

    // Close mobile nav on desktop resize
    const handleResize = () => {
      if (window.innerWidth > 900) {
        const nav = document.querySelector('.top-nav');
        if (nav && nav.classList.contains('open')) {
          nav.classList.remove('open');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Animated Background Effects */}
      <ParticlesAnimation />
      <AnimatedShapes />

      {/* Background layer (including neon snake effect) */}
      <div className="ai-background-layer"></div>
      <AIBackground />
      {/* Header Navigation */}
      <Header />

      <div className="page-wrapper">
        <main className="content">
          <Hero />
          <ScrollShowcase />
          <ImageCarousel />
          <About />
          <Resume />
          <ResumeDownload />
          <Portfolio />
          <VideoShowcase />
          <GitHub />
          <Testimonials />
          <PortfolioMarquee />
          <Contact />
        </main>
      </div>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Interactive Scroll Robot */}
      <ScrollRobot />
    </>
  );
}
