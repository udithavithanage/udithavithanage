import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center p-5 pt-36"
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-accent">Uditha Vithanage</span>
        </h1>
        <p className="text-sm md:text-lg mb-6 px-4 md:px-0">
          Welcome to my portfolio! As a dedicated developer, I specialize in
          building modern and user-friendly web applications with React and
          Node.js. With a strong focus on simplicity and functionality, I craft
          intuitive interfaces and efficient backend solutions. Explore my work,
          from real-time chat applications to advanced pet care management
          platforms, and see how I bring innovative ideas to life with clean,
          beginner-friendly code and advanced designs.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-yellow-500 transition"
        >
          Contact Me
        </a>
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-yellow-500 transition"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/uditha-vithanage-06589631b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-yellow-500 transition"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/udithavithanage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-yellow-500 transition"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="mt-12">
          <img
            className="max-w-full h-auto mx-auto"
            src="https://camo.githubusercontent.com/aa50b9ca64091b0bb52e076290030d94e41736bab544c3104acaf80b53be7715/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f666f6e743d466972612b436f64652670617573653d3130303026636f6c6f723d3244394546302663656e7465723d74727565267643656e7465723d747275652677696474683d343335266c696e65733d4d4c2d446576656c6f7065723b46756c6c2b537461636b2b446576656c6f7065723b"
            alt="Typing SVG Example"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
