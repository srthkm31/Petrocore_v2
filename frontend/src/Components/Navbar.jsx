import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Media", href: "/media" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="relative w-full z-[100] font-['Satoshi'] bg-white border-b border-zinc-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="relative flex items-center w-48 h-full">
          <Link to="/" className="absolute left-0 z-[110]">
            <img src={logo} alt="Logo" className="h-20 w-auto object-contain" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-12">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-md font-bold tracking-wide text-black hover:text-zinc-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-end w-48">
          <Link
            to="/contact"
            className="text-sm font-black border-2 border-black px-6 py-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all"
          >
            CONTACT US
          </Link>
        </div>
        <button
          className="md:hidden p-2 text-black outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={32} />
        </button>
      </div>
      <div
        className={`fixed inset-0 top-0 bg-black z-[120] transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full bg-black">
          <div className="flex items-center justify-end px-8 h-20 border-b border-white/10">
            <button onClick={() => setIsOpen(false)} className="text-white p-2">
              <X size={32} strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-2xl text-white font-bold py-8 px-10 border-b border-white/10 transition-colors active:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="p-10 mt-auto">
            <p className="text-white/30 text-md font-black">Petrocore</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
