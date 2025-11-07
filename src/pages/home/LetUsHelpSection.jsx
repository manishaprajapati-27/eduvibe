import React from "react";
import Button from "../../components/Button";
import { IoArrowForwardSharp, IoTimeOutline } from "react-icons/io5";
import Heading from "../../components/Heading";
import { IoCallOutline } from "react-icons/io5";
import { MotionTag } from "../../components/Animation";

const LetUsHelpSection = () => {
  return (
    <div className="md:lg:py-30 md:py-20 py-15 py-20 bg-[url('src/assets/images/let-us-help.jpg')] bg-cover bg-center">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="flex lg:justify-between lg:items-center lg:flex-row flex-col">
          <Heading
            heading="Finding Your Right Courses"
            subHeading="Let Us Help"
            alignment="center" hdClasses="text-white" sbClass="text-white"
          />
          <MotionTag className="flex lg:items-center gap-8 lg:flex-row flex-col mt-12 lg:mt-0">
            <div>
              <Button
                  title={
                    <>
                      Get Started Now <IoArrowForwardSharp />
                    </>
                  }
                  className="btn btn-white"
                  style={{
                    padding: "1.05rem 2.05rem",
                    fontSize: "1.15rem",
                    fontWeight: "bold",
                  }}
                />
            </div>
                <a href="#!" className="text-white font-bold text-[19px] flex items-center gap-1.5"><IoCallOutline /> +728-238-399-200</a>
          </MotionTag>
        </div>
      </div>
    </div>
  );
};

export default LetUsHelpSection;
