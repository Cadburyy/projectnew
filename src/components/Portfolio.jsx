"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";

const projects = [
  { title: "Project 1", src: proj2 },
  { title: "Project 2", src: proj3 },
  { title: "Project 3", src: proj4 },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const router = useRouter();

  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18"
      id="portfolio"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-center"
      >
        <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">
          Selected <span className="text-orange-400">Projects</span>
        </h1>
      </motion.div>

      {/* Projects */}
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-36">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* Project Title */}
            <div
              className={`text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] w-full md:w-1/2 text-center ${
                index % 2 === 1 ? "md:text-right" : "md:text-left"
              }`}
            >
              {project.title}
            </div>

            {/* Project Image */}
            <div
              className="cursor-pointer w-full md:w-1/2 flex justify-center"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border rounded border-gray-700 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Click for More Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex justify-center mt-16"
      >
        <button
          onClick={() => router.push("/portofolio")} // ✅ Correct path
          className="bg-orange-600 text-white px-6 py-3 text-xl rounded-lg font-semibold
                    hover:bg-orange-500 hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Click for More
        </button>
      </motion.div>

      {/* Popup Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 flex bg-black/60 justify-center items-center z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-[90%] max-h-[90%] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProject.src}
              alt={selectedProject.title}
              className="h-[350px] w-[500px] object-cover mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
