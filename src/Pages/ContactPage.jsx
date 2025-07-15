import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toLocaleString(), // optional, for timestamp
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent", result.text);
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
            date: new Date().toLocaleString(),
          });
          setErrors({});
        },
        (error) => {
          console.error("Email error", error.text);
          setStatus("Failed to send. Try again.");
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <section className="min-h-screen w-full bg-black text-white px-6 md:px-20 py-20 font-['Helvetica']">
      {/* Header */}
      <h1 className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[200px] text-[#FFB91A] mt-20 font-bold font-abel mb-16 text-center">
        Contact Me
      </h1>

      {/* Info & Form */}
      <div className="flex justify-center items-center gap-16 mb-20">
        {/* Form */}
        <form
          onSubmit={sendEmail}
          className="w-full md:w-1/2 2xl:w-[850px] px-4 my-10 md:px-20 space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black border-b border-white focus:outline-none placeholder-white w-full py-2"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email (required)"
              value={formData.email}
              onChange={handleChange}
              className="bg-black border-b border-white focus:outline-none placeholder-white w-full py-2"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message (required)"
              value={formData.message}
              onChange={handleChange}
              className="bg-black border-b border-white focus:outline-none placeholder-white w-full py-2"
              rows="4"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-white hover:bg-[#FFB91A] text-black px-6 py-2 font-semibold transition-all duration-300 hover:scale-110"
          >
            SUBMIT
          </button>

          {status && <p className="text-white text-sm mt-4">{status}</p>}
        </form>
      </div>

      {/* Name Branding */}
      {/* <div className="text-5xl md:text-7xl lg:text-9xl 2xl:text-[220px] font-bold font-abel mt-20 leading-none mb-16 text-center">
        Safwan Manas
      </div> */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="space-y-6 text-sm md:text-base flex flex-col md:flex-row justify-center">
          <a
            href="mailto:safwanmanas@gmail.com"
            className="flex items-center gap-2 text-lg md:text-sm lg:text-xl hover:underline hover:scale-110 hover:text-yellow-400 transition-all duration-300 font-abel tracking-widest"
          >
            <FaEnvelope className="w-5 h-5" />
            safwanmanas@gmail.com
          </a>
          {/* Phone Numbers */}
          <div className="flex flex-col md:flex-row text-lg md:text-sm lg:text-lg space-x-5 md:px-5">
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
        </div>

        <div className="flex gap-6 text-2xl my-5 md:my-0">
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

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between text-sm lg:text-lg border-t border-white pt-10 -mb-10">
        <div>
          © 2025 Development by{" "}
          <a
            blank
            className="hover:text-yellow-400 hover:underline transition-all duration-500"
            href="https://thirdvizion.com/"
          >
            thirdvizion.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
