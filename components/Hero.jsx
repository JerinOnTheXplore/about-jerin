"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";

export default function Hero() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      size: Math.random() * 12 + 6,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 6,
    }));
    setBubbles(generated);
  }, []);

  const floatingIcons = [
    { icon: <FaReact className="text-sky-400 text-3xl" />, x: "10%", y: "20%", delay: 0 },
    { icon: <FaNodeJs className="text-green-500 text-3xl" />, x: "80%", y: "25%", delay: 1 },
    { icon: <SiMongodb className="text-green-600 text-3xl" />, x: "15%", y: "70%", delay: 2 },
    { icon: <SiNextdotjs className="text-base-content text-3xl" />, x: "75%", y: "75%", delay: 3 },
    { icon: <SiExpress className="text-base-content text-3xl" />, x: "45%", y: "10%", delay: 4 },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-base-100">
      {/*  onlyclient-side e bubble render hhoy... */}
      {bubbles.length > 0 &&
        bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute z-80 rounded-full bg-blue-900/90 dark:bg-blue-500/30 blur-xs "
            style={{
              left: `${b.x}%`,
              bottom: "-10px",
              width: `${b.size}px`,
              height: `${b.size}px`,
            }}
            animate={{ y: ["0%", "-100vh"], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
          />
        ))}

      {/* floating tech icon.. */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: item.y, left: item.x }}
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* herotext */}
      <div className="relative z-10 max-w-2xl px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="text-blue-500/60 dark:text-blue-400/80">Jerin</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-base-content leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I’m a <span className="font-semibold">frontend-focused MERN stack developer</span> who loves building modern, responsive web applications using React, Node.js, Express.js, 
          and MongoDB. I’ve also built a few projects with Next.js and currently exploring it deeply.
        </motion.p>

        {/* social -icons */}
        <motion.div
          className="flex justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="https://www.linkedin.com/in/nasrinjerin" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaLinkedin size={32} className="text-blue-500/60 dark:text-blue-400/80" />
          </a>
          <a href="https://github.com/JerinOnTheXplore" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaGithub size={32} className="text-blue-500/60 dark:text-blue-400/80" />
          </a>
          <a href="mailto:jerinjerin101325@gmail.com" className="hover:scale-110 transition-transform">
            <FaEnvelope size={32} className="text-blue-500/60 dark:text-blue-400/80" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
