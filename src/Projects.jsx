import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import blogImage from './assets/blog.png';
import { useLocation } from 'react-router-dom';
import quizImage from './assets/quiz.png';
import dashboard from './assets/dashboard.png';

const projects = [
  {
    title: 'AI-Powered Blog Title Generator',
    description: 'A simple and responsive to-do list application built with HTML, CSS, and JavaScript.',
    image: blogImage,
    techStack: 'HTML, CSS, JavaScript',
    link: 'https://ai-powered-blog-post-generator.vercel.app/mainpage.html'
  },
  {
    title: 'Data Visualization',
    description: 'An interactive image gallery with lightbox effect and responsive design.',
    image: dashboard,
    techStack: 'HTML, CSS, JavaScript',
    link: 'https://dinamic-dashboard.vercel.app/'
  },
  {
    title: 'Quiz App',
    description: 'A coding quiz app with difficulty levels and a timer, built using React.',
    image: quizImage,
    techStack: 'HTML, CSS, JavaScript',
    link: 'https://priyanka-sahu04.github.io/codingQuiz_webapp/'
  }
];

const containerVariants = {
  hidden: { opacity: 0.7, y: 30 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.9, duration: 2.2, ease: "easeOut" } },
};

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
// };

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      // variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
      className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-white mb-2">{project.description}</p>
        <span className="text-sm text-white">Tech Stack: {project.techStack}</span>
        <div className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
          >
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const location = useLocation(); // Router se location get karna
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (location.pathname === "/projects") {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {animate && (
        <motion.section
          className="min-h-screen bg-gray-700 text-white p-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-8 pt-30 pb-10"
              variants={containerVariants}
            >
              My Projects
            </motion.h1>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Projects;