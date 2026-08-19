import React from 'react';
import { personalInfo, experienceData, educationData, certificationsData, skillsData } from '../data/portfolioData';
import TechOrbit3D from '../components/3d/TechOrbit3D';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import { Briefcase, GraduationCap, Award, MapPin } from 'lucide-react';
import { useSound } from '../context/SoundContext';

export default function AboutPage() {
  const { playHover } = useSound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 space-y-24">
      
      {/* 1. Header & Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <AvailabilityBadge />
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
            About <span className="text-gradient">Bhushan Shimpi</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-500" />
              <span>MCA (9.16 CGPA) • BCA (9.21 CGPA)</span>
            </div>
          </div>
        </div>

        {/* 3D Tech Orbit */}
        <div className="lg:col-span-5 rounded-3xl glass-card p-4 relative overflow-hidden border border-brand-500/30">
          <div className="text-center mb-1">
            <span className="text-[11px] font-mono text-brand-600 dark:text-brand-400 font-semibold">
              Interactive 3D Skill Constellation
            </span>
          </div>
          <TechOrbit3D />
        </div>
      </section>

      {/* 2. Full Technical Radar */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">
            Technical Stack Radar
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Core Competencies & Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((cat, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-3xl glass-card p-6 space-y-4 hover:border-brand-500 transition-all">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                {cat.name}
              </h3>
              <div className="space-y-2">
                {cat.skills.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{s.name}</span>
                    <span className="font-mono text-[11px] text-brand-600 dark:text-brand-400">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Career & Experience Timeline */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-cyan-500" />
            Professional Journey
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Experience & Roles
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-3xl glass-card p-6 sm:p-8 space-y-4 hover:border-brand-500 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold font-mono">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-mono self-start">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand-500 font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education & Academic Excellence */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-purple-500" />
            Academic Foundations
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Degrees & Qualifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-3xl glass-card p-6 space-y-3 hover:border-brand-500 transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[10px] font-mono font-bold">
                  {edu.badge}
                </span>
                <span className="text-xs text-slate-500 font-mono">{edu.period}</span>
              </div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                {edu.degree}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                {edu.institution}, {edu.location}
              </p>
              <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {edu.grade}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Verified Certifications */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            Industry Certifications
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Verified Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-2xl glass-card p-5 space-y-2 hover:border-amber-500 transition-all">
              <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                {cert.name}
              </div>
              <div className="text-xs text-slate-500 font-mono">{cert.issuer}</div>
              <div className="flex flex-wrap gap-1 pt-1">
                {cert.skills.map((s, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
