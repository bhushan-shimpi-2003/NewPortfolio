import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, TorusKnot, Sparkles } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

function QuantumCore({ isDark }) {
  const knotRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.35;
      knotRef.current.rotation.y = t * 0.45;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = -t * 0.3;
      ring1Ref.current.rotation.x = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.25;
      ring2Ref.current.rotation.z = t * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central 3D Torus Knot Core */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
        <TorusKnot ref={knotRef} args={[1.1, 0.32, 128, 32]} scale={1}>
          <MeshDistortMaterial
            color={isDark ? "#6366f1" : "#4f46e5"}
            emissive={isDark ? "#4338ca" : "#312e81"}
            emissiveIntensity={isDark ? 0.8 : 0.4}
            roughness={0.12}
            metalness={0.88}
            distort={0.25}
            speed={2}
          />
        </TorusKnot>
      </Float>

      {/* Outer Wireframe Sphere */}
      <Sphere args={[2.3, 24, 24]}>
        <meshStandardMaterial
          color={isDark ? "#22d3ee" : "#0284c7"}
          wireframe={true}
          transparent={true}
          opacity={isDark ? 0.25 : 0.15}
        />
      </Sphere>

      {/* Orbiting Gyroscope Rings */}
      <Torus ref={ring1Ref} args={[2.7, 0.03, 16, 100]}>
        <meshStandardMaterial
          color={isDark ? "#22d3ee" : "#06b6d4"}
          emissive={isDark ? "#0891b2" : "#0284c7"}
          emissiveIntensity={0.8}
        />
      </Torus>

      <Torus ref={ring2Ref} args={[3.2, 0.025, 16, 100]}>
        <meshStandardMaterial
          color={isDark ? "#a855f7" : "#7c3aed"}
          emissive={isDark ? "#9333ea" : "#6d28d9"}
          emissiveIntensity={0.6}
        />
      </Torus>

      {/* Particle field */}
      <Sparkles
        count={80}
        scale={6}
        size={3}
        speed={0.4}
        color={isDark ? "#38bdf8" : "#6366f1"}
      />
    </group>
  );
}

export default function HeroScene3D() {
  const { isDark } = useTheme();

  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[440px] relative pointer-events-auto flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.9 : 1.6} />
        <directionalLight position={[10, 10, 5]} intensity={isDark ? 2 : 2.8} />
        <pointLight position={[-10, -10, -5]} color={isDark ? "#06b6d4" : "#4f46e5"} intensity={2} />
        <pointLight position={[10, -5, 5]} color={isDark ? "#ec4899" : "#a855f7"} intensity={1.5} />
        <QuantumCore isDark={isDark} />
      </Canvas>
    </div>
  );
}
