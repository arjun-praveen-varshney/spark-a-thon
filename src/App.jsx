import React from "react";
import Navbar from "./components/Navbar";
import Prizes from "./components/Prizes";
import Domains from "./components/Domains";

const App = () => {
  return (
    <div>
      <Navbar />
      <Domains />
      <Prizes />
    </div>
  );
};

export default App;
