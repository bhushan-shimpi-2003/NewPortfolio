import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Sparkles, CheckCircle2, Globe, Smartphone, Server, ShieldCheck, 
  Code2, Terminal, Cpu, Zap, ExternalLink, ChevronRight, Layers, Database, Lock, Clock, Phone
} from 'lucide-react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroScene3D from '../components/3d/HeroScene3D';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import ProjectEstimator from '../components/freelance/ProjectEstimator';
import ProcessRoadmap from '../components/freelance/ProcessRoadmap';
import { personalInfo, projectsData } from '../data/portfolioData';
import { freelanceServices } from '../data/servicesData';
import { useSound } from '../context/SoundContext';

export default function HomePage() {
  const { playClick, playHover } = useSound();
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [puneTime, setPuneTime] = useState('');
  const [aiPromptTest, setAiPromptTest] = useState('Calculate ATS score for Senior MERN Developer');
  const [aiOutput, setAiOutput] = useState('✨ ATS Match: 98% • Key Keywords Detected: React.js, React Native, Node.js, Supabase, PostgreSQL, AI APIs.');
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      setPuneTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTestAi = (e) => {
    e.preventDefault();
    playClick();
    setIsAiGenerating(true);
    setTimeout(() => {
      setIsAiGenerating(false);
      setAiOutput(`✨ AI Analysis Complete: Architected custom pipeline for prompt "${aiPromptTest.slice(0, 30)}..." → Token efficiency 99.4%, response latency 0.8s.`);
    }, 600);
  };

  const currentProject = projectsData[activeProjectTab] || projectsData[0];

  return (
    <div className="space-y-24 md:space-y-36 pb-20 pt-20 md:pt-24 cyber-grid glow-mesh">
      
      {/* 1. HERO SECTION: SPATIAL 3D STUDIO */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Text & CTA (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Top Bar: Availability + Location Time */}
            <div className="flex flex-wrap items-center gap-3">
              <AvailabilityBadge text="🟢 Available for Indian & Global Freelance Projects" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-mono text-slate-600 dark:text-slate-400">
                <Clock className="w-3 h-3 text-brand-500" />
                <span>Pune (IST): <strong className="text-slate-900 dark:text-white">{puneTime || 'IST'}</strong></span>
              </div>
            </div>

            {/* Massive Heading */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.08]">
              Engineering High-ROI <br />
              <span className="text-gradient">Web, Mobile & AI</span> <br />
              Apps For Indian Startups.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Hi, I'm <span className="font-bold text-slate-900 dark:text-white">Bhushan Shimpi</span>, Full-Stack Software Engineer & Freelancer based in Pune, India. I build production MERN SaaS portals, React Native mobile apps, and custom AI engines with fast delivery cycles and transparent milestone pricing in INR (₹).
            </p>

            {/* Value Points Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong>100% Code Ownership</strong> & Repository Transfer</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong>MERN + React Native</strong> Unified Backend</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong>Weekly Live Staging Demos</strong> on Vercel</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span><strong>30-Day Launch Warranty</strong> & Support</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="https://wa.me/919579938131?text=Hi%20Bhushan,%20I%20am%20looking%20to%20build%20a%20web/mobile%20project."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                to="/services"
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyanBrand-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>Estimate Scope (₹ INR)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
              {personalInfo.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-2xl glass-card text-left">
                  <div className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right 3D Spatial Canvas (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full relative rounded-3xl overflow-hidden glass-card hologram-border p-2 sm:p-4 shadow-2xl">
              <HeroScene3D />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5 bg-slate-900/70 text-cyan-300 px-2.5 py-1 rounded-full backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-cyan-400" /> 3D Interactive World
                </span>
                <span className="bg-slate-900/70 text-slate-300 px-2.5 py-1 rounded-full backdrop-blur-md">
                  WebGL 60 FPS
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. ASYMMETRICAL CAPABILITIES BENTO MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold">
            <Layers className="w-3.5 h-3.5" />
            End-To-End Engineering Services
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Built For High-Growth Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            From Figma wireframes to production cloud deployment, I build modern web and mobile apps with clean code and zero agency fluff.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento 1: Full-Stack Web & SaaS (8 Cols) */}
          <div className="md:col-span-8 rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between hover:border-brand-500 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-brand-600 dark:text-brand-400 font-bold px-3 py-1 rounded-full bg-brand-500/10">
                  Starting from ₹35,000
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  Scalable Web Applications & SaaS Engines
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Blazing-fast customer dashboards, multi-tenant billing, REST/GraphQL micro-endpoints, and secure session management.
                </p>
              </div>

              {/* Simulated Code Terminal Box */}
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-[11px] text-cyan-300 space-y-1 shadow-inner border border-slate-800">
                <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 text-slate-500 text-[10px]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="ml-2 text-slate-400">api/v1/auth/session.ts</span>
                </div>
                <p className="text-slate-400">// Unified Node.js + Supabase Postgres Auth</p>
                <p className="text-emerald-400">✓ POST /api/v1/auth/login → 200 OK (JWT 256-bit signed)</p>
                <p className="text-indigo-400">✓ Supabase Row Level Security (RLS) policies verified</p>
                <p className="text-cyan-400">✓ Redis rate-limiting: 100 req/min/IP enforced</p>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">Includes Razorpay/Cashfree + Vercel CI/CD</span>
              <Link to="/services" className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:underline">
                View Pricing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento 2: Cross-Platform Mobile (4 Cols) */}
          <div className="md:col-span-4 rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500 transition-all group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold inline-block">
                  <Smartphone className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400 font-bold px-3 py-1 rounded-full bg-cyan-500/10">
                  From ₹40,000
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                React Native Android & iOS Apps
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                60 FPS native animations, offline caching, push alerts, and single-codebase velocity with Expo EAS.
              </p>
              
              <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-500">Cross-Platform</span>
                  <span className="text-emerald-500 font-bold">100% Code Reuse</span>
                </div>
                <div className="flex items-center justify-between font-mono">
                  <span className="text-slate-500">Store Ready</span>
                  <span className="text-brand-500 font-bold">Play Store + iOS</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link to="/services" className="text-xs font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1 hover:underline">
                Mobile Packages <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento 3: AI & Smart LLM Pipelines (6 Cols) */}
          <div className="md:col-span-6 rounded-3xl glass-card p-6 sm:p-8 space-y-4 hover:border-purple-500 transition-all">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">
                From ₹25,000
              </span>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                AI Integration & Automated Workflows
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Custom prompt pipelines, streaming evaluations, semantic search, and automated structured data parsers.
              </p>
            </div>

            {/* Interactive AI Demo Box */}
            <form onSubmit={handleTestAi} className="space-y-2 pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiPromptTest}
                  onChange={(e) => setAiPromptTest(e.target.value)}
                  placeholder="Enter a prompt to simulate AI parsing..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl glass-card text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  disabled={isAiGenerating}
                  className="px-4 py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition-all"
                >
                  {isAiGenerating ? 'Running...' : 'Test AI'}
                </button>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-[11px] font-mono text-purple-300">
                {aiOutput}
              </div>
            </form>
          </div>

          {/* Bento 4: Enterprise ERP & Portals (6 Cols) */}
          <div className="md:col-span-6 rounded-3xl glass-card p-6 sm:p-8 space-y-4 hover:border-emerald-500 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  From ₹50,000
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  Enterprise ERPs, School & Hospital Portals
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Built for Schools, Clinics, and Institutes with multi-role permissions (Admin, Staff, Student, Doctor), automated invoicing, and WhatsApp notifications.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-3 rounded-xl glass-card">
                  <div className="font-bold text-slate-900 dark:text-white">4 Roles</div>
                  <div className="text-[10px] text-slate-500 font-mono">RBAC Auth</div>
                </div>
                <div className="p-3 rounded-xl glass-card">
                  <div className="font-bold text-slate-900 dark:text-white">100%</div>
                  <div className="text-[10px] text-slate-500 font-mono">Digital Logs</div>
                </div>
                <div className="p-3 rounded-xl glass-card">
                  <div className="font-bold text-slate-900 dark:text-white">Playwright</div>
                  <div className="text-[10px] text-slate-500 font-mono">E2E Tested</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link to="/projects" className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 hover:underline">
                Explore Enterprise ERP Case Studies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE CASE STUDY SHOWROOM DECK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold">
              Case Study Showroom
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Proven Software in Production
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Switch through live platforms to inspect architecture, problems solved, and measurable impact.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1 shrink-0"
          >
            All Case Studies ({projectsData.length}) <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projectsData.map((p, idx) => (
            <button
              key={p.slug}
              onClick={() => { setActiveProjectTab(idx); playClick(); }}
              onMouseEnter={playHover}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeProjectTab === idx
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 ring-2 ring-brand-500/30'
                  : 'glass-card text-slate-700 dark:text-slate-300 hover:border-brand-500'
              }`}
            >
              <span>{p.title}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20 text-white/90 font-mono">
                {p.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Active Project Stage Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl glass-card p-6 sm:p-10 border border-brand-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Project Details & Metrics (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                  {currentProject.category}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
                  {currentProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {currentProject.overview}
                </p>
              </div>

              {/* Problem / Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-slate-700 dark:text-slate-300">
                  <div className="font-bold text-rose-600 dark:text-rose-400 mb-1">Challenge</div>
                  <p className="text-[11px] leading-relaxed">{currentProject.problem}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-slate-700 dark:text-slate-300">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">Solution</div>
                  <p className="text-[11px] leading-relaxed">{currentProject.solution}</p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {currentProject.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-xl glass-card text-center">
                    <div className="font-display font-bold text-base text-brand-600 dark:text-brand-400">{m.value}</div>
                    <div className="text-[10px] text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentProject.techStack.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to={`/projects/${currentProject.slug}`}
                  onClick={playClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyanBrand-500 text-white font-bold text-xs shadow-md shadow-brand-500/20 hover:scale-105 transition-all"
                >
                  <span>Read Full Case Study & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Rich Image Showcase (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden glass-card shadow-2xl relative group">
              <img
                src={currentProject.heroImage}
                alt={currentProject.title}
                className="w-full h-72 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-mono bg-brand-600/80 px-3 py-1 rounded-full backdrop-blur-md">
                  {currentProject.badge}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </section>

      {/* 4. INTERACTIVE PROJECT ESTIMATOR HUD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator />
      </section>

      {/* 5. PROCESS ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
            Zero-Surprise Delivery
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            How We Will Work Together
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            A battle-tested 4-step framework guaranteeing zero surprise delays or hidden costs.
          </p>
        </div>

        <ProcessRoadmap />
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-brand-700 via-indigo-700 to-cyanBrand-700 p-8 sm:p-14 text-white text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight">
              Ready to Turn Your Idea Into a Scalable App?
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Let's build your Web SaaS, React Native mobile app, or AI tool. Connect on WhatsApp or book a discovery call.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/919579938131?text=Hi%20Bhushan,%20let%27s%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Chat on WhatsApp (+91 95799 38131)</span>
              </a>

              <Link
                to="/services"
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-8 py-4 rounded-2xl bg-brand-900/50 border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-brand-900/80 transition-all"
              >
                Calculate Project Cost (₹ INR)
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
