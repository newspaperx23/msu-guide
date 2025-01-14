import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./constants";
import Modal from './Modal';  // นำเข้า Modal Component

const ImageSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // ฟังก์ชันเปิด Modal และเก็บข้อมูล item
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // ฟังก์ชันปิด Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div
      id="section1"
      className="flex items-center justify-center flex-col h-screen"
    >
      <Swiper
        centeredSlides={true}  // ทำให้สไลด์ตรงกลางใหญ่สุด
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[95%] lg:max-w-[80%]"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            {/* เมื่อคลิกที่สไลด์จะเปิด Modal */}
            <div
              onClick={() => openModal(item)}
              className="flex flex-col gap-4 md:gap-6 mb-14 group relative shadow-lg text-white rounded-xl p-6 md:px-8 md:py-10 h-[250px] w-[90%] md:h-[300px] lg:h-[400px] lg:w-[350px] cursor-pointer mx-auto"
            >
              <div
                className="shadow-sm absolute inset-0 bg-cover bg-center rounded-xl cursor-pointer"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              ></div>
              <div className="rounded-xl absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-white text-2xl lg:text-3xl group-hover:opacity-50" />
                <h1 className="text-lg lg:text-xl font-semibold">
                  {item.title}
                </h1>
                <p className="text-sm lg:text-base">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] text-white group-hover:opacity-50 group-hover:rotate-45 duration-150" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* แสดง Modal เมื่อเปิด */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          item={selectedItem}  // ส่งข้อมูล item ที่เลือกไปใน Modal
        />
      )}
    </div>
  );
};

export default ImageSlider;
