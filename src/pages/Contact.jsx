import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";

const contacts = [
  { name: "Email", icon: <FiMail />, link: "mailto:kaviya2909@gmail.com" },
  { name: "Phone", icon: <FiPhone />, link: "tel:+917397050300" },
  { name: "GitHub", icon: <FiGithub />, link: "https://github.com/Kaviya-B-29" },
  { name: "LinkedIn", icon: <FiLinkedin />, link: "https://www.linkedin.com/in/dummy-link" },
  { name: "Location", icon: <FiMapPin />, link: "#" },
];

export default function Contact() {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-10"
    >
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <div className="flex flex-col gap-4">
        {contacts.map((c, index) => (
          <a
            key={index}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-lg hover:text-blue-500 transition"
          >
            <div className="text-2xl">{c.icon}</div>
            <span>{c.name === "Location" ? "India" : c.name}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
}
