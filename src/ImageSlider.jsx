import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination ,Autoplay  } from "swiper/modules";
import { useTranslation } from 'react-i18next';

// นำเข้าสตไตล์ของ Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import place1 from "./assets/1.jpg";
import place2 from "./assets/2.jpg";
import place3 from "./assets/3.jpg";
import place4 from "./assets/4.jpg";
import place5 from "./assets/5.jpg";
import place6 from "./assets/6.jpg";
import place7 from "./assets/7.jpg";
import place8 from "./assets/8.jpg";



const CenterModeCarousel = () => {
  const settings = {
    centerMode: true, // เปิดใช้งาน Center Mode
    dots: true,
    centerPadding: "50px", // ระยะขอบรอบสไลด์ตรงกลาง
    slidesToShow: 3, // จำนวนสไลด์ที่แสดงบนหน้าจอใหญ่
    infinite: true, // วนลูปสไลด์
    speed: 500, // ความเร็วของการเปลี่ยนสไลด์
    autoplay: true, // สไลด์อัตโนมัติ
    autoplaySpeed: 3000, // ความเร็วของ autoplay
    arrows: true, // แสดงลูกศรนำทาง
    responsive: [
      {
        breakpoint: 768, // สำหรับหน้าจอที่กว้าง <= 768px
        settings: {
          slidesToShow: 1, // แสดง 1 สไลด์
          centerMode: false, // ปิด Center Mode บนหน้าจอเล็ก
        },
      },
    ],
  };
  const slides = [
    { id: 1, text: "สำนักวิทยบริการ", 
      detail: "สำนักวิทยบริการ มีภารกิจหลักในการสนับสนุนการจัดการเรียนการสอนและการวิจัย มุ่งพัฒนาและส่งเสริมให้มหาวิทยาลัมหาสารคาม ผลิตบัณฑิต การวิจัย การบริการวิชาการ", 
      img: place1 },
    { id: 2, text: "กองทะเบียนและประมวลผล",
      detail: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum bibendum, dictum lorem vehicula, maximus eros. Quisque orci nulla, efficitur a urna vel, blandit porttitor purus. Ut tincidunt accumsan purus, ac placerat leo pellentesque id. Nam consequat felis egestas, vestibulum risus ut, egestas tortor.", 
      img: place2 },
    { id: 3, text: "สำนักศึกษาทั่วไป", 
      detail: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum bibendum, dictum lorem vehicula, maximus eros. Quisque orci nulla, efficitur a urna vel, blandit porttitor purus. Ut tincidunt accumsan purus, ac placerat leo pellentesque id. Nam consequat felis egestas, vestibulum risus ut, egestas tortor.", 
      img: place3 },
    { id: 3, text: "กองคลังและพัสดุ", 
      detail: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum bibendum, dictum lorem vehicula, maximus eros. Quisque orci nulla, efficitur a urna vel, blandit porttitor purus. Ut tincidunt accumsan purus, ac placerat leo pellentesque id. Nam consequat felis egestas, vestibulum risus ut, egestas tortor.", 

      img: place4 },
    { id: 3, text: "โรงพยาบาลสุทธาเวช", 
      detail: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum bibendum, dictum lorem vehicula, maximus eros. Quisque orci nulla, efficitur a urna vel, blandit porttitor purus. Ut tincidunt accumsan purus, ac placerat leo pellentesque id. Nam consequat felis egestas, vestibulum risus ut, egestas tortor.", 

      img: place5 },
    { id: 3, text: "สำนักคอมพิวเตอร์", 
      detail: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum bibendum, dictum lorem vehicula, maximus eros. Quisque orci nulla, efficitur a urna vel, blandit porttitor purus. Ut tincidunt accumsan purus, ac placerat leo pellentesque id. Nam consequat felis egestas, vestibulum risus ut, egestas tortor.", 

      img: place6 },
    { id: 3, text: "กองกิจการนิสิต",
      detail: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum bibendum, dictum lorem vehicula, maximus eros. Quisque orci nulla, efficitur a urna vel, blandit porttitor purus. Ut tincidunt accumsan purus, ac placerat leo pellentesque id. Nam consequat felis egestas, vestibulum risus ut, egestas tortor.", 

      img: place7 },
    { id: 3, text: "งานหอพัก", 
      detail: "loremLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum bibendum, dictum lorem vehicula, maximus eros. Quisque orci nulla, efficitur a urna vel, blandit porttitor purus. Ut tincidunt accumsan purus, ac placerat leo pellentesque id. Nam consequat felis egestas, vestibulum risus ut, egestas tortor.", 

      img: place8 },
  ];
  const { t } = useTranslation();

  return (
    <div
      id="section1"
      className="flex justify-center items-center h-screen bg-gray-100"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8">
          {t('places')}
        </h2>
        {/* <Slider {...settings}>
          <div className="px-2">
            <div className="bg-[#333] text-white rounded h-48 flex items-center justify-center hover:scale-105">
              <img src={place1} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="bg-[#333] text-white rounded h-48 flex items-center justify-center">
              <img src={place2} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="bg-[#333] text-white rounded h-48 flex items-center justify-center">
              <img src={place3} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="bg-[#333] text-white rounded h-48 flex items-center justify-center">
              <img src={place4} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="bg-[#333] text-white rounded h-48 flex items-center justify-center">
              <img src={place5} alt="" />
            </div>
          </div>
          <div className="px-2">
            <div className="bg-[#333] text-white rounded h-48 flex items-center justify-center">
              <img src={place6} alt="" />
            </div>
          </div>
          <div className="px-2 rounded">
            <div className="bg-[#333] rounded text-white h-48 flex items-center justify-center">
              <img src={place7} alt="" />
            </div>
          </div>
          <div className="px-2 shadow-md ">
            <div className="bg-[#333] rounded text-white h-48 flex items-center justify-center">
              <img src={place8} alt="" />
            </div>
          </div>
        </Slider> */}
        <Swiper  className="shadow-xl rounded-xl"
      modules={[Pagination,Autoplay]}
      pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 3000, // ความล่าช้าระหว่างสไลด์ในหน่วยมิลลิวินาที (3000ms = 3 วินาที)
        disableOnInteraction: false, // เปิดให้ Autoplay ทำงานต่อหลังจากมีการโต้ตอบ
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div style={{ position: "relative" }}>
            <img src={slide.img} alt={`Slide ${slide.id}`} style={{ width: "100%", height: "auto" }} className="rounded-lg"/>
            <div 
            className="
            md:top-[60%]
            top-[40%]
            text-white
            absolute
            left-[5%]
            drop-shadow-md
            p-3
            
            "
            >
              <p className="text-md font-bold md:text-3xl drop-shadow-md">{slide.text}</p>
              <p className="text-xs w-[70%] drop-shadow-lg">{slide.detail}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
    </div>
  );
};

export default CenterModeCarousel;
