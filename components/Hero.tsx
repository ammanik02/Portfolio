"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic } from "./Magnetic";
import Image from "next/image";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: ref }); // Track scroll position

  // "Headline and subtext should move slightly upward as the user scrolls"
  const yText = useTransform(scrollY, [0, 500], [0, -50]);
  const ySubtext = useTransform(scrollY, [0, 500], [0, -80]);
  const yButtons = useTransform(scrollY, [0, 500], [0, -100]);
  const yImage = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* Background Elements - Subtle Parallax */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/20 rounded-full blur-[100px] filter" />
        <div className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vw] bg-orange-100/30 rounded-full blur-[80px] filter" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-12 h-full items-center">

          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* No initial animation as requested: "No fade-in or dramatic entrance on page load" */}
            <motion.div style={{ y: yText }} className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-white/50 backdrop-blur-md rounded-full border border-gray-200/50 shadow-sm w-fit">
              <span className="text-xl">👋</span>
              <span className="text-sm font-bold tracking-widest text-gray-800 uppercase">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1 style={{ y: yText }} className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.05]">
              <span className="block text-gray-900">
                Manik Sehrawat
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl mt-2">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 pb-2">
                  AI Engineer &
                </span>
                <span className="block text-gray-800">
                  Web Developer
                </span>
              </span>
            </motion.h1>

            <motion.p
              style={{ y: ySubtext }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-lg leading-relaxed font-light"
            >
              I craft intelligent systems and immersive web experiences with AI and modern technologies.
            </motion.p>

            <motion.div
              style={{ y: yButtons }}
              className="flex flex-wrap gap-5 items-center"
            >
              <Magnetic strength={30}>
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all hover:scale-[1.02] flex items-center gap-2 shadow-xl shadow-gray-900/20"
                >
                  View My Work
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </a>
              </Magnetic>

              <Magnetic strength={30}>
                <a
                  href="/Manik_Sehrawat_Resume.pdf"
                  target="_blank"
                  className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:scale-[1.02] flex items-center gap-2 shadow-lg shadow-gray-200/50"
                >
                  Download Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              style={{ y: yButtons }}
              className="mt-12 flex gap-6"
            >
              <a href="https://github.com/ammanik02" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/manik-sehrawat-9b2546369/" target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </motion.div>
          </div>

          {/* Right Image - with scroll parallax */}
          <motion.div
            style={{ y: yImage }}
            className="relative h-[60vh] lg:h-[85vh] w-full flex items-center justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-lg h-full rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/profile.jpg"
                  alt="Manik Sehrawat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating "Hire Me" Badge */}
              <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full shadow-lg z-10">
                <span className="font-semibold text-gray-900">Available for work</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
