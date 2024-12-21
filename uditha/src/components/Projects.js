import React from "react";
import DownloadButton from "./DownloadButton";

const projects = [
  {
    title: "Pdf to Word Converter",
    description:
      "A simple Python tool to convert PDF files to Word (.docx) format.",
    link: "1",
  },
  {
    title: "Sinhglish to Sinhala Converter",
    description:
      "**Sinhglish to Sinhala Converter** is a Python tool that converts Romanized Sinhala (Sinhglish) text into Sinhala script. Users can input Sinhala words using the English alphabet, and the tool accurately converts them into Sinhala characters.",
    link: "2",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A simple Python tool to track income, expenses, and savings, with CRUD operations",
    link: "3",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                {/* <a
                  href={project.link}
                  className="text-accent hover:underline font-bold"
                >
                  View Details
                </a> */}
              </div>
              {/* Download Button placed at the bottom */}
              <div className="mt-auto">
                <DownloadButton project={project.link} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
