import React from "react";
import propic from "../assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="pt-20 px-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img
          src={propic}
          alt="Profile"
          className="rounded-full w-48 h-48 mx-auto md:mx-0 md:w-64 md:h-64"
        />
        <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am a passionate and driven individual with a keen interest in
            technology and software development. With a background in [your
            field or relevant experience], I continuously strive to expand my
            knowledge and improve my skills. I enjoy solving complex problems
            and creating solutions that have a meaningful impact. Whether
            working independently or collaborating with teams, I am committed to
            delivering high-quality work and contributing to projects that drive
            innovation. In my free time, I enjoy exploring new technologies,
            participating in coding challenges, and staying up-to-date with
            industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
