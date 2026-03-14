import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Subjects from './components/sections/Subjects';
import HowItWorks from './components/sections/HowItWorks';
import Stats from './components/sections/Stats';
// import Testimonials from './components/sections/Testimonials';
import Download from './components/sections/Download';
import FAQ from './components/sections/FAQ';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Prep X - Ace Your Examination</title>
        <meta name="description" content="Master examinatons with thousands of practice questions, detailed solutions, and personalized learning paths for Science, Art, and Commercial students." />
        <meta name="keywords" content="JAMB UTME, exam preparation, practice questions, Nigeria, education" />
        <meta property="og:title" content="Prep X" />
        <meta property="og:description" content="The smartest way to prepare for exams" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://prep-x.com" />
      </Helmet>

      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

     
      <motion.div 
        className="fixed inset-0 -z-10 opacity-30"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.3),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.3),transparent_50%)]" />
      </motion.div>

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <Subjects />
        <HowItWorks />
        {/* <Testimonials /> */}
        <Download />
        <FAQ />
      </main>
      
      <Footer />
    </>
  );
}

export default App;