import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Environment, Text, RoundedBox } from '@react-three/drei';

function WebPage3DModel() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.2}>
      <group ref={groupRef}>
        <RoundedBox args={[2.2, 1.4, 0.12]} radius={0.08} smoothness={4}>
          <meshPhysicalMaterial
            color="#08100c"
            metalness={0.9}
            roughness={0.15}
            clearcoat={1.0}
            emissive="#00f0ff"
            emissiveIntensity={0.3}
          />
        </RoundedBox>

        <mesh position={[0, 0.55, 0.065]}>
          <planeGeometry args={[2.15, 0.25]} />
          <meshStandardMaterial color="#0f1f18" metalness={0.8} />
        </mesh>

        <mesh position={[-0.9, 0.55, 0.07]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#ff4d4d" />
        </mesh>
        <mesh position={[-0.78, 0.55, 0.07]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#ffb700" />
        </mesh>
        <mesh position={[-0.66, 0.55, 0.07]}>
          <circleGeometry args={[0.04, 16]} />
          <meshBasicMaterial color="#00ff66" />
        </mesh>

        <mesh position={[0.1, 0.55, 0.07]}>
          <planeGeometry args={[1.3, 0.14]} />
          <meshStandardMaterial color="#050b08" />
        </mesh>
        <Text
          position={[0.1, 0.55, 0.075]}
          fontSize={0.08}
          color="#00f0ff"
          anchorX="center"
          anchorY="middle"
        >
          https://react.dev/frontend-ui
        </Text>

        <mesh position={[0, -0.1, 0.065]}>
          <planeGeometry args={[2.15, 1.0]} />
          <meshBasicMaterial color="#050b08" />
        </mesh>

        <mesh position={[-0.5, 0.15, 0.08]}>
          <planeGeometry args={[0.9, 0.3]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.45, 0.15, 0.08]}>
          <planeGeometry args={[0.8, 0.3]} />
          <meshStandardMaterial color="#6db33f" emissive="#6db33f" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, -0.25, 0.08]}>
          <planeGeometry args={[1.7, 0.35]} />
          <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={0.5} />
        </mesh>

        <Text
          position={[0, 0.95, 0]}
          fontSize={0.2}
          color="#00f0ff"
          anchorX="center"
          anchorY="middle"
        >
          REACT & HTML FRONTEND
        </Text>
      </group>
    </Float>
  );
}

function ServerBlade3DModel() {
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
      <group ref={ref}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshPhysicalMaterial
            color="#0b1a12"
            metalness={0.95}
            roughness={0.1}
            clearcoat={1}
            emissive="#10b981"
            emissiveIntensity={0.4}
          />
        </mesh>

        <mesh position={[0, 0, 0.76]}>
          <planeGeometry args={[1.3, 1.3]} />
          <meshStandardMaterial color="#0f2b1d" metalness={0.8} />
        </mesh>

        {[-0.45, -0.15, 0.15, 0.45].map((y, i) => (
          <group key={i} position={[0, y, 0.77]}>
            <mesh position={[-0.45, 0, 0]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#00ff66" />
            </mesh>
            <mesh position={[-0.25, 0, 0]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#00f0ff" />
            </mesh>
            <mesh position={[0.2, 0, 0]}>
              <boxGeometry args={[0.4, 0.08, 0.02]} />
              <meshBasicMaterial color="#10b981" />
            </mesh>
          </group>
        ))}

        <Text
          position={[0, 1.1, 0]}
          fontSize={0.22}
          color="#00ff66"
          anchorX="center"
          anchorY="middle"
        >
          SPRING BOOT ENGINE
        </Text>
      </group>
    </Float>
  );
}

function DatabaseCylinder3DModel() {
  const dbRef = useRef();

  useFrame((state, delta) => {
    if (dbRef.current) {
      dbRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
      <group ref={dbRef}>
        {[-0.5, 0, 0.5].map((y, i) => (
          <group key={i} position={[0, y, 0]}>
            <mesh>
              <cylinderGeometry args={[0.8, 0.8, 0.35, 32]} />
              <meshPhysicalMaterial color="#0f172a" metalness={0.9} roughness={0.15} clearcoat={0.8} emissive="#3b82f6" emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0, 0, 0.81]}>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color="#00f0ff" />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
}

function ToolsGear3DModel() {
  const gearRef = useRef();

  useFrame((state, delta) => {
    if (gearRef.current) {
      gearRef.current.rotation.z += delta * 0.8;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <group ref={gearRef}>
        <mesh>
          <torusGeometry args={[0.95, 0.25, 16, 32]} />
          <meshPhysicalMaterial color="#c084fc" metalness={0.95} roughness={0.1} emissive="#c084fc" emissiveIntensity={0.8} />
        </mesh>
        <mesh>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={1.4} />
        </mesh>
      </group>
    </Float>
  );
}

export function Skill3DViewer({ categoryIdx }) {
  return (
    <div className="w-full h-40 relative cursor-grab active:cursor-grabbing rounded-xl overflow-hidden terminal-window border border-[#00ff66]/30 my-3">
      <Canvas camera={{ position: [0, 0, 3.8], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} />
        <pointLight position={[-5, -5, -5]} color="#00ff66" intensity={2.0} />
        <pointLight position={[5, 5, 5]} color="#00f0ff" intensity={2.0} />

        <Environment preset="night" />

        {categoryIdx === 0 && <WebPage3DModel />}
        {categoryIdx === 1 && <ServerBlade3DModel />}
        {categoryIdx === 2 && <DatabaseCylinder3DModel />}
        {categoryIdx === 3 && <ToolsGear3DModel />}

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
