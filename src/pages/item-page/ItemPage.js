import "./ItemPage.css";
import * as THREE from "three";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import React, { Suspense, useRef, useState, useMemo, useEffect } from "react";

import Text from "../../test/Text";

import { useLoader, Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { TextureLoader } from "three/src/loaders/TextureLoader";

import {
  OrbitControls,
  ContactShadows,
  Environment,
  Plane,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import BASEPATH from "../../basepath";

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

function GroundPlane({ bgcolor }) {
  //roundshadow.png
  const alphaMap = useLoader(TextureLoader, BASEPATH + "/alphamap.jpg");

  return (
    <Plane
      args={[100, 100]}
      receiveShadow
      rotation-x={-Math.PI / 2}
      position={[0, -12, 0]}
    >
      <meshPhysicalMaterial
        attach="material"
        color={bgcolor}
        roughness={0.5}
        transparent
        opacity={0.3}
        alphaMap={alphaMap}
      />
    </Plane>
  );
}

function UnusualCube() {
  const { scene, nodes, materials, animations } = useGLTF(
    BASEPATH + "/model_2.glb"
  );
  const { ref, mixer, names, actions, clips } = useAnimations(
    animations,
    scene
  );
  useEffect(() => {
    //actions?.jump.play();
  });

  for (let child of scene.children[0].children) {
    child.castShadow = true;
    //child.receiveShadow = true;
  }

  console.log(nodes);
  console.log(typeof nodes);

  return (
    <group scale={[0.5, 0.5, 0.5]} position={[-5, -5, 5]}>
      <primitive object={scene} />
      {/*       
      {Object.values(nodes)
        .filter((node) => node.name.startsWith("main_mesh"))
        .map((node) => (
          <primitive object={node} key={node.name} />
        ))}
      {/* <mesh>
        <boxGeometry attach="geometry" />
        <meshPhysicalMaterial attach="material" color="white" />
      </mesh> */}
    </group>
  );
}

function ItemPage() {
  //const gltf = useLoader(GLTFLoader, "data/model.glb");

  /*
  const directionalLight1 = useMemo(
    () => new THREE.DirectionalLight(0xffffff),
    []
  );*/

  const [state, setState] = useState(false);
  const [texx, setTexx] = useState("");

  const [bgcolor, setBgcolor] = useState("#0a1022");

  return (
    <div className="page">
      <div className="canvas-holder" style={{ background: bgcolor }}>
        {/* <primitive object={gltf.scene} /> */}
        <Canvas
          linear
          dpr={[1, 2]}
          camera={{ fov: 65, position: [15, 12, 15] }}
          onCreated={({ gl }) => {
            //gl.toneMapping = THREE.Uncharted2ToneMapping;
            //gl.setClearColor(new THREE.Color(bgcolor));
          }}
          colorManagement
          shadowMap
          shadows
        >
          <pointLight
            //object={directionalLight1}
            castShadow
            position={[-10, 20, 10]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          {/* <primitive object={directionalLight1.target} position={[0, 0, 0]}/> */}
          {/* <pointLight position={[10, 10, 10]} intensity={0.1} color={"#ff0000"} /> */}
          <OrbitControls minDistance={10} maxDistance={100} enablePan={false} />

          <Suspense fallback={null}>
            <Text>{texx}</Text>
            <GroundPlane bgcolor={bgcolor} />
          </Suspense>
          <Suspense fallback={null}>
            <Environment
              background={false} // Whether to affect scene.background
              files="abandoned_workshop_1k_small.hdr" // Array of cubemap files OR single equirectangular file
              path={BASEPATH + "/"} // Path to the above file(s)
              //preset={null} // Preset string (overrides files and path)
            />
          </Suspense>
          <Suspense fallback={null}>
            <UnusualCube />
          </Suspense>
          {/* <ContactShadows /> */}
          {/* <fog args={["white", 10, 50]} /> */}
        </Canvas>
      </div>

      <div className="ui">
        <button
          onClick={() => {
            setState(!state);
            console.log(state);
            setBgcolor("#" + Math.floor(Math.random() * 16777215).toString(16));
          }}
        >
          Random Color
        </button>
        <input value={texx} onChange={(e) => setTexx(e.target.value)}></input>
      </div>
    </div>
  );
}

export default ItemPage;
