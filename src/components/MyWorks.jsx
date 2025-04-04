import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const MyWorks = () => {
    
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <section id="my-works" className="text-center py-16 bg-orange-100">
      <h2 className="text-4xl font-bold text-orange-600 mb-8">My Works</h2>

      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Work Card 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/web.png"
            alt="Work 1"
            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Website Redesign</h3>
          </div>
        </div>

        {/* Work Card 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/mobile.png"
            alt="Work 2"
            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Mobile App UI</h3>
          </div>
        </div>

        {/* Work Card 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/ecommerce2.png"
            alt="Work 3"
            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">E-commerce Platform</h3>
          </div>
        </div>

        {/* Work Card 4 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/dashboard2.png"
            alt="Work 4"
            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Dashboard Design</h3>
          </div>
        </div>

        {/* Work Card 5 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/felixio.png"
            alt="Work 5"
            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">Brand Identity</h3>
          </div>
        </div>

        {/* Work Card 6 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg group">
          <img
            src="/ux1.png"
            alt="Work 6"
            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-2xl font-bold text-white">UX Research</h3>
          </div>
        </div>
      </div>

      {/* More Work Button */}
      <div className="mt-12">
        <button   onClick={() => navigate("more-works")} className="px-6 py-3 text-white bg-[#F7931E] hover:bg-[#e07e12] font-semibold text-lg rounded-full transition duration-300 shadow-lg"
        >
          More Work
        </button>
      </div>
    </section>
  );
};

export default MyWorks;
