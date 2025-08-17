import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, AdaptiveDpr, AdaptiveEvents, Preload } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import model3d from "./assets/msuguiderv2.glb";
import "./i18n.js";

function AnimatedModel() {
  const { scene } = useGLTF(model3d, true);
  const cloned = useMemo(() => scene.clone(true), [scene]);
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    // โมเดลเลื่อนลง 150px (ประมาณ 1.5 หน่วยใน 3D)
    const baseY = -1.5;
    const bob = Math.sin(t * 1.2) * 0.1; // ขยับขึ้นลงตลอดเวลา
    const sway = Math.sin(t * 0.5) * 0.05;
    ref.current.position.y = baseY + bob;
    ref.current.rotation.y = sway;
  });

  return <primitive ref={ref} object={cloned} scale={1.35} position={[0, -1.5, 0]} />;
}

useGLTF.preload(model3d);

export default function My3DScene() {
  const { t, i18n } = useTranslation();
  const messages =
    location.pathname === "/places"
      ? [t("placesPage.header"), t("placesPage.description")]
      : [t("welcome"), t("welcome2")];

  return (
    <div className="fixed bottom-[-15%] right-[-5%] z-10">
      <div className="relative w-[250px] h-[350px] md:w-[320px] md:h-[420px]">
        {/* กล่องข้อความทับมุมซ้ายบนของโมเดล */}
        <div className="absolute top-[-25%] left-[-25%] text-white shadow-sm text-sm md:text-base font-light p-2 md:p-3 rounded bg-black/70 backdrop-blur-sm w-[180px] md:w-[220px]">
          <Typewriter
            options={{
              strings: messages,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
              pauseFor: 1200,
            }}
          />
        </div>

        {/* โมเดล 3D */}
        <Canvas
          camera={{ position: [2, 2.5, 5], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          frameloop="always"
        >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 4]} intensity={0.8} />

          <OrbitControls
            makeDefault
            enableZoom={false}
            enableDamping
            dampingFactor={0.15}
            rotateSpeed={0.6}
            target={[0, -1.2, 0]}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />

          <Suspense
            fallback={
              <Html center>
                <div className="text-gray-700 text-sm md:text-base">
                  {t("loading") || "Loading..."}
                </div>
              </Html>
            }
          >
            <AnimatedModel />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
