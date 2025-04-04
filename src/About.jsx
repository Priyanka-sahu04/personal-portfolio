import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';
import { useRef } from 'react';

const About = () => {
  // Ref for scrolling
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-5 flex flex-col items-center justify-center"
      ref={aboutRef}
    >
      <div className="container pt-12 max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center text-center">
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-purple-400">About Me</h1>
          <p className="mt-6 text-lg text-gray-300">
            Hi, I'm <span className="text-purple-400 font-semibold">Priyanka Sahu</span>, an aspiring front-end developer passionate about crafting interactive and beautiful web experiences. Currently, I'm sharpening my skills in <strong>HTML, CSS, JavaScript, React, and Tailwind CSS</strong> at Navgurukul.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="https://www.linkedin.com/in/priyanka-sahu-0ba32430b/" target='blank' className="text-purple-400 text-4xl hover:text-purple-500 transition transform hover:scale-120"><FaLinkedin /></a>
            <a href="https://github.com/Priyanka-sahu04" target='blank' className="text-purple-400 text-4xl hover:text-purple-500 transition transform hover:scale-120"><FaGithub /></a>
            <a href="https://www.codechef.com/users/priyankass23" target='blank' className="text-purple-400 text-4xl hover:text-purple-500 transition transform hover:scale-120"><SiCodechef /></a>
          </div>
          <a 
            href="/Priyanka_Resume.pdf" 
            download 
            className="mt-8 inline-block bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-600 transition transform hover:scale-110 text-lg"
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










{/* <div className="flex space-x-4 mt-8">
            <a href="https://www.linkedin.com/in/priyanka-sahu-0ba32430b/" target='blank' className="text-purple-400 text-4xl hover:text-purple-500 transition transform hover:scale-120"><FaLinkedin /></a>
            <a href="https://github.com/Priyanka-sahu04" target='blank' className="text-purple-400 text-4xl hover:text-purple-500 transition transform hover:scale-120"><FaGithub /></a>
            <a href="https://www.codechef.com/users/priyankass23" target='blank' className="text-purple-400 text-4xl hover:text-purple-500 transition transform hover:scale-120"><SiCodechef /></a>
</div> */}