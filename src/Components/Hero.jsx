import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import video from "/src/assets/portfolio_video.mp4";
import profile from "/src/assets/Png Man-11.png";

const Hero = () => {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    animateIntro(); // run initially
    pointerFollower();
    splitHeroTitle();

    // 🔁 Rerun animateIntro on resize
    const handleResize = () => {
      animateIntro();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showVideo ? "hidden" : "auto";
  }, [showVideo]);

  const animateIntro = () => {
    const overlay = overlayRef.current;
    const screenWidth = window.innerWidth;

    // Responsive values
    const isMobile = screenWidth <= 640;
    const isTablet = screenWidth > 640 && screenWidth <= 1024;
    // const isDesktop = screenWidth > 1024;
    const isLaptop = screenWidth > 1024 && screenWidth <= 1440;
    const isLargeScreen = screenWidth > 1440;

    const size = isMobile
      ? 80
      : isTablet
      ? 160
      : isLaptop
      ? 200
      : isLargeScreen
      ? 250
      : 300;
    const left = isMobile
      ? "50%"
      : isTablet
      ? "48%"
      : isLaptop
      ? "46%"
      : isLargeScreen
      ? "44%"
      : "42%";
    const top = isMobile
      ? "20%"
      : isTablet
      ? "48%"
      : isLaptop
      ? "46%"
      : isLargeScreen
      ? "44%"
      : "42%";

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
        width: size,
        height: size,
        borderRadius: "50%",
        top: top,
        left: left,
        xPercent: -50,
        yPercent: -50,
        ease: "power3.inOut",
      })
      .fromTo(
        overlay.querySelector("svg"),
        { autoAlpha: 0, scale: 0 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
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
    <section className="relative flex justify-center items-center bg-[#FFB91A] group w-full h-screen overflow-hidden">
      {/* 🔴 Animated Red Circle Play Button */}
      <div
        ref={overlayRef}
        style={{ transformStyle: "preserve-3d", pointerEvents: "auto" }}
        className="absolute top-0 left-0 z-20 -ml-[30px] md:-ml-[2px] w-full h-[180vh]  bg-[#a95847] rounded-full flex items-center justify-center cursor-pointer animate-bounce transition duration-300"
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
      <div className="relative w-full h-full flex items-center md:mt-5 bg-cover bg-center bg-no-repeat px-6 sm:px-10 md:px-20 pb-[140px] md:pt-[140px]">
        <div className="relative flex flex-col items-start z-10 max-w-screen-xl mx-auto w-full lg:w-1/2 text-center">
          {/* 🅰 Hero Title */}
          <p className="w-full text-center md:text-left text-white font-helvetica text-sm sm:text-base md:text-lg xl:text-3xl tracking-widest mb-2">
            Hello, I’m
          </p>

          <h1 className="hero-title w-full text-white md:text-start font-abel text-4xl md:text-[90px] xl:text-[150px]  font-extrabold tracking-[4px] md:tracking-[8px] leading-none uppercase transition-all duration-700">
            Safwan Manas
          </h1>

          <p className="w-full font-helvetica xl:mt-4 md:ml-10 text-[#a95847] text-lg md:text-2xl xl:text-4xl 2xl:text-6xl flex flex-col items-center justify-center text-center font-medium tracking-widest">
            SPATIAL DESIGNER
          </p>
        </div>
        <img
          src={profile}
          alt=""
          className="absolute bottom-0 left-0 md:static w-full lg:w-1/2 xl:px-20 mt-48 md:transform md:translate-x-16 md:scale-125 "
        />
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
