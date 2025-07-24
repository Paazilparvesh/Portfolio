import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import resume from "/src/assets/Safwan_Resume.pdf";
import educationData from "/src/Data/ExperienceList.jsx";

gsap.registerPlugin(ScrollTrigger);

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
      className="relative w-full min-h-screen py-20 px-6 md:px-20 font-abel bg-[#FFB91A] lg:bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header + Resume */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
            EDUCATION & EXPERIENCE
          </h2>
          <a
            href={resume}
            download
            className="bg-[#a95847] text-white px-6 py-3 rounded-full hover:bg-[#fde3a7] hover:text-black text-sm md:text-lg lg:text-xl transition-all duration-300 font-medium scale-95 shadow-lg hover:shadow-[#fde3a7]/30 tracking-[2px]"
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
                  <p className="text-sm mb-1 tracking-wider font-medium text-[#a95847]">
                    {item.year}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#a95847] uppercase tracking-wide mb-1">
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
