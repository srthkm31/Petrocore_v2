import React from "react";
import img1 from "../assets/Homepageservice/PMC.webp";
import img2 from "../assets/Homepageservice/WellEngg.webp";
import img3 from "../assets/Homepageservice/Support.webp";
import img4 from "../assets/Servicepage/workforce.webp";
import img5 from "../assets/Servicepage/mud.webp";
import img6 from "../assets/Servicepage/drill.webp";

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-white text-[#111]">
      <div className="max-w-[1500px] mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-20 font-['Satoshi']">
        <div className="w-full lg:w-1/3 flex flex-col lg:sticky lg:top-24 h-fit">
          <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-[4rem]">
            Core Services
          </h2>
          <p className="text-[#555] text-xl leading-relaxed mb-8 max-w-[500px]">
            From well engineering and project consultancy to operational support
            and workforce deployment, Petrocore delivers scalable,
            performance-driven solutions that help energy companies execute
            complex projects with confidence, precision, and long-term
            operational reliability.
          </p>
          <div className="p-1 rounded-xl flex items-center justify-start gap-1">
            <a
              href="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-lg font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98]"
            >
              <span>Learn more about our services</span>
              <svg
                className="h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 rounded-[16px] overflow-hidden h-[250px] md:h-[420px] bg-[#161616]">
              <img
                src={img1}
                className="w-full h-full object-cover"
                alt="PMC"
              />
            </div>
            <div className="group w-full md:w-1/2 bg-[#f4f4f4] rounded-[16px] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                Project Management Consultancy
              </h3>
              <p className="text-md text-neutral-700 pt-5 xl:pt-0 xl:max-h-0 xl:opacity-0 xl:overflow-hidden xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:max-h-32 xl:group-hover:opacity-100 xl:group-hover:pt-5">
                End-to-end PMC services ensuring on-time, on-budget delivery
                with excellence in execution
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-4">
            <div className="w-full md:w-1/2 rounded-[16px] overflow-hidden h-[250px] md:h-[420px] bg-[#161616]">
              <img
                src={img2}
                className="w-full h-full object-cover"
                alt="Well Engineering"
              />
            </div>
            <div className="group w-full md:w-1/2 bg-[#f4f4f4] rounded-[16px] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                Well Engineering
              </h3>
              <p className="text-md text-neutral-700 pt-5 xl:pt-0 xl:max-h-0 xl:opacity-0 xl:overflow-hidden xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:max-h-32 xl:group-hover:opacity-100 xl:group-hover:pt-5">
                Comprehensive well planning, design, and optimization for
                maximum efficiency and safety
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 rounded-[16px] overflow-hidden h-[250px] md:h-[420px] bg-[#161616]">
              <img
                src={img3}
                className="w-full h-full object-cover"
                alt="Execution"
              />
            </div>
            <div className="group w-full md:w-1/2 bg-[#f4f4f4] rounded-[16px] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                Execution & Support
              </h3>
              <p className="text-md text-neutral-700 pt-5 xl:pt-0 xl:max-h-0 xl:opacity-0 xl:overflow-hidden xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:max-h-32 xl:group-hover:opacity-100 xl:group-hover:pt-5">
                Real-time monitoring, technical expertise, and operational
                excellence in the field
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col md:flex-row-reverse gap-4">
            <div className="w-full md:w-1/2 rounded-[16px] overflow-hidden h-[250px] md:h-[420px] bg-[#161616]">
              <img
                src={img4}
                className="w-full h-full object-cover"
                alt="Workforce"
              />
            </div>
            <div className="group w-full md:w-1/2 bg-[#f4f4f4] rounded-[16px] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                Workforce Solutions
              </h3>
              <p className="text-md text-neutral-700 pt-5 xl:pt-0 xl:max-h-0 xl:opacity-0 xl:overflow-hidden xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:max-h-32 xl:group-hover:opacity-100 xl:group-hover:pt-5">
                Skilled professionals deployed rapidly for your critical E&P
                operations
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 rounded-[16px] overflow-hidden h-[250px] md:h-[420px] bg-[#161616]">
              <img
                src={img5}
                className="w-full h-full object-cover"
                alt="Execution"
              />
            </div>
            <div className="group w-full md:w-1/2 bg-[#f4f4f4] rounded-[16px] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                Mud Engineering
              </h3>
              <p className="text-md text-neutral-700 pt-5 xl:pt-0 xl:max-h-0 xl:opacity-0 xl:overflow-hidden xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:max-h-32 xl:group-hover:opacity-100 xl:group-hover:pt-5">
                Advanced drilling fluid solutions for optimized well
                performance, stability, and operational efficiency
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col md:flex-row-reverse gap-4">
            <div className="w-full md:w-1/2 rounded-[16px] overflow-hidden h-[250px] md:h-[420px] bg-[#161616]">
              <img
                src={img6}
                className="w-full h-full object-cover"
                alt="Workforce"
              />
            </div>
            <div className="group w-full md:w-1/2 bg-[#f4f4f4] rounded-[16px] p-8 md:p-12 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight uppercase">
                Drilling Equipment Trading
              </h3>
              <p className="text-md text-neutral-700 pt-5 xl:pt-0 xl:max-h-0 xl:opacity-0 xl:overflow-hidden xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:max-h-32 xl:group-hover:opacity-100 xl:group-hover:pt-5">
                Reliable sourcing and supply of quality drilling equipment for
                seamless upstream operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
