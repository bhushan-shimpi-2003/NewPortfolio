import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { useSound } from '../../context/SoundContext';

export default function Footer() {
  const { playHover, playClick } = useSound();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/60 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-600 to-cyanBrand-500 flex items-center justify-center text-white font-display font-bold text-base shadow">
                BS
              </div>
              <span className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Bhushan Shimpi
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Full Stack Engineer specializing in high-performance MERN web apps, React Native cross-platform mobile apps, and scalable AI workflows.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Freelance Engagements
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Home (3D Experience)
                </Link>
              </li>
              <li>
                <Link to="/services" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Freelance Services & Calculator
                </Link>
              </li>
              <li>
                <Link to="/projects" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Client Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Career & 3D Tech Orbit
                </Link>
              </li>
              <li>
                <Link to="/contact" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Book a Discovery Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Freelance Offerings
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Full-Stack MERN & Next.js SaaS</li>
              <li>React Native iOS & Android Apps</li>
              <li>AI LLM Integration & ATS Scoring</li>
              <li>School & Healthcare ERP Systems</li>
              <li>End-to-End API Architecture & QA</li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Connect & Hire
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                onMouseEnter={playHover}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                onMouseEnter={playHover}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-2.5 rounded-xl glass-card hover:border-brand-500 transition-all text-slate-700 dark:text-slate-300 hover:text-brand-600"
                title="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-2.5 rounded-xl glass-card hover:border-brand-500 transition-all text-slate-700 dark:text-slate-300 hover:text-brand-600"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-2.5 rounded-xl glass-card hover:border-brand-500 transition-all text-slate-700 dark:text-slate-300 hover:text-brand-600"
                title="Live Vercel Hub"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Bhushan Kishor Shimpi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Pune, Maharashtra, India</span>
            <span>•</span>
            <span className="font-mono text-[11px] text-brand-600 dark:text-brand-400">MERN + React Native + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
