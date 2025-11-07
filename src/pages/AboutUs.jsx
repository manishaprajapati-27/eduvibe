import React from "react";
import PageHeader from "../components/PageHeader";
import TestimonialSection from "./home/TestimonialSection";
import AboutUsSection from "./about/AboutUsSection";
import WhatWeOffer from "./about/WhatWeOffer";
import OurTeam from "./about/OurTeam";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="About Us" pageTitle="About Us" />
      <AboutUsSection />
      <WhatWeOffer />
      <OurTeam />
      <TestimonialSection />
    </>
  );
};

export default AboutUs;
