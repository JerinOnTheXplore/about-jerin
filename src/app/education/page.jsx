"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "B.Sc. (Hons) in Food & Nutrition",
      institution: "Govt. College of Applied Human Science",
      duration: "Feb 2022 – Present",
      expected: "2026",
    },
    {
      degree: "HSC",
      institution: "Begum Badrunnesa Govt. Girls College",
      year: "2020",
      
    },
    {
      degree: "SSC",
      institution: "Kamrunnesa Govt. Girls High School",
      year: "2018",
      
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-base-100 text-base-content py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* heading.. */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div className="w-40 sm:w-40 md:w-56 h-1 bg-blue-400 mx-auto rounded mb-12"></div>

        {/* timeline.. */}
        <div className="relative">
  <div className="absolute left-5 top-0 w-1 bg-blue-400 h-full"></div>
  <div className="flex flex-col gap-10">
    {educationData.map((edu, i) => (
      <div key={i} className="flex items-start gap-6 relative pl-10">
        <div className="absolute -left-1 top-2 bg-blue-400 rounded w-5 h-5 flex items-center justify-center">
          <FaGraduationCap className="text-white w-3 h-3" />
        </div>
        {/* shudhu edu card e motion.. */}
        <motion.div
          className="bg-base-200 rounded p-6 shadow-md hover:shadow-lg transition-all duration-300 flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
          <p className="text-base-content/80 font-medium">{edu.institution}</p>
          {edu.year && (
            <p className="text-base-content/70 mt-1">
              <span className="font-medium">Year:</span> {edu.year} 
            </p>
          )}
          {edu.duration && (
            <p className="text-base-content/70 mt-1">
              <span className="font-medium">Duration:</span> {edu.duration} |{" "}
              <span className="font-medium">Expected Graduation:</span> {edu.expected}
            </p>
          )}
        </motion.div>
      </div>
    ))}
  </div>
</div>
        {/* note.. */}
        <div className="mt-10 text-base-content/70 text-sm leading-relaxed text-center">
          <p>
            While my academic background is in <span className="font-medium">Food and Nutrition</span>, my strong interest in technology inspired me to explore <span className="font-medium">web development</span> and build full-stack projects alongside my studies.
          </p>
        </div>
      </div>
    </section>
  );
}
