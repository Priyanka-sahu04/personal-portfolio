import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import blogImage from './assets/blog.png';
import quizImage from './assets/quiz.png';
import dashboard from './assets/dashboard.png';

const projects = [
  {
    title: "Quiz App",
    description: "A web-based application that allows users to take interactive quizzes, test your knowledge with features like timer and difficulty levels.",
    techStack: "HTML, CSS, JavaScript",
    image: quizImage,
    link: "https://priyanka-sahu04.github.io/codingQuiz_webapp/"
  },
  {
    title: "AI-Powered Blog Title Generator",
    description: "An AI-powered tool that generates catchy, SEO-friendly blog titles instantly to boost engagement and save your time.",
    techStack: "HTML, CSS, JavaScript, Firebase",
    image: blogImage,
    link: "https://ai-powered-blog-post-generator.vercel.app/"
  },
  {
    title: "Data Visualization",
    description: "The graphical representation of data using charts, graphs, and visuals to make complex information easy to understand.",
    techStack: "HTML, CSS, JavaScript",
    image: dashboard,
    link: "https://dinamic-dashboard.vercel.app/"
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="projects" className="min-h-screen bg-gray-800 text-white py-12 px-4">
      <div className="text-center">
        <h2 className="text-4xl text-purple-400 font-bold mb-6 pt-25">My Projects</h2>
        <p className="my-6 text-xl text-gray-300">
        Enhanced my technical skills by building this project.
          </p>
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-purple-500 text-xl text-white px-4 py-2 rounded-md hover:bg-purple-600">
                  View Project
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
