import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-100 to-white py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        What Clients Say
      </h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        Here’s what some of my clients and collaborators from Ghana's tech space
        have shared about working with me.
      </p>

      <div className="relative w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-orange-300"
            />
            <p className="text-gray-700 italic mb-4 text-lg">
              “{testimonials[current].feedback}”
            </p>
            <h4 className="font-semibold text-xl text-gray-900">
              {testimonials[current].name}
            </h4>
            <p className="text-sm text-orange-600 mt-1">{testimonials[current].role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 gap-3 flex-wrap">
          {testimonials.map((item, index) => (
            <button key={index} onClick={() => setCurrent(index)}>
              <img
                src={item.image}
                alt={item.name}
                className={`w-12 h-12 rounded-full border-2 transition ${
                  current === index
                    ? "border-orange-500 scale-110"
                    : "border-gray-300 opacity-60 hover:opacity-100"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}