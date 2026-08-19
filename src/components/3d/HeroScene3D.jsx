import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Sparkles } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

function AnimatedCore({ isDark }) {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.2;
      coreRef.current.rotation.y = t * 0.3;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.3;
      ring2Ref.current.rotation.z = t * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = -t * 0.35;
      ring3Ref.current.rotation.x = t * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Distorted 3D Crystal Sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere ref={coreRef} args={[1.3, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color={isDark ? "#6366f1" : "#4f46e5"}
            emissive={isDark ? "#3730a3" : "#312e81"}
            emissiveIntensity={isDark ? 0.6 : 0.4}
            roughness={0.15}
            metalness={0.8}
            distort={0.4}
            speed={2}
          />
        </Sphere>
      </Float>

      {/* Orbiting Orbital Rings */}
      <Torus ref={ring1Ref} args={[2.2, 0.03, 16, 100]}>
        <meshStandardMaterial
          color={isDark ? "#22d3ee" : "#0891b2"}
          emissive={isDark ? "#06b6d4" : "#0e7490"}
          emissiveIntensity={0.8}
          wireframe={false}
        />
      </Torus>

      <Torus ref={ring2Ref} args={[2.7, 0.025, 16, 100]}>
        <meshStandardMaterial
          color={isDark ? "#a855f7" : "#7c3aed"}
          emissive={isDark ? "#9333ea" : "#6d28d9"}
          emissiveIntensity={0.6}
        />
      </Torus>

      <Torus ref={ring3Ref} args={[3.2, 0.02, 16, 100]}>
        <meshStandardMaterial
          color={isDark ? "#38bdf8" : "#2563eb"}
          emissive={isDark ? "#0ea5e9" : "#1d4ed8"}
          emissiveIntensity={0.5}
        />
      </Torus>

      {/* 3D Particle Starfield */}
      <Sparkles
        count={70}
        scale={6}
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
    <div className="w-full h-full min-h-[420px] md:min-h-[500px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.7 : 1.2} />
        <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.5 : 2} />
        <pointLight position={[-10, -10, -5]} color={isDark ? "#06b6d4" : "#4f46e5"} intensity={1.5} />
        <AnimatedCore isDark={isDark} />
      </Canvas>
    </div>
  );
}
