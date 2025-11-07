import React from "react";
import Heading from "../../components/Heading";
import Shape1 from "../../assets/images/what-we-offer/shape1.png";
import Shape2 from "../../assets/images/what-we-offer/shape2.png";
import Shape3 from "../../assets/images/what-we-offer/shape3.png";
import Icon1 from "../../assets/images/what-we-offer/icon1.png";
import Icon2 from "../../assets/images/what-we-offer/icon2.png";
import Icon3 from "../../assets/images/what-we-offer/icon3.png";
import { MotionTag } from "../../components/Animation";

const WhatWeOffer = () => {
  const offers = [
    {
      icon: "src/assets/images/what-we-offer/card-icon1.png",
      courseNum: "offer 1",
      title: "Remote Learning",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "#EAF8F6",
    },
    {
      icon: "src/assets/images/what-we-offer/card-icon2.png",
      courseNum: "offer 2",
      title: "Awesome Tutors",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "#FFF3EE",
    },
    {
      icon: "src/assets/images/what-we-offer/card-icon3.png",
      courseNum: "offer 3",
      title: "Global Certificate",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "#EFF4FC",
    },
    {
      icon: "src/assets/images/what-we-offer/card-icon4.png",
      courseNum: "offer 3",
      title: "Carrier Guideline",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      bgColor: "#FFF1F1",
    },
  ];
  return (
    <div className="lg:py-30 md:py-20 py-15 relative">
      <div className="container mx-auto lg:px-0 px-4">
        <Heading
          heading={
            <>
              Learn New Skills When And <br /> Where You Like
            </>
          }
          subHeading="What we offer"
          classes="flex flex-col justify-center items-center mb-15"
          hdClasses="mx-auto text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <MotionTag
              delay={index * 0.2}
              key={index}
              className="px-8 py-10 rounded-lg bg-light flex flex-col items-center justify-center text-center transition duration-500 ease-in-out group"
              style={{ backgroundColor: offer.bgColor }}
            >
              <div className="relative flex flex-col items-center justify-center mb-4 w-full">
                <div className="transition duration-500 ease-in-out opacity-100 w-20 h-20 flex justify-center items-center bg-white rounded-full">
                  <div className="relative">
                    <img src={offer.icon} alt={offer.title} />
                    <div className="">
                      <img
                        src={Icon1}
                        alt="Icon"
                        className="absolute top-0 left-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:top-7 group-hover:-left-10"
                      />
                      <img
                        src={Icon2}
                        alt="Icon"
                        className="absolute top-0 right-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-top-5 group-hover:-right-8"
                      />
                      <img
                        src={Icon3}
                        alt="Icon"
                        className="absolute bottom-0 right-0 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-bottom-4 group-hover:-right-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-[1.3rem] font-semibold mb-2 transition duration-500 ease-in-out py-3 hover:text-primary">
                {offer.title}
              </h3>
              <p className="text-dark-alt font-medium transition duration-500 ease-in-out">
                {offer.description}
              </p>
            </MotionTag>
          ))}
        </div>
        <img
          src={Shape1}
          className="absolute bottom-[52%] left-[10%] hidden lg:block animate-[zump_3s_linear_infinite]"
          alt="Course Shape 1"
        />
        <img
          src={Shape2}
          className="absolute top-[34%] right-[15%] hidden lg:block"
          alt="Course Shape 2"
        />
        <img
          src={Shape3}
          className="absolute bottom-[20%] right-[8%] hidden lg:block"
          alt="Course Shape 3"
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
