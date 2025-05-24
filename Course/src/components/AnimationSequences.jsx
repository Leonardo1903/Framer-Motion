"use client";
import React from "react";
import { useAnimate, motion } from "motion/react";

export default function AnimationSequences() {
  const [scope, animate] = useAnimate();

  const sequence = [
    [
      ".loader",
      {
        opacity: [0, 1],
        width: "2rem",
      },
      {
        duration: 0.1,
        ease: "easeInOut",
      },
    ],
    [
      ".loader",
      {
        rotate: 360 * 4,
      },
      {
        duration: 2,
      },
    ],
    [
      ".loader",
      {
        opacity: [1, 0],
        width: "0rem",
      },
      {
        duration: 0.1,
        ease: "easeInOut",
      },
    ],
    [
      ".text",
      {
        opacity: 0,
      },
      {
        duration: 0.1,
        ease: "easeInOut",
      },
    ],
    [
      "button",
      {
        width: "5rem",
        borderRadius: "1000px",
        backgroundColor: "var(--color-green-500)",
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    ],
    [
      "button",
      {
        opacity: 1,
        scale: [1, 1.2, 0.8, 1],
      },
      {
        duration: 0.5,
        ease: "easeInOut",
      },
    ],
    [
      ".check-icon",
      {
        opacity: [0, 1],
      },
      {
        duration: 0.1,
        ease: "easeInOut",
      },
    ],
    [
      ".check-icon path",
      {
        pathLength: 1,
      },
      {
        duration: 0.3,
        ease: "easeInOut",
      },
    ],
  ];

  const startAnimating = async () => {
    animate(sequence);
  };

  return (
    <div
      ref={scope}
      className="relative flex h-20 w-60 items-center justify-center"
    >
      <motion.button
        onClick={startAnimating}
        style={{
          width: "30rem",
        }}
        className="flex h-20 cursor-pointer items-center justify-center rounded-lg bg-purple-500 font-medium text-white"
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="loader h-5 w-5 text-white"
          initial={{
            width: "0rem",
          }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 3a9 9 0 1 0 9 9" />
        </motion.svg>
        <motion.span className="text">Purchase now ($169)</motion.span>
      </motion.button>

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff"
        strokeWidth={3}
        className="check-icon pointer-events-none absolute inset-0 z-50 m-auto h-8 w-8"
        style={{
          opacity: 0,
        }}
      >
        <motion.path
          initial={{
            pathLength: 0,
          }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeInOut",
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
}
