import React from "react";
import {
  Minus,
  Shield,
  Zap,
  Target,
  Award,
  Users,
  ChevronRight,
  Globe,
  Layers,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import hsplImage from "../assets/clients/hspl.webp";
import gbo from "../assets/clients/gbo.webp";

const AboutPage = () => {
  const navigate = useNavigate();

  const clients = [
    {
      id: 1,
      companyName: "HSPL",
      image: hsplImage,
      location: "India",
    },
    {
      id: 2,
      companyName: "HSPL GBO",
      image: gbo,
      location: "Georgia",
    },
  ];

  return (
    <div className="bg-white min-h-screen text-[#1a1a1a] font-['Satoshi'] selection:bg-black selection:text-white">
      <Navbar />
      <header className="max-w-5xl mx-auto px-6 pt-12 pb-8 md:pt-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-black tracking-[-0.05em] text-black mb-8 leading-none">
            About Us
          </h1>
          <div className="flex items-stretch gap-6 pl-6 border-l-[1.5px] border-[#FF6B00]">
            <p className="text-base md:text-lg text-neutral-500 font-semibold leading-relaxed max-w-2xl">
              Petrocore is an integrated oil & gas service company delivering
              precision-driven solutions across the complete project lifecycle.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <section className="py-12 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#FF6B00]">
              Integrated Model
            </h3>
            <p className="text-xl font-bold leading-tight">
              A single-point, accountable solution for drilling and field
              development.
            </p>
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
              We coordinate onsite supervision, cost monitoring, and risk
              management to minimize non-productive time.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#FF6B00]">
              Technical Edge
            </h3>
            <p className="text-xl font-bold leading-tight">
              Subsurface insights that strengthen drilling decisions.
            </p>
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
              In-house G&G expertise provides technical interpretation to reduce
              geological risks during well planning.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-[#FF6B00]">
              Commitment
            </h3>
            <p className="text-xl font-bold leading-tight">
              Technically sound and commercially efficient solutions.
            </p>
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
              We help clients achieve reliable field development outcomes
              through strict adherence to safety and quality standards.
            </p>
          </div>
        </section>

        <section className="py-12 border-t border-black/10">
          <h2 className="text-3xl font-black mb-10 opacity-60">
            The Expertise.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
            {[
              {
                label: "Expert Workforce",
                text: "We have a team of skilled professionals with strong expertise in engineering, drilling, and oil & gas operations.",
              },
              {
                label: "Environment",
                text: "Specialized execution in high-pressure, high-temperature (HPHT) environments.",
              },
              {
                label: "Operational",
                text: "Specialists in Pad operations and directional drilling campaigns.",
              },
              {
                label: "Commercial",
                text: "Experts in cost control, performance benchmarking, and KPI tracking.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 pb-5 border-b border-black/5"
              >
                <div className="w-1.5 h-1.5 bg-[#FF6B00] mt-2 rounded-full flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-neutral-400 block mb-2">
                    {item.label}
                  </span>
                  <p className="text-lg font-bold leading-snug">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-t-[3px] border-black mt-3">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black leading-none px-4 py-2  ">
              Our Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-8">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className="bg-white border-[3px] border-black p-4 flex flex-col justify-between shadow-[10px_10px_0px_#1a1a1a] relative h-full min-h-[250px]"
              >
                {client.image && (
                  <div className="w-full h-28 bg-white flex items-center justify-center p-2 relative z-10 ">
                    <img
                      src={client.image}
                      alt={client.companyName}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}

                <div className="relative z-10 flex items-center flex-col gap-3">
                  <h4 className="inline-block text-white bg-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 mb-2 border-[2px] border-black">
                    {client.location}
                  </h4>
                  <span
                    className="text-3xl lg:text-4xl font-black tracking-tighter text-black
                uppercase leading-none"
                  >
                    {client.companyName}
                  </span>
                </div>
              </div>
            ))}

            <div className="bg-[#FF6B00] border-[3px] border-black p-4 flex flex-col justify-center shadow-[10px_10px_0px_#1a1a1a] relative h-full min-h-[250px] overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-4 h-4 bg-black rounded-full" />
                <div className="w-4 h-4 bg-black" />
                <div className="w-4 h-4 bg-black rotate-45" />
              </div>

              <div className="absolute -bottom-12 -left-6 text-[150px] font-black text-black/10 leading-none select-none pointer-events-none">
                *
              </div>

              <div className="relative z-10 flex flex-col items-center text-center mt-4">
                <span className="block text-4xl lg:text-5xl font-black tracking-tighter text-black uppercase italic leading-[0.85] break-words">
                  AND
                  <br />
                  BEYOND.
                </span>
                <div className="w-12 h-2 bg-black mt-4" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-black text-white px-8 mt-12 rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 border-[3px] border-black ">
          <div className="flex flex-col gap-1">
            <h4 className="text-lg font-black uppercase tracking-wider ">
              The Petrocore Advantage
            </h4>
            <p className="text-neutral-400 text-sm tracking-wide">
              Flexible engagement models: Retainer, Per-Well, and Day-Rate.
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <div className="text-center">
              <p className="text-xl font-black">Rapid</p>
              <p className="text-[10px] font-bold tracking-widest text-[#FF6B00] uppercase">
                Deployment
              </p>
            </div>
            <div className="w-[1px] h-10 bg-white/20" />
            <div className="text-center">
              <p className="text-xl font-black">Zero</p>
              <p className="text-[10px] font-bold tracking-widest text-[#FF6B00] uppercase">
                Compromise
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-white py-16 px-6 text-center border-t-[3px] border-black">
        <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
          READY TO <span className="text-[#FF6B00]">SCALE?</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="bg-[#FF6B00] text-black px-8 py-4 font-black uppercase tracking-widest text-[10px] border-[3px] border-black shadow-[4px_4px_0px_#000]"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Our Team
          </button>
          <button
            className="bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-[10px] border-[3px] border-black shadow-[4px_4px_0px_#000]"
            onClick={() => {
              navigate("/services");
            }}
          >
            View Service Catalog
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
