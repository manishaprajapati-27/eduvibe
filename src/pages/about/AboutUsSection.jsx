import React from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import AboutImage from "../../assets/images/about-us/1.png";
import AboutImage2 from "../../assets/images/about-us/2.png";
import Shape1 from "../../assets/images/about-us/shape1.png";
import Shape2 from "../../assets/images/about-us/shape2.png";
import Shape3 from "../../assets/images/about-us/shape3.png";
import { MotionTag } from "../../components/Animation";

const AboutUsSection = () => {
  return (
    <div className="lg:py-30 md:pt-20 pt-15 relative">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <MotionTag className="relative lg:me-10">
            <div className="relative lg:-left-14 mb-5">
              <img
                src={AboutImage}
                alt="About Image"
                className="relative z-10"
              />
              <div className="border-7 border-secondary absolute bottom-0 left-18 rounded-full h-14 w-14 opacity-55 animate-[zoomIn_4s_linear_infinite] hidden lg:block"></div>
            </div>
            <div className="absolute -bottom-15 right-0 lg:right-15 hidden lg:block">
              <img
                src={AboutImage2}
                alt="About Image 2"
                className="relative z-20"
              />
              <div className="absolute top-0 -right-8 z-10 h-full w-full border-2 rounded-[38%_62%_64%_36%/43%_35%_65%_57%] border-[#FFA41B] animate-[rotate_10s_linear_infinite_forwards]"></div>
            </div>
            <div className="h-40 w-40 bg-white rounded-full shadow-lg flex-col justify-center items-center absolute -left-24 top-10 z-30 hidden lg:flex">
              <h4 className="text-primary text-[34px] font-bold">3.98</h4>
              <p className="text-dark font-bold text-[16px]">
                Finished <br /> Sessions
              </p>
            </div>
          </MotionTag>
          <MotionTag className="">
            <Heading
              heading="Knowledge is power, Information is liberating."
              subHeading="About Us"
            />
            <div className="mt-4">
              <p className="text-dark-alt font-medium">
                Online learning has become increasingly popular in recent years,
                offering a flexible and convenient way for individuals to pursue
                education.
              </p>
              <h5 className="text-dark font-bold py-5 text-[20px]">
                People Love To Learn With Us
              </h5>
              <div className="grid md:grid-cols-2 grid-cols-1 md:gap-14">
                <div className="flex mb-5 lg:mb-0">
                  <div className="">
                    <h4 className="text-secondary text-[32px] font-bold mb-2">
                      90%
                    </h4>
                    <p className="text-dark-alt font-medium">
                      90% of students see their course through to completion.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="">
                    <h4 className="text-secondary text-[32px] font-bold mb-2">
                      9/10
                    </h4>
                    <p className="text-dark-alt font-medium">
                      9/10 users reported better learning outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                title={
                  <>
                    Learn More <IoArrowForwardSharp />
                  </>
                }
                className="btn btn-primary mt-8 text-[18px]"
              />
            </div>
          </MotionTag>
        </div>
      </div>
      <img
        src={Shape1}
        alt="Shape 1"
        className="absolute top-[43%] left-[10%] hidden lg:block"
      />
      <img
        src={Shape2}
        alt="Shape 2"
        className="absolute top-[10%] right-[4%] hidden lg:block"
      />
      <img
        src={Shape3}
        alt="Shape 3"
        className="absolute bottom-[16%] right-[10%] hidden lg:block"
      />
    </div>
  );
};

export default AboutUsSection;
