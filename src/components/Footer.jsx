import React from "react";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope, FaDownload } from "react-icons/fa";

export  function SparklingDivider() {const sparkleCount = 12; // more sparkles

  return (
    <div className="w-1/4 mx-auto my-6 relative h-[2px]"> {/* thinner line */}
      {/* The line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full relative overflow-hidden">
        {/* Sparkles */}
        {[...Array(sparkleCount)].map((_, i) => {
          const leftPercent = Math.random() * 100; // random positions
          const delay = Math.random() * 2; // random animation delay
          return (
            <span
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping"
              style={{ top: "-2px", left: `${leftPercent}%`, animationDelay: `${delay}s` }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}


export default function Footer() {
  return (
    <footer className="relative mt-20">
      
      <SparklingDivider />


      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Text */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} <span className="font-semibold">Kaviya Balakrishnan</span>
        </p>

        {/* Right Side Icons + Resume */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {[{
            icon: <FaLinkedin size={22} />,
            href: "https://www.linkedin.com/in/kaviya-b-292k/",
            hover: "hover:text-blue-400"
          },{
            icon: <FaGithub size={22} />,
            href: "https://github.com/Kaviya-B-29",
            hover: "hover:text-pink-400"
          },{
            icon: <FaPhoneAlt size={22} />,
            href: "#phone-link",       // placeholder
            hover: "hover:text-green-400"

          },{
            icon: <FaEnvelope size={22} />,
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=kaviya2909@gmail.com",
            hover: "hover:text-red-400"
          }].map((item, idx) => (
            <a 
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 transform hover:scale-125 transition-all duration-300 ${item.hover}`}
            >
              {item.icon}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/KAVIYA.B-RESUME.pdf" 
            download
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105 "
          >
            <FaDownload />
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% }
            50% { background-position: 100% }
            100% { background-position: 0% }
          }
          .animate-gradient-move {
            background-size: 200% auto;
            animation: gradient-move 4s linear infinite;
          }
        `}
      </style>
    </footer>
  );
}
