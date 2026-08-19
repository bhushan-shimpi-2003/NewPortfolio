import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

export default function BackgroundCanvas() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
        <Sparkles
          count={isDark ? 80 : 40}
          scale={15}
          size={isDark ? 2.5 : 2}
          speed={0.2}
          opacity={isDark ? 0.6 : 0.3}
          color={isDark ? "#818cf8" : "#6366f1"}
        />
      </Canvas>
    </div>
  );
}
