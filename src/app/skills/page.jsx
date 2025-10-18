"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaReact, FaNodeJs, FaJs, FaGithub } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { SiExpress, SiMongodb, SiTailwindcss, SiFirebase } from "react-icons/si";

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
    <section id="skills" className="pt-20 bg-base-100 text-base-content min-h-screen ">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h2>
        <div className="w-24 sm:w-36 md:w-40 h-1 bg-blue-400/80 mx-auto rounded"></div>
        <motion.p
          className="text-lg md:text-xl text-base-content/70 mb-12 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          My Tech Stack & Expertise by Categories
        </motion.p>

        {/* Skills Categories */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#3b82f6"
                glarePosition="all"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className={`rounded p-6 flex-1 min-h-[300px] shadow-md ${
                  idx === 1
                    ? "bg-blue-400/50" // middle card
                    : "bg-base-300"     // first & last
                }`}
              >
                <h3 className="text-xl font-semibold mb-4 text-base-content">{category}</h3>
              <div className="grid grid-cols-2 min-h-[250px] grid-rows-2 gap-4 md:gap-8 justify-items-center">
  {items.map((skill, i) => (
    <div
      key={i}
      className={`flex flex-col items-center gap-2 bg-base-100 rounded p-3 shadow w-24`}
      style={i === 2 ? { gridColumn: '1 / span 2' } : {}}
    >
      <div className="text-4xl">{skill.icon}</div>
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  ))}
</div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
