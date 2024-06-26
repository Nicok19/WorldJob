import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three'; 
import * as THREE from 'three';
import './3d.css';

interface WorldSphereProps {
  size: [number, number, number];
}

function WorldSphere({ size }: WorldSphereProps) {
  const texture = new TextureLoader().load('/world_texture.jpg');

  return (
    <Sphere args={size}>
      <meshPhysicalMaterial map={texture} />
    </Sphere>
  );
}

function RotatingWorldSphere({ size }: WorldSphereProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={mesh}>
      <WorldSphere size={size} />
    </mesh>
  );
}

function World() {
  const [sphereSize, setSphereSize] = useState<[number, number, number]>([3, 32, 32]);

  useEffect(() => {
    const updateSphereSize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        // Small screens
        setSphereSize([0, 0, 0]);
      } else if (width >= 768 && width < 1500) {
        // Medium screens
        setSphereSize([2, 32, 32]);
      } else {
        // Large screens
        setSphereSize([3, 32, 32]);
      }
    };

    updateSphereSize();
    window.addEventListener('resize', updateSphereSize);
    
    return () => {
      window.removeEventListener('resize', updateSphereSize);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={2.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <RotatingWorldSphere size={sphereSize} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default World;







