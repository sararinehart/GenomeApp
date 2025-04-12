"use client";
import React from 'react';
import { motion } from 'framer-motion';

const GenomeCharacter = ({ 
  size = 200, 
  mood = 'happy'
}) => {
  // Animation variants
  const characterVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Eyes animations based on mood
  const eyesVariants = {
    happy: {
      scaleY: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }
    },
    thinking: {
      x: [0, 3, 0, -3, 0],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    },
    excited: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.3,
        repeat: Infinity
      }
    },
    surprised: {
      scale: 1.2
    }
  };

  return (
    <motion.div
      style={{ width: size, height: size }}
      initial="initial"
      animate={["animate", "pulse"]}
      variants={characterVariants}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="#edbcb2"
        />
        
        {/* Electron orbits */}
        <motion.g
          animate={{
            rotate: [0, 360],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <ellipse
            cx="100"
            cy="100"
            rx="70"
            ry="25"
            stroke="#222222"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="170"
            cy="100"
            r="5"
            fill="#d44b39"
          />
        </motion.g>
        
        {/* Character face */}
        <g>
          {/* Eyes */}
          <motion.ellipse
            cx="85"
            cy="95"
            rx="10"
            ry="15"
            fill="#222222"
            variants={eyesVariants}
            animate={mood}
          />
          <motion.ellipse
            cx="115"
            cy="95"
            rx="10"
            ry="15"
            fill="#222222"
            variants={eyesVariants}
            animate={mood}
          />
          
          {/* Eye highlights */}
          <circle cx="88" cy="90" r="3" fill="white" />
          <circle cx="118" cy="90" r="3" fill="white" />
          
          {/* Nose/blush */}
          <circle cx="100" cy="110" r="5" fill="#d44b39" />
          
          {/* Mouth */}
          <path
            d="M 85,125 Q 100,135 115,125"
            stroke="#222222"
            strokeWidth="2"
            fill="none"
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default GenomeCharacter;
