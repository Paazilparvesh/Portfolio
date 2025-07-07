import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import lot from "/src/assets/Animation - 1751697892250.json";

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
  const lottieRef = useRef(null); // 🔥 Add Lottie reference

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
            delay: 1 + i * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      });

      // 🔥 Lottie Animation Trigger on Scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom+=80", // Start when the section is 100px from the bottom
        once: true, // play only once
        onEnter: () => {
          if (lottieRef.current) {
            lottieRef.current.play();
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-[#a95847] flex flex-col md:flex-row items-start justify-between pt-24 px-6 sm:px-10 md:px-16 lg:px-20 overflow-hidden"
    >
      {/* 📸 Image */}
      <div className="w-full lg:w-1/2 h-full flex items-start justify-center xl:pt-24 xl:scale-125">
        <Lottie
          lottieRef={lottieRef} // 🎯 connect to ref
          animationData={lot}
          autoplay={false} // ⛔ initially paused
          loop={false}
        />
      </div>

      {/* 📄 Text */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#fde3a7] mb-8 uppercase tracking-wide space-grotesk leading-tight">
          About Me
        </h2>

        <div className=" text-white text-base sm:text-md md:text-lg lg:text-xl leading-relaxed mb-12 font-medium space-y-5 text-justify max-w-3xl">
          <p>
            Hello, I'm Mohamed Safwan, a recent master's graduate in Retail
            Design at Elisava school of design and engineering, a spatial
            designer and sometimes an amateur shutterbug...
          </p>
          <p>
            Skilled in visual merchandising, space planning, and a piqued
            interest in materials for sustainable design...
          </p>
        </div>

        {/* 🧠 Skills */}
        <div className="space-y-8 max-w-3xl">
          {skills.map(({ title, percent }, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-[#fde3a7] text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wide space-grotesk">
                  {title}
                </h3>
                <p className="text-[#fde3a7] text-sm sm:text-base font-semibold">
                  {percent}%
                </p>
              </div>
              <progress
                ref={(el) => (barsRef.current[i] = el)}
                max="100"
                className="w-full h-[8px] sm:h-[10px] rounded overflow-hidden bg-[#fde3a7] 
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
