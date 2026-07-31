"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaRegCheckCircle } from "react-icons/fa";

export default function WorkExperience() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const workData = [
    {
      role: "Commercial Executive",
      department: "Supply Chain Management (Foreign Trade)",
      company: "NATIONAL AGRICARE IMPORT AND EXPORT LTD.",
      address: "CGDL SONARGAON IMTIAZ TOWER, 8,9 & 10/3, Free School Street, Kathalbagan, Dhaka, Bangladesh",
      duration: "June 10, 2026 – Present",
      type: "Full-Time",
      skills: ["Import Operations", "LC Processing", "PI & IMP Verification", "Commercial Banking", "Supplier Liaison", "Margin & Vouchers"],
      responsibilities: [
        "End-to-end management of import documentation, including LC, PI, IMP, and TM forms.",
        "Direct coordination with commercial banks for LC issuance, amendments, and document submission.",
        "Facilitating overseas procurement support and managing effective supplier communications.",
        "Meticulous preparation of commercial files, margin vouchers, and shipment records.",
        "Cross-functional collaboration with internal logistics and operational teams to streamline shipments."
      ],
    },
  ];

  return (
    <section
      id="work"
      className="bg-base-100 text-base-content py-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">

        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-semibold tracking-widest text-xs uppercase bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 tracking-tight">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400/20 via-blue-400/80 to-blue-400/20 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-400/40 space-y-12">
          {workData.map((work, i) => (
            <div
              key={i}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[49px] top-1 bg-blue-400/80 text-white p-3 rounded-xl shadow-lg shadow-blue-400/20 group-hover:scale-110 transition-transform duration-300">
                <FaBriefcase className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="bg-base-200/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-base-content/10 shadow-sm hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-400/10 transition-all duration-300">
                
                {/* Header: Role & Type */}
                <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-base-content group-hover:text-blue-400 transition-colors">
                      {work.role}
                    </h3>
                    <p className="text-blue-400/90 font-medium text-sm sm:text-base mt-0.5">
                      {work.department}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/30">
                    {work.type}
                  </span>
                </div>

                {/* Company & Details Section */}
                <div className="space-y-2 text-xs sm:text-sm text-base-content/80 mt-4 mb-6 pb-5 border-b border-base-content/10">
                  <div className="flex items-start gap-2 font-semibold text-base-content">
                    <FaBuilding className="text-blue-400/80 mt-0.5 shrink-0" />
                    <span>{work.company}</span>
                  </div>
                  <div className="flex items-start gap-2 leading-relaxed">
                    <FaMapMarkerAlt className="text-blue-400/70 mt-0.5 shrink-0" />
                    <span><strong className="font-medium">Address:</strong> {work.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-400/70 shrink-0" />
                    <span><strong className="font-medium">Duration:</strong> {work.duration}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <h4 className="text-xs font-bold uppercase tracking-widest text-base-content/50 mb-4">
                  Core Responsibilities
                </h4>
                <ul className="space-y-3 mb-6 text-sm sm:text-base text-base-content/80">
                  {work.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FaRegCheckCircle className="text-blue-400/80 mt-1 shrink-0 text-sm" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Domain Skill Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {work.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1.5 rounded-lg bg-base-300/80 text-base-content/90 font-medium border border-base-content/5 hover:border-blue-400/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Closing Summary Box */}
        <div
          className="mt-14 p-6 rounded-2xl bg-blue-400/5 border border-blue-400/20 text-center text-sm leading-relaxed text-base-content/80 max-w-2xl mx-auto backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            ✨ <span className="font-semibold text-blue-400">Key Takeaway:</span> Experienced in handling foreign trade documentations, bank coordination for LCs, and commercial workflows to optimize international supply chain operations.
          </p>
        </div>

      </div>
    </section>
  );
}