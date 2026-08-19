import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Volume2, VolumeX, Menu, X, Command, Sparkles, ArrowUpRight, Code2 } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useSound } from '../../context/SoundContext';

export default function Navbar({ onOpenCommandPalette }) {
  const { theme, toggleTheme, isDark } = useTheme();
  const { soundEnabled, toggleSound, playClick, playHover } = useSound();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Scope', path: '/services' },
    { name: 'Case Studies', path: '/projects' },
    { name: 'About & Career', path: '/about' },
    { name: 'Contact / Hire', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 glass-hud hologram-border ${
        isScrolled ? 'shadow-2xl shadow-indigo-500/10 py-2 px-4 sm:px-6' : 'py-3 px-4 sm:px-6'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <Link
            to="/"
            onMouseEnter={playHover}
            onClick={playClick}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyanBrand-500 flex items-center justify-center text-white font-display font-black text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
                BS
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
              </span>
            </div>
            <div>
              <div className="font-display font-black text-sm sm:text-base text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                Bhushan Shimpi
                <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:text-brand-400 font-mono font-bold">
                  PRO
                </span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono hidden md:block">
                Full-Stack • React Native • AI
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onMouseEnter={playHover}
                onClick={playClick}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-brand-400 shadow-md shadow-brand-500/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons: Command Palette, SFX, Theme, Hire CTA */}
          <div className="flex items-center gap-2">
            
            {/* Command Palette */}
            <button
              onClick={() => { playClick(); onOpenCommandPalette(); }}
              onMouseEnter={playHover}
              title="Command Palette (Ctrl+K)"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800/80 transition-colors border border-slate-200/80 dark:border-slate-700/80"
            >
              <Command className="w-3.5 h-3.5 text-brand-500" />
              <span className="font-mono text-[10px] bg-slate-200/80 dark:bg-slate-700 px-1 py-0.5 rounded">⌘K</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => { toggleSound(); playClick(); }}
              onMouseEnter={playHover}
              title={soundEnabled ? "Mute audio effects" : "Enable audio effects"}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800/80 transition-colors border border-slate-200/80 dark:border-slate-700/80"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-brand-500" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            </button>

            {/* Theme Toggle (Light/Dark) */}
            <button
              onClick={() => { toggleTheme(); playClick(); }}
              onMouseEnter={playHover}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800/80 transition-colors border border-slate-200/80 dark:border-slate-700/80"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-brand-600" />}
            </button>

            {/* Hire Me CTA Button */}
            <Link
              to="/contact"
              onMouseEnter={playHover}
              onClick={playClick}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-600 to-cyanBrand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => { setMobileMenuOpen(!mobileMenuOpen); playClick(); }}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/80"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <div className="flex flex-col gap-1.5 pb-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => { setMobileMenuOpen(false); playClick(); }}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-brand-500/15 text-brand-600 dark:text-brand-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => { setMobileMenuOpen(false); playClick(); }}
                  className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyanBrand-500 text-white font-bold text-sm shadow-md"
                >
                  Book Discovery Call
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
