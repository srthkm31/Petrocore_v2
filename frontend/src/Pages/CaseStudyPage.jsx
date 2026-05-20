// import React from "react";
// import { ArrowUpRight, Minus, MapPin, Building2 } from "lucide-react";
// import Navbar from "../Components/Navbar";
// import img1 from "../assets/CaseStudy/img1.png";
// import img2 from "../assets/CaseStudy/img2.png";
// import img3 from "../assets/CaseStudy/img3.png";
// import { useNavigate } from "react-router-dom";

// const CaseStudyPage = () => {
//   const navigate = useNavigate();
//   const cases = [
//     {
//       number: "01",
//       title: "Offshore Drilling Optimization",
//       location: "North Sea",
//       operator: "Major E&P Operator",
//       image: img1,
//       challenge:
//         "Client faced 30% cost overruns on multiple offshore drilling operations with extended well completion timelines affecting production targets.",
//       solution:
//         "Implemented comprehensive PMC framework with optimized well design, real-time monitoring, and deployment of experienced drilling engineers.",
//       stats: [
//         { label: "Cost Reduction", value: "25%" },
//         { label: "Completion Speed", value: "+40%" },
//         { label: "Safety Record", value: "Zero Incidents" },
//         { label: "Budget Delivery", value: "100%" },
//       ],
//     },
//     {
//       number: "02",
//       title: "Workforce Deployment Excellence",
//       location: "Middle East",
//       operator: "International JV",
//       image: img2,
//       challenge:
//         "Critical skill shortage across multiple disciplines causing project delays. Client needed 50+ certified professionals deployed within 2 weeks.",
//       solution:
//         "Mobilized pre-vetted workforce network, conducted rapid certification, and deployed multidisciplinary teams including HSE specialists.",
//       stats: [
//         { label: "Professionals Deployed", value: "50+" },
//         { label: "Mobilization Time", value: "2 Weeks" },
//         { label: "Project Downtime", value: "Zero" },
//         { label: "Timeline Status", value: "On Schedule" },
//       ],
//     },
//     {
//       number: "03",
//       title: "Well Engineering Transformation",
//       location: "Asia Pacific",
//       operator: "National Oil Company",
//       image: img3,
//       challenge:
//         "Inefficient well design processes resulting in longer drilling times and higher non-productive time (NPT).",
//       solution:
//         "Developed standardized workflows, introduced advanced simulation tools, and established real-time monitoring protocols.",
//       stats: [
//         { label: "NPT Reduction", value: "35%" },
//         { label: "Drilling Speed", value: "20% Faster" },
//         { label: "Wellbore Stability", value: "Improved" },
//         { label: "Team Capability", value: "Enhanced" },
//       ],
//     },
//   ];

//   return (
//     <div className="bg-white min-h-screen text-[#1a1a1a] font-['Satoshi'] selection:bg-black selection:text-white">
//       <Navbar />

//       <header className="max-w-5xl mx-auto px-6 pt-12 pb-10 md:pt-20">
//         <div className="max-w-4xl">
//           <h1 className="text-3xl md:text-5xl font-black tracking-[-0.05em] text-black mb-8 leading-none">
//             Proven Results.
//           </h1>
//           <div className="flex items-stretch gap-6 pl-6 border-l-[1.5px] border-[#FF6B00]">
//             <p className="text-base md:text-lg text-neutral-500 font-semibold leading-relaxed max-w-2xl">
//               Driving operational excellence through technical precision and
//               scalable engineering solutions for complex energy projects.
//             </p>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-5xl mx-auto px-6 pb-24">
//         {cases.map((item, idx) => (
//           <section
//             key={idx}
//             className="py-12 md:py-16 border-t border-black/10"
//           >
//             <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 gap-6">
//               <div className="max-w-2xl">
//                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6B00] mb-3 block">
//                   Project Case {item.number}
//                 </span>
//                 <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
//                   {item.title}
//                 </h2>
//               </div>

//               <div className="flex flex-wrap gap-8 border-l border-black/10 pl-6 py-1">
//                 <div className="min-w-[100px]">
//                   <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1.5">
//                     Location
//                   </p>
//                   <p className="text-sm font-bold flex items-center gap-2">
//                     <MapPin size={14} className="text-black" /> {item.location}
//                   </p>
//                 </div>
//                 <div className="min-w-[120px]">
//                   <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1.5">
//                     Operator
//                   </p>
//                   <p className="text-sm font-bold flex items-center gap-2">
//                     <Building2 size={14} className="text-black" />
//                     {item.operator}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg mb-12 group">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
//               <div className="space-y-3">
//                 <h4 className="flex items-center gap-2 text-[11px] font-black tracking-widest text-red-600 uppercase">
//                   <Minus size={16} strokeWidth={4} /> The Challenge
//                 </h4>
//                 <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-semibold">
//                   {item.challenge}
//                 </p>
//               </div>
//               <div className="space-y-3">
//                 <h4 className="flex items-center gap-2 text-[11px] font-black tracking-widest text-emerald-600 uppercase">
//                   <Minus size={16} strokeWidth={4} /> The Strategy
//                 </h4>
//                 <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
//                   {item.solution}
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//               {item.stats.map((stat, sIdx) => (
//                 <div
//                   key={sIdx}
//                   className="bg-white border border-black/5 p-5 md:p-6 rounded-md hover:border-[#FF6B00] transition-colors duration-300"
//                 >
//                   <p className="text-[9px] font-black uppercase tracking-widest text-neutral-400 mb-2">
//                     {stat.label}
//                   </p>
//                   <p className="text-xl md:text-2xl font-black tracking-tighter">
//                     {stat.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         ))}
//       </main>

//       <footer className="bg-black text-white py-16 px-6">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
//           <div className="max-w-xl">
//             <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-4">
//               Ready for the next Project?
//             </h3>
//             <p className="text-neutral-400 text-base md:text-lg">
//               Partner with us to transform your operational efficiency and
//               engineering precision.
//             </p>
//           </div>
//           <button
//             className="bg-white text-black px-8 py-4 font-black uppercase tracking-widest text-[10px] cursor-pointer hover:bg-[#FF6B00] hover:text-white transition-all rounded-sm"
//             onClick={() => {
//               navigate("/contact");
//             }}
//           >
//             Contact with us
//           </button>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CaseStudyPage;
