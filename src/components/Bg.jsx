// AnimatedBackground.jsx
import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="w-full h-full animate-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-[length:400%_400%] opacity-30"></div>
    </div>
  );
}
