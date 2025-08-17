import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import model3d from "./assets/msuguider3.glb";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import "./i18n.js";

const AnimatedModel = () => {
  const { scene } = useGLTF(model3d);

  const { positionY } = useSpring({
    from: { positionY: 0 },
    to: { positionY: 0.3 },
    config: { duration: 1000 },
    loop: { reverse: true },
  });

  const { positionX } = useSpring({
    from: { positionX: 5 },
    to: { positionX: 0 },
    config: { duration: 1000 },
  });

  return (
    <a.primitive
      object={scene}
      scale={1}
      position-y={positionY}
      position-x={positionX}
    />
  );
};

const My3DScene = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-white z-10 flex items-center justify-center">
        <div className="text-center">
          <div
            data-aos="fade-left"
            className="text-white shadown-sm text-xl font-light p-3 rounded mb-4 absolute bg-black/70 backdrop-blur-sm right-20 w-[150px] bottom-8้"
          >
            <Typewriter
              options={{
                strings: [t("welcomemsu"), t("wheretogo")],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </div>
          <div className="w-[250px] h-[250px] md:w-[500px] md:h-[500px]">
            <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[2, 2, 4]} />
              <OrbitControls
                enableZoom={false}
                target={[0, 1, 0]}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
              <AnimatedModel />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My3DScene;
