import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "/src/assets/cv24.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isAboutHero = location.pathname === "/about";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-20 py-6 transition-all ${
        isAboutHero ? "flex justify-end" : ""
      } duration-300
      }`}
    >
      <div
        className={`flex items-center ${
          isAboutHero ? "justify-center" : "justify-between"
        } relative`}
      >
        {/* Logo (conditionally hidden) */}
        {!isAboutHero && (
          <div className="z-50 flex flex-col justify-center items-center leading-tight hover:scale-105 transition-all duration-300">
            <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-[32px] font-extrabold uppercase cursor-pointer tracking-widest font-lato">
              <Link to="/">SAFWAN MANAS</Link>
            </div>
            <p className="text-[#a95847] font-extralight text-sm sm:text-sm md:text-lg lg:text-lg 2xl:text-[17px] -mt-1 tracking-widest text-center uppercase font-lato">
              <Link to="/">Architect | Retail Designer</Link>
            </p>
          </div>
        )}

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-10 h-8 flex flex-col justify-between items-center z-50 group cursor-pointer"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-[15px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transform transition duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-[15px]" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 ease-in-out z-40 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-[#fde3a7] text-xl uppercase tracking-widest">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a95847] font-abel focus:outline-none"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a95847] font-abel focus:outline-none"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#a95847] font-abel focus:outline-none"
            >
              Contact
            </Link>
            <a
              href={resume}
              download
              className="hover:text-[#a95847] font-abel focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
