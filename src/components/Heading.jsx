import React from "react";

const Heading = ({subHeading, heading, classes, hdClasses, sbClass}) => {
  return (
    <div className={`heading ${classes}`}>
      <h5 className={`text-[15px] text-primary uppercase font-bold leading-normal tracking-[1px] flex items-center gap-1 mb-1.5 ${sbClass}`}>{subHeading}</h5>
      <h2 className={`lg:text-[40px] text-[32px] font-extrabold capitalize leading-tight text-dark ${hdClasses}`}>{heading}</h2>
    </div>
  );
};

export default Heading;
