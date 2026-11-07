"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const educationData = [
    {
      degree: "Master of Business Administration (MBA) (Ongoing)",
      institution: "University of Scholars",
      duration: "October 2026 – Present",
      isCurrent: true,
    },
    {
      degree: "B.Sc. (Hons) in Food & Nutrition",
      institution: "Govt. College of Applied Human Science",
      duration: "March 8, 2022 – April 22, 2026",
      isCompleted: true,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Begum Badrunnesa Govt. Girls College",
      duration: "2020",
      group: "Science",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kamrunnesa Govt. Girls High School",
      duration: "2018",
      group: "Science",
    },
  ];

  return (
    <section
      id="education"
      className="bg-base-100 text-base-content py-20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
            Academic Qualification
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400/20 via-blue-400/80 to-blue-400/20 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-400/30 ml-4 sm:ml-8 md:ml-12 space-y-8">
          {educationData.map((edu, i) => (
            <div
              key={i}
              className="relative pl-6 sm:pl-8 group"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] sm:-left-[21px] top-1.5 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-base-200 rounded-xl border-2 border-blue-400/80 shadow-md shadow-blue-400/20 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300 z-10">
                <FaGraduationCap className="text-blue-400 text-sm sm:text-base" />
              </div>

              {/* Education Card */}
              <div className="bg-base-200/50 backdrop-blur-md border border-base-content/10 rounded-2xl p-5 sm:p-7 shadow-sm hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/10 transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-base-content group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-blue-400/90 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Duration Badges */}
                  <span className={`text-xs font-semibold px-3 py-1 rounded-md border ${
                    edu.isCurrent 
                      ? "bg-blue-400/10 text-blue-400 border-blue-400/20 animate-pulse" 
                      : edu.isCompleted 
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                      : "bg-base-300 text-base-content/70 border-base-content/10"
                  }`}>
                    {edu.duration}
                  </span>
                </div>

                {/* Additional Details */}
                {edu.group && (
                  <div className="text-xs sm:text-sm text-base-content/70 mt-3 pt-3 border-t border-base-content/5 flex flex-wrap gap-4">
                    <span>
                      <strong className="text-base-content/90">Group:</strong> {edu.group}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Synthesis Note */}
        <div
          className="mt-14 p-6 rounded-2xl bg-base-200/50 border border-blue-400/20 text-center max-w-3xl mx-auto backdrop-blur-md"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-xs sm:text-sm md:text-base text-base-content/80 leading-relaxed">
            🎓 Pursuing advanced postgraduate studies in <strong className="text-blue-400">Food & Nutrition</strong> while continuously refining my technical abilities. This academic journey enhances my research capabilities, data precision, and analytical mindset—strengths I directly leverage in modern web application design and complex operational logic.
          </p>
        </div>

      </div>
    </section>
  );
}