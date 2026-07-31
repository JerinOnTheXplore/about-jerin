"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaCode, FaReact, FaBriefcase } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const TechTimeline = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const timelineData = [
    {
      year: "2023",
      title: "Foundations of Web Development",
      description:
        "Started my journey into software engineering by mastering core web technologies including HTML5, CSS3, JavaScript (ES6+), and understanding modern UI layout design principles.",
      badge: "Core Basics",
      icon: <FaCode className="text-orange-400 text-lg md:text-xl" />,
    },
    {
      year: "2024",
      title: "Frontend Mastery & MERN Stack",
      description:
        "Advanced into component-driven architecture with React.js, Tailwind CSS, and Firebase Authentication. Built several dynamic single-page web applications with Node.js and MongoDB backends.",
      badge: "React & MERN",
      icon: <FaReact className="text-sky-400 text-lg md:text-xl" />,
    },
    {
      year: "2025",
      title: "Next.js & Full-Stack Capabilities",
      description:
        "Expanded technical skill set into Next.js, TypeScript, PostgreSQL, and Prisma. Developed production-ready role-based web systems and focused on code optimization and performance.",
      badge: "Next.js & Full-Stack",
      icon: <SiNextdotjs className="text-base-content text-lg md:text-xl" />,
    },
    {
      year: "2026 – Present",
      title: "Commercial Operations & Tech Synergy",
      description:
        "Stepped into professional Executive Commercial roles handling Import Operations, LCs, and Banking Workflows, while actively engineering complex frontend dashboards and enterprise solutions.",
      badge: "Domain Expertise",
      icon: <FaBriefcase className="text-blue-400 text-lg md:text-xl" />,
    },
  ];

  return (
    <section
      id="timeline"
      className="py-24 bg-base-100 text-base-content relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
            Evolution & Milestones
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Learning & Growth Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400/20 via-blue-400/80 to-blue-400/20 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto leading-relaxed">
            A chronological look at how my passion for Frontend Engineering evolved from basic web fundamentals into advanced full-stack capabilities and real-world corporate execution.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-400/30 ml-4 sm:ml-8 md:ml-12 space-y-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative pl-6 sm:pl-8 group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Timeline Bullet Node with Glow */}
              <div className="absolute -left-[17px] sm:-left-[21px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-base-200 rounded-xl border-2 border-blue-400/80 shadow-md shadow-blue-400/20 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300 z-10">
                {item.icon}
              </div>

              {/* Experience Card */}
              <div className="bg-base-200/50 backdrop-blur-md border border-base-content/10 rounded-2xl p-5 sm:p-7 shadow-sm hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-300 relative">
                
                {/* Header: Year, Title & Badge */}
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                      {item.year}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-base-content group-hover:text-blue-400 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-blue-400/10 text-blue-400 border border-blue-400/20">
                    {item.badge}
                  </span>
                </div>

                {/* Description Text */}
                <p className="text-xs sm:text-sm md:text-base text-base-content/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Closing Note */}
        <div
          className="mt-16 text-center text-xs sm:text-sm text-base-content/60 italic"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Continually exploring modern frameworks, performance optimization, and scalable web architecture.
        </div>

      </div>
    </section>
  );
};

export default TechTimeline;