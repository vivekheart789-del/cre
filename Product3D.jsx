import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html, useGLTF } from "@react-three/drei";

export const Product3D = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

export const ProductCanvas = ({ modelPath }) => (
  <div className="h-64">
    <Canvas>
      <Suspense fallback={<Html>Loading...</Html>}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls enableZoom={true} enablePan={false} />
        <Product3D modelPath={modelPath} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  </div>
);
