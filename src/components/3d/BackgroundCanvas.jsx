import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function InteractiveStarField() {
  const pointsRef = useRef();
  const mousePos = useRef({ x: 9999, y: 9999, active: false });

  // Listen to global pointer movement across the whole window
  useEffect(() => {
    const handlePointerMove = (e) => {
      // Normalize to [-1, 1] matching Three.js coordinate space
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current = { x, y, active: true };
    };

    const handlePointerLeave = () => {
      mousePos.current.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0]);
      }
    }, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  const count = 450; // Rich dense starfield

  // Initialize particle positions, original anchors, velocities, and colors
  const { positions, basePositions, velocities, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);

    // Color palette: Cyan (#38bdf8), Ice Blue (#93c5fd), Electric Indigo (#818cf8), White (#ffffff)
    const colorPalette = [
      new THREE.Color('#38bdf8'),
      new THREE.Color('#93c5fd'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#e0f2fe'),
      new THREE.Color('#ffffff'),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread stars across a wide frustum in 3D
      const x = (Math.random() - 0.5) * 32;
      const y = (Math.random() - 0.5) * 24;
      const z = (Math.random() - 0.5) * 16;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      base[i3] = x;
      base[i3 + 1] = y;
      base[i3 + 2] = z;

      vel[i3] = (Math.random() - 0.5) * 0.003;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.002;

      const chosenColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;

      sz[i] = Math.random() * 2.5 + 1.2;
    }

    return {
      positions: pos,
      basePositions: base,
      velocities: vel,
      colors: col,
      sizes: sz,
    };
  }, [count]);

  // Animation & Repulsion Physics Loop
  useFrame(({ viewport, clock }) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const posArr = posAttr.array;
    const time = clock.getElapsedTime();

    // Projected mouse coordinates in Three.js world space
    const targetX = (mousePos.current.x * viewport.width) / 2;
    const targetY = (mousePos.current.y * viewport.height) / 2;
    const mouseActive = mousePos.current.active;

    const repulsionRadius = 4.5;
    const repulsionStrength = 0.35;
    const returnSpeed = 0.04;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Base drifting animation
      basePositions[i3] += velocities[i3];
      basePositions[i3 + 1] += velocities[i3 + 1];
      basePositions[i3 + 2] += velocities[i3 + 2];

      // Screen boundary wrap-around
      if (basePositions[i3] > 16) basePositions[i3] = -16;
      if (basePositions[i3] < -16) basePositions[i3] = 16;
      if (basePositions[i3 + 1] > 12) basePositions[i3 + 1] = -12;
      if (basePositions[i3 + 1] < -12) basePositions[i3 + 1] = 12;

      // Gentle orbital shimmer
      const targetBaseX = basePositions[i3] + Math.sin(time * 0.4 + i) * 0.15;
      const targetBaseY = basePositions[i3 + 1] + Math.cos(time * 0.35 + i) * 0.15;
      const targetBaseZ = basePositions[i3 + 2];

      // Distance from star to mouse in 2D viewport projection
      const dx = posArr[i3] - targetX;
      const dy = posArr[i3 + 1] - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (mouseActive && dist < repulsionRadius && dist > 0.01) {
        // Repulsion force vector pushing away from mouse
        const force = (1 - dist / repulsionRadius) * repulsionStrength;
        const pushX = (dx / dist) * force;
        const pushY = (dy / dist) * force;

        posArr[i3] += pushX;
        posArr[i3 + 1] += pushY;
      } else {
        // Smoothly spring back to anchor position
        posArr[i3] += (targetBaseX - posArr[i3]) * returnSpeed;
        posArr[i3 + 1] += (targetBaseY - posArr[i3 + 1]) * returnSpeed;
      }

      posArr[i3 + 2] += (targetBaseZ - posArr[i3 + 2]) * returnSpeed;
    }

    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#030712]">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: false, antialias: false }}>
        {/* Deep pitch space background */}
        <color attach="background" args={["#030712"]} />
        <InteractiveStarField />
      </Canvas>
    </div>
  );
}
