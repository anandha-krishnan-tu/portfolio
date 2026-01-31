import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import ThreeD from "./ThreeD";

function ThreeDCanvas() {
    return(
        <Canvas
            camera={{position: [0,0,3], fov: 45}}
            style={{ width: "100%", height: "100%"}}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />

                <directionalLight
                    position={[15,3,5]}
                    intensity={1.5}
                    castShadow
                />

                <pointLight position={[-5,-2,-5]} intensity={0.5} />

                <Environment preset="night" />

                <ThreeD />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />

            </Suspense>

        </Canvas>
    );
}

export default ThreeDCanvas;