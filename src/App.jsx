import React from "react";
import Navbar from "./components/Navbar";
import Prizes from "./components/Prizes";
import Domains from "./components/Domains";
import About from "./components/About";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Timeline />
      <Domains />
      <Prizes />
    </div>
  );
};

export default App;
