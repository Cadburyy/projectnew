"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.jpg";
import Link from "next/link";

const projects = [
    { title:"Project 1", desc:"Description 1", devstack:"Stack 1", link:"#", git:"#", src: proj2 },
    { title:"Project 2", desc:"Description 2", devstack:"Stack 2", link:"#", git:"#", src: proj3 },
    { title:"Project 3", desc:"Description 3", devstack:"Stack 3", link:"#", git:"#", src: proj4 },
];

const Portfolio = () => {
    return (
        <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
            
            {/* Title with animation */}
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
            
            {/* Project List */}
            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity : 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-1" : "md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-5xl my-4 text-white/70 font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                                {`0${index + 1} `}
                            </h2>
                            <h2 className="text-4xl">{project.title}</h2>
                            <p className="text-lg text-white/70 break-down p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.devstack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git}>Git</a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700" />
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Redirect Button to Full Portfolio */}
            <div className="text-center my-12">
                <Link href="/portfolio">
                <button
                    className="bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold text-xl 
                            hover:bg-orange-500 transition-all 
                            hover:scale-[1.03] active:scale-95 
                            shadow-md hover:shadow-lg active:shadow-inner"
                >
                    See Full Portfolio
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
