import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Aisha Mensah",
    role: "Product Manager, TechWave Ghana",
    feedback:
      "Felix brought our design vision to life! His attention to responsive design and user-friendly layouts is impressive.",
    image: "/aisha.png",
  },
  {
    name: "Kwame Boateng",
    role: "CEO, Accra Digital",
    feedback:
      "Professional, detail-oriented, and creative! Felix delivered a modern frontend that truly speaks to Ghana’s tech future.",
    image: "/kwame.png",
  },
  {
    name: "Efua Serwaa",
    role: "Lead Designer, AfroTech",
    feedback:
      "Collaborating with Felix was seamless. His Tailwind and React skills made our mobile-first project smooth and delightful.",
    image: "/Afua.png",
  },
  {
    name: "Kweku Danso",
    role: "CTO, Kumasi Startups",
    feedback:
      "Clean code, interactive UI, and performance optimization all in one! Felix is a frontend powerhouse!",
    image: "/kwaku.png",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
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

        {/* Thumbnails */}
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
