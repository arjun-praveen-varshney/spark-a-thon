import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
// import Prizes from "./components/Prizes";
import Domains from "./components/Domains";
import About from "./components/About";
import Timeline from "./components/Timeline";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Domains />
      {/* <Prizes /> */}
      <FAQs />
      <Footer />
    </div>
  );
};

export default App;
