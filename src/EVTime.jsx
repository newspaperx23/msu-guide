import React, { useState } from 'react';
import { MapPin, Clock, Bus, AlertCircle, Download } from 'lucide-react';
import NavigationBar from './NavigationBar';
import My3DScene from './My3DScene.jsx';
import { useTranslation } from "react-i18next";
import evtimeData from './data/evtimeData.json';

// Import your images
import appScreenshot1 from './assets/evtime/app-1.jpg';
import appScreenshot2 from './assets/evtime/app-2.jpg';
import appScreenshot3 from './assets/evtime/app-3.jpg';
import qrCodeImage from './assets/evtime/qr-code-ios.png';

const EVTime = () => {
  const { i18n } = useTranslation();
  const [currentAppSlide, setCurrentAppSlide] = useState(0);
  const [appPlatform, setAppPlatform] = useState('ios'); // 'ios' or 'android'
  
  const currentLang = i18n.language || 'th';
  const evData = evtimeData[currentLang] || evtimeData['th'];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  const appSlides = [
    {
      image: appScreenshot1,
      title: evData.app.slide1Title,
      desc: evData.app.slide1Desc
    },
    {
      image: appScreenshot2,
      title: evData.app.slide2Title,
      desc: evData.app.slide2Desc
    },
    {
      image: appScreenshot3,
      title: evData.app.slide3Title,
      desc: evData.app.slide3Desc
    }
  ];

  const redLineStops = evData.redLine.stops || [];
  const blueLineStops = evData.blueLine.stops || [];

  const nextSlide = () => {
    setCurrentAppSlide((prev) => (prev + 1) % appSlides.length);
  };

  const prevSlide = () => {
    setCurrentAppSlide((prev) => (prev === 0 ? appSlides.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <NavigationBar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-block">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400 bg-clip-text text-transparent mb-4">
            {evData.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {evData.subtitle}
          </p>
        </div>

        {/* Section 1: EV Shuttle Information */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            {evData.shuttleInfo}
          </h2>

          {/* Red Line */}
          <div className="mb-16 p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 hover:border-red-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-red-600"></div>
              <h3 className="text-3xl font-bold text-white">{evData.redLine.name}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
                <Clock className="w-6 h-6 text-red-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">{evData.serviceTime}</p>
                  <p className="text-white font-semibold">{evData.redLine.hours}</p>
                  <p className="text-sm text-slate-300 mt-2">{evData.redLine.note}</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-all">
                <AlertCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">{evData.importantNote}</p>
                  <p className="text-white font-semibold text-sm">{evData.redLine.restriction}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-400" />
                {evData.stops}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {redLineStops.map((stop, idx) => (
                  <div key={idx} className="flex items-start p-3 rounded-lg bg-white/5 border border-white/10 hover:border-red-500/30 transition-all">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mr-3">
                      {idx}
                    </span>
                    <span className="text-slate-300 text-sm">{stop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blue Line */}
          <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 hover:border-blue-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <h3 className="text-3xl font-bold text-white">{evData.blueLine.name}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
                <Clock className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">{evData.serviceTime}</p>
                  <p className="text-white font-semibold">{evData.blueLine.hours}</p>
                  <p className="text-sm text-slate-300 mt-2">{evData.blueLine.note}</p>
                </div>
              </div>

              <div className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
                <Bus className="w-6 h-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-slate-400 mb-1">{evData.route}</p>
                  <p className="text-white font-semibold text-sm">{evData.blueLine.route}</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl border border-white/10 p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                {evData.stops}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {blueLineStops.map((stop, idx) => (
                  <div key={idx} className="flex items-start p-3 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mr-3">
                      {idx}
                    </span>
                    <span className="text-slate-300 text-sm">{stop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Section 2: Mobile Application */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            {evData.app.title}
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-center mb-12">
            {evData.app.subtitle}
          </p>

          {/* App Showcase */}
          <div className="space-y-16">
            {appSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center ${
                  currentAppSlide === idx ? 'block' : 'hidden'
                }`}
              >
                {/* Image Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-2xl blur-2xl"></div>
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-white/20 p-2">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-auto rounded-xl object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x600?text=App+Screenshot';
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    {slide.desc}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={prevSlide}
                      className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      {`← ${evData.app.previous}`}
                    </button>
                    <button
                      onClick={nextSlide}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    >
                      {`${evData.app.next} →`}
                    </button>
                  </div>
                  <div className="mt-6 text-sm text-slate-400">
                    {currentAppSlide + 1} / {appSlides.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-white/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            {evData.app.downloadTitle}
          </h3>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Platform Selector */}
            <div className="flex flex-col items-center">
              <div className="mb-4 flex gap-3 bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/20">
                <button
                  onClick={() => setAppPlatform('ios')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    appPlatform === 'ios'
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  iOS
                </button>
                <button
                  onClick={() => setAppPlatform('android')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    appPlatform === 'android'
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  Android
                </button>
              </div>

              {/* QR Code */}
              <div className="w-40 h-40 bg-white/10 rounded-2xl border border-white/20 p-4 mb-4 flex items-center justify-center shadow-lg">
                <img
                  src={qrCodeImage}
                  alt={`QR Code - ${appPlatform.toUpperCase()}`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <p className="text-white font-semibold text-lg mb-2">{evData.app.scanQr}</p>
              <p className="text-slate-300 text-sm">
                {appPlatform === 'ios' ? 'App Store' : 'Google Play'}
              </p>
            </div>

            {/* Download Info */}
            <div className="flex-1">
              <p className="text-slate-300 text-lg mb-6">
                {evData.app.downloadDesc}
              </p>
              <div className="space-y-3">
                <button className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2m0 0V3a1 1 0 011-1h10a1 1 0 011 1v1" />
                  </svg>
                  {appPlatform === 'ios' ? 'Download from App Store' : 'Download from Google Play'}
                </button>
                
                <button className="w-full px-8 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300">
                  {appPlatform === 'ios' ? '📱 iOS Version' : '🤖 Android Version'}
                </button>
              </div>

              {/* Platform Info */}
              <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-slate-400 mb-2 font-semibold">
                  {appPlatform === 'ios' ? 'iOS Requirements' : 'Android Requirements'}
                </p>
                <p className="text-xs text-slate-400">
                  {appPlatform === 'ios' 
                    ? 'iOS 12.0 or later, Compatible with iPhone and iPad'
                    : 'Android 6.0 (API level 23) or later'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-[20%] bottom-[10%] md:right-[10%] md:bottom-[15%] fixed z-[100] pointer-events-auto">
        <My3DScene 
          currentLanguage={currentLang}
          onLanguageChange={handleLanguageChange}
        />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EVTime;