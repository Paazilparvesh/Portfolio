import React from "react";
import { Link } from "react-router-dom";
import projectList from "/src/Data/ProjectList";

export default function ProjectsScatteredGrid() {
  return (
    <section className="w-full bg-[#FFB91A] pt-36 pb-20">
      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-10 md:mt-40">
        {projectList.map((project, index) => {
          // Apply vertical offset to create a staggered pattern
          const topOffset =
            index % 4 === 1
              ? "md:mt-56 md:mx-15"
              : index % 4 === 2
              ? "md:-mt-40 md:mx-20"
              : index % 4 === 3
              ? "md:mt-56 md:mx-4"
              : "md:-mt-40 md:mx-6";

          return (
            <Link
              key={index}
              to={`/project/${project.id}`}
              className={`block group relative ${topOffset}`}
            >
              <div className="w-full relative overflow-hidden">
                <div className="aspect-[4/5] w-full relative bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 md:bg-transparent group-hover:bg-black/20 transition duration-300 ease-in-out flex justify-center items-center">
                    <span className="md:opacity-0 group-hover:opacity-100 text-white font-medium text-2xl md:text-3xl tracking-wide font-abel text-center px-2">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <p className="transform translate-y-16 px-2 font-abel sm:text-lg">
        Copyright @ All rights reserved
      </p>
    </section>
  );
}
