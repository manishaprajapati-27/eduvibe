import React from "react";
import PageHeader from "../components/PageHeader";
import { newCourses, featuredCourses, popularCourses } from "../data";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import Button from "../components/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import CourseCard from "../components/CourseCard";
import Heading from "../components/Heading";

const Courses = () => {
  return (
    <>
      <PageHeader title="Courses" pageTitle="Courses" />
      <div className="lg:py-30 md:py-20 py-15">
        <div className="container mx-auto lg:px-0 px-4">
          <Heading heading="Empower Your Learning" classes="flex flex-col justify-center items-center mb-10" subHeading="Courses" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard cardData={newCourses} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
