// src/components/SectionWithBackground.jsx
import React from "react";
import AnimatedBackground from "./Bg";

export default function SectionWithBackground({ children }) {
  return (
    <div className="relative py-12">
      {/* Background behind the section */}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>

      {/* Section content */}
      <div className="relative max-w-5xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}
