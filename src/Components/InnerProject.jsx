import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../Data/ProjectList";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function InnerProject() {
  const [isVideo, setIsVideo] = useState();
  const { id } = useParams();
  const project = ProjectList.find((proj) => proj.id === Number(id));
  useEffect(() => {
    setIsVideo(!!project?.video); // set to true if video exists, false if not
  }, [project]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const bannerImage = document.querySelector(".banner-image");
    const scrollSection = document.querySelector(".scroll-section");
    const scrollContainer = document.querySelector(".scroll-container");

    if (!bannerImage || !scrollContainer || !scrollSection) {
      console.warn("Missing DOM elements for GSAP animations.");
      return;
    }

    console.log("✅ DOM elements found:");
    console.log("→ scrollSection:", scrollSection);
    console.log(
      "→ Number of images:",
      scrollContainer.querySelectorAll("img").length
    );
    console.log("→ scrollContainer.scrollWidth:", scrollContainer.scrollWidth);
    console.log("→ window.innerWidth:", window.innerWidth);

    const scrollDistance =
      scrollContainer.scrollWidth - window.innerWidth + 480;
    console.log("→ Calculated scrollDistance:", scrollDistance);

    const ctx = gsap.context(() => {
      // 🔹 Banner Parallax Effect
      gsap.fromTo(
        bannerImage,
        { scale: 1.2, y: 0 },
        {
          scale: 1,
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: bannerImage,
            start: "top top",
            end: "bottom top",
            scrub: true,
            // markers: true, // Enable for debugging
          },
        }
      );

      // 🔸 Horizontal Scroll
      if (scrollDistance > 0) {
        gsap.to(scrollContainer, {
          x: () => {
            const scrollWidth = scrollContainer.scrollWidth;
            const windowWidth = window.innerWidth;

            let offset = 100; // default mobile
            const width = window.innerWidth;

            if (width >= 1536) offset = 480; // 2xl
            else if (width >= 1280) offset = 480; // xl
            else if (width >= 1024) offset = 480; // lg
            else if (width >= 768) offset = 450; // md
            else offset = 200; // sm

            const distance = scrollWidth - windowWidth + offset;
            console.log("📏 scrollWidth:", scrollWidth);
            console.log("📏 windowWidth:", windowWidth);
            console.log("📏 offset:", offset);
            console.log("📏 distance:", distance);

            return -Math.max(distance, 0);
          },
          ease: "none",
          scrollTrigger: {
            trigger: scrollSection,
            start: "top top",
            end: () => `+=${scrollContainer.scrollWidth}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });
      } else {
        console.warn(
          "⛔ Horizontal scroll not applied — content not wide enough."
        );
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      console.log("🧹 Cleaned up GSAP ScrollTriggers.");
    };
  }, [id]);

  if (!project) {
    return (
      <div className="bg-black text-white h-screen flex justify-center items-center">
        <h1 className="text-2xl text-gray-300">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#FFB91A] text-[#1a1a1a] md:px-10 overflow-x-hidden">
      {/* 🔶 Banner */}
      <div className="relative w-full h-full flex justify-center items-center md:h-[60vh] lg:h-[65vh] 2xl:h-[80vh] mt-40 md:mt-26 md:rounded-2xl overflow-hidden bg-black">
        {isVideo ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="banner-image w-full 2xl:h-135 object-fit will-change-transform"
          />
        ) : (
          <img
            src={project.banner || project.images?.[0]}
            alt="project-banner"
            className="banner-image w-full h-full object-contain will-change-transform"
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
                className="text-[8vw] md:text-[5vw] xl:text-[4vw] font-extrabold font-abel uppercase tracking-wider mx-8"
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
            animation: marquee 25s linear infinite;
            display: flex;
          }
          body {
            overflow-x: hidden;
          }
        `}</style>
      </div>

      {/* 🔄 Horizontal Scroll Section */}
      <section className="scroll-section w-full mt-10 md:mt-0 md:h-screen relative overflow-hidden">
        <div className="md:fixed md:top-20 left-0 md:left-5 w-full md:w-60 lg:w-70 2xl:w-110 md:h-[calc(100vh-5rem)] bg-[#FFB91A] flex flex-col px-5 py-4 z-50 shadow-2xl">
          {/* Title */}
          <h1 className="text-black text-wrap text-[12vw] md:text-[2vw] font-semibold font-abel uppercase tracking-wider">
            {project.title}
          </h1>
          <p className="text-xs">Copyright © All rights reserved.</p>

          {/* Scrollable Content */}
          <div className="overflow-y-auto mt-4 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scrollbar-custom">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-md md:text-md text-start"
            >
              {project.location ? `${project.location} | ` : ""}
              {project.year ? `${project.year} | ` : ""}
              {project.size ? `${project.size}` : ""}
            </motion.p>

            {/* Description */}
            <div>
              <p className="text-xl font-abel leading-relaxed">
                {project.subtitle}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights?.length > 0 && (
              <div>
                <h2 className="text-lg font-bold font-abel mb-1">Highlights</h2>
                <ul className="list-disc pl-4 space-y-1 text-sm font-abel">
                  {project.highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact */}
            {project.impact?.length > 0 && (
              <div>
                <h2 className="text-lg font-bold font-abel mb-1">Impact</h2>
                <ul className="list-disc pl-4 space-y-1 text-sm font-abel">
                  {project.impact.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="scroll-container flex gap-8 ml-110 px-20 mt-20 md:mt-30 lg:mt-20 2xl:mt-20 py-20 overflow-hidden w-max">
          {project.images?.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`project-${project.id}-img-${idx}`}
              className="w-[90vw] md:w-[80vw] lg:w-[60vw] 2xl:w-[50vw] h-[30vh] md:h-[50vh] lg:h-[70vh] 2xl:h-[70vh] mt-60 md:mt-0 rounded-xl shadow-2xl object-fit transition-transform duration-300"
            />
          ))}
        </div>

        {/* 🔝 Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 bg-black text-white rounded-full shadow-lg hover:bg-[#FFB91A] hover:text-black transition-all"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}

export default InnerProject;
