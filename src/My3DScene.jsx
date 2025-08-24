import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Html,
  AdaptiveDpr,
  AdaptiveEvents,
  Preload,
} from "@react-three/drei";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { Volume2, VolumeX, Play, Pause, RotateCcw } from "lucide-react";
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

  return (
    <primitive ref={ref} object={cloned} scale={1.35} position={[0, -1.5, 0]} />
  );
}

// Audio Controller Component
function AudioController({ selectedPlace, audioTranscripts, onAudioStateChange, currentLanguage }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState(null);
  const [error, setError] = useState(null);
  const [typewriterKey, setTypewriterKey] = useState(0); // Force re-render typewriter
  const [audioProgress, setAudioProgress] = useState(0);
  const typewriterRef = useRef(null);

  // Audio controls
  const playAudio = async () => {
    if (!selectedPlace?.audioUrls || !currentLanguage) return;

    try {
      setIsLoading(true);
      setError(null);
      
      // หยุดเสียงเก่าก่อน (ถ้ามี)
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }

      // สร้าง audio object ใหม่
      const audioUrl = selectedPlace.audioUrls[currentLanguage];
      if (!audioUrl) {
        // fallback to other languages
        const fallbackUrl = selectedPlace.audioUrls.th || selectedPlace.audioUrls.en || selectedPlace.audioUrls.zh;
        if (!fallbackUrl) {
          setError('ไม่พบไฟล์เสียงสำหรับภาษานี้');
          return;
        }
      }

      const newAudio = new Audio(audioUrl || selectedPlace.audioUrls.th);
      
      // Audio event listeners
      newAudio.addEventListener('loadstart', () => {
        setIsLoading(true);
      });

      newAudio.addEventListener('canplay', () => {
        setIsLoading(false);
      });

      newAudio.addEventListener('play', () => {
        setIsPlaying(true);
      });

      newAudio.addEventListener('pause', () => {
        setIsPlaying(false);
      });

      newAudio.addEventListener('ended', () => {
        setIsPlaying(false);
        setAudioProgress(0);
      });

      newAudio.addEventListener('timeupdate', () => {
        if (newAudio.duration) {
          setAudioProgress((newAudio.currentTime / newAudio.duration) * 100);
        }
      });

      newAudio.addEventListener('error', (e) => {
        setError('ไม่สามารถโหลดไฟล์เสียงได้');
        setIsLoading(false);
        setIsPlaying(false);
      });

      setAudio(newAudio);
      
      // เล่นเสียง
      await newAudio.play();
      
      // Force restart typewriter
      setTypewriterKey(prev => prev + 1);

    } catch (error) {
      console.error('Audio play error:', error);
      setError('ไม่สามารถเล่นเสียงได้');
      setIsLoading(false);
    }
  };

  const pauseAudio = () => {
    if (audio) {
      audio.pause();
    }
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudioProgress(0);
    }
  };

  const toggleMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  const replayAudio = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setTypewriterKey(prev => prev + 1); // Restart typewriter
    }
  };

  // Effect สำหรับเปลี่ยนสถานที่
  useEffect(() => {
    if (selectedPlace) {
      playAudio();
    } else {
      // ถ้าไม่มีสถานที่เลือก ให้หยุดเสียง
      if (audio) {
        audio.pause();
        setIsPlaying(false);
      }
    }

    // Cleanup เมื่อ component unmount
    return () => {
      if (audio) {
        audio.pause();
        audio.removeEventListener('loadstart', () => {});
        audio.removeEventListener('canplay', () => {});
        audio.removeEventListener('play', () => {});
        audio.removeEventListener('pause', () => {});
        audio.removeEventListener('ended', () => {});
        audio.removeEventListener('timeupdate', () => {});
        audio.removeEventListener('error', () => {});
      }
    };
  }, [selectedPlace, currentLanguage]);

  // Effect สำหรับแจ้ง parent component
  useEffect(() => {
    if (onAudioStateChange) {
      onAudioStateChange(isPlaying ? selectedPlace : null);
    }
  }, [isPlaying, selectedPlace, onAudioStateChange]);

  // ไม่แสดงอะไรถ้าไม่มีสถานที่เลือก
  if (!selectedPlace) return null;

  return (
    <div className="absolute top-[-5%] left-[-40%] z-[9999]">
      {/* Audio Controls */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-4 border border-white/20">
        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={isPlaying ? pauseAudio : playAudio}
            disabled={isLoading}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
              isLoading
                ? 'bg-gray-300 cursor-not-allowed'
                : isPlaying
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>

          {/* Stop Button */}
          <button
            onClick={stopAudio}
            disabled={!audio}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
          >
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </button>

          {/* Replay Button */}
          <button
            onClick={replayAudio}
            disabled={!audio}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Mute Button */}
          <button
            onClick={toggleMute}
            disabled={!audio}
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all disabled:cursor-not-allowed ${
              isMuted
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-gray-500 hover:bg-gray-600 text-white'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Progress Bar */}
        {audio && (
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${audioProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Status Text */}
        <div className="mt-2 text-center">
          {isLoading && (
            <p className="text-xs text-gray-600">กำลังโหลด...</p>
          )}
          {error && (
            <p className="text-xs text-red-500">{error}</p>
          )}
          {isPlaying && !error && !isLoading && (
            <p className="text-xs text-green-600 flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              กำลังเล่นเสียงแนะนำ
            </p>
          )}
        </div>

        {/* Language Indicator */}
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {currentLanguage === 'th' && '🇹🇭 ไทย'}
            {currentLanguage === 'en' && '🇬🇧 English'}
            {currentLanguage === 'zh' && '🇨🇳 中文'}
          </span>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload(model3d);

export default function My3DScene({ selectedPlace, audioTranscripts, onAudioStateChange, currentLanguage }) {
  const { t, i18n } = useTranslation();
  
  // ใช้ภาษาจาก props หรือ fallback ไป i18n
  const activeLanguage = currentLanguage || i18n.language;
  
  // กำหนด messages สำหรับ Typewriter
  const getTypewriterMessages = () => {
    if (selectedPlace && audioTranscripts[selectedPlace.id]) {
      // ถ้ามีสถานที่เลือกและมี transcript ให้ใช้ transcript นั้น
      const transcript = audioTranscripts[selectedPlace.id][activeLanguage];
      if (transcript) {
        // แบ่ง transcript เป็นประโยคสั้นๆ (แยกด้วย \n หรือ . )
        return transcript.split('\n').filter(line => line.trim().length > 0);
      }
    }
    
    // Fallback ไปใช้ messages เดิม
    return location.pathname === "/places"
      ? [t("placesPage.header"), t("placesPage.description")]
      : [t("welcome"), t("welcome2")];
  };

  const messages = getTypewriterMessages();

  // คำนวณความเร็ว Typewriter ให้ sync กับเสียง (ประมาณ)
  const getTypewriterSpeed = () => {
    if (selectedPlace && audioTranscripts[selectedPlace.id]) {
      const transcript = audioTranscripts[selectedPlace.id][activeLanguage];
      if (transcript) {
        const totalChars = transcript.length;
        const estimatedDuration = 45; // ประมาณ 45 วินาที (average)
        // คำนวณ delay ให้ character ต่อวินาที
        const delay = Math.max(10, Math.min(100, (estimatedDuration * 1000) / totalChars));
        return {
          delay: delay,
          deleteSpeed: delay * 2,
          pauseFor: 2000
        };
      }
    }
    
    // Default speed สำหรับ messages ปกติ
    return {
      delay: 50,
      deleteSpeed: 30,
      pauseFor: 1200
    };
  };

  const typewriterSpeed = getTypewriterSpeed();

  return (
    <div className="fixed bottom-[-10%] right-[0%] z-10">
      <div className="relative w-[250px] h-[350px] md:w-[320px] md:h-[420px]">
        {/* กล่องข้อความทับมุมซ้ายบนของโมเดล */}
        <div className="absolute top-[40%] left-[-30%] text-white shadow-sm text-sm md:text-base font-light p-2 md:p-3 rounded bg-black/70 backdrop-blur-sm w-[180px] md:w-[220px] z-[9999]">
          <Typewriter
            key={`${selectedPlace?.id || 'default'}-${activeLanguage}-${Date.now()}`}
            options={{
              strings: messages,
              autoStart: true,
              loop: selectedPlace ? false : true, // ถ้าเล่นเสียงแล้วไม่ loop, ถ้าไม่มีเสียงให้ loop
              delay: typewriterSpeed.delay,
              deleteSpeed: typewriterSpeed.deleteSpeed,
              pauseFor: typewriterSpeed.pauseFor,
            }}
          />
        </div>

        {/* Audio Controller */}
        <AudioController
          selectedPlace={selectedPlace}
          audioTranscripts={audioTranscripts}
          onAudioStateChange={onAudioStateChange}
          currentLanguage={activeLanguage}
        />

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