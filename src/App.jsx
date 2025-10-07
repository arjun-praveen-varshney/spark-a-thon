import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Domains from "./components/Domains";
import About from "./components/About";
import Timeline from "./components/Timeline";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Timeline />
      <Domains />
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;