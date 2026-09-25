"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

function Sculpture({ reduced }: { reduced: boolean }) {
 const group = useRef<THREE.Group>(null); const orb = useRef<THREE.Mesh>(null);
 useFrame(({ pointer }, d) => { if (!group.current || reduced) return; group.current.rotation.y += d*.055; group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y*.09, .028); group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.x*.075, .028); if(orb.current) orb.current.rotation.y -= d*.12; });
 return <group ref={group}><Float speed={reduced?0:0.75} floatIntensity={reduced?0:.16}><mesh castShadow><icosahedronGeometry args={[1.32, 8]}/><MeshDistortMaterial color="#202627" metalness={.76} roughness={.42} distort={reduced?0:.08} speed={.35}/></mesh><mesh scale={1.014}><icosahedronGeometry args={[1.32,3]}/><meshBasicMaterial color="#8b9693" wireframe transparent opacity={.065}/></mesh><mesh rotation={[1.15,.1,.5]}><torusGeometry args={[1.8,.018,12,180]}/><meshStandardMaterial color="#d9ded8" metalness={.7}/></mesh><mesh rotation={[.2,.6,-.65]}><torusGeometry args={[1.58,.012,12,180]}/><meshStandardMaterial color="#8cff3f" emissive="#4b9b22" emissiveIntensity={1.2}/></mesh><mesh ref={orb} position={[1.35,-.85,.45]}><sphereGeometry args={[.28,24,24]}/><MeshTransmissionMaterial thickness={.5} roughness={.12} chromaticAberration={.04}/></mesh></Float></group>;
}
export default function HeroScene(){ const prefersReduced=useReducedMotion();const[compact,setCompact]=useState(false);useEffect(()=>{const query=matchMedia("(max-width: 767px)");const update=()=>setCompact(query.matches);update();query.addEventListener("change",update);return()=>query.removeEventListener("change",update)},[]);const reduced=Boolean(prefersReduced||compact);return <Canvas frameloop={prefersReduced?"demand":"always"} dpr={compact?[1,1]:[1,1.5]} camera={{position:[0,0,5.6],fov:42}} gl={{antialias:true,alpha:true,powerPreference:"high-performance"}}><ambientLight intensity={1.7}/><directionalLight position={[3,4,5]} intensity={4} color="#ffffff"/><pointLight position={[-3,-1,2]} intensity={12} color="#8cff3f"/><Sculpture reduced={reduced}/>{!reduced&&<Sparkles count={14} scale={5} size={1.1} speed={.15} opacity={.2}/>}</Canvas> }
