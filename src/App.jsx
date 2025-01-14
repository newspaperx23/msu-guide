import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "aos/dist/aos.css";
import Aos from "aos";
import videoBG from "./assets/videobg.mp4";
import Welcome from "./welcome.jsx";
import Footer from "./Footer.jsx";
import ImageSlider from "./ImageSlider.jsx";
import { Link } from "react-scroll";
import Student from "./Student.jsx"; // ตัวอย่างหน้าอื่น
import My3DScene from "./My3DScene.jsx";
import { useTranslation } from "react-i18next";
import "./i18n.js";
import NavigationBar from "./NavigationBar.jsx";
import ReactPlayer from "react-player";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // เปลี่ยนภาษา
  };

  useEffect(() => {
    Aos.init({
      duration: 1000, // ตั้งค่าความเร็วแอนิเมชัน
      once: true, // ให้เล่นแอนิเมชันเพียงครั้งเดียว
    });
  }, []);

  return (
    <Router>
      <Routes>
        {/* เส้นทางหน้าหลัก */}
        <Route
          path="/"
          element={
            <div>
              <div>
                <NavigationBar />
              </div>
              {/* วิดีโอพื้นหลัง */}
              <div className="w-full h-screen transition-all">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <video
                  className=" w-full h-full object-cover"
                  src={videoBG}
                  autoPlay
                  loop
                  muted
                  playsinline
                >
                  <source src="./assets/videobg.mp4" type="video/mp4" />
                </video>
                <div className=" md:hidden w-full h-screen relative">
                  {/* <ReactPlayer
                    url="https://www.youtube.com/watch?v=u5CMtlBEx-I"
                    playing={true}
                    loop={true}
                    muted={true}
                    width="100%"
                    height="100%"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)", // จัดให้อยู่กึ่งกลาง
                      objectFit: "cover",
                    }}
                    config={{
                      youtube: {
                        playerVars: {
                          modestbranding: 1, // ซ่อนโลโก้ YouTube
                          rel: 0, // ปิดการแสดงวิดีโอที่เกี่ยวข้อง
                        },
                      },
                    }}
                  /> */}
                  <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                </div>
                <div className="text-center absolute h-full w-full flex top-0 flex-col justify-center items-center text-white">
                  <p className="text-3xl opacity-70 mb-2">{t("welcome")}</p>
                  <p className="text-4xl md:text-5xl drop-shadow-md font-medium">
                    Mahasarakham University
                  </p>
                </div>
                <div className="text-center absolute w-full flex top-24 h-screen flex-col justify-center items-center text-white">
                  <p className="text-3xl opacity-90 text-yellow-300 drop-shadow-md">
                    <Welcome />
                  </p>
                </div>
              </div>
              {/* ปุ่มเลื่อนไปยัง Section */}
              <div className="text-center absolute w-full flex top-56 h-screen flex-col justify-center items-center text-white">
                <Link to="section1" smooth={true} duration={1000}>
                  <button className="rounded border-2 px-5 py-2 animate-bounce">
                    {t("letstour")}
                  </button>
                </Link>
              </div>

              {/* Section ImageSlider */}
              <div data-aos="fade-right">
                <ImageSlider />
              </div>

              {/* Footer */}
              <div data-aos="fade-up">
                <Footer />
              </div>
              <div
                data-aos="fade-up"
                className="right-[20%] bottom-[15%] md:right-[10%] md:bottom-[25%] fixed "
              >
                <My3DScene />
              </div>
            </div>
          }
        />

        {/* เส้นทางสำหรับหน้า Student */}
        <Route path="/student" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
