import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-600" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
];

export default function Skills() {
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-10"
    >
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="flex flex-wrap gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-24 h-24 border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
