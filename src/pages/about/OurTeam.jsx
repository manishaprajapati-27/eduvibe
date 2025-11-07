import React from "react";
import Heading from "../../components/Heading";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Shape1 from "../../assets/images/team/shape1.png";
import Shape2 from "../../assets/images/team/shape2.png";
import Shape3 from "../../assets/images/team/shape3.png";
import Shape4 from "../../assets/images/team/shape4.png";
import { MotionTag } from "../../components/Animation";

const OurTeam = () => {
  const teams = [
    {
      name: "Ankit Sharma",
      designation: "UI Designer",
      image: "src/assets/images/team/1.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
    {
      name: "Manisha Prajapati",
      designation: "UI Designer",
      image: "src/assets/images/team/2.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
    {
      name: "Ashwini Thore",
      designation: "Graphic Designer",
      image: "src/assets/images/team/3.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
    {
      name: "Sushant Shirke",
      designation: "Web Developer",
      image: "src/assets/images/team/1.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
    {
      name: "Durgavati Gupta",
      designation: "Project Manager",
      image: "src/assets/images/team/1.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
    {
      name: "Rajashri Chougle",
      designation: "Backend Developer",
      image: "src/assets/images/team/1.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
    {
      name: "Shreeju Acharya",
      designation: "Backend Developer",
      image: "src/assets/images/team/1.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
    {
      name: "Varsha Patil",
      designation: "Web Developer",
      image: "src/assets/images/team/1.webp",
      linkedInLink: "#!",
      facebookLink: "#!",
      xLink: "#!",
    },
  ];
  return (
    <div className="lg:py-30 md:py-20 py-15 relative bg-[url('src/assets/images/team/bg.jpg')] bg-no-repeat bg-cover">
      <div className="container mx-auto lg:px-0 px-4">
        <Heading
          heading="Introduce Our Life Coaches"
          subHeading="Skilled Instructor"
          classes="flex flex-col justify-center items-center mb-15"
          hdClasses="mx-auto text-center"
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-0">
          {teams.map((team, index) => (
            <MotionTag delay={index*0.2} className="card relative group mb-5" key={index}>
              <div className="relative p-10 flex justify-center items-center after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:transition-all after:duration-500 after:ease-in-out after:bg-[url(src/assets/images/team/border-shape.png)] after:bg-center after:bg-no-repeat group-hover:after:rotate-90">
                <div className="relative rounded-full overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:opacity-0 group-hover:after:opacity-100 after:h-full after:w-full after:transition-all after:duration-500 after:ease-in-out after:bg-[#070a3352] after:bg-center after:bg-no-repeat">
                  <img src={team.image} alt={team.name} className="" />
                </div>
                <div className="flex gap-3 absolute top-[50%] left-[50%] translate-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-50">
                  <Link
                    to="#!"
                    className="w-11 h-11 flex items-center justify-center cursor-pointer bg-white text-primary text-[18px] rounded-full hover:text-white transition-all duration-500 ease-in-out hover:bg-primary"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to="#!"
                    className="w-11 h-11 flex items-center justify-center cursor-pointer bg-white text-primary text-[18px] rounded-full hover:text-white transition-all duration-500 ease-in-out hover:bg-primary"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to="#!"
                    className="w-11 h-11 flex items-center justify-center cursor-pointer bg-white text-primary text-[18px] rounded-full hover:text-white transition-all duration-500 ease-in-out hover:bg-primary"
                  >
                    <FaXTwitter />
                  </Link>
                </div>
              </div>
              <h3 className="pb-1 text-dark font-bold text-[24px] text-center pt-1">
                {team.name}
              </h3>
              <h6 className="text-dark-alt group-hover:text-primary text-[18px] font-medium text-center transition-all duration-300 ease-in-out">
                {team.designation}
              </h6>
            </MotionTag>
          ))}
        </div>
      </div>
      <img
        src={Shape1}
        alt="team"
        className="absolute top-[12%] left-[7%] hidden lg:block"
      />
      <img
        src={Shape2}
        alt="team"
        className="absolute top-[6%] right-[3%] hidden lg:block"
      />
      <img
        src={Shape3}
        alt="team"
        className="absolute bottom-[7%] right-[4%] hidden lg:block"
      />
      <img
        src={Shape4}
        alt="team"
        className="absolute bottom-[12%] left-[8%] animate-[zump_3s_linear_infinite] hidden lg:block"
      />
    </div>
  );
};

export default OurTeam;
