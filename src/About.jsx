import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { useRef } from 'react';

const About = () => {

  // Ref for scrolling
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-20 flex flex-col items-center justify-center"
      ref={aboutRef}
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Right Section */}
        <motion.div 
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EPM_5JK952RaE22T82fW9L1Y6jW_JLUcTQ&s" 
            alt="Priyanka Sahu" 
            className="w-80 h-80 rounded-full shadow-xl border-4 border-purple-500"
          />
        </motion.div>

        {/* Left Section */}
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-purple-400">About Me</h1>
          <p className="mt-6 text-lg text-gray-300">
            Hi, I'm <span className="text-purple-400 font-semibold">Priyanka Sahu</span>, an aspiring front-end developer passionate about crafting interactive and beautiful web experiences. Currently, I'm sharpening my skills in <strong>HTML, CSS, JavaScript, React, and Tailwind CSS</strong> at Navgurukul.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="https://linkedin.com" className="text-purple-400 text-2xl hover:text-purple-500 transition"><FaLinkedin /></a>
            <a href="https://github.com" className="text-purple-400 text-2xl hover:text-purple-500 transition"><FaGithub /></a>
            <a href="https://twitter.com" className="text-purple-400 text-2xl hover:text-purple-500 transition"><FaTwitter /></a>
          </div>
          <a 
            href="/Downloads/cv.pdf" 
            download 
            className="mt-8 inline-block bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition text-lg"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div 
        className="mt-20 max-w-5xl w-full mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", desc: "Building responsive and interactive websites." },
            { title: "UI/UX Design", desc: "Creating visually appealing and user-friendly interfaces." },
            { title: "React Development", desc: "Developing modern web apps with React and Tailwind CSS." }
          ].map((service, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-800 rounded-lg shadow-lg border border-purple-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-purple-300">{service.title}</h3>
              <p className="mt-4 text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
