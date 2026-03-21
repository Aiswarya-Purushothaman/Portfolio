"use client";

import { useMemo, useRef } from "react";
import { Points } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Group } from "three";
import { StarfieldMaterial } from "./shaders/starfieldMaterial";

const STAR_COUNT = 3500;

export function Starfield() {
  const positions = useMemo(() => {
    const arr = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 80;
      arr[i + 1] = (Math.random() - 0.5) * 80;
      arr[i + 2] = (Math.random() - 0.5) * 80;
    }
    return arr;
  }, []);

  const material = useMemo(() => new StarfieldMaterial(), []);
  const group = useRef<Group>(null);
  const { mouse } = useThree();

  useFrame((_, delta) => {
    material.uniforms.uTime.value += delta;

    if (group.current) {
      group.current.rotation.y += (mouse.x * 0.35 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (mouse.y * 0.2 - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Points positions={positions} frustumCulled>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <primitive object={material} attach="material" />
      </Points>
    </group>
  );
}

