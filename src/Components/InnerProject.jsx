// import React from "react";
// import { useParams } from "react-router-dom";
// import ProjectList from "../Data/ProjectList";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// function InnerProject() {
//   const { id } = useParams();
//   const project = ProjectList.find((proj) => proj.id === Number(id));

//   if (!project) {
//     return (
//       <div className="bg-black text-white h-screen flex justify-center items-center">
//         <h1 className="text-2xl text-gray-300">Loading...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#fef7e5] text-[#1a1a1a] min-h-screen px-6 py-10 md:px-16 lg:px-32 font-sans overflow-x-hidden">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-6xl font-bold text-yellow-600 text-center mb-4"
//       >
//         {project.title}
//       </motion.h1>

//       {/* Sub Info */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4, duration: 0.8 }}
//         className="text-md md:text-xl text-yellow-800 text-center mb-10"
//       >
//         {project.location ? `${project.location} | ` : ""}
//         {project.year && <>{project.year}</>}
//       </motion.p>

//       {/* Image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="flex justify-center mb-10"
//       >
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full max-w-3xl rounded-xl shadow-md"
//         />
//       </motion.div>

//       {/* Full Description */}
//       {project.fullDescription && (
//         <motion.section
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.7, duration: 0.7 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Project Overview
//           </h2>
//           <p className="text-lg leading-relaxed whitespace-pre-line">
//             {project.fullDescription}
//           </p>
//         </motion.section>
//       )}

//       {/* Stats */}
//       {project.stats && (
//         <motion.section
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.9, duration: 0.7 }}
//           className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
//         >
//           {project.stats.map((stat, index) => (
//             <div key={index} className="bg-yellow-100 p-6 rounded-lg shadow">
//               <h3 className="text-xl font-bold text-yellow-700">
//                 {stat.label}
//               </h3>
//               <p className="text-3xl font-bold text-yellow-600">
//                 {stat.unit === "%" || stat.unit === "+"
//                   ? <CountUp end={stat.value} duration={2} /> + stat.unit
//                   : `${stat.unit}${stat.value}`}
//               </p>
//               {stat.note && <p className="text-sm mt-2">{stat.note}</p>}
//             </div>
//           ))}
//         </motion.section>
//       )}

//       {/* Highlights */}
//       {project.highlights && (
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.6 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Highlights
//           </h2>
//           <ul className="list-disc pl-6 text-lg space-y-2">
//             {project.highlights.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </motion.section>
//       )}

//       {/* Impact */}
//       {project.impact && (
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.1, duration: 0.6 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Project Impact
//           </h2>
//           <ul className="list-disc pl-6 text-lg space-y-2">
//             {project.impact.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </motion.section>
//       )}

//       {/* Recognition */}
//       {project.recognition && (
//         <motion.section
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//           className="mb-10"
//         >
//           <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
//             Recognition
//           </h2>
//           <ul className="list-disc pl-6 text-lg space-y-2">
//             {project.recognition.map((award, idx) => (
//               <li key={idx}>{award}</li>
//             ))}
//           </ul>
//         </motion.section>
//       )}
//     </div>
//   );
// }

// export default InnerProject;



import React from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../Data/ProjectList";
import { motion } from "framer-motion";

function InnerProject() {
  const { id } = useParams();
  const project = ProjectList.find((proj) => proj.id === Number(id));

  if (!project) {
    return (
      <div className="bg-black text-white h-screen flex justify-center items-center">
        <h1 className="text-2xl text-gray-300">Loading...</h1>
      </div>
    );
  }

  // ✅ Only get content blocks with topic & content (excluding "Project Overview")
  const contentBlocks = Object.entries(project)
    .filter(
      ([key, value]) =>
        value &&
        typeof value === "object" &&
        value.topic &&
        value.content
    )
    .map(([_, value]) => value);

  return (
    <div className="bg-[#fef7e5] text-[#1a1a1a] min-h-screen px-6 py-10 md:px-16 lg:px-32 font-sans overflow-x-hidden space-y-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-yellow-600 text-center mb-2"
      >
        {project.title}
      </motion.h1>

      {/* Sub Info */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-md md:text-xl text-yellow-800 text-center"
      >
        {project.location ? `${project.location} | ` : ""}
        {project.year && <>{project.year}</>}
      </motion.p>

      {/* Alternating Image + Description Blocks */}
      {project.images?.map((img, idx) => {
        const content = contentBlocks[idx];
        const isEven = idx % 2 === 0;

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx, duration: 0.6 }}
            className={`flex flex-col ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10`}
          >
            <img
              src={img}
              alt={`project-${project.id}-img-${idx}`}
              className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
            />
            {content && (
              <div className="w-full md:w-1/2 text-lg space-y-3">
                <h2 className="text-2xl font-semibold text-yellow-700">
                  {content.topic}
                </h2>
                <p className="leading-relaxed whitespace-pre-line">
                  {content.content}
                </p>
              </div>
            )}
          </motion.div>
        );
      })}

      {/* ⛔ Highlights, Impact, and Overview Removed */}
    </div>
  );
}

export default InnerProject;

