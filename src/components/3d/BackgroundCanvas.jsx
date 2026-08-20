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
  gradient.addColorStop(0.15, 'rgba(224, 242, 254, 0.95)');
  gradient.addColorStop(0.4, 'rgba(56, 189, 248, 0.5)');
  gradient.addColorStop(0.8, 'rgba(56, 189, 248, 0.12)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// -------------------------------------------------------------
// TUTATA TARA / SHOOTING STARS (METEOR SHOWER) COMPONENT
// -------------------------------------------------------------
function ShootingStars() {
  const count = 4; // Simultaneous shooting star lanes
  const linesRef = useRef();

  // Trail line segments per shooting star (for smooth gradient fading)
  const segmentsPerStar = 12;
  const totalVertices = count * segmentsPerStar * 2;

  // State array for each shooting star
  const starsState = useMemo(() => {
    return Array.from({ length: count }, (_, idx) => ({
      active: false,
      timer: Math.random() * 2 + idx * 1.5, // Initial staggered delay
      progress: 0,
      duration: 0.8 + Math.random() * 0.6,
      startX: 0,
      startY: 0,
      startZ: -2 + Math.random() * 3,
      dx: -1.4 - Math.random() * 0.4, // Diagonal right-to-left
      dy: -0.9 - Math.random() * 0.5, // Downward streak
      length: 3.2 + Math.random() * 2.0,
      color: [
        [1.0, 1.0, 1.0], // Glowing white core
        [0.22, 0.74, 0.97], // Electric cyan
        [0.5, 0.55, 0.97]  // Neon indigo
      ][idx % 3]
    }));
  }, [count]);

  const { positions, colors } = useMemo(() => {
    return {
      positions: new Float32Array(totalVertices * 3),
      colors: new Float32Array(totalVertices * 3)
    };
  }, [totalVertices]);

  useFrame((_, delta) => {
    if (!linesRef.current) return;

    const posAttr = linesRef.current.geometry.attributes.position;
    const colAttr = linesRef.current.geometry.attributes.color;
    const posArr = posAttr.array;
    const colArr = colAttr.array;

    starsState.forEach((star, sIdx) => {
      const baseIdx = sIdx * segmentsPerStar * 2 * 3;

      if (!star.active) {
        star.timer -= delta;
        if (star.timer <= 0) {
          // Spawn shooting star high in the viewport
          star.active = true;
          star.progress = 0;
          star.duration = 0.75 + Math.random() * 0.55;
          star.startX = 6 + Math.random() * 14; // Right side
          star.startY = 6 + Math.random() * 10; // Top side
          star.startZ = -1 + Math.random() * 3;
          star.length = 3.5 + Math.random() * 2.2;
          star.dx = -1.5 - Math.random() * 0.5;
          star.dy = -1.0 - Math.random() * 0.5;
        } else {
          // Hide vertices when dormant
          for (let k = 0; k < segmentsPerStar * 2; k++) {
            const vIdx = baseIdx + k * 3;
            posArr[vIdx] = 9999;
            posArr[vIdx + 1] = 9999;
            posArr[vIdx + 2] = 9999;
            colArr[vIdx] = 0;
            colArr[vIdx + 1] = 0;
            colArr[vIdx + 2] = 0;
          }
          return;
        }
      }

      // Active shooting star movement
      star.progress += delta / star.duration;

      if (star.progress >= 1.0) {
        star.active = false;
        star.timer = 1.8 + Math.random() * 4.5; // Delay before next meteor
        for (let k = 0; k < segmentsPerStar * 2; k++) {
          const vIdx = baseIdx + k * 3;
          posArr[vIdx] = 9999;
          posArr[vIdx + 1] = 9999;
          posArr[vIdx + 2] = 9999;
          colArr[vIdx] = 0;
          colArr[vIdx + 1] = 0;
          colArr[vIdx + 2] = 0;
        }
        return;
      }

      // Smooth fade-in then fade-out curve (Bell curve)
      const p = star.progress;
      const alpha = Math.sin(p * Math.PI); // 0 -> 1 -> 0

      // Head position
      const headX = star.startX + star.dx * (p * 22);
      const headY = star.startY + star.dy * (p * 22);
      const headZ = star.startZ;

      // Normalize streak direction
      const len = Math.sqrt(star.dx * star.dx + star.dy * star.dy);
      const dirX = (star.dx / len) * star.length;
      const dirY = (star.dy / len) * star.length;

      // Draw tapered gradient segments along meteor trail
      for (let s = 0; s < segmentsPerStar; s++) {
        const t1 = s / segmentsPerStar;
        const t2 = (s + 1) / segmentsPerStar;

        // Vertex 1 of segment
        const p1X = headX - dirX * t1;
        const p1Y = headY - dirY * t1;
        const p1Z = headZ;

        // Vertex 2 of segment
        const p2X = headX - dirX * t2;
        const p2Y = headY - dirY * t2;
        const p2Z = headZ;

        const v1Idx = baseIdx + s * 6;
        const v2Idx = baseIdx + s * 6 + 3;

        posArr[v1Idx] = p1X;
        posArr[v1Idx + 1] = p1Y;
        posArr[v1Idx + 2] = p1Z;

        posArr[v2Idx] = p2X;
        posArr[v2Idx + 1] = p2Y;
        posArr[v2Idx + 2] = p2Z;

        // Gradient color fading towards tail
        const intensity1 = Math.pow(1 - t1, 1.8) * alpha;
        const intensity2 = Math.pow(1 - t2, 1.8) * alpha;

        colArr[v1Idx] = star.color[0] * intensity1;
        colArr[v1Idx + 1] = star.color[1] * intensity1;
        colArr[v1Idx + 2] = star.color[2] * intensity1;

        colArr[v2Idx] = star.color[0] * intensity2;
        colArr[v2Idx + 1] = star.color[1] * intensity2;
        colArr[v2Idx + 2] = star.color[2] * intensity2;
      }
    });

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={totalVertices}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={totalVertices}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.95}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        linewidth={2}
      />
    </lineSegments>
  );
}

// -------------------------------------------------------------
// INTERACTIVE 600-STAR COSMOS SCENE
// -------------------------------------------------------------
function InteractiveStarsScene() {
  const pointsRef = useRef();
  const mouse = useRef({ x: 9999, y: 9999, active: false });
  const scrollY = useRef(0);
  const starTexture = useMemo(() => getStarTexture(), []);

  // Dense, rich starry cosmos
  const count = 600;

  // Initialize particle positions, anchors, velocities, and colors
  const { positions, basePositions, velocities, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color('#38bdf8'), // Vibrant Cyan
      new THREE.Color('#93c5fd'), // Soft Ice Blue
      new THREE.Color('#818cf8'), // Electric Indigo
      new THREE.Color('#e0f2fe'), // Shimmering Pale Blue
      new THREE.Color('#ffffff'), // Brilliant White
      new THREE.Color('#67e8f9'), // Bright Aqua
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread across wide camera frustum
      const x = (Math.random() - 0.5) * 38;
      const y = (Math.random() - 0.5) * 28;
      const z = (Math.random() - 0.5) * 16;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      base[i3] = x;
      base[i3 + 1] = y;
      base[i3 + 2] = z;

      vel[i3] = (Math.random() - 0.5) * 0.0025;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.0025;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.001;

      const chosenColor = palette[Math.floor(Math.random() * palette.length)];
      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }

    return {
      positions: pos,
      basePositions: base,
      velocities: vel,
      colors: col,
    };
  }, [count]);

  // Window events for Pointer movement and Scrolling
  useEffect(() => {
    const handlePointerMove = (e) => {
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

  // Frame Physics: Repulsion Away From Cursor + Parallax Scroll
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
    const scrollParallaxY = -(scrollY.current * 0.004) % 28;

    const repulsionRadius = 4.0;
    const repulsionStrength = 0.6;
    const returnSpeed = 0.045;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Base drifting animation
      basePositions[i3] += velocities[i3];
      basePositions[i3 + 1] += velocities[i3 + 1];

      // Screen boundary wrap-around
      if (basePositions[i3] > 19) basePositions[i3] = -19;
      if (basePositions[i3] < -19) basePositions[i3] = 19;
      if (basePositions[i3 + 1] > 14) basePositions[i3 + 1] = -14;
      if (basePositions[i3 + 1] < -14) basePositions[i3 + 1] = 14;

      // Anchor point combining drift, scroll parallax, and micro-twinkle
      const anchorX = basePositions[i3] + Math.sin(time * 0.4 + i) * 0.12;
      const anchorY = basePositions[i3 + 1] + scrollParallaxY + Math.cos(time * 0.35 + i) * 0.12;
      const anchorZ = basePositions[i3 + 2];

      // Distance from star to cursor
      const dx = posArr[i3] - targetMouseX;
      const dy = posArr[i3 + 1] - targetMouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (mouseActive && dist < repulsionRadius && dist > 0.01) {
        // DIRECT REPULSION: Stars push away from cursor
        const force = Math.pow(1 - dist / repulsionRadius, 1.5) * repulsionStrength;
        const pushX = (dx / dist) * force;
        const pushY = (dy / dist) * force;

        posArr[i3] += pushX;
        posArr[i3 + 1] += pushY;
      } else {
        // Smoothly return to anchor position
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
        size={0.2}
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
        <ShootingStars />
      </Canvas>
    </div>
  );
}
