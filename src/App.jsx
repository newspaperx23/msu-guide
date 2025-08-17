import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Welcome from "./welcome.jsx";
import Footer from "./Footer.jsx";
import Student from "./Student.jsx";
import Places from "./Places.jsx";
import My3DScene from "./My3DScene.jsx";
import { useTranslation } from "react-i18next";
import "./i18n.js";
import NavigationBar from "./NavigationBar.jsx";

// ✅ Scroll Controller (ล็อก scroll หน้าแรก)
function ScrollController() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location]);

  return null;
}

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollController />
      <Routes>
        {/* ✅ หน้าแรก */}
        <Route
          path="/"
          element={
            <div>
              <NavigationBar />

              {/* Gradient Background */}
              <div className="w-full h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-yellow-400 flex items-center justify-center text-white relative">
                <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

                {/* ข้อความกลางจอ */}
                <div className="relative text-center">
                  <p className="text-3xl opacity-70 mb-2">{t("welcome")}</p>
                  <p className="text-4xl md:text-5xl drop-shadow-md font-medium">
                    Mahasarakham University
                  </p>
                  <p className="text-2xl text-yellow-200 mt-4 drop-shadow-md">
                    <Welcome />
                  </p>

                  {/* ✅ ปุ่มไปหน้า /places */}
                  <div className="mt-8">
                    <a href="/places">
                      <button className="rounded border-2 px-5 py-2 animate-bounce bg-black/30 hover:bg-black/50 transition">
                        {t("letstour")}
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div data-aos="fade-up">
                <Footer />
              </div>

              {/* 3D Scene */}
              <div
                data-aos="fade-up"
                className="right-[20%] bottom-[10%] md:right-[10%] md:bottom-[15%] fixed "
              >
                <My3DScene />
              </div>
            </div>
          }
        />

        {/* ✅ เส้นทางอื่น */}
        <Route path="/student" element={<Student />} />
        <Route path="/places" element= {<Places />} />
      </Routes>
    </Router>
  );
}

export default App;
