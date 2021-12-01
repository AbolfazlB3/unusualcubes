import "./Homepage.css";
import * as THREE from "three";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import React, { Suspense, useRef, useState } from "react";

import Text from "../../test/Text";

import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import {
  OrbitControls,
  ContactShadows,
  Environment,
  Plane,
} from "@react-three/drei";
import ItemPage from "../item-page/ItemPage";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Homepage() {
  //const gltf = useLoader(GLTFLoader, "data/model.glb");

  return (
    <div className="">
      <h1 style={{ color: "#ffffff" }}> HomePage </h1>
      <br />
      <Link to="/item/1">To Item Page</Link>
      {/* <primitive object={gltf.scene} /> */}

      {/*<div className="canvas-holder"></div>
       <Canvas
        linear
        dpr={[1, 2]}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl }) => {
          //gl.toneMapping = THREE.Uncharted2ToneMapping;
          //gl.setClearColor(new THREE.Color("#0a1022"));
        }}
        //shadowMap
      >
        <directionalLight
          castShadow
          position={[-10, 10, 10]}
          intensity={1}
          //shadow-mapSize-width={1024}
          //shadow-mapSize-height={1024}
        />
        <pointLight position={[10, 10, 10]} intensity={0} color={"#ff0000"} />
        <OrbitControls />

        <Suspense fallback={null}>
          <Text> Hello </Text>
        </Suspense>

        <Plane args={[1000, 1000]}>
          <meshStandardMaterial attach="material" color="#888" />
        </Plane>

        <Suspense fallback={null}>
          <Environment
            background={true} // Whether to affect scene.background
            files={["courtyard.jpg"]} // Array of cubemap files OR single equirectangular file
            path={"/"} // Path to the above file(s)
            //preset={null} // Preset string (overrides files and path)
          />
        </Suspense>
        <ContactShadows />
      </Canvas>
      </div> */}
    </div>
  );
}

export default Homepage;
