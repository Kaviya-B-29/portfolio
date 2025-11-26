import React from "react";
import { motion } from "framer-motion";

const certifications = [
  "FULL STACK DEVELOPMENT WITH AI TOOLS (MERN)",
  "JS Basics",
  "HTML, CSS, Tailwind CSS",
  "Advanced JS",
  "ReactJS",
  "Database",
  "Node.js",
];

export default function Certifications() {
  return (
    <motion.div
      key="certifications"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-10"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-3 rounded-lg shadow hover:shadow-lg transition bg-white/10 backdrop-blur-md border border-white/20"
          >
            <p className="text-gray-200 font-medium">{cert}</p>
            <span className="text-gray-400 text-xs mt-1">GUVI</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
