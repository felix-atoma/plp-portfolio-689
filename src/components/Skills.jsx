import { FaLightbulb, FaPencilRuler, FaCode, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const expertiseData = [
    {
      icon: <FaLightbulb />,
      title: "Design Thinking & UX Strategy",
      description: "Translating business goals into user-centered designs for startups, NGOs, and enterprise needs.",
      position: "Projects: Nashma Agribusiness, United Intellects",
    },
    {
      icon: <FaPencilRuler />,
      title: "UI/UX Design",
      description: "Expert in Figma, Tailwind CSS, and FlutterFlow. Designed multilingual, responsive platforms for mobile and web.",
      position: "Trained at MEST Africa",
    },
    {
      icon: <FaCode />,
      title: "Full Stack & Mobile Development",
      description: "React, React Native, FlutterFlow, Vite, and MERN stack. Experience with APIs, geolocation, animations, and real-time UI.",
      position: "Trackor, FarmConnect, ImmoAsk, Real Estate Platform (Togo)",
    },
    {
      icon: <FaChartLine />,
      title: "Web3, Cybersecurity & Multilingual Communication",
      description: "Web3 and cybersecurity enthusiast at Helicode Academy. French-English translator and ICT teacher.",
      position: "Taught at Ecole St Pierre Claver, Translator & ICT Instructor",
    },
  ];

  return (
    <section id="expertise" className="text-center py-16 bg-white">
      <h2 className="text-4xl font-bold text-orange-500 mb-10">What I Do Best</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-orange-100 p-8 rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:bg-orange-200"
          >
            <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-3xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <span className="text-orange-500 font-bold">{item.position}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;