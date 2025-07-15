import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className=" relative w-full md:h-screen flex flex-col md:flex-row items-center justify-between bg-black text-[#fde3a7] px-8 md:px-20 py-20 gap-12">
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center  tracking-[2px] font-abel font-bold">
        <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Let's Work
          <div className="lg:text-7xl">Together</div>
        </h2>
        <p className="text-[#fde3a7]/80 text-lg md:text-xl font-medium max-w-sm">
          Have a concept you’d like to explore? Let’s chat!
        </p>
      </div>

      {/* 🔴 Call to Action Circle Button */}
      <div className="absolute z-30 inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
      pointer-events-auto 
      w-24 h-24 
      sm:w-28 sm:h-28 
      md:w-26 md:h-26 
      xl:w-40 xl:h-40
      2xl:w-42 2xl:h-42
      bg-[#a95847] 
      rounded-full 
      flex items-center justify-center 
      cursor-pointer 
      animate-bounce 
      shadow-lg 
      hover:scale-105 
      transition duration-300
      absolute 
      bottom-1 
      right-6 
      sm:bottom-20 
      sm:right-10 
      md:bottom-65 
      md:right-80
      lg:bottom-68
      lg:right-105
      xl:bottom-70 
      xl:right-155
      2xl:bottom-60
      2xl:right-170
    "
        >
          <Link to="/contact">
            <span className="text-[#fde3a7] text-xs md:text-md xl:text-xl font-bold uppercase tracking-wide font-abel">
              Open For Work
            </span>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col items-start gap-8 md:items-end ">
        {/* Email */}
        <a
          href="mailto:safwanmanas@gmail.com"
          className="flex items-center gap-2 text-lg md:text-xl hover:underline hover:scale-110 transition-all duration-300 font-abel tracking-widest"
        >
          <FaEnvelope className="w-5 h-5" />
          safwanmanas@gmail.com
        </a>

        {/* Phone Numbers */}
        <div className="flex flex-col text-lg md:text-xl space-y-2 ">
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

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-6">
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
    </section>
  );
}
