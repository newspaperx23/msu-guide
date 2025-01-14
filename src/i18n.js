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
          welcome: 'Welcome',
          description: 'This is a React app with i18n!',
          letstour: "Let's Tour",
          places: 'Places',
          welcomemsu: 'Hello, Welcome to MSU Guide',
          wheretogo: 'Where you wanna go?'
        },
      },
      th: {
        translation: {
          welcome: 'ยินดีต้อนรับ',
          description: 'นี่คือแอป React ที่ใช้งาน i18n!',
          letstour: 'เริ่มสำรวจ',
          places: 'สถานที่',
          welcomemsu: 'สวัสดี, ยินดีต้อนรับสู่ไกด์มหาวิทยาลัยมหาสารคาม',
          wheretogo: 'คุณต้องการไปที่ไหน?'
        },
      },
      zh: {
        translation: {
          welcome: '欢迎',
          description: '这是一个使用i18n的React应用程序！',
          letstour: '让你的',
          places: '地方',
          welcomemsu: '您好，欢迎来到密歇根州立大学指南',
          wheretogo: '你想去哪里?'
        },
      },
    },
  });

export default i18n;
