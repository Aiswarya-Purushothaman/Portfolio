"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Starfield } from "./Starfield";
import { HeroWorkspace } from "./HeroWorkspace";
import type { Vector3 } from "three";

type MouseState = {
  x: number;
  y: number;
};

type SceneCanvasProps = {
  scrollProgress?: number;
};

function CameraRig({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const { camera } = useThree();

  useFrame(() => {
    const targetZ = 6.5 + scrollProgress * 4.2;
    const targetY = 0.8 - scrollProgress * 1.3;
    const targetX = scrollProgress * 0.8;

    const current = camera.position as Vector3;
    current.x += (targetX - current.x) * 0.06;
    current.y += (targetY - current.y) * 0.06;
    current.z += (targetZ - current.z) * 0.06;
    camera.lookAt(0, 0.2, 0);
  });

  return null;
}

export function SceneCanvas({ scrollProgress = 0 }: SceneCanvasProps) {
  const [mouse, setMouse] = useState<MouseState>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.8, 6.5], fov: 50 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#020617"]} />
        <fog attach="fog" args={["#020617", 6, 18]} />

        <CameraRig scrollProgress={scrollProgress} />

        {/* Lights */}
        <ambientLight intensity={0.35} />
        <directionalLight
          position={[4, 6, 3]}
          intensity={1.5}
          color="#38bdf8"
          castShadow
        />
        <directionalLight
          position={[-5, 3, 2]}
          intensity={1.1}
          color="#a855f7"
        />
        <pointLight position={[0, 4, -4]} intensity={0.8} color="#22d3ee" />

        {/* Immersive background */}
        <Starfield />

        {/* Futuristic workspace hero */}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <group position={[0, -0.4, 0]} castShadow receiveShadow>
          <HeroWorkspace mouse={mouse} />
        </group>

        {/* Post-processing for cinematic feel */}
        <EffectComposer multisampling={4}>
          <Bloom
            intensity={1.1}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.45}
          />
          <Vignette eskil offset={0.18} darkness={0.85} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

