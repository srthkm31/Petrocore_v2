import React from "react";
import ProcessSection from "../Components/ProcessSection";
import Services from "../Components/Services";
import WhyChooseUs from "../Components/WhyChooseUs";
import PetrocoreFooter from "../Components/PetrocoreFooter";
import Navbar from "../Components/Navbar";
import Homepagehero from "../Components/Homepagehero";
import Aboutsection from "../Components/Aboutsection";

const Homepage = () => {
  return (
    <div>
      <Homepagehero />
      <Aboutsection />
      <ProcessSection />
      <Services />
      <WhyChooseUs />
      <PetrocoreFooter />
    </div>
  );
};

export default Homepage;
