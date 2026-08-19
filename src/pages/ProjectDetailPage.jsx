import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ArrowLeft, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { useSound } from '../context/SoundContext';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center space-y-4">
        <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white">Case Study Not Found</h2>
        <p className="text-sm text-slate-500">The requested project case study could not be loaded.</p>
        <Link to="/projects" className="inline-flex px-4 py-2 rounded-xl bg-brand-600 text-white font-semibold text-xs">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 space-y-12">
      
      {/* Back button */}
      <button
        onClick={() => { playClick(); navigate('/projects'); }}
        onMouseEnter={playHover}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to All Projects
      </button>

      {/* Hero Banner */}
      <div className="rounded-3xl glass-card overflow-hidden border border-brand-500/30">
        <div className="relative h-72 sm:h-96 w-full">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6 sm:p-10">
            <div className="space-y-2 text-white">
              <span className="px-3 py-1 rounded-full bg-brand-600 text-xs font-mono">
                {project.badge}
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {project.metrics.map((m, idx) => (
          <div key={idx} className="rounded-2xl glass-card p-5 text-center">
            <div className="font-display font-bold text-2xl text-brand-600 dark:text-brand-400">
              {m.value}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Overview & Problem vs Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* The Problem */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-3 border-l-4 border-l-rose-500">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            The Business Challenge
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* The Solution */}
        <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-3 border-l-4 border-l-emerald-500">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            The Engineering Solution
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </div>

      </div>

      {/* System Architecture */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4">
        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-brand-500" />
          System Architecture & Technical Stack
        </h3>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {project.architecture.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4">
          {project.techStack.map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-xl text-xs font-mono bg-brand-500/10 text-brand-600 dark:text-brand-400 font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Key Capabilities */}
      <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4">
        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          Key Features & Implementation Highlights
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          {project.features.map((feat, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-slate-100/60 dark:bg-slate-800/60 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-cyanBrand-600 p-8 text-white text-center space-y-4">
        <h3 className="font-display font-bold text-2xl">Want an App Like This Built For Your Company?</h3>
        <p className="text-xs sm:text-sm text-indigo-100 max-w-xl mx-auto">
          I can architect and deploy a custom solution tailored to your exact workflows and tech stack.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            onMouseEnter={playHover}
            onClick={playClick}
            className="px-6 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all inline-block"
          >
            Start Your Project Discovery
          </Link>
        </div>
      </div>

    </div>
  );
}
