import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, Layers, Zap } from 'lucide-react';
import { freelanceServices, freelanceFaqs } from '../data/servicesData';
import ProcessRoadmap from '../components/freelance/ProcessRoadmap';
import AvailabilityBadge from '../components/freelance/AvailabilityBadge';
import { useSound } from '../context/SoundContext';

const icons = {
  Globe: Globe,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

export default function ServicesPage() {
  const { playHover, playClick } = useSound();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 space-y-12 sm:space-y-16 overflow-x-hidden">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-3 pt-2 sm:pt-4">
        <AvailabilityBadge />
        <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] break-words">
          Engineering & <br className="hidden sm:inline" />
          <span className="text-gradient">Development Services</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
          Sprint-based software engineering for founders and scaling teams. Full source code ownership, zero agency overhead, and 100% direct communication.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {freelanceServices.map((svc) => {
          const IconComp = icons[svc.icon] || Globe;
          return (
            <div
              key={svc.id}
              onMouseEnter={playHover}
              className="rounded-2xl sm:rounded-3xl glass-card hologram-border p-5 sm:p-7 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 group shadow-xl space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-indigo-500/10 text-indigo-400 font-bold">
                    <IconComp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono text-indigo-400 font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10">
                    ~{svc.deliveryTime}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-indigo-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase text-slate-400">Included Deliverables</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {svc.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/80 text-xs text-slate-300 space-y-0.5">
                  <span className="font-bold text-white">Ideal For: </span>
                  {svc.idealFor}
                </div>
              </div>

              <div className="pt-3.5 mt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-slate-400">
                  Full Code Handover
                </span>
                <Link
                  to="/contact"
                  onClick={playClick}
                  className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all flex items-center gap-1 shadow-md shadow-indigo-500/20"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Process Roadmap */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Collaboration Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            How we take your product from requirements to production launch.
          </p>
        </div>
        <ProcessRoadmap />
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-xs font-mono font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Everything You Need To Know
          </h2>
        </div>

        <div className="space-y-3">
          {freelanceFaqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl glass-card p-4 sm:p-5 space-y-1.5">
              <h4 className="font-display font-bold text-xs sm:text-sm text-white">
                {faq.q}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
