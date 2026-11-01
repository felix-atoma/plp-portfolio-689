import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Skills from "../components/Skills";
import MyWorks from "../components/MyWorks";
import AboutMe from "../components/About";
import Experience from "../components/Experience";
import { CV_URL } from "../data/profile";
import { useLanguage } from "../i18n/LanguageContext";

const stats = [
  { value: "12+", label: { en: "Years of professional experience", fr: "Années d'expérience professionnelle" } },
  { value: "2", label: { en: "Working languages (FR / EN)", fr: "Langues de travail (FR / EN)" } },
  { value: "5", label: { en: "User roles in NovaBulletin", fr: "Rôles utilisateurs dans NovaBulletin" } },
  { value: "16", label: { en: "Tools & technologies", fr: "Outils & technologies" } },
];

const copy = {
  eyebrow: { en: "Software developer · French–English translator", fr: "Développeur logiciel · Traducteur français–anglais" },
  hello: { en: "Hi, I'm Felix Atoma.", fr: "Bonjour, je suis Felix Atoma." },
  titleStart: { en: "I build ", fr: "Je crée des " },
  titleHighlight: { en: "secure web apps", fr: "applications web sécurisées" },
  titleEnd: { en: " in English and French", fr: ", en français et en anglais" },
  intro: {
    en: "Bilingual full-stack developer based in Accra. I build and deploy web applications with Node.js, NestJS, React, Python and SQL, and I'm the founder and lead developer of NovaBulletin, a live school management platform.",
    fr: "Développeur full-stack bilingue basé à Accra. Je conçois et déploie des applications web avec Node.js, NestJS, React, Python et SQL, et je suis le fondateur et développeur principal de NovaBulletin, une plateforme de gestion scolaire en ligne.",
  },
  seeProject: { en: "See NovaBulletin", fr: "Voir NovaBulletin" },
  cv: { en: "Download CV", fr: "Télécharger le CV" },
  ctaTitle: { en: "Need a developer or a translator?", fr: "Besoin d'un développeur ou d'un traducteur ?" },
  ctaText: { en: "Tell me about your project, in English or in French.", fr: "Parlez-moi de votre projet, en français ou en anglais." },
  ctaButton: { en: "Start a conversation", fr: "Prendre contact" },
};

const Home = () => {
  const { tr } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(250,183,0,0.22),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container-x relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 md:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow-light">{tr(copy.eyebrow)}</p>
            <p className="mt-5 text-xl font-semibold text-white md:text-2xl">{tr(copy.hello)}</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {tr(copy.titleStart)}
              <span className="text-brand">{tr(copy.titleHighlight)}</span>
              {tr(copy.titleEnd)}
            </h1>
            <p className="mt-6 max-w-xl text-base text-on-dark md:text-lg">{tr(copy.intro)}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#my-works" className="btn-brand">
                {tr(copy.seeProject)} <FaArrowRight />
              </a>
              <a href={CV_URL} download className="btn-outline-light">
                {tr(copy.cv)} <FaDownload />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-64 md:w-full md:max-w-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-brand" />
            <img src="/Image1.jpg" alt="Felix Atoma" className="relative aspect-[545/632] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <Skills />

      {/* About Section */}
      <AboutMe />

      {/* Counters */}
      <section className="bg-charcoal py-16">
        <div className="container-x grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {stats.map(({ value, label }, index) => (
            <motion.div
              key={value + label.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="font-display text-4xl font-bold text-brand md:text-5xl">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-on-dark">{tr(label)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <MyWorks />

      {/* Experience & Education */}
      <Experience />

      {/* Call to Action */}
      <section className="bg-brand py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-charcoal md:text-3xl">{tr(copy.ctaTitle)}</h2>
            <p className="mt-2 text-charcoal/80">{tr(copy.ctaText)}</p>
          </div>
          <Link to="/contact" className="btn-dark">
            {tr(copy.ctaButton)} <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
