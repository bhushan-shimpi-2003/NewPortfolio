import React from 'react';
import { motion } from 'framer-motion';

export default function AvailabilityBadge({ text = "Available for Q3/Q4 Freelance Projects", size = "md" }) {
  return (
    <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
      size === "sm" ? "text-xs" : "text-xs md:text-sm"
    } bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-medium backdrop-blur-md`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span>{text}</span>
    </div>
  );
}
