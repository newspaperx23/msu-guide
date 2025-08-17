import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // auto-detect language
import Backend from 'i18next-http-backend'; // load translations via HTTP


// ตั้งค่าภาษาและไฟล์ที่จะแปล
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // ถ้าภาษาที่เลือกไม่พบจะใช้ภาษาอังกฤษ
    debug: true,
    interpolation: {
      escapeValue: false, // ปิดการ escape string เพื่อไม่ให้เกิดปัญหากับ React
    },
    resources: {
  en: {
    translation: {
      welcome: "Welcome to MSU – A Place of Knowledge and Inspiration",
      welcome2: "Take a Tour Around Mahasarakham University",
      letstour: "Let's Tour",
      // ... ข้อความอื่น
      placesPage: {
        header: "Recommended Places",
        description: "Tour Mahasarakham University: learn, eat, travel, and relax around campus.",
        moreinfo: "Want more information?",
        contact: "Contact us"
      }
    }
  },
  th: {
    translation: {
      welcome: "รั้วเทาเหลืองแห่งการเรียนรู้และแรงบันดาลใจ — มมส",
      welcome2: "พาเที่ยว มมส ครบทุกมุม",
      letstour: "เริ่มทัวร์กันเลย",
      // ... ข้อความอื่น
      placesPage: {
        header: "สถานที่แนะนำ",
        description: "พาทัวร์มหาวิทยาลัยมหาสารคาม แนะนำสถานที่เรียน กิน เที่ยว และพักผ่อน",
        moreinfo: "ต้องการข้อมูลเพิ่มเติม?",
        contact: "ติดต่อเรา"
      }
    }
  },
  zh: {
    translation: {
      welcome: "欢迎来到玛哈沙拉堪大学，智慧与灵感的家园",
      welcome2: "带你走遍玛哈沙拉堪大学的每个角落",
      letstour: "一起去参观吧",
      // ... ข้อความอื่น
      placesPage: {
        header: "推荐地点",
        description: "游览玛哈沙拉堪大学：学习、美食、旅行和放松。",
        moreinfo: "需要更多信息吗？",
        contact: "联系我们"
      }
    }
  }
},
  });

export default i18n;
