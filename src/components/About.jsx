import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CV_URL, technicalSkills, languages, competencies } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

const copy = {
  eyebrow: { en: "About me", fr: "À propos" },
  title: { en: "Developer, translator and educator", fr: "Développeur, traducteur et enseignant" },
  p1: {
    en: "I'm a bilingual software developer and French–English translator: a native French speaker, fluent in English. I build and deploy secure full-stack web applications and created NovaBulletin, a live school management platform.",
    fr: "Je suis développeur logiciel bilingue et traducteur français–anglais : le français est ma langue maternelle et je parle couramment l'anglais. Je conçois et déploie des applications web full-stack sécurisées, et j'ai créé NovaBulletin, une plateforme de gestion scolaire en ligne.",
  },
  p2: {
    en: "I trained in software engineering with Power Learn Project and Generation Ghana / MEST Africa, and bring over 12 years of professional experience, rigorous handling of confidential information, and the ability to work across technical and language tasks in both English and French.",
    fr: "Formé en ingénierie logicielle avec Power Learn Project et Generation Ghana / MEST Africa, j'apporte plus de 12 ans d'expérience professionnelle, une gestion rigoureuse des informations confidentielles et la capacité de mener des tâches techniques et linguistiques en français comme en anglais.",
  },
  cv: { en: "Download my CV", fr: "Télécharger mon CV" },
  contact: { en: "Get in touch", fr: "Me contacter" },
  competencies: { en: "Key competencies", fr: "Compétences clés" },
};

const AboutMe = () => {
  const { tr } = useLanguage();

  return (
    <section id="about-me" className="bg-white py-20 md:py-28">
      <div className="container-x grid items-start gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow">{tr(copy.eyebrow)}</p>
          <h2 className="section-title">{tr(copy.title)}</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">{tr(copy.p1)}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{tr(copy.p2)}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {languages.map(({ name, level }) => (
              <div key={name.en} className="border-l-4 border-brand bg-surface px-4 py-3">
                <p className="font-semibold text-charcoal">{tr(name)}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted">{tr(level)}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:text-brand-deep"
            >
              {tr(copy.cv)} <FaArrowRight className="text-brand" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:text-brand-deep"
            >
              {tr(copy.contact)} <FaArrowRight className="text-brand" />
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          {technicalSkills.map(({ group, items }) => (
            <div key={group.en}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">{tr(group)}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="border border-divider px-3 py-1.5 text-sm font-medium text-charcoal">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-deep">{tr(copy.competencies)}</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-charcoal sm:grid-cols-2">
              {competencies.map((item) => (
                <li key={item.en} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 bg-brand" />
                  {tr(item)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
