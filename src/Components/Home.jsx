// import Header from "./Header";
// import Hero from "./Hero";
// import About from "./About";
// import Experince from "./Experince";
// import Project from "./Projects";
// import Contact from "./Contact";
// import Pagination from "./Pagination";

// function Home() {
//   return (
//     <>
//         <Header />
//         {/* <Pagination /> */}
//       <section id="home" className="min-h-screen bg-black text-white">
//         <Hero />
//       </section>
//       <section id="about" className="min-h-screen">
//         <About />
//       </section>
//       <section id="education" className="">
//         <Experince />
//       </section>
//       <section id="projects" className="min-h-screen bg-black text-white">
//         <Project />
//       </section>
//       <section id="contact" className="min-h-screen pt-56 bg-black text-white">
//         <Contact />
//       </section>
//     </>
//   );
// }
// export default Home;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experince from "./Experince";
import Project from "./Projects";
import Contact from "./Contact";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const horizontalRef = useRef(null);

  // Define Z-axis panels with corresponding ids
  const panelData = [
    { id: "about", component: About },
    { id: "education", component: Experince },
  ];

  useEffect(() => {
    const panels = panelsRef.current;
    const panelCount = panels.length;

    gsap.set(panels, {
      z: (i) => i * -1500,
      opacity: 1,
      scale: 0.95,
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top+=100vh", // After Hero
      end: () => `+=${(panelCount - 1) * window.innerHeight}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        panels.forEach((panel, i) => {
          const holdDuration = 0.5;
          let sectionProgress;

          if (i === 0) {
            sectionProgress = progress / holdDuration;
          } else {
            sectionProgress = (progress - holdDuration) / (1 - holdDuration);
          }

          const distance = Math.abs(sectionProgress - i);
          const clampedOpacity = distance < 1 ? 1 : 0;
          const clampedScale = gsap.utils.clamp(
            0.92,
            1,
            0.92 + (1 - distance) * 0.08
          );

          if (distance < 1.5) {
            gsap.to(panel, {
              z: i * -1500 + sectionProgress * 1500,
              opacity: clampedOpacity > 0.1 ? clampedOpacity : 0.1,
              scale: clampedScale,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          }
        });
      },
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    const section = horizontalRef.current;
    const panels = section.querySelectorAll(".horizontal-panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${section.scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <>
      <div className="bg-[#FFB91A]">
        <div className="relative z-50">
          <Header />
        </div>
        <div id="home">
          <Hero />
        </div>

        {/* ✅ Z-Axis Scroll Section with Unique IDs */}
        <div
          ref={containerRef}
          className="perspective-container bg-[#FFB91A] w-full h-screen relative overflow-hidden"
        >
          {panelData.map(({ id, component: Component }, i) => (
            <div
              key={id}
              id={id} // 🔥 This makes each panel scrollable by ID
              className="panel w-full h-screen absolute top-0 left-0 flex items-center justify-center pointer-events-auto"
              ref={(el) => (panelsRef.current[i] = el)}
            >
              <div className="w-full h-full flex justify-center items-center pointer-events-auto">
                <Component />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Horizontal Scroll Section */}
        <section
          ref={horizontalRef}
          className="relative h-screen w-full overflow-hidden bg-black"
          id="horizontal"
        >
          <div className="flex w-[200vw] h-full">
            <div
              id="projects"
              className="horizontal-panel w-screen h-full flex justify-center items-center"
            >
              <Project />
            </div>
            <div
              id="contact"
              className="horizontal-panel w-screen h-full flex justify-center items-center"
            >
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
