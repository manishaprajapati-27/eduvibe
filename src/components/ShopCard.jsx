import React from "react";
import { MotionTag } from "./Animation";

const ShopCard = ({shopData}) => {
  return (
    <>
      {shopData.map((data, index) => (
        <MotionTag delay={index*0.2} className="card" key={index}>
          <div className="rounded-lg overflow-hidden transition-all duration-500 ease-in-out scale-100 hover:scale-102">
            <img src={data.image} alt="Shop" />
          </div>
          <p className="text-dark-alt text-[15px] pt-4 text-center">
            {data.author}
          </p>
          <h4 className="text-dark text-[1.2rem] py-1.5 font-bold text-center">
            {data.title}
          </h4>
          <div className="flex justify-center gap-1.5">
            <h6 className="font-semibold flex gap-0 items-center text-[1.2rem] text-primary">
              {data.price}
            </h6>
            <h6 className="text-dark-alt font-semibold flex gap-0 items-center relative text-[0.9rem] after:content-[''] after:absolute after:top-[50%] after:left-0 after:transform after:translate-y-[-50%] after:bg-dark-alt after:h-[0.7px] after:w-full">
              {data.prevPrice}
            </h6>
          </div>
        </MotionTag>
      ))}
    </>
  );
};

export default ShopCard;
