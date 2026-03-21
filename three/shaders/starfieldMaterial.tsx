"use client";

import { Color, ShaderMaterial } from "three";

type StarfieldUniforms = {
  uTime: { value: number };
  uColorA: { value: Color };
  uColorB: { value: Color };
};

export class StarfieldMaterial extends ShaderMaterial {
  declare uniforms: StarfieldUniforms;

  constructor() {
    super({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new Color("#38bdf8") },
        uColorB: { value: new Color("#a855f7") }
      },
      transparent: true,
      depthWrite: false,
      vertexShader: `
        uniform float uTime;
        varying float vNoise;
        varying float vOpacity;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        void main() {
          vec3 pos = position;
          float t = uTime * 0.08;
          float offset = hash(pos.xy) * 6.2831;
          pos.z += sin(t + offset) * 0.6;
          vNoise = hash(pos.xy * 2.0);
          vOpacity = 0.45 + vNoise * 0.55;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = 1.6 + vNoise * 2.4;
        }
      `,
      fragmentShader: `
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        varying float vNoise;
        varying float vOpacity;

        void main() {
          float d = length(gl_PointCoord - 0.5);
          float alpha = smoothstep(0.5, 0.0, d) * vOpacity;
          vec3 color = mix(uColorA, uColorB, vNoise);
          gl_FragColor = vec4(color, alpha);
        }
      `
    });
  }
}

