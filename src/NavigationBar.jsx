import React, { useState, useEffect } from "react";
import { TbLanguageKatakana } from "react-icons/tb";
import { US, CN, TH } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language || "th");

  // Sync selectedLang กับ i18n.language เมื่อภาษาเปลี่ยน
  useEffect(() => {
    const handleLanguageChanged = (lng) => {
      setSelectedLang(lng);
      console.log('Language changed to:', lng); // Debug log
    };

    i18n.on('languageChanged', handleLanguageChanged);

    // Set initial language
    setSelectedLang(i18n.language || "th");

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = (lang) => {
    console.log('Changing language to:', lang); // Debug log
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
        return <TH title="Thailand" className="size-5" />;
    }
  };

  return (
    <div className="rounded-2xl h-12 fixed top-4 left-1/2 transform -translate-x-1/2 justify-center items-center bg-black/40 backdrop-blur-md w-[90%] md:w-[70%] z-20">
      <div className="flex justify-center items-center w-full h-full gap-5">
        <a href="/" className="text-white text-lg font-thin hover:scale-110 transition-all">
          MSU
        </a>
        <a href="/places" className="text-white text-lg font-thin hover:scale-110 transition-all">
          Places
        </a>
        <a href="https://www.msu.ac.th/th/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%95%E0%B9%88%E0%B8%AD/" className="text-white text-lg font-thin hover:scale-110 transition-all">
          Apply
        </a>
        <a href="#" className="hidden md:flex text-white text-lg font-thin hover:scale-110 transition-all">
          EV Time
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
          <div className="ml-2">
            {getFlagIcon()}
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-10 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul className="py-0">
                <li
                  onClick={() => changeLanguage("en")}
                  className={`rounded-t px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center gap-3 justify-between ${
                    selectedLang === "en" ? "bg-gray-200 font-semibold" : ""
                  }`}
                >
                  English
                  <US title="United States" className="size-5" />
                </li>
                <li
                  onClick={() => changeLanguage("zh")}
                  className={`px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center gap-3 justify-between ${
                    selectedLang === "zh" ? "bg-gray-200 font-semibold" : ""
                  }`}
                >
                  中文
                  <CN title="China" className="size-5" />
                </li>
                <li
                  onClick={() => changeLanguage("th")}
                  className={`rounded-b px-4 py-2 hover:bg-gray-300 cursor-pointer flex items-center gap-3 justify-between ${
                    selectedLang === "th" ? "bg-gray-200 font-semibold" : ""
                  }`}
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