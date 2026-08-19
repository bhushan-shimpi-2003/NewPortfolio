import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Calculator, Check, ArrowRight, Sparkles, Clock, DollarSign, ShieldCheck, Zap, Layers } from 'lucide-react';
import { estimatorOptions } from '../../data/servicesData';
import { useSound } from '../../context/SoundContext';

export default function ProjectEstimator() {
  const [selectedPlatform, setSelectedPlatform] = useState(estimatorOptions.platforms[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'dashboard', 'payment']);
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

  const estimatedWeeks = (currentPlatform ? currentPlatform.timeWeeks : 3) + Math.ceil(selectedFeatures.length * 0.35);

  const handleBookWithEstimate = () => {
    playSuccess();
    try {
      confetti({
        particleCount: 90,
        spread: 75,
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
    <div className="w-full max-w-5xl mx-auto rounded-3xl glass-card hologram-border p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-bold">
          <Calculator className="w-3.5 h-3.5" />
          Interactive Project Scope & Budget Calculator
        </div>
        <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white">
          Instant Freelance Project Estimator
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Pick your platform, essential modules, and delivery cadence to get a live transparent estimate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Controls (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Step 1: Platform Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                Platform Type
              </label>
              <span className="text-[11px] text-slate-400 font-mono">Select target platform</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {estimatorOptions.platforms.map((plat) => {
                const active = selectedPlatform === plat.id;
                return (
                  <button
                    key={plat.id}
                    onClick={() => { setSelectedPlatform(plat.id); playClick(); }}
                    onMouseEnter={playHover}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      active
                        ? 'border-brand-500 bg-brand-500/15 ring-2 ring-brand-500/30 text-slate-900 dark:text-white shadow-md'
                        : 'glass-card text-slate-700 dark:text-slate-300 hover:border-brand-300'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-xs mb-1">
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

          {/* Step 2: Modules & Integrations */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                Essential Modules & Integrations
              </label>
              <span className="text-[11px] text-slate-400 font-mono">Select all needed</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {estimatorOptions.features.map((feat) => {
                const active = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    onMouseEnter={playHover}
                    className={`p-3.5 rounded-2xl text-left border text-xs flex items-center justify-between transition-all ${
                      active
                        ? 'border-cyan-500 bg-cyan-500/15 ring-2 ring-cyan-500/30 text-slate-900 dark:text-white font-bold'
                        : 'glass-card text-slate-600 dark:text-slate-400 hover:border-slate-400'
                    }`}
                  >
                    <span className="pr-2">{feat.name}</span>
                    <span className="font-mono text-[11px] text-brand-600 dark:text-brand-400 font-bold shrink-0">+${feat.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Timeline Cadence */}
          <div className="space-y-3">
            <label className="text-xs font-bold font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-bold">3</span>
              Sprint Cadence
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {estimatorOptions.timelines.map((time) => {
                const active = selectedTimeline === time.id;
                return (
                  <button
                    key={time.id}
                    onClick={() => { setSelectedTimeline(time.id); playClick(); }}
                    onMouseEnter={playHover}
                    className={`p-3 rounded-2xl text-center border text-xs transition-all ${
                      active
                        ? 'border-purple-500 bg-purple-500/15 font-bold text-purple-600 dark:text-purple-400 ring-2 ring-purple-500/30'
                        : 'glass-card text-slate-600 dark:text-slate-400 hover:border-slate-400'
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

        {/* Right Live Estimate Cockpit (4 Cols) */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-gradient-to-b from-brand-600/10 via-indigo-600/5 to-cyanBrand-500/10 border border-brand-500/40 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono font-bold text-brand-600 dark:text-brand-400 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Real-Time Quote
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
              Active
            </span>
          </div>

          <div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Total Estimated Investment</div>
            <div className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mt-1">
              ${estimatedPriceUSD.toLocaleString()}
            </div>
            <div className="text-xs text-brand-600 dark:text-brand-400 font-mono font-bold mt-1">
              ≈ ₹{estimatedPriceINR.toLocaleString()} INR
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 pt-3 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-brand-500" /> Estimated Timeline:</span>
              <span className="font-bold font-mono text-brand-600 dark:text-brand-400">~{estimatedWeeks} Weeks</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Source Code Rights:</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">100% Yours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-brand-500" /> Milestone Split:</span>
              <span className="font-bold font-mono">30% / 40% / 30%</span>
            </div>
          </div>

          <button
            onClick={handleBookWithEstimate}
            onMouseEnter={playHover}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-cyanBrand-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-brand-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Lock In Estimate & Inquire</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[10px] text-center text-slate-500 dark:text-slate-400 leading-tight">
            *Includes 30 days of free post-launch support and automated Playwright test verification.
          </p>
        </div>

      </div>
    </div>
  );
}
