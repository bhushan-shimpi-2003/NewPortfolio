import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Check, ArrowDown, Globe, Smartphone, 
  Sparkles, Layers, ShieldCheck, Clock, MapPin, Code2, Database, Zap, Cpu, GraduationCap, Award
} from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePhoto from '../assets/profile.png';
import { personalInfo, projectsData } from '../data/portfolioData';
import { useSound } from '../context/SoundContext';

export default function HomePage() {
  const { playClick, playHover } = useSound();
  const flagshipProjects = projectsData.slice(0, 3);
  const [puneTime, setPuneTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setPuneTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 space-y-16 md:space-y-20">
      
      {/* 1. HERO SECTION (WITH PURE ROUND PROFILE PICTURE) */}
      <section className="relative max-w-7xl mx-auto px-2 sm:px-4 pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Minimal Availability & Location Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-slate-700 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available for Freelance Projects</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-xs font-mono text-slate-600 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-indigo-500" />
                <span>Pune (IST): <strong className="text-slate-900 dark:text-white">{puneTime || 'IST'}</strong></span>
              </div>
            </div>

            {/* Dominant Main Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              I Build Digital Products That <br />
              <span className="text-gradient">Grow Businesses.</span>
            </h1>

            {/* Short Concise Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Hi, I'm <strong className="text-slate-950 dark:text-white">Bhushan Shimpi</strong>. I build modern websites, MERN applications, React Native apps and AI-powered products for startups and businesses — from idea to deployment.
            </p>

            {/* Two Focused CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="#work"
                className="px-6 py-3 rounded-2xl glass-card text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm hover:border-indigo-500 transition-all flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Minimal Credibility Indicators */}
            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>100% Source Code Transfer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Weekly Live Staging Demos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>MERN + React Native Stack</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero: Pure Round Profile Picture (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative flex flex-col items-center space-y-4 max-w-sm w-full">
              
              {/* Pure Round Frame Without White Corners */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 shadow-2xl shadow-indigo-500/25 group">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/10 relative">
                  <img
                    src={profilePhoto}
                    alt="Bhushan Shimpi — Full Stack & Mobile Engineer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Tech Badge 1 */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-2 -left-2 px-3 py-1.5 rounded-full bg-slate-950/90 text-white backdrop-blur-md text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-xl border border-white/15"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>⚡ MERN Stack</span>
                </motion.div>

                {/* Floating Tech Badge 2 */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full bg-slate-950/90 text-white backdrop-blur-md text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-xl border border-white/15"
                >
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>📱 React Native</span>
                </motion.div>
              </div>

              {/* Profile Meta Bar */}
              <div className="flex items-center justify-between w-full max-w-[280px] px-4 py-2 rounded-2xl glass-card hologram-border">
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-950 dark:text-white">
                    Bhushan Shimpi
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Full-Stack Engineer · Pune
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-white transition-colors text-slate-700 dark:text-slate-300"
                    title="GitHub"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-white transition-colors text-slate-700 dark:text-slate-300"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. MINIMAL PROOF STRIP */}
      <section className="border-y border-slate-200/60 dark:border-white/5 py-4 bg-slate-100/30 dark:bg-slate-900/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">
            <span>FULL STACK</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>MERN ARCHITECTURE</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>REACT NATIVE MOBILE</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>AI INTEGRATION</span>
            <span className="hidden sm:inline opacity-30">•</span>
            <span>SUPABASE & POSTGRES</span>
          </div>
        </div>
      </section>

      {/* 3. WHAT I BUILD (3 PRIMARY SERVICES) */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold">
            <Layers className="w-3.5 h-3.5" />
            Core Engineering Services
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            What I Deliver
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            End-to-end technical execution for clients who value speed, clean architecture, and product polish.
          </p>
        </div>

        {/* 3 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 01 Web Applications */}
          <div className="p-6 sm:p-7 rounded-3xl glass-card hologram-border space-y-4 flex flex-col justify-between hover:border-indigo-500 transition-all group">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-slate-400">01</span>
              <div className="p-3 w-fit rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Web Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                MERN applications, SaaS platforms, customer dashboards, internal portals, and custom business software built for scale.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 text-xs font-mono text-slate-500">
              React · Next.js · Node.js · Express · MongoDB · Supabase
            </div>
          </div>

          {/* 02 Mobile Applications */}
          <div className="p-6 sm:p-7 rounded-3xl glass-card hologram-border space-y-4 flex flex-col justify-between hover:border-cyan-500 transition-all group">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-slate-400">02</span>
              <div className="p-3 w-fit rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Mobile Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Cross-platform Android and iOS applications built with React Native & Expo, sharing unified backend logic for rapid launch.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 text-xs font-mono text-slate-500">
              React Native · Expo · iOS & Android · Offline Sync · Push APIs
            </div>
          </div>

          {/* 03 AI Applications */}
          <div className="p-6 sm:p-7 rounded-3xl glass-card hologram-border space-y-4 flex flex-col justify-between hover:border-emerald-500 transition-all group">
            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-slate-400">03</span>
              <div className="p-3 w-fit rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                AI Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                AI-powered applications, custom LLM prompt pipelines, automated PDF/resume parsing, intelligent search, and smart workflows.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/60 dark:border-white/5 text-xs font-mono text-slate-500">
              LLM APIs · Streaming · ATS Scoring · Vector Search · OpenAI
            </div>
          </div>

        </div>

        {/* Clean CTA */}
        <div className="text-center pt-6">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            <span>Need a project estimate? → Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </section>

      {/* 4. SELECTED WORK (3 STRONGEST PROJECTS) */}
      <section id="work" className="max-w-7xl mx-auto px-2 sm:px-4">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold">
              Proof of Delivery
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Production platforms built from the ground up to solve real business bottlenecks.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 shrink-0"
          >
            All Case Studies ({projectsData.length}) <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Flagship Case Studies */}
        <div className="space-y-8">
          {flagshipProjects.map((project, idx) => (
            <div
              key={project.slug}
              className="p-6 sm:p-8 rounded-3xl glass-card hologram-border grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column: Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-slate-400">0{idx + 1}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold">
                    {project.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-slate-700 dark:text-slate-300">
                    <strong className="text-rose-600 dark:text-rose-400 block mb-0.5">Problem:</strong>
                    <span className="text-[11px] leading-relaxed">{project.problem}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-700 dark:text-slate-300">
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-0.5">Solution:</strong>
                    <span className="text-[11px] leading-relaxed">{project.solution}</span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-1">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/20 hover:scale-105 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Mockup (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 relative group">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 5. HOW I WORK (4 CONCISE STEPS) */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
            Zero-Surprise Delivery
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            How I Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            A battle-tested 4-step framework guaranteeing zero surprise delays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-3xl glass-card hologram-border space-y-2">
            <span className="font-mono text-xs font-bold text-slate-400">01</span>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Discover</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Understand your idea, business objectives, feature roadmap, and timeline.
            </p>
          </div>

          <div className="p-5 rounded-3xl glass-card hologram-border space-y-2">
            <span className="font-mono text-xs font-bold text-slate-400">02</span>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Design</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Plan the system architecture, database contracts, and intuitive UI user flows.
            </p>
          </div>

          <div className="p-5 rounded-3xl glass-card hologram-border space-y-2">
            <span className="font-mono text-xs font-bold text-slate-400">03</span>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Build</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Develop in weekly agile sprints with automated test suites and live staging demos.
            </p>
          </div>

          <div className="p-5 rounded-3xl glass-card hologram-border space-y-2">
            <span className="font-mono text-xs font-bold text-slate-400">04</span>
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Launch</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Deploy to production, transfer complete repository ownership, and provide warranty.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EDUCATION & ACADEMIC BACKGROUND */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Solid computer science and engineering qualifications from leading institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* 1. MCA */}
          <div className="p-5 sm:p-6 rounded-3xl glass-card hologram-border space-y-2.5 flex flex-col justify-between hover:border-indigo-500 transition-all">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  2024 – 2026
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                  CGPA: 9.16 / 10
                </span>
              </div>
              <h3 className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white">
                Indira College of Engineering & Management
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Master of Computer Applications (MCA) in Computer Applications
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-xs text-slate-500 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          {/* 2. BCA */}
          <div className="p-5 sm:p-6 rounded-3xl glass-card hologram-border space-y-2.5 flex flex-col justify-between hover:border-cyan-500 transition-all">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  2021 – 2024
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                  CGPA: 9.21 / 10
                </span>
              </div>
              <h3 className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white">
                North Maharashtra University
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Bachelor of Computer Applications (BCA) in Computer Applications
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-xs text-slate-500 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              <span>Maharashtra, India</span>
            </div>
          </div>

          {/* 3. HSC */}
          <div className="p-5 sm:p-6 rounded-3xl glass-card hologram-border space-y-2.5 flex flex-col justify-between hover:border-purple-500 transition-all">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-xs font-mono text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  2019 – 2021
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                  Percentage: 84.40%
                </span>
              </div>
              <h3 className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white">
                Maharashtra State Board
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Higher Secondary Certificate (HSC)
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-xs text-slate-500 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-purple-500" />
              <span>Maharashtra, India</span>
            </div>
          </div>

          {/* 4. SSC */}
          <div className="p-5 sm:p-6 rounded-3xl glass-card hologram-border space-y-2.5 flex flex-col justify-between hover:border-emerald-500 transition-all">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  June 2018 – Mar 2019
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                  Percentage: 76.60%
                </span>
              </div>
              <h3 className="font-display font-black text-base sm:text-lg text-slate-900 dark:text-white">
                NMV School, Chunchale
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Secondary School Certificate (SSC) in Secondary Education
              </p>
            </div>
            <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 text-xs text-slate-500 font-mono flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              <span>Maharashtra, India</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. ABOUT BHUSHAN */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="p-6 sm:p-10 rounded-3xl glass-card hologram-border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-8 space-y-3.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              The Developer Behind the Products
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
              Hi, I'm Bhushan Shimpi.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a Full Stack Software Engineer focused on building modern web applications, mobile products, and AI-powered software. Currently developing scalable web and mobile applications at QLOAX LLP and taking on select freelance projects for startups worldwide.
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Based in Pune, India · MCA Graduate · Proficient in MERN Stack, React Native & AI Integrations.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-white transition-all text-slate-700 dark:text-slate-300"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-white transition-all text-slate-700 dark:text-slate-300"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <Link
                to="/about"
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                <span>Read Full Background & Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center space-y-2.5">
            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-indigo-500/40">
              <img src={profilePhoto} alt="Bhushan Shimpi" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Bhushan Shimpi
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                Full-Stack & Mobile Engineer
              </div>
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for New Projects</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FINAL CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="rounded-3xl glass-card hologram-border p-6 sm:p-10 text-center space-y-5 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Have a Project Idea? <span className="text-gradient">Let's Build It.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Tell me what you're building and I'll help you turn the idea into a working product.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-500/25 flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/917020710581?text=Hi%20Bhushan,%20I%20have%20a%20project%20idea%20to%20discuss."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 70207 10581)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
