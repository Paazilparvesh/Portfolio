import React, { useRef } from "react";
import { Link } from "react-router-dom";
import projectList from "../Data/ProjectList";

export default function ProjectsSection() {
  const hoverRefs = useRef([]);
  const imageRefs = useRef([]);
  const scrollWrapperRef = useRef(null);

  const handleMouseMove = (e, index) => {
    const hoverEl = hoverRefs.current[index];
    const imgEl = imageRefs.current[index];
    if (!hoverEl || !imgEl) return;

    const rect = hoverEl.getBoundingClientRect();
    const X = e.clientX - rect.left - rect.width / 2 + 40;
    const Y = e.clientY - rect.top - rect.height / 2 + 40;

    hoverEl.style.opacity = "1";
    imgEl.style.transform = `translateY(${Y}px) translateX(${X}px)`;

    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = (index) => {
    const hoverEl = hoverRefs.current[index];
    const imgEl = imageRefs.current[index];
    if (!hoverEl || !imgEl) return;

    hoverEl.style.opacity = "0";
    imgEl.style.transform = "translateY(0) translateX(0)";

    if (scrollWrapperRef.current) {
      scrollWrapperRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#FFB91A] py-20 overflow-hidden flex justify-center items-center"
    >
      <style>
        {`
    @keyframes scrollLTR {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}
      </style>

      <div className="container mx-auto px-4">
        <div className="overflow-hidden whitespace-nowrap relative">
          <div
            ref={scrollWrapperRef}
            className="flex gap-16 sm:gap-20 md:gap-28 w-max animate-scrollLTR"
            style={{
              animation: "scrollLTR 40s linear infinite",
            }}
          >
            {[...projectList, ...projectList].map((proj, index) => (
              <Link
                to={`/project/${proj.id}`}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  const url = `/project/${proj.id}`;
                  window.location.href = url;
                  setTimeout(() => {
                    window.location.reload();
                  }, 300);
                }}
              >
                <div
                  className="relative h-[50vh] sm:h-[60vh] flex justify-center items-center px-4 sm:px-6 text-center cursor-pointer"
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="text-[#a95847] text-xl sm:text-3xl md:text-5xl xl:text-6xl font-bold inline-block leading-tight tracking-wide">
                    {proj.title}
                    {proj.subtitle && <br />}
                    <span className="text-black text-sm sm:text-lg md:text-xl xl:text-2xl font-medium block mt-2">
                      {proj.subtitle}
                    </span>
                  </div>

                  <div
                    ref={(el) => (hoverRefs.current[index] = el)}
                    className="absolute top-1/2 left-1/2 z-10 w-[250px] sm:w-[350px] md:w-[500px] opacity-0 transition-opacity duration-200 pointer-events-none"
                    style={{ transform: "translate(-50%, -50%)" }}
                  >
                    <div className="block relative pt-[100%]">
                      <img
                        ref={(el) => (imageRefs.current[index] = el)}
                        src={proj.image}
                        alt={proj.title}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-150 ease-in-out rounded-lg shadow-xl"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import projectList from "../Data/ProjectList";

// export default function ProjectsSection() {
//   const scrollWrapperRef1 = useRef(null);
//   const scrollWrapperRef2 = useRef(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section
//       id="projects"
//       className="relative w-full min-h-screen bg-[#FFB91A] py-20 overflow-hidden flex flex-col justify-center items-center"
//     >
//       <div className="flex justify-center items-center mb-10 px-4">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#a95847] uppercase tracking-wide text-center leading-tight">
//           My Projects
//         </h2>
//       </div>

//       <style>
//         {`
//           @keyframes scrollLTR {
//             0% {
//               transform: translateX(0%);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
//         `}
//       </style>

//       <div className="w-full overflow-x-hidden px-2 py-20 sm:px-4">
//         {[0, 1].map((rowNum) => {
//           const scrollRef =
//             rowNum === 0 ? scrollWrapperRef1 : scrollWrapperRef2;
//           const isReversed = rowNum === 1;

//           return (
//             <div
//               ref={scrollRef}
//               key={rowNum}
//               className={`flex gap-3 sm:gap-4 md:gap-6 w-max animate-scrollLTR ${
//                 isReversed ? "mt-6 sm:mt-10" : ""
//               }`}
//               style={{
//                 animation: `scrollLTR 40s linear infinite ${
//                   isReversed ? "reverse" : ""
//                 }`,
//               }}
//             >
//               {[...projectList, ...projectList].map((proj, index) => {
//                 const actualIndex = rowNum * 1000 + index;
//                 const isHovered = hoveredIndex === actualIndex;
//                 const isShrinking = hoveredIndex !== null && !isHovered;

//                 return (
//                   <Link
//                     to={`/project/${proj.id}`}
//                     key={actualIndex}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       const url = `/project/${proj.id}`;
//                       window.location.href = url;
//                       setTimeout(() => {
//                         window.location.reload();
//                       }, 300);
//                     }}
//                     onMouseEnter={() => setHoveredIndex(actualIndex)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                     className={`relative block transition-transform duration-300
//                       ${
//                         isHovered
//                           ? "scale-[1.5] sm:scale-[1.35] md:scale-150 z-20"
//                           : isShrinking
//                           ? "scale-75 opacity-60 z-0"
//                           : "scale-100"
//                       }`}
//                     style={{ transitionTimingFunction: "ease-in-out" }}
//                   >
//                     <img
//                       src={proj.image}
//                       alt={proj.title}
//                       className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover rounded-xl shadow-lg"
//                     />
//                   </Link>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }
