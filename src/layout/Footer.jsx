import React from "react";
import LightLogo from "../assets/images/light-logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
  FaPhone,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Shape1 from "../assets/images/footer-shape1.png";
import Shape2 from "../assets/images/footer-shape2.png";

const Footer = () => {
  return (
    <footer className="pt-30 bg-[#231F40] relative">
      <div className="container mx-auto lg:px-0 px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          <div className="md:pe-10 mb-8 lg:mb-0">
            <Link to="/">
              <img src={LightLogo} alt="EduVibe" />
            </Link>
            <p className="text-white font-medium my-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.
            </p>
            <div className="flex gap-3">
              <Link
                to="#!"
                className="w-12 h-12 flex items-center justify-center bg-[#FFFFFF1A] text-white text-[20px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#!"
                className="w-12 h-12 flex items-center justify-center bg-[#FFFFFF1A] text-white text-[20px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="#!"
                className="w-12 h-12 flex items-center justify-center bg-[#FFFFFF1A] text-white text-[20px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
              >
                <FaPinterestP />
              </Link>
              <Link
                to="#!"
                className="w-12 h-12 flex items-center justify-center bg-[#FFFFFF1A] text-white text-[20px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
          <div className="mb-8 lg:mb-0">
            <h4 className="text-white font-bold mb-5 text-[27px]">Explore</h4>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> About Us
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> Upcoming
                Events
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> Blog &
                News
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> FAQ
                Question
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" />{" "}
                Testimonial
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> Privacy
                Policy
              </Link>
            </p>
          </div>
          <div className="mb-8 lg:mb-0">
            <h4 className="text-white font-bold mb-5 text-[27px]">
              Useful links
            </h4>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> Contact
                Us
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> Pricing
                Plan
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> Gallery
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" />{" "}
                Instructor
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdKeyboardDoubleArrowRight className="text-[20px]" /> Purchase
                Guide
              </Link>
            </p>
          </div>
          <div className="mb-8 lg:mb-0">
            <h4 className="text-white font-bold mb-5 text-[27px]">
              Contact Info
            </h4>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <HiOutlineLocationMarker className="text-[20px]" /> Parel,
                Mumbai, Maharashtra 400012
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <FaPhone className="text-[16px]" /> +91 9834567897
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <FaPhone className="text-[16px]" /> +91 9834567897
              </Link>
            </p>
            <p>
              <Link
                to="#!"
                className="flex gap-2 text-[16px] text-center mb-4 text-white font-semibold hover:text-primary transition-all duration-500 ease-in-out items-center"
              >
                <MdOutlineMailOutline className="text-[20px]" />{" "}
                mail@precisiongrow.co.in
              </Link>
            </p>
          </div>
        </div>
        <div className="text-center py-8 pt-22">
          <p className="text-white font-semibold">
            Copyright 2025 EduVibe | Developed By{" "}
            <Link
              to="#!"
              className="transition-all duration-500 ease-in-out hover:text-primary"
            >
              Precision Grow
            </Link>
            . All Rights Reserved
          </p>
        </div>
        <img
          src={Shape1}
          alt="Footer"
          className="absolute top-[10%] left-[6%] hidden lg:block"
        />
        <img
          src={Shape2}
          alt="Footer"
          className="absolute bottom-[14%] right-[7%] hidden lg:block"
        />
      </div>
    </footer>
  );
};

export default Footer;
