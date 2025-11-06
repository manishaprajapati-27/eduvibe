import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import PageHeader from "../components/PageHeader";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data";

const Blog = () => {
  return (
    <>
    <PageHeader title="Blog" pageTitle="Blog"/>
    <div className="py-30">
      <div className="container px-4 lg:px-0 mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 relative z-30">
          <BlogCard blogData={blogs}/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Blog;
