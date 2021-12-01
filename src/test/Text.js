import * as THREE from "three";
import React, { useMemo, useRef, useLayoutEffect } from "react";
import { extend, useLoader } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import BASEPATH from "../basepath";

extend({ TextGeometry });

function Text({
  children,
  vAlign = "center",
  hAlign = "center",
  size = 1.5,
  color = "#000000",
  ...props
}) {
  const font = useLoader(FontLoader, BASEPATH + "/CocoSharp.json");
  const config = useMemo(
    () => ({
      font,
      size: 40,
      height: 30,
      curveSegments: 12,
      bevelEnabled: false,
      flatShading: false,
    }),
    [font]
  );
  const mesh = useRef();

  useLayoutEffect(() => {
    const size = new THREE.Vector3();
    mesh.current.geometry.computeBoundingBox();
    mesh.current.geometry.boundingBox.getSize(size);
    mesh.current.position.x =
      hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
    mesh.current.position.y =
      vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
  }, [children]);

  return (
    <group {...props} scale={[size * 0.05, size * 0.05, size * 0.04]}>
      <mesh ref={mesh} castShadow receiveShadow>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshPhysicalMaterial
          attach="material"
          color="#ffffff"
          flatShading={false}
          roughness={0.05}
          needsUpdate={true}
        />
      </mesh>
    </group>
  );
}

export default Text;
