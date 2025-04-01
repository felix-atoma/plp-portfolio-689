import { FaLightbulb, FaPencilRuler, FaCode, FaChartLine } from "react-icons/fa";

const Skills = () => {
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
  );
};

export default Skills;
