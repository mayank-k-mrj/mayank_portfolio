import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  Float,
  Text,
  Preload
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Terminal, Monitor, Cpu, ShieldCheck, Coffee, Sparkles, Power, Layers } from 'lucide-react';

function DeskStructure() {
  return (
    <group position={[0, -1.2, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[7.2, 0.2, 3.8]} />
        <meshPhysicalMaterial
          color="#0d1813"
          metalness={0.9}
          roughness={0.2}
          clearcoat={0.8}
        />
      </mesh>

      <mesh position={[0, 0.105, 1.88]}>
        <boxGeometry args={[7.22, 0.02, 0.05]} />
        <meshBasicMaterial color="#00ff66" />
      </mesh>

      {[-3.3, 3.3].map((x, i) => (
        <group key={i}>
          <mesh position={[x, -1.3, -1.5]}>
            <cylinderGeometry args={[0.12, 0.12, 2.6, 16]} />
            <meshPhysicalMaterial color="#050b08" metalness={0.95} roughness={0.1} />
          </mesh>
          <mesh position={[x, -1.3, 1.5]}>
            <cylinderGeometry args={[0.12, 0.12, 2.6, 16]} />
            <meshPhysicalMaterial color="#050b08" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>
      ))}

      <mesh position={[0, -2.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#030705" roughness={0.9} />
      </mesh>

      <gridHelper args={[14, 14, '#00ff66', '#0f2b1d']} position={[0, -2.59, 0]} />
    </group>
  );
}

function UltrawideMonitor({ activeFocus, setActiveFocus }) {
  const monitorRef = useRef();

  useFrame((state, delta) => {
    if (monitorRef.current) {
    }
  });

  const isFocused = activeFocus === 'monitor';

  return (
    <group
      ref={monitorRef}
      position={[0, 0.5, -0.8]}
      scale={isFocused ? 1.08 : 1.0}
      onClick={(e) => { e.stopPropagation(); setActiveFocus('monitor'); }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <mesh position={[0, -1.0, 0]}>
        <boxGeometry args={[1.4, 0.08, 0.8]} />
        <meshPhysicalMaterial color="#0f1f18" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.5, -0.2]}>
        <cylinderGeometry args={[0.08, 0.1, 1.0, 16]} />
        <meshPhysicalMaterial color="#0f1f18" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[0, 0.3, -0.1]}>
        <boxGeometry args={[4.2, 2.2, 0.1]} />
        <meshPhysicalMaterial color="#050b08" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[0, 0.3, -0.045]}>
        <planeGeometry args={[4.05, 2.05]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      <group position={[0, 0.3, -0.04]}>
        <Html
          transform
          wrapperClass="monitor-screen-html"
          position={[0, 0, 0.005]}
          distanceFactor={1.45}
          scale={0.21}
        >
          <div className="w-[620px] h-[310px] bg-[#050b08]/98 rounded-md p-4 font-mono text-[11px] border border-[#00ff66]/50 text-[#00ff66] shadow-2xl flex flex-col justify-between crt-scanlines overflow-hidden">
            <div className="flex items-center justify-between pb-2 border-b border-[#00ff66]/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="ml-2 text-slate-300 font-bold">BIT-IT-WORKSTATION-MAIN :: Spring Boot Engine</span>
              </div>
              <span className="text-[#00ff66] font-bold">● LIVE 3D WORKSPACE</span>
            </div>

            <div className="my-2 space-y-1.5 text-slate-200">
              <p className="text-[#00ff66]">$ java -jar target/mayank-portfolio-service.jar</p>
              <p className="text-cyan-300">  .   ____          _            __ _ _</p>
              <p className="text-cyan-300"> /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \</p>
              <p className="text-cyan-300">( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \</p>
              <p className="text-[#00ff66]"> :: Spring Boot ::               (v3.2.4)</p>
              <p className="text-yellow-300">Started MayankApplication in 1.48 seconds (JVM running for 2.1s)</p>
              <p className="text-slate-300">Active Profile: <span className="text-[#00ff66] font-bold">production, jwt-security, mysql</span></p>
            </div>

            <div className="pt-2 border-t border-[#00ff66]/30 flex items-center justify-between text-[10px] text-slate-400">
              <span>Port: 8080 (HTTP/REST)</span>
              <span className="text-[#00ff66]">Click PC Tower or Shield for 3D Stats</span>
            </div>
          </div>
        </Html>
      </group>
    </group>
  );
}

function CyberPCTower({ activeFocus, setActiveFocus }) {
  const towerRef = useRef();

  useFrame((state, delta) => {
    if (towerRef.current) {
    }
  });

  const isFocused = activeFocus === 'pc';

  return (
    <group
      ref={towerRef}
      position={[2.6, -0.1, -0.4]}
      scale={isFocused ? 1.12 : 1.0}
      onClick={(e) => { e.stopPropagation(); setActiveFocus('pc'); }}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'default'}
    >
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.1, 2.0, 1.8]} />
        <meshPhysicalMaterial
          color="#08100c"
          metalness={0.95}
          roughness={0.1}
          clearcoat={1.0}
        />
      </mesh>

      <mesh position={[-0.56, 0, 0]}>
        <planeGeometry args={[1.7, 1.9]} />
        <meshPhysicalMaterial
          color="#00ff66"
          transparent
          opacity={0.3}
          metalness={0.9}
          roughness={0.05}
        />
      </mesh>

      {[-0.5, 0, 0.5].map((y, i) => (
        <mesh key={i} position={[0.56, y, 0]}>
          <circleGeometry args={[0.25, 32]} />
          <meshBasicMaterial color={i === 1 ? "#00ff66" : "#00f0ff"} />
        </mesh>
      ))}

      {isFocused && (
        <Html position={[0, 1.3, 0]} center>
          <div className="px-3 py-1.5 rounded bg-[#0f1f18] border border-[#00ff66] text-[#00ff66] font-mono text-xs shadow-2xl whitespace-nowrap">
            Cyber PC Tower • Spring Microservice Core
          </div>
        </Html>
      )}
    </group>
  );
}

function PeripheralsStructure() {
  return (
    <group position={[0, -1.08, 0.6]}>
      <mesh position={[-0.2, 0, 0]}>
        <boxGeometry args={[2.2, 0.08, 0.8]} />
        <meshPhysicalMaterial color="#0a1410" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-0.2, 0.045, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.1, 0.7]} />
        <meshBasicMaterial color="#00ff66" opacity={0.3} transparent />
      </mesh>

      <mesh position={[1.5, -0.03, 0.1]}>
        <boxGeometry args={[1.2, 0.02, 1.1]} />
        <meshStandardMaterial color="#050b08" roughness={0.9} />
      </mesh>

      <mesh position={[1.5, 0.05, 0.1]}>
        <boxGeometry args={[0.35, 0.12, 0.55]} />
        <meshPhysicalMaterial color="#0f1f18" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

function JavaCoffeeMug({ activeFocus, setActiveFocus }) {
  const mugRef = useRef();

  useFrame((state, delta) => {
    if (mugRef.current) {
      mugRef.current.rotation.y += delta * 0.5;
    }
  });

  const isFocused = activeFocus === 'mug';

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group
        ref={mugRef}
        position={[-2.2, -0.8, 0.8]}
        scale={isFocused ? 1.2 : 1.0}
        onClick={(e) => { e.stopPropagation(); setActiveFocus('mug'); }}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.26, 0.6, 32]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.05} clearcoat={1.0} />
        </mesh>
        <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.18, 0.04, 16, 32, Math.PI]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.05, 0.31]}>
          <planeGeometry args={[0.22, 0.22]} />
          <meshBasicMaterial color="#6db33f" />
        </mesh>

        {isFocused && (
          <Html position={[0, 0.6, 0]} center>
            <div className="px-2.5 py-1 rounded bg-[#0f1f18] border border-[#6db33f] text-[#6db33f] font-mono text-xs shadow-xl whitespace-nowrap">
              Java Fuel Core ☕
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

function FloatingSecurityShield({ activeFocus, setActiveFocus }) {
  const shieldRef = useRef();

  useFrame((state, delta) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y += delta * 0.6;
    }
  });

  const isFocused = activeFocus === 'shield';

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <group
        ref={shieldRef}
        position={[-2.6, 1.2, -0.5]}
        scale={isFocused ? 1.2 : 1.0}
        onClick={(e) => { e.stopPropagation(); setActiveFocus('shield'); }}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'default'}
      >
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1.1, 1.1, 0.2]} />
          <meshPhysicalMaterial
            color="#091410"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1.0}
            emissive="#00ff66"
            emissiveIntensity={0.5}
          />
        </mesh>
        <mesh position={[0, 0, 0.12]}>
          <torusGeometry args={[0.25, 0.06, 16, 32]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} />
        </mesh>

        {isFocused && (
          <Html position={[0, 1.0, 0]} center>
            <div className="px-2.5 py-1 rounded bg-[#0f1f18] border border-[#00ff66] text-[#00ff66] font-mono text-xs shadow-xl whitespace-nowrap">
              JWT & Spring Security Active
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

export function InteractiveWorkspace3D() {
  const [activeFocus, setActiveFocus] = useState('monitor');

  return (
    <div className="w-full h-[500px] sm:h-[600px] lg:h-[680px] relative rounded-2xl overflow-hidden terminal-window cursor-grab active:cursor-grabbing my-4">
      
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="px-3 py-1.5 rounded bg-slate-950/90 border border-[#00ff66]/40 text-[#00ff66] font-mono text-xs flex items-center gap-2 shadow-xl pointer-events-auto">
          <Layers className="w-4 h-4 text-[#00ff66]" />
          <span>Interactive 3D Workspace Structure</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto text-xs font-mono">
          <button
            onClick={() => setActiveFocus('monitor')}
            className={`px-3 py-1 rounded border transition-all ${activeFocus === 'monitor' ? 'bg-[#00ff66] text-slate-950 font-bold border-[#00ff66]' : 'bg-[#0f1f18] text-[#00ff66] border-[#00ff66]/30'}`}
          >
            Monitor
          </button>
          <button
            onClick={() => setActiveFocus('pc')}
            className={`px-3 py-1 rounded border transition-all ${activeFocus === 'pc' ? 'bg-[#00ff66] text-slate-950 font-bold border-[#00ff66]' : 'bg-[#0f1f18] text-[#00ff66] border-[#00ff66]/30'}`}
          >
            PC Tower
          </button>
          <button
            onClick={() => setActiveFocus('shield')}
            className={`px-3 py-1 rounded border transition-all ${activeFocus === 'shield' ? 'bg-[#00ff66] text-slate-950 font-bold border-[#00ff66]' : 'bg-[#0f1f18] text-[#00ff66] border-[#00ff66]/30'}`}
          >
            Security
          </button>
        </div>
      </div>

      <Canvas
        camera={{ position: [0, 1.8, 6.2], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 10]} intensity={1.8} castShadow />
        <pointLight position={[-8, 8, -5]} color="#00ff66" intensity={2.2} />
        <pointLight position={[8, -4, 5]} color="#00f0ff" intensity={2.0} />

        <Environment preset="night" />

        <DeskStructure />
        <UltrawideMonitor activeFocus={activeFocus} setActiveFocus={setActiveFocus} />
        <CyberPCTower activeFocus={activeFocus} setActiveFocus={setActiveFocus} />
        <PeripheralsStructure />
        <JavaCoffeeMug activeFocus={activeFocus} setActiveFocus={setActiveFocus} />
        <FloatingSecurityShield activeFocus={activeFocus} setActiveFocus={setActiveFocus} />

        <ContactShadows
          position={[0, -2.4, 0]}
          opacity={0.8}
          scale={14}
          blur={2.5}
          far={5}
          color="#00ff66"
        />

        <EffectComposer>
          <Bloom intensity={0.6} luminanceThreshold={0.25} />
        </EffectComposer>

        <OrbitControls enableZoom={true} maxDistance={9} minDistance={3.5} />
        <Preload all />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-1.5 rounded-full bg-slate-950/90 border border-[#00ff66]/30 text-[11px] font-mono text-[#00ff66] flex items-center gap-2 shadow-xl">
        <Sparkles className="w-3.5 h-3.5 text-[#00ff66] animate-spin" />
        <span>Click 3D Desk Items (Monitor, PC, Shield, Mug) to Interact • Orbit 360°</span>
      </div>

    </div>
  );
}
