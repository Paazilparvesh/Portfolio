// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import resume from "/src/assets/Safwan_Resume.pdf";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const isAboutHero = location.pathname === "/about";

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-20 py-6 transition-all ${
//         isAboutHero ? "flex justify-end" : ""
//       } duration-300
//       }`}
//     >
//       <div
//         className={`flex items-center ${
//           isAboutHero ? "justify-center" : "justify-between"
//         } relative`}
//       >
//         {/* Logo (conditionally hidden) */}
//         {!isAboutHero && (
//           <div className="z-50 flex flex-col justify-center items-center leading-tight hover:scale-105 transition-all duration-300">
//             <div className="text-white text-xs md:text-xl lg:text-2xl 2xl:text-[32px] font-extrabold uppercase cursor-pointer tracking-widest font-tanmon">
//               <Link to="/">SAFWAN MANAS</Link>
//             </div>
//             <p className="text-[#a95847] font-extralight text-xs md:text-lg lg:text-xl 2xl:text-[22px] md:-mt-1 scale-82 md:scale-80 lg:scale-82 2xl:scale-100 md:tracking-widest text-center uppercase font-ttcommon">
//               <Link to="/">Architect | Retail Designer</Link>
//             </p>
//           </div>
//         )}

//         {/* Mobile Burger Icon */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="relative w-5 h-4 md:w-8 md:h-6 flex flex-col justify-between items-center z-50 group cursor-pointer -mt-3 md:mt-0"
//           aria-label="Toggle Menu"
//         >
//           <span
//             className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transform transition duration-300 ease-in-out ${
//               menuOpen ? "rotate-45 translate-y-[8px]" : ""
//             }`}
//           />
//           <span
//             className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transition-all duration-300 ease-in-out ${
//               menuOpen ? "opacity-0" : ""
//             }`}
//           />
//           <span
//             className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transform transition duration-300 ease-in-out ${
//               menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
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
//             <Link
//               to="/"
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-[#a95847] font-abel focus:outline-none"
//             >
//               Portfolio
//             </Link>
//             <Link
//               to="/about"
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-[#a95847] font-abel focus:outline-none"
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-[#a95847] font-abel focus:outline-none"
//             >
//               Contact
//             </Link>
//             <a
//               href={resume}
//               download
//               className="hover:text-[#a95847] font-abel focus:outline-none"
//               onClick={() => setMenuOpen(false)}
//             >
//               CV
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "/src/assets/Safwan_Resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const isAboutHero = location.pathname === "/about";

  const handleCVDownload = () => {
    // Trigger modal
    setShowModal(true);
    setMenuOpen(false);
    // Auto close modal after 3 seconds
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-20 py-6 transition-all ${
          isAboutHero ? "flex justify-end" : ""
        } duration-300`}
      >
        <div
          className={`flex items-center  ${
            isAboutHero ? "justify-center" : "justify-between"
          } relative`}
        >
          {!isAboutHero && (
            <div className="z-50 flex flex-col justify-center items-center leading-tight hover:scale-105 transition-all duration-300 -ml-6">
              <div className="text-white text-xs md:text-xl lg:text-2xl 2xl:text-[32px] font-extrabold uppercase cursor-pointer tracking-widest font-tanmon">
                <Link to="/">SAFWAN MANAS</Link>
              </div>
              <p className="text-[#a95847] font-extralight text-md md:text-lg lg:text-xl 2xl:text-[27px] -mt-1.5 md:-mt-3 lg:-mt-2 scale-76 md:scale-94 lg:scale-100 2xl:scale-100 md:tracking-widest text-center capitalize ">
                <Link to="/">
                  <span className="font-ttcommon">Architect</span> {" | "}{" "}
                  <span className="font-ttcommon">Retail Designer</span>
                </Link>
              </p>
            </div>
          )}

          {/* Burger Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-5 h-4 md:w-8 md:h-6 flex flex-col justify-between items-center z-50 group cursor-pointer -mt-3 md:mt-0"
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 md:h-1 w-full bg-[#ffffff] transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
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

              {/* ⬇️ CV Link with onClick and download */}
              <a
                href={resume}
                download
                onClick={handleCVDownload}
                className="hover:text-[#a95847] font-abel focus:outline-none"
              >
                CV
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ✨ Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full text-center animate-fadeIn">
            <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
            <p className="text-sm">Thanks for downloading the Resume</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
