import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import blogImage from './assets/blog.png';
import quizImage from './assets/quiz.png';
import dashboard from './assets/dashboard.png';

const projects = [
  {
    title: "Quiz App",
    description: "A coding quiz app with difficulty levels and a timer, built using React.",
    techStack: "HTML, CSS, JavaScript",
    image: quizImage,
  },
  {
    title: "AI-Powered Blog Title Generator",
    description: "A simple and responsive to-do list application built with HTML, CSS, and JavaScript.",
    techStack: "HTML, CSS, JavaScript",
    image: blogImage,
  },
  {
    title: "Data Visualization",
    description: "An interactive image gallery with lightbox effect and responsive design.",
    techStack: "HTML, CSS, JavaScript",
    image: dashboard,
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="projects" className="min-h-screen bg-gray-800 text-white py-12 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 pt-25">My Projects</h2>
      </div>
      <motion.div 
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1.8 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-900 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
              <p className="mt-2 text-sm text-gray-500">Tech Stack: {project.techStack}</p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">View Project</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
