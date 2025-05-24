"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { RocketIcon } from "lucide-react";
import {
  useMotionValueEvent,
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "motion/react";

export default function Features() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#343434", "#00193b", "#05291c"];

  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const finalValue = Math.floor(latest * backgrounds.length);
    setBackground(backgrounds[finalValue]);
  });
  return (
    <motion.div
      ref={containerRef}
      animate={{
        background,
      }}
      transition={{
        duration: 1,
        ease:'easeInOut'
      }}
      className="flex min-h-screen items-center justify-center bg-neutral-900"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
        {features.map((feature, index) => (
          <Card key={index} {...feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ index, icon, title, description, content }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  );

  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 20]);

  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <motion.div
      ref={ref}
      key={index}
      className="grid grid-cols-2 items-center gap-20"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
        className="flex flex-col gap-5 py-40"
      >
        {icon}
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <p className="text-lg text-neutral-400">{description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

const features = [
  {
    icon: <RocketIcon className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state-of-the-art AI, you can generate ultra realistic images in no time at all.",
    content: (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Feature 1"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <RocketIcon className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state-of-the-art AI, you can generate ultra realistic images in no time at all.",
    content: (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Feature 1"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <RocketIcon className="h-8 w-8 text-neutral-200" />,
    title: "Generate ultra realistic images in seconds",
    description:
      "With our state-of-the-art AI, you can generate ultra realistic images in no time at all.",
    content: (
      <div>
        <Image
          src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Feature 1"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    ),
  },
];
