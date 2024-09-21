import React from "react";
import logo from "../assets/logo.png";
import iic from "../assets/iic.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const list = [
    { name: "Home", to: "home" },
    { name: "Domains", to: "domains" },
    { name: "About Us", to: "about" },
    { name: "Prizes", to: "prizes" },
    { name: "Timeline", to: "timeline" },
    { name: "FAQs", to: "faqs" },
  ];
  return (
    <nav className="bg-secondary sticky top-0 z-20 flex items-center justify-between px-6 py-3">
      <img src={logo} alt="logo" />
      <ul className="flex items-center gap-20">
        {list.map((item, index) => (
          <li
            key={index}
            className="text-white poppins-semibold cursor-pointer"
          >
            <Link to={item.to} smooth={true} duration={500} offset={-70}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <img src={iic} alt="iic" />
    </nav>
  );
};

export default Navbar;
