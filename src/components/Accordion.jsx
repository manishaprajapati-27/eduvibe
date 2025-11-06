import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
// import { MotionTag, fadeUp } from "./Animation";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div className="mb-4 bg-light rounded-md overflow-hidden" key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="flex w-full items-center justify-between cursor-pointer rounded-lg overflow-hidden py-2 px-6 text-left text-[1.15rem] text-dark-alt font-bold"
          >
            <span>{item.title}</span>
            <div
              className={`w-12 h-12 flex justify-center items-center transform-all duration-500 ease-in-out ${
                openIndex === index ? "text-primary rotate-180" : "text-dark-alt rotate-0"
              }`}
            >
              <FaChevronDown/>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[1000] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
