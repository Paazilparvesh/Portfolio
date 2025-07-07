import React, { useEffect, useState } from "react";

const sections = ["home", "about", "education", "projects", "contact"];

const PaginationDots = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 flex flex-col gap-5">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${id}`}
          className={`w-6 h-6 rounded-full transition-all duration-300
            ${
              activeSection === id
                ? "bg-[#fde3a7] border-2 border-[#fde3a7]"
                : "border-2 border-[#888] bg-transparent hover:border-[#fde3a7]"
            }`}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
