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
    budget: estimate ? `₹${estimate.estimatedINR.toLocaleString('en-IN')}` : '₹25,000 – ₹50,000',
    timeline: estimate ? estimate.timeline : 'Standard Delivery (2-4 weeks)',
    message: estimate
      ? `Hi Bhushan, I configured an estimate on your website for a ${estimate.platform}. Selected modules: ${estimate.features}. Estimated weeks: ~${estimate.estimatedWeeks} wks. Budget: ₹${estimate.estimatedINR.toLocaleString('en-IN')}.`
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

  const whatsappDirectMsg = encodeURIComponent(
    `Hi Bhushan! I would like to discuss a software project. My name is ${formData.name || 'a client'}.`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20 space-y-16 cosmic-bg">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <AvailabilityBadge text="🟢 Taking On New Projects in India & Globally" />
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight">
          Let's Build Something <span className="text-gradient">Extraordinary</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
          Have an upcoming web app, mobile app, or AI project requirement? Fill out the brief below or connect directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Col: Contact Info & Guarantees (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick WhatsApp Connect Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 sm:p-8 text-white space-y-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <FaWhatsapp className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg">Instant WhatsApp Chat</h4>
                <p className="text-xs text-emerald-100">+91 95799 38131 (Pune, India)</p>
              </div>
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed">
              Prefer chatting directly? Message me on WhatsApp for immediate discussion, project estimates, or quick questions.
            </p>
            <a
              href="https://wa.me/919579938131?text=Hi%20Bhushan,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-emerald-800 font-bold text-xs shadow hover:scale-105 transition-all"
            >
              <span>Open WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-3xl glass-card hologram-border p-6 sm:p-8 space-y-6 shadow-xl">
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
              Direct Channels
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
                  <div className="text-[10px] text-slate-500 font-mono">Email Directly</div>
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
                  <div className="text-[10px] text-slate-500 font-mono">Direct Phone</div>
                  <div className="font-semibold">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-mono">Based in</div>
                  <div className="font-semibold">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl glass-card hologram-border p-6 sm:p-8 space-y-4 shadow-xl">
            <h4 className="font-display font-bold text-base text-slate-900 dark:text-white">
              Freelance Guarantees
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Response within 4–6 hours guaranteed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mutual NDA signed prior to project kickoff</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Milestone payments via UPI, NEFT, or Razorpay</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Col: Project Brief Form (7 Cols) */}
        <div className="lg:col-span-7 rounded-3xl glass-card hologram-border p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                Project Inquiry Sent Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, {formData.name}! I will review your requirements and reply with a preliminary architecture proposal and milestone plan within 6 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); playClick(); }}
                className="px-6 py-3 rounded-xl bg-brand-600 text-white text-xs font-bold shadow"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {estimate && (
                <div className="p-3.5 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-xs text-brand-700 dark:text-brand-300 font-mono">
                  ✨ Pre-filled with your custom Project Calculator estimate (₹{estimate.estimatedINR.toLocaleString('en-IN')})
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Budget Range (₹ INR)</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white"
                  >
                    <option value="< ₹25,000">&lt; ₹25,000 (Small sprint / bug fixing)</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (MVP / AI feature / Landing App)</option>
                    <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Full-Stack Web SaaS / Mobile App)</option>
                    <option value="₹1,00,000+">₹1,00,000+ (Enterprise ERP / Multi-Platform Suite)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Project Requirements & Timeline *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your product requirements, required integrations (Razorpay, Supabase, AI, Auth), target launch date, or any existing Figma mockups..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-card text-xs focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-white resize-none"
                />
              </div>

              <button
                type="submit"
                onMouseEnter={playHover}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyanBrand-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-500/25 hover:opacity-95 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
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
