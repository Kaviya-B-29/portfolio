import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const sections = ["about",  "projects", "skills","education", "certifications"];

export default function RightSidebar() {
  return (
    <div
      className="
        w-52 fixed top-0 left-0 h-full
        bg-white/10 backdrop-blur-[25px] backdrop-saturate-180
        border border-white/20 shadow-lg rounded-r-3xl p-6
        flex flex-col overflow-y-auto
      "
    >
<div className="w-full flex flex-col items-center mb-8 relative">
      {/* Animated Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-36 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-2xl "></div>
      </div>

      {/* Name */}
      <h1 className="relative text-2xl font-extrabold  bg-clip-text 
                     text-white
                     drop-shadow-lg">
        {Array.from("Kaviya").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-4 mb-6">
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="
              w-full text-center text-white/90 cursor-pointer uppercase text-[12px] tracking-wider
              py-3 px-4 rounded-xl hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300
            "
            activeClass="bg-blue-500 text-white shadow-lg"
          >
            {section}
          </Link>
        ))}
      </div>

      <div className="border-t border-white/30 w-32 mx-auto my-4"></div>

      {/* Contact Section */}
      <div className="flex flex-col space-y-3 mt-auto">
        <h2 className="text-white/70 text-xs font-semibold tracking-widest mb-2 text-center">
          CONTACT
        </h2>

        {[
          {
            icon: <FaEnvelope />,
            label: "Email",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=kaviya2909@gmail.com",
          },
          {
            icon: <FaPhoneAlt size={22} />,
            href: "#phone-link",       // placeholder
            hover: "hover:text-green-400"
          
          },
          {
            icon: <FaGithub />,
            label: "GitHub",
            href: "https://github.com/Kaviya-B-29",
          },
          {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kaviya-b-292k/",
          },
        ].map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-start space-x-3 bg-white/10 backdrop-blur-[15px] rounded-xl px-4 py-3
              hover:scale-105 hover:shadow-lg transition-all duration-300
            "
          >
            <span className="text-white/90 text-lg">{c.icon}</span>
            <span className="text-white/90 text-sm font-medium">{c.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
