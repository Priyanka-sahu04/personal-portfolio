import React, { useState } from "react";
import { Send } from "lucide-react";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage(""); // Clear the input fields
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col justify-between bg-gray-900 text-white">
      
      {/* Contact Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6">
        <h1 className="text-3xl font-bold mb-6 text-center pt-25">Contact Me</h1>

        {/* Message Form */}
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-lg mb-2">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email" className="block text-lg mt-4 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message" className="block text-lg mt-4 mb-2">Message:</label>
          <textarea
            id="message"
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Send</span>
          </button>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;