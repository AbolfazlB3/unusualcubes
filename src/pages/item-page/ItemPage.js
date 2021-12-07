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
  AdaptiveDpr,
  Merged,
  Sky,
  Html,
  softShadows,
} from "@react-three/drei";
import BASEPATH from "../../basepath";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { Object3D } from "three";
import UnusualCube from "../../components/UnusualCube/UnusualCube";

var mix = function (color_1, color_2, weight) {
  function d2h(d) {
    return d.toString(16);
  } // convert a decimal value to hex
  function h2d(h) {
    return parseInt(h, 16);
  } // convert a hex value to decimal

  weight = typeof weight !== "undefined" ? weight : 50; // set the weight to 50%, if that argument is omitted

  var color = "#";

  for (var i = 0; i <= 5; i += 2) {
    // loop through each of the 3 hex pairs—red, green, and blue
    var v1 = h2d(color_1.substr(i + 1, 2)), // extract the current pairs
      v2 = h2d(color_2.substr(i + 1, 2)),
      // combine the current pairs from each source color, according to the specified weight
      val = d2h(Math.floor(v2 + (v1 - v2) * (weight / 100.0)));

    while (val.length < 2) {
      val = "0" + val;
    } // prepend a '0' if val results in a single digit

    color += val; // concatenate val to our new color string
  }

  return color; // PROFIT!
};

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

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16) / 255.0,
        g: parseInt(result[2], 16) / 255.0,
        b: parseInt(result[3], 16) / 255.0,
      }
    : null;
}

function GroundPlane({ bgcolor }) {
  const alphaMap = useLoader(TextureLoader, BASEPATH + "/alphamap.jpg");

  const [currentColor, setCurrentColor] = useState(bgcolor);
  const color = useRef(bgcolor);
  const time = useRef(0);
  const mat = useRef();
  const STEP = 0.01;

  useFrame(({ clock }) => {
    const now = clock.getElapsedTime();
    //console.log(now);
    if (now - time.current > STEP) {
      time.current = now;
      const c = mix(bgcolor, color.current, 3); // 3%
      color.current = c;
      mat.current.color = hexToRgb(c);
    }
    //console.log(mat.current.color);
  });

  return (
    <Plane
      args={[100, 100]}
      receiveShadow
      rotation-x={-Math.PI / 2}
      position={[0, -12, 0]}
      //onClick={() => setActive(Number(!active))}
    >
      <meshPhysicalMaterial
        ref={mat}
        attach="material"
        //color={bgcolor}
        roughness={0.5}
        transparent
        opacity={0.99}
        alphaMap={alphaMap}
      />
    </Plane>
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
  const [texx, setTexx] = useState(
    "https://ipfs.io/ipfs/Qmf6gwEkmkW6VTEsku8nenQVroV9A7wuPKKSX7YCtbNwmf"
  );
  const [modelUrl, setModelUrl] = useState(
    "https://ipfs.io/ipfs/Qmf6gwEkmkW6VTEsku8nenQVroV9A7wuPKKSX7YCtbNwmf"
  );

  const [bgcolor, setBgcolor] = useState("#0a1022");
  /*
  const [colorAnimActive, setColorAnimActive] = useState(0);

  const { spring } = useSpring({
    spring: active,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  });

  const color = spring.to([0, 1], ["#000000", "#ffffff"]);*/

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
          mode="concurrent"
        >
          <AdaptiveDpr pixelated />
          <pointLight position={[-5, 30, -12]} intensity={0.3} />
          <spotLight
            castShadow
            //shadow-radius={0}
            shadow-bias={-0.001}
            position={[-10, 20, 10]}
            intensity={1}
            shadow-mapSize-width={512}
            shadow-mapSize-height={512}
            angle={Math.PI / 5}
            penumbra={1}
          />
          <pointLight
            position={[10, 20, -5]}
            intensity={0.3}
            color={"#fffaf0"}
          />
          {/* <primitive object={directionalLight1.target} position={[0, 0, 0]}/> */}
          <OrbitControls minDistance={10} maxDistance={100} enablePan={false} />

          <Suspense fallback={null}>
            {/* <Text>{texx}</Text> */}
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
            <UnusualCube
              url={
                modelUrl
                //"https://ipfs.io/ipfs/Qmf6gwEkmkW6VTEsku8nenQVroV9A7wuPKKSX7YCtbNwmf"
              }
              receiveShadow
            />
          </Suspense>
          {/* <ContactShadows width={200} height={200} position-y={-10} far={20} /> */}
          {/* <Sky sunPosition={[100, -3, -50]} distance={1000} /> */}
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
        <div className="ui__url">
          <input
            style={{ flex: 1 }}
            value={texx}
            onChange={(e) => setTexx(e.target.value)}
          ></input>
          <button onClick={() => setModelUrl(texx)}>Load</button>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
