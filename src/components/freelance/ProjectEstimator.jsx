import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Calculator, Check, ArrowRight, Sparkles, Clock, DollarSign, ShieldCheck } from 'lucide-react';
import { estimatorOptions } from '../../data/servicesData';
import { useSound } from '../../context/SoundContext';

export default function ProjectEstimator() {
  const [selectedPlatform, setSelectedPlatform] = useState(estimatorOptions.platforms[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'dashboard']);
  const [selectedTimeline, setSelectedTimeline] = useState('standard');
  const navigate = useNavigate();
  const { playClick, playHover, playSuccess } = useSound();

  const toggleFeature = (fId) => {
    playClick();
    setSelectedFeatures(prev =>
      prev.includes(fId) ? prev.filter(id => id !== fId) : [...prev, fId]
    );
  };

  const currentPlatform = estimatorOptions.platforms.find(p => p.id === selectedPlatform);
  const currentTimeline = estimatorOptions.timelines.find(t => t.id === selectedTimeline);

  const featuresTotal = selectedFeatures.reduce((acc, fId) => {
    const feat = estimatorOptions.features.find(f => f.id === fId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const rawBase = (currentPlatform ? currentPlatform.basePrice : 1200) + featuresTotal;
  const estimatedPriceUSD = Math.round(rawBase * (currentTimeline ? currentTimeline.multiplier : 1));
  const estimatedPriceINR = Math.round(estimatedPriceUSD * 84);

  const estimatedWeeks = (currentPlatform ? currentPlatform.timeWeeks : 3) + Math.ceil(selectedFeatures.length * 0.4);

  const handleBookWithEstimate = () => {
    playSuccess();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    const featureNames = selectedFeatures
      .map(id => estimatorOptions.features.find(f => f.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const estimateData = {
      platform: currentPlatform?.name,
      features: featureNames,
      timeline: currentTimeline?.name,
      estimatedUSD: estimatedPriceUSD,
      estimatedINR: estimatedPriceINR,
      estimatedWeeks
    };

    navigate('/contact', { state: { estimate: estimateData } });
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">
          <Calculator className="w-3.5 h-3.5" />
          Interactive Project Scope & Budget Calculator
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-900 dark:text-white">
          Estimate Your Freelance Project Cost in Real-Time
        </h3>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
          Select your platform, essential modules, and preferred delivery schedule for an instant transparent estimate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Left 2 Cols: Selections */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Step 1: Platform */}
          <div className="space-y-3">
            <label className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">1</span>
              Select Platform
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {estimatorOptions.platforms.map((plat) => {
                const active = selectedPlatform === plat.id;
                return (
                  <button
                    key={plat.id}
                    onClick={() => { setSelectedPlatform(plat.id); playClick(); }}
                    onMouseEnter={playHover}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      active
                        ? 'border-brand-500 bg-brand-500/10 ring-2 ring-brand-500/20 text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold text-xs mb-1">
                      <span>{plat.name}</span>
                      {active && <Check className="w-4 h-4 text-brand-600 dark:text-brand-400" />}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      Base: ${plat.basePrice} • ~{plat.timeWeeks} wks
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Features */}
          <div className="space-y-3">
            <label className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">2</span>
              Select Key Modules & Integrations
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {estimatorOptions.features.map((feat) => {
                const active = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    onMouseEnter={playHover}
                    className={`p-3 rounded-2xl text-left border text-xs flex items-center justify-between transition-all ${
                      active
                        ? 'border-cyan-500 bg-cyan-500/10 ring-2 ring-cyan-500/20 text-slate-900 dark:text-white font-medium'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className="pr-2">{feat.name}</span>
                    <span className="font-mono text-[11px] text-slate-500 shrink-0">+${feat.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Timeline */}
          <div className="space-y-3">
            <label className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px]">3</span>
              Timeline Cadence
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {estimatorOptions.timelines.map((time) => {
                const active = selectedTimeline === time.id;
                return (
                  <button
                    key={time.id}
                    onClick={() => { setSelectedTimeline(time.id); playClick(); }}
                    onMouseEnter={playHover}
                    className={`p-3 rounded-xl text-center border text-xs transition-all ${
                      active
                        ? 'border-brand-500 bg-brand-500/10 font-bold text-brand-600 dark:text-brand-400'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                    }`}
                  >
                    <div>{time.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{time.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Col: Instant Live Summary Box */}
        <div className="lg:col-span-1 p-6 rounded-2xl bg-gradient-to-b from-brand-500/10 via-slate-100/50 to-transparent dark:from-brand-950/40 dark:via-slate-900/60 dark:to-transparent border border-brand-500/30 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase">
              Live Estimate
            </span>
            <Sparkles className="w-4 h-4 text-brand-500" />
          </div>

          <div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Estimated Investment</div>
            <div className="font-display font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight mt-1">
              ${estimatedPriceUSD.toLocaleString()}
            </div>
            <div className="text-xs text-brand-600 dark:text-brand-400 font-mono mt-0.5">
              ≈ ₹{estimatedPriceINR.toLocaleString()} INR
            </div>
          </div>

          <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-500" /> Estimated Timeline:</span>
              <span className="font-semibold font-mono">~{estimatedWeeks} Weeks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Code Ownership:</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Yours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-brand-500" /> Milestones:</span>
              <span className="font-semibold">30% / 40% / 30%</span>
            </div>
          </div>

          <button
            onClick={handleBookWithEstimate}
            onMouseEnter={playHover}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyanBrand-500 text-white font-bold text-xs shadow-lg shadow-brand-500/25 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Lock In Estimate & Inquire</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[10px] text-center text-slate-500 leading-tight">
            *Includes 30 days of free post-launch support and automated Playwright test verification.
          </p>
        </div>

      </div>
    </div>
  );
}
