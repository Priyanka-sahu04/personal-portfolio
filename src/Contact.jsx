import React, { useState } from "react";
import { Send } from "lucide-react";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // Status message for success/error

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const response = await fetch("https://formspree.io/f/mjkyarpg", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus(null), 3000);
    } else {
      setStatus("Oops! Something went wrong. Please try again.");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div id="contact" className="min-h-screen pt-19 flex flex-col justify-between bg-gray-900 text-white">
      {/* Contact Content */}
      <div className="flex flex-col items-center justify-center flex-grow px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>

        {/* Popup Message */}
        {status && (
          <p className="bg-purple-500 text-white px-4 py-2 rounded-md mb-4 text-center">
            {status}
          </p>
        )}

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
          <label htmlFor="name" className="block text-lg mb-2">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email" className="block text-lg mt-4 mb-2">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message" className="block text-lg mt-4 mb-2">Message:</label>
          <textarea
            name="message"
            placeholder="Type your message here..."
            className="w-full p-3 rounded-lg bg-gray-700"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit" className="w-full mt-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg flex items-center justify-center space-x-2">
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
