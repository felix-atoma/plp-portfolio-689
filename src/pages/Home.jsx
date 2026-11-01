import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Skills from "../components/Skills";
import MyWorks from "../components/MyWorks";
import AboutMe from "../components/About";
import TestimonialCarousel from "../components/Testimonials";

const stats = [
  { value: "2024", label: "NovaBulletin founded" },
  { value: "6", label: "Countries served" },
  { value: "12+", label: "Core technologies" },
  { value: "2", label: "Working languages (EN / FR)" },
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
            <p className="eyebrow-light">Software engineer · Teacher · Translator</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              I build software for <span className="text-brand">African schools</span> and businesses
            </h1>
            <p className="mt-6 max-w-xl text-base text-on-dark md:text-lg">
              I'm Felix, lead engineer at Felixio and co-founder of NovaBulletin. I design and ship web and
              mobile products with React, React Native and the MERN stack, from the first sketch to production.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#my-works" className="btn-brand">
                View my work <FaArrowRight />
              </a>
              <Link to="/contact" className="btn-outline-light">
                Let's talk
              </Link>
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

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Call to Action */}
      <section className="bg-brand py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-charcoal md:text-3xl">Have a project in mind?</h2>
            <p className="mt-2 text-charcoal/80">Tell me about it and let's build it together.</p>
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
