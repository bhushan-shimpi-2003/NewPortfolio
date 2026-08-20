import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ArrowLeft, CheckCircle2, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-32 text-center space-y-4">
        <h2 className="font-display font-bold text-2xl text-white">Case Study Not Found</h2>
        <p className="text-sm text-slate-400">The requested project case study could not be loaded.</p>
        <Link to="/projects" className="inline-flex px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-8 sm:space-y-10 overflow-x-hidden">
      
      {/* Top Bar: Back button + Live Actions */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => { playClick(); navigate('/projects'); }}
          onMouseEnter={playHover}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </button>

        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/20 hover:scale-105 transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="p-2 rounded-xl glass-card hover:border-indigo-500 text-slate-300 hover:text-white transition-all"
              title="GitHub Repo"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Hero Banner */}
      <div className="rounded-2xl sm:rounded-3xl glass-card overflow-hidden border border-indigo-500/30">
        <div className="relative h-60 sm:h-80 md:h-96 w-full">
          <img
            src={project.heroImage}
            alt={project.title}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover bg-slate-900"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end p-5 sm:p-8">
            <div className="space-y-1.5 text-white">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-[11px] font-mono">
                {project.badge}
              </span>
              <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {project.metrics.map((m, idx) => (
          <div key={idx} className="rounded-2xl glass-card p-4 sm:p-5 text-center">
            <div className="font-display font-bold text-xl sm:text-2xl text-indigo-400">
              {m.value}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Overview & Problem vs Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        
        {/* The Problem */}
        <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 space-y-2 border-l-4 border-l-rose-500">
          <h3 className="font-display font-bold text-base sm:text-lg text-white">
            The Business Challenge
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* The Solution */}
        <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 space-y-2 border-l-4 border-l-emerald-500">
          <h3 className="font-display font-bold text-base sm:text-lg text-white">
            The Engineering Solution
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </div>

      </div>

      {/* System Architecture */}
      <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 space-y-3.5">
        <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-400" />
          System Architecture & Technical Stack
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
          {project.architecture.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-indigo-500/10 text-indigo-400 font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-7 space-y-3.5">
        <h3 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Key Features & Implementation Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
          {project.features.map((feat, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-800/60 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-6 sm:p-8 text-white text-center space-y-3.5">
        <h3 className="font-display font-bold text-xl sm:text-2xl">Want a Product Like This Built?</h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          I can architect and deploy a custom solution tailored to your exact business workflows.
        </p>
        <div className="pt-1 flex flex-wrap justify-center gap-2.5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all inline-flex items-center gap-1.5"
            >
              <span>Explore Live Product</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <Link
            to="/contact"
            onMouseEnter={playHover}
            onClick={playClick}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all inline-block"
          >
            Start Your Project Discovery
          </Link>
        </div>
      </div>

    </div>
  );
}
