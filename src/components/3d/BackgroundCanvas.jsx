import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

export default function BackgroundCanvas() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
        {/* Layer 1: Distant starfield */}
        <Sparkles
          count={isDark ? 120 : 60}
          scale={20}
          size={isDark ? 2 : 1.5}
          speed={0.2}
          opacity={isDark ? 0.7 : 0.3}
          color={isDark ? "#93c5fd" : "#6366f1"}
        />
        {/* Layer 2: Medium glowing cyan/indigo cosmic dust */}
        <Sparkles
          count={isDark ? 50 : 25}
          scale={14}
          size={isDark ? 3.5 : 2.5}
          speed={0.35}
          opacity={isDark ? 0.8 : 0.4}
          color={isDark ? "#38bdf8" : "#818cf8"}
        />
      </Canvas>
    </div>
  );
}
