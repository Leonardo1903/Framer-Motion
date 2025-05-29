"use client";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 100], [0, -10]);
  const width = useTransform(scrollY, [0, 100], ["50%", "40%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-acetenity)" : "none",
          width,
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="fixed inset-x-0 top-0 mx-auto flex max-w-4xl items-center justify-between p-2 px-4"
      >
        <Link href="/">
          <Image
            src="/avatar.jpeg"
            alt="Avatar"
            width={100}
            height={100}
            className="h-10 w-10 rounded-full"
          />
        </Link>

        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}
