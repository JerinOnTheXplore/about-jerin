"use client";

import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative flex flex-col items-center justify-center py-24 px-6 bg-base-100"
    >
      {/* Glass Panel */}
      <div className="absolute inset-0 backdrop-blur-lg pointer-events-none rounded-3xl "></div>

      {/* Heading */}
      <motion.div
        className="relative max-w-4xl text-center mb-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-base-content mb-2">Get in Touch</h2>
        <div className="w-56 sm:w-56 md:w-70 h-1 bg-blue-400/80 mx-auto rounded mb-12"></div>
        <p className="text-lg md:text-xl text-base-content dark:text-gray/90">
          Feel free to reach out for collaborations, questions, or just to say hi!
        </p>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col lg:flex-row gap-12 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* contact form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-base-300 p-10 rounded shadow flex flex-col gap-5 backdrop-blur-lg  transition-all duration-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered input input-bordered w-full bg-base-200 text-base-content placeholder-base-content focus:bg-base-100 focus:ring-blue-400"
            rows={6}
            required
          ></textarea>

          <button className="btn bg-blue-400/50 text-base-content font-semibold w-full shadow-lg transition-all duration-300">
            Send Message
          </button>

          {status && (
            <p
              className={`text-center mt-3 font-medium ${
                status.includes("success") ? "text-blue-500" : "text-red-700"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* Direct Contact Options */}
        <div className="flex-1 flex flex-col justify-center gap-6 bg-blue-400/40 p-10 rounded shadow backdrop-blur-lg  transition-all duration-500">
          <h3 className="text-2xl font-semibold text-center text-base-content mb-4">Direct Contact</h3>
          <p className="text-center text-base-content mb-4">
            Alternatively, you can reach me via these platforms:
          </p>
          <div className="flex flex-col gap-4 items-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jerinjerin101325@gmail.com&su=Hello%20Jerin&"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn bg-white/30 text-base-content w-3/4 justify-center hover:bg-white/30 shadow-md transition-all duration-300"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/nasrinjerin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn bg-white/30 text-base-content w-3/4 justify-center hover:bg-white/30 shadow-md transition-all duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/JerinOnTheXplore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn bg-white/30 text-base-content w-3/4 justify-center hover:bg-white/30 shadow-md transition-all duration-300"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
