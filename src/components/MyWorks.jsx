import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { NOVABULLETIN_URL } from "../data/links";
import { useLanguage } from "../i18n/LanguageContext";

const project = {
  title: "NovaBulletin",
  role: { en: "Founder & Lead Developer", fr: "Fondateur & développeur principal" },
  tagline: {
    en: "School management platform for schools in West Africa",
    fr: "Plateforme de gestion scolaire pour les écoles d'Afrique de l'Ouest",
  },
  description: {
    en: "A full-stack platform that manages student records, grades, report cards, attendance, fees and parent communication. Averages are calculated automatically, report cards are generated as PDFs in one click, and parents are notified by WhatsApp and SMS.",
    fr: "Une plateforme full-stack qui gère les dossiers des élèves, les notes, les bulletins, les présences, les frais de scolarité et la communication avec les parents. Les moyennes sont calculées automatiquement, les bulletins sont générés en PDF en un clic et les parents sont prévenus par WhatsApp et SMS.",
  },
  features: [
    { en: "Role-based access for five user types", fr: "Accès par rôle pour cinq types d'utilisateurs" },
    { en: "QR-code verification of report cards against forgery", fr: "Vérification des bulletins par QR code contre la falsification" },
    { en: "One-time-code login", fr: "Connexion par code à usage unique" },
    { en: "PDF report cards with school logo", fr: "Bulletins PDF avec le logo de l'école" },
    { en: "WhatsApp & SMS alerts to parents", fr: "Alertes WhatsApp & SMS aux parents" },
    { en: "Fees, attendance & built-in LMS", fr: "Frais, présences & plateforme de cours intégrée" },
  ],
  stack: ["NestJS", "REST API", "React", "Render", "Vercel"],
  img: "/novabulletin.png",
  url: NOVABULLETIN_URL,
};

const MyWorks = () => {
  const { tr } = useLanguage();

  return (
    <section id="my-works" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">{tr({ en: "Featured project", fr: "Projet phare" })}</p>
          <h2 className="section-title">{tr({ en: "What I've built", fr: "Ce que j'ai créé" })}</h2>
        </div>

        {/* Featured Project */}
        <div className="mt-12 grid overflow-hidden bg-white shadow-sm lg:grid-cols-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-end overflow-hidden bg-[#002347]"
          >
            <img
              src={project.img}
              alt={tr({ en: "NovaBulletin preview", fr: "Aperçu de NovaBulletin" })}
              className="w-full transition duration-500 group-hover:scale-105"
            />
            <span className="absolute left-0 top-0 bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
              {tr({ en: "Live · Edtech", fr: "En ligne · Edtech" })}
            </span>
          </a>

          <div className="flex flex-col p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">{tr(project.role)}</p>
            <h3 className="mt-2 text-3xl font-bold text-charcoal">{project.title}</h3>
            <p className="mt-2 text-sm font-semibold text-brand-deep">{tr(project.tagline)}</p>
            <p className="mt-5 text-base leading-relaxed text-muted">{tr(project.description)}</p>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-charcoal sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature.en} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                  {tr(feature)}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li key={tech} className="bg-surface px-3 py-1 text-xs font-semibold text-charcoal">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-brand">
                {tr({ en: "Visit", fr: "Visiter" })} novabulletin.vercel.app <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
