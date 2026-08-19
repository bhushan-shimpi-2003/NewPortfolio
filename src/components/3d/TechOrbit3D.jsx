import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Sparkles } from '@react-three/drei';
import { useTheme } from '../../context/ThemeContext';

const techNodes = [
  { name: 'React.js', color: '#06b6d4', radius: 2.2, speed: 0.6, angle: 0 },
  { name: 'React Native', color: '#6366f1', radius: 2.8, speed: 0.5, angle: 1.2 },
  { name: 'Node.js', color: '#10b981', radius: 2.4, speed: 0.7, angle: 2.4 },
  { name: 'Supabase', color: '#3ecf8e', radius: 3.2, speed: 0.4, angle: 3.6 },
  { name: 'PostgreSQL', color: '#336791', radius: 2.6, speed: 0.55, angle: 4.8 },
  { name: 'AI / LLM', color: '#ec4899', radius: 3.0, speed: 0.45, angle: 5.5 },
];

function OrbitingNode({ tech, isDark }) {
  const nodeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * tech.speed;
    const currentAngle = tech.angle + t;
    const x = Math.cos(currentAngle) * tech.radius;
    const z = Math.sin(currentAngle) * tech.radius;
    const y = Math.sin(currentAngle * 2) * 0.4;
    if (nodeRef.current) {
      nodeRef.current.position.set(x, y, z);
    }
  });

  return (
    <group ref={nodeRef}>
      <mesh>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color={tech.color}
          emissive={tech.color}
          emissiveIntensity={isDark ? 0.7 : 0.4}
        />
      </mesh>
      <Html distanceFactor={10} center position={[0, 0.4, 0]}>
        <div className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg border backdrop-blur-md transition-all duration-300 pointer-events-none select-none bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700">
          {tech.name}
        </div>
      </Html>
    </group>
  );
}

function OrbitScene({ isDark }) {
  return (
    <group>
      {/* Central glowing hub */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial
            color={isDark ? "#4f46e5" : "#6366f1"}
            emissive={isDark ? "#3730a3" : "#4338ca"}
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>
      </Float>

      {techNodes.map((tech, idx) => (
        <OrbitingNode key={idx} tech={tech} isDark={isDark} />
      ))}

      <Sparkles count={50} scale={7} size={3} speed={0.3} color={isDark ? "#38bdf8" : "#818cf8"} />
    </group>
  );
}

export default function TechOrbit3D() {
  const { isDark } = useTheme();

  return (
    <div className="w-full h-[380px] md:h-[480px] relative">
      <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
        <ambientLight intensity={isDark ? 0.8 : 1.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <OrbitScene isDark={isDark} />
      </Canvas>
    </div>
  );
}
