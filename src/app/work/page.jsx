"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaBriefcase } from "react-icons/fa";

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
      role: "Executive (Commercial) – Supply Chain Management",
      company: "NATIONAL AGRICARE IMPORT AND EXPORT LTD.",
      address: "CGDL SONARGAON TOWER,8,9,& 10/3, Free School Street, Kathalbagan, Dhaka, Bangladesh",
      duration: "June 10, 2026 – Present",
      responsibilities: [
        "Import documentation handling (LC, PI, IMP, TM forms)",
        "Bank coordination for LC processing and submission",
        "Procurement and supplier communication support",
        "Margin, voucher, and commercial file preparation",
        "Coordination with internal teams for shipment and documentation",
      ],
    },
  ];

  return (
    <section
      id="work"
      className="bg-base-100 text-base-content pt-20 flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">

        {/* heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-2"
          data-aos="fade-up"
        >
          Work Experience
        </h2>

        <div
          className="w-52 sm:w-56 md:w-64 h-1 bg-blue-400/80 mx-auto rounded mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 top-0 w-1 bg-blue-400/80 h-full"></div>

          <div className="flex flex-col gap-10">
            {workData.map((work, i) => (
              <div
                key={i}
                className="flex items-start gap-6 relative pl-10"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                {/* icon */}
                <div className="absolute -left-1 top-2 bg-blue-400/80 rounded w-5 h-5 flex items-center justify-center">
                  <FaBriefcase className="text-white w-3 h-3" />
                </div>

                {/* work card */}
                <div className="bg-base-300 rounded p-6 border-1 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-lg transition-all duration-300 flex-1">
                  
                  <h3 className="text-xl font-semibold mb-1">
                    {work.role}
                  </h3>

                  <p className="text-base-content/80 font-medium">
                    {work.company}
                  </p>
                 <p className="text-base-content/70 mt-1 mb-3">
                    <span className="font-medium">Address:</span>{" "}
                    {work.address}
                  </p>
                  <p className="text-base-content/70 mt-1 mb-3">
                    <span className="font-medium">Duration:</span>{" "}
                    {work.duration}
                  </p>

                  {/* responsibilities */}
                  <ul className="list-disc ml-5 text-base-content/70 space-y-1">
                    {work.responsibilities.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* note */}
        <div
          className="mt-10 text-base-content/70 text-sm leading-relaxed text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p>
            This role has provided me with hands-on experience in{" "}
            <span className="font-medium">import operations, LC processing, and commercial documentation</span>, 
            strengthening my understanding of real-world supply chain workflows.
          </p>
        </div>
      </div>
    </section>
  );
}