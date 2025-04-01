import React from "react";

const skills = [
  { name: "React.js", percentage: 90, color: "bg-orange-800" },
  { name: "Next.js", percentage: 85, color: "bg-orange-600" },
  { name: "React Native", percentage: 80, color: "bg-orange-600" },
  { name: "JavaScript", percentage: 95, color: "bg-orange-800" },
  { name: "TypeScript", percentage: 75, color: "bg-orange-600" },
  { name: "Python", percentage: 70, color: "bg-orange-500" },
  { name: "Tailwind CSS", percentage: 90, color: "bg-orange-800" },
  { name: "UI/UX Design", percentage: 85, color: "bg-orange-600" }
];

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg mt-4 text-gray-600">
            I'm a passionate software engineer with a strong focus on frontend engineering. 
            I specialize in building intuitive, accessible, and visually appealing web and mobile applications.
          </p>
          <p className="text-lg mt-4 text-gray-600">
            With expertise in modern JavaScript frameworks, I aim to create seamless and high-performance user experiences.
          </p>
        </div>

        <div className="md:w-1/2 space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-700">{skill.name}</span>
              <div className="w-2/3 bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className={`h-full ${skill.color}`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <span className="text-lg font-medium text-gray-700">{skill.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
