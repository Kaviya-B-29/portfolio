import React from "react";
import { motion } from "framer-motion";

export default function SparklingArc() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Thin curved arc */}
        <path
          id="arcPath"
          d="M 60 40 A 90 90 0 0 1 160 120"
          stroke="url(#arcGradient)"
          strokeWidth="2"
          fill="none"
        />

        {/* Gradient line */}
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>

        {/* Shooting star sparkle */}
        <motion.circle
          r="3"
          fill="white"
          filter="drop-shadow(0 0 6px white)"
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <animateMotion dur="2s" repeatCount="indefinite">
            <mpath href="#arcPath" />
          </animateMotion>
        </motion.circle>

      </svg>
    </div>
  );
}
