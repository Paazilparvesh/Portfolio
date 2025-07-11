import useIsDesktop from "/src/Hooks/isDesktop.jsx"; // adjust path
// import Header from "./Header";
import Project from "/src/Components/Projects.jsx";
import Contact from "/src/Components/Contact.jsx";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DesktopLayout() {
  const horizontalRef = useRef(null);

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
    <div className="bg-[#FFB91A]">
      {/* <div className="relative z-50">
        <Header />
      </div> */}
      <Project />
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
  );
}

function MobileLayout() {
  return (
    <>
      <section id="projects" className="">
        <Project />
      </section>
      <section id="contact" className="">
        <Contact />
      </section>
    </>
  );
}

function Home() {
  const isDesktop = useIsDesktop(1024); // lg breakpoint in Tailwind
  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
}

export default Home;
