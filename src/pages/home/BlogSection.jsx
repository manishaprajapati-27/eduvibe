import React from "react";
import Heading from "../../components/Heading";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import Shape1 from "../../assets/images/blog/shape1.png"
import Shape2 from "../../assets/images/blog/shape2.png"
import Shape3 from "../../assets/images/blog/shape3.png"
import Shape4 from "../../assets/images/blog/shape4.png"
import BlogCard from "../../components/BlogCard";
import { blogs } from "../../data";


const BlogSection = () => {
  return (
    <div className="md:py-30 py-20 bg-[url('src/assets/images/blog/bg.jpg')] bg-center bg-cover relative">
      <div className="container mx-auto lg:px-0 px-4">
        <Heading
          heading="Get Our Every News & Blog"
          subHeading="LATEST FROM NEWS"
          classes="flex flex-col justify-center items-center lg:mb-15 mb-8"
          hdClasses="mx-auto text-center"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 relative z-30">
          <BlogCard blogData={blogs.slice(0, 3)} bgColor="white" />
        </div>
        <img src={Shape1} alt="Blog Shape 1" className="absolute top-[7%] left-[8%] w-28 hidden lg:block" />
        <img src={Shape2} alt="Blog Shape 2" className="absolute bottom-[7.5%] left-[16%] w-28 hidden lg:block" />
        <img src={Shape3} alt="Blog Shape 3" className="absolute bottom-[4%] right-[7%] hidden lg:block" />
        <img src={Shape4} alt="Blog Shape 4" className="absolute top-[10%] right-[6%] hidden lg:block" />
      </div>
    </div>
  );
};

export default BlogSection;
