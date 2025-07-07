import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full flex flex-col md:flex-row items-center justify-between bg-black text-[#fde3a7] px-8 md:px-20 py-20 gap-12">
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
          Let's Work
          <div className="lg:text-7xl">Together</div>
        </h2>
        <p className="text-[#fde3a7]/80 text-lg md:text-xl max-w-sm">
          Have a concept you’d like to explore? Let’s chat!
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col gap-8 md:items-end">
        {/* Email */}
        <a
          href="mailto:safwanmanas@gmail.com"
          className="flex items-center gap-2 text-lg md:text-xl hover:underline"
        >
          <FaEnvelope className="w-5 h-5" />
          safwanmanas@gmail.com
        </a>

        {/* Phone Numbers */}
        <div className="flex flex-col text-lg md:text-xl space-y-2">
          <a
            href="tel:+919840952854"
            className="hover:text-yellow-400 transition"
          >
            +91 984 095 28 54
          </a>
          <a
            href="tel:+97336070242"
            className="hover:text-yellow-400 transition"
          >
            +973 360 702 42
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mt-6">
          <a
            href="#"
            className="hover:text-blue-500 transition duration-200"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/safwanmanas/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition duration-200"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/safwanmanas/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
6;
