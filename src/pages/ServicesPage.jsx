import React from 'react';
import { Globe, Smartphone, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, HelpCircle, Layers, Zap } from 'lucide-react';
import { freelanceServices, freelanceFaqs } from '../data/servicesData';
import ProjectEstimator from '../components/freelance/ProjectEstimator';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20 space-y-24 cosmic-bg">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-6">
        <AvailabilityBadge />
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight">
          Freelance Tracks & <span className="text-gradient">Pricing Specs</span>
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Transparent, sprint-based software engineering for founders and scaling teams. Full source code ownership, zero agency overhead, 100% direct communication.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {freelanceServices.map((svc) => {
          const IconComp = icons[svc.icon] || Globe;
          return (
            <div
              key={svc.id}
              onMouseEnter={playHover}
              className="rounded-3xl glass-card hologram-border p-6 sm:p-8 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 group shadow-xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Starting from</div>
                    <div className="font-display font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">{svc.startingRate}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[11px] font-mono font-bold uppercase text-slate-400">Included Deliverables</p>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {svc.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white">Ideal For: </span>
                  {svc.idealFor}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Cadence: ~{svc.deliveryTime}
                </span>
                <a
                  href="#estimator"
                  onClick={playClick}
                  className="px-4 py-2 rounded-xl bg-brand-500/15 hover:bg-brand-500 hover:text-white text-brand-600 dark:text-brand-400 font-bold text-xs transition-all flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5" /> Configure Scope
                </a>
              </div>
            </div>
          );
        })}
      </section>

      {/* Interactive Estimator */}
      <section id="estimator" className="scroll-mt-28">
        <ProjectEstimator />
      </section>

      {/* Process Roadmap */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Client Collaboration Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            How we take your product from requirements to production launch.
          </p>
        </div>
        <ProcessRoadmap />
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-xs font-mono font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-brand-500" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Everything You Need To Know
          </h2>
        </div>

        <div className="space-y-4">
          {freelanceFaqs.map((faq, idx) => (
            <div key={idx} className="rounded-2xl glass-card p-6 space-y-2">
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
