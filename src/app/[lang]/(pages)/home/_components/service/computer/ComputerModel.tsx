import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

export function ComputerModel(props: any) {
  const { nodes, materials } = useGLTF(`/computerModel.glb`) as any;
  return (
    <group {...props} dispose={null}>
      <group position={[0.121, 0.007, 0]}>
        <mesh geometry={(nodes.Object_6 as Mesh).geometry} material={materials.MacBookPro} />
        <mesh geometry={(nodes.Object_8 as Mesh).geometry} material={materials.MacBookPro} />
      </group>
      <mesh geometry={(nodes.Object_4 as Mesh).geometry} material={materials.MacBookPro} />
    </group>
  );
}
useGLTF.preload(`/computerModel.glb`);
