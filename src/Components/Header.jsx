import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "/src/assets/cv24.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 👈 current path

  const isAboutHero = location.pathname === "/about"; // you can refine this if needed

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
            <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl 2xl:text-[29px] font-extrabold uppercase cursor-pointer tracking-wider helvetica-neue">
              <Link to="/">SAFWAN MANAS</Link>
            </div>
            <p className="text-[#a95847] font-extralight text-sm sm:text-sm md:text-lg lg:text-lg 2xl:text-[22px] -mt-1 tracking-widest text-center font-abel">
              <Link to="/">Architect | Retail Designer</Link>
            </p>
          </div>
        )}

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex items-center gap-12 lg:gap-16">
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
        </nav> */}

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







// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import resume from "/src/assets/cv24.pdf";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cvModalOpen, setCvModalOpen] = useState(false);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-20 py-6 transition-all duration-300
//       }`}
//     >
//       <div className="flex items-center justify-between relative">
//         {/* Logo */}
//         <div className="z-50 flex flex-col justify-center items-end leading-tight hover:scale-105 transition-all duration-300">
//           <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-bold uppercase cursor-pointer tracking-wider font-helvetica">
//             <Link to="/">SAFWAN MANAS</Link>
//           </div>
//           <p className="text-[#a95847] font-light text-sm sm:text-sm md:text-base lg:text-lg -mt-1 tracking-widest text-right font-abel">
//             <Link to="/">SPATIAL DESIGNER</Link>
//           </p>
//         </div>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-12 lg:gap-16">
//           <ul className="flex items-center gap-6">
//             <li className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer">
//               <Link to="/">Portfolio</Link>
//             </li>
//             <li className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer">
//               <Link to="/contact">Contact</Link>
//             </li>
//             {/* Desktop CV button */}
//             <li
//               onClick={() => setCvModalOpen(true)}
//               className="uppercase text-white text-base lg:text-lg xl:text-2xl hover:text-[#a95847] hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               CV
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Burger Icon */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="relative w-8 h-8 flex flex-col justify-between items-center md:hidden z-50 group"
//           aria-label="Toggle Menu"
//         >
//           <span
//             className={`block h-0.5 w-full bg-[#fde3a7] transform transition duration-300 ease-in-out ${
//               menuOpen ? "rotate-45 translate-y-[15px]" : ""
//             }`}
//           />
//           <span
//             className={`block h-0.5 w-full bg-[#fde3a7] transition-all duration-300 ease-in-out ${
//               menuOpen ? "opacity-0" : ""
//             }`}
//           />
//           <span
//             className={`block h-0.5 w-full bg-[#fde3a7] transform transition duration-300 ease-in-out ${
//               menuOpen ? "-rotate-45 -translate-y-[15px]" : ""
//             }`}
//           />
//         </button>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 ease-in-out z-40 transform ${
//             menuOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col items-center justify-center h-full space-y-10 text-[#fde3a7] text-xl uppercase tracking-widest">
//             <button className="hover:text-[#a95847] font-abel focus:outline-none">
//               <Link to="/">Portfolio</Link>
//             </button>
//             {/* Mobile CV button */}
//             <button
//               onClick={() => setCvModalOpen(true)}
//               className="hover:text-[#a95847] font-abel focus:outline-none"
//             >
//               CV
//             </button>

//             <button className="hover:text-[#a95847] font-abel focus:outline-none">
//               <Link to="/about">About</Link>
//             </button>
//             <button className="hover:text-[#a95847] font-abel focus:outline-none">
//               <Link to="/contact">Contact</Link>
//             </button>

//             {/* Mobile Contacts */}
//             <div className="text-center space-y-2 font-abel text-base mt-6">
//               <a
//                 href="tel:+919840952854"
//                 className="block hover:text-[#a95847]"
//               >
//                 +91 984 095 28 54
//               </a>
//               <a href="tel:+97336070242" className="block hover:text-[#a95847]">
//                 +973 360 702 42
//               </a>
//             </div>
//           </div>
//         </div>

//         {cvModalOpen && (
//           <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
//             <div className="bg-white rounded-xl p-8 w-[90%] max-w-sm text-center space-y-6 relative shadow-2xl">
//               <button
//                 onClick={() => setCvModalOpen(false)}
//                 className="absolute top-2 right-4 text-black text-2xl font-bold hover:text-[#a95847] transition"
//               >
//                 &times;
//               </button>
//               <h2 className="text-xl font-semibold text-[#1a1a1a] font-abel tracking-wide">
//                 Feel Free to Download my resume
//               </h2>
//               <a
//                 href={resume}
//                 download
//                 className="inline-block px-6 py-3 bg-[#a95847] text-white rounded-lg shadow hover:bg-[#8f453a] transition font-abel tracking-wide"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
