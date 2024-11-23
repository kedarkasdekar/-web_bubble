import React from 'react';
import { motion } from 'framer-motion';

function Bubble({ size, x, y, duration }) {
  return (
    <motion.div
      className="absolute rounded-full bg-red-500"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        opacity: 0.4,
        filter: 'blur(1px)',
      }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: duration * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default Bubble;