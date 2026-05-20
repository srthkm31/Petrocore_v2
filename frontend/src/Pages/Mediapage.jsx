import React from "react";
import Navbar from "../Components/Navbar";
import img1 from "../assets/Media/img1.webp";
import img2 from "../assets/Media/img2.webp";
import img3 from "../assets/Media/img3.webp";

const Mediapage = () => {
  return (
    <div className="bg-white min-h-screen text-[#1a1a1a] font-['Satoshi'] selection:bg-black selection:text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <header className="max-w-5xl mx-auto px-6 pt-12 pb-8 md:pt-20">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-black tracking-[-0.05em] text-black mb-8 leading-none">
              Media & Highlights
            </h1>
            <div className="flex items-stretch gap-6 pl-6 border-l-[1.5px] border-[#FF6B00]">
              <p className="text-base md:text-lg text-neutral-500 font-semibold leading-relaxed max-w-2xl">
                Petrocore is an integrated oil & gas service company delivering
                precision-driven solutions across the complete project
                lifecycle.
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6 pb-20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[400px] md:auto-rows-[260px]">
            <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={img1}
                alt="Engineering Excellence"
                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 bg-neutral-100"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent"></div>
            </div>

            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={img2}
                alt="Workforce Deployment"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent"></div>
            </div>

            <div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-[1.5rem] shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={img3}
                alt="Operational Journey"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mediapage;
