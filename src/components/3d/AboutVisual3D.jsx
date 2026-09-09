import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Text, Environment, OrbitControls } from '@react-three/drei';

function VibrantDeveloperBadge3D() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <group ref={groupRef}>
        <RoundedBox args={[3.4, 2.1, 0.25]} radius={0.15} smoothness={4}>
          <meshPhysicalMaterial
            color="#0a1410"
            metalness={0.9}
            roughness={0.15}
            clearcoat={1.0}
            emissive="#00ff66"
            emissiveIntensity={0.25}
          />
        </RoundedBox>

        <RoundedBox args={[3.45, 2.15, 0.2]} radius={0.16} smoothness={4}>
          <meshBasicMaterial color="#00ff66" wireframe />
        </RoundedBox>

        <mesh position={[1.3, 0.65, 0.2]}>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshPhysicalMaterial color="#6db33f" metalness={0.9} roughness={0.1} emissive="#6db33f" emissiveIntensity={1.0} />
        </mesh>

        <mesh position={[-1.3, -0.65, 0.2]}>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshPhysicalMaterial color="#00f0ff" metalness={0.9} roughness={0.1} emissive="#00f0ff" emissiveIntensity={1.0} />
        </mesh>

        <Text
          position={[0, 0.35, 0.16]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          FULL STACK
        </Text>

        <Text
          position={[0, -0.2, 0.16]}
          fontSize={0.26}
          color="#00ff66"
          anchorX="center"
          anchorY="middle"
        >
          JAVA DEVELOPER
        </Text>

        <Text
          position={[0, -0.65, 0.16]}
          fontSize={0.16}
          color="#00f0ff"
          anchorX="center"
          anchorY="middle"
        >
          Spring Boot • React • MySQL
        </Text>
      </group>
    </Float>
  );
}

export function AboutVisual3D() {
  return (
    <div className="w-full h-[260px] sm:h-[300px] relative rounded-xl overflow-hidden terminal-window cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} />
        <pointLight position={[-5, -5, -5]} intensity={2.0} color="#00ff66" />
        <pointLight position={[5, -5, 5]} intensity={2.0} color="#00f0ff" />
        
        <Environment preset="night" />

        <VibrantDeveloperBadge3D />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
