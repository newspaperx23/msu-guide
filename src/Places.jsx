import React, { useState } from 'react';
import { MapPin, Clock, Info, ArrowRight, Camera, Navigation, Phone, Globe, Users, Wifi, Car, Accessibility } from 'lucide-react';
import NavigationBar from './NavigationBar';
import My3DScene from './My3DScene.jsx';
import { useTranslation } from "react-i18next";
import place1a from './assets/place1-1.jpg';
import place1b from './assets/place1-2.jpg';
import place1c from './assets/place1-3.jpg';
import place1d from './assets/place1-4.jpg';
import place1e from './assets/place1-5.jpg';
import place2a from './assets/place2-1.jpg';
import place2b from './assets/place2-2.jpg';
import place2c from './assets/place2-3.jpg';
import place2d from './assets/place2-4.jpg';
import place3a from './assets/place3-1.jpg';
import place3b from './assets/place3-2.jpg';
import place3c from './assets/place3-3.jpg';
import place3d from './assets/place3-4.jpg';
import audio1a from './assets/audio/th/place1-audio.wav';
import audio1b from './assets/audio/en/place1-audio.wav';
import audio1c from './assets/audio/zh/place1-audio.wav';
import audio2a from './assets/audio/th/place2-audio.wav';
import audio2b from './assets/audio/en/place2-audio.wav';
import audio2c from './assets/audio/zh/place2-audio.wav';
import audio3a from './assets/audio/th/place3-audio.wav';
import audio3b from './assets/audio/en/place3-audio.wav';
import audio3c from './assets/audio/zh/place3-audio.wav';
import { a } from '@react-spring/three';



const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentAudioPlace, setCurrentAudioPlace] = useState(null); // เพิ่มสำหรับ audio control
  const { t, i18n } = useTranslation();

  // Audio transcript data
  const audioTranscripts = {
    1: {
      th: "สวัสดีครับทุกคน ตอนนี้เรากำลังอยู่ที่ **สำนักคอมพิวเตอร์ มหาวิทยาลัยมหาสารคาม** ที่นี่ถือเป็นศูนย์กลางด้านเทคโนโลยีสารสนเทศ และยังเป็นพื้นที่การเรียนรู้สำคัญของนิสิตทุกคณะ\nภายในอาคารมีทั้ง **ห้องสมุดหลัก** ที่เต็มไปด้วยหนังสือและวารสารมากมาย, **ห้องศึกษาค้นคว้า**, **ห้องคอมพิวเตอร์** พร้อมอินเทอร์เน็ตความเร็วสูง และ **มุมอ่านหนังสือ** ที่บรรยากาศผ่อนคลาย\nที่พิเศษสุด ๆ คือมี **ห้องคาราโอเกะ** ไว้สำหรับร้องเพลงกับเพื่อน ๆ หรือผ่อนคลายหลังจากเรียนมาทั้งวัน ที่นี่สามารถรองรับนิสิตได้มากกว่า 500 คนต่อวัน ถือเป็นทั้งแหล่งความรู้และพื้นที่ผ่อนคลายครบวงจรเลยครับ",
      en: "Hi everyone! Welcome to the **Computer Center at Mahasarakham University**. This is the hub of information technology and one of the most important learning spaces for all students.\nInside, you'll find the **main library**, **study rooms**, a **computer lab** with high-speed internet, and cozy **reading corners**.\nBut here's something unique — the Computer Center also has a **karaoke room**! It's the perfect place to sing with friends and unwind after classes. With a capacity of over 500 students daily, this place is truly both a learning hub and a fun spot to recharge.",
      zh: "大家好！欢迎来到 **玛哈沙拉堪大学的计算机中心**。 这里不仅是信息技术的核心，也是学生们的重要学习空间。\n里面有 **主图书馆**、**自习室**、高速网络的 **计算机实验室**，还有舒适的 **阅读角落**。\n更特别的是，这里竟然还有 **卡拉OK室**！学习之余，可以和朋友一起唱歌放松。每天可容纳超过 500 名学生，是一个结合学习与娱乐的好地方。"
    },
    2: {
      th: "ต่อไปคือ **งานทะเบียนและประมวลผล** หรือที่เรามักเรียกกันสั้น ๆ ว่า \"ทะเบียนกลาง\" ครับ ที่นี่เปรียบเสมือนศูนย์กลางด้านเอกสารและข้อมูลการศึกษา ไม่ว่าน้อง ๆ จะลงทะเบียนเรียน ขอใบรับรอง หรือทำเรื่องสำเร็จการศึกษา ก็ต้องมาที่นี่\nภายในมี **ห้องรอรับบริการที่สะดวกสบาย**, **จุดยื่นเอกสารที่เป็นระเบียบ** และเจ้าหน้าที่ที่พร้อมให้คำแนะนำเสมอ ถึงแม้จะเป็นงานด้านเอกสาร แต่บรรยากาศไม่ตึงเครียดเลยครับ",
      en: "Next up is the **Registrar Office**, often called the \"central registration.\" This is where all academic records and documents are managed. Whether you need to register for classes, request transcripts, or process graduation documents, this is the place.\nThe office features a **comfortable waiting area**, **organized service counters**, and helpful staff who are always ready to assist.",
      zh: "接下来是 **教务注册办公室**。 这里是学生学籍与文件的管理中心。不论是选课、申请成绩单，还是办理毕业手续，都需要到这里来。\n办公室里有 **舒适的等候区**、**整齐的服务窗口**，还有亲切的工作人员为大家提供帮助。"
    },
    3: {
      th: "มาถึงที่ **กองกิจการนิสิต** กันบ้างครับ ที่นี่คือพื้นที่ดูแลชีวิตความเป็นอยู่และกิจกรรมนอกห้องเรียนของนิสิต\nมีทั้ง **ห้องให้คำปรึกษา** สำหรับเรื่องเรียนหรือชีวิตส่วนตัว, **ห้องประชุมชมรม**, และ **พื้นที่จัดกิจกรรมต่าง ๆ** ที่นี่เหมือนบ้านหลังที่สองของนิสิต ที่ทุกคนสามารถมาเจอเพื่อน ทำกิจกรรม และพัฒนาตัวเองไปพร้อมกัน",
      en: "Now we're at the **Student Affairs Office**. This place supports student life beyond academics. There are **counseling rooms**, **club meeting rooms**, and **spaces for activities and events**.\nIt feels like a second home where students can grow, connect with friends, and explore their passions.",
      zh: "现在我们来到 **学生事务处**。 这里主要负责学生的课外生活与活动。设有 **咨询室**、**社团会议室**，以及 **活动空间**。\n这里就像学生的第二个家，大家可以在这里交朋友、办活动、同时提升自己。"
    }
  };

  const recommendedPlaces = [
    {
      id: 1,
      name: "สำนักคอมพิวเตอร์",
      nameEn: "Computer Center",
      description: "ศูนย์รวมทรัพยากรการเรียนรู้ หนังสือ วารสาร และฐานข้อมูลออนไลน์",
      descriptionEn: "Learning resource center with books, journals, and online databases",
      detailedDescription: "สำนักวิทยบริการเป็นหัวใจสำคัญของการเรียนรู้ในมหาวิทยาลัย มีหนังสือกว่า 50,000 เล่ม วารสารทั้งในและต่างประเทศ ห้องศึกษาค้นคว้าส่วนบุคคล ห้องสัมมนากลุ่มย่อย และระบบฐานข้อมูลออนไลน์ที่ทันสมัย พร้อมบรรณารักษ์ผู้เชี่ยวชาญให้คำปรึกษา",
      image: place1a,
      category: "Academic",
      openHours: "08:00 - 20:00",
      location: "อาคาร A ชั้น 1-3",
      coordinates: { lat: 17.3644, lng: 102.8194 },
      phone: "042-123-456",
      email: "library@msu.ac.th",
      highlights: ["ห้องสมุด", "ห้องศึกษาค้นคว้า", "คอมพิวเตอร์", "Wi-Fi ฟรี"],
      facilities: ["Wi-Fi ฟรี", "ปรับอากาศ", "ที่จอดรถ", "เข้าถึงได้สำหรับผู้พิการ"],
      images: [
        { url: place1a, caption: "ห้องสมุดหลัก", type: "interior" },
        { url: place1b, caption: "ห้องศึกษาค้นคว้า", type: "study_room" },
        { url: place1c, caption: "มุมอ่านหนังสือ", type: "reading_area" },
        { url: place1d, caption: "ห้องคอมพิวเตอร์", type: "computer_lab" },
        { url: place1e, caption: "คาราโอเกะ", type: "lounge" },
      ],
      virtualTour: "/virtual-tour/library",
      capacity: "500 คน",
      services: ["ยืม-คืนหนังสือ", "สืบค้นฐานข้อมูล", "ถ่ายเอกสาร", "พิมพ์เอกสาร", "ห้องสัมมนา"],
      // เพิ่ม audio data
      audioUrls: {
        th: audio1a,
        en: audio1b,
        zh: audio1c,
      }
    },
    {
      id: 2,
      name: "กองทะเบียนและประมวลผล",
      nameEn: "Registrar Office",
      description: "บริการด้านทะเบียนนิสิต การลงทะเบียน และเอกสารทางการศึกษา",
      descriptionEn: "Student registration services and academic documents",
      detailedDescription: "กองทะเบียนและประมวลผลให้บริการด้านการลงทะเบียนเรียน การออกเอกสารทางการศึกษา การจัดสอบ และการประมวลผลการเรียน พร้อมระบบออนไลน์ที่สะดวกรวดเร็ว มีเจ้าหน้าที่ผู้เชี่ยวชาญให้คำปรึกษาตลอดเวลาทำการ",
      image: place2a,
      category: "Administrative",
      openHours: "08:30 - 16:30",
      location: "อาคารอำนวยการ ชั้น 1",
      coordinates: { lat: 17.3640, lng: 102.8190 },
      phone: "042-123-457",
      email: "registrar@msu.ac.th",
      highlights: ["ลงทะเบียนเรียน", "ใบรับรองการศึกษา", "ใบแสดงผลการเรียน", "เปลี่ยนแปลงข้อมูล"],
      facilities: ["ระบบคิวออนไลน์", "ปรับอากาศ", "ที่นั่งรอ", "เข้าถึงได้สำหรับผู้พิการ"],
      images: [
        { url: place2a, caption: "ป้ายหน้าตึก", type: "entrance1" },
        { url: place2b, caption: "ทางเดินเข้า", type: "entrance2" },
        { url: place2d, caption: "ห้องรอรับบริการ", type: "waiting_area" },
        { url: place2c, caption: "จุดยื่นเอกสาร", type: "document_submission" },
      ],
      virtualTour: "/virtual-tour/registrar",
      capacity: "100 คน",
      services: ["ลงทะเบียนเรียน", "ออกใบรับรอง", "แก้ไขข้อมูล", "ชำระเงิน", "ปรึกษาการเรียน"],
      // เพิ่ม audio data
      audioUrls: {
        th: audio2a,
        en: audio2b,
        zh: audio2c
      }
    },
    {
      id: 3,
      name: "กองกิจการนิสิต",
      nameEn: "Student Affairs Division",
      description: "บริการด้านกิจกรรมนิสิต ทุนการศึกษา และสวัสดิการนิสิต",
      descriptionEn: "Student activities, scholarships, and student welfare services",
      detailedDescription: "กองกิจการนิสิตเป็นศูนย์กลางการดูแลนิสิตนอกห้องเรียน จัดกิจกรรมพัฒนาทักษะชีวิต ให้ทุนการศึกษา บริการสวัสดิการ คำปรึกษาส่วนบุคคล และสนับสนุนชมรมนิสิต มีที่ปรึกษาผู้เชี่ยวชาญพร้อมช่วยเหลือนิสิตในทุกด้าน",
      image: place3b,
      category: "Student Services",
      openHours: "08:30 - 16:30",
      location: "อาคารกิจการนิสิต ชั้น 1",
      coordinates: { lat: 17.3638, lng: 102.8188 },
      phone: "042-123-459",
      email: "studentaffairs@msu.ac.th",
      highlights: ["ทุนการศึกษา", "กิจกรรมนิสิต", "สวัสดิการ", "คำปรึกษา"],
      facilities: ["ห้องให้คำปรึกษา", "ห้องประชุมชมรม", "พื้นที่จัดกิจกรรม", "Wi-Fi ฟรี"],
      images: [
        { url: place3a, caption: "จุดให้บริการหลัก", type: "service_area" },
        { url: place3b, caption: "ห้องให้คำปรึกษา", type: "counseling_room" },
        { url: place3c, caption: "ห้องประชุมชมรม", type: "club_meeting_room" },
        { url: place3d, caption: "พื้นที่จัดกิจกรรม", type: "activity_space" }
      ],
      virtualTour: "/virtual-tour/studentaffairs",
      capacity: "150 คน",
      services: ["ทุนการศึกษา", "คำปรึกษา", "จัดกิจกรรม", "สวัสดิการ", "สนับสนุนชมรม"],
      // เพิ่ม audio data
      audioUrls: {
        th: audio3a,
        en: audio3b,
        zh: audio3c
      }
    },
      {
      id: 4,
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

  // Handle place selection and start audio
  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    // เริ่มเล่นเสียงทันทีเมื่อเลือกสถานที่
    if (place.audioUrls) {
      setCurrentAudioPlace(place);
    }
  };

  // Handle audio state changes from 3D Scene
  const handleAudioStateChange = (audioPlace) => {
    setCurrentAudioPlace(audioPlace);
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
            พาทัวร์มหาวิทยาลัยมหาสารคาม แนะนำสถานที่เรียน กิน เที่ยว และพักผ่อนในรั้ว มหาวิทยาลัยมหาสารคาม
          </p>
        </div>

        {/* Places Grid */}
        <div className="right-[20%] bottom-[10%] md:right-[10%] md:bottom-[15%] fixed z-[999]">
          <My3DScene 
            selectedPlace={currentAudioPlace}
            audioTranscripts={audioTranscripts}
            onAudioStateChange={handleAudioStateChange}
            currentLanguage={i18n.language}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedPlaces.map((place) => (
            <div
              key={place.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer ${
                currentAudioPlace?.id === place.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => handlePlaceSelect(place)}
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                {/* เพิ่มรูปปก */}
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
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
                {/* Audio indicator */}
                {currentAudioPlace?.id === place.id && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      กำลังเล่น
                    </div>
                  </div>
                )}
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

                {/* Audio availability indicator */}
                {place.audioUrls && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center text-xs text-blue-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>มีเสียงแนะนำสถานที่</span>
                    </div>
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