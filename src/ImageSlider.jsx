import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";
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
  const { t } = useTranslation();

  const slides = [
    { id: 1, text: t("place1"), detail: t("place1Detail"), img: place1 },
    { id: 2, text: t("place2"), detail: t("place2Detail"), img: place2 },
    { id: 3, text: t("place3"), detail: t("place3_detail"), img: place3 },
    { id: 4, text: t("place4"), detail: t("place4_detail"), img: place4 },
    { id: 5, text: t("place5"), detail: t("place5_detail"), img: place5 },
    { id: 6, text: t("place6"), detail: t("place6_detail"), img: place6 },
    { id: 7, text: t("place7"), detail: t("place7_detail"), img: place7 },
    { id: 8, text: t("place8"), detail: t("place8_detail"), img: place8 },
  ];

  return (
    <div id="section1" className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-8">{t("places")}</h2>
        <Swiper
          className="shadow-xl rounded-xl"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div style={{ position: "relative" }}>
                <img
                  src={slide.img}
                  alt={`Slide ${slide.id}`}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg"
                />
                <div
                  className="
                    md:top-[60%] top-[40%] text-white absolute
                    left-[5%] drop-shadow-md p-3
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
