// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import projectList from "../Data/ProjectList";

// export default function ProjectsSection() {
//   const hoverRefs = useRef([]);
//   const imageRefs = useRef([]);
//   const scrollWrapperRef = useRef(null);

//   const handleMouseMove = (e, index) => {
//     const hoverEl = hoverRefs.current[index];
//     const imgEl = imageRefs.current[index];
//     if (!hoverEl || !imgEl) return;

//     const rect = hoverEl.getBoundingClientRect();
//     const X = e.clientX - rect.left - rect.width / 2 + 40;
//     const Y = e.clientY - rect.top - rect.height / 2 + 40;

//     hoverEl.style.opacity = "1";
//     imgEl.style.transform = `translateY(${Y}px) translateX(${X}px)`;

//     if (scrollWrapperRef.current) {
//       scrollWrapperRef.current.style.animationPlayState = "paused";
//     }
//   };

//   const handleMouseLeave = (index) => {
//     const hoverEl = hoverRefs.current[index];
//     const imgEl = imageRefs.current[index];
//     if (!hoverEl || !imgEl) return;

//     hoverEl.style.opacity = "0";
//     imgEl.style.transform = "translateY(0) translateX(0)";

//     if (scrollWrapperRef.current) {
//       scrollWrapperRef.current.style.animationPlayState = "running";
//     }
//   };

//   return (
//     <section className="relative w-full min-h-screen bg-[#FFB91A] py-20 overflow-hidden flex justify-center items-center">
//       <style>
//         {`
//     @keyframes scrollLTR {
//       0% {
//         transform: translateX(0%);
//       }
//       100% {
//         transform: translateX(-50%);
//       }
//     }
//   `}
//       </style>

//       <div className="container mx-auto px-4">
//         <div className="overflow-hidden whitespace-nowrap relative">
//           <div
//             ref={scrollWrapperRef}
//             className="flex gap-16 sm:gap-20 md:gap-28 w-max animate-scrollLTR"
//             style={{
//               animation: "scrollLTR 40s linear infinite",
//             }}
//           >
//             {[...projectList, ...projectList].map((proj, index) => (
//               <Link
//                 to={`/project/${proj.id}`}
//                 key={index}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   const url = `/project/${proj.id}`;
//                   window.location.href = url;
//                   setTimeout(() => {
//                     window.location.reload();
//                   }, 300);
//                 }}
//               >
//                 <div
//                   className="relative h-[50vh] sm:h-[60vh] flex justify-center items-center px-4 sm:px-6 text-center cursor-pointer"
//                   onMouseMove={(e) => handleMouseMove(e, index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                 >
//                   <div className="text-[#a95847] text-xl sm:text-3xl md:text-5xl xl:text-6xl font-bold inline-block leading-tight tracking-wide">
//                     {proj.title}
//                     {proj.subtitle && <br />}
//                     <span className="text-black text-sm sm:text-lg md:text-xl xl:text-2xl font-medium block mt-2">
//                       {proj.subtitle}
//                     </span>
//                   </div>

//                   <div
//                     ref={(el) => (hoverRefs.current[index] = el)}
//                     className="absolute top-1/2 left-1/2 z-10 w-[250px] sm:w-[350px] md:w-[500px] opacity-0 transition-opacity duration-200 pointer-events-none"
//                     style={{ transform: "translate(-50%, -50%)" }}
//                   >
//                     <div className="block relative pt-[100%]">
//                       <img
//                         ref={(el) => (imageRefs.current[index] = el)}
//                         src={proj.image}
//                         alt={proj.title}
//                         className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-150 ease-in-out rounded-lg shadow-xl"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import { Link } from "react-router-dom";
import projectList from "../Data/ProjectList";

export default function ProjectsScatteredGrid() {
  return (
    <section className="w-full min-h-screen bg-[#FFB91A] pt-36 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 mt-40">
        {projectList.map((project, index) => {
          // Apply vertical offset to create a staggered pattern
          const topOffset =
            index % 4 === 1
              ? "mt-56"
              : index % 4 === 2
              ? "-mt-40"
              : index % 4 === 3
              ? "mt-56"
              : "-mt-40";

          return (
            <Link
              key={index}
              to={`/project/${project.id}`}
              className={`block group relative ${topOffset}`}
            >
              <div className="w-full relative overflow-hidden">
                <div className="aspect-[4/5] w-full relative bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition duration-300 ease-in-out flex justify-center items-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-medium text-2xl md:text-3xl tracking-wide font-abel text-center px-2">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
