import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavigationBar from "./NavigationBar.jsx";

const Places = () => {
  const { t } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll("[data-aos-custom]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 -top-36 -right-36 rounded-full bg-gradient-to-br from-yellow-200/30 to-yellow-400/20 animate-pulse"></div>
        <div className="absolute w-48 h-48 -bottom-24 -left-24 rounded-full bg-gradient-to-br from-yellow-200/20 to-yellow-400/10 animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/30"></div>
      </div>

      {/* Navigation */}
      <NavigationBar />

      {/* Header Section */}
      <header className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-yellow-200/50 backdrop-blur-sm">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            มหาวิทยาลัยมหาสารคาม
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-yellow-600 bg-clip-text text-transparent">
              ห้องสมุดกลาง
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            แหล่งเรียนรู้ที่ทันสมัย พร้อมสิ่งอำนวยความสะดวกครบครัน 
            สำหรับนักศึกษาและบุคลากรของมหาวิทยาลัย
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: "📍", title: "ที่ตั้ง", value: "อาคารสำนักหอสมุดกลาง\nมหาวิทยาลัยมหาสารคาม" },
              { icon: "🕐", title: "เวลาเปิด-ปิด", value: "จันทร์-ศุกร์ 08:00-20:00\nเสาร์-อาทิตย์ 09:00-17:00" },
              { icon: "📞", title: "โทรศัพท์", value: "043-754-321\nต่อ 1234" },
              { icon: "👥", title: "จำนวนที่นั่ง", value: "500+ ที่นั่ง\nทุกชั้น" }
            ].map((item, index) => (
              <div 
                key={index}
                data-aos-custom="true"
                data-id={`detail-${index}`}
                className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden ${
                  visibleItems.includes(`detail-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500"></div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 360 Viewer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            data-aos-custom="true"
            data-id="viewer-title"
            className={`text-center mb-16 ${
              visibleItems.includes('viewer-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-800`}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              ชมมุมมอง 360°
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 font-medium">
              สัมผัสประสบการณ์ภายในห้องสมุดกลางแบบ 360 องศา
            </p>
          </div>
          
          <div 
            data-aos-custom="true"
            data-id="viewer-container"
            className={`bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-white/30 ${
              visibleItems.includes('viewer-container') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-800 delay-200`}
          >
            <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 animate-pulse">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 3.314-2.686 6-6 6s-6-2.686-6-6a5.98 5.98 0 01.332-2.027z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 drop-shadow-lg">
                    กำลังโหลดมุมมอง 360°
                  </h3>
                  <p className="text-white/80 drop-shadow">
                    ของห้องสมุดกลาง...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            data-aos-custom="true"
            data-id="gallery-title"
            className={`text-center mb-16 ${
              visibleItems.includes('gallery-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-800`}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
              มุมมองต่างๆ ภายในห้องสมุด
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 font-medium">
              สำรวจพื้นที่การเรียนรู้ที่หลากหลายภายในห้องสมุดกลาง
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                floor: "ชั้น 1",
                title: "พื้นที่บริการหลัก",
                description: "ชั้น 1 เป็นพื้นที่ต้อนรับและบริการหลัก มีเคาน์เตอร์ยืม-คืนหนังสือ พื้นที่จัดแสดงหนังสือใหม่ และโซนการสืบค้นข้อมูลออนไลน์ ตกแต่งด้วยโทนสีสว่างและมีแสงธรรมชาติเข้ามาจากหน้าต่างกระจกขนาดใหญ่",
                icon: "📚",
                gradient: "from-blue-400 to-blue-600"
              },
              {
                floor: "ชั้น 2",
                title: "โซนคอมพิวเตอร์และสื่อดิจิทัล",
                description: "ชั้น 2 เป็นพื้นที่เทคโนโลยีสารสนเทศ มีคอมพิวเตอร์สำหรับสืบค้นข้อมูลและทำงาน พร้อมอุปกรณ์สแกนเอกสาร เครื่องพิมพ์ และพื้นที่สำหรับการประชุมกลุมย่อย พร้อมสิ่งอำนวยความสะดวกครบครัน",
                icon: "💻",
                gradient: "from-purple-400 to-purple-600"
              },
              {
                floor: "ชั้น 3", 
                title: "โซนอ่านหนังสือเงียบ",
                description: "ชั้น 3 เป็นพื้นที่เงียบสงบสำหรับการอ่านและศึกษาค้นคว้า มีที่นั่งแบบต่างๆ ทั้งโต๊ะเดี่ยวและโต๊ะกลุ่ม พร้อมหิ้งหนังสืออ้างอิงและวารสาร บรรยากาศเอื้อต่อการมีสมาธิในการเรียนรู้",
                icon: "🪑",
                gradient: "from-green-400 to-green-600"
              },
              {
                floor: "ชั้น 4",
                title: "ห้องสัมมนาและกิจกรรม", 
                description: "ชั้น 4 เป็นพื้นที่จัดกิจกรรมทางวิชาการ มีห้องสัมมนาขนาดต่างๆ พร้อมอุปกรณ์นำเสนอที่ทันสมัย ห้องประชุมกลุ่ม และพื้นที่จัดแสดงนิทรรศการ เหมาะสำหรับการจัดกิจกรรมส่งเสริมการเรียนรู้",
                icon: "👥",
                gradient: "from-orange-400 to-orange-600"
              }
            ].map((item, index) => (
              <div 
                key={index}
                data-aos-custom="true"
                data-id={`gallery-${index}`}
                className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 ${
                  visibleItems.includes(`gallery-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative h-64 bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                  
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30">
                    {item.floor}
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">{item.icon}</div>
                      <p className="text-lg font-semibold">ดูรูปภาพ {item.floor}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-50 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div 
            data-aos-custom="true"
            data-id="map-container"
            className={`bg-white rounded-3xl shadow-xl p-12 border border-gray-200 ${
              visibleItems.includes('map-container') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } transition-all duration-800`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-800 mb-4">
                <span className="text-yellow-500 mr-3">🗺️</span>
                เส้นทางและการเดินทาง
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-medium">
                พบเส้นทางไปยังห้องสมุดกลาง มหาวิทยาลัยมหาสารคาม
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a 
                  href="https://maps.google.com/?q=ห้องสมุดกลาง+มหาวิทยาลัยมหาสารคาม&ll=16.2467,103.2512&z=17" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  นำทางด้วย Google Maps
                </a>
                <a 
                  href="https://maps.google.com/search/ห้องสมุด+มหาวิทยาลัยมหาสารคาม/@16.2467,103.2512,17z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  ค้นหาบน Google Maps
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🚗", title: "การเดินทางด้วยรถยนต์", desc: "จากถนนมิตรภาพ เข้าทางประตูมหาวิทยาลัยหลัก แล้วเลี้ยวขวาไปยังอาคารสำนักหอสมุดกลาง มีที่จอดรถเพียงพอ" },
                { icon: "🚌", title: "การเดินทางด้วยรถประจำทาง", desc: "ขึ้นรถสองแถวสายมหาวิทยาลัยมหาสารคาม ลงที่ประตูหลัก แล้วเดินเข้ามาประมาณ 5 นาที" },
                { icon: "🏍️", title: "การเดินทางด้วยรถจักรยานยนต์", desc: "สามารถขับรถจักรยานยนต์เข้ามาในมหาวิทยาลัยได้ มีที่จอดรถจักรยานยนต์หน้าอาคารห้องสมุด" },
                { icon: "🚶", title: "จากภายในมหาวิทยาลัย", desc: "อาคารห้องสมุดกลางตั้งอยู่ใจกลางมหาวิทยาลัย สามารถเดินจากอาคารต่างๆ ได้ภายใน 10 นาที" }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Places;