"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            I'm a B.Tech CSE (AI & ML) student passionate about building intelligent systems and solving real-world problems with code. I've developed projects like a personal voice assistant and a facial expression detector, and I enjoy working with Python, AI automation, and modern development tools.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4">
            I'm a 20-year-old developer interested in AI, AutoCAD 3D, game development, and website development. I love building innovative solutions and bringing creative ideas to life through code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

