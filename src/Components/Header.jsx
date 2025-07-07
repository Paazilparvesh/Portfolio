import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", anchor: "home" }, // <section id="home" />
    { label: "About", anchor: "about" }, // <section id="about" />
    { label: "Experience", anchor: "education" }, // <section id="education" />
    { label: "Projects", anchor: "projects" }, // <section id="projects" />
    { label: "Contact", anchor: "contact" }, // <section id="contact" />
  ];

  const handleNavClick = (anchor) => {
    setMenuOpen(false);
    const section = document.getElementById(anchor);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-20 py-6 transition-all duration-300
      }`}
    >
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="z-50">
          <span
            onClick={() => handleNavClick("home")}
            className="text-white text-[28px] lg:text-[32px] font-bold uppercase cursor-pointer tracking-wide"
          >
            SM.
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16">
          <ul className="flex items-center gap-10 lg:gap-14">
            {navLinks.map(({ label, anchor }) => (
              <li
                key={anchor}
                onClick={() => handleNavClick(anchor)}
                className="uppercase text-white text-base lg:text-lg xl:text-xl hover:text-[#a95847] transition cursor-pointer"
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Contact Info */}
        <div className="hidden md:flex flex-col text-right text-[#fde3a7] space-y-2">
          <ul className="flex items-center justify-end gap-4 mb-1">
            <li>
              <a
                href="#"
                className="hover:text-[#a95847]"
                aria-label="Facebook"
              >
                <i className="svg-image-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/safwanmanas/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a95847]"
                aria-label="Instagram"
              >
                <i className="svg-image-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/safwanmanas/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#a95847]"
                aria-label="LinkedIn"
              >
                <i className="svg-image-linkedin"></i>
              </a>
            </li>
          </ul>
          <a
            href="tel:+919840952854"
            className="text-base lg:text-lg block hover:text-[#a95847] transition"
          >
            +91 984 095 28 54
          </a>
          <a
            href="tel:+97336070242"
            className="text-base lg:text-lg block hover:text-[#a95847] transition"
          >
            +973 360 702 42
          </a>
        </div>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-[#fde3a7]" />
            <span className="block w-6 h-0.5 bg-[#fde3a7]" />
            <span className="block w-6 h-0.5 bg-[#fde3a7]" />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 ease-in-out z-40 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-10 text-[#fde3a7] text-xl uppercase tracking-widest">
            {navLinks.map(({ label, anchor }) => (
              <button
                key={anchor}
                onClick={() => handleNavClick(anchor)}
                className="hover:text-[#a95847] focus:outline-none"
              >
                {label}
              </button>
            ))}

            {/* Mobile Contacts */}
            <div className="text-center space-y-2 text-base mt-6">
              <a
                href="tel:+919840952854"
                className="block hover:text-[#a95847]"
              >
                +91 984 095 28 54
              </a>
              <a href="tel:+97336070242" className="block hover:text-[#a95847]">
                +973 360 702 42
              </a>
              <div className="flex justify-center gap-5 mt-4 text-2xl">
                <a
                  href="#"
                  className="hover:text-[#a95847]"
                  aria-label="Facebook"
                >
                  <i className="svg-image-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/safwanmanas/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#a95847]"
                  aria-label="Instagram"
                >
                  <i className="svg-image-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/safwanmanas/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#a95847]"
                  aria-label="LinkedIn"
                >
                  <i className="svg-image-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
