import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { NOVABULLETIN_URL } from "../data/links";

const project = {
  title: "NovaBulletin",
  tagline: "School management software for schools in West Africa",
  description:
    "An edtech platform from Lomé, Togo that takes schools off Excel: averages are calculated automatically, report cards are generated as PDFs in one click, and parents are notified by WhatsApp and SMS.",
  features: [
    "Automatic grade averages",
    "PDF report cards with school logo",
    "WhatsApp & SMS alerts to parents",
    "School fees management",
    "Multi-role dashboards",
    "Built-in LMS: courses, homework, quizzes",
    "Attendance, health & library",
    "Web, Android & iOS",
  ],
  img: "/novabulletin.png",
  url: NOVABULLETIN_URL,
};

const MyWorks = () => {
  return (
    <section id="my-works" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Featured project</p>
          <h2 className="section-title">Latest finished work</h2>
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
              alt={`${project.title} preview`}
              className="w-full transition duration-500 group-hover:scale-105"
            />
            <span className="absolute left-0 top-0 bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal">
              Edtech · SaaS
            </span>
          </a>

          <div className="flex flex-col p-8 md:p-12">
            <h3 className="text-3xl font-bold text-charcoal">{project.title}</h3>
            <p className="mt-2 text-sm font-semibold text-brand-deep">{project.tagline}</p>
            <p className="mt-5 text-base leading-relaxed text-muted">{project.description}</p>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-charcoal sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-brand">
                View live project <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
