"use client";

import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

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
      <div>
      {/* Decorative Background Text */}
      <motion.h2
        className="absolute text-[5rem] sm:text-[7rem] md:text-[12rem] font-extrabold text-base-300/10 top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
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
          <div className="w-36 sm:w-40 md:w-56 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>
       <div className=" lg:hidden   w-full z-40 items-center justify-center bg-base-100 mb-5">
        <div className="flex flex-col items-center text-center p-8 rounded backdrop-blur-2xl bg-base-300 border border-blue-400/20 shadow-[0_0_30px_rgba(30,64,175,0.2)]">
          <div className="relative w-50 h-60 md:w-60 md:h-70 rounded-3xl overflow-hidden border-[3px] border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.6)] mb-6">
            <Image
              src="/images/my-photo.jpg"
              alt="Jerin"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>

          <h2 className="text-2xl font-semibold tracking-wide">
           Jerin
          </h2>
          <p className="text-sm font-bold text-blue-500/60 dark:text-blue-500/90 mt-2">Frontend Developer</p>
          <p>jerinjerin101325@gmail.com</p>
         <hr className="border-base-content w-2/3 mt-5" />
          <div className="mt-6 flex gap-4 text-base-content">
          {/* social -icons */}
                  <motion.div
                    className="flex justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <a href="https://www.linkedin.com/in/nasrinjerin" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FaLinkedin size={32} className="text-base-content" />
                    </a>
                    <a href="https://github.com/JerinOnTheXplore" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                      <FaGithub size={32} className="text-base-content" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hello%20Jerin&"
                    target="_blank"
                    rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <FaEnvelope size={32} className="text-base-content" />
                    </a>
                  </motion.div> 
          </div> 
        </div>
      </div>
        {/* responsive grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  items-center space-y-3">
          {/* left: personal Details */}
          <motion.div
            className="w-full  h-96  sm:h-70 bg-base-300 md:h-120  p-6 sm:p-8"
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

          {/* Right: About Text Slider */}
          <motion.div
            className="w-full  h-96  sm:h-70 bg-base-300 md:h-120 rounded p-6 sm:p-8 shadow-md"
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
        </motion.div>
      </div>
      </div>
    </section>
  );
}
