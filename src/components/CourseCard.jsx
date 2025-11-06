import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import Button from "../components/Button";

const CourseCard = ({ cardData }) => {
  return (
    <>
      {cardData.map((data) => (
        <div
          key={data.id}
          className="group bg-white rounded-lg shadow-lg overflow-hidden relative"
        >
          <div className="">
            <div className="rounded-lg overflow-hidden relative">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="p-5 relative">
              <span className="py-2 px-5 bg-primary text-white text-[15px] absolute left-10 -top-5 font-semibold border border-white">
                {data.category}
              </span>
              <div className="flex justify-between mb-5 mt-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={data.authorImage} alt={data.author} />
                  </div>
                  <h6 className="text-dark text-[16px] font-semibold">
                    {data.author}
                  </h6>
                </div>
                <div className="flex items-center gap-3">
                  <RiFileList3Line className="text-primary" />
                  <h6 className="text-dark-alt text-[16px] font-semibold">
                    {data.lessonsCount} Lessons
                  </h6>
                </div>
              </div>
              <h4 className="font-bold text-dark text-[20px]">{data.title}</h4>
              <hr className="my-4 border-light" />
              <div className="flex justify-between">
                <div className="flex gap-3 items-end">
                  <span className="font-semibold text-[15px] text-dark-alt line-through">
                    {data.prePrice}
                  </span>
                  <span className="font-bold text-dark text-[20px]">
                    {data.price}
                  </span>
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="flex gap-1.5 text-secondary opacity-75 text-[22px]">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                  <span className="font-medium text-[16px] text-dark-alt">
                    (5.0)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-primary absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <span className="py-2.5 px-5 bg-[#6c76e9] text-white text-[15px] font-semibold inline-block">
              {data.category}
            </span>

            <h4 className="font-bold text-white text-[20px] my-6">
              {data.title}
            </h4>
            <p className="text-light font-medium opacity-75">
              {data.description}
            </p>

            <div className="flex gap-3 items-end mt-4">
              <span className="font-semibold text-[15px] text-light line-through opacity-75">
                {data.prePrice}
              </span>
              <span className="font-bold text-[20px] text-white">
                {data.price}
              </span>
            </div>
            <div className="flex justify-between mb-5 mt-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={data.authorImage} alt={data.author} />
                </div>
                <h6 className="text-white text-[16px] font-semibold">
                  {data.author}
                </h6>
              </div>
              <div className="flex items-center gap-3">
                <RiFileList3Line className="text-white" />
                <h6 className="text-light text-[16px] font-semibold">
                  {data.lessonsCount} Lessons
                </h6>
              </div>
            </div>
            <div className="mt-9">
              <Button
                title={
                  <>
                    Enroll Now <IoArrowForwardSharp />
                  </>
                }
                className="btn btn-white"
                customClasses="mt-4"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
