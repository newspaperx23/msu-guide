import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'th', // เปลี่ยนเป็น th เป็นภาษาหลัก
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome to MSU – A Place of Knowledge and Inspiration",
          welcome2: "Take a Tour Around Mahasarakham University",
          letstour: "Let's Tour",
          placesPage: {
            header: "Recommended Places",
            description: "Tour Mahasarakham University: learn, eat, travel, and relax around campus.",
            moreinfo: "Want more information?",
            moreInfoDesc: "Click on any location to see more details or contact our public relations department.",
            contact: "Contact Us",
            // Places data
            places: {
              computerCenter: {
                name: "Computer Center",
                description: "Learning resource center with books, journals, and online databases",
                detailedDescription: "The Academic Resource Center is the heart of university learning, featuring over 50,000 books, domestic and international journals, private study rooms, small group seminar rooms, and modern online database systems with expert librarians providing consultation.",
                highlights: ["Library", "Study rooms", "Computers", "Free Wi-Fi"],
                facilities: ["Free Wi-Fi", "Air conditioning", "Parking", "Wheelchair accessible"],
                services: ["Book lending", "Database search", "Document copying", "Document printing", "Seminar rooms"]
              },
              registrar: {
                name: "Registrar Office",
                description: "Student registration services and academic documents",
                detailedDescription: "The Registrar and Academic Processing Office provides course registration services, academic document issuance, examination arrangements, and academic result processing with a convenient and fast online system, staffed by expert personnel providing consultation during office hours.",
                highlights: ["Course registration", "Academic certificates", "Transcripts", "Data changes"],
                facilities: ["Online queue system", "Air conditioning", "Waiting area", "Wheelchair accessible"],
                services: ["Course registration", "Certificate issuance", "Data modification", "Payment", "Academic consultation"]
              },
              studentAffairs: {
                name: "Student Affairs Division",
                description: "Student activities, scholarships, and student welfare services",
                detailedDescription: "The Student Affairs Division is the central hub for student care outside the classroom, organizing life skills development activities, providing scholarships, welfare services, personal counseling, and supporting student clubs with expert advisors ready to assist students in all aspects.",
                highlights: ["Scholarships", "Student activities", "Welfare", "Counseling"],
                facilities: ["Counseling rooms", "Club meeting rooms", "Activity spaces", "Free Wi-Fi"],
                services: ["Scholarships", "Counseling", "Activity organization", "Welfare", "Club support"]
              },
              generalEducation: {
                name: "General Education Center",
                description: "Department responsible for general education courses",
                detailedDescription: "The General Education Center is responsible for organizing general education courses for students from all faculties, featuring modern classrooms, computer laboratories, seminar rooms, and expert faculty teams in various fields ready to provide academic consultation.",
                highlights: ["General education courses", "Academic consultation", "Classrooms", "Meeting rooms"],
                facilities: ["Multimedia classrooms", "Free Wi-Fi", "Air conditioning", "Parking"],
                services: ["Teaching and learning", "Academic consultation", "Classroom booking", "Special activities", "Academic seminars"]
              },
              dormitory: {
                name: "On-Campus Dormitory",
                description: "On-campus accommodation for students - convenient and safe",
                detailedDescription: "The on-campus university dormitory provides accommodation for male and female students in separate buildings. Rooms are fully equipped with electrical appliances, free Wi-Fi, 24-hour security system, laundry rooms, recreation areas, convenience stores, and close proximity to all academic buildings.",
                highlights: ["Near academic buildings", "Security", "Facilities", "Student community"],
                facilities: ["Security system", "Free Wi-Fi", "Laundry room", "Convenience store", "Parking"],
                services: ["Accommodation", "Security", "Laundry", "Convenience store", "Dormitory activities"]
              },
              boromrajkumari: {
                name: "Boromrajkumari Building",
                description: "Main building with classrooms, laboratories, and various offices",
                detailedDescription: "The Boromrajkumari Building is the university's main building, featuring modern large classrooms, science laboratories, large meeting rooms, elevators for disabled access, and air conditioning throughout the building. It serves as an important teaching and learning center of the university.",
                highlights: ["Large classrooms", "Laboratories", "Meeting rooms", "Faculty offices"],
                facilities: ["Elevators", "Air conditioning", "Sound system", "Projectors", "Free Wi-Fi"],
                services: ["Teaching and learning", "Laboratories", "Meeting arrangements", "Faculty offices", "Elevator service"]
              }
            },
            // Modal content
            modal: {
              overview: "Overview",
              gallery: "Gallery",
              services: "Services",
              contact: "Contact",
              placeDetails: "Place Details",
              openingHours: "Opening Hours",
              location: "Location",
              capacity: "Capacity",
              facilities: "Facilities",
              navigation: "Navigation",
              call: "Call",
              virtualTour360: "360° View",
              virtualTourDesc: "Opening 360° view... (In the actual system, it will connect to Virtual Tour)",
              galleryTitle: "Various Angles",
              want360: "Want a 360° view?",
              want360Desc: "Explore places in virtual reality view",
              servicesProvided: "Services Provided",
              highlights: "Place Highlights",
              contactInfo: "Contact Information",
              phoneNumber: "Phone Number",
              email: "Email",
              address: "Address",
              transportation: "Transportation",
              transportationDesc: "Click the navigation button to open Google Maps and view travel routes",
              openGoogleMaps: "Open Google Maps",
              gpsCoordinates: "GPS Coordinates"
            },
            // Categories
            categories: {
              Academic: "Academic",
              Administrative: "Administrative",
              "Student Services": "Student Services",
              Accommodation: "Accommodation"
            },
            // Common
            openHours: {
              "08:00 - 20:00": "08:00 - 20:00",
              "08:30 - 16:30": "08:30 - 16:30",
              "24 ชั่วโมง": "24 hours",
              "06:00 - 22:00": "06:00 - 22:00"
            },
            locations: {
              "อาคาร A ชั้น 1-3": "Building A, Floors 1-3",
              "อาคารอำนวยการ ชั้น 1": "Administration Building, Floor 1",
              "อาคารกิจการนิสิต ชั้น 1": "Student Affairs Building, Floor 1",
              "อาคารศึกษาทั่วไป ชั้น 1-2": "General Education Building, Floors 1-2",
              "อาคารหอพักนิสิต": "Student Dormitory Building",
              "อาคารบรมราชกุมารี": "Boromrajkumari Building"
            }
          }
        }
      },
      th: {
        translation: {
          welcome: "รั้วเทาเหลืองแห่งการเรียนรู้และแรงบันดาลใจ — มมส",
          welcome2: "พาเที่ยว มมส ครบทุกมุม",
          letstour: "เริ่มทัวร์กันเลย",
          placesPage: {
            header: "สถานที่แนะนำ",
            description: "พาทัวร์มหาวิทยาลัยมหาสารคาม แนะนำสถานที่เรียน กิน เที่ยว และพักผ่อนในรั้ว มหาวิทยาลัยมหาสารคาม",
            moreinfo: "ต้องการข้อมูลเพิ่มเติม?",
            moreInfoDesc: "คลิกที่สถานที่ใดสถานที่หนึ่งเพื่อดูรายละเอียดเพิ่มเติม หรือติดต่อฝ่ายประชาสัมพันธ์",
            contact: "ติดต่อเรา",
            // Places data
            places: {
              computerCenter: {
                name: "สำนักคอมพิวเตอร์",
                description: "ศูนย์รวมทรัพยากรการเรียนรู้ หนังสือ วารสาร และฐานข้อมูลออนไลน์",
                detailedDescription: "สำนักวิทยบริการเป็นหัวใจสำคัญของการเรียนรู้ในมหาวิทยาลัย มีหนังสือกว่า 50,000 เล่ม วารสารทั้งในและต่างประเทศ ห้องศึกษาค้นคว้าส่วนบุคคล ห้องสัมมนากลุ่มย่อย และระบบฐานข้อมูลออนไลน์ที่ทันสมัย พร้อมบรรณารักษ์ผู้เชี่ยวชาญให้คำปรึกษา",
                highlights: ["ห้องสมุด", "ห้องศึกษาค้นคว้า", "คอมพิวเตอร์", "Wi-Fi ฟรี"],
                facilities: ["Wi-Fi ฟรี", "ปรับอากาศ", "ที่จอดรถ", "เข้าถึงได้สำหรับผู้พิการ"],
                services: ["ยืม-คืนหนังสือ", "สืบค้นฐานข้อมูล", "ถ่ายเอกสาร", "พิมพ์เอกสาร", "ห้องสัมมนา"]
              },
              registrar: {
                name: "กองทะเบียนและประมวลผล",
                description: "บริการด้านทะเบียนนิสิต การลงทะเบียน และเอกสารทางการศึกษา",
                detailedDescription: "กองทะเบียนและประมวลผลให้บริการด้านการลงทะเบียนเรียน การออกเอกสารทางการศึกษา การจัดสอบ และการประมวลผลการเรียน พร้อมระบบออนไลน์ที่สะดวกรวดเร็ว มีเจ้าหน้าที่ผู้เชี่ยวชาญให้คำปรึกษาตลอดเวลาทำการ",
                highlights: ["ลงทะเบียนเรียน", "ใบรับรองการศึกษา", "ใบแสดงผลการเรียน", "เปลี่ยนแปลงข้อมูล"],
                facilities: ["ระบบคิวออนไลน์", "ปรับอากาศ", "ที่นั่งรอ", "เข้าถึงได้สำหรับผู้พิการ"],
                services: ["ลงทะเบียนเรียน", "ออกใบรับรอง", "แก้ไขข้อมูล", "ชำระเงิน", "ปรึกษาการเรียน"]
              },
              studentAffairs: {
                name: "กองกิจการนิสิต",
                description: "บริการด้านกิจกรรมนิสิต ทุนการศึกษา และสวัสดิการนิสิต",
                detailedDescription: "กองกิจการนิสิตเป็นศูนย์กลางการดูแลนิสิตนอกห้องเรียน จัดกิจกรรมพัฒนาทักษะชีวิต ให้ทุนการศึกษา บริการสวัสดิการ คำปรึกษาส่วนบุคคล และสนับสนุนชมรมนิสิต มีที่ปรึกษาผู้เชี่ยวชาญพร้อมช่วยเหลือนิสิตในทุกด้าน",
                highlights: ["ทุนการศึกษา", "กิจกรรมนิสิต", "สวัสดิการ", "คำปรึกษา"],
                facilities: ["ห้องให้คำปรึกษา", "ห้องประชุมชมรม", "พื้นที่จัดกิจกรรม", "Wi-Fi ฟรี"],
                services: ["ทุนการศึกษา", "คำปรึกษา", "จัดกิจกรรม", "สวัสดิการ", "สนับสนุนชมรม"]
              },
              generalEducation: {
                name: "สำนักศึกษาทั่วไป",
                description: "หน่วยงานที่รับผิดชอบการจัดการเรียนการสอนวิชาศึกษาทั่วไป",
                detailedDescription: "สำนักศึกษาทั่วไปมีภารกิจในการจัดการเรียนการสอนวิชาศึกษาทั่วไปให้กับนิสิตทุกคณะ มีห้องเรียนที่ทันสมัย ห้องปฏิบัติการคอมพิวเตอร์ ห้องประชุมสัมมนา และทีมอาจารย์ผู้เชี่ยวชาญในสาขาต่างๆ พร้อมให้คำปรึกษาด้านการเรียน",
                highlights: ["วิชาศึกษาทั่วไป", "ปรึกษาวิชาเรียน", "ห้องเรียน", "ห้องประชุม"],
                facilities: ["ห้องเรียนมัลติมีเดีย", "Wi-Fi ฟรี", "ปรับอากาศ", "ที่จอดรถ"],
                services: ["การเรียนการสอน", "ปรึกษาวิชาเรียน", "จองห้องเรียน", "กิจกรรมพิเศษ", "สัมมนาวิชาการ"]
              },
              dormitory: {
                name: "หอพักภายใน",
                description: "หอพักสำหรับนิสิตภายในมหาวิทยาลัย สะดวก ปลอดภัย",
                detailedDescription: "หอพักภายในมหาวิทยาลัยมีห้องพักสำหรับนิสิตชาย-หญิงแยกอาคาร ห้องพักมีเครื่องใช้ไฟฟ้าครบครัน Wi-Fi ฟรี ระบบรักษาความปลอดภัย 24 ชั่วโมง ห้องซักรีด พื้นที่พักผ่อน ร้านสะดวกซื้อ และใกล้กับอาคารเรียนทุกแห่ง",
                highlights: ["ที่พักใกล้เรียน", "ความปลอดภัย", "สิ่งอำนวยความสะดวก", "ชุมชนนิสิต"],
                facilities: ["ระบบรักษาความปลอดภัย", "Wi-Fi ฟรี", "ห้องซักรีด", "ร้านสะดวกซื้อ", "ที่จอดรถ"],
                services: ["ที่พัก", "รักษาความปลอดภัย", "ซักรีด", "ร้านสะดวกซื้อ", "กิจกรรมหอพัก"]
              },
              boromrajkumari: {
                name: "อาคารบรมราชกุมารี",
                description: "อาคารหลักที่มีห้องเรียน ห้องปฏิบัติการ และสำนักงานต่างๆ",
                detailedDescription: "อาคารบรมราชกุมารีเป็นอาคารหลักของมหาวิทยาลัย มีห้องเรียนใหญ่ที่ทันสมัย ห้องปฏิบัติการวิทยาศาสตร์ ห้องประชุมขนาดใหญ่ ลิฟต์สำหรับผู้พิการ และระบบปรับอากาศตลอดอาคาร เป็นศูนย์กลางการเรียนการสอนที่สำคัญของมหาวิทยาลัย",
                highlights: ["ห้องเรียนใหญ่", "ห้องปฏิบัติการ", "ห้องประชุม", "สำนักงานคณะ"],
                facilities: ["ลิฟต์", "ปรับอากาศ", "ระบบเสียง", "โปรเจคเตอร์", "Wi-Fi ฟรี"],
                services: ["การเรียนการสอน", "ห้องปฏิบัติการ", "จัดประชุม", "สำนักงานคณะ", "บริการลิฟต์"]
              }
            },
            // Modal content
            modal: {
              overview: "ภาพรวม",
              gallery: "รูปภาพ",
              services: "บริการ",
              contact: "ติดต่อ",
              placeDetails: "รายละเอียดสถานที่",
              openingHours: "เวลาทำการ",
              location: "ที่ตั้ง",
              capacity: "ความจุ",
              facilities: "สิ่งอำนวยความสะดวก",
              navigation: "นำทาง",
              call: "โทร",
              virtualTour360: "มุมมอง 360°",
              virtualTourDesc: "กำลังเปิดมุมมอง 360°... (ในระบบจริงจะเชื่อมต่อกับ Virtual Tour)",
              galleryTitle: "รูปภาพมุมต่างๆ",
              want360: "ต้องการมุมมอง 360°?",
              want360Desc: "สำรวจสถานที่ในมุมมองเสมือนจริง",
              servicesProvided: "บริการที่ให้",
              highlights: "จุดเด่นของสถานที่",
              contactInfo: "ข้อมูลการติดต่อ",
              phoneNumber: "เบอร์โทรศัพท์",
              email: "อีเมล",
              address: "ที่อยู่",
              transportation: "การเดินทาง",
              transportationDesc: "คลิกปุ่มนำทางเพื่อเปิด Google Maps และดูเส้นทางการเดินทาง",
              openGoogleMaps: "เปิด Google Maps",
              gpsCoordinates: "พิกัด GPS"
            },
            // Categories
            categories: {
              Academic: "วิชาการ",
              Administrative: "บริหาร",
              "Student Services": "บริการนิสิต",
              Accommodation: "ที่พัก"
            }
          }
        }
      },
      zh: {
        translation: {
          welcome: "欢迎来到玛哈沙拉堪大学，智慧与灵感的家园",
          welcome2: "带你走遍玛哈沙拉堪大学的每个角落",
          letstour: "一起去参观吧",
          placesPage: {
            header: "推荐地点",
            description: "游览玛哈沙拉堪大学：学习、美食、旅行和校园内的休闲放松场所。",
            moreinfo: "需要更多信息吗？",
            moreInfoDesc: "点击任何地点查看详细信息或联系我们的公共关系部门。",
            contact: "联系我们",
            // Places data
            places: {
              computerCenter: {
                name: "计算机中心",
                description: "学习资源中心，提供图书、期刊和在线数据库",
                detailedDescription: "学术资源中心是大学学习的核心，拥有超过50,000本图书、国内外期刊、私人学习室、小组研讨室和现代在线数据库系统，配有专业图书管理员提供咨询服务。",
                highlights: ["图书馆", "学习室", "计算机", "免费Wi-Fi"],
                facilities: ["免费Wi-Fi", "空调", "停车场", "无障碍通道"],
                services: ["图书借阅", "数据库检索", "文档复印", "文档打印", "研讨室"]
              },
              registrar: {
                name: "注册处",
                description: "学生注册服务和学术文件",
                detailedDescription: "注册与学术处理办公室提供课程注册服务、学术文件颁发、考试安排和学术成绩处理，配备便捷快速的在线系统，由专业人员在办公时间内提供咨询服务。",
                highlights: ["课程注册", "学历证书", "成绩单", "信息变更"],
                facilities: ["在线排队系统", "空调", "等候区", "无障碍通道"],
                services: ["课程注册", "证书颁发", "信息修改", "缴费", "学术咨询"]
              },
              studentAffairs: {
                name: "学生事务处",
                description: "学生活动、奖学金和学生福利服务",
                detailedDescription: "学生事务处是课外学生关怀的中心枢纽，组织生活技能发展活动，提供奖学金、福利服务、个人咨询，并支持学生社团，配有专业顾问随时协助学生各个方面。",
                highlights: ["奖学金", "学生活动", "福利", "咨询"],
                facilities: ["咨询室", "社团会议室", "活动空间", "免费Wi-Fi"],
                services: ["奖学金", "咨询", "活动组织", "福利", "社团支持"]
              },
              generalEducation: {
                name: "通识教育中心",
                description: "负责通识教育课程的部门",
                detailedDescription: "通识教育中心负责为所有院系学生组织通识教育课程，配备现代化教室、计算机实验室、研讨室以及各领域专业教师团队，随时提供学术咨询。",
                highlights: ["通识教育课程", "学术咨询", "教室", "会议室"],
                facilities: ["多媒体教室", "免费Wi-Fi", "空调", "停车场"],
                services: ["教学", "学术咨询", "教室预约", "特殊活动", "学术研讨会"]
              },
              dormitory: {
                name: "校内宿舍",
                description: "校内学生住宿 - 便利安全",
                detailedDescription: "校内大学宿舍为男女学生提供分楼住宿，房间配备齐全的电器设备、免费Wi-Fi、24小时安保系统、洗衣房、休闲区、便利店，并靠近所有教学楼。",
                highlights: ["靠近教学楼", "安全", "设施", "学生社区"],
                facilities: ["安保系统", "免费Wi-Fi", "洗衣房", "便利店", "停车场"],
                services: ["住宿", "安保", "洗衣", "便利店", "宿舍活动"]
              },
              boromrajkumari: {
                name: "博罗玛拉琪库玛丽大楼",
                description: "主楼，设有教室、实验室和各种办公室",
                detailedDescription: "博罗玛拉琪库玛丽大楼是大学的主楼，配备现代化大教室、科学实验室、大会议室、残疾人电梯和全楼空调系统。它是大学重要的教学中心。",
                highlights: ["大教室", "实验室", "会议室", "院系办公室"],
                facilities: ["电梯", "空调", "音响系统", "投影仪", "免费Wi-Fi"],
                services: ["教学", "实验室", "会议安排", "院系办公室", "电梯服务"]
              }
            },
            // Modal content
            modal: {
              overview: "概览",
              gallery: "图片库",
              services: "服务",
              contact: "联系方式",
              placeDetails: "地点详情",
              openingHours: "开放时间",
              location: "位置",
              capacity: "容量",
              facilities: "设施",
              navigation: "导航",
              call: "呼叫",
              virtualTour360: "360°视图",
              virtualTourDesc: "正在打开360°视图...（在实际系统中将连接到虚拟游览）",
              galleryTitle: "各角度图片",
              want360: "想要360°视图吗？",
              want360Desc: "在虚拟现实视图中探索地点",
              servicesProvided: "提供的服务",
              highlights: "地点亮点",
              contactInfo: "联系信息",
              phoneNumber: "电话号码",
              email: "电子邮件",
              address: "地址",
              transportation: "交通",
              transportationDesc: "点击导航按钮打开谷歌地图查看行进路线",
              openGoogleMaps: "打开谷歌地图",
              gpsCoordinates: "GPS坐标"
            },
            // Categories
            categories: {
              Academic: "学术",
              Administrative: "行政",
              "Student Services": "学生服务",
              Accommodation: "住宿"
            },
            // Common
            openHours: {
              "08:00 - 20:00": "08:00 - 20:00",
              "08:30 - 16:30": "08:30 - 16:30",
              "24 ชั่วโมง": "24小时",
              "06:00 - 22:00": "06:00 - 22:00"
            },
            locations: {
              "อาคาร A ชั้น 1-3": "A楼，1-3层",
              "อาคารอำนวยการ ชั้น 1": "行政楼，1层",
              "อาคารกิจการนิสิต ชั้น 1": "学生事务楼，1层",
              "อาคารศึกษาทั่วไป ชั้น 1-2": "通识教育楼，1-2层",
              "อาคารหอพักนิสิต": "学生宿舍楼",
              "อาคารบรมราชกุมารี": "博罗玛拉琪库玛丽大楼"
            }
          }
        }
      }
    },
  });

export default i18n;