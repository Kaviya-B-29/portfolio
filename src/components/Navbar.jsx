import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = ["Home", "Projects", "Skills", "About", "Contact"];

  return (
    <nav className="w-20 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 flex flex-col items-center py-6 space-y-6 fixed h-full">
      <div className="text-xl font-bold">Kaviya</div>
      <div className="flex flex-col space-y-4 mt-10">
        {links.map((link) => (
          <NavLink
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
            className={({ isActive }) =>
              `transform hover:scale-110 transition-transform ${
                isActive ? "text-blue-500 font-semibold" : "text-gray-600 dark:text-gray-300"
              }`
            }
          >
            {link}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
