import React from "react";

const projects = [
  { title: "Project 1", description: "Description of Project 1", link: "#" },
  { title: "Project 2", description: "Description of Project 2", link: "#" },
  { title: "Project 3", description: "Description of Project 3", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white p-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-accent hover:underline font-bold"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
