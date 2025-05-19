import React from "react";
import { motion } from "framer-motion";

const fadeIn = (direction = "up", delay = 0.2) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 30 : 0,
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  },
});

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen font-sans overflow-x-hidden">
      {/* Header */}
      <header className="backdrop-blur-lg bg-gray-900/50 sticky top-0 z-50 px-6 md:px-10 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-blue-400">Kaushal.dev</h1>
        <nav className="space-x-6 text-sm font-medium">
          {["home", "projects", "about", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="hover:text-blue-400 transition duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="h-[100vh] flex items-center justify-center px-6 md:px-20 text-center"
      >
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            👋 Hi, I'm <span className="text-blue-400">Kaushal</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            A frontend developer building exceptional digital experiences with
            modern tools.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 md:px-20 bg-gray-950">
        <motion.h3
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          🚀 Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={fadeIn("up", i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:scale-105 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold mb-2 text-blue-300">
                Project {i}
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                A sleek and modern project card with animation and
                glassmorphism.
              </p>
              <a href="#" className="text-blue-400 hover:underline text-sm">
                View Details →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <motion.h3
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          👨‍💻 About Me
        </motion.h3>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-gray-300 text-lg"
        >
          I'm a frontend developer skilled in{" "}
          <span className="text-blue-400">
            React, Tailwind CSS, Framer Motion
          </span>{" "}
          and modern UI principles. I specialize in building fast, accessible,
          and visually engaging user interfaces.
        </motion.p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-950">
        <motion.h3
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold mb-10 text-center"
        >
          📬 Contact
        </motion.h3>

        <motion.form
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-gray-900 border-t border-white/10">
        &copy; 2025 Kaushal. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
