// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Uditha Avithanage</h1>
        <p>Passionate Developer | Web Applications Enthusiast</p>
      </header>

      <main>
        <section className="overview">
          <h2>Overview</h2>
          <p>
            Welcome to my GitHub! I am a passionate developer working on various
            projects, primarily focused on web applications and systems that
            involve Node.js, React, and MongoDB. I specialize in building
            responsive and modern user interfaces, along with creating efficient
            backends to handle complex functionalities.
          </p>
        </section>

        <section className="skills">
          <h2>Skills & Technologies</h2>
          <ul>
            <li>
              <strong>Frontend:</strong> React, React Redux, HTML, CSS,
              JavaScript
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Database:</strong> MongoDB
            </li>
            <li>
              <strong>UI Frameworks:</strong> customtkinter (for Python
              applications), Tailwind CSS, Bootstrap
            </li>
            <li>
              <strong>Others:</strong> WebSockets, EmailJS, Google Login
              Integration
            </li>
          </ul>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>PetLife</h3>
            <p>
              A comprehensive pet healthcare and management platform with
              features like digitalized vaccination records, appointment
              bookings, pet adoption, community forums, and e-commerce for pet
              products.
            </p>
          </div>
          <div className="project">
            <h3>Ticket Pool System</h3>
            <p>
              A system for managing a pool of tickets, where vendors can add
              tickets at a rate of 5 per second. Built using Node.js and
              Express.js.
            </p>
          </div>
          <div className="project">
            <h3>Chat Application</h3>
            <p>
              A real-time messaging platform with features like time-stamped
              messages, sent/received message categorization, and additional
              options via icons.
            </p>
          </div>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:udithavithanage358@gmail.com">
              udithavithanage358@gmail.com
            </a>
          </p>
          <p>Phone: 071 350 66 55</p>
        </section>
      </main>

      <footer>
        <p>© 2024 Uditha Avithanage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
