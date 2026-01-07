"use client";

import { ScrollFade } from "./ScrollFade";

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
        <ScrollFade>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">What I Do</span>
            </h2>
            <p className="text-lg text-gray-600">
              Services I offer
            </p>
          </div>
        </ScrollFade>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollFade key={service.title} delay={index * 0.1}>
              <div
                className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow h-full hover:-translate-y-2 duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;





