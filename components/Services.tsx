"use client";

import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI & Chatbot Development",
      description: "Building intelligent AI solutions and conversational chatbots using modern AI frameworks and APIs.",
    },
    {
      icon: "🎨",
      title: "3D & AutoCAD Modeling",
      description: "Creating detailed 3D models and designs using AutoCAD and other 3D modeling tools.",
    },
    {
      icon: "🎮",
      title: "Game Development",
      description: "Developing engaging games with modern game engines and interactive gameplay mechanics.",
    },
    {
      icon: "🌐",
      title: "Website Design & Development",
      description: "Building responsive, modern websites with clean UI/UX and optimal performance.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
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
            <span className="gradient-text">What I Do</span>
          </h2>
          <p className="text-lg text-gray-600">
            Services I offer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



