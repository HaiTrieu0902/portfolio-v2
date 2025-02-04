import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

export function ConsoleModel(props: any) {
  const { nodes, materials } = useGLTF(`/consoleModel.glb`) as any;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.112}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={(nodes.Cube_Material_0 as Mesh).geometry}
            material={materials.Material}
            position={[0, 21.93, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(`/consoleModel.glb`);
