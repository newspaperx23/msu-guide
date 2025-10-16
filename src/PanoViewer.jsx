import React from 'react';
import { Pannellum } from 'pannellum-react';
import { X } from 'lucide-react';

const PanoViewer = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black animate-fade-in">
      <Pannellum
        width="100%"
        height="100%"
        image={image}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={true}
        showFullscreenCtrl={false}
        onLoad={() => {
          console.log("Panorama loaded!");
        }}
      >
      </Pannellum>
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 border border-white/20"
      >
        <X className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default PanoViewer;