import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.jpg";

export default function About() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto py-10 p-6 rounded-xl relative
                 shadow-[0_0_20px_2px_rgba(255,255,255,0.05)] bg-white/5"
    >
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Text content */}
        <div className="text-sm md:flex-1 leading-relaxed">
          <p>Hi, I’m Kaviya!</p>
          <p className="mt-2">
            Curiosity and a passion for understanding how things work led me to the world of coding. With a Master’s degree in hand, I expanded my expertise through a MERN Stack course, learning to build full-stack web applications from scratch.
          </p>
          <p className="mt-2">
            I enjoy creating projects that are both functional and engaging. From designing polished front-end interfaces with React and Tailwind CSS to developing reliable back-end systems with Node.js, Express, and MongoDB, every project is an opportunity to learn, experiment, and innovate.
          </p>
          <p className="mt-2">
            Though I’m at the start of my professional journey, I have many ideas I’m eager to bring to life. I thrive on challenges, enjoy problem-solving, and take pride in building applications that are useful, interactive, and enjoyable to use.
          </p>
        </div>

        {/* Image with subtle border effect */}
        <div className="md:w-1/2 relative w-64 h-64 flex items-center justify-center">
        <img
          src={img1}
          alt="Kaviya"
          className="w-64 h-64 rounded-full object-cover z-10"
        />

        
        {/* Glittery Circular Line */}
        <div className="absolute top-5 left-35   w-64 h-64 rounded-full border border-dashed border-white/30 overflow-hidden">
          {/* Sparkles along the border */}
          {[...Array(40)].map((_, i) => {
            const angle = (i * 360) / 40;
            const rad = (angle * Math.PI) / 180;
            const r = 128; // half of image size
            const x = r + r * Math.cos(rad) - 2; // adjust for dot size
            const y = r + r * Math.sin(rad) - 2;
            const delay = Math.random() * 2;

            return (
              <span
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                style={{ top: `${y}px`, left: `${x}px`, animationDelay: `${delay}s` }}
              ></span>
            );
          })}
        </div>
      </div>
        
      </div>
    </motion.div>
  );
}
