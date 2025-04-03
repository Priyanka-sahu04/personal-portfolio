import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const text = "Hi, I’m Priyanka Sahu";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-800 p-5">
      <div className="max-w-6xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-2/3 mx-auto md:w-full md:block order-1 md:order-2">
          <img 
            src="https://freedesignfile.com/upload/2018/01/Girl-working-with-laptop-at-work-Stock-Photo-02.jpg" 
            alt="Priyanka Sahu" 
            className="w-110 rounded-full shadow-xl shadow-purple-500/50 border-4 border-purple-500"
          />
        </div>
        <div className="space-y-4 order-2 md:order-1">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: index * 0.08 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Aspiring Frontend Developer
          </motion.h2>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            I love creating beautiful and responsive web applications with a touch of creativity and functionality.
          </p>
          <motion.a 
            href="#contact"
            className="mt-8 inline-block bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 text-lg transition transform hover:scale-110"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
