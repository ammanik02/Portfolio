"use client";

import { ScrollFade } from "./ScrollFade";

const Skills = () => {
  const skills = [
    { name: "AI & Automation", icon: "🤖" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript / TypeScript", icon: "⚡" },
    { name: "React / Next.js", icon: "⚛️" },
    { name: "Game Development", icon: "🎮" },
    { name: "AutoCAD 3D / 3D Modelling", icon: "🎨" },
    { name: "Web Development", icon: "🌐" },
    { name: "Java", icon: "☕" },
    { name: "TensorFlow / Keras", icon: "🧠" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollFade>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Technologies</span>
            </h2>
            <p className="text-lg text-gray-600">
              Technologies and tools I work with
            </p>
          </div>
        </ScrollFade>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <ScrollFade key={skill.name} delay={index * 0.1}>
              <div
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow text-center h-full flex flex-col items-center justify-center hover:-translate-y-1 duration-300"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {skill.name}
                </h3>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

