// import React from "react";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import resume from "/src/assets/cv24.pdf";

// gsap.registerPlugin(ScrollTrigger);

// const educationData = [
//   {
//     year: "2009-2010",
//     role: "Design Intern",
//     company: "Al Hamad Constructions Bahrain",
//     desc: "Part of the design team during construction of a multi-residential project, prepared detailed drawings for apartments like Villamar @ the harbor, BFH, Bahrain.",
//   },
//   {
//     year: "2010-2013",
//     role: "Design Architect",
//     company: "Architecturered India",
//     desc: "Coordinated & facilitated project execution of an institute & campus planning right from concept proposal, model studies, and GFC drawings with MEP subcontractors & structural consultants.",
//   },
//   {
//     year: "2009-2014",
//     role: "Bachelor of Architecture",
//     company: "Anna University, India",
//     desc: "Studied core architectural concepts, design thinking and sustainable design principles.",
//   },
//   {
//     year: "2020-2023",
//     role: "Facade Engineer",
//     company: "Al Ansari Group / Fire Experts Bahrain - UAE",
//     desc: "Site architect involving in-situ condition tweaks & facade solutions, customer service and problem solving.",
//   },
//   {
//     year: "2023-2024",
//     role: "Masters Graduate",
//     company: "Elisava Design and Engineering, Spain",
//     desc: "Specialized in Retail Design with focus on spatial strategy, customer experience and sustainable material study.",
//   },
// ];

// const EducationSection = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const el = sectionRef.current;

//     if (window.innerWidth < 768) {
//       // Directly show without animation on mobile
//       el.style.opacity = 1;
//       return;
//     }

//     gsap.fromTo(
//       el,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top top-=300", // adjust this if needed
//           end: "bottom center",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="education"
//       ref={sectionRef}
//       className="relative md:opacity-0 flex justify-center items-center md:mb-0 bg-[#FFB91A] bg-cover bg-center py-20 px-6 md:px-20"
//     >
//       {/* Main Content */}
//       <div className="relative z-10 w-full max-w-9xl mx-auto">
//         {/* 🔘 Tabs & Resume */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 group">
//           {/* Resume Button */}
//           <a
//             href={resume}
//             download
//             className="bg-[#a95847] group-hover:scale-110 text-white px-6 py-3 rounded-full hover:bg-[#fde3a7] hover:text-black text-md md:text-lg lg:text-xl transition-all duration-300 font-medium shadow-lg hover:shadow-[#fde3a7]/30 tracking-[2px] font-abel"
//           >
//             Download Resume
//           </a>
//         </div>

//         {/* Timeline Content with push effect */}
//         <div ref={sectionRef} className="space-y-12 overflow-hidden">
//           <div
//             className="space-y-2 border-l-4 border-[#fde3a7] relative"
//             ref={(el) => {
//               if (!el) return;
//               const direction = educationData === 1 ? 1 : -1;

//               gsap.fromTo(
//                 el,
//                 {
//                   x: 100 * direction,
//                   opacity: 0,
//                 },
//                 {
//                   x: 0,
//                   opacity: 1,
//                   duration: 0.6,
//                   ease: "power2.out",
//                 }
//               );
//             }}
//           >
//             {educationData.map((item, i) => (
//               <div
//                 key={i}
//                 className="group flex flex-col lg:flex-row justify-between border-b border-[#fde3a7] py-8 gap-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fde3a7]/10 hover:shadow-md hover:shadow-[#a95847]/20 rounded-lg px-4"
//               >
//                 <div className="w-4 h-4 bg-[#a0ac96] rounded-full absolute -left-2 top-1.5 group-hover:scale-125 transition-transform duration-300" />

//                 <p className="text-black group-hover:text-[#a95847] text-base sm:text-lg lg:text-xl font-medium group-hover:scale-105 transition-all duration-300 font-abel tracking-[2px]">
//                   {item.year}
//                 </p>
//                 <div className="">
//                   <h3 className="text-black group-hover:text-black text-sm md:text-lg font-light group-hover:tracking-wide group-hover:opacity-90 transition-all duration-300 tracking-[2px] font-abel">
//                     {item.company}
//                   </h3>
//                   <p className="text-black text-lg md:text-xl lg:text-xl font-semibold mb-1 uppercase group-hover:text-[#a95847] group-hover:scale-105 transition-transform duration-300 font-abel tracking-[3px]">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EducationSection;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "/src/assets/cv24.pdf";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    year: "2009-2010",
    role: "Design Intern",
    company: "Al Hamad Constructions Bahrain",
    desc: "Part of the design team during construction of a multi-residential project, prepared detailed drawings for apartments like Villamar @ the harbor, BFH, Bahrain.",
  },
  {
    year: "2010-2013",
    role: "Design Architect",
    company: "Architecturered India",
    desc: "Coordinated & facilitated project execution of an institute & campus planning right from concept proposal, model studies, and GFC drawings with MEP subcontractors & structural consultants.",
  },
  {
    year: "2009-2014",
    role: "Bachelor of Architecture",
    company: "Anna University, India",
    desc: "Studied core architectural concepts, design thinking and sustainable design principles.",
  },
  {
    year: "2015-2020",
    role: "Project Architect",
    company: "15 Design And Interiors India",
    desc: " Coordinate & administer projects from inception to planning & contract closeout by clients & consultants",
  },
  {
    year: "2020-2023",
    role: "Facade Engineer",
    company: "Al Ansari Group / Fire Experts Bahrain - UAE",
    desc: "Site architect involving in-situ condition tweaks & facade solutions, customer service and problem solving.",
  },
  {
    year: "2023-2024",
    role: "Masters Graduate",
    company: "Elisava Design and Engineering, Spain",
    desc: "Specialized in Retail Design with focus on spatial strategy, customer experience and sustainable material study.",
  },
];

const EducationSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".timeline-item");

    if (window.innerWidth < 768) {
      items.forEach((item) => (item.style.opacity = 1));
      return;
    }

    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="education"
      className="relative w-full min-h-screen py-20 px-6 md:px-20 font-abel"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header + Resume */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
          <h2 className="text-4xl md:text-6xl font-bold tracking-widest">
            EDUCATION & EXPERIENCE
          </h2>
          <a
            href={resume}
            download
            className="bg-[#a95847] text-white px-6 py-3 rounded-full hover:bg-[#fde3a7] hover:text-black text-md md:text-lg lg:text-xl transition-all duration-300 font-medium shadow-lg hover:shadow-[#fde3a7]/30 tracking-[2px]"
          >
            Download Resume
          </a>
        </div>

        {/* Timeline */}
        <div ref={sectionRef} className="relative flex flex-col items-center">
          {/* Center Line */}
          <div className="absolute top-0 left-1/2 hidden md:flex w-1 h-full bg-[#a95847] transform -translate-x-1/2 z-0"></div>

          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`timeline-item w-full md:w-1/2 px-4 py-6 relative z-10 ${
                  isLeft ? "self-start md:pr-10" : "self-end md:pl-10"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute top-30 hidden md:flex w-5 h-5 bg-[#a95847] rounded-full z-20 ${
                    isLeft ? "right-[-11px]" : "left-[-11px]"
                  }`}
                ></div>

                {/* Content */}
                <div className="bg-[#fde3a7]/40 rounded-md shadow-md p-6 hover:shadow-lg transition duration-300">
                  <p className="text-sm mb-1 tracking-wider font-medium text-gray-700">
                    {item.year}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#111] uppercase tracking-wide mb-1">
                    {item.role}
                  </h3>
                  <p className="italic text-[#555] font-light text-md md:text-lg mb-2">
                    {item.company}
                  </p>
                  <p className="text-[#555] text-sm md:text-base leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
