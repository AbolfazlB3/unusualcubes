import * as THREE from "three";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import React, { Suspense, useRef, useState, useMemo, useEffect } from "react";

import { useLoader, Canvas, useFrame, useThree } from "@react-three/fiber";
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
} from "@react-three/drei";
import BASEPATH from "../../basepath";

import * as IPFS from "ipfs-http-client";

async function load_model() {
  return fetch(
    //"https://gateway.pinata.cloud/ipfs/Qmf6gwEkmkW6VTEsku8nenQVroV9A7wuPKKSX7YCtbNwmf"
    "https://ipfs.io/ipfs/Qmf6gwEkmkW6VTEsku8nenQVroV9A7wuPKKSX7YCtbNwmf",
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "force-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        //'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
  );
  //return response.json(); // parses JSON response into native JavaScript objects
}

function UnusualCube({ url = BASEPATH + "/model_6.glb", receiveShadow }) {
  //const three = useThree();
  //const { size, viewport, gl, camera, clock } = three;

  const model = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  //const req = load_model();

  // req.then((res) => {
  //   console.log(res);
  // });

  /*[
    {
      "path": "model_7.glb",
      "hash": "Qmf6gwEkmkW6VTEsku8nenQVroV9A7wuPKKSX7YCtbNwmf",
      "size": 289468
    }
  ]*/

  const { scene, nodes, materials, animations } = useGLTF(url);

  const { ref, mixer, names, actions, clips } = useAnimations(
    animations,
    scene
  );

  console.log("nodes", nodes);
  useEffect(() => {
    console.log("actions:", actions);
    Object.values(actions).forEach((action, i) => {
      action.play();
    });
  }, []);

  for (let child of Object.values(nodes)) {
    child.castShadow = true;
    child.receiveShadow = Boolean(receiveShadow);
  }
  /*
  const parts = Object.values(nodes).filter((node) => node.type === "Mesh");


  // Render-loop
  useFrame(() => {
    // Update instanced diamonds
    parts.forEach((part, i) => {
      const { position, rotation, scale } = part;
      dummy.position.set(position.x, position.y, position.z);
      dummy.rotation.set(rotation.x, rotation.y, rotation.z);
      dummy.scale.set(scale.x, scale.y, scale.z);
      dummy.updateMatrix();
      model.current.setMatrixAt(i, dummy.matrix);
      model.current.setColorAt(i, part.material.color);
    });
    model.current.instanceMatrix.needsUpdate = true;

    camera.layers.set(0);
    gl.setRenderTarget(null);
    gl.render(three.scene, camera);
  }, 1);*/

  return (
    <group scale={[0.5, 0.5, 0.5]} position={[-4.5, -4.5, 4.5]}>
      <primitive object={scene} />
      {/* <instancedMesh
        ref={model}
        args={[
          parts[0].geometry,
          new THREE.MeshPhysicalMaterial({
            roughness: parts[0].material.roughness,
          }),
          parts.length,
        ]}
        castShadow
      ></instancedMesh> */}
    </group>
  );
}

export default UnusualCube;
