// import React from "react";
// import { useParams } from "react-router-dom";
// import ProjectList from "../Data/ProjectList";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// function InnerProject() {
//   const { id } = useParams();
//   const project = ProjectList.find((proj) => proj.id === Number(id));

//   if (!project) {
//     return (
//       <div className="bg-black text-white h-screen flex justify-center items-center">
//         <h1 className="text-2xl text-gray-300">Loading...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#fef7e5] text-[#1a1a1a] min-h-screen px-6 py-10 md:px-16 lg:px-32 font-sans overflow-x-hidden">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-6xl font-bold text-yellow-600 text-center mb-4"
//       >
//         {project.title}
//       </motion.h1>

//       {/* Sub Info */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         className="text-md md:text-xl text-yellow-800 text-center mb-10"
//       >
//         {project.location ? `${project.location} | ` : ""}
//         {project.year && <>{project.year}</>}
//       </motion.p>

//       {/* Image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="flex justify-center mb-10"
//       >
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full max-w-3xl rounded-xl shadow-md"
//         />
//       </motion.div>

//       {/* Full Description */}
//       {project.fullDescription && (
//         <motion.section
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.7, duration: 0.7 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Project Overview
//           </h2>
//           <p className="text-lg leading-relaxed whitespace-pre-line">
//             {project.fullDescription}
//           </p>
//         </motion.section>
//       )}

//       {/* Stats */}
//       {project.stats && (
//         <motion.section
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.9, duration: 0.7 }}
//           className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
//         >
//           {project.stats.map((stat, index) => (
//             <div key={index} className="bg-yellow-100 p-6 rounded-lg shadow">
//               <h3 className="text-xl font-bold text-yellow-700">
//                 {stat.label}
//               </h3>
//               <p className="text-3xl font-bold text-yellow-600">
//                 {stat.unit === "%" || stat.unit === "+"
//                   ? <CountUp end={stat.value} duration={2} /> + stat.unit
//                   : `${stat.unit}${stat.value}`}
//               </p>
//               {stat.note && <p className="text-sm mt-2">{stat.note}</p>}
//             </div>
//           ))}
//         </motion.section>
//       )}

//       {/* Highlights */}
//       {project.highlights && (
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.6 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Highlights
//           </h2>
//           <ul className="list-disc pl-6 text-lg space-y-2">
//             {project.highlights.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </motion.section>
//       )}

//       {/* Impact */}
//       {project.impact && (
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.1, duration: 0.6 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Project Impact
//           </h2>
//           <ul className="list-disc pl-6 text-lg space-y-2">
//             {project.impact.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </motion.section>
//       )}

//       {/* Recognition */}
//       {project.recognition && (
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Recognition
//           </h2>
//           <ul className="list-disc pl-6 text-lg space-y-2">
//             {project.recognition.map((award, idx) => (
//               <li key={idx}>{award}</li>
//             ))}
//           </ul>
//         </motion.section>
//       )}
//     </div>
//   );
// }

// export default InnerProject;



import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../Data/ProjectList";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function InnerProject() {
  const { id } = useParams();
  const project = ProjectList.find((proj) => proj.id === Number(id));

  const bannerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current || !titleRef.current) return;

    const image = bannerRef.current.querySelector("img");
    const title = titleRef.current;

    // Parallax effect for background image
    gsap.fromTo(
      image,
      { scale: 1.2, y: 0 },
      {
        scale: 1,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Fade/scale for the title (optional, subtle)
    gsap.fromTo(
      title,
      { opacity: 1, scale: 1 },
      {
        opacity: 0.5,
        scale: 0.9,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  if (!project) {
    return (
      <div className="bg-black text-white h-screen flex justify-center items-center">
        <h1 className="text-2xl text-gray-300">Loading...</h1>
      </div>
    );
  }

  const contentBlocks = Object.entries(project)
    .filter(
      ([key, value]) =>
        value && typeof value === "object" && value.topic && value.content
    )
    .map(([_, value]) => value);

  return (
    <div className="bg-[#FFB91A] text-[#1a1a1a] min-h-screen w-full px-10 overflow-x-hidden">
      {/* 🔶 Banner */}
      <div
        ref={bannerRef}
        className="relative h-[80vh] mt-26 w-full rounded-2xl overflow-hidden bg-black"
      >
        <img
          src={project.banner || project.images?.[0]}
          alt="project-banner"
          className="w-full h-full object-fit scale-110 will-change-transform"
        />

        {/* Scrolling Title */}
        <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
            <span className="text-black text-[12vw] md:text-[4vw] font-extrabold font-abel uppercase tracking-wider mx-8">
              {project.title} • {project.title} • {project.title} •{" "}
              {project.title} • {project.title} • {project.title} •{" "}
              {project.title} • {project.title}
            </span>
            {/* Duplicate once for seamless loop */}
            <span className="text-white text-[12vw] md:text-[4vw] font-extrabold font-abel uppercase tracking-wider mx-8">
              {project.title} • {project.title} • {project.title} •{" "}
              {project.title} • {project.title} • {project.title} •{" "}
              {project.title} • {project.title}
            </span>
          </div>

          {/* Inline style fallback (if Tailwind config isn't extended) */}
          <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    .animate-marquee {
      animation: marquee 20s linear infinite;
      display: flex;
    }
  `}</style>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-20 md:px-16 lg:px-32 space-y-16">
        {/* Project Location & Year */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-md md:text-xl text-yellow-800 font-abel tracking-wider text-center"
        >
          {project.location ? `${project.location} | ` : ""}
          {project.year && <>{project.year}</>}
        </motion.p>

        {/* Alternating Content Sections */}
        {project.images?.map((img, idx) => {
          const content = contentBlocks[idx];
          const isEven = idx % 2 === 0;

          if (content) {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10`}
              >
                <img
                  src={img}
                  alt={`project-${project.id}-img-${idx}`}
                  className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <div className="w-full md:w-1/2 text-lg space-y-3">
                  <h2 className="text-2xl 2xl:text-4xl font-abel tracking-wider font-semibold text-[#a95847] mb-6">
                    {content.topic}
                  </h2>
                  <p className="leading-relaxed 2xl:text-xl font-abel tracking-wide whitespace-pre-line">
                    {content.content}
                  </p>
                </div>
              </motion.div>
            );
          }

          const nextImage = project.images[idx + 1];
          if (nextImage) {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                className="flex flex-col md:flex-row gap-6"
              >
                <img
                  src={img}
                  alt={`project-${project.id}-img-${idx}`}
                  className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={nextImage}
                  alt={`project-${project.id}-img-${idx + 1}`}
                  className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            );
          }

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
            >
              <img
                src={img}
                alt={`project-${project.id}-img-${idx}`}
                className="w-full rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default InnerProject;




// import React from "react";
// import { useParams } from "react-router-dom";
// import ProjectList from "../Data/ProjectList";
// import { motion } from "framer-motion";

// function InnerProject() {
//   const { id } = useParams();
//   const project = ProjectList.find((proj) => proj.id === Number(id));

//   if (!project) {
//     return (
//       <div className="bg-black text-white h-screen flex justify-center items-center">
//         <h1 className="text-2xl text-gray-300">Loading...</h1>
//       </div>
//     );
//   }

//   // ✅ Only get content blocks with topic & content (excluding "Project Overview")
//   const contentBlocks = Object.entries(project)
//     .filter(
//       ([key, value]) =>
//         value &&
//         typeof value === "object" &&
//         value.topic &&
//         value.content
//     )
//     .map(([_, value]) => value);

//   return (
//     <div className="bg-[#FFB91A] text-[#1a1a1a] min-h-screen px-6 py-10 md:px-16 lg:px-32 pt-40 overflow-x-hidden space-y-16">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-6xl font-bold font-abel tracking-wider text-white text-center mb-2"
//       >
//         {project.title}
//       </motion.h1>

//       {/* Sub Info */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         className="text-md md:text-xl text-yellow-800 font-abel tracking-wider text-center"
//       >
//         {project.location ? `${project.location} | ` : ""}
//         {project.year && <>{project.year}</>}
//       </motion.p>

//       {/* Alternating Image + Description Blocks */}
//       {project.images?.map((img, idx) => {
//   const content = contentBlocks[idx];
//   const isEven = idx % 2 === 0;

//   // If there's content, show image + text
//   if (content) {
//     return (
//       <motion.div
//         key={idx}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 * idx, duration: 0.6 }}
//         className={`flex flex-col ${
//           isEven ? "md:flex-row" : "md:flex-row-reverse"
//         } items-center gap-10`}
//       >
//         <img
//           src={img}
//           alt={`project-${project.id}-img-${idx}`}
//           className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
//         />
//         <div className="w-full md:w-1/2 text-lg space-y-3">
//           <h2 className="text-2xl 2xl:text-4xl font-abel tracking-wider font-semibold text-[#a95847] mb-6">
//             {content.topic}
//           </h2>
//           <p className="leading-relaxed 2xl:text-xl font-abel tracking-wide whitespace-pre-line">
//             {content.content}
//           </p>
//         </div>
//       </motion.div>
//     );
//   }

//   // If there's NO content, show this image + next image side-by-side
//   const nextImage = project.images[idx + 1];
//   if (nextImage) {
//     return (
//       <motion.div
//         key={idx}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.1 * idx, duration: 0.6 }}
//         className="flex flex-col md:flex-row gap-6"
//       >
//         <img
//           src={img}
//           alt={`project-${project.id}-img-${idx}`}
//           className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
//         />
//         <img
//           src={nextImage}
//           alt={`project-${project.id}-img-${idx + 1}`}
//           className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
//         />
//       </motion.div>
//     );
//   }

//   // If it's the last image and no content or pair, show single image full width
//   return (
//     <motion.div
//       key={idx}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.1 * idx, duration: 0.6 }}
//     >
//       <img
//         src={img}
//         alt={`project-${project.id}-img-${idx}`}
//         className="w-full rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
//       />
//     </motion.div>
//   );
// })}

//     </div>
//   );
// }

// export default InnerProject;






import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../Data/ProjectList";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function InnerProject() {
  const { id } = useParams();
  const project = ProjectList.find((proj) => proj.id === Number(id));

  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const scrollSectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   if (!bannerRef.current || !titleRef.current) return;

  //   const image = bannerRef.current.querySelector("img");

  //   gsap.fromTo(
  //     image,
  //     { scale: 1.2, y: 0 },
  //     {
  //       scale: 1,
  //       y: -50,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: bannerRef.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   const scrollContainer = scrollContainerRef.current;
  //   const scrollSection = scrollSectionRef.current;

  //   gsap.to(scrollContainer, {
  //     x: () => -(scrollContainer.scrollWidth - window.innerWidth),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: scrollSection,
  //       start: "top top",
  //       end: () => `+=${scrollContainer.scrollWidth}`,
  //       pin: true,
  //       scrub: true,
  //       anticipatePin: 1,
  //       invalidateOnRefresh: true,
  //     },
  //   });

  //   return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  // }, []);
  useEffect(() => {
    if (
      !bannerRef.current ||
      !titleRef.current ||
      !scrollContainerRef.current ||
      !scrollSectionRef.current
    )
      return;

    const image = bannerRef.current.querySelector("img");

    gsap.fromTo(
      image,
      { scale: 1.2, y: 0 },
      {
        scale: 1,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    gsap.to(scrollContainerRef.current, {
      x: () => -(scrollContainerRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: "top top",
        end: () => `+=${scrollContainerRef.current.scrollWidth}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [project]);

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
      {/* <div
        ref={bannerRef}
        className="relative h-[80vh] mt-26 w-full rounded-2xl overflow-hidden bg-black"
      >
        <img
          src={project.banner || project.images?.[0]}
          alt="project-banner"
          className="w-full h-full object-fit will-change-transform"
        />

        {/* Scrolling Title
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div
            ref={titleRef}
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
      </div> */}

      <div
        ref={bannerRef}
        className="relative h-[80vh] mt-26 w-full rounded-2xl overflow-hidden bg-black"
      >
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
            className="w-full h-full object-contain"
          />
        )}

        {/* Scrolling Title */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div
            ref={titleRef}
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

      {/* higlights & impact content here */}
      <div className="mt-20 max-w-6xl mx-auto text-left space-y-12">
        {/* Description */}
        {project.fulldesc && (
          <div>
            <h2 className="text-2xl font-bold font-abel mb-4">Description</h2>
            <p className="text-lg font-abel leading-relaxed">
              {project.fulldesc}
            </p>
          </div>
        )}
        {/* Highlights */}
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

        {/* Impact */}
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
      {/* <section
        ref={scrollSectionRef}
        className="w-full  h-screen relative overflow-hidden"
      >
        <div className="fixed top-0 left-0 w-88 h-screen bg-[#FFB91A] overflow-hidden flex flex-col justify-center items-start px-5 z-50 ">
          <h1 className="text-black text-wrap text-[12vw] md:text-[2vw] font-semibold font-abel uppercase tracking-wider mt-34- overflow-hidden">
            {project.title}
          </h1>
          <p className="text-xs">Copyright © All rights reserved.</p>
          {/* <div className="flex-1 flex flex-col items-start mt-10">
            {/* Email
            <a
              href="mailto:safwanmanas@gmail.com"
              className="flex items-center mb-3 gap-2 text-lg md:text-md hover:underline hover:scale-110 transition-all duration-300 font-abel tracking-widest"
            >
              <FaEnvelope className="w-5 h-5" />
              safwanmanas@gmail.com
            </a>

            {/* Phone Numbers
            <div className="flex flex-col items-start text-lg md:text-xl space-y-2 ">
              <a
                href="tel:+97336070242"
                className="hover:text-yellow-400 hover:scale-110 transition-all duration-300"
              >
                +973 360 702 42
              </a>
              <a
                href="tel:+919840952854"
                className="hover:text-yellow-400 hover:scale-110 transition-all duration-300"
              >
                +91 984 095 28 54
              </a>
            </div>

            {/* Social Icons
            <div className="flex justify-start gap-2 text-2xl mt-6">
              <a
                href="https://www.instagram.com/safwanmanas/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-500 hover:scale-150 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/safwanmanas/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:scale-150 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-abel mt-3 mb-2">
              Description
            </h2>
            <p className="text-sm font-abel leading-relaxed">
              {project.fulldesc}
            </p>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 px-20 mt-10 py-20 overflow-hidden"
          style={{ width: "max-content" }}
        >
          {project.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`project-${project.id}-img-${idx}`}
              className="h-[80vh] rounded-xl shadow-2xl object-cover transition-transform duration-300"
            />
          ))}
        </div>
      </section> */}

      {/* Fixed sidebar */}
      {/* <div
          className="fixed bottom-0 left-0 w-80 flex flex-col justify-center items-start px-5 z-50"
          style={{
            height: "100vh",
            backgroundColor: "#FFB91A",
          }}
        >
          <h1 className="text-black text-[12vw] md:text-[2vw] font-semibold font-abel uppercase tracking-wider mt-10">
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
        </div> */}

      <section
        className="relative overflow-hidden"
        style={{
          position: "absolute",
          top: "177vh", // push below banner
          left: 0,
          width: "100vh",
          height: "100vw",
          transform: "rotate(270deg) translateX(-100%)",
          transformOrigin: "top left",
          backgroundColor: "#FFB91A",
          overflowY: "scroll",
          overflowX: "hidden",
          scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge
        }}
      >

        {/* Horizontal scroll (rotated back) */}
        <div
          style={{
            transform: "rotate(90deg) translateY(-100vh)",
            transformOrigin: "top left",
            whiteSpace: "nowrap",
            fontSize: 0,
            padding: "10px",
          }}
        >
          {project.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`project-${project.id}-img-${idx}`}
              className="w-full h-full rounded-xl mx-10 inline-block "
              // style={{
              //   // transform: "rotate(0deg)", // no need to rotate back
              // }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default InnerProject;
