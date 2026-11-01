import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLaptopCode,
  FaStore,
  FaSchool,
  FaLanguage,
  FaFileAlt,
  FaChalkboardTeacher,
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { NOVABULLETIN_URL } from "../data/links";
import { useLanguage } from "../i18n/LanguageContext";

const services = [
  {
    icon: <FaLaptopCode />,
    title: { en: "Full-Stack Web Applications", fr: "Applications web full-stack" },
    text: {
      en: "Secure web apps from database design to cloud deployment, with authentication, access control and data protection.",
      fr: "Des applications web sécurisées, de la base de données au déploiement dans le cloud, avec authentification, contrôle d'accès et protection des données.",
    },
  },
  {
    icon: <FaStore />,
    title: { en: "Business Websites", fr: "Sites web d'entreprise" },
    text: {
      en: "Websites for businesses, including e-commerce, legal services and multi-service companies.",
      fr: "Des sites pour les entreprises : e-commerce, services juridiques et sociétés multiservices.",
    },
  },
  {
    icon: <FaSchool />,
    title: { en: "School Management", fr: "Gestion scolaire" },
    text: {
      en: "Digital report cards, grades, attendance, fees and parent communication for schools, with NovaBulletin.",
      fr: "Bulletins numériques, notes, présences, frais de scolarité et communication avec les parents, avec NovaBulletin.",
    },
    link: { href: NOVABULLETIN_URL, label: { en: "Visit NovaBulletin", fr: "Visiter NovaBulletin" } },
  },
  {
    icon: <FaLanguage />,
    title: { en: "French–English Translation", fr: "Traduction français–anglais" },
    text: {
      en: "Administrative and academic documents translated with strict accuracy and confidentiality.",
      fr: "Traduction de documents administratifs et académiques, exacte et confidentielle.",
    },
  },
  {
    icon: <FaFileAlt />,
    title: { en: "Technical Translation & Documentation", fr: "Traduction technique & documentation" },
    text: {
      en: "Technical documents and documentation in both languages, using SDL Trados and MemoQ.",
      fr: "Documents techniques et documentation dans les deux langues, avec SDL Trados et MemoQ.",
    },
  },
  {
    icon: <FaChalkboardTeacher />,
    title: { en: "Coding & IT Training", fr: "Formation en programmation & informatique" },
    text: {
      en: "Lessons, exercises and assessments in coding and IT essentials, taught in English or French.",
      fr: "Cours, exercices et évaluations en programmation et en informatique de base, en français ou en anglais.",
    },
  },
];

const Services = () => {
  const { tr } = useLanguage();

  return (
    <div>
      <PageHeader
        eyebrow={{ en: "Services", fr: "Services" }}
        title={{ en: "Services", fr: "Services" }}
        intro={{
          en: "Software development, translation and training, delivered in English and French.",
          fr: "Développement logiciel, traduction et formation, en français et en anglais.",
        }}
      />

      {/* Services Section */}
      <section id="services" className="bg-surface py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">{tr({ en: "What I offer", fr: "Mes services" })}</p>
            <h2 className="section-title">{tr({ en: "How I can help", fr: "Comment je peux vous aider" })}</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title.en}
                className="group flex flex-col border-t-4 border-brand bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-3xl text-brand-deep transition group-hover:text-brand">{service.icon}</div>
                <h3 className="mt-6 text-lg font-bold text-charcoal">{tr(service.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tr(service.text)}</p>
                {service.link && (
                  <a
                    href={service.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:text-brand-deep"
                  >
                    {tr(service.link.label)} <FaArrowRight className="text-brand" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-brand">
              {tr({ en: "Request a quote", fr: "Demander un devis" })} <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
