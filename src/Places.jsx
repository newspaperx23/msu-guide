import React, { useState } from 'react';
import { MapPin, Clock, Info, ArrowRight, Camera, Navigation, Phone, Globe, Users, Wifi, Car, Accessibility } from 'lucide-react';
import NavigationBar from './NavigationBar';
import My3DScene from './My3DScene.jsx';
import { useTranslation } from "react-i18next";

// Import images
import place1a from './assets/place1-1.jpg';
import place1b from './assets/place1-2.jpg';
import place1c from './assets/place1-3.jpg';
import place1d from './assets/place1-4.jpg';
import place1e from './assets/place1-5.jpg';
import place1f from './assets/place1-7.jpg';
import place1g from './assets/place1-8.jpg';
import place1h from './assets/place1-9.jpg';
import place1i from './assets/place1-10.jpg';
import place2a from './assets/place2-1.jpg';
import place2b from './assets/place2-2.jpg';
import place2c from './assets/place2-3.jpg';
import place2d from './assets/place2-4.jpg';
import place2e from './assets/place2-5.jpg';
import place3a from './assets/place3-1.jpg';
import place3b from './assets/place3-2.jpg';
import place3c from './assets/place3-3.jpg';
import place3d from './assets/place3-4.jpg';
import place3e from './assets/place3-5.jpg';
import place3f from './assets/place3-6.jpg';
import place3g from './assets/place3-7.jpg';
import logo2 from './assets/logo2.png';

// เพิ่มการ import รูปสำหรับสถานที่ 4-6
import place4a from './assets/place4-1.jpg';
import place4b from './assets/place4-2.jpg';
import place4c from './assets/place4-3.jpg';
import place4d from './assets/place4-4.jpg';
import place4e from './assets/place4-5.jpg';

import place5a from './assets/place5-1.jpg';
import place5b from './assets/place5-2.jpg';
import place5c from './assets/place5-3.jpg';
import place5d from './assets/place5-4.jpg';

import place6a from './assets/place6-1.jpg';
import place6b from './assets/place6-2.jpg';
import place6c from './assets/place6-3.jpg';
import place6d from './assets/place6-4.jpg';

// Import audio files
// Thai audio
import place1AudioTh from './assets/audio/th/place1-audio.wav';
import place2AudioTh from './assets/audio/th/place2-audio.wav';
import place3AudioTh from './assets/audio/th/place3-audio.wav';

// English audio
import place1AudioEn from './assets/audio/en/place1-audio.wav';
import place2AudioEn from './assets/audio/en/place2-audio.wav';
import place3AudioEn from './assets/audio/en/place3-audio.wav';

// Chinese audio
import place1AudioZh from './assets/audio/zh/place1-audio.wav';
import place2AudioZh from './assets/audio/zh/place2-audio.wav';
import place3AudioZh from './assets/audio/zh/place3-audio.wav';

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentAudioPlace, setCurrentAudioPlace] = useState(null);
  const { t, i18n } = useTranslation();

  // Get current language
  const currentLang = i18n.language || 'th';

  // Create audio URLs mapping
  const audioUrls = {
    1: {
      th: place1AudioTh,
      en: place1AudioEn,
      zh: place1AudioZh
    },
    2: {
      th: place2AudioTh,
      en: place2AudioEn,
      zh: place2AudioZh
    },
    3: {
      th: place3AudioTh,
      en: place3AudioEn,
      zh: place3AudioZh
    }
  };

  // Create audio transcripts from existing translations
  const audioTranscripts = {
    1: {
      th: t('placesPage.places.computerCenter.detailedDescription'),
      en: t('placesPage.places.computerCenter.detailedDescription'),
      zh: t('placesPage.places.computerCenter.detailedDescription')
    },
    2: {
      th: t('placesPage.places.registrar.detailedDescription'),
      en: t('placesPage.places.registrar.detailedDescription'),
      zh: t('placesPage.places.registrar.detailedDescription')
    },
    3: {
      th: t('placesPage.places.studentAffairs.detailedDescription'),
      en: t('placesPage.places.studentAffairs.detailedDescription'),
      zh: t('placesPage.places.studentAffairs.detailedDescription')
    }
  };

  const recommendedPlaces = [
    {
      id: 1,
      nameKey: "computerCenter",
      image: place1f,
      category: "Academic",
      openHours: "08:00 - 20:00",
      location: "อาคาร A ชั้น 1-3",
      coordinates: { lat: 16.245697331723587, lng: 103.25114362463549 }, // 16.245697331723587, 103.25114362463549
      phone: "042-123-456",
      email: "library@msu.ac.th",
      audioUrls: audioUrls[1], // Add audio URLs
      images: [
        { url: place1a, caption: "ห้องสมุดหลัก", type: "interior" },
        { url: place1b, caption: "ห้องศึกษาค้นคว้า", type: "study_room" },
        { url: place1c, caption: "มุมอ่านหนังสือ", type: "reading_area" },
        { url: place1d, caption: "ห้องคอมพิวเตอร์", type: "computer_lab" },
        { url: place1e, caption: "คาราโอเกะ", type: "lounge" },
        { url: place1g, caption: "โถงกลาง", type: "main_hall" },
        { url: place1h, caption: "มุมอ่านหนังสือ", type: "relaxation_area" },
        { url: place1i, caption: "มุมอ่านหนังสือ", type: "event_space" }
      ],
      virtualTour: "/virtual-tour/library",
      capacity: "500 คน"
    },
    {
      id: 2,
      nameKey: "registrar",
      image: place2e,
      category: "Administrative",
      openHours: "08:30 - 16:30",
      location: "อาคารอำนวยการ ชั้น 1",
      coordinates: { lat: 16.249137030602363, lng: 103.25072868259224  },
      phone: "042-123-457",
      email: "registrar@msu.ac.th",
      audioUrls: audioUrls[2], // Add audio URLs
      images: [
        { url: place2a, caption: "ป้ายหน้าตึก", type: "entrance1" },
        { url: place2b, caption: "ทางเดินเข้า", type: "entrance2" },
        { url: place2d, caption: "ห้องรอรับบริการ", type: "waiting_area" },
        { url: place2c, caption: "จุดยื่นเอกสาร", type: "document_submission" },
      ],
      virtualTour: "/virtual-tour/registrar",
      capacity: "100 คน"
    },
    {
      id: 3,
      nameKey: "studentAffairs",
      image: place3e,
      category: "Student Services",
      openHours: "08:30 - 16:30",
      location: "อาคารกิจการนิสิต ชั้น 1",
      coordinates: { lat: 16.252316203199562, lng: 103.2468383835711 }, // 16.252316203199562, 103.2468383835711
      phone: "042-123-459",
      email: "studentaffairs@msu.ac.th",
      audioUrls: audioUrls[3], // Add audio URLs
      images: [
        { url: place3a, caption: "จุดให้บริการหลัก", type: "service_area" },
        { url: place3b, caption: "ห้องให้คำปรึกษา", type: "counseling_room" },
        { url: place3c, caption: "พื้นที่จัดกิจกรรม", type: "club_meeting_room" },
        { url: place3d, caption: "งานสวัสดิภาพนิสิต", type: "activity_space" },
        { url: place3f, caption: "งานสนับสนุนนิสิตพิการ", type: "disability_area" },
        { url: place3g, caption: "สวัสดิภาพนิสิต", type: "student_welfare" }
      ],
      virtualTour: "/virtual-tour/studentaffairs",
      capacity: "150 คน"
    },
    {
      id: 4,
      nameKey: "generalEducation",
      image: place4a,
      category: "Academic",
      openHours: "08:30 - 16:30",
      location: "อาคารศึกษาทั่วไป ชั้น 1-2",
      coordinates: { lat: 17.3642, lng: 102.8192 },
      phone: "042-123-458",
      email: "gened@msu.ac.th",
      images: [
        { url: place4a, caption: "ตึกสำนักศึกษาทั่วไป", type: "General Education" },
        { url: place4b, caption: "โถงทางเดิน", type: "hallway" },
        { url: place4c, caption: "โถงทางเดิน 2", type: "hallway2" },
        { url: place4d, caption: "พื้นที่ทำงานของนิสิต", type: "Co-Woking Space" }
      ],
      virtualTour: "/virtual-tour/gened",
      capacity: "300 คน"
    },
    {
      id: 5,
      nameKey: "dormitory",
      image: place5a,
      category: "Accommodation",
      openHours: "24 ชั่วโมง",
      location: "อาคารหอพักนิสิต",
      coordinates: { lat: 17.3646, lng: 102.8196 },
      phone: "042-123-460",
      email: "dormitory@msu.ac.th",
      images: [
        { url: place5a, caption: "หอพักภายใน", type: "On-Campus Dorm" },
        { url: place5b, caption: "ภาพบรรยากาศ", type: "lobby" },
        { url: place5c, caption: "ที่จอดรถ", type: "common_area" },
        { url: place5d, caption: "บรรยากาศตึกหอพัก", type: "laundry_room" }
      ],
      virtualTour: "/virtual-tour/dormitory",
      capacity: "500 คน"
    },
    {
      id: 6,
      nameKey: "boromrajkumari",
      image: place6a,
      category: "Academic",
      openHours: "06:00 - 22:00",
      location: "อาคารบรมราชกุมารี",
      coordinates: { lat: 17.3643, lng: 102.8191 },
      phone: "042-123-461",
      email: "boromrajkumari@msu.ac.th",
      images: [
        { url: place6a, caption: "ด้านหน้าตึก", type: "lecture_hall" },
        { url: place6b, caption: "ภายในตึก", type: "science_lab" },
        { url: place6c, caption: "ห้องการเงิน", type: "conference_room" },
        { url: place6d, caption: "ล็อบบี้", type: "main_lobby" }
      ],
      virtualTour: "/virtual-tour/boromrajkumari",
      capacity: "1000 คน"
    }
  ];

  const openGoogleMaps = (coordinates, name) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}&query_place_id=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  };

  const nextImage = () => {
    if (selectedPlace && selectedPlace.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedPlace.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedPlace && selectedPlace.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedPlace.images.length - 1 : prev - 1
      );
    }
  };

  const openVirtualTour = (tourUrl) => {
    alert(t('placesPage.modal.virtualTourDesc'));
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Academic': 'bg-blue-100 text-blue-800',
      'Administrative': 'bg-green-100 text-green-800',
      'Student Services': 'bg-purple-100 text-purple-800',
      'Accommodation': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  // Helper function to get translated location
  const getTranslatedLocation = (location) => {
    return t(`placesPage.locations.${location}`, { defaultValue: location });
  };

  // Helper function to get translated opening hours
  const getTranslatedOpenHours = (hours) => {
    return t(`placesPage.openHours.${hours}`, { defaultValue: hours });
  };

  // Handle place selection with audio
  const handlePlaceSelection = (place) => {
    console.log('Place selected:', place.id, place.nameKey);
    setSelectedPlace(place);
  };

  // Handle audio state change
  const handleAudioStateChange = (audioPlace) => {
    setCurrentAudioPlace(audioPlace);
    console.log('Audio state changed:', audioPlace?.id || 'stopped');
  };

  // Handle language change
  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    console.log('Language changed to:', langCode);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      {/* Header Section */}
      <NavigationBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('placesPage.header')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('placesPage.description')}
          </p>
        </div>

        {/* 3D Scene with Audio System */}
        <div className="right-[20%] bottom-[10%] md:right-[10%] md:bottom-[15%] fixed z-[999]">
          <My3DScene 
            selectedPlace={selectedPlace}
            audioTranscripts={audioTranscripts}
            onAudioStateChange={handleAudioStateChange}
            currentLanguage={currentLang}
            onLanguageChange={handleLanguageChange}
          />
        </div>
        
        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedPlaces.map((place) => (
            <div
              key={place.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer ${
                selectedPlace?.id === place.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
              }`}
              onClick={() => handlePlaceSelection(place)}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                <img
                  src={place.image}
                  alt={t(`placesPage.places.${place.nameKey}.name`)}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                
                {/* Selected indicator */}
                {selectedPlace?.id === place.id && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
                    <span className="text-xs font-bold">เลือกแล้ว</span>
                  </div>
                )}
                
                {/* Audio playing indicator */}
                {currentAudioPlace?.id === place.id && (
                  <div className="absolute top-4 left-20 bg-green-500 text-white p-2 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold">กำลังเล่น</span>
                  </div>
                )}

                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(place.category)}`}>
                    {t(`placesPage.categories.${place.category}`)}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white bg-opacity-90 rounded-full p-2">
                    <ArrowRight className="w-5 h-5 text-gray-700 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {t(`placesPage.places.${place.nameKey}.name`)}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {t(`placesPage.places.${place.nameKey}.description`)}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{getTranslatedOpenHours(place.openHours)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{getTranslatedLocation(place.location)}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {t(`placesPage.places.${place.nameKey}.highlights`, { returnObjects: true }).slice(0, 2).map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                    >
                      {highlight}
                    </span>
                  ))}
                  {t(`placesPage.places.${place.nameKey}.highlights`, { returnObjects: true }).length > 2 && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg">
                      +{t(`placesPage.places.${place.nameKey}.highlights`, { returnObjects: true }).length - 2} {currentLang === 'th' ? 'เพิ่มเติม' : currentLang === 'en' ? 'more' : '更多'}
                    </span>
                  )}
                </div>

                {/* Audio availability indicator */}
                {place.audioUrls && (
                  <div className="mt-3 flex items-center text-sm text-blue-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>มีเสียงบรรยาย</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <Info className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t('placesPage.moreinfo')}
          </h3>
          <p className="text-gray-600 mb-6">
            {t('placesPage.moreInfoDesc')}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">
            {t('placesPage.contact')}
          </button>
        </div>
      </div>

      {/* Enhanced Modal for detailed view */}
      {selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedPlace(null);
                setCurrentImageIndex(0);
                setActiveTab('overview');
              }}
              className="absolute top-6 right-6 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all"
            >
              <span className="text-2xl text-gray-600 hover:text-gray-800">✕</span>
            </button>

            {/* Image Gallery Section */}
            <div className="relative h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-3xl overflow-hidden">
              {selectedPlace.images && selectedPlace.images.length > 0 && (
                <>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-500"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${selectedPlace.images[currentImageIndex].url}')`
                    }}
                  ></div>
                  
                  {/* Image Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all"
                  >
                    →
                  </button>

                  {/* Image Caption */}
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                    <p className="text-sm">{selectedPlace.images[currentImageIndex].caption}</p>
                    <p className="text-xs opacity-75">{currentImageIndex + 1} / {selectedPlace.images.length}</p>
                  </div>

                  {/* Virtual Tour Button */}
                  <button
                    onClick={() => openVirtualTour(selectedPlace.virtualTour)}
                    className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                    <span>{t('placesPage.modal.virtualTour360')}</span>
                  </button>
                </>
              )}
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {t(`placesPage.places.${selectedPlace.nameKey}.name`)}
                    </h1>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedPlace.category)}`}>
                      {t(`placesPage.categories.${selectedPlace.category}`)}
                    </span>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => openGoogleMaps(selectedPlace.coordinates, t(`placesPage.places.${selectedPlace.nameKey}.name`))}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>{t('placesPage.modal.navigation')}</span>
                    </button>
                    <button
                      onClick={() => window.open(`tel:${selectedPlace.phone}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>{t('placesPage.modal.call')}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="flex border-b border-gray-200 mb-6">
                {[
                  { id: 'overview', label: t('placesPage.modal.overview'), icon: Info },
                  { id: 'gallery', label: t('placesPage.modal.gallery'), icon: Camera },
                  { id: 'services', label: t('placesPage.modal.services'), icon: Users },
                  { id: 'contact', label: t('placesPage.modal.contact'), icon: Phone }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('placesPage.modal.placeDetails')}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {t(`placesPage.places.${selectedPlace.nameKey}.detailedDescription`)}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Clock className="w-5 h-5 mr-3 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">{t('placesPage.modal.openingHours')}</h4>
                        </div>
                        <p className="text-gray-700 font-medium">{getTranslatedOpenHours(selectedPlace.openHours)}</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <MapPin className="w-5 h-5 mr-3 text-green-600" />
                          <h4 className="font-semibold text-gray-900">{t('placesPage.modal.location')}</h4>
                        </div>
                        <p className="text-gray-700 font-medium">{getTranslatedLocation(selectedPlace.location)}</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Users className="w-5 h-5 mr-3 text-purple-600" />
                          <h4 className="font-semibold text-gray-900">{t('placesPage.modal.capacity')}</h4>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedPlace.capacity}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('placesPage.modal.facilities')}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {t(`placesPage.places.${selectedPlace.nameKey}.facilities`, { returnObjects: true }).map((facility, index) => (
                          <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-gray-700 text-sm">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('placesPage.modal.galleryTitle')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedPlace.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer overflow-hidden rounded-xl"
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <div 
                            className="h-48 bg-cover bg-center transition-transform group-hover:scale-110"
                            style={{ backgroundImage: `url('${image.url}')` }}
                          ></div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                            <p className="text-white text-sm font-medium">{image.caption}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{t('placesPage.modal.want360')}</h4>
                          <p className="text-gray-600 text-sm">{t('placesPage.modal.want360Desc')}</p>
                        </div>
                        <button
                          onClick={() => openVirtualTour(selectedPlace.virtualTour)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                        >
                          <Globe className="w-4 h-4" />
                          <span>Virtual Tour</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Services Tab */}
                {activeTab === 'services' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('placesPage.modal.servicesProvided')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {t(`placesPage.places.${selectedPlace.nameKey}.services`, { returnObjects: true }).map((service, index) => (
                        <div key={index} className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-500">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                          <span className="text-gray-800 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('placesPage.modal.highlights')}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t(`placesPage.places.${selectedPlace.nameKey}.highlights`, { returnObjects: true }).map((highlight, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Tab */}
                {activeTab === 'contact' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">{t('placesPage.modal.contactInfo')}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                          <Phone className="w-6 h-6 mr-4 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-600">{t('placesPage.modal.phoneNumber')}</p>
                            <p className="font-semibold text-gray-900">{selectedPlace.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-4 bg-green-50 rounded-xl">
                          <Globe className="w-6 h-6 mr-4 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-600">{t('placesPage.modal.email')}</p>
                            <p className="font-semibold text-gray-900">{selectedPlace.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                          <MapPin className="w-6 h-6 mr-4 text-purple-600" />
                          <div>
                            <p className="text-sm text-gray-600">{t('placesPage.modal.address')}</p>
                            <p className="font-semibold text-gray-900">{getTranslatedLocation(selectedPlace.location)}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-4">{t('placesPage.modal.transportation')}</h4>
                        <p className="text-gray-600 mb-4 text-sm">
                          {t('placesPage.modal.transportationDesc')}
                        </p>
                        <button
                          onClick={() => openGoogleMaps(selectedPlace.coordinates, t(`placesPage.places.${selectedPlace.nameKey}.name`))}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                        >
                          <Navigation className="w-5 h-5" />
                          <span>{t('placesPage.modal.openGoogleMaps')}</span>
                        </button>
                        
                        <div className="mt-4 p-3 bg-white rounded-lg border">
                          <p className="text-xs text-gray-500 mb-1">{t('placesPage.modal.gpsCoordinates')}</p>
                          <p className="text-sm font-mono text-gray-700">
                            {selectedPlace.coordinates.lat}, {selectedPlace.coordinates.lng}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Places;