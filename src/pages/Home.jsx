import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Skills from "../components/Skills";
import MyWorks from "../components/MyWorks";
import AboutMe from "../components/About";
import Experience from "../components/Experience";
import { CV_URL } from "../data/profile";

const stats = [
  { value: "12+", label: "Years of professional experience" },
  { value: "2", label: "Working languages (FR / EN)" },
  { value: "5", label: "User roles in NovaBulletin" },
  { value: "16", label: "Tools & technologies" },
];

const Home = () => {
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
            <p className="eyebrow-light">Software developer · French–English translator</p>
            <p className="mt-5 text-xl font-semibold text-white md:text-2xl">Hi, I'm Felix Atoma.</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              I build <span className="text-brand">secure web apps</span> in English and French
            </h1>
            <p className="mt-6 max-w-xl text-base text-on-dark md:text-lg">
              Bilingual full-stack developer based in Accra. I build and deploy web applications with Node.js, NestJS,
              React, Python and SQL, and I'm the founder and lead developer of NovaBulletin, a live school management
              platform.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#my-works" className="btn-brand">
                See NovaBulletin <FaArrowRight />
              </a>
              <a href={CV_URL} download className="btn-outline-light">
                Download CV <FaDownload />
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
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="font-display text-4xl font-bold text-brand md:text-5xl">{value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-on-dark">{label}</p>
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
            <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Need a developer or a translator?</h2>
            <p className="mt-2 text-charcoal/80">Tell me about your project, in English or in French.</p>
          </div>
          <Link to="/contact" className="btn-dark">
            Start a conversation <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
