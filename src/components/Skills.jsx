import { FaCode, FaShieldAlt, FaLanguage, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const expertiseData = [
  {
    icon: <FaCode />,
    title: { en: "Full-Stack Web Development", fr: "Développement web full-stack" },
    description: {
      en: "Web applications from database design to cloud deployment with React, Node.js, NestJS, Python and SQL.",
      fr: "Des applications web, de la conception de la base de données au déploiement dans le cloud, avec React, Node.js, NestJS, Python et SQL.",
    },
    position: { en: "NovaBulletin · Freelance web development", fr: "NovaBulletin · Développement web freelance" },
  },
  {
    icon: <FaShieldAlt />,
    title: { en: "Secure Data Handling", fr: "Gestion sécurisée des données" },
    description: {
      en: "Authentication, role-based access control and data protection for platforms that hold sensitive records.",
      fr: "Authentification, contrôle d'accès par rôle et protection des données pour les plateformes qui gèrent des informations sensibles.",
    },
    position: { en: "QR-code verification · One-time-code login", fr: "Vérification par QR code · Connexion par code unique" },
  },
  {
    icon: <FaLanguage />,
    title: { en: "French–English Translation", fr: "Traduction français–anglais" },
    description: {
      en: "Administrative, academic and technical translation with strict accuracy and confidentiality, using SDL Trados and MemoQ.",
      fr: "Traduction administrative, académique et technique, exacte et confidentielle, avec SDL Trados et MemoQ.",
    },
    position: { en: "University of Ghana Translation Bureau", fr: "Bureau de traduction de l'Université du Ghana" },
  },
  {
    icon: <FaChalkboardTeacher />,
    title: { en: "IT Training & Teaching", fr: "Formation & enseignement en informatique" },
    description: {
      en: "Teaching coding and IT essentials, with lessons, exercises and assessments, in English and French.",
      fr: "Enseignement de la programmation et des bases de l'informatique, avec cours, exercices et évaluations, en français et en anglais.",
    },
    position: { en: "NSPS Programme · Liberty Lyceum", fr: "Programme NSPS · Liberty Lyceum" },
  },
];

const Skills = () => {
  const { tr } = useLanguage();

  return (
    <section id="expertise" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">{tr({ en: "What I do", fr: "Ce que je fais" })}</p>
          <h2 className="section-title">
            {tr({ en: "Code and language, in English and French", fr: "Le code et les langues, en français et en anglais" })}
          </h2>
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
              <h3 className="mb-3 text-lg font-bold text-charcoal">{tr(item.title)}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">{tr(item.description)}</p>
              <span className="mt-auto border-t border-divider pt-4 text-xs font-semibold uppercase tracking-wider text-brand-deep">
                {tr(item.position)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
