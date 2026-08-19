import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import { useSound } from '../../context/SoundContext';

export default function Footer() {
  const { playHover, playClick } = useSound();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8 sm:mt-12 border-t border-white/5 bg-transparent transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Brand & Bio */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-display font-black text-xs shadow">
                BS
              </div>
              <span className="font-display font-black text-base text-white">
                Bhushan Shimpi
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Full Stack MERN, React Native & AI Software Engineer based in Pune, Maharashtra, India. Building high-performance digital products.
            </p>
            <div className="pt-0.5 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Freelance Projects
            </div>
          </div>

          {/* Quick Navigation — Hidden on mobile layout */}
          <div className="hidden md:block space-y-2.5">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link to="/" onMouseEnter={playHover} onClick={playClick} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" onMouseEnter={playHover} onClick={playClick} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" onMouseEnter={playHover} onClick={playClick} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" onMouseEnter={playHover} onClick={playClick} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onMouseEnter={playHover} onClick={playClick} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities — Hidden on mobile layout */}
          <div className="hidden md:block space-y-2.5">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>Web Applications (MERN & Next.js)</li>
              <li>Mobile Applications (React Native)</li>
              <li>AI Integration & ATS Parsing</li>
              <li>Custom Enterprise Portals</li>
              <li>REST / GraphQL APIs & Databases</li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-2.5">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Connect & Hire
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/917020710581?text=Hi%20Bhushan,%20I%20saw%20your%20portfolio."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-400 font-bold hover:underline"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                onMouseEnter={playHover}
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="p-2 rounded-xl glass-card hover:border-indigo-500 transition-all text-slate-300 hover:text-white"
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
                className="p-2 rounded-xl glass-card hover:border-indigo-500 transition-all text-slate-300 hover:text-white"
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
                className="p-2 rounded-xl glass-card hover:border-indigo-500 transition-all text-slate-300 hover:text-white"
                title="Live Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-400">
          <p>© {currentYear} Bhushan Kishor Shimpi. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Pune, Maharashtra, India</span>
            <span>•</span>
            <span className="font-mono text-[11px] text-indigo-400">MERN + React Native + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
