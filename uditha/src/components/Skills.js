import React from "react";

// Skill data with names and logo URLs
const skills = [
  {
    name: "HTML",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "React",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    name: "Node.js",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732226.png",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 m-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg p-4 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-16 h-16 mb-3"
              />
              <span className="text-lg font-semibold text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
