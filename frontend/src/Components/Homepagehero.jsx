import { ArrowRight } from "lucide-react";
import bgImage from "../assets/bg.webp";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Homepagehero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full bg-black font-['Satoshi'] selection:bg-white/20 overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Engineering Backdrop"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-brightness-[0.9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-10">
          Core Strength in <br /> Well Engineering and Workforce Solutions
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-8">
          <button
            className="group flex items-center gap-3 text-white text-lg font-medium hover:opacity-70 transition-all"
            onClick={() => {
              navigate("/services");
            }}
          >
            Explore Services
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            className="px-10 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white text-lg font-medium rounded-full backdrop-blur-md transition-all"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepagehero;
