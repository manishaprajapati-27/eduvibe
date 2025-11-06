import React from "react";
import Header from "../layout/Header";
import HeroSection from "./home/HeroSection";
import CourseCategoriesSection from "./home/CourseCategoriesSection";
import FAQSection from "./home/FAQSection";
import WhoWeAreSection from "./home/WhoWeAreSection";
import VideoPopUp from "./home/VideoPopUp";
import LearnTogetherSection from "./home/LearnTogetherSection";
import WhyChooseUs from "./home/WhyChooseUs";
import TestimonialSection from "./home/TestimonialSection";
import LetUsHelpSection from "./home/LetUsHelpSection";
import BlogSection from "./home/BlogSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CourseCategoriesSection />
      <FAQSection />
      <WhoWeAreSection />
      <VideoPopUp videoId="M7lc1UVf-VE" title="Intro to our courses" />
      <LearnTogetherSection />
      <TestimonialSection />
      <WhyChooseUs />
      <LetUsHelpSection />
      <BlogSection />
    </>
  );
};

export default Home;
