"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Magnetic } from "./Magnetic";
import { ScrollFade } from "./ScrollFade";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  links: {
    github?: string;
    demo?: string;
  };
}

const projects = [
  {
    title: "Jarvis AI",
    description: "A personal voice assistant capable of performing system tasks, web searches, and conversational interactions. Built with Python, speech recognition, and automation libraries.",
    tech: ["Python", "Speech Recognition", "Automation", "NLP"],
    image: "/jarvis-project.jpg",
    links: {
      github: "https://github.com/ammanik02/Jarvis",
      demo: "#",
    },
  },
  {
    title: "Facial Expression Detector",
    description: "Real-time emotion recognition system using Deep Learning. Detects emotions like happy, sad, angry, and neutral with high accuracy using convolutional neural networks.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    image: "/face-detector.jpg",
    links: {
      github: "https://github.com/ammanik02/Face-Expression-Detection",
      demo: "#",
    },
  },
  {
    title: "Java Web Crawler",
    description: "A robust multithreaded web crawler that traverses websites, parses HTML content, and indexes data efficiently. Demonstrates proficiency in Java concurrency and networking.",
    tech: ["Java", "Multithreading", "HTML Parsing", "Data Structures"],
    image: "/web-crawler.jpg",
    links: {
      github: "https://github.com/akshatagrwal5213/javawebcrawler",
      demo: "#",
    },
  },
  {
    title: "Snake Game (Hand Gestures)",
    description: "An interactive version of the classic Snake game controlled via hand gestures using computer vision. A fun fusion of gaming and AI interactions.",
    tech: ["Python", "OpenCV", "Mediapipe", "Game Dev"],
    image: "/SNAKE-Game---Using-Hand-Gestures.jpg",
    links: {
      github: "https://github.com/ammanik02/SNAKE-Game---Using-Hand-Gestures",
      demo: "#",
    },
  },
  {
    title: "3D Particle System",
    description: "A visually stunning 3D particle simulation exploring physics-based movement, lighting, and performance optimization in graphical rendering.",
    tech: ["C++", "OpenGL", "Physics Engine", "Graphics"],
    image: "/3D particle system.jpg",
    links: {
      github: "https://github.com/ammanik02/3D-Particle-System",
      demo: "#",
    },
  },
  {
    title: "Multiplayer 2D/3D Game Engine",
    description: "A custom multiplayer game engine supporting 2D and 3D rendering. Features networking capabilities, entity-component systems, and physics integration.",
    tech: ["C++", "Networking", "Game Engine", "Architecture"],
    image: "/multiplayer-engine.jpg",
    links: {
      github: "https://github.com/ammanik02/Multiplayer-2D3D-Game-Engine",
      demo: "#",
    },
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative h-[60vh] w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-800 border border-gray-700/50 shadow-2xl transition-all duration-500 hover:shadow-purple-500/10">
      <div className="absolute inset-0 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-md rounded-full text-white border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-6 line-clamp-2">
            {project.description}
          </p>

          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            <Magnetic strength={20}>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-purple-400 font-medium transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Code
              </a>
            </Magnetic>
            {(project.links.demo && project.links.demo !== "#") && (
              <Magnetic strength={20}>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-purple-400 font-medium transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Live Demo
                </a>
              </Magnetic>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section
      ref={targetRef}
      id="projects"
      className="relative h-[300vh] bg-gray-900 text-white"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-10 w-full max-w-sm pointer-events-none">
          <ScrollFade>
            <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4 opacity-50">
              Selected Work
            </h2>
          </ScrollFade>
          <ScrollFade delay={0.1}>
            <p className="text-gray-400 text-lg">
              A showcase of my latest projects and experiments.
            </p>
          </ScrollFade>
        </div>

        <motion.div
          style={{ x }}
          className="flex gap-16 px-12 md:px-24 items-center pl-[30vw]"
        >
          {projects.map((project, i) => (
            <ScrollFade key={i} delay={i * 0.1} className="h-fit">
              <ProjectCard project={project} />
            </ScrollFade>
          ))}

          {/* Last Card - See More */}
          <ScrollFade delay={projects.length * 0.1} className="h-fit">
            <div className="h-[60vh] w-[85vw] md:w-[40vw] flex-shrink-0 flex items-center justify-center bg-gray-800/50 rounded-3xl border border-gray-700 border-dashed">
              <Magnetic>
                <a
                  href="https://github.com/ammanik02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center group cursor-pointer block"
                >
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    👋
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    See More
                  </h3>
                  <p className="text-gray-400">Visit my GitHub</p>
                </a>
              </Magnetic>
            </div>
          </ScrollFade>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
