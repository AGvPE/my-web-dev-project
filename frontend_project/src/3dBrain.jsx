// BrainModel.jsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Brain() {
  const { scene } = useGLTF('/homepage/Brain.glb'); // adjust path as needed
  return <primitive object={scene} scale={0.5} />;
}

export default function BrainModel() {
  return (
    <Canvas style={{ width: '600px', height: '600px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <OrbitControls enableZoom={true} />
      <Brain />
    </Canvas>
  );
}
// vite-project/src/3d.jsx