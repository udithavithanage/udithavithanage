import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img
          src="https://via.placeholder.com/200"
          alt="Profile"
          className="rounded-full w-48 h-48 mx-auto md:mx-0 md:w-64 md:h-64"
        />
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am passionate about building exceptional digital experiences with
            modern tools and technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
