import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SushiSection from "./SushiSection";
import Footer from "./Footer";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SushiSection />
      <Footer />
    </div>
  );
}

export default App;
