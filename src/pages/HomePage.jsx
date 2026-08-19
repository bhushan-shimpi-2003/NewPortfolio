import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Globe, ExternalLink, ChevronRight } from 'lucide-react';
import HeroScene3D from '../components/3d/HeroScene3D';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import ProjectEstimator from '../components/freelance/ProjectEstimator';
import ProcessRoadmap from '../components/freelance/ProcessRoadmap';
import { personalInfo, projectsData } from '../data/portfolioData';
import { freelanceServices } from '../data/servicesData';
import { useSound } from '../context/SoundContext';

export default function HomePage() {
  const { playClick, playHover } = useSound();
  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="space-y-20 md:space-y-28 pb-16 pt-24 md:pt-28">
      
      {/* 1. CINEMATIC 3D HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div>
              <AvailabilityBadge />
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Building High-ROI <br />
              <span className="text-gradient">Web, Mobile & AI</span> Applications
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Hi, I'm <span className="font-semibold text-slate-900 dark:text-white">Bhushan Shimpi</span>. I engineer production-grade <span className="font-semibold text-brand-600 dark:text-brand-400">MERN Stack Web Apps</span>, <span className="font-semibold text-cyan-600 dark:text-cyan-400">React Native Mobile Apps</span>, and <span className="font-semibold text-purple-600 dark:text-purple-400">AI-Powered Systems</span> for founders, startups, and high-growth businesses.
            </p>

            {/* Quick Guarantees Pill List */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 100% Code Ownership</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Weekly Agile Demos</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 30-Day Launch Warranty</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/services"
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-cyanBrand-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>Explore Services & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-6 py-3.5 rounded-2xl glass-card text-slate-800 dark:text-white font-semibold text-xs sm:text-sm hover:border-brand-500 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>View Case Studies</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            </div>

            {/* Client Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              {personalInfo.metrics.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-display font-bold text-lg md:text-xl text-slate-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 3D Interactive Canvas (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="w-full h-full relative rounded-3xl overflow-hidden glass-card p-4 shadow-2xl border border-brand-500/30">
              <HeroScene3D />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-cyan-300 text-[10px] font-mono backdrop-blur-md">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  Interactive 3D Quantum Core • Drag / Inspect
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. FREELANCE SERVICES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">
            Services & Value Proposition
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white">
            What I Deliver For Your Business
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            From initial wireframes to production cloud deployment, I handle end-to-end development with zero bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {freelanceServices.map((svc) => (
            <div
              key={svc.id}
              onMouseEnter={playHover}
              className="rounded-3xl glass-card p-6 sm:p-8 flex flex-col justify-between hover:border-brand-500/60 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold px-2.5 py-1 rounded-full bg-brand-500/10">
                    From {svc.startingRate}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-mono font-bold uppercase text-slate-400">Deliverables</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {svc.deliverables.slice(0, 4).map((d, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">
                  Delivery: ~{svc.deliveryTime}
                </span>
                <Link
                  to="/services"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="text-xs font-bold text-brand-600 dark:text-brand-400 flex items-center gap-1 hover:underline"
                >
                  Configure Scope <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED CLIENT CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
              Proven Production Work
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white">
              Featured Client Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Real platforms built with MERN, React Native, Supabase, and AI APIs with deep focus on scalability.
            </p>
          </div>
          <Link
            to="/projects"
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline shrink-0"
          >
            View All Projects ({projectsData.length}) <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              onMouseEnter={playHover}
              className="rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:border-brand-500/60 transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[11px] font-mono backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/projects/${project.slug}`}
                  onClick={playClick}
                  className="w-full py-2.5 rounded-xl glass-card text-center text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-brand-500 hover:text-brand-600 block transition-all"
                >
                  Read Full Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE PROJECT ESTIMATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectEstimator />
      </section>

      {/* 5. PROCESS ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold">
            Predictable Delivery
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
        <div className="rounded-3xl bg-gradient-to-tr from-brand-700 via-brand-600 to-cyanBrand-600 p-8 sm:p-12 text-white text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight">
              Ready to Turn Your Idea Into a Scalable App?
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
              Let's build your Web SaaS, React Native mobile app, or AI tool. Book a free 30-minute discovery call or send over your project brief.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Schedule Free Discovery Call
              </Link>
              <Link
                to="/services"
                onMouseEnter={playHover}
                onClick={playClick}
                className="px-6 py-3.5 rounded-2xl bg-brand-900/40 border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-brand-900/60 transition-all"
              >
                Calculate Project Cost
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
