"use client";
import {
  HomeIcon,
  BarChart2Icon,
  UsersIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      href: "#",
      icon: <HomeIcon className="h-6 w-6 flex-shrink-0" />,
      label: "Home",
    },
    {
      href: "#",
      icon: <BarChart2Icon className="h-6 w-6 flex-shrink-0" />,
      label: "Analytics",
    },
    {
      href: "#",
      icon: <UsersIcon className="h-6 w-6 flex-shrink-0" />,
      label: "Users",
    },
    {
      href: "#",
      icon: <SettingsIcon className="h-6 w-6 flex-shrink-0" />,
      label: "Settings",
    },
  ];

  const sidebarVariant = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const parentVariant = {
    open: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: -1,
      },
    },
  };

  const childVariant = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.nav variants={sidebarVariant} className="flex h-screen">
        <div
          className={`h-full ${
            isOpen ? "w-64" : "w-16"
          } border-r p-4 transition-all duration-300`}
        >
          <div className="mb-8 flex items-center justify-between">
            {isOpen && (
              <h2 className="text-xl font-bold text-black">Dashboard</h2>
            )}
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            >
              {isOpen ? (
                <ChevronLeftIcon className="h-5 w-5 text-black" />
              ) : (
                <ChevronRightIcon className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
          <nav>
            <motion.ul variants={parentVariant} className="space-y-2">
              {links.map((link, index) => (
                <motion.li variants={childVariant} key={index}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {link.icon}
                    {isOpen ? (
                      <span className="text-sm font-medium">{link.label}</span>
                    ) : (
                      <span className="text-sm font-medium opacity-0">
                        {link.label}
                      </span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
}
