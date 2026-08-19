import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Create a circular glowing star texture for realistic point sparkles
function getStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.15, 'rgba(224, 242, 254, 0.9)');
  gradient.addColorStop(0.4, 'rgba(56, 189, 248, 0.45)');
  gradient.addColorStop(0.8, 'rgba(56, 189, 248, 0.1)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function InteractiveStarsScene() {
  const pointsRef = useRef();
  const mouse = useRef({ x: 9999, y: 9999, active: false });
  const scrollY = useRef(0);
  const starTexture = useMemo(() => getStarTexture(), []);

  const count = 300; // Optimal density for realism

  // Initialize particle positions, anchors, velocities, and colors
  const { positions, basePositions, velocities, colors, scales } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sc = new Float32Array(count);

    const palette = [
      new THREE.Color('#38bdf8'), // Cyan
      new THREE.Color('#93c5fd'), // Ice Blue
      new THREE.Color('#818cf8'), // Indigo
      new THREE.Color('#e0f2fe'), // Pale Blue
      new THREE.Color('#ffffff'), // Pure White
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread across camera view frustum
      const x = (Math.random() - 0.5) * 36;
      const y = (Math.random() - 0.5) * 26;
      const z = (Math.random() - 0.5) * 14;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      base[i3] = x;
      base[i3 + 1] = y;
      base[i3 + 2] = z;

      vel[i3] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.002;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.001;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;

      sc[i] = Math.random() * 0.6 + 0.4;
    }

    return {
      positions: pos,
      basePositions: base,
      velocities: vel,
      colors: col,
      scales: sc,
    };
  }, [count]);

  // Window events for Mouse movement and Scrolling
  useEffect(() => {
    const handlePointerMove = (e) => {
      // Normalize to [-1, 1] screen coordinates
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current = { x, y, active: true };
    };

    const handlePointerLeave = () => {
      mouse.current.active = false;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0]);
      }
    }, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Frame Physics: Real-time Cursor Repulsion & Scroll Parallax
  useFrame(({ viewport, clock }) => {
    if (!pointsRef.current) return;

    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const posArr = posAttr.array;
    const time = clock.getElapsedTime();

    // Projected mouse coordinates in Three.js world space
    const targetMouseX = (mouse.current.x * viewport.width) / 2;
    const targetMouseY = (mouse.current.y * viewport.height) / 2;
    const mouseActive = mouse.current.active;

    // Scroll parallax translation
    const scrollParallaxY = -(scrollY.current * 0.004) % 24;

    const repulsionRadius = 4.2; // Distance threshold to trigger repulsion
    const repulsionStrength = 0.55; // Force pushing stars away
    const returnSpeed = 0.045; // Smooth spring dampening

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Base drifting animation
      basePositions[i3] += velocities[i3];
      basePositions[i3 + 1] += velocities[i3 + 1];

      // Screen boundary wrap-around
      if (basePositions[i3] > 18) basePositions[i3] = -18;
      if (basePositions[i3] < -18) basePositions[i3] = 18;
      if (basePositions[i3 + 1] > 13) basePositions[i3 + 1] = -13;
      if (basePositions[i3 + 1] < -13) basePositions[i3 + 1] = 13;

      // Calculate anchor point combining base drift, parallax scroll, and organic shimmer
      const anchorX = basePositions[i3] + Math.sin(time * 0.4 + i) * 0.12;
      const anchorY = basePositions[i3 + 1] + scrollParallaxY + Math.cos(time * 0.35 + i) * 0.12;
      const anchorZ = basePositions[i3 + 2];

      // Vector distance from star to cursor
      const dx = posArr[i3] - targetMouseX;
      const dy = posArr[i3 + 1] - targetMouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (mouseActive && dist < repulsionRadius && dist > 0.01) {
        // DIRECT REPULSION: Stars push outward away from the cursor!
        const force = Math.pow(1 - dist / repulsionRadius, 1.5) * repulsionStrength;
        const pushX = (dx / dist) * force;
        const pushY = (dy / dist) * force;

        posArr[i3] += pushX;
        posArr[i3 + 1] += pushY;
      } else {
        // Smoothly ease back to anchor position when cursor moves away
        posArr[i3] += (anchorX - posArr[i3]) * returnSpeed;
        posArr[i3 + 1] += (anchorY - posArr[i3 + 1]) * returnSpeed;
      }

      posArr[i3 + 2] += (anchorZ - posArr[i3 + 2]) * returnSpeed;
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
        map={starTexture}
        size={0.22}
        vertexColors
        transparent
        opacity={0.88}
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
        <InteractiveStarsScene />
      </Canvas>
    </div>
  );
}
