// FirstPersonController.js
import React, { useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FirstPersonController() {
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);

  const speed = 0.1;

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'KeyW':
          setMoveForward(true);
          break;
        case 'KeyS':
          setMoveBackward(true);
          break;
        case 'KeyA':
          setMoveLeft(true);
          break;
        case 'KeyD':
          setMoveRight(true);
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW':
          setMoveForward(false);
          break;
        case 'KeyS':
          setMoveBackward(false);
          break;
        case 'KeyA':
          setMoveLeft(false);
          break;
        case 'KeyD':
          setMoveRight(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state) => {
    const camera = state.camera;
    const direction = new THREE.Vector3(); // Create a new vector for direction

    // Update the direction vector based on the camera's orientation
    camera.getWorldDirection(direction);
    direction.y = 0; // Prevent upward/downward movement
    direction.normalize(); // Normalize the direction vector

    // Calculate right vector
    const right = new THREE.Vector3();
    right.crossVectors(direction, new THREE.Vector3(0, 1, 0)); // Get the right vector based on the direction

    // Move the camera based on key presses
    if (moveForward) camera.position.addScaledVector(direction, speed);
    if (moveBackward) camera.position.addScaledVector(direction, -speed);
    if (moveLeft) camera.position.addScaledVector(right, -speed);
    if (moveRight) camera.position.addScaledVector(right, speed);
  });

  return null; // This component does not render anything itself
}
