import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Project Manager, TechCorp",
    feedback:
      "An amazing frontend engineer! The UI/UX was flawless, and the performance of our platform improved drastically.",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "David Kim",
    role: "CEO, InnovateX",
    feedback:
      "Working with you was a game-changer! Your expertise in React and Tailwind CSS brought our vision to life.",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Sophia Martinez",
    role: "Lead Developer, DevHub",
    feedback:
      "Your attention to detail and passion for frontend development is truly inspiring. The best engineer we've worked with!",
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Liam Parker",
    role: "CTO, NextGen Solutions",
    feedback:
      "The responsiveness and animations were outstanding. Your skills in Next.js and JavaScript are top-notch!",
    image: "https://via.placeholder.com/80",
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
    <div className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Hear from professionals who have worked with me on frontend development projects.
      </p>
      <div className="relative w-full max-w-xl mx-auto">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center"
        >
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full mb-4 object-cover"
          />
          <p className="text-gray-700 italic mb-4">"{testimonials[current].feedback}"</p>
          <h4 className="font-semibold text-lg text-gray-900">
            {testimonials[current].name}
          </h4>
          <p className="text-sm text-gray-500">{testimonials[current].role}</p>
        </motion.div>
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-orange-300 text-white rounded-lg hover:bg-orange-400"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-orange-300 text-white rounded-lg hover:bg-orange-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
