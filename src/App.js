// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import { Box } from './Box';
import { FirstPersonController } from './FPSController';

function App() {
  return (
    <Canvas>
      <PointerLockControls />
      <FirstPersonController />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={'lightgray'} />
      </mesh>
      <Box position={[-1, 0.5, 0]} />
    </Canvas>
  );
}

export default App;
