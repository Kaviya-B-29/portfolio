import React from "react";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const sections = ["about", "projects", "skills", "education", "certifications"];

export default function RightSidebar() {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;

  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=kaviya2909@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      href: `tel:${phoneNumber}`,
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
  ];

  return (
    <div
  className="
    fixed top-0 left-0 h-full
    w-20 md:w-24 lg:w-52
    bg-white/10 backdrop-blur-[25px] backdrop-saturate-180
    border border-white/20 shadow-lg rounded-r-3xl p-4 sm:p-6
    flex flex-col overflow-y-auto
  "
>

      {/* Name */}
<div className="w-full flex flex-col items-center mb-8 relative">
  <div className="absolute inset-0 flex justify-center">
    <div className="w-36 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 opacity-20 blur-2xl"></div>
  </div>

  <h1 className="relative text-white font-extrabold text-xl sm:text-2xl drop-shadow-lg flex sm:flex-row flex-col items-center sm:gap-0 gap-1">
    {Array.from("KAVIYA").map((char, i) => (
      <span
        key={i}
        className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
      >
        {char}
      </span>
    ))}
  </h1>
</div>


      {/* Navigation Links (hidden on small screens) */}
      <div className="flex flex-col items-center space-y-4 mb-6 hidden sm:flex">
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

      <div className="border-t border-white/30 w-32 mx-auto my-4 hidden sm:block"></div>

      {/* Contact Section */}
      <div className="flex flex-col space-y-3 mt-auto items-center sm:items-start">
        <h2 className="text-white/70 text-xs font-semibold tracking-widest mb-2 text-center hidden sm:block">
          CONTACT
        </h2>

        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center sm:justify-start space-x-0 sm:space-x-3
              bg-white/10 backdrop-blur-[15px] rounded-xl px-4 py-3
              hover:scale-105 hover:shadow-lg transition-all duration-300
              w-full
            "
          >
            <span className="text-white/90 text-lg">{c.icon}</span>
            <span className="text-white/90 text-sm font-medium hidden sm:block">{c.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
