"use client";
import { useAnimate, motion, stagger } from "motion/react";
import { useEffect } from "react";

export default function AnimatedText() {
  const [scope, animate] = useAnimate();
  const text =
    "Hello, this is a test of the animated text component. It should animate each letter in sequence.";

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      },
      {
        duration: 0.5,
        ease: "easeInOut",
        delay: stagger(0.02),
      },
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);
  return (
    <div
      ref={scope}
      className="mx-auto max-w-2xl text-4xl font-bold text-white"
    >
      {/* <button
        onClick={startAnimating}
        className="transition-duration-300 cursor-pointer rounded-md bg-neutral-800 px-4 py-2 active:scale-110"
      >
        {" "}
        Start Animation
      </button> */}

      {text.split(" ").map((word, index) => (
        <motion.span
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          key={word + index}
          className="inline-block"
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
}
