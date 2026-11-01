import React from "react";
import { FaArrowRight } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const services = [
  { title: "Website Redesign", img: "/web.png", text: "Modern, fast and responsive rebuilds of existing sites." },
  { title: "Mobile App UI", img: "/mobile.png", text: "Clean, touch-friendly interfaces for Android and iOS." },
  { title: "E-commerce Platform", img: "/ecommerce2.png", text: "Online stores with catalogues, carts and checkout." },
  { title: "Dashboard Design", img: "/dashboard2.png", text: "Admin panels and analytics that make data readable." },
  { title: "Brand Identity", img: "/felixio.png", text: "Logos, colours and type that give a product a voice." },
  { title: "UX Research", img: "/ux1.png", text: "User interviews and testing that shape what gets built." },
];

const Services = () => {
  return (
    <div>
      <PageHeader
        eyebrow="Services"
        title="Services"
        intro="Design and development for web and mobile, delivered by one person from the first sketch to launch."
      />

      {/* Services Section */}
      <section id="services" className="bg-surface py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow">What I offer</p>
            <h2 className="section-title">Services I build for</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group bg-white shadow-sm transition hover:shadow-xl">
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-t-4 border-brand p-6">
                  <h3 className="text-lg font-bold text-charcoal">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* See My Work Button */}
          <div className="mt-12">
            <a
              href="https://e-report-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand"
            >
              See My Work <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
