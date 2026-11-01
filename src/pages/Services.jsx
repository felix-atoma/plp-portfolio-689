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

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Web Applications",
    text: "Secure web apps from database design to cloud deployment, with authentication, access control and data protection.",
  },
  {
    icon: <FaStore />,
    title: "Business Websites",
    text: "Websites for businesses, including e-commerce, legal services and multi-service companies.",
  },
  {
    icon: <FaSchool />,
    title: "School Management",
    text: "Digital report cards, grades, attendance, fees and parent communication for schools, with NovaBulletin.",
    link: { href: NOVABULLETIN_URL, label: "Visit NovaBulletin" },
  },
  {
    icon: <FaLanguage />,
    title: "French–English Translation",
    text: "Administrative and academic documents translated with strict accuracy and confidentiality.",
  },
  {
    icon: <FaFileAlt />,
    title: "Technical Translation & Documentation",
    text: "Technical documents and documentation in both languages, using SDL Trados and MemoQ.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Coding & IT Training",
    text: "Lessons, exercises and assessments in coding and IT essentials, taught in English or French.",
  },
];

const Services = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Services"
        intro="Software development, translation and training, delivered in English and French."
      />

      {/* Services Section */}
      <section id="services" className="bg-surface py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">What I offer</p>
            <h2 className="section-title">How I can help</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col border-t-4 border-brand bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-3xl text-brand-deep transition group-hover:text-brand">{service.icon}</div>
                <h3 className="mt-6 text-lg font-bold text-charcoal">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
                {service.link && (
                  <a
                    href={service.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:text-brand-deep"
                  >
                    {service.link.label} <FaArrowRight className="text-brand" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-brand">
              Request a quote <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
