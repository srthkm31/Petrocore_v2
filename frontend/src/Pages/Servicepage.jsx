import React from "react";
import { BarChart3, Settings2, Activity, Users } from "lucide-react";
import img1 from "../assets/Servicepage/pmc.webp";
import img2 from "../assets/Servicepage/well.webp";
import img3 from "../assets/Servicepage/execsup.webp";
import img4 from "../assets/Servicepage/workforce.webp";
import img5 from "../assets/Servicepage/mud.webp";
import img6 from "../assets/Servicepage/drill.webp";
import PetrocoreFooter from "../Components/PetrocoreFooter";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const Servicepage = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Project Management Consultancy (PMC)",
      image: img1,
      features: [
        "End-to-end project planning",
        "Risk assessment & mitigation",
        "Cost control & budget optimization",
        "Stakeholder management",
        "Quality assurance & compliance",
        "Schedule monitoring",
      ],
    },
    {
      title: "Well Engineering",
      image: img2,
      features: [
        "Well design & trajectory planning",
        "Drilling program development",
        "Casing & cementing design",
        "Well completion optimization",
        "Formation evaluation",
        "Hydraulics analysis",
      ],
    },
    {
      title: "Execution & Operational Support",
      image: img3,
      features: [
        "On-site technical supervision",
        "Real-time monitoring & reporting",
        "Operational troubleshooting",
        "Performance optimization",
        "Safety oversight",
        "Emergency coordination",
      ],
    },
    {
      title: "Workforce Solutions",
      image: img4,
      features: [
        "Certified drilling engineers",
        "Experienced well engineers",
        "Project coordinators",
        "Maintenance specialists",
        "Safety & HSE professionals",
        "Technical support staff",
      ],
    },
    {
      title: "Mud Engineering",
      image: img5,

      features: [
        "Drilling fluid design & optimization",
        "Mud property monitoring & control",
        "Hydraulics performance enhancement",
        "Solids control management",
        "Wellbore stability support",
        "Contamination analysis & treatment",
      ],
    },
    {
      title: "Drilling Equipment Trading",
      image: img6,
      features: [
        "Supply of drilling tools & equipment",
        "Sourcing from trusted global vendors",
        "Quality inspection & compliance assurance",
        "Inventory support for critical operations",
        "Equipment procurement management",
        "Timely delivery & logistics coordination",
      ],
    },
  ];

  return (
    <section className="bg-white font-['Satoshi'] min-h-screen selection:bg-black selection:text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pb-24 pt-12 md:pt-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.05em] text-black mb-8 leading-none">
            Our Services.
          </h2>
          <p className="text-base md:text-lg text-neutral-500 font-semibold leading-relaxed border-l-[1.5px] border-[#FF6B00] pl-6">
            Driving operational excellence through technical precision and
            scalable engineering solutions for complex energy projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div key={index} className="group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-black mb-4 ">
                  {service.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-neutral-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0" />
                      <span className="text-sm md:text-base font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-4">
              Let’s Power Your Next Project Together
            </h3>
            <p className="text-neutral-400 text-base md:text-lg">
              Partner with us to transform your operational efficiency and
              engineering precision.
            </p>
          </div>
          <button
            className="bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-[10px] cursor-pointer hover:bg-blue-600 hover:text-white transition-all rounded-sm"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact with us
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Servicepage;
