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

// Enhanced Audio Controller Component
function AudioController({ selectedPlace, currentLanguage, onAudioStateChange }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState(null);
  const [error, setError] = useState(null);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);

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
      // Remove event listeners
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      
      setAudio(null);
      setIsPlaying(false);
      setAudioProgress(0);
      setAudioDuration(0);
      setError(null);
      setIsLoading(false);
    }
  };

  // Event handlers
  const handleCanPlay = () => {
    console.log('Audio can play');
    setIsLoading(false);
  };

  const handlePlay = () => {
    console.log('Audio started playing');
    setIsPlaying(true);
  };

  const handlePause = () => {
    console.log('Audio paused');
    setIsPlaying(false);
  };

  const handleEnded = () => {
    console.log('Audio ended');
    setIsPlaying(false);
    setAudioProgress(0);
  };

  const handleTimeUpdate = (e) => {
    const audio = e.target;
    if (audio.duration) {
      setAudioProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleError = (e) => {
    console.error('Audio error:', e);
    setError('ไม่สามารถเล่นไฟล์เสียงได้');
    setIsLoading(false);
    setIsPlaying(false);
  };

  const handleLoadedMetadata = (e) => {
    const audio = e.target;
    setAudioDuration(audio.duration);
    console.log('Audio duration:', audio.duration);
  };

  const playAudio = async () => {
    if (!selectedPlace?.audioUrls) {
      console.log('No audio URLs available for place:', selectedPlace?.id);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      // Clean up previous audio
      cleanupAudio();

      // Get audio URL based on current language
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
      newAudio.addEventListener('canplay', handleCanPlay);
      newAudio.addEventListener('play', handlePlay);
      newAudio.addEventListener('pause', handlePause);
      newAudio.addEventListener('ended', handleEnded);
      newAudio.addEventListener('timeupdate', handleTimeUpdate);
      newAudio.addEventListener('error', handleError);
      newAudio.addEventListener('loadedmetadata', handleLoadedMetadata);

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
    } else {
      await playAudio();
    }
  };

  const handleMute = () => {
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(audio.muted);
    }
  };

  // Format time for display
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Effect when selectedPlace or language changes
  useEffect(() => {
    console.log('Selected place or language changed:', selectedPlace?.id, currentLanguage);
    
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

  // Don't show controller if no place is selected or no audio available
  if (!selectedPlace || !selectedPlace.audioUrls) {
    console.log('No selected place or no audio URLs, hiding controller');
    return null;
  }

  console.log('Rendering AudioController for place:', selectedPlace.id);

  return (
    <div className="absolute top-[5%] left-[-45%] z-[9999] w-72">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 border border-white/30">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">กำลังเล่นเสียงบรรยาย</h3>
            <p className="text-xs text-gray-500">{selectedPlace.nameKey}</p>
          </div>
          {/* Language Indicator */}
          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {currentLanguage === 'th' && '🇹🇭'}
            {currentLanguage === 'en' && '🇬🇧'}
            {currentLanguage === 'zh' && '🇨🇳'}
          </div>
        </div>
        
        {/* Main Controls */}
        <div className="flex items-center gap-3 mb-4">
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            disabled={isLoading}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all shadow-lg ${
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

          {/* Secondary Controls */}
          <div className="flex gap-2">
            <button
              onClick={handleStop}
              disabled={!audio}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-500 hover:bg-gray-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md"
              title="หยุด"
            >
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </button>

            <button
              onClick={handleReplay}
              disabled={!audio && !selectedPlace?.audioUrls}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed transition-all shadow-md"
              title="เล่นใหม่"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={handleMute}
              disabled={!audio}
              className={`flex items-center justify-center w-9 h-9 rounded-full transition-all shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed ${
                isMuted
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
              }`}
              title={isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        {audio && (
          <div className="mb-3">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>{formatTime(audio.currentTime)}</span>
              <span>{formatTime(audioDuration)}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${audioProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Status Messages */}
        <div className="text-center">
          {isLoading && (
            <p className="text-xs text-gray-600 flex items-center justify-center gap-2">
              <div className="w-3 h-3 border border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              กำลังโหลดไฟล์เสียง...
            </p>
          )}
          {error && (
            <p className="text-xs text-red-500 bg-red-50 p-2 rounded-lg">{error}</p>
          )}
          {isPlaying && !error && !isLoading && (
            <p className="text-xs text-green-600 flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              กำลังเล่นเสียงบรรยาย
            </p>
          )}
          {!isPlaying && !error && !isLoading && audio && (
            <p className="text-xs text-gray-600">พร้อมเล่นเสียงบรรยาย</p>
          )}
          {!audio && !isLoading && !error && selectedPlace?.audioUrls && (
            <p className="text-xs text-blue-600">กดปุ่มเพื่อเล่นเสียงบรรยาย</p>
          )}
        </div>
      </div>
    </div>
  );
}

useGLTF.preload(model3d);

export default function My3DScene({ selectedPlace, audioTranscripts, onAudioStateChange, currentLanguage }) {
  const { t, i18n } = useTranslation();
  const [typewriterKey, setTypewriterKey] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  // ใช้ภาษาจาก props หรือ fallback ไป i18n
  const activeLanguage = currentLanguage || i18n.language;
  
  // Debug logging
  console.log('My3DScene render:', { 
    selectedPlaceId: selectedPlace?.id, 
    activeLanguage,
    typewriterKey,
    hasAudioTranscripts: !!audioTranscripts,
    isAudioPlaying
  });

  // กำหนด messages สำหรับ Typewriter
  const getTypewriterMessages = () => {
    if (selectedPlace && audioTranscripts && audioTranscripts[selectedPlace.id]) {
      const transcript = audioTranscripts[selectedPlace.id][activeLanguage];
      if (transcript) {
        // Split transcript into sentences for better display
        const sentences = transcript.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
        return sentences.map(sentence => sentence.trim() + '.');
      }
    }
    
    // Fallback messages for general pages
    if (location.pathname === "/places") {
      return [t("placesPage.header"), t("placesPage.description")];
    }
    
    return [t("welcome"), t("welcome2")];
  };

  const messages = getTypewriterMessages();

  // คำนวณความเร็ว Typewriter ตามเนื้อหา
  const getTypewriterSpeed = () => {
    if (selectedPlace && audioTranscripts && audioTranscripts[selectedPlace.id]) {
      const transcript = audioTranscripts[selectedPlace.id][activeLanguage];
      if (transcript) {
        const totalChars = transcript.length;
        // ประมาณเวลาเสียง 60-90 วินาที สำหรับเสียงบรรยาย
        const estimatedDuration = Math.max(60, Math.min(90, totalChars / 10));
        const delay = Math.max(15, Math.min(80, (estimatedDuration * 1000) / totalChars));
        
        return {
          delay: delay,
          deleteSpeed: 0, // ไม่ลบข้อความ
          pauseFor: 1000
        };
      }
    }
    
    // ค่าเริ่มต้นสำหรับข้อความทั่วไป
    return {
      delay: 50,
      deleteSpeed: 30,
      pauseFor: 1200
    };
  };

  const typewriterSpeed = getTypewriterSpeed();

  // Handle audio state changes
  const handleAudioStateChange = (audioPlace) => {
    setIsAudioPlaying(!!audioPlace);
    if (onAudioStateChange) {
      onAudioStateChange(audioPlace);
    }
  };

  // Force typewriter update when selectedPlace or language changes
  useEffect(() => {
    console.log('Updating typewriter key due to place/language change');
    setTypewriterKey(prev => prev + 1);
  }, [selectedPlace?.id, activeLanguage]);

  return (
    <div className="fixed bottom-[-10%] right-[0%] z-10">
      <div className="relative w-[250px] h-[350px] md:w-[320px] md:h-[420px]">
        {/* กล่องข้อความ - Enhanced with audio integration */}
        <div className="absolute top-[35%] left-[-35%] text-white shadow-lg text-sm md:text-base font-light p-3 md:p-4 rounded-xl bg-black/80 backdrop-blur-sm w-[200px] md:w-[240px] z-[9999] border border-white/20">
          <div key={typewriterKey} className="min-h-[60px]">
            <Typewriter
              options={{
                strings: messages,
                autoStart: true,
                loop: selectedPlace ? false : true, // ไม่ loop สำหรับเสียงบรรยาย
                delay: typewriterSpeed.delay,
                deleteSpeed: typewriterSpeed.deleteSpeed,
                pauseFor: typewriterSpeed.pauseFor,
                cursor: isAudioPlaying ? '♪' : '|', // เปลี่ยน cursor เมื่อมีเสียง
              }}
            />
          </div>
          
          {/* Audio indicator */}
          {isAudioPlaying && (
            <div className="mt-2 flex items-center justify-center">
              <div className="flex items-center gap-1">
                <div className="w-1 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-xs text-green-400 ml-2">กำลังเล่นเสียง</span>
              </div>
            </div>
          )}
        </div>

        {/* Audio Controller - Enhanced */}
        <AudioController
          selectedPlace={selectedPlace}
          currentLanguage={activeLanguage}
          onAudioStateChange={handleAudioStateChange}
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