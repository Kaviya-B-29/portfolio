import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-10"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Kaviya</h1>
      <p className="text-lg mb-4">
        I'm a beginner Full Stack Developer passionate about building practical web applications using the MERN stack.
        I enjoy learning from real-world challenges, improving my coding skills, and developing into a confident software developer.
      </p>
      <p className="text-lg">
        Based in India, I focus on creating responsive, user-friendly applications with clean code and modern UI.
      </p>
    </motion.div>
  );
}
