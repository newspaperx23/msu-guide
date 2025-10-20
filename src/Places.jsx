import React, { useState } from 'react';
import { MapPin, Clock, Info, ArrowRight, Camera, Navigation, Phone, Globe, Users, X, View } from 'lucide-react';
import NavigationBar from './NavigationBar';
import My3DScene from './My3DScene.jsx';
import { useTranslation } from "react-i18next";
import PanoViewer from './PanoViewer';

// Import images
import place1cover from './assets/place1-cover.jpg';
import place2cover from './assets/place2-cover.jpg';
import place3cover from './assets/place3-cover.jpg';
import place4cover from './assets/place4-cover.jpg';
import place5cover from './assets/place5-cover.jpg';
import place6cover from './assets/place6-cover.jpg';
import place1a from './assets/place1-1.jpg';
import place1b from './assets/place1-2.jpg';
import place1c from './assets/place1-3.jpg';
import place1d from './assets/place1-4.jpg';
import place1e from './assets/place1-5.jpg';
import place1f from './assets/place1-7.jpg';
import place1g from './assets/place1-8.jpg';
import place1h from './assets/place1-9.jpg';
import place1i from './assets/place1-10.jpg';
import place1j from './assets/place1-11.jpg';
import place1k from './assets/place1-12.jpg';
import place1l from './assets/place1-13.jpg';
import place1m from './assets/place1-14.jpg';
import place2a from './assets/place2-1.jpg';
import place2b from './assets/place2-2.jpg';
import place2c from './assets/place2-3.jpg';
import place2d from './assets/place2-4.jpg';
import place2e from './assets/place2-5.jpg';
import place2f from './assets/place2-6.jpg';
import place2g from './assets/place2-7.jpg';
import place2h from './assets/place2-8.jpg';
import place2i from './assets/place2-9.jpg';
import place2j from './assets/place2-10.jpg';
import place2k from './assets/place2-10.jpg';
import place3a from './assets/place3-1.jpg';
import place3b from './assets/place3-2.jpg';
import place3c from './assets/place3-3.jpg';
import place3d from './assets/place3-4.jpg';
import place3e from './assets/place3-5.jpg';
import place3f from './assets/place3-6.jpg';
import place3g from './assets/place3-7.jpg';
import place3h from './assets/place3-8.jpg';
import place3i from './assets/place3-9.jpg';
import place3j from './assets/place3-10.jpg';
import place4a from './assets/place4-1.jpg';
import place4b from './assets/place4-2.jpg';
import place4c from './assets/place4-3.jpg';
import place4d from './assets/place4-4.jpg';
import place4e from './assets/place4-5.jpg';
import place4f from './assets/place4-6.jpg';
import place4g from './assets/place4-7.jpg';
import place5a from './assets/place5-1.jpg';
import place5b from './assets/place5-3.jpg';
import place5c from './assets/place5-3.jpg';
import place5d from './assets/place5-4.jpg';
import place5e from './assets/place5-5.jpg';
import place5f from './assets/place5-6.jpg';
import place5g from './assets/place5-7.jpg';
import place5h from './assets/place5-8.jpg';
import place5i from './assets/place5-9.jpg';
import place5j from './assets/place5-10.jpg';
import place6a from './assets/place6-1.jpg';
import place6b from './assets/place6-2.jpg';
import place6c from './assets/place6-3.jpg';
import place6d from './assets/place6-4.jpg';

// Import Panorama images
import pano1 from './assets/panoramas/place1-360.jpg';
import pano2 from './assets/panoramas/place2-360.jpg';
import pano3 from './assets/panoramas/place3-360.jpg';
import pano4 from './assets/panoramas/place4-360.jpg';
import pano5 from './assets/panoramas/place5-360.jpg';
import pano6 from './assets/panoramas/place6-360.jpg';

// Import audio files
import place1AudioTh from './assets/audio/th/place1-audio.wav';
import place2AudioTh from './assets/audio/th/place2-audio.wav';
import place3AudioTh from './assets/audio/th/place3-audio.wav';
import place4AudioTh from './assets/audio/th/place4-audio.wav';
import place5AudioTh from './assets/audio/th/place5-audio.wav';
import place6AudioTh from './assets/audio/th/place6-audio.wav';
import place1AudioEn from './assets/audio/en/place1-audio.wav';
import place2AudioEn from './assets/audio/en/place2-audio.wav';
import place3AudioEn from './assets/audio/en/place3-audio.wav';
import place4AudioEn from './assets/audio/en/place4-audio.wav';
import place5AudioEn from './assets/audio/en/place5-audio.wav';
import place6AudioEn from './assets/audio/en/place6-audio.wav';
import place1AudioZh from './assets/audio/zh/place1-audio.wav';
import place2AudioZh from './assets/audio/zh/place2-audio.wav';
import place3AudioZh from './assets/audio/zh/place3-audio.wav';
import place4AudioZh from './assets/audio/zh/place4-audio.wav';
import place5AudioZh from './assets/audio/zh/place5-audio.wav';
import place6AudioZh from './assets/audio/zh/place6-audio.wav';

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentAudioPlace, setCurrentAudioPlace] = useState(null);
  const [panoImage, setPanoImage] = useState(null);
  const [popupImage, setPopupImage] = useState(null);
  const [popupImageIndex, setPopupImageIndex] = useState(0);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language || 'th';

  const audioUrls = {
    1: { th: place1AudioTh, en: place1AudioEn, zh: place1AudioZh },
    2: { th: place2AudioTh, en: place2AudioEn, zh: place2AudioZh },
    3: { th: place3AudioTh, en: place3AudioEn, zh: place3AudioZh },
    4: { th: place4AudioTh, en: place4AudioEn, zh: place4AudioZh },
    5: { th: place5AudioTh, en: place5AudioEn, zh: place5AudioZh },
    6: { th: place6AudioTh, en: place6AudioEn, zh: place6AudioZh }
  };

  const audioTranscripts = {
    1: { th: t('placesPage.places.libraryService.detailedDescription'), en: t('placesPage.places.libraryService.detailedDescription'), zh: t('placesPage.places.libraryService.detailedDescription') },
    2: { th: t('placesPage.places.registrar.detailedDescription'), en: t('placesPage.places.registrar.detailedDescription'), zh: t('placesPage.places.registrar.detailedDescription') },
    3: { th: t('placesPage.places.studentAffairs.detailedDescription'), en: t('placesPage.places.studentAffairs.detailedDescription'), zh: t('placesPage.places.studentAffairs.detailedDescription') },
    4: { th: t('placesPage.places.generalEducation.detailedDescription'), en: t('placesPage.places.generalEducation.detailedDescription'), zh: t('placesPage.places.generalEducation.detailedDescription') },
    5: { th: t('placesPage.places.dormitory.detailedDescription'), en: t('placesPage.places.dormitory.detailedDescription'), zh: t('placesPage.places.dormitory.detailedDescription') },
    6: { th: t('placesPage.places.boromrajkumari.detailedDescription'), en: t('placesPage.places.boromrajkumari.detailedDescription'), zh: t('placesPage.places.boromrajkumari.detailedDescription') }
  };

  const recommendedPlaces = [
    { id: 1, nameKey: "libraryService", image: place1cover, category: "Academic", openHours: "08:00 - 20:00", location: "อาคาร A ชั้น 1-3", coordinates: { lat: 16.245697331723587, lng: 103.25114362463549 }, phone: "042-123-456", email: "library@msu.ac.th", audioUrls: audioUrls[1], images: [{ url: place1a, captionKey: "libraryMainHall", type: "interior" }, { url: place1b, captionKey: "libraryStudyRoom", type: "study_room" }, { url: place1c, captionKey: "libraryReadingArea", type: "reading_area" }, { url: place1d, captionKey: "libraryComputerLab", type: "computer_lab" }, { url: place1e, captionKey: "libraryLounge", type: "lounge" }, { url: place1g, captionKey: "libraryMainLobby", type: "main_hall" }, { url: place1h, captionKey: "libraryRelaxationArea", type: "relaxation_area" }, { url: place1i, captionKey: "libraryEventSpace", type: "event_space" }, { url: place1j, captionKey: "libraryEntrance2", type: "entrance" }, { url: place1k, captionKey: "libraryHallway", type: "hallway" }, { url: place1l, captionKey: "libraryInterior", type: "interior_2" }, { url: place1m, captionKey: "libraryMSU", type: "library_sign" }], virtualTour: "/virtual-tour/library", capacity: "500 คน", panoImage: pano1 },
    { id: 2, nameKey: "registrar", image: place2cover, category: "Administrative", openHours: "08:30 - 16:30", location: "อาคารอำนวยการ ชั้น 1", coordinates: { lat: 16.249137030602363, lng: 103.25072868259224 }, phone: "042-123-457", email: "registrar@msu.ac.th", audioUrls: audioUrls[2], images: [{ url: place2a, captionKey: "registrarEntrance1", type: "entrance1" }, { url: place2b, captionKey: "registrarEntrance2", type: "entrance2" }, { url: place2d, captionKey: "registrarWaitingArea", type: "waiting_area" }, { url: place2c, captionKey: "registrarDocumentSubmission", type: "document_submission" }, { url: place2f, captionKey: "registrarOfficeInterior", type: "office_interior" }, { url: place2g, captionKey: "registrarSupportArea", type: "support_area" }, { url: place2h, captionKey: "registrarComputerArea", type: "computer_area" }, { url: place2i, captionKey: "registrarServiceCounter", type: "service_counter" }, { url: place2j, captionKey: "registrarQueueTicket", type: "queue_ticket" }, { url: place2k, captionKey: "registrarInfoSign", type: "info_sign" }], virtualTour: "/virtual-tour/registrar", capacity: "100 คน", panoImage: pano2 },
    { id: 3, nameKey: "studentAffairs", image: place3cover, category: "Student Services", openHours: "08:30 - 16:30", location: "อาคารกิจการนิสิต ชั้น 1", coordinates: { lat: 16.252316203199562, lng: 103.2468383835711 }, phone: "042-123-459", email: "studentaffairs@msu.ac.th", audioUrls: audioUrls[3], images: [{ url: place3a, captionKey: "studentAffairsServiceArea", type: "service_area" }, { url: place3b, captionKey: "studentAffairsCounselingRoom", type: "counseling_room" }, { url: place3c, captionKey: "studentAffairsClubMeeting", type: "club_meeting_room" }, { url: place3d, captionKey: "studentAffairsActivitySpace", type: "activity_space" }, { url: place3f, captionKey: "studentAffairsDisabilityArea", type: "disability_area" }, { url: place3g, captionKey: "studentAffairsWelfare", type: "student_welfare" }, { url: place3h, captionKey: "studentAffairsBuildingSide", type: "building_side" }, { url: place3i, captionKey: "studentAffairsFrontService", type: "front_service" }, { url: place3j, captionKey: "studentAffairsRelaxationArea2", type: "relaxation_area_2" }], virtualTour: "/virtual-tour/studentaffairs", capacity: "150 คน", panoImage: pano3 },
    { id: 4, nameKey: "generalEducation", image: place4cover, category: "Academic", openHours: "08:30 - 16:30", location: "อาคารศึกษาทั่วไป ชั้น 1-2", coordinates: { lat: 16.24681, lng: 103.24760 }, phone: "042-123-458", email: "gened@msu.ac.th", audioUrls: audioUrls[4], images: [{ url: place4a, captionKey: "geneEducationBuilding", type: "General Education" }, { url: place4b, captionKey: "geneEducationHallway1", type: "hallway" }, { url: place4c, captionKey: "geneEducationHallway2", type: "hallway2" }, { url: place4d, captionKey: "geneEducationCoworkingSpace", type: "Co-Woking Space" }, { url: place4f, captionKey: "geneEducationBackside", type: "backside" }, { url: place4g, captionKey: "geneEducationFrontService", type: "front_service" }, { url: place4e, captionKey: "geneEducationHallway3", type: "hallway3" }], virtualTour: "/virtual-tour/gened", capacity: "300 คน", panoImage: pano4 },
    { id: 5, nameKey: "dormitory", image: place5cover, category: "Accommodation", openHours: "24 ชั่วโมง", location: "อาคารหอพักนิสิต", coordinates: { lat: 16.25045, lng: 103.24887 }, phone: "042-123-460", email: "dormitory@msu.ac.th", audioUrls: audioUrls[5], images: [{ url: place5a, captionKey: "dormitoryOnCampus", type: "On-Campus Dorm" }, { url: place5b, captionKey: "dormitoryLobby", type: "lobby" }, { url: place5c, captionKey: "dormitoryParking", type: "common_area" }, { url: place5d, captionKey: "dormitoryBuilding", type: "laundry_room" }], virtualTour: "/virtual-tour/dormitory", capacity: "500 คน", panoImage: pano5 },
    { id: 6, nameKey: "boromrajkumari", image: place6cover, category: "Academic", openHours: "06:00 - 22:00", location: "อาคารบรมราชกุมารี", coordinates: { lat: 16.24405, lng: 103.24906 }, phone: "042-123-461", email: "boromrajkumari@msu.ac.th", audioUrls: audioUrls[6], images: [{ url: place6a, captionKey: "boromrajkumariBuilding", type: "lecture_hall" }, { url: place6b, captionKey: "boromrajkumariInterior", type: "science_lab" }, { url: place6c, captionKey: "boromrajkumariFinanceRoom", type: "conference_room" }, { url: place6d, captionKey: "boromrajkumariLobby", type: "main_lobby" }], virtualTour: "/virtual-tour/boromrajkumari", capacity: "1000 คน", panoImage: pano6 }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Academic': 'from-blue-500 to-blue-600',
      'Administrative': 'from-teal-500 to-teal-600',
      'Student Services': 'from-violet-500 to-violet-600',
      'Accommodation': 'from-orange-500 to-orange-600'
    };
    return colors[category] || 'from-slate-500 to-slate-600';
  };

  const getCategoryBadgeColor = (category) => {
    const colors = {
      'Academic': 'bg-blue-500/20 text-blue-300',
      'Administrative': 'bg-teal-500/20 text-teal-300',
      'Student Services': 'bg-violet-500/20 text-violet-300',
      'Accommodation': 'bg-orange-500/20 text-orange-300'
    };
    return colors[category] || 'bg-slate-500/20 text-slate-300';
  };

  const openGoogleMaps = (coordinates, name) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}&query_place_id=${encodeURIComponent(name)}`;
    window.open(url, '_blank');
  };

  const nextImage = () => {
    if (selectedPlace && selectedPlace.images) {
      setCurrentImageIndex((prev) => prev === selectedPlace.images.length - 1 ? 0 : prev + 1);
    }
  };

  const prevImage = () => {
    if (selectedPlace && selectedPlace.images) {
      setCurrentImageIndex((prev) => prev === 0 ? selectedPlace.images.length - 1 : prev - 1);
    }
  };

  const nextPopupImage = () => {
    if (selectedPlace && selectedPlace.images) {
      setPopupImageIndex((prev) => prev === selectedPlace.images.length - 1 ? 0 : prev + 1);
    }
  };

  const prevPopupImage = () => {
    if (selectedPlace && selectedPlace.images) {
      setPopupImageIndex((prev) => prev === 0 ? selectedPlace.images.length - 1 : prev - 1);
    }
  };

  const getTranslatedLocation = (location) => {
    return t(`placesPage.locations.${location}`, { defaultValue: location });
  };

  const getTranslatedOpenHours = (hours) => {
    return t(`placesPage.openHours.${hours}`, { defaultValue: hours });
  };

  const getImageCaption = (captionKey) => {
    return t(`placesPage.imageDescriptions.${captionKey}`, { defaultValue: captionKey });
  };

  const handlePlaceSelection = (place) => {
    setSelectedPlace(place);
  };

  const handleAudioStateChange = (audioPlace) => {
    setCurrentAudioPlace(audioPlace);
  };

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <NavigationBar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-6 inline-block">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400 bg-clip-text text-transparent mb-4 pt-4">
            {t('placesPage.header')}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('placesPage.description')}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommendedPlaces.map((place, idx) => (
            <div
              key={place.id}
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => handlePlaceSelection(place)}
            >
              {/* Card */}
              <div className="relative h-80 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:border-white/40">
                <img
                  src={place.image}
                  alt={t(`placesPage.places.${place.nameKey}.name`)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-md border border-white/20 ${getCategoryBadgeColor(place.category)}`}>
                    {t(`placesPage.categories.${place.category}`)}
                  </span>
                </div>
                {currentAudioPlace?.id === place.id && (
                  <div className="absolute top-4 right-4 z-20 bg-green-500/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 border border-green-400/50">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    กำลังเล่น
                  </div>
                )}
                {selectedPlace?.id === place.id && (
                  <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl opacity-100 z-30"></div>
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {t(`placesPage.places.${place.nameKey}.name`)}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
                    {t(`placesPage.places.${place.nameKey}.description`)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-slate-400">
                      <div className="flex items-center gap-1 text-xs">
                        <Clock className="w-4 h-4" />
                        <span>{getTranslatedOpenHours(place.openHours)}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{getTranslatedLocation(place.location)}</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-400/50 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Smaller Footer */}
        <div className="relative p-4 md:p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-lg text-center hover:bg-white/10 transition-all duration-500">
          <Info className="w-8 h-8 text-teal-400 mx-auto mb-2" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
            {t('placesPage.moreinfo')}
          </h3>
          <p className="text-slate-300 mb-3 max-w-2xl mx-auto text-sm">
            {t('placesPage.moreInfoDesc')}
          </p>
          <button className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 text-sm">
            {t('placesPage.contact')}
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedPlace && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto pointer-events-none">
          <div 
            className="absolute inset-0 bg-black/40 transition-all duration-300 animate-fade-in pointer-events-auto"
            onClick={() => {
              setSelectedPlace(null);
              setCurrentImageIndex(0);
              setActiveTab('overview');
            }}
          ></div>
          <div className="relative z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-white/20 backdrop-blur-xl animate-slide-up pointer-events-auto">
            <button
              onClick={() => {
                setSelectedPlace(null);
                setCurrentImageIndex(0);
                setActiveTab('overview');
              }}
              className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative h-80 bg-gradient-to-br from-blue-600/20 to-violet-600/20 overflow-hidden">
              {selectedPlace.images && selectedPlace.images.length > 0 && (
                <>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: `url('${selectedPlace.images[currentImageIndex].url}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/20"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/20"
                  >
                    →
                  </button>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/20">
                    <p className="text-sm">{getImageCaption(selectedPlace.images[currentImageIndex].captionKey)}</p>
                    <p className="text-xs text-slate-400">{currentImageIndex + 1} / {selectedPlace.images.length}</p>
                  </div>
                </>
              )}
            </div>
            <div className="p-8">
              <div className="mb-8">
                <div className="mb-4">
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {t(`placesPage.places.${selectedPlace.nameKey}.name`)}
                  </h1>
                  <span className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-md border border-white/20 ${getCategoryBadgeColor(selectedPlace.category)}`}>
                    {t(`placesPage.categories.${selectedPlace.category}`)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <button
                    onClick={() => openGoogleMaps(selectedPlace.coordinates, t(`placesPage.places.${selectedPlace.nameKey}.name`))}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                  >
                    <Navigation className="w-5 h-5" />
                    {t('placesPage.modal.navigation')}
                  </button>

                  {selectedPlace.panoImage && (
                    <button
                      onClick={() => setPanoImage(selectedPlace.panoImage)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300"
                    >
                      <View className="w-5 h-5" />
                      360° View
                    </button>
                  )}

                  <button
                    onClick={() => window.open(`tel:${selectedPlace.phone}`)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    {t('placesPage.modal.call')}
                  </button>
                </div>
              </div>
              <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
                {[
                  { id: 'overview', label: t('placesPage.modal.overview'), icon: Info },
                  { id: 'gallery', label: t('placesPage.modal.gallery'), icon: Camera },
                  { id: 'services', label: 'บริการ', icon: Users },
                  { id: 'contact', label: t('placesPage.modal.contact'), icon: Phone }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-blue-400 border-b-2 border-blue-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="min-h-[300px] text-slate-200">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{t('placesPage.modal.placeDetails')}</h3>
                      <p className="text-slate-300 leading-relaxed">
                        {t(`placesPage.places.${selectedPlace.nameKey}.detailedDescription`)}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <Clock className="w-5 h-5 mr-3 text-blue-400" />
                          <h4 className="font-semibold text-white">{t('placesPage.modal.openingHours')}</h4>
                        </div>
                        <p className="text-slate-300">{getTranslatedOpenHours(selectedPlace.openHours)}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-teal-500/50 transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <MapPin className="w-5 h-5 mr-3 text-teal-400" />
                          <h4 className="font-semibold text-white">{t('placesPage.modal.location')}</h4>
                        </div>
                        <p className="text-slate-300">{getTranslatedLocation(selectedPlace.location)}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-violet-500/50 transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <Users className="w-5 h-5 mr-3 text-violet-400" />
                          <h4 className="font-semibold text-white">{t('placesPage.modal.capacity')}</h4>
                        </div>
                        <p className="text-slate-300">{selectedPlace.capacity}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-4">{t('placesPage.modal.facilities')}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {t(`placesPage.places.${selectedPlace.nameKey}.facilities`, { returnObjects: true }).map((facility, index) => (
                          <div key={index} className="flex items-center p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                            <span className="text-sm text-slate-300">{facility}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'gallery' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('placesPage.modal.galleryTitle')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedPlace.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative group overflow-hidden rounded-xl cursor-pointer bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-48"
                          onClick={() => {
                            setPopupImage(image);
                            setPopupImageIndex(index);
                          }}
                        >
                          <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url('${image.url}')` }}
                          ></div>
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 to-transparent p-4">
                            <p className="text-white text-sm font-medium">{getImageCaption(image.captionKey)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {activeTab === 'services' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('placesPage.modal.servicesProvided')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {t(`placesPage.places.${selectedPlace.nameKey}.services`, { returnObjects: true }).map((service, index) => (
                        <div key={index} className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                          <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                          <span className="text-slate-200">{service}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                      <h4 className="text-lg font-bold text-white mb-4">{t('placesPage.modal.highlights')}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t(`placesPage.places.${selectedPlace.nameKey}.highlights`, { returnObjects: true }).map((highlight, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                            <span className="text-slate-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'contact' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">{t('placesPage.modal.contactInfo')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                          <Phone className="w-6 h-6 mr-4 text-blue-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-sm text-slate-400 mb-1">{t('placesPage.modal.phoneNumber')}</p>
                            <p className="font-semibold text-white">{selectedPlace.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-teal-500/50 transition-all duration-300">
                          <Globe className="w-6 h-6 mr-4 text-teal-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-sm text-slate-400 mb-1">{t('placesPage.modal.email')}</p>
                            <p className="font-semibold text-white">{selectedPlace.email}</p>
                          </div>
                        </div>
                        <div className="flex items-start p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-violet-500/50 transition-all duration-300">
                          <MapPin className="w-6 h-6 mr-4 text-violet-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-sm text-slate-400 mb-1">{t('placesPage.modal.address')}</p>
                            <p className="font-semibold text-white">{getTranslatedLocation(selectedPlace.location)}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
                        <h4 className="font-bold text-white mb-4">{t('placesPage.modal.transportation')}</h4>
                        <p className="text-slate-300 mb-4 text-sm">
                          {t('placesPage.modal.transportationDesc')}
                        </p>
                        <button
                          onClick={() => openGoogleMaps(selectedPlace.coordinates, t(`placesPage.places.${selectedPlace.nameKey}.name`))}
                          className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white flex items-center justify-center gap-2 font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
                        >
                          <Navigation className="w-5 h-5" />
                          {t('placesPage.modal.openGoogleMaps')}
                        </button>
                        <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                          <p className="text-xs text-slate-400 mb-1">{t('placesPage.modal.gpsCoordinates')}</p>
                          <p className="text-sm font-mono text-slate-300">
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

      {/* Image Popup Modal */}
      {popupImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
          <div 
            className="absolute inset-0 bg-black/70 transition-all duration-300 animate-fade-in pointer-events-auto"
            onClick={() => setPopupImage(null)}
          ></div>
          <div className="relative z-10 bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl animate-slide-up pointer-events-auto">
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300 border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <div className="relative h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img 
                src={selectedPlace.images[popupImageIndex].url}
                alt={getImageCaption(selectedPlace.images[popupImageIndex].captionKey)}
                className="max-w-full max-h-full object-contain"
              />
              
              <button
                onClick={prevPopupImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 border border-white/20"
              >
                ←
              </button>
              <button
                onClick={nextPopupImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all duration-300 border border-white/20"
              >
                →
              </button>
            </div>
            
            <div className="p-6 bg-gradient-to-t from-slate-900 to-slate-800">
              <p className="text-white text-lg font-semibold mb-2">
                {getImageCaption(selectedPlace.images[popupImageIndex].captionKey)}
              </p>
              <p className="text-slate-400 text-sm">
                {popupImageIndex + 1} / {selectedPlace.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
      
      <PanoViewer image={panoImage} onClose={() => setPanoImage(null)} />

      <div className="right-[20%] bottom-[10%] md:right-[10%] md:bottom-[15%] fixed z-[100] pointer-events-auto">
        <My3DScene 
          selectedPlace={selectedPlace}
          audioTranscripts={audioTranscripts}
          onAudioStateChange={handleAudioStateChange}
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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Places;