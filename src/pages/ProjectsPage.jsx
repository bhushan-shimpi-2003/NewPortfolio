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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">
          Proven Engineering Portfolio
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
          Client Works & <span className="text-gradient">Case Studies</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
          Explore real platforms built for performance, security, and scalability across Web, Mobile, and AI.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => { setActiveFilter(f); playClick(); }}
            onMouseEnter={playHover}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === f
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                : 'glass-card text-slate-700 dark:text-slate-300 hover:border-brand-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.slug}
            onMouseEnter={playHover}
            className="rounded-3xl glass-card overflow-hidden flex flex-col justify-between hover:border-brand-500 transition-all duration-300 hover:-translate-y-1.5 group"
          >
            <div>
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 text-cyan-300 text-xs font-mono backdrop-blur-md">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-200 dark:border-slate-800">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 sm:p-8 pt-0 flex items-center gap-3">
              <Link
                to={`/projects/${project.slug}`}
                onClick={playClick}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-cyanBrand-500 text-white font-bold text-xs text-center shadow-md shadow-brand-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                className="p-3 rounded-xl glass-card hover:border-brand-500 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-all"
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
