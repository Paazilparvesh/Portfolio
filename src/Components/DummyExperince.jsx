// import React, { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import resume from "/src/assets/cv24.pdf";

// gsap.registerPlugin(ScrollTrigger);

// const educationData = [
//   {
//     title: "Experience",
//     items: [
//       {
//         year: "2023-2020",
//         role: "Facade Engineer",
//         company: "Al Ansari Group / Fire Experts Bahrain - UAE",
//         desc: "Site architect involving in-situ condition tweaks & facade solutions, customer service and problem solving.",
//       },
//       {
//         year: "2013-2010",
//         role: "Design Architect",
//         company: "Architecturered India",
//         desc: "Coordinated & facilitated project execution of an institute & campus planning right from concept proposal, model studies, and GFC drawings with MEP subcontractors & structural consultants.",
//       },
//       {
//         year: "2010-2009",
//         role: "Design Intern",
//         company: "Al Hamad Constructions Bahrain",
//         desc: "Part of the design team during construction of a multi-residential project, prepared detailed drawings for apartments like Villamar @ the harbor, BFH, Bahrain.",
//       },
//     ],
//   },
//   {
//     title: "Education",
//     items: [
//       {
//         year: "2023-2024",
//         role: "Masters Graduate",
//         company: "Elisava Design and Engineering, Spain",
//         desc: "Specialized in Retail Design with focus on spatial strategy, customer experience and sustainable material study.",
//       },
//       {
//         year: "2009-2014",
//         role: "Bachelor of Architecture",
//         company: "Anna University, India",
//         desc: "Studied core architectural concepts, design thinking and sustainable design principles.",
//       },
//     ],
//   },
// ];

// const EducationSection = () => {
//   const [groupIndex, setGroupIndex] = useState(0);
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const sectionRef = useRef(null);
//   const contentRef = useRef(null);

//   const activeGroup = educationData[groupIndex];
//   const selectedItem = activeGroup.items[selectedIndex];

//   useEffect(() => {
//     const el = sectionRef.current;
//     gsap.fromTo(
//       el,
//       { opacity: 0 },
//       {
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top center",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   useEffect(() => {
//     if (!contentRef.current) return;
//     gsap.fromTo(
//       contentRef.current,
//       { opacity: 0, x: 100 },
//       { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }
//     );
//   }, [selectedIndex, groupIndex]);

//   return (
//     <section
//       id="education"
//       ref={sectionRef}
//       className="w-full min-h-screen flex items-center bg-[#FFB91A] py-16 px-4 sm:px-6 lg:px-20"
//     >
//       <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-12 items-start">
//         {/* LEFT: Content */}
//         <div ref={contentRef} className="w-full md:w-2/3 space-y-4">
//           <p className="text-sm text-gray-700">{selectedItem.year}</p>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#a95847] uppercase">
//             {selectedItem.role}
//           </h2>
//           <h4 className="text-md sm:text-lg font-medium text-black">
//             {selectedItem.company}
//           </h4>
//           <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
//             {selectedItem.desc}
//           </p>
//           <div className="mt-6">
//             <a
//               href={resume}
//               download
//               className="bg-[#a95847] text-white px-6 py-2 rounded hover:bg-white hover:text-black transition font-medium shadow-lg hover:shadow-[#fde3a7]/30"
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>

//         {/* RIGHT: Tabs */}
//         <div className="w-full md:w-1/3 bg-[#f3f0ff] rounded-xl p-4 sm:p-6 space-y-4 shadow-lg">
//           {/* Toggle Buttons */}
//           <div className="flex flex-wrap gap-3 mb-4">
//             {educationData.map((group, i) => (
//               <button
//                 key={i}
//                 onClick={() => {
//                   setGroupIndex(i);
//                   setSelectedIndex(0);
//                 }}
//                 className={`px-4 py-2 rounded-full font-medium ${
//                   i === groupIndex
//                     ? "bg-[#a95847] text-white"
//                     : "bg-white text-black hover:bg-gray-100"
//                 }`}
//               >
//                 {group.title}
//               </button>
//             ))}
//           </div>

//           {/* Tab List */}
//           {activeGroup.items.map((item, i) => (
//             <div
//               key={i}
//               onClick={() => setSelectedIndex(i)}
//               className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
//                 selectedIndex === i
//                   ? "bg-white text-black border border-[#a95847] shadow"
//                   : "text-gray-600 hover:bg-white hover:text-black"
//               }`}
//             >
//               <h4 className="font-semibold">{item.role}</h4>
//               <p className="text-sm">{item.year}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EducationSection;






import React, { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "/src/assets/cv24.pdf";
import ToggleSwitch from "./ToggleSwitch"; // assuming it's in the same folder

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "Experience",
    items: [
      {
        year: "2023-2020",
        role: "Facade Engineer",
        company: "Al Ansari Group / Fire Experts Bahrain - UAE",
        desc: "Site architect involving in-situ condition tweaks & facade solutions, customer service and problem solving.",
      },
      {
        year: "2013-2010",
        role: "Design Architect",
        company: "Architecturered India",
        desc: "Coordinated & facilitated project execution of an institute & campus planning right from concept proposal, model studies, and GFC drawings with MEP subcontractors & structural consultants.",
      },
      {
        year: "2010-2009",
        role: "Design Intern",
        company: "Al Hamad Constructions Bahrain",
        desc: "Part of the design team during construction of a multi-residential project, prepared detailed drawings for apartments like Villamar @ the harbor, BFH, Bahrain.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        year: "2023-2024",
        role: "Masters Graduate",
        company: "Elisava Design and Engineering, Spain",
        desc: "Specialized in Retail Design with focus on spatial strategy, customer experience and sustainable material study.",
      },
      {
        year: "2009-2014",
        role: "Bachelor of Architecture",
        company: "Anna University, India",
        desc: "Studied core architectural concepts, design thinking and sustainable design principles.",
      },
    ],
  },
];

const EducationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = educationData[activeIndex];

  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    if (window.innerWidth < 768) {
      // Directly show without animation on mobile
      el.style.opacity = 1;
      return;
    }

    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top top-=300", // adjust this if needed
          end: "bottom center",
          toggleActions: "play none none reverse",
          // Optionally, limit to exact 300vh using:
          // start: () => ${window.innerHeight * 3}px top,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative md:opacity-0 flex justify-center items-center md:mb-0 bg-[#FFB91A] bg-cover bg-center py-20 px-6 md:px-20"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 🔘 Tabs & Resume */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 group">
          {/* Tabs */}
          <ToggleSwitch
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />

          {/* Resume Button */}
          <a
            href={resume}
            download
            className="bg-[#a95847] group-hover:scale-110 text-white px-6 py-3 rounded-full hover:bg-[#fde3a7] hover:text-black text-md md:text-lg lg:text-xl transition-all duration-300 font-medium shadow-lg hover:shadow-[#fde3a7]/30 tracking-[2px] font-abel"
          >
            Download Resume
          </a>
        </div>

        {/* Timeline Content with push effect */}
        <div
          key={activeIndex}
          ref={sectionRef}
          className="border-t border-[#fde3a7] space-y-12 overflow-hidden"
        >
          <div
            className="space-y-2"
            ref={(el) => {
              if (!el) return;
              const direction = activeIndex === 1 ? 1 : -1;

              gsap.fromTo(
                el,
                {
                  x: 100 * direction,
                  opacity: 0,
                },
                {
                  x: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: "power2.out",
                }
              );
            }}
          >
            {activeSlide.items.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col lg:flex-row justify-between border-b border-[#fde3a7] py-8 gap-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#fde3a7]/10 hover:shadow-md hover:shadow-[#a95847]/20 rounded-lg px-4"
              >
                {/* Year */}
                <div className="w-full lg:w-1/5">
                  <p className="text-black group-hover:text-[#a95847] text-base sm:text-lg lg:text-xl font-medium group-hover:scale-105 transition-all duration-300 font-abel tracking-[2px]">
                    {item.year}
                  </p>
                </div>

                {/* Role & Company */}
                <div className="w-full lg:w-2/5">
                  <h3 className="text-black text-lg md:text-xl lg:text-xl font-semibold mb-1 uppercase group-hover:text-[#a95847] group-hover:scale-105 transition-transform duration-300 font-abel tracking-[3px]">
                    {item.role}
                  </h3>
                  <p className="text-black group-hover:text-black text-sm md:text-lg font-light group-hover:tracking-wide group-hover:opacity-90 transition-all duration-300 tracking-[2px] font-abel">
                    {item.company}
                  </p>
                </div>

                {/* Description */}
                <div className="w-full lg:w-2/5">
                  <p className="text-black group-hover:text-[#a95847] font-nunito text-sm sm:text-md lg:text-xl leading-relaxed text-justify tracking-[1px] font-abel ">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
