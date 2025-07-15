// import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
// import ProjectList from "../Data/ProjectList";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

// gsap.registerPlugin(ScrollTrigger);

// function InnerProject() {
//   const { id } = useParams();
//   const project = ProjectList.find((proj) => proj.id === Number(id));

//   const bannerRef = useRef(null);
//   const titleRef = useRef(null);
//   const scrollSectionRef = useRef(null);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     if (!bannerRef.current || !titleRef.current) return;

//     const image = bannerRef.current.querySelector("img");

//     gsap.fromTo(
//       image,
//       { scale: 1.2, y: 0 },
//       {
//         scale: 1,
//         y: -50,
//         ease: "none",
//         scrollTrigger: {
//           trigger: bannerRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       }
//     );

//     const scrollContainer = scrollContainerRef.current;
//     const scrollSection = scrollSectionRef.current;

//     gsap.to(scrollContainer, {
//       x: () => -(scrollContainer.scrollWidth - window.innerWidth),
//       ease: "none",
//       scrollTrigger: {
//         trigger: scrollSection,
//         start: "top top",
//         end: () => `+=${scrollContainer.scrollWidth}`,
//         pin: true,
//         scrub: true,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((t) => t.kill());
//   }, []);

//   if (!project) {
//     return (
//       <div className="bg-black text-white h-screen flex justify-center items-center">
//         <h1 className="text-2xl text-gray-300">Loading...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#FFB91A] text-[#1a1a1a] px-10 overflow-x-hidden">
//       {/* 🔶 Banner */}
//       {/* <div
//         ref={bannerRef}
//         className="relative h-[80vh] mt-26 w-full rounded-2xl overflow-hidden bg-black"
//       >
//         <img
//           src={project.banner || project.images?.[0]}
//           alt="project-banner"
//           className="w-full h-full object-fit will-change-transform"
//         />

//         {/* Scrolling Title
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//           <div
//             ref={titleRef}
//             className="w-max flex animate-marquee"
//             style={{ whiteSpace: "nowrap" }}
//           >
//             {[...Array(2)].map((_, i) => (
//               <span
//                 key={i}
//                 style={{ color: project.textColor }}
//                 className="text-[12vw] md:text-[4vw] font-extrabold font-abel uppercase tracking-wider mx-8"
//               >
//                 {`${project.title} • `.repeat(8)}
//               </span>
//             ))}
//           </div>
//         </div>

//         <style>{`
//           @keyframes marquee {
//             0% { transform: translateX(0%); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-marquee {
//             animation: marquee 20s linear infinite;
//             display: flex;
//           }

//           body {
//             overflow-x: hidden;
//           }
//         `}</style>
//       </div> */}

//       <div
//         ref={bannerRef}
//         className="relative h-[80vh] mt-26 w-full rounded-2xl overflow-hidden bg-black"
//       >
//         {project.video ? (
//           <video
//             src={project.video}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-fit"
//           />
//         ) : (
//           <img
//             src={project.banner || project.images?.[0]}
//             alt="project-banner"
//             className="w-full h-full object-contain"
//           />
//         )}

//         {/* Scrolling Title */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//           <div
//             ref={titleRef}
//             className="w-max flex animate-marquee"
//             style={{ whiteSpace: "nowrap" }}
//           >
//             {[...Array(2)].map((_, i) => (
//               <span
//                 key={i}
//                 style={{ color: project.textColor }}
//                 className="text-[12vw] md:text-[4vw] font-extrabold font-abel uppercase tracking-wider mx-8"
//               >
//                 {`${project.title} • `.repeat(8)}
//               </span>
//             ))}
//           </div>
//         </div>

//         <style>{`
//     @keyframes marquee {
//       0% { transform: translateX(0%); }
//       100% { transform: translateX(-50%); }
//     }
//     .animate-marquee {
//       animation: marquee 20s linear infinite;
//       display: flex;
//     }

//     body {
//       overflow-x: hidden;
//     }
//   `}</style>
//       </div>

//       {/* higlights & impact content here */}
//       <div className="mt-20 max-w-6xl mx-auto text-left space-y-12">
//         {/* Description */}
//         {project.fulldesc && (
//           <div>
//             <h2 className="text-2xl font-bold font-abel mb-4">Description</h2>
//             <p className="text-lg font-abel leading-relaxed">
//               {project.fulldesc}
//             </p>
//           </div>
//         )}
//         {/* Highlights */}
//         {project.highlights?.length > 0 && (
//           <div>
//             <h2 className="text-2xl font-bold font-abel mb-4">Highlights</h2>
//             <ul className="list-disc pl-6 space-y-2 text-lg font-abel">
//               {project.highlights.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Impact */}
//         {project.impact?.length > 0 && (
//           <div>
//             <h2 className="text-2xl font-bold font-abel mb-4">Impact</h2>
//             <ul className="list-disc pl-6 space-y-2 text-lg font-abel">
//               {project.impact.map((point, index) => (
//                 <li key={index}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* 🔄 Horizontal Scroll Section */}
//       <section
//         ref={scrollSectionRef}
//         className="w-full  h-screen relative overflow-hidden"
//       >
//         <div className="fixed top-0 left-0 w-88 h-screen bg-[#FFB91A] overflow-hidden flex flex-col justify-center items-start px-5 z-50 ">
//           <h1 className="text-black text-wrap text-[12vw] md:text-[2vw] font-semibold font-abel uppercase tracking-wider mt-34- overflow-hidden">
//             {project.title}
//           </h1>
//           <p className="text-xs">Copyright © All rights reserved.</p>
//           {/* <div className="flex-1 flex flex-col items-start mt-10">
//             {/* Email
//             <a
//               href="mailto:safwanmanas@gmail.com"
//               className="flex items-center mb-3 gap-2 text-lg md:text-md hover:underline hover:scale-110 transition-all duration-300 font-abel tracking-widest"
//             >
//               <FaEnvelope className="w-5 h-5" />
//               safwanmanas@gmail.com
//             </a>

//             {/* Phone Numbers
//             <div className="flex flex-col items-start text-lg md:text-xl space-y-2 ">
//               <a
//                 href="tel:+97336070242"
//                 className="hover:text-yellow-400 hover:scale-110 transition-all duration-300"
//               >
//                 +973 360 702 42
//               </a>
//               <a
//                 href="tel:+919840952854"
//                 className="hover:text-yellow-400 hover:scale-110 transition-all duration-300"
//               >
//                 +91 984 095 28 54
//               </a>
//             </div>

//             {/* Social Icons
//             <div className="flex justify-start gap-2 text-2xl mt-6">
//               <a
//                 href="https://www.instagram.com/safwanmanas/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-pink-500 hover:scale-150 transition-all duration-300"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/safwanmanas/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="hover:text-blue-400 hover:scale-150 transition-all duration-300"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div> */}
//           <div>
//             <h2 className="text-2xl font-bold font-abel mt-3 mb-2">
//               Description
//             </h2>
//             <p className="text-sm font-abel leading-relaxed">
//               {project.fulldesc}
//             </p>
//           </div>
//         </div>

//         <div
//           ref={scrollContainerRef}
//           className="flex gap-8 px-20 mt-10 py-20 overflow-hidden"
//           style={{ width: "max-content" }}
//         >
//           {project.images?.map((img, idx) => (
//             <img
//               key={idx}
//               src={img}
//               alt={`project-${project.id}-img-${idx}`}
//               className="h-[80vh] rounded-xl shadow-2xl object-cover transition-transform duration-300"
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default InnerProject;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../Data/ProjectList";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function InnerProject() {
  const { id } = useParams();
  const project = ProjectList.find((proj) => proj.id === Number(id));

  useEffect(() => {
    const banner = document.querySelector(".project-banner");
    const bannerMedia = banner?.querySelector("img, video");

    if (bannerMedia) {
      gsap.fromTo(
        bannerMedia,
        { scale: 1.2, y: 0 },
        {
          scale: 1,
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: banner,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    const container = document.querySelector(".horizontal-scroll-inner");
    const section = document.querySelector(".horizontal-scroll-section");

    if (container && section) {
      gsap.to(container, {
        x: () => -container.scrollWidth - window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${container.scrollWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (!project) {
    return (
      <div className="bg-black text-white h-screen flex justify-center items-center">
        <h1 className="text-2xl text-gray-300">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#FFB91A] text-[#1a1a1a] px-10 overflow-x-hidden">
      {/* 🔶 Banner */}
      <div className="project-banner relative h-[80vh] mt-26 w-full rounded-2xl overflow-hidden bg-black">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-fit"
          />
        ) : (
          <img
            src={project.banner || project.images?.[0]}
            alt="project-banner"
            className="w-full h-full object-fit"
          />
        )}

        {/* Scrolling Title */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div
            className="w-max flex animate-marquee"
            style={{ whiteSpace: "nowrap" }}
          >
            {[...Array(2)].map((_, i) => (
              <span
                key={i}
                style={{ color: project.textColor }}
                className="text-[12vw] md:text-[4vw] font-extrabold font-abel uppercase tracking-wider mx-8"
              >
                {`${project.title} • `.repeat(8)}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
            display: flex;
          }
          body {
            overflow-x: hidden;
          }
        `}</style>
      </div>

      {/* Highlights & Impact */}
      <div className="mt-20 max-w-6xl mx-auto text-left space-y-12">
        {project.fulldesc && (
          <div>
            <h2 className="text-2xl font-bold font-abel mb-4">Description</h2>
            <p className="text-lg font-abel leading-relaxed">
              {project.fulldesc}
            </p>
          </div>
        )}

        {project.highlights?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold font-abel mb-4">Highlights</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg font-abel">
              {project.highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {project.impact?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold font-abel mb-4">Impact</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg font-abel">
              {project.impact.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 🔄 Horizontal Scroll Section */}
      <section className="horizontal-scroll-section w-full h-screen relative overflow-hidden">
        <div className="fixed top-0 left-0 w-88 h-screen bg-[#FFB91A] overflow-hidden flex flex-col justify-center items-start px-5 z-50">
          <h1 className="text-black text-wrap text-[12vw] md:text-[2vw] font-semibold font-abel uppercase tracking-wider mt-34- overflow-hidden">
            {project.title}
          </h1>
          <p className="text-xs">Copyright © All rights reserved.</p>

          <div>
            <h2 className="text-2xl font-bold font-abel mt-3 mb-2">
              Description
            </h2>
            <p className="text-sm font-abel leading-relaxed">
              {project.fulldesc}
            </p>
          </div>
        </div>

        <div className="horizontal-scroll-inner flex gap-8 px-20 mt-10 py-20 overflow-hidden w-max">
          {project.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`project-${project.id}-img-${idx}`}
              className="h-[80vh] rounded-xl shadow-2xl object-cover transition-transform duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default InnerProject;
