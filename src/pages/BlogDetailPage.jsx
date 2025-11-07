import React from "react";
import PageHeader from "../components/PageHeader";
import BlogDetailImage from "../assets/images/blog/blog-detail.webp";
import { IoArrowForwardSharp, IoTimeOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "../components/Button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";


const BlogDetailPage = () => {
  const blogs = [
    {
      title: "The Complete Web Developer Guideline 2023",
      date: "04 Nov, 2025",
      link: "#!",
      image: "src/assets/images/blog/1.webp",
    },
    {
      title: "Social Media Marketing MASTERY( A-Z ) Journey",
      date: "04 Nov, 2025",
      link: "#!",
      image: "src/assets/images/blog/2.webp",
    },
    {
      title: "Branding: How to Brand Yourself and Your",
      date: "04 Nov, 2025",
      link: "#!",
      image: "src/assets/images/blog/3.webp",
    },
  ];
  return (
    <>
      <PageHeader title="Social Media Marketing" pageTitle="Blog Detail" />
      <div className="lg:py-30 md:py-20 py-15">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-8 col-span-12">
              <img
                src={BlogDetailImage}
                className="rounded-md"
                alt="Blog Details"
              />
              <div className="flex md:items-center items-start flex-col md:flex-row md:gap-8 gap-y-2">
                <div className="flex gap-8 mt-4">
                  <div className="flex gap-2 items-center text-dark-alt font-medium text-[17px]">
                    <img
                      src="src/assets/images/team/2.webp"
                      className="w-10 h-10 rounded-full"
                      alt="Manisha"
                    />
                    Manisha Prajapati
                  </div>
                  <div className="flex gap-2 items-center text-dark-alt font-medium text-[17px]">
                    <MdOutlineCalendarMonth />
                    11 Nov, 2025
                  </div>
                  <div className="flex gap-2 items-center text-dark-alt font-medium text-[17px]">
                    <IoTimeOutline />0 Comments
                  </div>
                  <div className="flex gap-2 items-center text-dark-alt font-medium text-[17px]">
                    <HiOutlineLocationMarker />1 Min Read
                  </div>
                </div>
              </div>
              <h2 className="text-[33px] text-dark font-bold my-4">
                Social Media Marketing MASTERY( A-Z ) Journey
              </h2>
              <p className="text-dark-alt font-medium">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
                Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons
                rsus mal suada and fadolorit to the consectetur elit. Grursus
                mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm
                ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend.
              </p>
              <div className="card relative py-8 px-12 border-t-3 border-primary my-6 rounded-md shadow-lg">
                <h4 className="text-primary text-[20px] font-medium text-center">
                  " Duis vel scelerisque augue, ut vehicula nisl. Curabitur et
                  mollis tortor, eget sollicitudin lectus. Praesent a ante ac
                  urna ultrices volutpat at sed ligula. Phasellus nibh dui,
                  pulvinar a nibh quis. "
                </h4>
                <BiSolidQuoteAltLeft className="absolute bottom-3 right-4 text-primary opacity-20 text-5xl" />
              </div>
              <p>
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
              </p>
              <h5 className="text-dark font-bold py-4 text-[1.55rem]">
                Learned From Doing One Of Those Social Media
              </h5>
              <ul>
                <li className="flex gap-3 items-center mb-3">
                  <FaCircleCheck className="text-primary" /> Struggling to sell
                  one multi-million dollar home currently on the market.
                </li>
                <li className="flex gap-3 items-center mb-3">
                  <FaCircleCheck className="text-primary" /> The point of using
                  Lorem Ipsum is that it has a normal distribution of letters.
                </li>
                <li className="flex gap-3 items-center mb-3">
                  <FaCircleCheck className="text-primary" /> Publishing packages
                  and web page editors now use their default model text.
                </li>
                <li className="flex gap-3 items-center mb-3">
                  <FaCircleCheck className="text-primary" /> Publishing packages
                  and web page editors now use their default model text.
                </li>
              </ul>
              <div className="flex gap-3 mt-6">
                <p className="text-dark font-medium text-[18px]">Share: </p>
                <a
                  href="#!"
                  className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#!"
                  className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#!"
                  className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="#!"
                  className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:bg-primary"
                >
                  <FaXTwitter />
                </a>
              </div>
              <div className="pb-10">
                <h4 className="text-dark font-bold text-[25px] pb-4 pt-8">
                  Leave a Reply
                </h4>
                <p className="text-dark-alt font-medium mb-7">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-7">
                  <div className="mb-7">
                    <input
                      type="text"
                      className="bg-light text-[16px] font-medium rounded-sm text-dark-alt px-7 py-4 outline-0 border border-[#F5F5F5] focus:border-primary w-full"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-7">
                    <input
                      type="text"
                      className="bg-light text-[16px] font-medium rounded-sm text-dark-alt px-7 py-4 outline-0 border border-[#F5F5F5] focus:border-primary w-full"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="mb-7">
                  <input
                    type="text"
                    className="bg-light text-[16px] font-medium rounded-sm text-dark-alt px-7 py-4 outline-0 border border-[#F5F5F5] focus:border-primary w-full"
                    placeholder="Website"
                  />
                </div>
                <div className="mb-7">
                  <textarea
                    className="bg-light text-[16px] font-medium rounded-sm text-dark-alt px-7 py-4 outline-0 border border-[#F5F5F5] focus:border-primary w-full h-38"
                    placeholder="Write Message..."
                  ></textarea>
                </div>
                <div>
                  <div className="flex items-center mb-3 gap-3">
                    <input type="checkbox" name="" id="check" />
                    <label
                      htmlFor="check"
                      className="text-dark-alt font-medium"
                    >
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>

                  <Button
                    className="btn-primary font-bold"
                    title="Post A Comment"
                    style={{ padding: "1rem 1.8rem", fontSize: "1.2rem" }}
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <h4 className="text-dark font-bold text-[1.45rem] mb-6">
                Search Here
              </h4>
              <div className="relative mb-9">
                <input
                  type="text"
                  className="w-full bg-light px-5 py-4 outline-0 text-dark-alt font-medium rounded-md"
                  placeholder="Search"
                />
                <a
                  href="#!"
                  className="transition-all duration-500 ease-in-out rounded-md
                   hover:bg-dark absolute group top-0 right-0 w-[3rem] h-full flex justify-center items-center"
                >
                  <IoSearch className="text-2xl text-primary transition-all duration-500 ease-in-out group-hover:rotate-0" />
                </a>
              </div>
              <h4 className="text-dark font-bold text-[1.45rem] mb-6">
                Categories
              </h4>
              <div className="flex justify-between py-3 border-b border-light">
                <span className="text-dark-alt text-[1.05rem]">Branding</span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light">
                <span className="text-dark-alt text-[1.05rem]">JavaScript</span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light">
                <span className="text-dark-alt text-[1.05rem]">Science</span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light">
                <span className="text-dark-alt text-[1.05rem]">
                  Uncategorized
                </span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light">
                <span className="text-dark-alt text-[1.05rem]">
                  Web Development
                </span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light">
                <span className="text-dark-alt text-[1.05rem]">Science</span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="flex justify-between py-3 border-b border-light">
                <span className="text-dark-alt text-[1.05rem]">
                  Uncategorized
                </span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-dark-alt text-[1.05rem]">
                  Web Development
                </span>
                <span className="text-dark-alt text-[1.05rem]">(5)</span>
              </div>
              <div className="mt-8">
                <h4 className="text-dark font-bold text-[1.45rem] mb-3">
                Latest Post
              </h4>
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="card bg-white flex gap-4 py-5 overflow-hidden transition-all duration-500 ease-in-out border-b border-light nth-last-[1]:border-b-0"
                  >
                    <div>
                      <a href={blog.link} className="h-[100px] w-[100px] block rounded-sm overflow-hidden">
                      <img
                        src={blog.image}
                        className="transition-all duration-500 ease-in-out group-hover:scale-110 w-full h-full object-cover object-center"
                        alt={blog.title}
                      />
                    </a>
                    </div>
                    <div className="">
                      <p className="text-dark-alt font-medium">{blog.date}</p>
                      <a href={blog.link} className="">
                        <h3 className="text-dark font-bold text-[1.2rem] leading-normal mb-4.5 transition-all duration-500 ease-in-out leading-9.5 hover:text-primary">
                          {blog.title}
                        </h3>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
