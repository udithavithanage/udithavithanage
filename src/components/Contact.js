import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary text-white p-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-accent px-6 py-3 rounded-lg w-full font-bold text-primary hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
