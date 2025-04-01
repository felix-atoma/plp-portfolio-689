import React from "react";
import { Link } from "react-router-dom";

const moreWorksData = [
  { id: 1, title: "Portfolio Website", img: "/images/work7.jpg" },
  { id: 2, title: "E-learning Platform", img: "/images/work8.jpg" },
  { id: 3, title: "Health App UI", img: "/images/work9.jpg" },
  { id: 4, title: "Fintech Dashboard", img: "/images/work10.jpg" },
  { id: 5, title: "Restaurant Booking", img: "/images/work11.jpg" },
  { id: 6, title: "Event Management", img: "/images/work12.jpg" },
  { id: 7, title: "SaaS Landing Page", img: "/images/work13.jpg" },
  { id: 8, title: "News Website", img: "/images/work14.jpg" },
  { id: 9, title: "AI Chatbot UI", img: "/images/work15.jpg" },
  { id: 10, title: "NFT Marketplace", img: "/images/work16.jpg" },
];

const MoreWorks = () => {
  return (
    <section className="text-center py-16 bg-orange-100 min-h-screen">
      <h2 className="text-4xl font-bold text-orange-600 mb-8">More Works</h2>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {moreWorksData.map((work) => (
          <div key={work.id} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-2xl font-bold text-white">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="mt-12">
        <Link
          to="/"
          className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-semibold text-lg rounded-full transition duration-300 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default MoreWorks;
