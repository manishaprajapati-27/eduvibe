import React from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import faqImage1 from "../../assets/images/faq/1.jpg";
import faqImage2 from "../../assets/images/faq/2.jpg";
import faqImage3 from "../../assets/images/faq/3.jpg";
import { IoRibbonSharp } from "react-icons/io5";
import { FaRegSmile } from "react-icons/fa";
import { SlSupport } from "react-icons/sl";
import { FaRegFaceSmile } from "react-icons/fa6";
import shape1 from "../../assets/images/why-choose-us/shape1.png";
import shape2 from "../../assets/images/why-choose-us/shape2.png";
import { MotionTag } from "../../components/Animation";

const WhyChooseUs = () => {
  const data = [
    {
      image: "/src/assets/images/why-choose-us/1.png",
      countNum: 449,
      title: "Learners & counting",
    },
    {
      image: "/src/assets/images/why-choose-us/2.png",
      countNum: 330,
      title: "Courses & Video",
    },
    {
      image: "/src/assets/images/why-choose-us/3.png",
      countNum: 275,
      title: "Certified Students",
    },
    {
      image: "/src/assets/images/why-choose-us/4.png",
      countNum: 378,
      title: "Winning Award",
    },
  ];
  return (
    <div className="bg-white md:py-30 py-20 relative pt-0 lg:pt-30">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:me-25 relative">
            <div className="flex gap-8 items-end mb-8">
              <div className="grid grid-cols-2 gap-7">
                {data.map((dt, index) => (
                  <MotionTag delay={index*0.2} key={index} className="card bg-white shadow-[0_0_15px_#121c2c15] relative z-30 rounded-md py-10 px-8 flex flex-col justify-center items-center">
                    <img src={dt.image} alt={dt.title} />
                    <h4 className="text-dark font-extrabold text-4xl mt-6 mb-2">{dt.countNum}</h4>
                    <p className="text-dark-alt font-medium">{dt.title}</p>
                  </MotionTag>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <Heading
              heading="Creating A Community Of Life Long Learners"
              subHeading="Why Choose Us"
              classes=""
              hdClasses="mx-auto"
            />
            <MotionTag className="mt-8">
              <p className="text-dark-alt font-medium">
                Our courses are designed by industry experts and delivered
                through interactive online modules, allowing you to learn at
                your own pace.
              </p>
              <div className="grid grid-cols-1 mt-8">
                <div className="flex gap-5 mb-7">
                  <div className="">
                    <span className="h-15 w-15 bg-[#fff0e5] text-2xl text-secondary rounded-full flex justify-center items-center">
                      <FaRegFaceSmile />
                    </span>
                  </div>
                  <div className="">
                    <h4 className="text-dark text-[20px] font-bold mb-2">
                      Trusted By Thousands
                    </h4>
                    <p className="text-dark-alt font-medium">
                      Online learning has become increasingly popular in recent
                      years, offering a flexible and convenient way for
                      learning.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 mb-6">
                  <div className="">
                    <span className="h-15 w-15 bg-[#dee0fd] text-2xl text-primary rounded-full flex justify-center items-center">
                      <SlSupport />
                    </span>
                  </div>
                  <div className="">
                    <h4 className="text-dark text-[20px] font-bold mb-2">
                      Unlimited Resources With Strong Support
                    </h4>
                    <p className="text-dark-alt font-medium">
                      Our platform also features a collaborative learning
                      environment, where you can connect with fellow learners.
                    </p>
                  </div>
                </div>
              </div>
            </MotionTag>
          </div>
        </div>
        <img
          src={shape1}
          className="absolute bottom-[13%] left-[16%] hidden lg:block"
          alt="FAQ Shape 1"
        />
        <img
          src={shape2}
          className="absolute bottom-[35%] right-[5%] hidden lg:block"
          alt="FAQ Shape 2"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
