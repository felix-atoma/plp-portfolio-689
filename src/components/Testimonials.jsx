import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Linda Dzifa",
    role: "Founder, Nashma Agribusiness",
    feedback:
      "Felix transformed our ideas into a clean, intuitive web experience. His UX decisions significantly improved user engagement.",
    image: "/aisha.png",
  },
  {
    name: "Kwame Boateng",
    role: "CEO, United Intellects",
    feedback:
      "Professional, detail-oriented, and creative! Felix brought our vision to life with impactful design and smooth functionality.",
    image: "/kwame.png",
  },
  {
    name: "Efua Serwaa",
    role: "UI Consultant, ImmoAsk",
    feedback:
      "Felix’s Tailwind and React skills were essential in launching our mobile-first rental platform. A true team player.",
    image: "/Afua.png",
  },
  {
    name: "Kweku Danso",
    role: "CTO, Agence Immobilière Togo",
    feedback:
      "Felix implemented responsive layouts and API integration that enhanced performance. His work ethic is top-notch!",
    image: "/kwaku.png",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const go = (step) => setCurrent((prev) => (prev + step + testimonials.length) % testimonials.length);
  const item = testimonials[current];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">What clients say</h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            Here’s what some of my clients and collaborators from Ghana's tech space
            have shared about working with me.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center border border-divider text-charcoal transition hover:border-brand hover:bg-brand"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center border border-divider text-charcoal transition hover:border-brand hover:bg-brand"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.figure
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="relative border-l-4 border-brand bg-surface p-8 md:p-12"
            >
              <FaQuoteLeft className="absolute right-8 top-8 text-5xl text-divider" />
              <div className="flex gap-1 text-brand">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <blockquote className="mt-6 text-lg leading-relaxed text-charcoal md:text-xl">
                “{item.feedback}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-charcoal">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-6 flex gap-2">
            {testimonials.map((t, index) => (
              <button
                key={t.name}
                onClick={() => setCurrent(index)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-1.5 transition-all ${current === index ? "w-10 bg-brand" : "w-5 bg-divider hover:bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
