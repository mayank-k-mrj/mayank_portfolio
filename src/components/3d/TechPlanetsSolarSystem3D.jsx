import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  Float,
  Html,
  Sphere,
  Torus,
  MeshDistortMaterial,
  Preload,
  Line,
  Stars,
  Trail
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Sparkles, Globe } from 'lucide-react';

const planetsData = [
  {
    id: 'java',
    name: 'Java',
    category: 'Core Language',
    detail: 'Core OOP, Collections, Multithreading, Streams & JVM Tuning',
    color: '#6db33f',
    emissive: '#6db33f',
    size: 0.65,
    radius: 2.2,
    speed: 0.6,
    hasRings: true,
    ringColor: '#82cb4b'
  },
  {
    id: 'spring',
    name: 'Spring Boot',
    category: 'Backend Framework',
    detail: 'Dependency Injection, MVC, Data JPA, Microservices & Bootstrapping',
    color: '#10b981',
    emissive: '#10b981',
    size: 0.58,
    radius: 3.2,
    speed: 0.45,
    hasRings: false
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend Library',
    detail: 'Component Architecture, Hooks, State Management & Modern JSX UI',
    color: '#00f0ff',
    emissive: '#00f0ff',
    size: 0.55,
    radius: 4.2,
    speed: 0.35,
    hasRings: true,
    ringColor: '#00f0ff',
    atomicRings: true
  },
  {
    id: 'js',
    name: 'JavaScript',
    category: 'Web Language',
    detail: 'ES6+, Async/Await, DOM Manipulation & Web APIs',
    color: '#fbbf24',
    emissive: '#f59e0b',
    size: 0.48,
    radius: 5.2,
    speed: 0.28,
    hasRings: false
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Relational Database',
    detail: 'Schema Architecture, Complex Joins & Indexing',
    color: '#3b82f6',
    emissive: '#2563eb',
    size: 0.52,
    radius: 6.2,
    speed: 0.22,
    hasRings: true,
    ringColor: '#60a5fa'
  },
  {
    id: 'jwt',
    name: 'JWT & Security',
    category: 'Authentication',
    detail: 'Token-based Stateless Auth, Spring Security Filters & Encryption',
    color: '#c084fc',
    emissive: '#a855f7',
    size: 0.5,
    radius: 7.2,
    speed: 0.18,
    hasRings: false
  }
];

function TechPlanet({ data, activePlanet, setActivePlanet }) {
  const planetRef = useRef();
  const angleRef = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    if (!activePlanet || activePlanet.id !== data.id) {
      angleRef.current += delta * data.speed * 0.3;
    }

    const x = Math.cos(angleRef.current) * data.radius;
    const z = Math.sin(angleRef.current) * data.radius;

    if (planetRef.current) {
      planetRef.current.position.set(x, 0, z);
      planetRef.current.rotation.y += delta * 0.8;
    }
  });

  const isSelected = activePlanet?.id === data.id;

  return (
    <group ref={planetRef}>
      <mesh
        scale={isSelected ? 1.3 : 1.0}
        onClick={(e) => {
          e.stopPropagation();
          setActivePlanet(isSelected ? null : data);
        }}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <sphereGeometry args={[data.size, 64, 64]} />
        <meshPhysicalMaterial
          color={data.color}
          emissive={data.emissive}
          emissiveIntensity={isSelected ? 1.2 : 0.6}
          roughness={0.15}
          metalness={0.8}
          clearcoat={1.0}
        />
      </mesh>

      {data.hasRings && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[data.size * 1.7, 0.04, 32, 128]} />
          <meshStandardMaterial color={data.ringColor} emissive={data.ringColor} emissiveIntensity={0.9} />
        </mesh>
      )}

      {data.atomicRings && (
        <mesh rotation={[-Math.PI / 3, 0, Math.PI / 4]}>
          <torusGeometry args={[data.size * 2.0, 0.03, 32, 128]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.9} />
        </mesh>
      )}

      <Html position={[0, data.size + 0.5, 0]} center>
        <div
          onClick={() => setActivePlanet(isSelected ? null : data)}
          className={`px-2.5 py-1 rounded font-mono text-xs shadow-2xl cursor-pointer whitespace-nowrap transition-all ${
            isSelected
              ? 'bg-[#00ff66] text-slate-950 font-bold border-2 border-white scale-110'
              : 'bg-slate-950/90 text-[#00ff66] border border-[#00ff66]/40 hover:bg-[#0f1f18]'
          }`}
        >
          {data.name}
        </div>
      </Html>
    </group>
  );
}

function FallingStar({ label, color, startPos, speed }) {
  const starRef = useRef();

  useFrame((state, delta) => {
    if (starRef.current) {
      starRef.current.position.x += speed.x * delta;
      starRef.current.position.y += speed.y * delta;
      starRef.current.position.z += speed.z * delta;

      if (starRef.current.position.y < -8) {
        starRef.current.position.set(startPos[0], startPos[1], startPos[2]);
      }
    }
  });

  return (
    <group ref={starRef} position={startPos}>
      <Trail width={1.8} length={8} color={color} attenuation={(t) => t * t}>
        <mesh>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </Trail>

      <Html position={[0, 0.3, 0]} center>
        <div className="px-2 py-0.5 rounded bg-slate-950/90 text-white font-mono text-[10px] font-bold border border-cyan-400/60 shadow-lg whitespace-nowrap flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>★ {label}</span>
        </div>
      </Html>
    </group>
  );
}

function OrbitTrack({ radius }) {
  const points = useMemo(() => {
    const pts = [];
    const segments = 128;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
    }
    return pts;
  }, [radius]);

  return (
    <Line
      points={points}
      color="#00ff66"
      opacity={0.15}
      transparent
      lineWidth={1}
    />
  );
}

function DeveloperSunCore() {
  const sunRef = useRef();

  useFrame((state, delta) => {
    if (sunRef.current) {
      sunRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group ref={sunRef}>
        <Sphere args={[1.0, 64, 64]}>
          <MeshDistortMaterial
            color="#050b08"
            emissive="#00ff66"
            emissiveIntensity={1.2}
            distort={0.35}
            speed={2}
            roughness={0.1}
          />
        </Sphere>
        
        <Torus args={[1.4, 0.04, 32, 128]} rotation={[Math.PI / 4, 0, 0]}>
          <meshBasicMaterial color="#00ff66" opacity={0.6} transparent />
        </Torus>

        <Html position={[0, 0, 0]} center pointerEvents="none">
          <div className="text-[10px] font-mono text-slate-950 font-bold bg-[#00ff66] px-2 py-0.5 rounded shadow-lg whitespace-nowrap">
            FULL STACK CORE
          </div>
        </Html>
      </group>
    </Float>
  );
}

export function TechPlanetsSolarSystem3D() {
  const [activePlanet, setActivePlanet] = useState(null);

  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="w-full h-[500px] sm:h-[580px] lg:h-[650px] relative rounded-2xl overflow-hidden terminal-window cursor-grab active:cursor-grabbing">
        
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3 py-1.5 rounded bg-slate-950/90 border border-[#00ff66]/40 text-[#00ff66] font-mono text-xs flex items-center gap-2 shadow-xl pointer-events-auto">
            <Globe className="w-4 h-4 text-[#00ff66] animate-pulse" />
            <span>3D Skill Planets & Falling Stars (HTML / CSS)</span>
          </div>

          {activePlanet && (
            <button
              onClick={() => setActivePlanet(null)}
              className="px-3 py-1 rounded bg-[#00ff66] text-slate-950 font-mono text-xs font-bold pointer-events-auto hover:scale-105 transition-transform"
            >
              Reset Orbit
            </button>
          )}
        </div>

        {activePlanet && (
          <div className="absolute top-16 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 z-30 p-4 rounded-xl bg-slate-950/95 border border-[#00ff66] text-[#00ff66] font-mono text-xs shadow-2xl space-y-2 crt-scanlines">
            <div className="flex items-center justify-between pb-2 border-b border-[#00ff66]/30">
              <span className="font-bold text-sm text-white">{activePlanet.name} Planet</span>
              <span className="text-[10px] bg-[#00ff66]/20 px-2 py-0.5 rounded text-[#00ff66] border border-[#00ff66]/40">
                {activePlanet.category}
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              "{activePlanet.detail}"
            </p>
            <div className="pt-1 text-[10px] text-cyan-400">
              Orbit Radius: {activePlanet.radius} AU • Speed: {activePlanet.speed}x
            </div>
          </div>
        )}

        <Canvas
          camera={{ position: [0, 6, 9.5], fov: 48 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[0, 0, 0]} intensity={3.0} color="#00ff66" />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#6db33f" />

          <Stars radius={100} depth={50} count={3500} factor={4} saturation={0} fade speed={1.5} />

          <Environment preset="night" />

          <DeveloperSunCore />

          <FallingStar
            label="HTML5"
            color="#ff6b00"
            startPos={[6, 8, -2]}
            speed={{ x: -2.5, y: -4.0, z: 0.5 }}
          />

          <FallingStar
            label="CSS3"
            color="#00d2ff"
            startPos={[-5, 9, -4]}
            speed={{ x: 2.2, y: -3.8, z: 0.8 }}
          />

          {planetsData.map((p) => (
            <OrbitTrack key={p.id} radius={p.radius} />
          ))}

          {planetsData.map((p) => (
            <TechPlanet
              key={p.id}
              data={p}
              activePlanet={activePlanet}
              setActivePlanet={setActivePlanet}
            />
          ))}

          <EffectComposer>
            <Bloom intensity={0.8} luminanceThreshold={0.2} />
          </EffectComposer>

          <OrbitControls enableZoom={true} maxDistance={14} minDistance={4} autoRotate={false} />
          <Preload all />
        </Canvas>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-1.5 rounded-full bg-slate-950/90 border border-[#00ff66]/30 text-[11px] font-mono text-[#00ff66] flex items-center gap-2 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#00ff66] animate-spin" />
          <span>Click Perfect Circular Planets • Watch Falling Stars HTML & CSS • Orbit 360°</span>
        </div>

      </div>

    </div>
  );
}
