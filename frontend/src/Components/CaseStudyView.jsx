// import React from "react";
// import { ArrowUpRight, Drill, Users, Settings2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const CaseStudyView = () => {
//   const caseStudies = [
//     {
//       id: "01",
//       title: "Offshore Drilling Optimization",
//       description:
//         "Improving drilling efficiency and operational reliability through advanced planning, technical oversight, and real-time execution support.",
//       icon: <Drill className="w-5 h-5" />,
//     },
//     {
//       id: "02",
//       title: "Workforce Deployment Excellence",
//       description:
//         "Rapid mobilization of highly skilled professionals to support critical operations with seamless coordination and minimal downtime.",
//       icon: <Users className="w-5 h-5" />,
//     },
//     {
//       id: "03",
//       title: "Well Engineering Transformation",
//       description:
//         "Enhancing well performance and safety through innovative engineering strategies, optimized design, and data-driven execution.",
//       icon: <Settings2 className="w-5 h-5" />,
//     },
//   ];
//   const navigate = useNavigate();
//   return (
//     <section className="bg-white py-12 md:py-24 px-6 md:px-12 lg:px-24 text-slate-900 overflow-hidden mt-5 md:mt-20 mb-5 md:mb-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 md:gap-12 mb-16 md:mb-24 font-['Satoshi']">
//           <div className="lg:w-1/2">
//             <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tighter leading-[1.1] md:leading-none">
//               Success Stories.
//             </h2>
//           </div>
//           <div className="lg:w-1/3">
//             <p className="text-lg md:text-2xl text-neutral-700 leading-relaxed border-l-2 md:border-l-2 border-orange-500 pl-6 font-['Satoshi']">
//               Real results for real challenges
//             </p>
//           </div>
//         </div>

//         <div className="border-t border-slate-100">
//           {caseStudies.map((study, index) => (
//             <div
//               key={index}
//               className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 border-b border-slate-100 hover:bg-slate-50/50 transition-colors duration-500 px-4 -mx-4 font-['Satoshi'] items-center"
//             >
//               <div className="md:col-span-2 flex items-center justify-center gap-6">
//                 <span className="text-lg font-medium text-slate-400 mt-1">
//                   {study.id}
//                 </span>
//                 <div className="text-neutral-600">{study.icon}</div>
//               </div>

//               <div className="md:col-span-5 text-center">
//                 <h3 className="text-xl md:text-2xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
//                   {study.title}
//                 </h3>
//               </div>

//               <div className="md:col-span-5 text-center">
//                 <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mx-auto">
//                   {study.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 p-8 md:p-12 text-white rounded-xl md:rounded-lg font-['Satoshi'] text-center md:text-left">
//           <div className="max-w-md">
//             <h4 className="text-xl md:text-2xl font-light leading-snug">
//               Explore our catalog of technical case studies.
//             </h4>
//           </div>
//           <button
//             className="w-full md:w-auto whitespace-nowrap bg-white text-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors rounded-lg cursor-pointer"
//             onClick={() => {
//               navigate("/case-studies");
//             }}
//           >
//             View All Studies
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudyView;
