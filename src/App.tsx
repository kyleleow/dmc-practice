import "./App.css";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Scene } from "./Scene";
import { OrbitControls } from "@react-three/drei";

function MyRotatingModel() {
  const myMesh = useRef<MeshProps>();

  useFrame(({ clock }) => {
    if (myMesh === undefined || myMesh.current === undefined) return;
    // const a = clock.getElapsedTime();
    // myMesh.current.rotation.x = a;
    // myMesh.current.position.y = Math.sin(a)
    // myMesh.current.position.x = Math.sin(a)
    // myMesh.current.position.z = Math.sin(a) - 2
  });

  return (
    <mesh castShadow ref={myMesh} position={[0, 0, -4]} rotation={[-1.5, 0, 0]}>
      {/* <boxBufferGeometry /> */}
      {/* <meshPhongMaterial color="royalblue" /> */}
      {/* <SpotLight
        color="#0EEC82"
        castShadow
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={40}
        distance={8}
        angle={0.45}
        attenuation={20}
        anglePower={5}
        intensity={100}
        opacity={0.2}
      /> */}
      <Scene />
    </mesh>
  );
}

export default function App() {
  return (
    <div className="App">
      <Canvas>
        {/* <fog attach="fog" color="hotpink" near={1} far={100} /> */}
        {/* <color attach="background" args={['#61dafb']} /> */}
        <color attach="background" args={["#000000"]} />
        <OrbitControls />
        <MyRotatingModel />
        <ambientLight intensity={0.5} />
        <directionalLight />
        {/* <directionalLight castShadow position={[2.5, 8, 5]} shadow-mapSize={[1024, 1024]}> */}
        {/* <directionalLight castShadow position={[1, -2, 0]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
        </directionalLight> */}
      </Canvas>
    </div>
  );
}
