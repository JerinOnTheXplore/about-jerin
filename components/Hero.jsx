"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { 
  FaShip, 
  FaGlobe, 
  FaFileInvoiceDollar, 
  FaLandmark, 
  FaBoxesPacking, 
  FaHandshake 
} from "react-icons/fa6";

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

  // Commercial & Foreign Trade Dedicated Floating Icons
  const floatingIcons = [
    { 
      icon: <FaGlobe className="text-sky-400 text-3xl md:text-4xl" />, 
      x: "8%", y: "18%", delay: 0, label: "Global Trade" 
    },
    { 
      icon: <FaShip className="text-blue-500 text-3xl md:text-4xl" />, 
      x: "82%", y: "22%", delay: 1, label: "Sea Freight & Import" 
    },
    { 
      icon: <FaFileInvoiceDollar className="text-emerald-400 text-3xl md:text-4xl" />, 
      x: "12%", y: "68%", delay: 1.5, label: "LC & Documentation" 
    },
    { 
      icon: <FaLandmark className="text-indigo-400 text-3xl md:text-4xl" />, 
      x: "78%", y: "72%", delay: 2, label: "Commercial Banking" 
    },
    { 
      icon: <FaBoxesPacking className="text-amber-400 text-3xl md:text-4xl" />, 
      x: "48%", y: "10%", delay: 2.5, label: "Customs & Freight" 
    },
    { 
      icon: <FaHandshake className="text-sky-300 text-3xl md:text-4xl" />, 
      x: "50%", y: "85%", delay: 3, label: "Supplier Coordination" 
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-base-100 pt-24 sm:pt-28 pb-3">
      {/* Floating Foreign Trade & SCM Icons */}
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute hidden md:block opacity-40 z-0 pointer-events-none"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
          title={item.label}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto">
        {/* Only client-side bubble rendering */}
        {bubbles.length > 0 &&
          bubbles.map((b, i) => (
            <motion.div
              key={i}
              className="absolute z-80 rounded-full bg-blue-400/50 blur-xs"
              style={{
                left: `${b.x}%`,
                bottom: "-10px",
                width: `${b.size}px`,
                height: `${b.size}px`,
              }}
              animate={{ y: ["0%", "-100vh"], opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: b.duration,
                repeat: Infinity,
                delay: b.delay,
                ease: "easeInOut",
              }}
            />
          ))}        

        {/* Hero Text Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I’m <span className="text-blue-400/80">Jerin</span>
          </motion.h1>

          {/* Typing Animation with SCM & Commercial Focus */}
          <TypeAnimation
            sequence={[
              "Commercial Executive | Supply Chain Management", 2000,
              "Foreign Trade & Import Operations Specialist", 2000,
              "Food & Nutrition Science Graduate", 2000,
              "Data & Research Analytics Enthusiast", 2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-base-content/80 mb-6"
          />

          {/* Updated Professional Summary */}
          <motion.p
            className="text-lg md:text-xl text-base-content leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I graduated in Food and Nutrition and have always been driven by continuous learning and multidisciplinary exploration. During my academic journey, I also gained technical skills in web development and data handling, sharpening my analytical problem-solving, attention to detail, and cross-functional coordination.

            <br /><br />

            Currently, I am working as a <strong>Commercial Executive (Supply Chain Management)</strong> at National AgriCare Import & Export Ltd., where I manage end-to-end import documentation, Letter of Credit (LC) processing, bank coordination, supplier communications, and commercial operations. Simultaneously, I am pursuing my MSc in Food and Nutrition to deepen my expertise.

            <br /><br />

            I thrive in understanding complex trade workflows and optimizing operational efficiency. My unique blend of scientific background, technical aptitude, and commercial expertise allows me to approach business challenges with adaptability and analytical precision.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="hidden md:flex lg:flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="https://www.linkedin.com/in/nasrinjerin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin size={32} className="text-blue-400/80" />
            </a>
            <a
              href="https://github.com/JerinOnTheXplore"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub size={32} className="text-blue-400/80" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hello%20Jerin&"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaEnvelope size={32} className="text-blue-400/80" />
            </a>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="btn bg-blue-400/50 text-base-content px-6 sm:px-8 py-2 sm:py-3 rounded shadow-lg hover:scale-105 transition-transform"
            >
              Download Resume
            </a>

            {/* Explore My Works Button */}
            <button
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) {
                  const yOffset = -20; 
                  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="btn bg-transparent border border-blue-400/60 text-blue-400/90 font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded shadow-lg hover:bg-blue-400/50 hover:text-base-content transition-all"
            >
              Explore My Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}