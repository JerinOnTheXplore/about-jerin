"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaJs, FaGithub, FaFileContract, FaBoxes, FaUniversity, FaShip,FaFileInvoiceDollar,FaFolderOpen} from "react-icons/fa";

import { 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiFirebase, 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiPrisma,
  

} from "react-icons/si";

export default function Skills() {
  const skills = {
    "Commercial & Supply Chain": [
      { name: "Import Operations", icon: <FaShip className="text-blue-400" /> },
      { name: "LC Processing", icon: <FaFileContract className="text-amber-400" /> },
      { name: "Bank Coordination", icon: <FaUniversity className="text-emerald-400" /> },
      { name: "Procurement", icon: <FaBoxes className="text-purple-400" /> },
      { name: "PI & IMP Verification", icon: <FaFileInvoiceDollar className="text-teal-400" /> },
      { name: "Commercial Docs", icon: <FaFolderOpen className="text-orange-400" /> },
    ],
    "Frontend Development": [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-base-content" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Firebase Auth", icon: <SiFirebase className="text-yellow-400" /> },
      { name: "GitHub & VS Code", icon: <FaGithub className="text-base-content" /> },
    ],
    "Backend & Databases": [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Prisma", icon: <SiPrisma className="text-teal-400" /> },
    ]
    
  };

  return (
    <section id="skills" className="py-20 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Section Title */}
        <div data-aos="fade-up">
          <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
            Technical & Domain Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">Skills & Capabilities</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400/20 via-blue-400/80 to-blue-400/20 mx-auto rounded-full mt-4 mb-12"></div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {Object.entries(skills).map(([category, items], idx) => (
            <div
              key={category}
              className="bg-base-200/50 backdrop-blur-md rounded-2xl p-6 border border-base-content/10 shadow-sm hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div>
                <h3 className="text-xl font-bold mb-5 pb-3 border-b border-base-content/10 text-blue-400 flex items-center justify-between">
                  <span>{category}</span>
                  <span className="text-xs bg-blue-400/10 text-blue-400 px-2 py-0.5 rounded font-normal border border-blue-400/20">
                    {items.length} Skills
                  </span>
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 bg-base-100/70 p-3 rounded-xl border border-base-content/5 hover:border-blue-400/30 hover:translate-x-1 transition-all duration-200"
                    >
                      <div className="text-2xl shrink-0">{skill.icon}</div>
                      <span className="text-sm font-medium text-base-content/90">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning & Domain Synthesis Summary Box */}
        <div
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-base-200/50 border border-blue-400/20 text-left max-w-4xl mx-auto backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="text-xl font-bold text-base-content mb-2 flex items-center gap-2">
  ✨ Professional Competencies & Commercial Insight
</h3>
          <p className="text-sm sm:text-base text-base-content/80 leading-relaxed">
  With a strong academic background in Food & Nutrition and a transition into <strong className="text-blue-400">Foreign Trade and Commercial Operations</strong>, I hold hands-on professional experience in <strong className="text-blue-400">end-to-end Import Operations, LC Processing, and Supplier Management</strong>. My diverse background, along with prior technical exposure, equips me with a unique analytical mindset and adaptiveness in real-world corporate environments.
</p>
        </div>

      </div>
    </section>
  );
}