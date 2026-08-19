import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Check, ArrowDown, Globe, Smartphone, 
  Sparkles, Layers, ShieldCheck, Clock, MapPin, Code2, Database, Zap, Cpu, GraduationCap, Award,
  AlertCircle, CheckCircle2
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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-12 sm:space-y-16 md:space-y-20 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Profile Picture Showcase (Top on Mobile: order-1, Right on Desktop: lg:order-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center pb-2 lg:py-0 order-1 lg:order-2"
          >
            <div className="relative flex flex-col items-center space-y-3 w-full max-w-[280px] sm:max-w-xs">
              
              {/* Pure Round Frame */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 shadow-2xl shadow-indigo-500/25 group">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/10 relative">
                  <img
                    src={profilePhoto}
                    alt="Bhushan Shimpi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Tech Badge 1 */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-1 left-0 sm:-top-2 sm:-left-2 px-2.5 py-1 rounded-full bg-slate-950/90 text-white backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold flex items-center gap-1 shadow-xl border border-white/15"
                >
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>⚡ MERN Stack</span>
                </motion.div>

                {/* Floating Tech Badge 2 */}
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-1 right-0 sm:-bottom-2 sm:-right-2 px-2.5 py-1 rounded-full bg-slate-950/90 text-white backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold flex items-center gap-1 shadow-xl border border-white/15"
                >
                  <Smartphone className="w-3 h-3 text-cyan-400" />
                  <span>📱 React Native</span>
                </motion.div>
              </div>

              {/* Profile Meta Bar */}
              <div className="flex items-center justify-between w-full px-3.5 py-2 rounded-2xl glass-card hologram-border text-left">
                <div>
                  <h3 className="font-display font-bold text-xs sm:text-sm text-white">
                    Bhushan Shimpi
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                    Full-Stack Engineer · Pune
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl glass-card hover:text-white transition-colors text-slate-300"
                    title="GitHub"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl glass-card hover:text-white transition-colors text-slate-300"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Left Hero Content (Below Image on Mobile: order-2, Left on Desktop: lg:order-1) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-left order-2 lg:order-1"
          >
            {/* Availability & Location Status */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-card text-[11px] sm:text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="font-semibold text-emerald-400">Available for Freelance</span>
              </div>
              <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full glass-card text-[11px] sm:text-xs font-mono text-slate-400">
                <Clock className="w-3 h-3 text-indigo-400 shrink-0" />
                <span>Pune (IST): <strong className="text-white">{puneTime || 'IST'}</strong></span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] break-words">
              I Build Digital Products That <br className="hidden sm:inline" />
              <span className="text-gradient">Grow Businesses.</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-lg leading-relaxed">
              Hi, I'm <strong className="text-white">Bhushan Shimpi</strong>. I build modern websites, MERN applications, React Native apps and AI-powered products for startups and businesses — from idea to deployment.
            </p>

            {/* Two Focused CTAs — One Single Line on Mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:items-center sm:gap-3 pt-1">
              <Link
                to="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full sm:w-auto text-center justify-center px-3 sm:px-6 py-3 rounded-xl sm:rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </Link>

              <a
                href="#work"
                className="w-full sm:w-auto text-center justify-center px-3 sm:px-6 py-3 rounded-xl sm:rounded-2xl glass-card text-slate-200 font-semibold text-xs sm:text-sm hover:border-indigo-500 transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
              >
                <span>View My Work</span>
                <ArrowDown className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

            {/* Credibility Indicators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-[11px] sm:text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Code Transfer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Weekly Live Demos</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>MERN + React Native</span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. MINIMAL PROOF STRIP */}
      <section className="w-full border-y border-white/5 py-3.5 bg-slate-900/40 backdrop-blur-md -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-2 text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider text-center">
          <span>FULL STACK</span>
          <span className="opacity-30">•</span>
          <span>MERN ARCHITECTURE</span>
          <span className="opacity-30">•</span>
          <span>REACT NATIVE MOBILE</span>
          <span className="opacity-30">•</span>
          <span>AI INTEGRATION</span>
          <span className="opacity-30 hidden sm:inline">•</span>
          <span className="hidden sm:inline">SUPABASE & POSTGRES</span>
        </div>
      </section>

      {/* 3. WHAT I BUILD (3 PRIMARY SERVICES) */}
      <section className="w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">
            <Layers className="w-3.5 h-3.5" />
            Core Services
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            What I Deliver
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            End-to-end technical execution for clients who value speed and clean architecture.
          </p>
        </div>

        {/* 3 Core Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* 01 Web Applications */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-3.5 flex flex-col justify-between hover:border-indigo-500 transition-all group">
            <div className="space-y-2.5">
              <span className="font-mono text-xs font-bold text-slate-500">01</span>
              <div className="p-2.5 w-fit rounded-xl bg-indigo-500/10 text-indigo-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Web Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                MERN applications, SaaS platforms, dashboards, internal portals, and custom business software built for scale.
              </p>
            </div>

            <div className="pt-2.5 border-t border-white/5 text-[11px] font-mono text-slate-400">
              React · Next.js · Node.js · Express · MongoDB
            </div>
          </div>

          {/* 02 Mobile Applications */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-3.5 flex flex-col justify-between hover:border-cyan-500 transition-all group">
            <div className="space-y-2.5">
              <span className="font-mono text-xs font-bold text-slate-500">02</span>
              <div className="p-2.5 w-fit rounded-xl bg-cyan-500/10 text-cyan-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Mobile Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Cross-platform Android & iOS applications built with React Native & Expo with unified backend APIs.
              </p>
            </div>

            <div className="pt-2.5 border-t border-white/5 text-[11px] font-mono text-slate-400">
              React Native · Expo · iOS & Android · Offline Sync
            </div>
          </div>

          {/* 03 AI Applications */}
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-3.5 flex flex-col justify-between hover:border-emerald-500 transition-all group">
            <div className="space-y-2.5">
              <span className="font-mono text-xs font-bold text-slate-500">03</span>
              <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                AI Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AI-powered applications, custom LLM pipelines, automated resume parsing, intelligent search, and workflows.
              </p>
            </div>

            <div className="pt-2.5 border-t border-white/5 text-[11px] font-mono text-slate-400">
              LLM APIs · Streaming · ATS Scoring · OpenAI
            </div>
          </div>

        </div>

        {/* Clean CTA */}
        <div className="text-center pt-5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:underline"
          >
            <span>Need a project estimate? → Start a Project</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </section>

      {/* 4. SELECTED WORK (ENHANCED PREMIUM CASE STUDY CARDS) */}
      <section id="work" className="w-full">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Proof of Delivery
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
              Selected Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Production platforms built from the ground up to solve real business bottlenecks.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-bold text-indigo-400 hover:underline flex items-center gap-1 shrink-0"
          >
            All Case Studies ({projectsData.length}) <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* 3 Flagship Enhanced Case Studies */}
        <div className="space-y-8 sm:space-y-10">
          {flagshipProjects.map((project, idx) => (
            <div
              key={project.slug}
              className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl glass-card hologram-border border border-white/10 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center transition-all duration-300 group"
            >
              {/* Left Column: Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-4 order-2 lg:order-1 text-left">
                
                {/* Number & Category Pill */}
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-extrabold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                    0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-mono font-bold border border-white/10">
                    {project.badge}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                    · {project.category}
                  </span>
                </div>

                {/* Title & Overview */}
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Problem vs Solution Split (Enhanced Cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/25 text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[11px] uppercase tracking-wider">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>The Problem</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">{project.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>The Solution</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-300">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/10 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl glass-card hover:border-indigo-500 text-slate-400 hover:text-white transition-colors"
                    title="View Source Code"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockup with Browser HUD Bar (5 Cols) */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/90 relative group order-1 lg:order-2">
                
                {/* Browser Frame Top HUD Bar */}
                <div className="px-3.5 py-2 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">
                    {project.title.toLowerCase().replace(/\s+/g, '')}.app
                  </span>
                </div>

                {/* Image Showcase */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-48 sm:h-60 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 5. HOW I WORK (4 CONCISE STEPS) */}
      <section className="w-full">
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold">
            Zero-Surprise Delivery
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            How I Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A battle-tested 4-step framework guaranteeing zero surprise delays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl glass-card hologram-border space-y-1.5">
            <span className="font-mono text-xs font-bold text-slate-500">01</span>
            <h3 className="font-display font-bold text-base text-white">Discover</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Understand your idea, business objectives, feature roadmap, and timeline.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card hologram-border space-y-1.5">
            <span className="font-mono text-xs font-bold text-slate-500">02</span>
            <h3 className="font-display font-bold text-base text-white">Design</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plan the system architecture, database contracts, and intuitive UI user flows.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card hologram-border space-y-1.5">
            <span className="font-mono text-xs font-bold text-slate-500">03</span>
            <h3 className="font-display font-bold text-base text-white">Build</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Develop in weekly agile sprints with automated test suites and live staging demos.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl glass-card hologram-border space-y-1.5">
            <span className="font-mono text-xs font-bold text-slate-500">04</span>
            <h3 className="font-display font-bold text-base text-white">Launch</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deploy to production, transfer complete repository ownership, and provide warranty.
            </p>
          </div>
        </div>
      </section>

      {/* 6. EDUCATION & ACADEMIC BACKGROUND */}
      <section className="w-full space-y-5">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Education
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Solid computer science and engineering qualifications from leading institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* 1. MCA */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-2 flex flex-col justify-between hover:border-indigo-500 transition-all">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-[11px] font-mono text-indigo-400 uppercase tracking-wider">
                  2024 – 2026
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[11px]">
                  CGPA: 9.16 / 10
                </span>
              </div>
              <h3 className="font-display font-black text-sm sm:text-base text-white">
                Indira College of Engineering & Management
              </h3>
              <p className="text-xs text-slate-300">
                Master of Computer Applications (MCA) in Computer Applications
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-indigo-400" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>

          {/* 2. BCA */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-2 flex flex-col justify-between hover:border-cyan-500 transition-all">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  2021 – 2024
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[11px]">
                  CGPA: 9.21 / 10
                </span>
              </div>
              <h3 className="font-display font-black text-sm sm:text-base text-white">
                North Maharashtra University
              </h3>
              <p className="text-xs text-slate-300">
                Bachelor of Computer Applications (BCA) in Computer Applications
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-cyan-400" />
              <span>Maharashtra, India</span>
            </div>
          </div>

          {/* 3. HSC */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-2 flex flex-col justify-between hover:border-purple-500 transition-all">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                  2019 – 2021
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[11px]">
                  Percentage: 84.40%
                </span>
              </div>
              <h3 className="font-display font-black text-sm sm:text-base text-white">
                Maharashtra State Board
              </h3>
              <p className="text-xs text-slate-300">
                Higher Secondary Certificate (HSC)
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-purple-400" />
              <span>Maharashtra, India</span>
            </div>
          </div>

          {/* 4. SSC */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-2 flex flex-col justify-between hover:border-emerald-500 transition-all">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  June 2018 – Mar 2019
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-bold text-[11px]">
                  Percentage: 76.60%
                </span>
              </div>
              <h3 className="font-display font-black text-sm sm:text-base text-white">
                NMV School, Chunchale
              </h3>
              <p className="text-xs text-slate-300">
                Secondary School Certificate (SSC) in Secondary Education
              </p>
            </div>
            <div className="pt-2 border-t border-white/5 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-emerald-400" />
              <span>Maharashtra, India</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. ABOUT BHUSHAN */}
      <section className="w-full">
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card hologram-border grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-8 space-y-3 order-2 lg:order-1">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400">
              The Developer Behind the Products
            </span>
            <h2 className="font-display font-black text-xl sm:text-3xl text-white">
              Hi, I'm Bhushan Shimpi.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              I'm a Full Stack Software Engineer focused on building modern web applications, mobile products, and AI-powered software. Currently developing scalable web and mobile applications at QLOAX LLP and taking on select freelance projects for startups worldwide.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 font-mono">
              Based in Pune, India · MCA Graduate · Proficient in MERN Stack, React Native & AI Integrations.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-white transition-all text-slate-300"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-white transition-all text-slate-300"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <Link
                to="/about"
                className="text-xs font-bold text-indigo-400 hover:underline flex items-center gap-1"
              >
                <span>Read Full Background</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-2 order-1 lg:order-2">
            <div className="w-14 h-14 rounded-full overflow-hidden mx-auto shadow-lg border-2 border-indigo-500/40">
              <img src={profilePhoto} alt="Bhushan Shimpi" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-white">
                Bhushan Shimpi
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                Full-Stack & Mobile Engineer
              </div>
            </div>
            <div className="text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Projects</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. FINAL CONVERSION CTA */}
      <section className="w-full">
        <div className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-6 sm:p-10 text-center space-y-4 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-2.5">
            <h2 className="font-display font-black text-xl sm:text-3xl text-white tracking-tight">
              Have a Project Idea? <span className="text-gradient">Let's Build It.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Tell me what you're building and I'll help you turn the idea into a working product.
            </p>
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-md mx-auto">
              <Link
                to="/contact"
                className="w-full px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-1.5"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/917020710581?text=Hi%20Bhushan,%20I%20have%20a%20project%20idea%20to%20discuss."
                target="_blank"
                rel="noreferrer"
                className="w-full px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
