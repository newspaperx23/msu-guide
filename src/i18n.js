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
          wheretogo: 'Where you wanna go?',
          place1: 'Academic Resources Office ',
          place1Detail: 'Academic Resources Office There is a main business in operation. Operations and Research Focused on developing and promoting Maha Sarakham University Graduate Research Academic Services',
          place2: 'Division of Registration',
          place2Detail: 'Responsibilities regarding registration management This includes registration. Checking and recording information Document storage issuance of certificate or identification card and maintaining related databases',
        },
      },
      th: {
        translation: {
          welcome: 'ยินดีต้อนรับ',
          description: 'นี่คือแอป React ที่ใช้งาน i18n!',
          letstour: 'เริ่มสำรวจ',
          places: 'สถานที่',
          welcomemsu: 'สวัสดี, ยินดีต้อนรับสู่ไกด์มหาวิทยาลัยมหาสารคาม',
          wheretogo: 'คุณต้องการไปที่ไหน?',
          place1: 'สำนักวิทยบริการ',
          place2: 'กองทะเบียนและประมวลผล',
          place1Detail: 'สำนักวิทยบริการ มีกิจการหลักในการดำเนินการ การดำเนินการและการวิจัย มุ่งพัฒนาและส่งเสริมใ ห้มหาวิทยาลัมหาสารคาม บัณฑิตวิจัยการบริการวิชาการ',
          place2Detail: 'ความรับผิดชอบเกี่ยวกับการจัดการการลงทะเบียน ซึ่งรวมถึงการลงทะเบียนด้วย ตรวจสอบและบันทึกข้อมูล จัดเก็บเอกสาร การออกใบรับรองหรือบัตรประจำตัวประชาชน และดูแลรักษาฐานข้อมูลที่เกี่ยวข้อง',
        },
      },
      zh: {
        translation: {
          welcome: '欢迎',
          description: '这是一个使用i18n的React应用程序！',
          letstour: '让你的',
          places: '地方',
          welcomemsu: '您好，欢迎来到密歇根州立大学指南',
          wheretogo: '你想去哪里?',
          place1: '学术资源办公室',
          place2: '注册处',
          place1Detail: '学术资源办公室有主营业务在经营。运营与研究专注于开发和推广玛哈沙拉堪大学研究生研究学术服务',
          place2Detail: '登记管理职责这包括注册。检查并记录信息存放文件颁发证书或身份证并维护相关数据库',
        },
      },
    },
  });

export default i18n;
