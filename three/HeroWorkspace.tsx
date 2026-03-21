"use client";

import { Float, Html, OrbitControls } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

type HeroWorkspaceProps = GroupProps & {
  mouse: { x: number; y: number };
};

export function HeroWorkspace({ mouse, ...rest }: HeroWorkspaceProps) {
  const rig = useRef<Mesh>(null);
  const keyboard = useRef<Mesh>(null);

  useFrame(() => {
    if (!rig.current) return;
    rig.current.rotation.y = mouse.x * 0.2;
    rig.current.rotation.x = mouse.y * 0.08;
  });

  return (
    <group {...rest}>
      <group ref={rig}>
        {/* Desk plate */}
        <mesh position={[0, -0.6, 0]} receiveShadow>
          <boxGeometry args={[3.6, 0.12, 1.9]} />
          <meshStandardMaterial color="#020617" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Center monitor */}
        <Float speed={1.4} rotationIntensity={0.12} floatIntensity={0.3}>
          <mesh position={[0, 0.4, -0.3]} castShadow>
            <boxGeometry args={[1.9, 1.1, 0.08]} />
            <meshStandardMaterial
              color="#020617"
              emissive="#22d3ee"
              emissiveIntensity={0.8}
              metalness={0.4}
              roughness={0.15}
            />
          </mesh>
          <mesh position={[0, -0.25, -0.15]}>
            <boxGeometry args={[0.18, 0.4, 0.18]} />
            <meshStandardMaterial color="#020617" metalness={0.4} roughness={0.4} />
          </mesh>
        </Float>

        {/* Side monitors */}
        <Float speed={1.7} rotationIntensity={0.16} floatIntensity={0.28}>
          <mesh position={[-1.4, 0.25, -0.18]} rotation={[0, 0.25, 0]} castShadow>
            <boxGeometry args={[1, 0.7, 0.06]} />
            <meshStandardMaterial
              color="#020617"
              emissive="#a855f7"
              emissiveIntensity={0.7}
            />
          </mesh>
        </Float>
        <Float speed={1.9} rotationIntensity={0.16} floatIntensity={0.28}>
          <mesh position={[1.4, 0.25, -0.18]} rotation={[0, -0.25, 0]} castShadow>
            <boxGeometry args={[1, 0.7, 0.06]} />
            <meshStandardMaterial
              color="#020617"
              emissive="#3b82f6"
              emissiveIntensity={0.7}
            />
          </mesh>
        </Float>

        {/* Keyboard */}
        <Float speed={2.3} floatIntensity={0.16}>
          <mesh ref={keyboard} position={[0, -0.15, 0.6]} castShadow>
            <boxGeometry args={[1.6, 0.08, 0.5]} />
            <meshStandardMaterial
              color="#020617"
              emissive="#38bdf8"
              emissiveIntensity={0.6}
              roughness={0.35}
            />
          </mesh>
        </Float>

        {/* Holographic panels */}
        <Float speed={1.4} rotationIntensity={0.22} floatIntensity={0.3}>
          <mesh position={[-1.4, 0.8, 0.3]} rotation={[0, 0.18, 0]}>
            <planeGeometry args={[1.3, 1]} />
            <meshStandardMaterial
              transparent
              opacity={0.4}
              color="#22d3ee"
              emissive="#22d3ee"
              emissiveIntensity={1.2}
            />
          </mesh>
        </Float>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.25}>
          <mesh position={[1.4, 0.9, 0.1]} rotation={[0, -0.22, 0]}>
            <planeGeometry args={[1, 0.9]} />
            <meshStandardMaterial
              transparent
              opacity={0.4}
              color="#a855f7"
              emissive="#a855f7"
              emissiveIntensity={1.2}
            />
          </mesh>
        </Float>

        {/* Orbiting tech orbs */}
        <group>
          {Array.from({ length: 8 }).map((_, index) => {
            const angle = (index / 8) * Math.PI * 2;
            const radius = 3.8;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            return (
              <Float
                key={index}
                speed={1.4 + index * 0.1}
                rotationIntensity={0.6}
                floatIntensity={0.9}
              >
                <mesh position={[x, 0.6, z]} castShadow>
                  <sphereGeometry args={[0.22, 32, 32]} />
                  <meshStandardMaterial
                    color={index % 2 === 0 ? "#22d3ee" : "#a855f7"}
                    emissive={index % 2 === 0 ? "#22d3ee" : "#a855f7"}
                    emissiveIntensity={1.6}
                    roughness={0.25}
                    metalness={0.3}
                  />
                </mesh>
              </Float>
            );
          })}
        </group>

        {/* Soft helper controls in dev (disabled for production visuals) */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          makeDefault
        />

        {/* Subtle code particle swarm */}
        <Float speed={1.6} floatIntensity={0.12} rotationIntensity={0.1}>
          <mesh position={[0, 1.8, -1.6]}>
            <boxGeometry args={[3.2, 0.08, 0.2]} />
            <meshStandardMaterial
              color="#020617"
              emissive="#38bdf8"
              emissiveIntensity={0.5}
              roughness={0.4}
            />
          </mesh>
          <Html position={[0, 1.8, -1.62]} center distanceFactor={15}>
            <div className="pointer-events-none select-none text-xs font-mono uppercase tracking-[0.3em] text-sky-300/70">
              {"<code-stream />"}
            </div>
          </Html>
        </Float>
      </group>
    </group>
  );
}

