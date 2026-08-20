import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { playHover, playClick } = useSound();

  const filters = ['All', 'AI & Full-Stack', 'Enterprise SaaS', 'EdTech', 'Healthcare', 'Client & Web Apps'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & Full-Stack') return p.category.includes('AI');
    if (activeFilter === 'Enterprise SaaS') return p.category.includes('Enterprise');
    if (activeFilter === 'EdTech') return p.category.includes('EdTech');
    if (activeFilter === 'Healthcare') return p.category.includes('Healthcare');
    if (activeFilter === 'Client & Web Apps') return p.category.includes('Client') || p.category.includes('Creative');
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-8 sm:space-y-10 overflow-x-hidden">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-semibold">
          Proven Engineering Portfolio
        </div>
        <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] break-words">
          Client Works & <span className="text-gradient">Case Studies</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-400">
          Explore real platforms built for performance, security, and scalability across Web, Mobile, and AI.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => { setActiveFilter(f); playClick(); }}
            onMouseEnter={playHover}
            className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === f
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'glass-card text-slate-300 hover:border-indigo-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 3-Column Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            onMouseEnter={playHover}
            className="rounded-2xl sm:rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group"
          >
            <div>
              {/* Project Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-slate-900"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 text-cyan-300 text-[10px] sm:text-[11px] font-mono backdrop-blur-md border border-white/10">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 space-y-3">
                <div className="space-y-0.5">
                  <div className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                    {project.category}
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-1.5 py-2 border-y border-white/5">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display font-bold text-[11px] sm:text-xs text-white line-clamp-1">{m.value}</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-400 line-clamp-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 pt-0 flex flex-wrap items-center gap-2">
              <Link
                to={`/projects/${project.slug}`}
                onClick={playClick}
                className="flex-1 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs text-center shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-1"
              >
                <span>Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClick}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white font-bold text-xs transition-all flex items-center gap-1 border border-white/10"
                  title="Explore Live Website"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                className="p-2 rounded-xl glass-card hover:border-indigo-500 text-slate-300 hover:text-white transition-all"
                title="GitHub Repo"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
