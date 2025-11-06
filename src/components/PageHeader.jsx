import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Shape1 from "../assets/images/page-header/1.png";
import Shape2 from "../assets/images/page-header/2.png";
import Shape3 from "../assets/images/page-header/3.png";
import Shape4 from "../assets/images/page-header/4.png";
import Shape5 from "../assets/images/page-header/5.png";
import Shape6 from "../assets/images/page-header/6.png";

const PageHeader = ({title, pageTitle}) => {
  return (
    <div className="py-20 mt-[76px] relative bg-[url('src/assets/images/page-header/page-header.jpg')] bg-cover bg-no-repeat">
      <div className="container mx-auto lg:px-0 px-4">
        <h3 className="text-dark font-extrabold text-[2.8rem]">{title}</h3>
        <ul className="flex gap-3 items-center text-dark-alt">
          <li className="font-medium text-[16.5px]">
            <a href="#!" className="transition-all duration-300 ease-in-out hover:text-primary">Home</a>
          </li>
          <li className="font-medium text-[16.5px]">
            <MdOutlineKeyboardArrowRight />
          </li>
          <li className="font-medium text-[16.5px]">{pageTitle}</li>
        </ul>
      </div>
      <img
        src={Shape1}
        alt="Page Header"
        className="absolute top-[7%] left-[8%]"
      />
      <img
        src={Shape2}
        alt="Page Header"
        className="absolute bottom-[14%] left-[12%]"
      />
      <img
        src={Shape3}
        alt="Page Header"
        className="absolute bottom-[2%] left-[55%]"
      />
      <img
        src={Shape4}
        alt="Page Header"
        className="absolute top-[10%] right-[25%]"
      />
      <img
        src={Shape5}
        alt="Page Header"
        className="absolute top-[12%] right-[10%]"
      />
      <img
        src={Shape6}
        alt="Page Header"
        className="absolute bottom-[10%] right-[8%]"
      />
    </div>
  );
};

export default PageHeader;
