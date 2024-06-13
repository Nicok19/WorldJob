import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three'; 
import './3d.css';

function WorldSphere() {
  const texture = new TextureLoader().load('/world_texture.jpg');

  return (
    <Sphere args={[3, 32, 32]}>
      <meshPhysicalMaterial map={texture} />
    </Sphere>
  );
}

function World() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <RotatingWorldSphere />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function RotatingWorldSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.elapsedTime * 0.1;
    }
  });

  const texture = new TextureLoader().load('/world_texture.jpg');

  return (
    <mesh ref={mesh}>
      <WorldSphere />
    </mesh>
  );
}

export default World;






