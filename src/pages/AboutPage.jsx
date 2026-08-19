import React from 'react';
import { personalInfo, experienceData, educationData, certificationsData, skillsData } from '../data/portfolioData';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import profilePhoto from '../assets/profile.png';
import { Briefcase, GraduationCap, Award, MapPin, CheckCircle2, Sparkles, Code2, Database, Smartphone, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';

export default function AboutPage() {
  const { playHover, playClick } = useSound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20 space-y-16 md:space-y-20">
      
      {/* 1. Header & Story (With Clean Round Profile Avatar) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
        <div className="lg:col-span-7 space-y-5">
          <AvailabilityBadge />
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight">
            Engineering & <br />
            <span className="text-gradient">Career Background</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2.5 p-3 rounded-2xl glass-card hologram-border">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-2xl glass-card hologram-border">
              <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>MCA (9.16 CGPA) · BCA (9.21 CGPA)</span>
            </div>
          </div>
        </div>

        {/* Clean Profile & Quick Facts Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="p-6 rounded-3xl glass-card hologram-border space-y-4 max-w-sm w-full shadow-2xl text-center">
            
            {/* Pure Round Photo */}
            <div className="w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 mx-auto shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/10">
                <img
                  src={profilePhoto}
                  alt="Bhushan Shimpi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display font-black text-lg text-slate-900 dark:text-white">
                Bhushan Shimpi
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                Software Engineer @ QLOAX LLP
              </p>
            </div>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                MERN Stack
              </span>
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                React Native
              </span>
              <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                AI & LLMs
              </span>
            </div>

            {/* Direct Connect */}
            <div className="flex items-center justify-center gap-3 pt-2 border-t border-slate-200/60 dark:border-white/5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-white transition-colors text-slate-700 dark:text-slate-300"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-indigo-600 dark:hover:text-white transition-colors text-slate-700 dark:text-slate-300"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Full Technical Radar */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Stack Radar
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Core Competencies & Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((cat, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-3xl glass-card hologram-border p-6 space-y-4 hover:border-indigo-500 transition-all shadow-lg">
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-500" />
                {cat.name}
              </h3>
              <div className="space-y-2">
                {cat.skills.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-100 dark:border-slate-800/60">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{s.name}</span>
                    <span className="font-mono text-[11px] font-bold text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full bg-indigo-500/10">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Career & Experience Timeline */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            Engineering Career
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Roles & Impact
          </h2>
        </div>

        <div className="space-y-5 max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-3xl glass-card hologram-border p-6 sm:p-8 space-y-3.5 hover:border-indigo-500 transition-all shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold font-mono">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold self-start">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education & Academic Excellence */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Degrees & Qualifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-3xl glass-card hologram-border p-6 space-y-2.5 hover:border-indigo-500 transition-all shadow-lg flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-bold">
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
              </div>
              <div className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-1">
                {edu.grade}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Verified Certifications */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5" />
            Verified HackerRank Credentials
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certificationsData.map((cert, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-2xl glass-card hologram-border p-5 space-y-2 hover:border-amber-500 transition-all shadow-md">
              <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                {cert.name}
              </div>
              <div className="text-xs text-slate-500 font-mono">{cert.issuer}</div>
              <div className="flex flex-wrap gap-1 pt-1">
                {cert.skills.map((s, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono">
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
