import { FaCode, FaShieldAlt, FaLanguage, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  const expertiseData = [
    {
      icon: <FaCode />,
      title: "Full-Stack Web Development",
      description: "Web applications from database design to cloud deployment with React, Node.js, NestJS, Python and SQL.",
      position: "NovaBulletin · Freelance web development",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Data Handling",
      description: "Authentication, role-based access control and data protection for platforms that hold sensitive records.",
      position: "QR-code verification · One-time-code login",
    },
    {
      icon: <FaLanguage />,
      title: "French–English Translation",
      description: "Administrative, academic and technical translation with strict accuracy and confidentiality, using SDL Trados and MemoQ.",
      position: "University of Ghana Translation Bureau",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "IT Training & Teaching",
      description: "Teaching coding and IT essentials, with lessons, exercises and assessments, in English and French.",
      position: "NSPS Programme · Liberty Lyceum",
    },
  ];

  return (
    <section id="expertise" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">What I do</p>
          <h2 className="section-title">Code and language, in English and French</h2>
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
