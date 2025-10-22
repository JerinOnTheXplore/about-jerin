"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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

  const ref = useRef(null);
  const [glow, setGlow] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 0  fully out of view, 1 fully visible
      let visibility = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (rect.height + windowHeight))
      );
      setGlow(visibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // compute box-shadow based on glow intensity
  const boxShadow = `0 0 ${25 * glow}px rgba(59,130,246,${0.5 * glow})`;

  return (
    <section id="skills" className="pt-20 md:pt-6 bg-base-100 text-base-content">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
        <div className="w-24 sm:w-36 md:w-40 h-1 bg-blue-400/80 mx-auto rounded"></div>
        <p className="text-lg md:text-xl text-base-content/70 mb-12 mt-2">
          My Tech Stack & Expertise by Categories
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center" ref={ref}>
          {Object.entries(skills).map(([category, items], idx) => (
            <Tilt
              key={category}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#3b82f6"
              glarePosition="all"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className={`flex-1`}
            >
              {/* smooth scroll-based glow */}
              <motion.div
                style={{ boxShadow }}
                className={`rounded p-6 min-h-[300px] shadow-md ${
                  idx === 1 ? "bg-blue-400/50" : "bg-base-300"
                }`}
                 initial={{ opacity: 0, y: 40 }} // start below
                 whileInView={{ opacity: 1, y: 0}} // jump up
                viewport={{ once: false, amount: 0.3 }} // 30% visible triggers animation
                transition={{ duration: 0.4, delay: idx * 0.2 }} // stagger effect
              >
                <h3 className="text-xl font-semibold mb-4 text-base-content">{category}</h3>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-8 justify-items-center min-h-[250px]">
                  {items.map((skill, i) => (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 bg-base-100 rounded p-3 shadow w-24"
                      style={i === 2 ? { gridColumn: "1 / span 2" } : {}}
                    >
                      <div className="text-4xl">{skill.icon}</div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      {/* Achievements  Section */}
<div
  data-aos="fade-up"
  data-aos-duration="1000"
  className="mt-16 max-w-5xl mx-auto bg-base-300 p-6 md:p-10 rounded shadow-[0_0_30px_rgba(59,130,246,0.3)]"
>
  <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Achievements & Certifications
  </h3>
  <div className="w-32 md:w-48 h-1 bg-blue-400/80 mx-auto mb-8 rounded"></div>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6">
    {/* Certificate Image */}
    <div
      data-aos="zoom-in"
      data-aos-delay="200"
      className="w-full md:w-1/2 flex justify-center"
    >
      <img
        src="https://i.ibb.co.com/PZCgV3dT/certificate.png"
        alt="Programming Hero Certificate"
        className="rounded-xl shadow-lg border border-blue-400/60 hover:scale-[1.03] transition-transform duration-300"
      />
    </div>

    {/* Certificate Details */}
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="w-full md:w-1/2 text-center md:text-left"
    >
      <h4 className="text-xl font-semibold mb-2 text-blue-400/80">
        Programming Hero - Complete Web Development Course
      </h4>
      <p className="text-base-content/80 leading-relaxed mb-4">
        Successfully completed web development program focused on
        JavaScript, React, Node.js, Express.js, and MongoDB. Built multiple
        hands on projects showcasing MERN stack proficiency.
      </p>
      <a
        href="https://drive.google.com/file/d/1Fr72Ngd949uWD5woymy1WgNq0u3Ds02Q/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="btn bg-blue-400/50 text-base-content px-6 sm:px-8 py-2 sm:py-3 rounded shadow-lg hover:scale-105 transition-transform"
      >
        View Certificate
      </a>
    </div>
  </div>
</div> 
      </div>
    </section>
  );
}
