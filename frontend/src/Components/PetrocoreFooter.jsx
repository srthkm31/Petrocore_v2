import React from "react";
import { Mail, Phone, MapPin, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978 1.602 0 2.444.09 2.844.146v3.222s-1.078-.01-2.286-.01c-1.623 0-2.103.565-2.103 2.057v2.144h3.766l-.504 3.667h-3.262v7.98H9.101z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 010 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const PetrocoreFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white font-['Satoshi'] selection:bg-[#FF6B00]/30">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center border-b border-white/5">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Let's Optimize Your Next Drilling Project
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Partner with industry experts who deliver results. Contact us today to
          discuss your project needs.
        </p>
        <button
          className="inline-flex items-center gap-2 bg-white cursor-pointer text-black px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-zinc-200"
          onClick={() => navigate("/contact")}
        >
          Get in Touch <MoveRight className="w-5 h-5" />
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex items-start">
            <img
              src={logo}
              alt="Petrocore logo"
              className="h-28 w-auto object-contain max-w-full bg-white rounded-xl p-2"
            />
          </div>
          <div className="md:col-span-3">
            <h4 className="font-bold text-lg mb-8 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="hover:text-white transition-colors"
                >
                  Career
                </a>
              </li>
              <li>
                <a href="/media" className="hover:text-white transition-colors">
                  Media
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5 space-y-8">
            <h4 className="font-bold text-lg tracking-tight">Contact Us</h4>
            <ul className="space-y-6 text-zinc-400 font-medium">
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a
                  href="mailto:admin@petrocore.in"
                  className="hover:text-white transition-colors"
                >
                  info@petrocore.in
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <span>+91 9068819505</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-1" />
                <span className="leading-relaxed">
                  140 MEGA MANSIONS, OPP RADHA MADHAV SCHOOL, R.K.University,
                  Bareilly, Bareilly- 243006, Uttar Pradesh
                </span>
              </li>
            </ul>
            <div className="flex gap-6 pt-4 items-center">
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-all"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-zinc-500 hover:text-white transition-all"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-10 text-center">
        <p className="text-zinc-600 text-sm tracking-wide font-medium">
          Petrocore Workforce Solutions Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default PetrocoreFooter;
