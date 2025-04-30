"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // For navigation
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
    const router = useRouter();

    return (
        <div className="max-w-[1200px] mx-auto" id="about">
            
            {/* Animated Title */}
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-center"
            >
                <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold p-4 mb-4">
                    About <span className="text-orange-400">Us</span>
                </h1>
            </motion.div>

            <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center">
                
                {/* First Card */}
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={book} alt="book" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4"> 
                            <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxx</p>
                        </div>
                    </div>        
                </motion.div>

                {/* Second Card */}
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={pc} alt="pc" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4"> 
                            <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxx</p>
                        </div>
                    </div>        
                </motion.div>

                {/* Third Card */}
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={card} alt="card" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4"> 
                            <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxx</p>
                        </div>
                    </div>        
                </motion.div>

                {/* Fourth Card */}
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-row p-6">
                        <Image src={finance} alt="finance" className="w-auto h-[130px]"/>
                        <div className="flex flex-col mt-4"> 
                            <h2 className="text-2xl font-bold text-white/80">xxxx</h2>
                            <p className="text-lg text-white/70 mt-2">xxxx</p>
                        </div>
                    </div>        
                </motion.div>
            </div>

            {/* Click for More Button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center mt-8"
            >
                <button
                    onClick={() => router.push("/about")}
                    className="bg-orange-600 text-white px-6 py-3 text-xl rounded-lg font-semibold
                                hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Click for More
                </button>
            </motion.div>
        </div>
    );
};

export default About;
