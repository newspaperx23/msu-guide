import React, { useState } from 'react';
import { MapPin, Clock, Info, ArrowRight, Camera, Navigation, Phone, Globe, Users, Wifi, Car, Accessibility } from 'lucide-react';
import NavigationBar from './NavigationBar';


const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const recommendedPlaces = [
    {
      id: 1,
      name: "สำนักวิทยบริการ",
      nameEn: "Academic Resources Center",
      description: "ศูนย์รวมทรัพยากรการเรียนรู้ หนังสือ วารสาร และฐานข้อมูลออนไลน์",
      descriptionEn: "Learning resource center with books, journals, and online databases",
      detailedDescription: "สำนักวิทยบริการเป็นหัวใจสำคัญของการเรียนรู้ในมหาวิทยาลัย มีหนังสือกว่า 50,000 เล่ม วารสารทั้งในและต่างประเทศ ห้องศึกษาค้นคว้าส่วนบุคคล ห้องสัมมนากลุ่มย่อย และระบบฐานข้อมูลออนไลน์ที่ทันสมัย พร้อมบรรณารักษ์ผู้เชี่ยวชาญให้คำปรึกษา",
      image: "/api/placeholder/400/250",
      category: "Academic",
      openHours: "08:00 - 20:00",
      location: "อาคาร A ชั้น 1-3",
      coordinates: { lat: 17.3644, lng: 102.8194 },
      phone: "042-123-456",
      email: "library@msu.ac.th",
      highlights: ["ห้องสมุด", "ห้องศึกษาค้นคว้า", "คอมพิวเตอร์", "Wi-Fi ฟรี"],
      facilities: ["Wi-Fi ฟรี", "ปรับอากาศ", "ที่จอดรถ", "เข้าถึงได้สำหรับผู้พิการ"],
      images: [
        { url: "/api/placeholder/600/400", caption: "ห้องสมุดหลัก", type: "interior" },
        { url: "/api/placeholder/600/400", caption: "ห้องศึกษาค้นคว้า", type: "study_room" },
        { url: "/api/placeholder/600/400", caption: "มุมอ่านหนังสือ", type: "reading_area" },
        { url: "/api/placeholder/600/400", caption: "ห้องคอมพิวเตอร์", type: "computer_lab" }
      ],
      virtualTour: "/virtual-tour/library",
      capacity: "500 คน",
      services: ["ยืม-คืนหนังสือ", "สืบค้นฐานข้อมูล", "ถ่ายเอกสาร", "พิมพ์เอกสาร", "ห้องสัมมนา"]
    },
    {
      id: 2,
      name: "กองทะเบียนและประมวลผล",
      nameEn: "Registrar Office",
      description: "บริการด้านทะเบียนนิสิต การลงทะเบียน และเอกสารทางการศึกษา",
      descriptionEn: "Student registration services and academic documents",
      detailedDescription: "กองทะเบียนและประมวลผลให้บริการด้านการลงทะเบียนเรียน การออกเอกสารทางการศึกษา การจัดสอบ และการประมวลผลการเรียน พร้อมระบบออนไลน์ที่สะดวกรวดเร็ว มีเจ้าหนาที่ผู้เชี่ยวชาญให้คำปรึกษาตลอดเวลาทำการ",
      image: "/api/placeholder/400/250",
      category: "Administrative",
      openHours: "08:30 - 16:30",
      location: "อาคารอำนวยการ ชั้น 1",
      coordinates: { lat: 17.3640, lng: 102.8190 },
      phone: "042-123-457",
      email: "registrar@msu.ac.th",
      highlights: ["ลงทะเบียนเรียน", "ใบรับรองการศึกษา", "ใบแสดงผลการเรียน", "เปลี่ยนแปลงข้อมูล"],
      facilities: ["ระบบคิวออนไลน์", "ปรับอากาศ", "ที่นั่งรอ", "เข้าถึงได้สำหรับผู้พิการ"],
      images: [
        { url: "/api/placeholder/600/400", caption: "จุดให้บริการหลัก", type: "service_counter" },
        { url: "/api/placeholder/600/400", caption: "ห้องรอรับบริการ", type: "waiting_area" },
        { url: "/api/placeholder/600/400", caption: "จุดยื่นเอกสาร", type: "document_submission" },
        { url: "/api/placeholder/600/400", caption: "ระบบคิวอิเล็กทรอนิกส์", type: "queue_system" }
      ],
      virtualTour: "/virtual-tour/registrar",
      capacity: "100 คน",
      services: ["ลงทะเบียนเรียน", "ออกใบรับรอง", "แก้ไขข้อมูล", "ชำระเงิน", "ปรึกษาการเรียน"]
    },
    {
      id: 3,
      name: "สำนักศึกษาทั่วไป",
      nameEn: "General Education Center",
      description: "หน่วยงานที่รับผิดชอบการจัดการเรียนการสอนวิชาศึกษาทั่วไป",
      descriptionEn: "Department responsible for general education courses",
      detailedDescription: "สำนักศึกษาทั่วไปมีภารกิจในการจัดการเรียนการสอนวิชาศึกษาทั่วไปให้กับนิสิตทุกคณะ มีห้องเรียนที่ทันสมัย ห้องปฏิบัติการคอมพิวเตอร์ ห้องประชุมสัมมนา และทีมอาจารย์ผู้เชี่ยวชาญในสาขาต่างๆ พร้อมให้คำปรึกษาด้านการเรียน",
      image: "/api/placeholder/400/250",
      category: "Academic",
      openHours: "08:30 - 16:30",
      location: "อาคารศึกษาทั่วไป ชั้น 1-2",
      coordinates: { lat: 17.3642, lng: 102.8192 },
      phone: "042-123-458",
      email: "gened@msu.ac.th",
      highlights: ["วิชาศึกษาทั่วไป", "ปรึกษาวิชาเรียน", "ห้องเรียน", "ห้องประชุม"],
      facilities: ["ห้องเรียนมัลติมีเดีย", "Wi-Fi ฟรี", "ปรับอากาศ", "ที่จอดรถ"],
      images: [
        { url: "/api/placeholder/600/400", caption: "ห้องเรียนใหญ่", type: "classroom" },
        { url: "/api/placeholder/600/400", caption: "ห้องประชุมสัมมนา", type: "seminar_room" },
        { url: "/api/placeholder/600/400", caption: "ห้องปฏิบัติการคอมพิวเตอร์", type: "computer_lab" },
        { url: "/api/placeholder/600/400", caption: "พื้นที่พักผ่อนนิสิต", type: "student_lounge" }
      ],
      virtualTour: "/virtual-tour/gened",
      capacity: "300 คน",
      services: ["การเรียนการสอน", "ปรึกษาวิชาเรียน", "จองห้องเรียน", "กิจกรรมพิเศษ", "สัมมนาวิชาการ"]
    },
    {
      id: 4,
      name: "กองกิจการนิสิต",
      nameEn: "Student Affairs Division",
      description: "บริการด้านกิจกรรมนิสิต ทุนการศึกษา และสวัสดิการนิสิต",
      descriptionEn: "Student activities, scholarships, and student welfare services",
      detailedDescription: "กองกิจการนิสิตเป็นศูนย์กลางการดูแลนิสิตนอกห้องเรียน จัดกิจกรรมพัฒนาทักษะชีวิต ให้ทุนการศึกษา บริการสวัสดิการ คำปรึกษาส่วนบุคคล และสนับสนุนชมรมนิสิต มีที่ปรึกษาผู้เชี่ยวชาญพร้อมช่วยเหลือนิสิตในทุกด้าน",
      image: "/api/placeholder/400/250",
      category: "Student Services",
      openHours: "08:30 - 16:30",
      location: "อาคารกิจการนิสิต ชั้น 1",
      coordinates: { lat: 17.3638, lng: 102.8188 },
      phone: "042-123-459",
      email: "studentaffairs@msu.ac.th",
      highlights: ["ทุนการศึกษา", "กิจกรรมนิสิต", "สวัสดิการ", "คำปรึกษา"],
      facilities: ["ห้องให้คำปรึกษา", "ห้องประชุมชมรม", "พื้นที่จัดกิจกรรม", "Wi-Fi ฟรี"],
      images: [
        { url: "/api/placeholder/600/400", caption: "จุดให้บริการหลัก", type: "service_area" },
        { url: "/api/placeholder/600/400", caption: "ห้องให้คำปรึกษา", type: "counseling_room" },
        { url: "/api/placeholder/600/400", caption: "ห้องประชุมชมรม", type: "club_meeting_room" },
        { url: "/api/placeholder/600/400", caption: "พื้นที่จัดกิจกรรม", type: "activity_space" }
      ],
      virtualTour: "/virtual-tour/studentaffairs",
      capacity: "150 คน",
      services: ["ทุนการศึกษา", "คำปรึกษา", "จัดกิจกรรม", "สวัสดิการ", "สนับสนุนชมรม"]
    },
    {
      id: 5,
      name: "หอพักภายใน",
      nameEn: "On-Campus Dormitory",
      description: "หอพักสำหรับนิสิตภายในมหาวิทยาลัย สะดวก ปลอดภัย",
      descriptionEn: "On-campus accommodation for students - convenient and safe",
      detailedDescription: "หอพักภายในมหาวิทยาลัยมีห้องพักสำหรับนิสิตชาย-หญิงแยกอาคาร ห้องพักมีเครื่องใช้ไฟฟ้าครบครัน Wi-Fi ฟรี ระบบรักษาความปลอดภัย 24 ชั่วโมง ห้องซักรีด พื้นที่พักผ่อน ร้านสะดวกซื้อ และใกล้กับอาคารเรียนทุกแห่ง",
      image: "/api/placeholder/400/250",
      category: "Accommodation",
      openHours: "24 ชั่วโมง",
      location: "อาคารหอพักนิสิต",
      coordinates: { lat: 17.3646, lng: 102.8196 },
      phone: "042-123-460",
      email: "dormitory@msu.ac.th",
      highlights: ["ที่พักใกล้เรียน", "ความปลอดภัย", "สิ่งอำนวยความสะดวก", "ชุมชนนิสิต"],
      facilities: ["ระบบรักษาความปลอดภัย", "Wi-Fi ฟรี", "ห้องซักรีด", "ร้านสะดวกซื้อ", "ที่จอดรถ"],
      images: [
        { url: "/api/placeholder/600/400", caption: "ห้องพักตัวอย่าง", type: "sample_room" },
        { url: "/api/placeholder/600/400", caption: "ล็อบบี้หอพัก", type: "lobby" },
        { url: "/api/placeholder/600/400", caption: "พื้นที่พักผ่อนส่วนกลาง", type: "common_area" },
        { url: "/api/placeholder/600/400", caption: "ห้องซักรีด", type: "laundry_room" }
      ],
      virtualTour: "/virtual-tour/dormitory",
      capacity: "500 คน",
      services: ["ที่พัก", "รักษาความปลอดภัย", "ซักรีด", "ร้านสะดวกซื้อ", "กิจกรรมหอพัก"]
    },
    {
      id: 6,
      name: "อาคารบรมราชกุมารี",
      nameEn: "Boromrajkumari Building",
      description: "อาคารหลักที่มีห้องเรียน ห้องปฏิบัติการ และสำนักงานต่างๆ",
      descriptionEn: "Main building with classrooms, laboratories, and various offices",
      detailedDescription: "อาคารบรมราชกุมารีเป็นอาคารหลักของมหาวิทยาลัย มีห้องเรียนใหญ่ที่ทันสมัย ห้องปฏิบัติการวิทยาศาสตร์ ห้องประชุมขนาดใหญ่ ลิฟต์สำหรับผู้พิการ และระบบปรับอากาศตลอดอาคาร เป็นศูนย์กลางการเรียนการสอนที่สำคัญของมหาวิทยาลัย",
      image: "/api/placeholder/400/250",
      category: "Academic",
      openHours: "06:00 - 22:00",
      location: "อาคารบรมราชกุมารี",
      coordinates: { lat: 17.3643, lng: 102.8191 },
      phone: "042-123-461",
      email: "boromrajkumari@msu.ac.th",
      highlights: ["ห้องเรียนใหญ่", "ห้องปฏิบัติการ", "ห้องประชุม", "สำนักงานคณะ"],
      facilities: ["ลิฟต์", "ปรับอากาศ", "ระบบเสียง", "โปรเจคเตอร์", "Wi-Fi ฟรี"],
      images: [
        { url: "/api/placeholder/600/400", caption: "ห้องบรรยายใหญ่", type: "lecture_hall" },
        { url: "/api/placeholder/600/400", caption: "ห้องปฏิบัติการวิทยาศาสตร์", type: "science_lab" },
        { url: "/api/placeholder/600/400", caption: "ห้องประชุมใหญ่", type: "conference_room" },
        { url: "/api/placeholder/600/400", caption: "ล็อบบี้ชั้น 1", type: "main_lobby" }
      ],
      virtualTour: "/virtual-tour/boromrajkumari",
      capacity: "1000 คน",
      services: ["การเรียนการสอน", "ห้องปฏิบัติการ", "จัดประชุม", "สำนักงานคณะ", "บริการลิฟต์"]
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
    // สำหรับการสาธิต ให้เปิด URL ตัวอย่าง
    alert('กำลังเปิดมุมมอง 360°... (ในระบบจริงจะเชื่อมต่อกับ Virtual Tour)');
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      {/* Header Section */}
      <NavigationBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            สถานที่แนะนำ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ค้นพบสถานที่สำคัญในมหาวิทยาลัยที่จะช่วยให้การศึกษาและชีวิตในรั้วมหาวิทยาลัยของคุณสมบูรณ์แบบ
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedPlace(place)}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(place.category)}`}>
                    {place.category}
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
                  {place.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 font-medium">
                  {place.nameEn}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {place.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{place.openHours}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{place.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {place.highlights.slice(0, 2).map((highlight, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg"
                    >
                      {highlight}
                    </span>
                  ))}
                  {place.highlights.length > 2 && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg">
                      +{place.highlights.length - 2} เพิ่มเติม
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
          <Info className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ต้องการข้อมูลเพิ่มเติม?
          </h3>
          <p className="text-gray-600 mb-6">
            คลิกที่สถานที่ใดสถานที่หนึ่งเพื่อดูรายละเอียดเพิ่มเติม หรือติดต่อฝ่ายประชาสัมพันธ์
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors">
            ติดต่อเรา
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
                    <span>มุมมอง 360°</span>
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
                      {selectedPlace.name}
                    </h1>
                    <p className="text-xl text-gray-600 mb-3">{selectedPlace.nameEn}</p>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedPlace.category)}`}>
                      {selectedPlace.category}
                    </span>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => openGoogleMaps(selectedPlace.coordinates, selectedPlace.name)}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>นำทาง</span>
                    </button>
                    <button
                      onClick={() => window.open(`tel:${selectedPlace.phone}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      <span>โทร</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="flex border-b border-gray-200 mb-6">
                {[
                  { id: 'overview', label: 'ภาพรวม', icon: Info },
                  { id: 'gallery', label: 'รูปภาพ', icon: Camera },
                  { id: 'services', label: 'บริการ', icon: Users },
                  { id: 'contact', label: 'ติดต่อ', icon: Phone }
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">รายละเอียดสถานที่</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {selectedPlace.detailedDescription}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Clock className="w-5 h-5 mr-3 text-blue-600" />
                          <h4 className="font-semibold text-gray-900">เวลาทำการ</h4>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedPlace.openHours}</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <MapPin className="w-5 h-5 mr-3 text-green-600" />
                          <h4 className="font-semibold text-gray-900">ที่ตั้ง</h4>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedPlace.location}</p>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-xl">
                        <div className="flex items-center mb-3">
                          <Users className="w-5 h-5 mr-3 text-purple-600" />
                          <h4 className="font-semibold text-gray-900">ความจุ</h4>
                        </div>
                        <p className="text-gray-700 font-medium">{selectedPlace.capacity}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">สิ่งอำนวยความสะดวก</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {selectedPlace.facilities.map((facility, index) => (
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">รูปภาพมุมต่างๆ</h3>
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
                          <h4 className="font-semibold text-gray-900 mb-1">ต้องการมุมมอง 360°?</h4>
                          <p className="text-gray-600 text-sm">สำรวจสถานที่ในมุมมองเสมือนจริง</p>
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">บริการที่ให้</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {selectedPlace.services.map((service, index) => (
                        <div key={index} className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border-l-4 border-blue-500">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                          <span className="text-gray-800 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">จุดเด่นของสถานที่</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedPlace.highlights.map((highlight, index) => (
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
                    <h3 className="text-xl font-semibold text-gray-900">ข้อมูลการติดต่อ</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                          <Phone className="w-6 h-6 mr-4 text-blue-600" />
                          <div>
                            <p className="text-sm text-gray-600">เบอร์โทรศัพท์</p>
                            <p className="font-semibold text-gray-900">{selectedPlace.phone}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-4 bg-green-50 rounded-xl">
                          <Globe className="w-6 h-6 mr-4 text-green-600" />
                          <div>
                            <p className="text-sm text-gray-600">อีเมล</p>
                            <p className="font-semibold text-gray-900">{selectedPlace.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                          <MapPin className="w-6 h-6 mr-4 text-purple-600" />
                          <div>
                            <p className="text-sm text-gray-600">ที่อยู่</p>
                            <p className="font-semibold text-gray-900">{selectedPlace.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-4">การเดินทาง</h4>
                        <p className="text-gray-600 mb-4 text-sm">
                          คลิกปุ่มนำทางเพื่อเปิด Google Maps และดูเส้นทางการเดินทาง
                        </p>
                        <button
                          onClick={() => openGoogleMaps(selectedPlace.coordinates, selectedPlace.name)}
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                        >
                          <Navigation className="w-5 h-5" />
                          <span>เปิด Google Maps</span>
                        </button>
                        
                        <div className="mt-4 p-3 bg-white rounded-lg border">
                          <p className="text-xs text-gray-500 mb-1">พิกัด GPS</p>
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