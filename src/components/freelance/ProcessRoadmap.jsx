import React from 'react';
import { Compass, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';
import { clientProcessSteps } from '../../data/servicesData';
import { useSound } from '../../context/SoundContext';

const icons = {
  Compass: Compass,
  Palette: Palette,
  Code2: Code2,
  Rocket: Rocket,
};

export default function ProcessRoadmap() {
  const { playHover } = useSound();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {clientProcessSteps.map((step, idx) => {
        const IconComponent = icons[step.icon] || Compass;
        return (
          <div
            key={step.step}
            onMouseEnter={playHover}
            className="relative rounded-3xl glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 group"
          >
            {/* Step Number Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center font-display font-bold text-sm">
                {step.step}
              </div>
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-brand-500 transition-colors">
                <IconComponent className="w-5 h-5" />
              </div>
            </div>

            <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
              {step.title}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
