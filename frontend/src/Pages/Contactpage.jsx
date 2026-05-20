import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Navbar from "../Components/Navbar";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(e.target.value) && e.target.value !== "") {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    }

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsSending(true);

    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        service: formData.service,
        message: formData.message,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        payload,
      );

      setStatus({
        type: "success",
        message:
          res.data?.message ||
          "Your message has been sent successfully. Our team will contact you shortly.",
      });

      console.log(res.data);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });

      setEmailError("");
    } catch (error) {
      console.log(error);

      setStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputStyles =
    "w-full bg-white border border-neutral-200 px-4 py-3 text-base text-black placeholder:text-neutral-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all duration-200 rounded-lg";

  const labelStyles = "block text-sm font-bold text-[#002B49] mb-1.5";

  return (
    <div className="bg-white min-h-screen text-[#1a1a1a] font-['Satoshi'] selection:bg-black selection:text-white">
      <Navbar />

      <header className="max-w-5xl mx-auto px-6 pt-12 pb-8 md:pt-20">
        <h1 className="text-3xl md:text-5xl font-black tracking-[-0.05em] text-black mb-6 leading-none">
          Contact Us
        </h1>

        <div className="flex items-stretch gap-6 pl-6 border-l-[1.5px] border-[#FF6B00]">
          <p className="text-base md:text-lg text-neutral-500 font-medium leading-relaxed max-w-2xl">
            Connect with our energy workforce specialists to discuss technical
            precision and operational excellence for your next project.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-black/5 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#FF6B00]" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Email
              </h4>
            </div>
            <div className="space-y-1 text-sm md:text-base font-bold leading-tight">
              <p>info@petrocore.in</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#FF6B00]" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Phone
              </h4>
            </div>
            <div className="space-y-1 text-sm md:text-base font-bold leading-tight">
              <p>+91 9068819505</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FF6B00]" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Office
              </h4>
            </div>
            <div className="space-y-1 text-sm md:text-base font-bold leading-tight">
              <p>
                140 MEGA MANSIONS, OPP RADHA MADHAV SCHOOL, R.K.University,
                Bareilly, Bareilly- 243006, Uttar Pradesh
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#FF6B00]" />
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Hours
              </h4>
            </div>
            <div className="space-y-1 text-sm md:text-base font-bold leading-tight">
              <p>Mon - Sat: 10AM - 6PM</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 md:p-12 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-100">
          <header className="mb-10">
            <h3 className="text-3xl font-black tracking-tight text-[#002B49] mb-2">
              Send Us a Message
            </h3>

            <p className="text-neutral-500 font-medium">
              Fill out the form below and our team will get back to you within
              48 hours.
            </p>
          </header>

          {status.message && (
            <div
              className={`mb-6 flex items-start gap-3 rounded-lg border px-4 py-4 text-sm font-medium ${
                status.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle2 size={18} className="mt-[1px] shrink-0" />
              ) : (
                <AlertCircle size={18} className="mt-[1px] shrink-0" />
              )}

              <p>{status.message}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className={labelStyles}>Full Name *</label>

              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className={inputStyles}
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className={labelStyles}>Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className={`${inputStyles} ${
                    emailError
                      ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                      : ""
                  }`}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                {emailError && (
                  <p className="text-sm text-red-500 mt-1">{emailError}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className={labelStyles}>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  className={inputStyles}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className={labelStyles}>Company</label>

              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
                className={inputStyles}
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-1 relative">
              <label className={labelStyles}>Service Interest</label>

              <div className="relative">
                <select
                  name="service"
                  className={`${inputStyles} appearance-none cursor-pointer pr-10`}
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>

                  <option value="Project Management Consultancy">
                    Project Management Consultancy
                  </option>

                  <option value="Well Engineering">Well Engineering</option>

                  <option value="Execution & Operational Support">
                    Execution & Operational Support
                  </option>

                  <option value="Workforce Solutions">
                    Workforce Solutions
                  </option>

                  <option value="Other">Other</option>
                </select>

                <ChevronDown
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className={labelStyles}>Message *</label>

              <textarea
                name="message"
                placeholder="Tell us about your project needs..."
                rows={4}
                className={`${inputStyles} resize-none`}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSending}
                className={`w-full sm:w-auto px-12 py-4 rounded-lg font-black uppercase tracking-widest text-[13px] flex items-center justify-center gap-3 transition-all duration-200 shadow-lg shadow-orange-500/20 ${
                  isSending
                    ? "bg-[#ff8c3a] cursor-not-allowed text-white"
                    : "bg-[#FF6B00] hover:bg-[#e65a00] text-white"
                }`}
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        <footer className="mt-20 pt-16 border-t border-black/5 text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-none">
            Prefer to Talk?
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="inline-flex flex-col md:flex-row items-center gap-4 border-[1.5px] border-[#FF6B00] px-8 py-5">
              <span className="text-md font-black tracking-widest text-[#FF6B00]">
                Call :
              </span>

              <a
                href="tel:+919068819505"
                className="text-2xl font-black tracking-tight hover:opacity-70 transition-opacity"
              >
                +91 9068819505
              </a>
            </div>

            <div className="inline-flex flex-col md:flex-row items-center gap-4 border-[1.5px] border-[#25D366] px-8 py-5">
              <span className="text-md font-black tracking-widest text-[#25D366]">
                WhatsApp :
              </span>

              <a
                href="https://wa.me/919068819505"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-black tracking-tight hover:opacity-70 transition-opacity"
              >
                +91 9068819505
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ContactPage;
