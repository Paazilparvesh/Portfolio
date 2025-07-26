import React from "react";
import { Link } from "react-router-dom";
import projectList from "/src/Data/ProjectList";

export default function ProjectsScatteredGrid() {
  return (
    <section className="w-full bg-[#FFB91A] pt-36 pb-20">
      {/* <section className="w-full bg-white pt-36 pb-20"> */}
      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-x-8 gap-y-10 -mt-20 md:-mt-10 lg:-mt-20 xl:-mt-10">
        {projectList.map((project, index) => {
          // Random Mixed Grid Layout

          // const topOffset =
          //   index % 4 === 1
          //     ? "lg:mt-20 lg:mx-5 xl:mt-56 xl:mx-15 2xl:mt-70"
          //     : index % 4 === 2
          //     ? "lg:-mt-46 lg:mx-10 xl:-mt-40 xl:mx-20 2xl:-mt-30"
          //     : index % 4 === 3
          //     ? "lg:mt-23 lg:mx-5 xl:mt-56 xl:mx-4 2xl:mt-20"
          //     : "lg:-mt-40 lg:mx-6 xl:-mt-40 xl:mx-6 2xl:-mt-50";

          return (
            <Link
              key={index}
              to={`/project/${project.id}`}
              className={`block group relative`}
            >
              <div
                className={`w-full relative overflow-hidden ${project.cardPadding}`}
              >
                <div className="aspect-[4/5] w-full relative bg-transparent">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                    className="absolute top-0 left-0 w-full h-full p-10 lg:p-10 object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105  select-none pointer-events-none"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 transition duration-300 ease-in-out flex justify-center items-center">
                    <span className="md:opacity-0 group-hover:opacity-100 text-black font-medium text-2xl md:text-lg lg:text-xl 2xl:text-xl tracking-wider font-tanmon text-center px-2 -mt-80 md:mt-0 uppercase">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <p className="transform translate-y-16 px-2 font-ttcommons font-extralight text-gray-600 text-sm">
        Copyright @ All rights reserved
      </p>
    </section>
  );
}
