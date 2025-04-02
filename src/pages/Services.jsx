import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full bg-gray-100 py-16 px-6 md:px-20 flex items-start min-h-[50vh]">
        <div className="max-w-6xl w-full">
          <div className="text-gray-600 text-lg">
            <span className="text-red-500 font-semibold">Home</span> / My Services
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mt-2 relative inline-block">
            Services
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-red-500"></span>
          </h2>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="text-center py-16 bg-orange-100 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { title: "Website Redesign", img: "/images/work1.jpg" },
            { title: "Mobile App UI", img: "/images/work2.jpg" },
            { title: "E-commerce Platform", img: "/images/work3.jpg" },
            { title: "Dashboard Design", img: "/images/work4.jpg" },
            { title: "Brand Identity", img: "/images/work5.jpg" },
            { title: "UX Research", img: "/images/work6.jpg" }
          ].map((work, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-64 md:h-80 object-cover transition duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-2xl font-bold text-white">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* More Work Button */}
        <div className="mt-12">
          <button
            onClick={() => navigate("/more-works")}
            className="bg-gray-900 border-2 border-white text-white py-2 px-6 rounded-full text-lg font-semibold transition hover:bg-white hover:text-gray-900"
          >
            More Work
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;