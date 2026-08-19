import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Sparkles, Html } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

function FloatingToken({ position, label, color, isDark }) {
  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2} position={position}>
      <mesh>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isDark ? 0.8 : 0.4}
        />
      </mesh>
      <Html distanceFactor={8} center position={[0, 0.35, 0]}>
        <div className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-tight whitespace-nowrap shadow-xl border backdrop-blur-xl pointer-events-none select-none bg-white/80 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 border-slate-200/80 dark:border-indigo-500/30">
          {label}
        </div>
      </Html>
    </Float>
  );
}

function SceneContent({ isDark }) {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Smooth mouse-follow parallax
      groupRef.current.rotation.y = (mouse.x * 0.4) + (t * 0.1);
      groupRef.current.rotation.x = (-mouse.y * 0.3) + Math.sin(t * 0.2) * 0.05;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.35;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.3;
      ring2Ref.current.rotation.z = t * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Morphing Holographic Core */}
      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
        <Sphere args={[1.25, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color={isDark ? "#6366f1" : "#4f46e5"}
            emissive={isDark ? "#4338ca" : "#312e81"}
            emissiveIntensity={isDark ? 0.7 : 0.4}
            roughness={0.1}
            metalness={0.85}
            distort={0.45}
            speed={2.2}
          />
        </Sphere>
      </Float>

      {/* Cyber Gyroscope Rings */}
      <Torus ref={ring1Ref} args={[2.2, 0.035, 16, 100]}>
        <meshStandardMaterial
          color={isDark ? "#22d3ee" : "#0284c7"}
          emissive={isDark ? "#06b6d4" : "#0369a1"}
          emissiveIntensity={0.8}
        />
      </Torus>

      <Torus ref={ring2Ref} args={[2.7, 0.03, 16, 100]}>
        <meshStandardMaterial
          color={isDark ? "#ec4899" : "#d946ef"}
          emissive={isDark ? "#db2777" : "#c026d3"}
          emissiveIntensity={0.7}
        />
      </Torus>

      {/* Floating 3D Tech Ecosystem Tokens */}
      <FloatingToken position={[-2.4, 1.4, 0.5]} label="⚡ MERN Stack" color="#06b6d4" isDark={isDark} />
      <FloatingToken position={[2.5, 1.2, -0.4]} label="📱 React Native" color="#818cf8" isDark={isDark} />
      <FloatingToken position={[-2.2, -1.5, 0.3]} label="🤖 AI / LLM APIs" color="#ec4899" isDark={isDark} />
      <FloatingToken position={[2.3, -1.3, 0.4]} label="🗄️ Supabase Postgres" color="#10b981" isDark={isDark} />

      {/* 3D Particle Galaxy */}
      <Sparkles
        count={90}
        scale={7}
        size={3.5}
        speed={0.4}
        color={isDark ? "#38bdf8" : "#6366f1"}
      />
    </group>
  );
}

export default function HeroScene3D() {
  const { isDark } = useTheme();

  return (
    <div className="w-full h-full min-h-[480px] lg:min-h-[580px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.9 : 1.5} />
        <directionalLight position={[10, 10, 5]} intensity={isDark ? 2 : 2.5} />
        <pointLight position={[-10, -10, -5]} color={isDark ? "#06b6d4" : "#4f46e5"} intensity={2} />
        <pointLight position={[10, -5, 5]} color={isDark ? "#ec4899" : "#a855f7"} intensity={1.5} />
        <SceneContent isDark={isDark} />
      </Canvas>
    </div>
  );
}
