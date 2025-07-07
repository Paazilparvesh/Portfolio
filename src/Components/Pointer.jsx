// src/components/PointerFollower.jsx
import { useEffect } from "react";
import gsap from "gsap";

const PointerFollower = () => {
  useEffect(() => {
    const trailCount = 10;
    const trails = [];

    for (let i = 0; i < trailCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("trail-dot");
      dot.style.position = "fixed";
      dot.style.top = "0";
      dot.style.left = "0";
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.borderRadius = "50%";
      dot.style.background = "#fde3a7";
      dot.style.pointerEvents = "none";
      dot.style.zIndex = "9999";
      document.body.appendChild(dot);
      trails.push({ el: dot, x: 0, y: 0 });
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const update = () => {
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
    };

    gsap.ticker.add(update);

    return () => {
      // Cleanup on unmount
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(update);
      trails.forEach((t) => t.el.remove());
    };
  }, []);

  return null; // Nothing rendered directly
};

export default PointerFollower;
