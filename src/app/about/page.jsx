"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section
      id="about"
      className="py-16 md:py-20 bg-base-100 text-base-content relative overflow-hidden"
    >
      {/* Decorative Background Text */}
      <motion.h2
        className="absolute text-[5rem] sm:text-[7rem] md:text-[12rem] font-extrabold text-base-300/10 top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About Me
          </motion.h1>
          <div className="w-20 sm:w-24 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3  items-center space-y-3">
          {/* Left: Personal Details */}
          <motion.div
            className="w-full  h-70  sm:h-70 bg-base-300 md:h-120  p-6 sm:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-500/30 dark:text-blue-700/90">
              Personal Details
            </h3>
            <table className="w-full text-base sm:text-base leading-loose">
              <tbody>
                <tr>
                  <td className="font-semibold pr-3 sm:pr-4">Full Name:</td>
                  <td>Mst. Nasrin Howlader Jerin</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-3 sm:pr-4">Email:</td>
                  <td className="break-all">jerinjerin101325@gmail.com</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-3 sm:pr-4">Nationality:</td>
                  <td>Bangladeshi</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-3 sm:pr-4">Languages:</td>
                  <td>English, Bangla</td>
                </tr>
                <tr>
                  <td className="font-semibold pr-3 sm:pr-4">Address:</td>
                  <td>Dhaka, Bangladesh</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* middle: profile image */}
          <motion.div
            className="flex justify-center order-first lg:order-none"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-40 h-52 sm:w-56 sm:h-70 md:w-86 md:h-120 rounded overflow-hidden ring-4 ring-blue-900/90 dark:ring-500-30 shadow-xl">
              <Image
                src="/images/my-photo.jpg"
                alt="Jerin"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: About Text Slider */}
          <motion.div
            className="w-full  h-70  sm:h-70 bg-base-300 md:h-120 rounded p-6 sm:p-8 shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Slider {...settings}>
              <div>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg">
  I’m a passionate{" "}
  <span className="font-bold text-blue-500/30 dark:text-blue-700/90">
    Frontend Developer
  </span>
  , dedicated to crafting visually engaging and highly functional web experiences.  
  My core expertise lies in building dynamic and responsive interfaces with{" "}
  <span className="font-semibold">React</span>, managing server-side logic with{" "}
  <span className="font-semibold">Node.js</span> and{" "}
  <span className="font-semibold">Express.js</span>, and maintaining efficient data
  handling using <span className="font-semibold">MongoDB</span>.  
  <br />
  Recently, I’ve started exploring <span className="font-semibold">Next.js</span> to deepen my 
  understanding of modern React frameworks, server-side rendering, and SEO-friendly development.  
</p>

              </div>
              <div>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg">
  My coding journey began quite unexpectedly — what started as a casual curiosity, 
  watching YouTube tutorials and experimenting with small beginner projects, soon 
  turned into something much deeper.  
  <br />
  Over time, that early curiosity evolved into a genuine passion for creating{" "}
  <span className="font-semibold text-blue-500/30 dark:text-blue-700/90">scalable, maintainable, and user-centric applications</span>. 
  Today, I see coding not just as a skill, but as a creative way to design meaningful solutions 
  that make technology feel simple and human.
</p>

              </div>
              <div>
               <p className="leading-relaxed text-sm sm:text-base md:text-lg">
  Outside of programming, I have a deep passion for journaling and scrapbooking — activities 
  that allow me to capture memories, organize my thoughts, and express my creativity in a 
  tangible way.  
  <br />
  This blend of creativity and reflection helps me maintain balance in life, and I often find that 
  the patience, attention to detail, and design sense I cultivate through these practices 
  directly influence how I approach coding and building thoughtful, visually appealing applications.
</p>
            </div>
            </Slider>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hello%20Jerin&"
          target="_blank"
          rel="noopener noreferrer"
            className="btn bg-blue-900/90 dark:bg-blue-500/30 text-base-content px-6 sm:px-8 py-2 sm:py-3 rounded shadow-lg hover:scale-105 transition-transform w-40"
          >
            Hire Me
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}
