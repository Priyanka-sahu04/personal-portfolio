import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const skills = [
      { name: 'HTML & CSS', percent: 85 },
      { name: 'JavaScript', percent: 75 },
      { name: 'React', percent: 60 },
      { name: 'Responsive Web Design', percent: 90 },
      { name: 'Tailwind CSS', percent: 65 },
    ];

    const education = [
      { degree: "10th (High School)", institution: "XYZ School, Raipur", year: "2018", percentage: "85%" },
      { degree: "12th (Higher Secondary)", institution: "ABC School, Raipur", year: "2020", percentage: "80%" },
      { degree: "Bachelor's in CS", institution: "Pt. Ravishankar Shukla University", year: "2022 - Present", percentage: "Pursuing" },
      { degree: "Frontend Development", institution: "Navgurukul Foundation", year: "2024 - Present", percentage: "Ongoing" },
    ];

    // Ref for scrolling
    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

    return (
      <section 
        id="skills" 
        className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-20 flex flex-col items-center justify-center space-y-16"
        ref={aboutRef}
      >
        {/* Skills Section */}
        <motion.div 
          className="relative flex flex-col items-center w-full max-w-4xl"
          initial={{ opacity: 0, y: -100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-purple-400">Skills</h2>
          <ul className="mt-6 w-full space-y-6">
            {skills.map((skill, index) => (
              <li key={index} className="relative w-full">
                <span className="block text-lg font-medium text-gray-200">{skill.name}</span>
                <motion.div 
                  className="h-2 bg-purple-500 rounded-full mt-2" 
                  initial={{ width: 0 }} 
                  animate={isInView ? { width: `${skill.percent}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                />
                <span className="absolute top-1 right-0 text-sm text-purple-300 font-semibold">
                  {skill.percent}%
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="relative flex flex-col items-center w-screen "
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-purple-400">Education</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {education.map((edu, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-4 rounded-lg shadow-lg border border-purple-500 w-100 h-35 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.3 }}
              >
                <h3 className="text-xl font-semibold text-purple-300">{edu.degree}</h3>
                <p className="text-gray-400">{edu.institution}</p>
                <span className="text-gray-500">{edu.year}</span>
                <p className="text-purple-400 font-semibold">{edu.percentage}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </section>
    );
};

export default Skills;
