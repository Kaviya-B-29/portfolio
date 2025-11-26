import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "M.Tech Information Technology",
    institute: "Anna University, CEG",
    year: "2021 – 2023",
  },
  {
    degree: "B.E Computer Science and Engineering",
    institute: "VRS College of Engineering and Technology",
    year: "2017 – 2021",
  },
];

export default function Education() {
  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-10"
    >
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="flex gap-6 relative p-8 rounded-xl shadow-[0_0_20px_2px_rgba(255,255,255,0.05)] bg-white/5 hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{edu.degree}</h2>
            <p className="mb-1">{edu.institute}</p>
            <p className="text-sm font-mono text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
