import React from "react";
import logo from "../assets/logo.png";
import iic from "../assets/iic.png";

const Navbar = () => {
  const list = ["Home", "Domains", "About Us", "Prizes", "Timeline", "FAQs"];
  return (
    <nav className="bg-[#001F2D] flex items-center justify-between px-6 py-3">
      <img src={logo} alt="logo" />
      <ul className="flex items-center gap-20">
        {list.map((item, index) => (
          <li
            key={index}
            className="text-white poppins-semibold cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <img src={iic} alt="iic" />
    </nav>
  );
};

export default Navbar;
