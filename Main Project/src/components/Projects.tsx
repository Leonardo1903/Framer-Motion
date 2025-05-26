"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Macbook Scroll",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
      description:
        "A mockup of a Macbook that showcases the product and its features.",
      href: "#",
    },
    {
      title: "Instant Feedback",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https:/assets.aceternity.com/animated-testimonials.webp",
      description:
        "An interactive feedback system that provides instant responses to user actions.",
      href: "#",
    },
    {
      title: "Apple Clone",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/apple-cards-carousel.png",
      description:
        "A clone of the Apple website that showcases their products and features.",
      href: "#",
    },
    {
      title: "Flight Simulator",
      src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/background-lines.webp",
      description:
        "A flight simulator that allows users to experience flying a plane in a virtual environment.",
      href: "#",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group mb-4"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                width={300}
                height={300}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
