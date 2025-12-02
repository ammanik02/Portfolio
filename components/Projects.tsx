"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Jarvis AI",
      description: "A custom-built personal voice assistant designed to automate tasks, process voice commands, and provide real-time responses. This system integrates speech recognition, system automation, and natural language processing to execute actions like opening applications, searching the web, sending reminders, and more. Built as a scalable automation assistant with the flexibility to add new features over time.",
      tech: ["Python", "SpeechRecognition", "PyAudio", "Text-to-Speech (TTS)", "Automation Libraries", "APIs"],
      github: "https://github.com/ammanik02/Jarvis",
      live: "",
      image: "/jarvis-project.jpg",
    },
    {
      title: "Face Expression Detector",
      description: "A real-time facial emotion detection system powered by a Convolutional Neural Network. The model classifies expressions using live webcam input and demonstrates practical machine learning workflow including dataset handling, preprocessing, model training, and deployment.",
      tech: ["Python", "TensorFlow / Keras", "OpenCV", "NumPy", "CNN Architecture", "Webcam Integration"],
      github: "https://github.com/ammanik02/Face-Expression-Detection",
      live: "",
      image: "/face-detector.jpg",
    },
    {
      title: "Java Web-Crawler",
      description: "A full-featured, multithreaded web crawler built in Java. Starting from a seed URL, it traverses linked pages (within a domain or optionally beyond), parses HTML content, and keeps track of visited pages — all while running multiple threads for faster, concurrent crawling. The crawler supports configurable settings such as max depth, max pages, politeness delays, timeouts, and output statistics.",
      tech: ["Java", "Maven", "Jsoup", "Java Concurrency", "ExecutorService", "Thread Pools"],
      github: "https://github.com/akshatagrwal5213/javawebcrawler",
      live: "",
      image: "/web-crawler.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden bg-gradient-to-br from-purple-200 to-orange-200">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.className = "w-full h-48 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br from-purple-200 to-orange-200";
                        target.parentElement.innerHTML = `<span class="text-gray-500">Add ${project.image} to public folder</span>`;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Project Image</span>
                  </div>
                )}
              </div>

              {/* Project Links */}
              <div className="flex gap-3 mb-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-800 flex items-center justify-center transition-colors"
                    aria-label="GitHub"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                )}
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-800 flex items-center justify-center transition-colors"
                    aria-label="Live Demo"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech
                  .flatMap((tech) => tech.split(",").map((t) => t.trim()))
                  .filter((tech) => tech && tech !== "")
                  .map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/ammanik02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-lg border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

