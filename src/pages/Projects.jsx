import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Health & Wellness App",
    description:
      "Developed a full-stack Health & Wellness platform enabling users to track fitness activities, monitor daily health habits, and maintain personalized wellness records. Focused on delivering a responsive and user-friendly interface with secure authentication.",
    features: [
      "User signup/login with JWT authentication",
      "Track daily workouts, diet, and sleep patterns",
      "CRUD operations for personalized health logs",
      "Interactive dashboards displaying health statistics",
    ],
    tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT Auth, Axios",
  },
  {
    title: "Expense Tracker Dashboard",
    description:
      "Built a full-stack Expense Tracker to help users manage their finances effectively. The app provides visual analytics and organized tracking of daily, weekly, and monthly expenses.",
    features: [
      "Secure login/signup with JWT authentication",
      "Add, edit, delete, and categorize expenses",
      "Monthly summaries and spending analytics using charts",
      "Responsive interface for web and mobile devices",
    ],
    tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Chart.js, JWT Auth",
  },
  {
    title: "Mental Health Journal + Mood Analyzer",
    description:
      "Created a platform for users to log daily entries, track mood trends, and analyze emotional patterns over time. Designed to promote mental wellness with interactive and insightful features.",
    features: [
      "Daily journal entries with mood tagging",
      "Mood tracking charts to visualize emotional patterns",
      "Prediction and insights based on past entries",
      "Secure authentication and data management",
    ],
    tech: "MongoDB, Express.js, React.js, Node.js, Tailwind CSS, Chart.js, JWT Auth",
  },
  {
    title: "IoT-Fog Heart Disease Diagnosis (Academic Project)",
    description:
      "Implemented an IoT-based system for early heart disease prediction using ensemble deep learning. The project integrates data flow across Edge, Fog, and Cloud layers and was deployed on Azure VM for real-time monitoring.",
    features: [
      "Collected patient sensor data through IoT devices",
      "Processed data using Fog computing for low-latency predictions",
      "Deployed ensemble deep learning model for accurate heart disease diagnosis",
      "Cloud deployment for scalability and centralized data access",
    ],
    tech: "Python, PHP, Azure, IoT, Fog Computing, Deep Learning",
  },
];

export default function Projects() {
  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto py-10 px-4"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid gap-10">
        {projects.map((proj, index) => (
          <div
  key={index}
  className="relative p-8 rounded-xl shadow-[0_0_20px_2px_rgba(255,255,255,0.05)] bg-white/5 hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
>

            <h2 className="text-2xl font-semibold mb-3">{proj.title}</h2>
            <p className="mb-4 text-gray-900 dark:text-white">{proj.description}</p>
            
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-00">
              {proj.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            
            <p className="text-sm font-mono text-gray-700 dark:text-white">
              <span className="font-semibold">Tech Stack:</span> {proj.tech}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
