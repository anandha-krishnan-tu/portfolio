import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";
import AnimatedModel from "./AnimatedModel";

function AnimatedCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 6, 6]} intensity={1.3} />

        <AnimatedModel />

        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}

export default AnimatedCanvas;