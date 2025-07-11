import React, { useState } from "react";
import { Link } from "react-router-dom";
import resume from "/src/assets/cv24.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-20 py-6 transition-all duration-300
      }`}
    >
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="z-50 flex flex-col justify-center items-end leading-tight hover:scale-105 transition-all duration-300">
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold uppercase cursor-pointer tracking-wider font-helvetica">
            <Link to="/">SAFWAN MANAS</Link>
          </div>
          <p className="text-[#a95847] font-light text-sm sm:text-sm md:text-base lg:text-lg -mt-1 tracking-widest text-right font-abel">
            <Link to="/">SPATIAL DESIGNER</Link>
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16">
          <ul className="flex items-center gap-6">
            <li className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer">
              <Link to="/">Portfolio</Link>
            </li>
            <li className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer">
              <a href={resume} download>
                CV
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-8 flex flex-col justify-between items-center md:hidden z-50 group"
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-full bg-[#fde3a7] transform transition duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-[15px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-[#fde3a7] transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-[#fde3a7] transform transition duration-300 ease-in-out ${
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
            <button className="hover:text-[#a95847] font-abel focus:outline-none">
              <Link to="/">Portfolio</Link>
            </button>
            <a
              href={resume}
              download
              className="hover:text-[#a95847] font-abel focus:outline-none"
            >
              CV
            </a>
            <button className="hover:text-[#a95847] font-abel focus:outline-none">
              <Link to="/about">About</Link>
            </button>
            <button className="hover:text-[#a95847] font-abel focus:outline-none">
              <Link to="/contact">Contact</Link>
            </button>

            {/* Mobile Contacts */}
            <div className="text-center space-y-2 font-abel text-base mt-6">
              <a
                href="tel:+919840952854"
                className="block hover:text-[#a95847]"
              >
                +91 984 095 28 54
              </a>
              <a href="tel:+97336070242" className="block hover:text-[#a95847]">
                +973 360 702 42
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
