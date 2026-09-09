import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Float,
  Environment,
  ContactShadows,
  MeshTransmissionMaterial,
  Text,
  Preload,
  Html
} from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function RealisticLaptop({ activeObject, setActiveObject }) {
  const laptopGroup = useRef();
  const screenRef = useRef();

  useFrame((state, delta) => {
    if (laptopGroup.current) {
      laptopGroup.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  const isHovered = activeObject === 'laptop';

  return (
    <group
      ref={laptopGroup}
      position={[0, -0.6, 0]}
      scale={isHovered ? 1.08 : 1.0}
      onPointerOver={(e) => { e.stopPropagation(); setActiveObject('laptop'); }}
      onPointerOut={() => setActiveObject(null)}
    >
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 0.15, 2.2]} />
        <meshPhysicalMaterial
          color="#1e293b"
          metalness={0.9}
          roughness={0.15}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          reflectivity={0.9}
        />
      </mesh>

      <mesh position={[0, 0.08, 0.6]}>
        <planeGeometry args={[1.0, 0.7]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[0, 0.08, -0.3]}>
        <planeGeometry args={[2.8, 1.1]} />
        <meshStandardMaterial color="#0b0f19" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.082, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.7, 1.0]} />
        <meshBasicMaterial color="#00f0ff" opacity={0.3} transparent />
      </mesh>

      <group position={[0, 0.07, -1.05]} rotation={[1.35, 0, 0]}>
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[3.2, 2.2, 0.08]} />
          <meshPhysicalMaterial
            color="#0f172a"
            metalness={0.95}
            roughness={0.1}
            clearcoat={1.0}
          />
        </mesh>

        <mesh position={[0, 1.1, 0.045]}>
          <planeGeometry args={[3.0, 2.0]} />
          <meshBasicMaterial color="#050814" />
        </mesh>

        <group position={[0, 1.1, 0.048]}>
          <mesh>
            <planeGeometry args={[2.9, 1.9]} />
            <meshBasicMaterial color="#090d1a" />
          </mesh>

          <Html
            transform
            wrapperClass="laptop-screen"
            position={[0, 0, 0.005]}
            distanceFactor={1.5}
            scale={0.19}
          >
            <div className="w-[480px] h-[300px] bg-[#090d1a]/95 rounded-lg p-4 font-mono text-[11px] border border-cyan-500/40 text-cyan-300 shadow-2xl flex flex-col justify-between select-none">
              <div className="flex items-center justify-between pb-2 border-b border-cyan-500/30">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="ml-2 text-slate-400 text-[10px]">MayankApplication.java</span>
                </div>
                <span className="text-emerald-400 font-bold">● SPRING BOOT RUNNING</span>
              </div>
              <div className="space-y-1 my-2 text-slate-200">
                <p><span className="text-purple-400">@SpringBootApplication</span></p>
                <p><span className="text-blue-400">public class</span> <span className="text-yellow-300">MayankPortfolio</span> &#123;</p>
                <p className="pl-4"><span className="text-purple-400">@Autowired</span> <span className="text-cyan-400">SecurityService</span> secService;</p>
                <p className="pl-4"><span className="text-blue-400">public static void</span> <span className="text-emerald-400">main</span>(String[] args) &#123;</p>
                <p className="pl-8 text-cyan-300">SpringApplication.run(MayankPortfolio.class, args);</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </div>
              <div className="pt-2 border-t border-cyan-500/30 flex items-center justify-between text-[10px] text-slate-400">
                <span>JVM Memory: 512MB OK</span>
                <span className="text-cyan-400">REST API : 8080 READY</span>
              </div>
            </div>
          </Html>
        </group>
      </group>
    </group>
  );
}

function RealisticServerStack({ activeObject, setActiveObject }) {
  const serverRef = useRef();

  useFrame((state, delta) => {
    if (serverRef.current) {
      serverRef.current.rotation.y += delta * 0.4;
    }
  });

  const isHovered = activeObject === 'server';

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group
        ref={serverRef}
        position={[-3.2, 1.2, -1.0]}
        scale={isHovered ? 1.15 : 1.0}
        onPointerOver={(e) => { e.stopPropagation(); setActiveObject('server'); }}
        onPointerOut={() => setActiveObject(null)}
      >
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.4, 2.2, 1.4]} />
          <meshPhysicalMaterial
            color="#0b1329"
            metalness={0.95}
            roughness={0.1}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {[-0.6, -0.2, 0.2, 0.6].map((y, idx) => (
          <group key={idx} position={[0, y, 0.71]}>
            <mesh>
              <planeGeometry args={[1.2, 0.3]} />
              <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
            </mesh>

            <mesh position={[-0.45, 0, 0.01]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color={idx % 2 === 0 ? "#6db33f" : "#00f0ff"} />
            </mesh>
            <mesh position={[-0.35, 0, 0.01]}>
              <sphereGeometry args={[0.04, 16, 16]} />
              <meshBasicMaterial color="#00f0ff" />
            </mesh>
          </group>
        ))}

        {isHovered && (
          <Html position={[0, 1.5, 0]} center>
            <div className="px-3 py-1 rounded-md bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-mono text-xs shadow-xl whitespace-nowrap">
              Spring Boot Microservice Engine
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

function RealisticSecurityShield({ activeObject, setActiveObject }) {
  const shieldRef = useRef();

  useFrame((state, delta) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  const isHovered = activeObject === 'security';

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <group
        ref={shieldRef}
        position={[3.2, 1.2, -0.8]}
        scale={isHovered ? 1.15 : 1.0}
        onPointerOver={(e) => { e.stopPropagation(); setActiveObject('security'); }}
        onPointerOut={() => setActiveObject(null)}
      >
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[1.5, 1.5, 0.25]} />
          <meshPhysicalMaterial
            color="#0f172a"
            metalness={0.95}
            roughness={0.08}
            clearcoat={1.0}
            emissive="#00f0ff"
            emissiveIntensity={0.2}
          />
        </mesh>

        <mesh position={[0, 0, 0.15]}>
          <torusGeometry args={[0.3, 0.08, 16, 32]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.15, 0.15]}>
          <boxGeometry args={[0.4, 0.4, 0.15]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} />
        </mesh>

        {isHovered && (
          <Html position={[0, 1.3, 0]} center>
            <div className="px-3 py-1 rounded-md bg-amber-950/90 border border-amber-500/50 text-amber-300 font-mono text-xs shadow-xl whitespace-nowrap">
              JWT & Spring Security Authentication
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

function RealisticCoffeeCup({ activeObject, setActiveObject }) {
  const cupRef = useRef();

  useFrame((state, delta) => {
    if (cupRef.current) {
      cupRef.current.rotation.y += delta * 0.3;
    }
  });

  const isHovered = activeObject === 'java';

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1.2}>
      <group
        ref={cupRef}
        position={[2.6, -1.2, 0.8]}
        scale={isHovered ? 1.2 : 1.0}
        onPointerOver={(e) => { e.stopPropagation(); setActiveObject('java'); }}
        onPointerOut={() => setActiveObject(null)}
      >
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.45, 0.4, 0.9, 32]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.05} clearcoat={1.0} />
        </mesh>

        <mesh position={[0.45, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.25, 0.06, 16, 32, Math.PI]} />
          <meshPhysicalMaterial color="#ffffff" roughness={0.1} metalness={0.05} />
        </mesh>

        <mesh position={[0, 0.1, 0.46]}>
          <planeGeometry args={[0.35, 0.35]} />
          <meshBasicMaterial color="#6db33f" />
        </mesh>

        {isHovered && (
          <Html position={[0, 0.8, 0]} center>
            <div className="px-3 py-1 rounded-md bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 font-mono text-xs shadow-xl whitespace-nowrap">
              Java Backend Core
            </div>
          </Html>
        )}
      </group>
    </Float>
  );
}

export function HeroScene() {
  const [activeObject, setActiveObject] = useState(null);

  return (
    <div className="w-full h-[480px] sm:h-[580px] lg:h-[680px] relative rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1.2, 6.2], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 15, 10]} intensity={1.8} castShadow />
        <pointLight position={[-10, 5, -5]} color="#00f0ff" intensity={2.0} />
        <pointLight position={[10, -5, 5]} color="#6db33f" intensity={2.0} />

        <Environment preset="city" />

        <RealisticLaptop activeObject={activeObject} setActiveObject={setActiveObject} />
        <RealisticServerStack activeObject={activeObject} setActiveObject={setActiveObject} />
        <RealisticSecurityShield activeObject={activeObject} setActiveObject={setActiveObject} />
        <RealisticCoffeeCup activeObject={activeObject} setActiveObject={setActiveObject} />

        <ContactShadows
          position={[0, -1.8, 0]}
          opacity={0.65}
          scale={12}
          blur={2.5}
          far={4}
          color="#000000"
        />

        <EffectComposer>
          <Bloom
            intensity={0.6}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>

        <Preload all />
      </Canvas>
    </div>
  );
}
