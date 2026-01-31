import { useRef, useState } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AnimatedModel() {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const { scene } = useGLTF("/models/asus_tuf_laptop.glb");

  // Procedural animation
  useFrame(({ mouse }) => {
    if (!ref.current) return;

    if (hovered) {
      ref.current.rotation.y = mouse.x * Math.PI * 0.4;
      ref.current.rotation.x = mouse.y * Math.PI * 0.2;
    } else {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Center>
      <primitive
        ref={ref}
        object={scene}
        scale={2}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
    </Center>
  );
}

export default AnimatedModel;