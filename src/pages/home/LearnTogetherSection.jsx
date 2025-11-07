import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { IoArrowForwardSharp, IoTimeOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MotionTag } from "../../components/Animation";
import shape1 from "../../assets/images/learn-together/shape1.png";
import shape2 from "../../assets/images/learn-together/shape2.png";
import shape3 from "../../assets/images/learn-together/shape3.png";

const LearnTogetherSection = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString("en-GB", { month: "long" });
  const year = now.getFullYear();

  const suffix =
  day % 10 === 1 && day !== 11
    ? "st"
    : day % 10 === 2 && day !== 12
    ? "nd"
    : day % 10 === 3 && day !== 13
    ? "rd"
    : "th";

  const events = [
    {
      id: 1,
      title: "Explorations of Regional Chief Executive Network",
      image: "src/assets/images/learn-together/1.webp",
      commentCount: 2,
      date: `${day}${suffix} ${month} ${year}`,
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      location: "Parel, Mumbai",
    },
    {
      id: 2,
      title: "Virtual Spring Part-time Jobs Fair for Student",
      image: "src/assets/images/learn-together/2.webp",
      commentCount: 2,
      date: `${day}${suffix} ${month} ${year}`,
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      location: "Parel, Mumbai",
    },
    {
      id: 3,
      title: "Write A Novel Outline From Scratch",
      image: "src/assets/images/learn-together/3.webp",
      commentCount: 2,
      date: `${day}${suffix} ${month} ${year}`,
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      location: "Parel, Mumbai",
    },
  ];
  return (
    <div className="md:py-30 py-20 relative after:content-[''] after:absolute lg:after:-top-[200px] after:top-0 after:left-0 after:w-full after:h-full lg:after:h-[calc(100%+200px)] after:bg-[url('src/assets/images/learn-together/bg.jpg')] after:bg-cover after:bg-center">
      <div className="container mx-auto lg:px-0 px-4 relative z-20">
        <Heading
          heading="Upcoming Educational Events"
          subHeading="LET’S LEARN TOGETHER"
          classes="flex flex-col justify-center items-center mb-15"
          hdClasses="mx-auto text-center"
        />
        <div className="grid grid-cols-1">
          {events.map((event, index) => (
            <MotionTag delay={index*0.2}
              className="card mb-8 flex md:justify-between justify-start flex-col lg:flex-row bg-white lg:items-center items-start relative rounded-sm shadow-md"
              key={event.id}
            >
              <div className="flex md:items-center md:flex-row flex-col gap-4 p-6 relative z-10">
                <div className="md:w-[162px] md:h-[165px] w-auto">
                  <img src={event.image} className="object-cover object-center h-full rounded-sm" alt={event.title} />
                </div>
                <div className="">
                  <h4 className="text-[18px] lg:text-[24px] font-bold leading-7.5 ps-1 mb-4 group-hover:text-white">
                    <a
                      href="#!"
                      className="bg-no-repeat transition-all duration-500 text-dark group-hover:text-white hover:text-primary"
                    >
                      {event.title}
                    </a>
                  </h4>
                  <div className="flex md:items-center items-start flex-col md:flex-row md:gap-8 gap-y-2">
                    <div className="flex gap-8">
                      <div className="flex gap-2 items-center text-dark-alt font-medium text-[17px]">
                      <MdOutlineCalendarMonth />
                      {event.date}
                    </div>
                    <div className="flex gap-2 items-center text-dark-alt font-medium text-[17px]">
                      <IoTimeOutline />
                      {event.time}
                    </div>
                    </div>
                    <div className="flex gap-2 items-center text-dark-alt font-medium text-[17px]">
                      <HiOutlineLocationMarker />
                      {event.location}
                    </div>
                  </div>
                  <div className="mt-4 hidden md:block lg:hidden">
                    <Button
                  title={
                    <>
                      Book A Seat <IoArrowForwardSharp />
                    </>
                  }
                  className="btn btn-dark"
                  style={{
                  }}
                />
                  </div>
                </div>
              </div>
              <div className="p-6 pt-1 lg:pt-6 block md:hidden lg:block">
                <Button
                  title={
                    <>
                      Book A Seat <IoArrowForwardSharp />
                    </>
                  }
                  className="btn btn-dark"
                  style={{
                    padding: "1.05rem 2.05rem",
                    fontSize: "1.15rem",
                    fontWeight: "bold",
                  }}
                />
              </div>
            </MotionTag>
          ))}
        </div>
      </div>
        <img src={shape1} className="absolute z-20 bottom-[3%] left-[7%] hidden lg:block" alt="Learn Together Shape 1" />
        <img src={shape2} className="absolute z-20 right-[16.5%] top-[19%] hidden lg:block" alt="Learn Together Shape 2" />
        <img src={shape3} className="absolute z-20 right-[14%] bottom-[10%] hidden lg:block" alt="Learn Together Shape 3" />
    </div>
  );
};

export default LearnTogetherSection;
