import useIsDesktop from "/src/Hooks/isDesktop.jsx";
import Hero from "/src/Components/Hero.jsx";
import About from "/src/Components/About";
import Experince from "/src/Components/Experince";
import Contact from "/src/Components/Contact";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DesktopLayout() {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

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
      start: "top top+=100vh",
      end: () => `+=${(panelCount - 1) * window.innerHeight}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        panels.forEach((panel, i) => {
          const holdDuration = 0.5;
          let sectionProgress =
            i === 0
              ? progress / holdDuration
              : (progress - holdDuration) / (1 - holdDuration);

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

  return (
    <div className="bg-[#FFB91A]">
      <div id="home">
        <Hero />
      </div>
      <div
        ref={containerRef}
        className="perspective-container bg-[#FFB91A] w-full h-screen relative overflow-hidden"
      >
        {panelData.map(({ id, component: Component }, i) => (
          <div
            key={id}
            id={id}
            className="panel w-full h-screen absolute top-0 left-0 flex items-center justify-center pointer-events-auto"
            ref={(el) => (panelsRef.current[i] = el)}
          >
            <div className="w-full h-full flex justify-center items-center pointer-events-auto">
              <Component />
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}

function MobileLayout() {
  return (
    <>
      <Hero />
      <About />
      <Experince />
      <Contact />
    </>
  );
}

function Home() {
  const isDesktop = useIsDesktop(1024); // lg breakpoint in Tailwind
  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
}

export default Home;
