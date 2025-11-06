import { useState } from "react";
import Heading from "../../components/Heading";
import { newCourses, featuredCourses, popularCourses } from "../../data";
import { RiFileList3Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import Button from "../../components/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import shape1 from "../../assets/images/whoweare/shape1.png";
import shape2 from "../../assets/images/whoweare/shape2.png";
import CourseCard from "../../components/CourseCard";

const WhoWeAreSection = () => {
  const tabs = [
    {
      title: "New Courses",
      content: (
          <CourseCard cardData={newCourses} />
      ),
    },
    {
      title: "Featured Courses",
      content: (
        <CourseCard cardData={featuredCourses} />
      ),
    },
    {
      title: "Popular Courses",
      content: (
        <CourseCard cardData={popularCourses} />
      ),
    },
  ];

  const [active, setActive] = useState(0);

  if (!tabs || tabs.length === 0) return null;
  return (
    <div className="md:py-30 py-20 relative">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="flex lg:justify-between lg:items-end lg:flex-row flex-col mb-15">
          <Heading
            heading="We Offer The Best Carrier"
            subHeading="WHO WE ARE"
            alignment="center"
            sbClass="justify-center lg:justify-start"
            hdClasses="lg:text-start text-center"
          />

          <div
            role="tablist"
            className="flex gap-3 mt-10 lg:mt-0 justify-center lg:justify-start"
          >
            {tabs.map((tab, i) => (
              <button
                key={i}
                role="tab"
                id={`tab-${i}`}
                aria-selected={active === i}
                aria-controls={`panel-${i}`}
                className={`text-[15px] font-semibold py-2 px-4 rounded cursor-pointer ${
                  active === i ? "bg-primary text-white" : "bg-light text-dark"
                }`}
                onClick={() => setActive(i)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="tabs">
          {tabs.map((tab, i) => (
            <div
              key={i}
              id={`panel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-${i}`}
              hidden={active !== i}
              className="tabs__panel"
            >
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {tab.content}
              </div>
            </div>
          ))}
        </div>
        <img
          src={shape1}
          alt="Shape 1"
          className="absolute top-[25%] left-[10%] animate-[zump_3s_linear_infinite] hidden lg:block"
        />
        <img
          src={shape2}
          alt="Shape 2"
          className="absolute bottom-[13%] right-[6%] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default WhoWeAreSection;
