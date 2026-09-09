import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, ContactShadows, Html, Float } from '@react-three/drei';
import { AlertTriangle, Loader2 } from 'lucide-react';

function ModelRenderer({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const modelRef = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

function CanvasLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 p-3 rounded bg-slate-950/90 border border-[#00ff66]/40 text-[#00ff66] font-mono text-xs shadow-2xl">
        <Loader2 className="w-5 h-5 animate-spin text-[#00ff66]" />
        <span>Loading GLTF/GLB 3D Model...</span>
      </div>
    </Html>
  );
}

class GLTFErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Html center>
          <div className="p-3 rounded bg-slate-950/90 border border-amber-500/40 text-amber-300 font-mono text-xs shadow-xl text-center max-w-xs">
            <AlertTriangle className="w-5 h-5 mx-auto mb-1 text-amber-400" />
            <span>GLB file path "{this.props.modelPath}" ready for upload. Drop your .glb model into /public/models/</span>
          </div>
        </Html>
      );
    }
    return this.props.children;
  }
}

export function GLTFModelViewer({
  modelPath = "/models/laptop.glb",
  scale = 1.5,
  position = [0, -0.5, 0],
  rotation = [0, 0, 0],
  height = "450px"
}) {
  return (
    <div className={`w-full relative rounded-xl overflow-hidden terminal-window cursor-grab active:cursor-grabbing my-2`} style={{ height }}>
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 10]} intensity={1.8} castShadow />
        <pointLight position={[-10, -10, -10]} color="#00ff66" intensity={1.5} />
        
        <Environment preset="night" />

        <Suspense fallback={<CanvasLoader />}>
          <GLTFErrorBoundary modelPath={modelPath}>
            <ModelRenderer
              modelPath={modelPath}
              scale={scale}
              position={position}
              rotation={rotation}
            />
          </GLTFErrorBoundary>
        </Suspense>

        <ContactShadows position={[0, -1.2, 0]} opacity={0.7} scale={10} blur={2.5} far={4} color="#00ff66" />
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}
