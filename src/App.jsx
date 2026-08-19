import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

import { ThemeProvider } from './context/ThemeContext';
import { SoundProvider } from './context/SoundContext';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BackgroundCanvas from './components/3d/BackgroundCanvas';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function FloatingWhatsAppWidget() {
  return (
    <a
      href="https://wa.me/919579938131?text=Hi%20Bhushan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      title="Chat with Bhushan on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all border-2 border-white dark:border-slate-900 group"
    >
      <FaWhatsapp className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">WhatsApp (+91 95799 38131)</span>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
      </span>
    </a>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="min-h-screen flex flex-col justify-between"
      >
        <main className="flex-grow">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <BrowserRouter>
          <div className="relative min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white">
            <ScrollToTop />
            <BackgroundCanvas />
            <Navbar />
            <AnimatedRoutes />
            <FloatingWhatsAppWidget />
          </div>
        </BrowserRouter>
      </SoundProvider>
    </ThemeProvider>
  );
}
