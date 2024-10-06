import { useState } from "react";
import logo from "../assets/logo.png";
import iic from "../assets/iic_logo.png";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const list = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Timeline", to: "timeline" },
    { name: "Domains", to: "domains" },
    // { name: "Prizes", to: "prizes" },
    { name: "FAQs", to: "faqs" },
  ];

  return (
    <nav className="bg-secondary md:sticky md:top-0 z-20 flex items-center justify-between px-6 py-3">
      <img src={logo} alt="logo" />
      <div className="hidden md:block">
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
      </div>
      <img src={iic} alt="iic" className="hidden md:block w-[100px] h-[44px]" />
      <div className="md:hidden flex items-center">
        <img src={iic} alt="iic" className="h-8 w-auto mr-4" />
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
        >
          {isOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-secondary z-20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {list.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
