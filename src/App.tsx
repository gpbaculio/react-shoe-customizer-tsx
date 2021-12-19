import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";

import ShoeDraco from "./ShoeDraco";
import Picker from "./Picker";

import "./App.css";

function App() {
  return (
    <>
      <Picker />
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.3} position={[5, 20, 20]} />
        <Suspense fallback={null}>
          <ShoeDraco />
          <Environment files={"je_gray_park_4k.hdr"} />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -0.8, 0]}
            opacity={0.25}
            width={10}
            height={10}
            blur={1.5}
            far={0.8}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
