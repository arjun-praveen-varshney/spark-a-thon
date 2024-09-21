import React from "react";
import Navbar from "./components/Navbar";
import Prizes from "./components/Prizes";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Prizes />
      <HeroSection />
    </div>
  );
};

export default App;
