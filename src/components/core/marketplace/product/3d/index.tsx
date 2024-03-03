'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Mesh } from 'three';

const MarketPlace3DRenderPortal = () => {
  const fileUrl = `/youtube2.glb`;
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(
    GLTFLoader,
    `https://perfect-buffalo-199.convex.cloud/api/storage/6f874ec5-3236-4ccb-8a37-213aa3f217b0`
  );

  //   useFrame(() => {
  //     mesh.current.rotation.y += 0.01;
  //   });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default MarketPlace3DRenderPortal;
