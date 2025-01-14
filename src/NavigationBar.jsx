import React, { useState } from "react";
import { TbLanguageKatakana } from "react-icons/tb";
import { US, CN, TH } from "country-flag-icons/react/3x2";
import i18n from "./i18n"; // นำเข้า i18n ที่ตั้งค่าไว้

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en"); // state สำหรับเก็บภาษาที่เลือก

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // เปลี่ยนภาษา
    setSelectedLang(lang); // อัพเดทภาษาที่เลือก
    toggleMenu(); // ปิดเมนูหลังจากเปลี่ยนภาษา
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ฟังก์ชันสำหรับแสดงธงตามภาษาที่เลือก
  const getFlagIcon = () => {
    switch (selectedLang) {
      case "en":
        return <US title="United States" className="size-5" />;
      case "zh":
        return <CN title="China" className="size-5" />;
      case "th":
        return <TH title="Thailand" className="size-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl h-12 fixed top-4 left-1/2 transform -translate-x-1/2 justify-center items-center bg-black/40 backdrop-blur-md w-[90%] md:w-[70%] z-20">
      <div className="flex justify-center items-center w-full h-full gap-5">
        <a href="#" className="text-white text-lg font-thin hover:scale-110 transition-all">
          MSU
        </a>
        <a href="#" className="text-white text-lg font-thin hover:scale-110 transition-all">
          Places
        </a>
        <a href="#" className="text-white text-lg font-thin hover:scale-110 transition-all">
          Apply
        </a>
        <a href="#" className="hidden md:flex text-white text-lg font-thin hover:scale-110 transition-all">
          Calendar
        </a>

        <div className="relative flex justify-center items-center">
          {/* Icon Button */}
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-10 h-10 text-white rounded-full hover:border hover:scale-105 transition-all focus:outline-none"
          >
            <TbLanguageKatakana className="text-white size-5" />
          </button>
          {/* แสดงธงข้างปุ่ม */}
        <div className="">
          {getFlagIcon()}
        </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-10 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-0">
                <li
                  onClick={() => changeLanguage("en")}
                  className="rounded px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center gap-3 justify-between"
                >
                  English
                  <US title="United States" className="size-5" />
                </li>
                <li
                  onClick={() => changeLanguage("zh")}
                  className=" px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center gap-3 justify-between"
                >
                  中文
                  <CN title="China" className="size-5" />
                </li>
                <li
                  onClick={() => changeLanguage("th")}
                  className="rounded px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center gap-3 justify-between"
                >
                  ไทย
                  <TH title="Thailand" className="size-5" />
                </li>
              </ul>
            </div>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default NavigationBar;
