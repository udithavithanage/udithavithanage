import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center p-5"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-accent">Uditha Vithanage</span>
        </h1>
        <p className="text-lg mb-6">
          A Web Developer creating modern and responsive websites.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-500 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
