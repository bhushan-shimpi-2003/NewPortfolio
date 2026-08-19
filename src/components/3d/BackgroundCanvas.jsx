import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function StarfieldScene() {
  const groupRef = useRef();
  const scrollOffset = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      scrollOffset.current = window.scrollY;
    };

    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth scroll parallax movement on Y and Z axes
    const targetY = scrollOffset.current * 0.003;
    const targetRotX = mouse.current.y * 0.15;
    const targetRotY = mouse.current.x * 0.15;

    // Smooth interpolation (lerp)
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, -targetY % 15, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* Primary Crisp Cyan Stars */}
      <Sparkles
        count={120}
        scale={22}
        size={2.8}
        speed={0.4}
        opacity={0.9}
        color="#38bdf8"
      />

      {/* Deep Ice Blue Ambient Stars */}
      <Sparkles
        count={90}
        scale={26}
        size={2.0}
        speed={0.25}
        opacity={0.75}
        color="#93c5fd"
      />

      {/* Bright Distant White Twinkling Stars */}
      <Sparkles
        count={70}
        scale={18}
        size={2.2}
        speed={0.5}
        opacity={0.85}
        color="#ffffff"
      />
    </group>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030712]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: false, antialias: false }}>
        {/* Deep pitch space background */}
        <color attach="background" args={["#030712"]} />
        <StarfieldScene />
      </Canvas>
    </div>
  );
}
