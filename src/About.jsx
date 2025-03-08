import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'HTML & CSS', percent: 85 },
    { name: 'JavaScript', percent: 75 },
    { name: 'React', percent: 60 },
    { name: 'Responsive Web Design', percent: 90 },
    { name: 'Tailwind CSS', percent: 65 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-20 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-bold text-purple-400">About Me</h1>
          <p className="mt-6 text-lg text-gray-300">
            Hi, I'm <span className="text-purple-400 font-semibold">Priyanka Sahu</span>, an aspiring front-end developer passionate about crafting interactive and beautiful web experiences. Currently, I'm sharpening my skills in **HTML, CSS, JavaScript, React, and Tailwind CSS** at Navgurukul.
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

        <motion.div 
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EPM_5JK952RaE22T82fW9L1Y6jW_JLUcTQ&s" 
            alt="Priyanka Sahu" 
            className="w-60 h-60 rounded-full shadow-xl border-4 border-purple-500"
          />
          <h2 className="mt-8 text-3xl font-semibold text-purple-400">Skills</h2>
          <ul className="mt-6 w-full space-y-6">
            {skills.map((skill, index) => (
              <li key={index} className="relative w-full">
                <span className="block text-lg font-medium text-gray-200">{skill.name}</span>
                <motion.div 
                  className="h-2 bg-purple-500 rounded-full mt-2" 
                  initial={{ width: 0 }} 
                  animate={{ width: `${skill.percent}%` }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                />
                <span className="absolute top-1 right-0 text-sm text-purple-300 font-semibold">
                  {skill.percent}%
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
