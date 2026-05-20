import React from "react";

const ProcessSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#f7f7f7] flex flex-col relative font-['Satoshi'] text-black overflow-hidden pt-20 ">
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 font-['Satoshi'] gap-10 md:gap-15">
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-bold tracking-tight text-center md:pb-2 max-w-5xl">
          From Planning to Performance
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-10 w-full p-4 md:p-8 ">
          <div className="flex flex-row md:flex-col justify-start md:justify-center items-center group cursor-pointer gap-6 md:gap-0 w-[200px] md:w-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] rounded-full relative flex items-center justify-center group-hover:-translate-y-1 md:group-hover:-translate-y-2 group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-black/90 border border-gray-700/50 shadow-xl group-hover:bg-black group-hover:border-gray-400 group-hover:shadow-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 to-transparent opacity-60 pointer-events-none"></div>
              <span className="relative text-2xl md:text-3xl font-light text-white">
                1
              </span>
            </div>
            <p className="md:mt-5 text-lg md:text-lg font-bold text-neutral-600 group-hover:text-black text-left flex-1 md:flex-initial md:text-center">
              Planning
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 mb-8 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>

          <div className="flex flex-row md:flex-col justify-start md:justify-center items-center group cursor-pointer gap-6 md:gap-0 w-[200px] md:w-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] rounded-full relative flex items-center justify-center group-hover:-translate-y-1 md:group-hover:-translate-y-2 group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-black/90 border border-gray-700/50 shadow-xl group-hover:bg-black group-hover:border-gray-400 group-hover:shadow-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 to-transparent opacity-60 pointer-events-none"></div>
              <span className="relative text-2xl md:text-3xl font-light text-white">
                2
              </span>
            </div>
            <p className="md:mt-5 text-lg md:text-lg font-bold text-neutral-600 group-hover:text-black text-left flex-1 md:flex-initial md:text-center">
              Design
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 mb-8 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>

          <div className="flex flex-row md:flex-col justify-start md:justify-center items-center group cursor-pointer gap-6 md:gap-0 w-[200px] md:w-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] rounded-full relative flex items-center justify-center group-hover:-translate-y-1 md:group-hover:-translate-y-2 group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-black/90 border border-gray-700/50 shadow-xl group-hover:bg-black group-hover:border-gray-400 group-hover:shadow-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 to-transparent opacity-60 pointer-events-none"></div>
              <span className="relative text-2xl md:text-3xl font-light text-white">
                3
              </span>
            </div>
            <p className="md:mt-5 text-lg md:text-lg font-bold text-neutral-600 group-hover:text-black text-left flex-1 md:flex-initial md:text-center">
              Execution
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 mb-8 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>

          <div className="flex flex-row md:flex-col justify-start md:justify-center items-center group cursor-pointer gap-6 md:gap-0 w-[200px] md:w-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] rounded-full relative flex items-center justify-center group-hover:-translate-y-1 md:group-hover:-translate-y-2 group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-black/90 border border-gray-700/50 shadow-xl group-hover:bg-black group-hover:border-gray-400 group-hover:shadow-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 to-transparent opacity-60 pointer-events-none"></div>
              <span className="relative text-2xl md:text-3xl font-light text-white">
                4
              </span>
            </div>
            <p className="md:mt-5 text-lg md:text-lg font-bold text-neutral-600 group-hover:text-black text-left flex-1 md:flex-initial md:text-center">
              Monitoring
            </p>
          </div>

          <svg
            className="hidden md:block w-4 h-4 mb-8 text-neutral-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>

          <div className="flex flex-row md:flex-col justify-start md:justify-center items-center group cursor-pointer gap-6 md:gap-0 w-[200px] md:w-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] rounded-full relative flex items-center justify-center group-hover:-translate-y-1 md:group-hover:-translate-y-2 group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-black/90 border border-gray-700/50 shadow-xl group-hover:bg-black group-hover:border-gray-400 group-hover:shadow-2xl"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 to-transparent opacity-60 pointer-events-none"></div>
              <span className="relative text-2xl md:text-3xl font-light text-white">
                5
              </span>
            </div>
            <p className="md:mt-5 text-lg md:text-lg font-bold text-neutral-600 group-hover:text-black text-left flex-1 md:flex-initial md:text-center">
              Optimization
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-[1500px] mx-auto px-6 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-center md:items-end relative z-10 gap-10 mt-15 md:mt-0">
        <div className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-700 font-['Satoshi'] :ml-25">
          Petrocore
        </div>

        <div className="max-w-[800px] text-md xl:text-lg leading-snug font-medium text-neutral-500 font-['Satoshi']">
          <p>
            Our process is built on precision, efficiency, and operational
            excellence. From initial planning and engineering design to
            execution, monitoring, and optimization, every phase is carefully
            managed to ensure reliable performance, safety compliance, and
            long-term project success. By combining technical expertise with a
            skilled workforce, Petrocore delivers streamlined solutions tailored
            to the unique demands of every energy operation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ProcessSection;
