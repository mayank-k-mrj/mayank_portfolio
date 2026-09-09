import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  Preload
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Power, RotateCcw, Monitor, Sparkles, Terminal } from 'lucide-react';

function Laptop3DModel({ isOpen, setIsOpen, activeTab, setActiveTab }) {
  const groupRef = useRef();
  const lidRef = useRef();

  useFrame((state, delta) => {
    if (lidRef.current) {
      const targetLidAngle = isOpen ? 1.35 : 0.05;
      lidRef.current.rotation.x = THREE.MathUtils.lerp(
        lidRef.current.rotation.x,
        targetLidAngle,
        0.1
      );
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      
      <mesh
        position={[0, 0, 0]}
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
      >
        <boxGeometry args={[3.4, 0.16, 2.3]} />
        <meshPhysicalMaterial
          color="#0f1f18"
          metalness={0.9}
          roughness={0.15}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      <mesh position={[0, 0.085, 0.65]}>
        <planeGeometry args={[1.1, 0.75]} />
        <meshStandardMaterial color="#050b08" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.085, -0.3]}>
        <planeGeometry args={[3.0, 1.2]} />
        <meshStandardMaterial color="#08100c" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.088, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.9, 1.1]} />
        <meshBasicMaterial color="#00ff66" opacity={0.35} transparent />
      </mesh>

      <mesh position={[1.3, 0.09, -0.85]}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color={isOpen ? "#00ff66" : "#ff4d4d"} />
      </mesh>

      <group ref={lidRef} position={[0, 0.08, -1.1]}>
        
        <mesh position={[0, 1.15, 0]}>
          <boxGeometry args={[3.4, 2.3, 0.08]} />
          <meshPhysicalMaterial
            color="#091410"
            metalness={0.95}
            roughness={0.1}
            clearcoat={1.0}
          />
        </mesh>

        <mesh position={[0, 1.15, -0.045]}>
          <planeGeometry args={[0.6, 0.6]} />
          <meshBasicMaterial color="#00ff66" opacity={0.8} transparent />
        </mesh>

        <mesh position={[0, 1.15, 0.045]}>
          <planeGeometry args={[3.2, 2.1]} />
          <meshBasicMaterial color="#000000" />
        </mesh>

        {isOpen && (
          <group position={[0, 1.15, 0.048]}>
            <Html
              transform
              wrapperClass="interactive-laptop-screen"
              position={[0, 0, 0.005]}
              distanceFactor={1.42}
              scale={0.2}
            >
              <div className="w-[500px] h-[320px] bg-[#050b08]/98 rounded-lg p-3 font-mono text-[11px] border border-[#00ff66]/40 text-[#00ff66] shadow-2xl flex flex-col justify-between select-none crt-scanlines overflow-hidden">
                
                <div className="flex items-center justify-between pb-2 border-b border-[#00ff66]/30">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 cursor-pointer" onClick={() => setIsOpen(false)} />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="ml-2 text-slate-300 text-[10px]">mayank@bit-workstation:~$</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px]">
                    <button
                      onClick={() => setActiveTab('terminal')}
                      className={`px-2 py-0.5 rounded ${activeTab === 'terminal' ? 'bg-[#00ff66] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      CLI
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 rounded ${activeTab === 'code' ? 'bg-[#00ff66] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      Java
                    </button>
                    <button
                      onClick={() => setActiveTab('stats')}
                      className={`px-2 py-0.5 rounded ${activeTab === 'stats' ? 'bg-[#00ff66] text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                      Sys
                    </button>
                  </div>
                </div>

                <div className="my-2 flex-1 overflow-y-auto space-y-1.5 text-[11px] leading-relaxed">
                  {activeTab === 'terminal' && (
                    <>
                      <p className="text-slate-400">$ systemctl status spring-boot-backend.service</p>
                      <p className="text-[#00ff66]">● spring-boot.service - Full Stack Java Web Application</p>
                      <p className="pl-4 text-slate-300">Active: <span className="text-[#00ff66] font-bold">active (running)</span> since 2026-09-07</p>
                      <p className="pl-4 text-slate-300">Docs: MedSetu | HealthyYatra | Habit Streak Tracker</p>
                      <p className="text-cyan-400">$ echo "Interactive 3D Laptop Online. Try clicking keyboard keys!"</p>
                      <p className="text-yellow-300">&gt; Mayank Kumar (B.Tech IT 4th Year - Buddha Institute of Tech)</p>
                    </>
                  )}

                  {activeTab === 'code' && (
                    <div className="text-slate-200">
                      <p><span className="text-purple-400">@RestController</span></p>
                      <p><span className="text-blue-400">public class</span> <span className="text-yellow-300">PortfolioController</span> &#123;</p>
                      <p className="pl-4"><span className="text-purple-400">@GetMapping</span>(<span className="text-emerald-400">"/api/developer"</span>)</p>
                      <p className="pl-4"><span className="text-blue-400">public</span> DeveloperDTO <span className="text-cyan-400">getProfile</span>() &#123;</p>
                      <p className="pl-8 text-[#00ff66]">return new DeveloperDTO("Mayank Kumar", "Full Stack Java");</p>
                      <p className="pl-4">&#125;</p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeTab === 'stats' && (
                    <div className="space-y-1 text-slate-300">
                      <p>CPU Usage: [<span className="text-[#00ff66]">||||||||||||||||||||</span>] 24%</p>
                      <p>JVM RAM:  [<span className="text-cyan-400">||||||||||||</span>........] 384MB / 1GB</p>
                      <p>DB Conn:  MySQL 8.0 @ 3306 [ESTABLISHED]</p>
                      <p>Auth:     JWT Security Filter [ACTIVE]</p>
                    </div>
                  )}
                </div>

                <div className="pt-1.5 border-t border-[#00ff66]/30 flex items-center justify-between text-[10px] text-slate-400">
                  <span>3D Laptop Screen Interactive</span>
                  <span className="text-[#00ff66]">Click to Toggle Lid</span>
                </div>
              </div>
            </Html>
          </group>
        )}
      </group>

    </group>
  );
}

export function InteractiveLaptop3D() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('terminal');

  return (
    <div className="w-full flex flex-col items-center">
      
      <div className="w-full h-[450px] sm:h-[520px] lg:h-[580px] relative rounded-2xl overflow-hidden terminal-window cursor-grab active:cursor-grabbing">
        
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3 py-1.5 rounded-lg bg-slate-950/90 border border-[#00ff66]/40 text-[#00ff66] font-mono text-xs flex items-center gap-2 shadow-lg pointer-events-auto">
            <Terminal className="w-4 h-4 text-[#00ff66]" />
            <span>Interactive 3D Workstation</span>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-1.5 rounded-lg bg-[#00ff66]/20 text-[#00ff66] border border-[#00ff66]/40 hover:bg-[#00ff66] hover:text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md"
            >
              <Power className="w-3.5 h-3.5" />
              <span>{isOpen ? 'Close Lid' : 'Open Lid'}</span>
            </button>
          </div>
        </div>

        <Canvas
          camera={{ position: [0, 1.2, 5.5], fov: 46 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 15, 10]} intensity={1.8} />
          <pointLight position={[-10, 5, -5]} color="#00ff66" intensity={2.0} />
          <pointLight position={[10, -5, 5]} color="#00f0ff" intensity={2.0} />

          <Environment preset="night" />

          <Laptop3DModel
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <ContactShadows
            position={[0, -1.6, 0]}
            opacity={0.7}
            scale={10}
            blur={2.5}
            far={4}
            color="#00ff66"
          />

          <EffectComposer>
            <Bloom intensity={0.5} luminanceThreshold={0.3} />
          </EffectComposer>

          <OrbitControls enableZoom={true} maxDistance={8} minDistance={3} autoRotate={false} />
          <Preload all />
        </Canvas>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-1.5 rounded-full bg-slate-950/90 border border-[#00ff66]/30 text-[11px] font-mono text-[#00ff66] flex items-center gap-2 shadow-xl">
          <Sparkles className="w-3.5 h-3.5 text-[#00ff66] animate-spin" />
          <span>Drag to Orbit 360° • Click Lid to Open/Close • Click Screen Tabs</span>
        </div>

      </div>

    </div>
  );
}
