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
    <section id="expertise" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">What I do</p>
          <h2 className="section-title">From idea to shipped product</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col border-t-4 border-brand bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-3xl text-brand-deep transition group-hover:text-brand">{item.icon}</div>
              <h3 className="mb-3 text-lg font-bold text-charcoal">{item.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">{item.description}</p>
              <span className="mt-auto border-t border-divider pt-4 text-xs font-semibold uppercase tracking-wider text-brand-deep">
                {item.position}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
