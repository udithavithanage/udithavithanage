import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

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
        <div className="flex justify-center space-x-4 mt-20">
          <a
            href="https://www.facebook.com/staphane.uditha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/uditha-vithanage-06589631b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/udithavithanage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-500 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
