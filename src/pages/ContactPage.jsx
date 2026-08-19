import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import { useSound } from '../context/SoundContext';

export default function ContactPage() {
  const location = useLocation();
  const estimate = location.state?.estimate;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: estimate ? `$${estimate.estimatedUSD}` : '$1,500 - $3,000',
    timeline: estimate ? estimate.timeline : 'Standard (4-6 weeks)',
    message: estimate
      ? `Hi Bhushan, I am interested in building a ${estimate.platform}. Selected modules: ${estimate.features}. Estimated weeks: ~${estimate.estimatedWeeks}.`
      : '',
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-20 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <AvailabilityBadge />
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight">
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
          Have an upcoming project, MVP, or custom software requirement? Fill out the brief below or book a direct discovery call.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Col: Contact Info & Guarantees (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Direct Contact
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                onMouseEnter={playHover}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">Email Me</div>
                  <div className="font-semibold">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                onMouseEnter={playHover}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-brand-600 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">Call / WhatsApp</div>
                  <div className="font-semibold">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">Location</div>
                  <div className="font-semibold">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl glass-card p-6 sm:p-8 space-y-4">
            <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
              Freelance Client Promises
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Response within 12 hours guaranteed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>NDA signed prior to project kickoff if requested</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Transparent milestone-based pricing</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Col: Project Brief Form (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl glass-card p-6 sm:p-10 border border-brand-500/30">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                Brief Received Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Thank you for reaching out! I will review your requirements and reply with a preliminary architecture proposal within 12 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); playClick(); }}
                className="px-6 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-semibold"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {estimate && (
                <div className="p-3.5 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-xs text-brand-700 dark:text-brand-300 font-mono">
                  ✨ Pre-filled with your custom Project Calculator estimate (~{estimate.estimatedWeeks} wks)
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Company / Startup Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Tech"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Target Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  >
                    <option value="< $1,000">&lt; $1,000 (Small sprint / bug fixes)</option>
                    <option value="$1,000 - $2,500">$1,000 – $2,500 (MVP / Core feature)</option>
                    <option value="$2,500 - $5,000">$2,500 – $5,000 (Full-Stack Web + Mobile app)</option>
                    <option value="$5,000+">$5,000+ (Enterprise SaaS platform)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Project Details & Objectives *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your product, required integrations (Stripe, Auth, AI), target launch date, and any existing mockups..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={playHover}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyanBrand-500 text-white font-bold text-xs shadow-lg shadow-brand-500/25 hover:opacity-95 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <span>Send Project Brief</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
