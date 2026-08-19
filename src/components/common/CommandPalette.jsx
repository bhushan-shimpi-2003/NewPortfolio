import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Globe, Code, User, Mail, Sparkles, X, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { freelanceServices } from '../../data/servicesData';
import { useSound } from '../../context/SoundContext';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent toggles
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { label: 'Home Experience', path: '/', icon: Globe, cat: 'Page' },
    { label: 'Freelance Services & Cost Estimator', path: '/services', icon: Sparkles, cat: 'Page' },
    { label: 'All Projects & Case Studies', path: '/projects', icon: Code, cat: 'Page' },
    { label: 'About & Career Timeline', path: '/about', icon: User, cat: 'Page' },
    { label: 'Book Discovery Call / Contact', path: '/contact', icon: Mail, cat: 'Page' },
  ];

  const filteredNav = quickNav.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
  const filteredProjects = projectsData.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.tagline.toLowerCase().includes(query.toLowerCase()));
  const filteredServices = freelanceServices.filter(s => s.title.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (path) => {
    playClick();
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-xl rounded-2xl glass-card overflow-hidden shadow-2xl border border-brand-500/30"
        >
          {/* Input Header */}
          <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800">
            <Search className="w-5 h-5 text-brand-500 mr-3" />
            <input
              type="text"
              placeholder="Search pages, projects, services, or tech stack..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results list */}
          <div className="max-h-80 overflow-y-auto p-3 space-y-4">
            
            {/* Pages */}
            {filteredNav.length > 0 && (
              <div>
                <p className="px-2 pb-1.5 text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400">Pages</p>
                <div className="space-y-1">
                  {filteredNav.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(item.path)}
                        onMouseEnter={playHover}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-medium hover:bg-brand-500/10 text-slate-800 dark:text-slate-200 transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-brand-500" />
                          <span>{item.label}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-500 transition-opacity" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <p className="px-2 pb-1.5 text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400">Case Studies</p>
                <div className="space-y-1">
                  {filteredProjects.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect(`/projects/${p.slug}`)}
                      onMouseEnter={playHover}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-medium hover:bg-brand-500/10 text-slate-800 dark:text-slate-200 transition-colors group"
                    >
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{p.title}</div>
                        <div className="text-[11px] text-slate-500 truncate max-w-sm">{p.tagline}</div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono">
                        {p.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            {filteredServices.length > 0 && (
              <div>
                <p className="px-2 pb-1.5 text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400">Freelance Services</p>
                <div className="space-y-1">
                  {filteredServices.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelect('/services')}
                      onMouseEnter={playHover}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-medium hover:bg-brand-500/10 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <span>{s.title}</span>
                      <span className="font-mono text-brand-600 dark:text-brand-400 text-[11px]">{s.deliveryTime}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer hint */}
          <div className="px-4 py-2.5 bg-slate-100/70 dark:bg-slate-900/70 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span>Press <kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono">ESC</kbd> to close</span>
            <span>Bhushan Shimpi • Freelance Platform</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
