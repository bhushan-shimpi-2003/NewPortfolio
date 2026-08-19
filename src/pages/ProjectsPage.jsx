import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { playHover, playClick } = useSound();

  const filters = ['All', 'AI & Full-Stack', 'Enterprise SaaS', 'EdTech', 'Healthcare'];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI & Full-Stack') return p.category.includes('AI');
    if (activeFilter === 'Enterprise SaaS') return p.category.includes('Enterprise');
    if (activeFilter === 'EdTech') return p.category.includes('EdTech');
    if (activeFilter === 'Healthcare') return p.category.includes('Healthcare');
    return true;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-8 sm:space-y-12 overflow-x-hidden">
      
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            onMouseEnter={playHover}
            className="rounded-2xl sm:rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:border-indigo-500 transition-all duration-300 group"
          >
            <div>
              {/* Project Image */}
              <div className="relative h-48 sm:h-60 overflow-hidden bg-slate-800">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900/90 text-cyan-300 text-[11px] font-mono backdrop-blur-md border border-white/10">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-5 sm:p-7 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-white/5">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display font-bold text-xs sm:text-sm text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-400">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 sm:p-7 pt-0 flex items-center gap-2.5">
              <Link
                to={`/projects/${project.slug}`}
                onClick={playClick}
                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs text-center shadow-md shadow-indigo-500/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                className="p-2.5 rounded-xl glass-card hover:border-indigo-500 text-slate-300 hover:text-white transition-all"
                title="GitHub Repo"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
