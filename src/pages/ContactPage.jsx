import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import { useSound } from '../context/SoundContext';

export default function ContactPage() {
  const location = useLocation();
  const estimate = location.state?.estimate;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    timeline: 'Standard Sprint (2-4 weeks)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { playClick, playHover, playSuccess } = useSound();

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccess();
    try {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } catch (err) {}
    setSubmitted(true);
  };

  const whatsappDirectMsg = encodeURIComponent(
    `Hi Bhushan! I would like to discuss a software project. My name is ${formData.name || 'a client'}.`
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-10 sm:space-y-14 overflow-x-hidden">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 pt-2 sm:pt-4">
        <AvailabilityBadge text="🟢 Available for Freelance Projects" />
        <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] break-words">
          Let's Build Something <br className="hidden sm:inline" />
          <span className="text-gradient">Extraordinary</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-300">
          Have an upcoming web app, mobile app, or AI project requirement? Fill out the brief below or connect directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        
        {/* Left Col: Contact Info & Guarantees (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* WhatsApp Direct Connect Card */}
          <div className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-5 sm:p-6 space-y-3.5 shadow-xl border-l-4 border-l-emerald-500">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  Fastest Response: WhatsApp
                </h3>
                <p className="text-xs text-slate-400">Direct technical chat with Bhushan</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Have a quick question or want to discuss timelines instantly? Ping me directly.
            </p>

            <a
              href={`https://wa.me/917020710581?text=${whatsappDirectMsg}`}
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>Message +91 70207 10581</span>
            </a>
          </div>

          {/* Direct Email & Location */}
          <div className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-5 sm:p-6 space-y-3 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">Direct Email</div>
                <a href={`mailto:${personalInfo.email}`} className="font-bold text-white hover:text-indigo-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-slate-400 text-[11px]">Primary Location</div>
                <div className="font-bold text-white">{personalInfo.location}</div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="rounded-2xl sm:rounded-3xl glass-card p-5 sm:p-6 space-y-2.5 text-xs text-slate-300">
            <div className="font-display font-bold text-sm text-white">
              Freelance Guarantees
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% Repository Transfer & Full Code Ownership</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Weekly Agile Demo Deployments & Sprint Logs</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct developer access — zero agency hierarchy</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Interactive Brief Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-6 sm:p-8 shadow-2xl space-y-5">
            {submitted ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Message Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you! I will review your requirements and reply within 24 hours. You can also message me on WhatsApp for urgent queries.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    Submit Project Brief
                  </h3>
                  <p className="text-xs text-slate-400">
                    Tell me about your product requirements and timeline.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1 text-left">
                    <label className="text-[11px] font-mono font-bold text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[11px] font-mono font-bold text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1 text-left">
                    <label className="text-[11px] font-mono font-bold text-slate-300">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label className="text-[11px] font-mono font-bold text-slate-300">Company / Project Name</label>
                    <input
                      type="text"
                      placeholder="e.g. NextGen SaaS"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[11px] font-mono font-bold text-slate-300">Expected Timeline</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Urgent MVP (1-2 weeks)">Urgent MVP (1-2 weeks)</option>
                    <option value="Standard Sprint (2-4 weeks)">Standard Sprint (2-4 weeks)</option>
                    <option value="Multi-Month Platform (2-3 months)">Multi-Month Platform (2-3 months)</option>
                    <option value="Ongoing Retainer / Consultation">Ongoing Retainer / Consultation</option>
                  </select>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[11px] font-mono font-bold text-slate-300">Project Overview & Requirements *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your product idea, key features, target users, or tech stack preference..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHover}
                  className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm text-center shadow-xl shadow-indigo-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Brief</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
