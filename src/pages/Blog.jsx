import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import PageHeader from "../components/PageHeader";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data";
import Heading from "../components/Heading";

const Blog = () => {
  return (
    <>
    <PageHeader title="Blog" pageTitle="Blog"/>
    <div className="lg:py-30 md:py-20 py-15">
      <div className="container px-4 lg:px-0 mx-auto">
        <Heading heading="Insights That Inspire" classes="flex flex-col justify-center items-center mb-10" subHeading="Blogs" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 relative z-30">
          <BlogCard blogData={blogs}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
