import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const submit = (e) => {
    e.preventDefault(); // Prevent form reload
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Message:", message);

    // Simulate form submission success
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000); // Remove the success label after 3 seconds

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-secondary text-white p-5">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
        <form className="max-w-lg mx-auto" onSubmit={submit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-accent px-6 py-3 rounded-lg w-full font-bold text-primary hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
        {isSent && (
          <p className="text-center text-green-400 mt-5">
            Message sent successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
