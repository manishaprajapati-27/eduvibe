import React from "react";
// import ProductQuote from "./home/ProductQuote";
// import ContactImg from "../assets/images/contact.jpg";
import Heading from "../components/Heading";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import {
  FaXTwitter,
  FaLocationDot,
  FaRegCircleUser,
  FaBars,
  FaArrowRightLong,
} from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
// import { div, fadeUp } from "../components/Animation";
import { FaGlobe } from "react-icons/fa";
import { MdHeadphones } from "react-icons/md";
import { FaEnvelopeOpen } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoArrowForwardOutline } from "react-icons/io5";
import Shape1 from "../assets/images/contact/1.png"
import Shape2 from "../assets/images/contact/2.png"
import Shape3 from "../assets/images/contact/3.png"

const ContactUs = () => {
  const data = [
    {
      image: "/src/assets/images/why-choose-us/1.png",
      title: "Our Website",
      info: (
        <>
          <a href="#!" className="block text-center">
            www.example.com
          </a>
          <a href="#!" className="block text-center">
            www.theme.net
          </a>
        </>
      ),
      icon: (<><FaGlobe className="text-primary" /></>),
      bgColor: "#ebedff",
    },
    {
      image: "/src/assets/images/why-choose-us/2.png",
      title: "Call Us On",
      info: (
        <>
          <a href="#!" className="block text-center">
            www.example.com
          </a>
          <a href="#!" className="block text-center">
            www.theme.net
          </a>
        </>
      ),
      icon: (<><MdHeadphones className="text-[#0DB09F]" /></>),
      bgColor: "#daf7f4",
    },
    {
      image: "/src/assets/images/why-choose-us/3.png",
      title: "Email Us",
      info: (
        <>
          <a href="#!" className="block text-center">
            www.example.com
          </a>
          <a href="#!" className="block text-center">
            www.theme.net
          </a>
        </>
      ),
      icon: (<><FaEnvelopeOpen className="text-[#FFA41B]" /></>),
      bgColor: "#faedda",
    },
    {
      image: "/src/assets/images/why-choose-us/4.png",
      title: "Our Location",
      info: (
        <>
          <a href="#!" className="block text-center">
            www.example.com
          </a>
          <a href="#!" className="block text-center">
            www.theme.net
          </a>
        </>
      ),
      icon: (<><HiLocationMarker className="text-secondary" /></>),
      bgColor: "#f8dfcc",
    },
  ];
  return (
    <>
      <PageHeader title="Contact Us" pageTitle="Contact Us" />
      <div className="pt-30 relative">
        <div className="container mx-auto md:px-0 px-4">
          <div>
            <Heading
              classes="flex justify-center items-center flex-col lg:w-[50%] md:w-[70%] w-full mx-auto relative z-100 pb-14"
              subHeading="Need Help?"
              heading="Get In Touch With us"
              hdClasses="text-center"
            />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-0">
            <div className="relative md:w-[80%] mx-auto w-full lg:w-full">
              <div className="grid grid-cols-2 gap-8 md:me-20 me-0">
                {data.map((dt, index) => (
                  <div
                    key={index}
                    className="card bg-white group transition-all duration-500 ease-in-out group hover:-translate-y-2 hover:bg-secondary shadow-[0_0_15px_#121c2c15] relative z-30 rounded-md py-10 px-8 flex flex-col justify-center items-center"
                  >
                    <span className="h-12 w-12 transition-all duration-500 ease-in-out text-[20px] text-primary rounded-full flex justify-center items-center group-hover:bg-white group-hover:text-secondary" style={{backgroundColor: dt.bgColor}}>
                     {dt.icon}
                    </span>
                    <h4 className="text-dark font-bold text-[1.4rem] transition-all duration-500 ease-in-out group-hover:text-white mt-6 mb-2">
                      {dt.title}
                    </h4>
                    <p className="text-dark-alt font-medium transition-all duration-500 ease-in-out group-hover:text-white">
                      {dt.info}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col lg:mt-0 mt-10">
              <div className="relative after:content-[''] after:absolute after:w-full ">
                <div className="relative z-20">
                  <div className="mb-4">
                    <input
                      type="text"
                      className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full h-38"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <Button
                    className="btn-primary font-semibold w-full h-15"
                    title={
                      <>
                        Submit Now <IoArrowForwardOutline />{" "}
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={Shape1} className="absolute top-[26%] left-[16%] hidden lg:block" alt="Contact" />
        <img src={Shape2} className="absolute top-[24%] right-[15%] hidden lg:block" alt="Contact" />
        <img src={Shape3} className="absolute bottom-[12%] right-[7%] hidden lg:block" alt="Contact" />
      </div>
      <div className="py-30">
        <div className="container mx-auto md:px-0 px-4">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5225162673773!2d72.8379048759351!3d18.996683554456318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x455fc37258faed89%3A0x9766a99df4596373!2sPrecision%20Grow!5e0!3m2!1sen!2sin!4v1760940372166!5m2!1sen!2sin"
          className="w-full h-100"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
