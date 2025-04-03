import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React.js", percentage: 90 },
  { name: "Next.js", percentage: 85 },
  { name: "React Native", percentage: 80 },
  { name: "JavaScript", percentage: 95 },
  { name: "TypeScript", percentage: 75 },
  { name: "Python", percentage: 70 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "SQL", percentage: 80 },
  { name: "MongoDB", percentage: 75 },
  { name: "Node.js", percentage: 85 },
  { name: "Express.js", percentage: 80 }
];

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 border-l-4 border-orange-600 pl-3">
            About Me
          </h2>
          <p className="text-gray-600 text-lg">
            I'm a passionate software engineer with a strong focus on frontend engineering. 
            I specialize in building intuitive, accessible, and visually appealing web and mobile applications.
          </p>
          <p className="text-gray-600 text-lg">
            With expertise in modern JavaScript frameworks, I aim to create seamless and high-performance user experiences.
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 gap-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700 font-semibold">{skill.name}</span>
                <span className="text-gray-700 font-semibold">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;