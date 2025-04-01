import React from 'react'
import { FaLightbulb, FaPencilRuler, FaCode, FaChartLine } from "react-icons/fa";

const Works = () => {
   const expertiseData = [
      {
        icon: <FaLightbulb />,
        title: "Strategy & Direction",
        description: "Understanding business needs to craft long-term strategies that drive success.",
        position: "Head of Design at Calvino",
      },
      {
        icon: <FaPencilRuler />,
        title: "UX/UI Design",
        description: "Creating intuitive, user-friendly interfaces that enhance digital experiences.",
        position: "Lead Designer at Felixio",
      },
      {
        icon: <FaCode />,
        title: "Frontend Development",
        description: "Building high-performance web applications with HTML, CSS, JavaScript, and React.",
        position: "Senior Engineer at WebInnovate",
      },
      {
        icon: <FaChartLine />,
        title: "Market Research",
        description: "Analyzing trends and customer behavior to optimize digital strategies.",
        position: "Digital Consultant at GrowthHacker",
      },
    ];
  return (
    <div>


<section className="w-full bg-gray-100 py-24 px-8 md:px-20 min-h-[60vh] flex items-start">
        <div className="max-w-6xl w-full">
          {/* Breadcrumb Navigation - Aligned to Top Left */}
          <div className="text-gray-600 text-lg">
            <span className="text-red-500 font-semibold">Home</span> / My Skills
          </div>

          {/* About Me Title - Bigger Size */}
          <h2 className="text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Skills
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-red-500"></span>
          </h2>
        </div>
      </section>










      <section id="expertise" className="text-center py-16 bg-white">
      <h2 className="text-4xl font-bold text-orange-500 mb-10">My Expertise</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="bg-orange-100 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:bg-orange-200"
          >
            <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-3xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <span className="text-orange-500 font-bold">{item.position}</span>
          </div>
        ))}
      </div>
    </section>



    </div>
  )
}

export default Works