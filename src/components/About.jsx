import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const skills = [
  { name: "React.js", percentage: 90 },
  { name: "Next.js", percentage: 85 },
  { name: "React Native", percentage: 80 },
  { name: "JavaScript", percentage: 95 },
  { name: "TypeScript", percentage: 75 },
  { name: "Python", percentage: 70 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "SQL", percentage: 80 },
  { name: "MongoDB", percentage: 75 },
  { name: "Node.js", percentage: 85 },
  { name: "Express.js", percentage: 80 }
];

const AboutMe = () => {
  return (
    <section id="about-me" className="bg-white py-20 md:py-28">
      <div className="container-x grid items-start gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <p className="eyebrow">About me</p>
          <h2 className="section-title">One engineer, sketch to production</h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            I'm a passionate software engineer with a strong focus on frontend engineering.
            I specialize in building intuitive, accessible, and visually appealing web and mobile applications.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            With expertise in modern JavaScript frameworks, I aim to create seamless and high-performance user experiences.
          </p>
          <a
            href="/Felix Atoma (3).pdf"
            download
            className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:text-brand-deep"
          >
            Download my CV <FaArrowRight className="text-brand" />
          </a>
          <Link
            to="/contact"
            className="ml-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-charcoal transition hover:text-brand-deep"
          >
            Get in touch <FaArrowRight className="text-brand" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-charcoal">{skill.name}</span>
                <span className="font-display text-brand-deep">{skill.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-divider">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-1.5 bg-brand"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
