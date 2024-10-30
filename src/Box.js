// Box.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function Box(props) {
  const mesh = useRef();

  // Rotate the box on every frame
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}
