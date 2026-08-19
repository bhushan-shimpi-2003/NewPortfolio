import React from 'react';
import { personalInfo, experienceData, educationData, certificationsData, skillsData } from '../data/portfolioData';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import profilePhoto from '../assets/profile.png';
import { Briefcase, GraduationCap, Award, MapPin, CheckCircle2, Sparkles, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useSound } from '../context/SoundContext';

export default function AboutPage() {
  const { playHover, playClick } = useSound();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-12 sm:space-y-16 overflow-x-hidden">
      
      {/* 1. Header & Story (With Clean Round Profile Avatar) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-4">
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
          <AvailabilityBadge />
          <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] break-words">
            Engineering & <br className="hidden sm:inline" />
            <span className="text-gradient">Career Background</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-400">
            <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card hologram-border">
              <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl glass-card hologram-border">
              <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>MCA (9.16 CGPA) · BCA (9.21 CGPA)</span>
            </div>
          </div>
        </div>

        {/* Clean Profile & Quick Facts Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl glass-card hologram-border space-y-3.5 max-w-xs w-full shadow-2xl text-center">
            
            {/* Pure Round Photo */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-600 mx-auto shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white/10">
                <img
                  src={profilePhoto}
                  alt="Bhushan Shimpi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display font-black text-base sm:text-lg text-white">
                Bhushan Shimpi
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Software Engineer @ QLOAX LLP
              </p>
            </div>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-0.5">
              <span className="px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold bg-indigo-500/10 text-indigo-400">
                MERN Stack
              </span>
              <span className="px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400">
                React Native
              </span>
              <span className="px-2.5 py-0.5 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400">
                AI & LLMs
              </span>
            </div>

            {/* Direct Connect */}
            <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-white transition-colors text-slate-300"
                title="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-card hover:text-white transition-colors text-slate-300"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Full Technical Radar */}
      <section className="space-y-5">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Stack Radar
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Core Competencies & Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skillsData.categories.map((cat, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-5 space-y-3 hover:border-indigo-500 transition-all shadow-lg">
              <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                {cat.name}
              </h3>
              <div className="space-y-1.5">
                {cat.skills.map((s, i) => (
                  <div key={i} className="flex items-center justify-between text-xs pb-1 border-b border-white/5">
                    <span className="text-slate-300 font-medium">{s.name}</span>
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-indigo-400 px-2 py-0.5 rounded-full bg-indigo-500/10">{s.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Career & Experience Timeline */}
      <section className="space-y-5">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            Engineering Career
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Roles & Impact
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-5 sm:p-7 space-y-3 hover:border-indigo-500 transition-all shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div>
                  <h3 className="font-display font-extrabold text-base sm:text-xl text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-indigo-400 font-bold font-mono">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="px-3 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-mono font-semibold self-start">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Education & Academic Excellence */}
      <section className="space-y-5">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Degrees & Qualifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-5 space-y-2 hover:border-indigo-500 transition-all shadow-lg flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-mono font-bold">
                    {edu.badge}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{edu.period}</span>
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {edu.degree}
                </h3>
                <p className="text-xs text-slate-300">
                  {edu.institution}, {edu.location}
                </p>
              </div>
              <div className="font-mono text-xs font-bold text-emerald-400 pt-0.5">
                {edu.grade}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Verified Certifications */}
      <section className="space-y-5">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificationsData.map((cert, idx) => (
            <div key={idx} onMouseEnter={playHover} className="rounded-xl sm:rounded-2xl glass-card hologram-border p-4 space-y-1.5 hover:border-amber-500 transition-all shadow-md">
              <div className="font-display font-bold text-xs sm:text-sm text-white">
                {cert.name}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">{cert.issuer}</div>
              <div className="flex flex-wrap gap-1 pt-0.5">
                {cert.skills.map((s, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
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
