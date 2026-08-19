import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

export default function BackgroundCanvas() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030712] dark:bg-[#030712]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: false }}>
        {/* Deep pitch space background color */}
        <color attach="background" args={[isDark ? "#030712" : "#f8fafc"]} />

        {/* Crisp Cyan & Ice Blue Stars (Matching screenshot) */}
        <Sparkles
          count={isDark ? 90 : 40}
          scale={18}
          size={isDark ? 2.5 : 2}
          speed={0.2}
          opacity={isDark ? 0.85 : 0.4}
          color={isDark ? "#38bdf8" : "#6366f1"}
        />

        {/* Faint Distant Star Specks */}
        <Sparkles
          count={isDark ? 60 : 25}
          scale={22}
          size={isDark ? 1.5 : 1.2}
          speed={0.15}
          opacity={isDark ? 0.6 : 0.3}
          color={isDark ? "#93c5fd" : "#818cf8"}
        />
      </Canvas>
    </div>
  );
}
