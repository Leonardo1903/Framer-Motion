"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Services",
      href: "/services",
    },
  ];

  const [hovered, setHovered] = useState(null);
  return (
    <div className="py-40 text-black">
      <div className="mx-auto flex max-w-xl rounded-full bg-gray-100 px-2 py-1">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="group relative w-full py-3 text-center text-xs text-neutral-500"
            href={item.href}
            key={item.name}
          >
            <span className="relative z-20 text-neutral-500 group-hover:text-neutral-400">
              {item.name}
            </span>
            {hovered === idx && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 h-full w-full rounded-full bg-black"
              ></motion.div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
