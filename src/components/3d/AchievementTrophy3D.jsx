import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Cylinder, Torus, Octahedron, Environment, OrbitControls } from '@react-three/drei';

function RealisticTrophyModel() {
  const trophyRef = useRef();

  useFrame((state, delta) => {
    if (trophyRef.current) {
      trophyRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <group ref={trophyRef} position={[0, -0.3, 0]}>
        <Cylinder args={[0.9, 1.1, 0.4, 32]} position={[0, 0, 0]}>
          <meshPhysicalMaterial color="#0f172a" metalness={0.95} roughness={0.1} clearcoat={1} emissive="#00f0ff" emissiveIntensity={0.2} />
        </Cylinder>

        <Cylinder args={[0.2, 0.4, 0.8, 16]} position={[0, 0.6, 0]}>
          <meshPhysicalMaterial color="#fbbf24" metalness={0.95} roughness={0.05} clearcoat={1} clearcoatRoughness={0.05} emissive="#d97706" emissiveIntensity={0.5} />
        </Cylinder>

        <Cylinder args={[0.9, 0.3, 1.0, 32, 1, true]} position={[0, 1.4, 0]}>
          <meshPhysicalMaterial color="#fbbf24" metalness={0.95} roughness={0.05} clearcoat={1} side={2} emissive="#f59e0b" emissiveIntensity={0.4} />
        </Cylinder>

        <group position={[0, 1.4, 0]}>
          <Torus args={[0.6, 0.08, 16, 32, Math.PI]} position={[0.7, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
            <meshPhysicalMaterial color="#fbbf24" metalness={0.95} roughness={0.05} clearcoat={1} />
          </Torus>
          <Torus args={[0.6, 0.08, 16, 32, Math.PI]} position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <meshPhysicalMaterial color="#fbbf24" metalness={0.95} roughness={0.05} clearcoat={1} />
          </Torus>
        </group>

        <Octahedron args={[0.3, 0]} position={[0, 2.3, 0]}>
          <meshPhysicalMaterial color="#00f0ff" metalness={0.9} roughness={0.05} clearcoat={1} emissive="#00f0ff" emissiveIntensity={1.2} />
        </Octahedron>
      </group>
    </Float>
  );
}

export function AchievementTrophy3D() {
  return (
    <div className="w-full h-[220px] relative overflow-hidden cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 1, 4.5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, 5, -2]} intensity={2} color="#00f0ff" />
        <pointLight position={[5, -2, 2]} intensity={2} color="#fbbf24" />

        <Environment preset="studio" />

        <RealisticTrophyModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
