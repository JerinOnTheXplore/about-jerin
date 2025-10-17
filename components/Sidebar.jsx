"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import {
  FaHome,
  FaUser,
  FaTools,
  FaGraduationCap,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

export default function Sidebar() {
  const [active, setActive] = useState("/");

  const navItems = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaUser /> },
    { name: "Skills", href: "/skills", icon: <FaTools /> },
    { name: "Projects", href: "/projects", icon: <GoProjectSymlink /> },
    { name: "Education", href: "/education", icon: <FaGraduationCap /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content relative flex flex-col">
      {/* desktop */}
       <aside className="hidden md:hidden lg:flex fixed left-0 top-0 h-screen w-1/5 lg:w-1/5 z-40 items-center justify-center bg-base-100">
        <div className="flex flex-col items-center text-center p-8 rounded-3xl px-6 backdrop-blur-2xl bg-base-300 border border-blue-400/20 shadow-[0_0_30px_rgba(30,64,175,0.1)]">
          <div className="relative w-60 h-70 rounded-3xl overflow-hidden border-[3px] border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)] mb-6">
            <Image
              src="/images/my-photo.jpg"
              alt="Jerin"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-2xl font-semibold tracking-wide">
           Jerin
          </h2>
          <p className="text-sm font-bold text-blue-500/60 dark:text-blue-500/90 mt-2">Frontend Developer</p>
          <p>jerinjerin101325@gmail.com</p>
         <hr className="border-base-content w-2/3 mt-5" />
          <div className="mt-6 flex gap-4 text-base-content">
          {/* social -icons */}
                  <div
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <a href="https://www.linkedin.com/in/nasrinjerin" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FaLinkedin size={32} className="text-base-content" />
                    </a>
                    <a href="https://github.com/JerinOnTheXplore" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FaGithub size={32} className="text-base-content" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hello%20Jerin&"
                    target="_blank"
                    rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <FaEnvelope size={32} className="text-base-content" />
                    </a>
                  </div> 
          </div> 
        </div>
      </aside>
      {/* Desktop */}
      <nav className="hidden md:hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 flex-col bg-blue-900/90 dark:bg-blue-500/30 text-base-content rounded-2xl shadow-lg p-3 space-y-3 z-60">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.href)}
            data-tooltip-id="nav-tooltip"
            data-tooltip-content={item.name}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
              active === item.href
                ? "bg-blue-400/90 scale-80 shadow-md"
                : "hover:bg-blue-500/70"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
          </Link>
        ))}
      </nav>      
      {/* Top Fixed Rounded */}
      <nav className="lg:hidden fixed top-3 left-1/2 -translate-x-1/2 flex justify-around bg-blue-900/90 dark:bg-blue-500/30 text-base-content px-2 py-2 rounded-2xl shadow-lg w-[90%] max-w-sm z-60">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setActive(item.href)}
            data-tooltip-id="nav-tooltip"
            data-tooltip-content={item.name}
            className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
              active === item.href
                ? "bg-blue-400/90 scale-80 shadow-md"
                : "hover:bg-blue-500/70"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
