import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function MedSetu3DModel() {
  const capsuleRef = useRef();

  useFrame((state, delta) => {
    if (capsuleRef.current) {
      capsuleRef.current.rotation.y += delta * 0.5;
      capsuleRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <group ref={capsuleRef}>
        <mesh position={[0, 0, 0]}>
          <capsuleGeometry args={[0.7, 1.2, 16, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.4}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.9}
            ior={1.4}
            color="#00f0ff"
          />
        </mesh>

        <group scale={0.7}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.4, 1.2, 0.4]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.2} />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.2, 0.4, 0.4]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.2} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

function HealthyYatra3DModel() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
      groupRef.current.rotation.z += delta * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={1.8}>
      <group ref={groupRef}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.2, 0.12, 16, 64]} />
          <meshPhysicalMaterial
            color="#6db33f"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1.0}
            emissive="#6db33f"
            emissiveIntensity={0.5}
          />
        </mesh>

        <mesh rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
          <torusGeometry args={[0.9, 0.08, 16, 48]} />
          <meshPhysicalMaterial
            color="#00f0ff"
            metalness={0.95}
            roughness={0.05}
            emissive="#00f0ff"
            emissiveIntensity={0.6}
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshStandardMaterial color="#82cb4b" emissive="#82cb4b" emissiveIntensity={1.0} />
        </mesh>
      </group>
    </Float>
  );
}

function HabitStreakTracker3DModel() {
  const flameRef = useRef();

  useFrame((state, delta) => {
    if (flameRef.current) {
      flameRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.8} floatIntensity={1.5}>
      <group ref={flameRef}>
        <mesh>
          <boxGeometry args={[1.6, 1.6, 1.6]} />
          <meshPhysicalMaterial
            color="#1e1b4b"
            metalness={0.9}
            roughness={0.1}
            wireframe
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.5} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

export function Project3DViewer({ projectId }) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} color="#00f0ff" intensity={1.5} />

        <Environment preset="city" />

        {projectId === 'medsetu' && <MedSetu3DModel />}
        {projectId === 'healthyyatra' && <HealthyYatra3DModel />}
        {projectId === 'habit-streak-tracker' && <HabitStreakTracker3DModel />}

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
