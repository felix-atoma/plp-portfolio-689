import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aisha Mensah",
    role: "Product Manager, TechWave Ghana",
    feedback:
      "Felix brought our design vision to life! His attention to responsive design and user-friendly layouts is impressive.",
    image: "https://randomuser.me/api/portraits/women/65.jpg", // African woman
  },
  {
    name: "Kwame Boateng",
    role: "CEO, Accra Digital",
    feedback:
      "Professional, detail-oriented, and creative! Felix delivered a modern frontend that truly speaks to Ghana’s tech future.",
    image: "https://randomuser.me/api/portraits/men/76.jpg", // African man
  },
  {
    name: "Efua Serwaa",
    role: "Lead Designer, AfroTech",
    feedback:
      "Collaborating with Felix was seamless. His Tailwind and React skills made our mobile-first project smooth and delightful.",
    image: "https://randomuser.me/api/portraits/women/64.jpg", // African woman
  },
  {
    name: "Kweku Danso",
    role: "CTO, Kumasi Startups",
    feedback:
      "Clean code, interactive UI, and performance optimization all in one! Felix is a frontend powerhouse!",
    image: "https://randomuser.me/api/portraits/men/64.jpg", // African man
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-orange-400 text-white font-medium rounded-full shadow hover:bg-orange-500 transition"
          >
            ← Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-orange-400 text-white font-medium rounded-full shadow hover:bg-orange-500 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
