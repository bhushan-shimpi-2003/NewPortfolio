import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { useSound } from '../../context/SoundContext';

export default function Footer() {
  const { playHover, playClick } = useSound();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-2xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-display font-black text-base shadow">
                BS
              </div>
              <span className="font-display font-black text-lg text-slate-900 dark:text-white">
                Bhushan Shimpi
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Full Stack MERN, React Native & AI Software Engineer based in Pune, Maharashtra, India. Building high-performance digital products for founders & businesses.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Freelance Projects
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onMouseEnter={playHover} onClick={playClick} className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Freelance Offerings */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Web Applications (MERN & Next.js)</li>
              <li>Mobile Applications (React Native)</li>
              <li>AI Integration & ATS Parsing</li>
              <li>Custom Enterprise Portals</li>
              <li>REST / GraphQL APIs & Databases</li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
              Connect & Hire
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="https://wa.me/919579938131?text=Hi%20Bhushan,%20I%20saw%20your%20portfolio."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                onMouseEnter={playHover}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-2.5 rounded-xl glass-card hover:border-indigo-500 transition-all text-slate-700 dark:text-slate-300 hover:text-indigo-600"
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
                className="p-2.5 rounded-xl glass-card hover:border-indigo-500 transition-all text-slate-700 dark:text-slate-300 hover:text-indigo-600"
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
                className="p-2.5 rounded-xl glass-card hover:border-indigo-500 transition-all text-slate-700 dark:text-slate-300 hover:text-indigo-600"
                title="Live Portfolio"
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
            <span className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">MERN + React Native + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
