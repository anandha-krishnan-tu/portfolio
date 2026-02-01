import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

useGLTF.preload("/models/laptop.glb");

function ThreeD() {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { viewport } = useThree();

  const scale = Math.min(viewport.width,viewport.height) * 0.02;

  const { scene } = useGLTF("/models/laptop.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    if (hovered) {
      ref.current.rotation.y = mouse.x * Math.PI * 0.5;
    //   ref.current.rotation.x = mouse.y * Math.PI * 0.3;
    } else {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Center>
      <primitive
        ref={ref}
        object={scene}
        scale={scale}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
    </Center>
  );
}

export default ThreeD;
