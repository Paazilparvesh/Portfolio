import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import video from "/src/assets/portfolio_video.mp4";
import profile from "/src/assets/Png Man-11.png";

const Hero = () => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    animateIntro();
    pointerFollower();
    splitHeroTitle();
  }, []);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);

  const animateIntro = () => {
    const overlay = overlayRef.current;

    gsap.set(overlay, {
      scale: 1,
      borderRadius: 0,
      top: 0,
      left: 0,
      xPercent: 0,
      yPercent: 0,
    });

    gsap
      .timeline()
      .to(overlay, {
        duration: 1.2,
        width: 200,
        height: 200,
        borderRadius: "50%",
        top: "50%",
        left: "45%",
        xPercent: -50,
        yPercent: -50,
        ease: "power3.inOut",
      })
      .fromTo(
        overlay.querySelector("svg"),
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        ">-0.3"
      );
  };

  const pointerFollower = () => {
    const trailCount = 200;
    const trails = [];

    for (let i = 0; i < trailCount; i++) {
      const dot = document.createElement("div");
      dot.className =
        "fixed w-5 h-5 bg-[#fde3a7] rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-70";
      document.body.appendChild(dot);
      trails.push({ el: dot, x: 0, y: 0 });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
      let x = mouseX;
      let y = mouseY;

      trails.forEach((t, i) => {
        t.x += (x - t.x) * 0.2;
        t.y += (y - t.y) * 0.2;

        gsap.set(t.el, {
          x: t.x,
          y: t.y,
          scale: 1 - i * 0.05,
          opacity: 1 - i * 0.1,
        });

        x = t.x;
        y = t.y;
      });
    });
  };

  const splitHeroTitle = () => {
    const title = document.querySelector(".hero-title");
    if (title) {
      title.innerHTML = title.textContent
        .split("")
        .map((char) =>
          char === " "
            ? `<span class="inline-block">&nbsp;</span>`
            : `<span class="inline-block transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-125 hover:text-[#a95847]">${char}</span>`
        )
        .join("");
    }
  };

  return (
    <section
      className="relative flex justify-center items-center bg-[#FFB91A] group w-full h-screen overflow-hidden"
    >
      {/* 🔴 Animated Red Circle Play Button */}
      <div
        ref={overlayRef}
        style={{ transformStyle: "preserve-3d", pointerEvents: "auto" }}
        className="absolute top-0 left-0 z-20 -ml-[30px] md:-ml-[2px] w-full h-[180vh] bg-[#a95847] rounded-full flex items-center justify-center cursor-pointer animate-bounce transition duration-300"
        onClick={() => setShowVideo(true)}
      >
        <svg
          className="w-[50px] h-[50px] hover:scale-110 fill-[#fde3a7] transition duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Background & Content */}
      <div className="relative w-full h-full flex items-center md:mt-5 bg-cover bg-center bg-no-repeat px-6 sm:px-10 md:px-20 pb-[140px] pt-[140px]">
        <div className="relative z-10 max-w-screen-xl mx-auto w-1/2 text-center">
          {/* 🅰 Hero Title */}
          <p className="text-left text-white text-sm sm:text-base md:text-lg xl:text-3xl tracking-widest mb-2 space-grotesk">
            Hello, I’m
          </p>

          <h1 className="hero-title text-left text-white text-[32px] sm:text-[60px] md:text-[90px] xl:text-[150px] font-bold tracking-[8px] leading-none uppercase transition-all duration-700 space-grotesk">
            Safwan Manas
          </h1>

          <p className="mt-4 ml-12 text-[#a95847] text-xl sm:text-3xl lg:text-5xl text-center font-medium tracking-widest space-grotesk">
            SPATIAL DESIGNER
          </p>
        </div>
        <img src={profile} alt="" className="w-1/2 px-20 mt-48" />
      </div>

      {/* 🔳 Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-full h-screen aspect-video">
            <button
              className="absolute top-2 right-4 text-white text-4xl z-10"
              onClick={() => {
                setShowVideo(false);
                if (videoRef.current) {
                  videoRef.current.pause();
                }
              }}
            >
              &times;
            </button>
            <video
              ref={videoRef}
              className="w-full h-full rounded-lg"
              controls
              autoPlay
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
