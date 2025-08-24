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
    const baseY = -1.5;
    const bob = Math.sin(t * 1.2) * 0.1;
    const sway = Math.sin(t * 0.5) * 0.05;
    ref.current.position.y = baseY + bob;
    ref.current.rotation.y = sway;
  });

  return (
    <primitive ref={ref} object={cloned} scale={1.35} position={[0, -1.5, 0]} />
  );
}

// Audio Controller Component - Simplified
function AudioController({ selectedPlace, currentLanguage, onAudioStateChange }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState(null);
  const [error, setError] = useState(null);
  const [audioProgress, setAudioProgress] = useState(0);

  // Debug logging
  console.log('AudioController render:', { 
    selectedPlace: selectedPlace?.id, 
    currentLanguage, 
    hasAudio: !!audio,
    isPlaying 
  });

  const cleanupAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
      setIsPlaying(false);
      setAudioProgress(0);
      setError(null);
      setIsLoading(false);
    }
  };

  const playAudio = async () => {
    if (!selectedPlace?.audioUrls) {
      console.log('No audio URLs available');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // Clean up previous audio
      cleanupAudio();

      const audioUrl = selectedPlace.audioUrls[currentLanguage] || 
                      selectedPlace.audioUrls.th || 
                      selectedPlace.audioUrls.en;
      
      console.log('Attempting to play audio:', audioUrl);
      
      if (!audioUrl) {
        setError('ไม่มีไฟล์เสียงสำหรับภาษานี้');
        setIsLoading(false);
        return;
      }

      const newAudio = new Audio(audioUrl);
      
      // Set up event listeners
      const handleCanPlay = () => setIsLoading(false);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => {
        setIsPlaying(false);
        setAudioProgress(0);
      };
      const handleTimeUpdate = () => {
        if (newAudio.duration) {
          setAudioProgress((newAudio.currentTime / newAudio.duration) * 100);
        }
      };
      const handleError = () => {
        setError('ไม่สามารถเล่นไฟล์เสียงได้');
        setIsLoading(false);
        setIsPlaying(false);
      };

      newAudio.addEventListener('canplay', handleCanPlay);
      newAudio.addEventListener('play', handlePlay);
      newAudio.addEventListener('pause', handlePause);
      newAudio.addEventListener('ended', handleEnded);
      newAudio.addEventListener('timeupdate', handleTimeUpdate);
      newAudio.addEventListener('error', handleError);

      setAudio(newAudio);
      
      // Try to play
      try {
        await newAudio.play();
        console.log('Audio playing successfully');
      } catch (playError) {
        console.log('Autoplay blocked, user needs to interact:', playError);
        setError('กดปุ่มเล่นเพื่อฟังเสียงแนะนำ');
        setIsLoading(false);
      }

    } catch (error) {
      console.error('Audio setup error:', error);
      setError('เกิดข้อผิดพลาดในการเล่นเสียง');
      setIsLoading(false);
    }
  };

  const handlePlayPause = async () => {
    if (!audio) {
      await playAudio();
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.error('Play error:', error);
        setError('ไม่สามารถเล่นเสียงได้');
      }
    }
  };

  const handleStop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudioProgress(0);
    }
  };

  const handleReplay = async () => {
    if (audio) {
      audio.currentTime = 0;
      if (!isPlaying) {
        try {
          await audio.play();
        } catch (error) {
          console.error('Replay error:', error);
        }
      }
    }
  };

  const handleMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  // Effect when selectedPlace changes
  useEffect(() => {
    console.log('Selected place changed:', selectedPlace?.id);
    
    if (selectedPlace?.audioUrls) {
      // Auto-play attempt (will fail on PC but that's ok)
      playAudio();
    } else {
      cleanupAudio();
    }

    // Cleanup on unmount or place change
    return () => {
      if (audio) {
        cleanupAudio();
      }
    };
  }, [selectedPlace?.id, currentLanguage]);

  // Notify parent about audio state
  useEffect(() => {
    if (onAudioStateChange) {
      onAudioStateChange(isPlaying ? selectedPlace : null);
    }
  }, [isPlaying, selectedPlace, onAudioStateChange]);

  // Force show controller when selectedPlace exists
  if (!selectedPlace) {
    console.log('No selected place, hiding controller');
    return null;
  }

  console.log('Rendering AudioController for place:', selectedPlace.id);

  return (
    <div className="absolute top-[10%] left-[-40%] z-[9999]">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-4 border border-white/20">
        {/* Debug Info */}
        <div className="text-xs text-gray-500 mb-2">
          Place: {selectedPlace.name} | Audio: {audio ? 'loaded' : 'none'}
        </div>
        
        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
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
            onClick={handleStop}
            disabled={!audio}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 hover:bg-gray-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
          >
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </button>

          {/* Replay Button */}
          <button
            onClick={handleReplay}
            disabled={!audio}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Mute Button */}
          <button
            onClick={handleMute}
            disabled={!audio}
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all disabled:bg-gray-300 disabled:cursor-not-allowed ${
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
          {isLoading && <p className="text-xs text-gray-600">กำลังโหลด...</p>}
          {error && <p className="text-xs text-red-500">{error}</p>}
          {isPlaying && !error && !isLoading && (
            <p className="text-xs text-green-600 flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              กำลังเล่นเสียงแนะนำ
            </p>
          )}
          {!isPlaying && !error && !isLoading && audio && (
            <p className="text-xs text-gray-600">พร้อมเล่นเสียงแนะนำ</p>
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
  const [typewriterKey, setTypewriterKey] = useState(0);
  
  // ใช้ภาษาจาก props หรือ fallback ไป i18n
  const activeLanguage = currentLanguage || i18n.language;
  
  // Debug logging
  console.log('My3DScene render:', { 
    selectedPlaceId: selectedPlace?.id, 
    activeLanguage,
    typewriterKey 
  });

  // กำหนด messages สำหรับ Typewriter
  const getTypewriterMessages = () => {
    if (selectedPlace && audioTranscripts[selectedPlace.id]) {
      const transcript = audioTranscripts[selectedPlace.id][activeLanguage];
      if (transcript) {
        return transcript.split('\n').filter(line => line.trim().length > 0);
      }
    }
    
    // Fallback messages
    return location.pathname === "/places"
      ? [t("placesPage.header"), t("placesPage.description")]
      : [t("welcome"), t("welcome2")];
  };

  const messages = getTypewriterMessages();

  // คำนวณความเร็ว Typewriter
  const getTypewriterSpeed = () => {
    if (selectedPlace && audioTranscripts[selectedPlace.id]) {
      const transcript = audioTranscripts[selectedPlace.id][activeLanguage];
      if (transcript) {
        const totalChars = transcript.length;
        const estimatedDuration = 45;
        const delay = Math.max(10, Math.min(100, (estimatedDuration * 1000) / totalChars));
        return {
          delay: delay,
          deleteSpeed: delay * 2,
          pauseFor: 2000
        };
      }
    }
    
    return {
      delay: 50,
      deleteSpeed: 30,
      pauseFor: 1200
    };
  };

  const typewriterSpeed = getTypewriterSpeed();

  // Force typewriter update when selectedPlace or language changes
  useEffect(() => {
    console.log('Updating typewriter key due to place/language change');
    setTypewriterKey(prev => prev + 1);
  }, [selectedPlace?.id, activeLanguage]);

  return (
    <div className="fixed bottom-[-10%] right-[0%] z-10">
      <div className="relative w-[250px] h-[350px] md:w-[320px] md:h-[420px]">
        {/* กล่องข้อความ - Force re-render with key */}
        <div className="absolute top-[40%] left-[-30%] text-white shadow-sm text-sm md:text-base font-light p-2 md:p-3 rounded bg-black/70 backdrop-blur-sm w-[180px] md:w-[220px] z-[9999]">
          <div key={typewriterKey}>
            <Typewriter
              options={{
                strings: messages,
                autoStart: true,
                loop: selectedPlace ? false : true,
                delay: typewriterSpeed.delay,
                deleteSpeed: typewriterSpeed.deleteSpeed,
                pauseFor: typewriterSpeed.pauseFor,
              }}
            />
          </div>
        </div>

        {/* Audio Controller */}
        <AudioController
          selectedPlace={selectedPlace}
          currentLanguage={activeLanguage}
          onAudioStateChange={onAudioStateChange}
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