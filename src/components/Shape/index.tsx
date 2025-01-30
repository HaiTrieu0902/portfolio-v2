'use client';
import { Billboard, MeshDistortMaterial, Sphere, Text } from '@react-three/drei';
import { Fragment } from 'react';

const Shape = () => {
  return (
    <Fragment>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial color="#DB8B9B" attach="material" distort={0.5} speed={2} />
      </Sphere>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 2, 3]} />
    </Fragment>
  );
};

export default Shape;
