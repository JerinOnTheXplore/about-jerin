"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiExpress, SiMongodb, SiTailwindcss, SiFirebase, } from "react-icons/si";

export default function Skills() {
  const skills = {
    Frontend: [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
    Tools: [
      { name: "GitHub", icon: <FaGithub className="text-base-content" /> },
  { name: "VS Code", icon: <TbBrandVscode className="text-blue-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      
    ],
  };

  return (
    <section id="skills" className="py-20 bg-base-100 text-base-content min-h-screen">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h2>
        <div className="w-24 sm:w-36 md:w-40 h-1 bg-blue-400 mx-auto rounded"></div>
        <motion.p
          className="text-lg md:text-xl text-base-content/70 mb-12 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          My Tech Stack & Expertise by Categories
        </motion.p>

        {/* Skills Categories */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={idx}
              className="bg-base-200 rounded p-6 shadow-md flex-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
               viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 bg-base-100 rounded p-3 w-24 shadow hover:scale-105 transition-transform"
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
