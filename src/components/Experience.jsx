import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { CV_URL, experience, education } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

const copy = {
  eyebrow: { en: "Experience", fr: "Expérience" },
  title: { en: "Where I've worked", fr: "Mon parcours professionnel" },
  eduEyebrow: { en: "Education", fr: "Formation" },
  eduTitle: { en: "Training & certifications", fr: "Diplômes & certifications" },
  cv: { en: "Download full CV", fr: "Télécharger le CV complet" },
};

const Experience = () => {
  const { tr } = useLanguage();

  return (
    <section id="experience" className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
        {/* Work history */}
        <div>
          <p className="eyebrow">{tr(copy.eyebrow)}</p>
          <h2 className="section-title">{tr(copy.title)}</h2>

          <ol className="mt-10 border-l-2 border-divider">
            {experience.map((job, index) => (
              <motion.li
                key={job.role.en + job.org.en}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.05 }}
                className="relative pb-10 pl-8 last:pb-0"
              >
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 bg-brand" />
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-deep">{tr(job.period)}</p>
                <h3 className="mt-1 text-lg font-bold text-charcoal">{tr(job.role)}</h3>
                <p className="text-sm font-medium text-muted">{tr(job.org)}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point.en}>{tr(point)}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Education */}
        <div>
          <p className="eyebrow">{tr(copy.eduEyebrow)}</p>
          <h2 className="section-title">{tr(copy.eduTitle)}</h2>

          <ul className="mt-10 space-y-4">
            {education.map((item) => (
              <li key={item.title.en} className="border-l-4 border-brand bg-surface p-5">
                {item.year && <p className="font-display text-xl font-bold text-brand-deep">{item.year}</p>}
                <p className="mt-1 font-semibold text-charcoal">{tr(item.title)}</p>
                <p className="mt-1 text-sm text-muted">{tr(item.org)}</p>
              </li>
            ))}
          </ul>

          <a href={CV_URL} download className="btn-brand mt-8">
            {tr(copy.cv)} <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
