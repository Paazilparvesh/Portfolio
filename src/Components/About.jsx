// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import profile from "/src/assets/safwan_pic_1.png";

// gsap.registerPlugin(ScrollTrigger);

// const skills = [
//   {
//     title: "REVIT / SKETCHUP / AUTOCAD",
//     percent: 80,
//   },
//   {
//     title: "Canva / Photoshop / Indesign",
//     percent: 70,
//   },
//   {
//     title: "Space Planning / Retail Merchandising / Team Collaboration",
//     percent: 76,
//   },
// ];

// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const barsRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Skill Bar Animation
//       barsRef.current.forEach((bar, i) => {
//         gsap.fromTo(
//           bar,
//           { value: 1 },
//           {
//             value: skills[i].percent,
//             duration: 2,
//             delay: 1 + i * 0.3,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: sectionRef.current,
//               start: "top 80%",
//             },
//           }
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full md:h-screen bg-[#a95847] flex flex-col md:flex-row items-start justify-between gap-5 pt-5  md:pt-4 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
//     >
//       {/* 📸 Image */}
//       <div className="w-full md:w-1/2 lg:mt-10 flex justify-center items-center overflow-hidden">
//         <img
//           src={profile}
//           alt=""
//           className="size-full -mb-24 md:mb-0 xl:-mb-80 2xl:-mb-[500px] object-cover"
//         />
//       </div>

//       {/* 📄 Text */}
//       <div className="w-full md:w-1/2">
//         <h2 className="text-4xl mt-5 md:mt-0 lg:mt-10  sm:text-5xl md:text-5xl font-extrabold text-[#fde3a7] mb-4 2xl:mb-8 uppercase tracking-wide font-helvetica leading-tight">
//           About Me
//         </h2>

//         <div className=" text-white text-lg sm:text-md md:text-lg lg:text-lg 2xl:text-2xl leading-relaxed md:leading-7 2xl:leading-10 mb-5 2xl:mb-10 font-medium font-abel space-y-5 text-justify max-w-3xl">
//           <p>
//             Hello, I'm Mohamed Safwan, a recent masters graduate in Retail
//             Design at Elisava school of design and engineering, a spatial
//             designer and sometimes an amateur shutterbug. My passion lies in
//             creating designs that resonate with people and enhance convenience,
//             reflecting my deep interest in human and societal needs. I am
//             particularly drawn to branding, marketing, and problem-solving,
//             aspiring to develop ideas and solutions that positively impact lives
//             and brands.
//           </p>
//           {/* <p>
//           When I’m not designing spaces, I find creative flow in graphics, branding, and music. These disciplines feed into my architectural thinking—each with its rhythm, structure, and emotion.
//           My travels have shaped my visual sensibility, curating a narrative that continues on platforms like Instagram. And my daily ritual—coffee—has become more than just caffeine. It's a quiet catalyst for conversation, often sparking unexpected collaborations, design dialogues, or simply inviting a moment of stillness in an otherwise kinetic world. Please enjoy my portfolio and discover the fun and functionality woven into my work.
//           </p> */}
//         </div>

//         {/* 🧠 Skills */}
//         <div className="space-y-8 mb-10 max-w-3xl">
//           {skills.map(({ title, percent }, i) => (
//             <div key={i}>
//               <div className="flex justify-between items-center mb-2 2xl:mb-4">
//                 <h3 className="text-[#fde3a7] text-sm md:text-base lg:text-md 2xl:text-xl font-semibold uppercase tracking-wide font-helvetica">
//                   {title}
//                 </h3>
//                 <p className="text-[#fde3a7] text-sm sm:text-base font-semibold">
//                   {percent}%
//                 </p>
//               </div>
//               <progress
//                 ref={(el) => (barsRef.current[i] = el)}
//                 max="100"
//                 className="w-full h-[8px] sm:h-[10px] rounded overflow-hidden bg-[#fde3a7]
//                   [&::-webkit-progress-value]:bg-[#fde3a7]
//                   [&::-moz-progress-bar]:bg-[#a95847] transition-all duration-1000 ease-in-out"
//               ></progress>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import profile from "/src/assets/safwan_pic_1.png";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "REVIT / SKETCHUP / AUTOCAD",
    percent: 80,
  },
  {
    title: "Canva / Photoshop / Indesign",
    percent: 70,
  },
  {
    title: "Space Planning / Retail Merchandising / Team Collaboration",
    percent: 76,
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skill Bar Animation
      barsRef.current.forEach((bar, i) => {
        gsap.fromTo(
          bar,
          { value: 1 },
          {
            value: skills[i].percent,
            duration: 2,
            delay: 0.5 + i * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full md:h-screen bg-[#4d160a] flex flex-col items-center justify-start gap-5 pt-5 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
    >
      <h2 className="text-4xl mt-5 md:mt-0 lg:mt-10 sm:text-5xl md:text-5xl font-extrabold text-center text-[#fde3a7] mb-4 uppercase tracking-wide font-helvetica leading-tight">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row gap-20  md:px-10">
        {/* 📄 Text */}
        <div className="w-full md:w-1/2">
          <div className=" text-white text-lg sm:text-md md:text-lg lg:text-lg 2xl:text-2xl leading-relaxed md:leading-7 2xl:leading-10 mb-5 2xl:mb-10 font-medium font-abel space-y-5 text-justify max-w-3xl">
            <p>
              Hello, I'm Mohamed Safwan, a recent masters graduate in Retail
              Design at Elisava school of design and engineering, a spatial
              designer and sometimes an amateur shutterbug. My passion lies in
              creating designs that resonate with people and enhance
              convenience, reflecting my deep interest in human and societal
              needs. I am particularly drawn to branding, marketing, and
              problem-solving, aspiring to develop ideas and solutions that
              positively impact lives and brands.
            </p>
            {/* <p>
          When I’m not designing spaces, I find creative flow in graphics, branding, and music. These disciplines feed into my architectural thinking—each with its rhythm, structure, and emotion.
          My travels have shaped my visual sensibility, curating a narrative that continues on platforms like Instagram. And my daily ritual—coffee—has become more than just caffeine. It's a quiet catalyst for conversation, often sparking unexpected collaborations, design dialogues, or simply inviting a moment of stillness in an otherwise kinetic world. Please enjoy my portfolio and discover the fun and functionality woven into my work.
          </p> */}
          </div>
        </div>

        {/* 🧠 Skills */}
        <div className="space-y-8 -mt-12 md:mt-0 mb-10 max-w-3xl">
          {skills.map(({ title, percent }, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-2 2xl:mb-4">
                <h3 className="text-[#fde3a7] text-sm md:text-base lg:text-md 2xl:text-xl font-semibold uppercase tracking-wide font-helvetica">
                  {title}
                </h3>
                <p className="text-[#fde3a7] text-sm sm:text-base font-semibold">
                  {percent}%
                </p>
              </div>
              <progress
                ref={(el) => (barsRef.current[i] = el)}
                max="100"
                className="w-full h-[8px] sm:h-[10px] rounded overflow-hidden   
                  [&::-webkit-progress-value]:bg-[#fde3a7]
                  [&::-moz-progress-bar]:bg-[#a95847] transition-all duration-1000 ease-in-out"
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
