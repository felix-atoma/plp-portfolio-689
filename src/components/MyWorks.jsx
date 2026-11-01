import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

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
  url: "https://e-report-frontend.vercel.app/",
};

const MyWorks = () => {
  return (
    <section id="my-works" className="text-center py-16 bg-orange-100 px-4">
      <h2 className="text-4xl font-bold text-orange-600 mb-8">My Works</h2>

      {/* Featured Project */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg group bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="overflow-hidden">
          <img
            src={project.img}
            alt={`${project.title} preview`}
            className="w-full object-cover transition duration-300 transform group-hover:scale-105"
          />
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-orange-500 font-semibold mb-4">{project.tagline}</p>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{project.description}</p>
          <ul className="flex flex-wrap justify-center gap-2 mb-8">
            {project.features.map((feature) => (
              <li key={feature} className="bg-orange-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                {feature}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[#F7931E] group-hover:bg-[#e07e12] font-semibold text-lg rounded-full transition duration-300 shadow-lg">
            View Live Project <FaExternalLinkAlt className="text-sm" />
          </span>
        </div>
      </a>
    </section>
  );
};

export default MyWorks;
