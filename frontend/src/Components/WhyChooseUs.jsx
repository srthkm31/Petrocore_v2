import React from "react";
import logo from "../assets/logo.webp";

const ServiceCard = ({
  title,
  description,
  isHero = false,
  className = "",
}) => (
  <div
    className={`group relative p-8 rounded-[2rem] border border-neutral-200 transition-all duration-500 font-['Satoshi']
    ${
      isHero
        ? "bg-neutral-100 flex items-center justify-center text-center min-h-[250px]"
        : "bg-neutral-100 flex flex-col justify-between"
    } 
    ${className}`}
  >
    <div className={isHero ? "w-full" : ""}>
      <h3
        className={`font-semibold tracking-tighter text-zinc-900 leading-tight
        ${isHero ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl mb-3"}
      `}
      >
        {title}
      </h3>

      {!isHero && description && (
        <p className="text-zinc-500 text-lg leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-white min-h-screen font-['Satoshi']">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ServiceCard title="Why Choose Us?" isHero={true} />
        <ServiceCard
          title="Trusted Industry Expertise"
          description="Delivering reliable engineering and consultancy backed by extensive industry knowledge."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ServiceCard
          title="Well Engineering"
          description="Comprehensive well planning, trajectory design, drilling optimization and budgeting."
        />
        <ServiceCard
          title="Workforce Deployment"
          description="Skilled professionals mobilized quickly to support critical onshore & offshore operations of national and international oil fields."
        />
        <ServiceCard
          title="Execution & Support"
          description="Providing continuous field coordination and operational assistance."
        />
      </div>
      <div className="relative overflow-hidden bg-zinc-950 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between group">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-white text-3xl md:text-5xl font-medium tracking-tighter leading-tight mb-6">
            Safety-Driven Project Execution. <br />
          </h2>
        </div>
        <div className="relative z-10 mt-12 md:mt-0 flex items-center gap-8">
          <div className="text-right">
            <img
              src={logo}
              alt="Petrocore logo"
              className="h-28 w-auto object-contain max-w-full bg-white rounded-xl p-2"
            />
            <p className="text-white text-sm tracking-wide text-center mt-1">
              Driven by Experience
            </p>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
