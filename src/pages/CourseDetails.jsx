import { useState, useEffect, useRef } from "react";
import PageHeader from "../components/PageHeader";
import CourseDetail from "../assets/images/whoweare/detail.webp";
import Button from "../components/Button";
import proDetail from "../assets/images/shop/product-detail.webp";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import bg from "../assets/images/whoweare/course-preview.png";
import "../assets/scss/components/_video-popup.scss";
import { IoClose } from "react-icons/io5";
import ProComment from "../assets/images/team/2.webp";
import AuthorImage from "../assets/images/whoweare/instructor1.webp";
import { FaSquareFull } from "react-icons/fa6";
import { IoPlaySharp } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import InstructorImage from "../assets/images/team/1.webp";
import { FaLinkedinIn } from "react-icons/fa6";
import Accordion from "../components/Accordion";
import { curriculums, newCourses } from "../data";
import Heading from "../components/Heading";
import CourseCard from "../components/CourseCard";

const CourseDetails = ({ videoId = "M7lc1UVf-VE", title = "Intro video" }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      // focus close button after open
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <PageHeader title="Course Details" pageTitle="Course Details" />
      <div className="lg:py-30 md:py-20 py-15">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="h-132 w-full overflow-hidden">
            <img
              src={CourseDetail}
              className="rounded-md h-full w-full object-cover object-center"
              alt="Course Detail"
            />
          </div>
          <div className="grid grid-cols-12 md:gap-10 gap-y-10 lg:px-15">
            <div className="lg:col-span-8 col-span-12">
              <div className="">
                <div className="flex md:items-center md:justify-between gap-3 py-10 md:flex-row flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={AuthorImage} alt="James Carlson" />
                    </div>
                    <h6 className="text-dark text-[16px] font-semibold">
                      By James Carlson
                    </h6>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 text-[#F29E15] text-[1rem] transition-all duration-500 ease-in-out group-hover:text-white">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-dark-alt font-medium">
                      <a href="#!">(2 Review)</a>
                    </p>
                  </div>
                </div>
                <h4
                  className="text-dark flex gap-3 items-end md:text-[2.45rem] mb-4 text-[1.78rem] font-extrabold"
                  //   style={{ lineHeight: "normal" }}
                >
                  Grow Personal Financial Security Thinking & Principles
                </h4>
              </div>

              <div className="mt-8">
                {/* Tabs */}
                <div className="flex justify-around bg-light border-b border-[#dfdfdf] w-full gap-2 flex-wrap md:overflow-hidden overflow-x-scroll">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-3 text-[18px] font-bold border-b-2 transition-all duration-500 ease-in-out cursor-pointer ${
                      activeTab === "overview"
                        ? "text-primary border-[#ffb60a]"
                        : "text-dark hover:text-primary border-light"
                    }`}
                  >
                    Overview
                  </button>

                  <button
                    onClick={() => setActiveTab("curriculum")}
                    className={`py-3 text-[18px] font-bold border-b-2 transition-all duration-500 ease-in-out cursor-pointer ${
                      activeTab === "curriculum"
                        ? "text-primary border-[#ffb60a]"
                        : "text-dark hover:text-primary border-light"
                    }`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab("instructor")}
                    className={`py-3 text-[18px] font-bold border-b-2 transition-all duration-500 ease-in-out cursor-pointer ${
                      activeTab === "instructor"
                        ? "text-primary border-[#ffb60a]"
                        : "text-dark hover:text-primary border-light"
                    }`}
                  >
                    Instructor
                  </button>

                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`py-3 text-[18px] font-bold border-b-2 transition-all duration-500 ease-in-out cursor-pointer ${
                      activeTab === "reviews"
                        ? "text-primary border-[#ffb60a]"
                        : "text-dark hover:text-primary border-light"
                    }`}
                  >
                    Reviews
                  </button>
                </div>

                {/* Content */}
                <div className="mt-7 text-gray-700 leading-relaxed">
                  {activeTab === "overview" && (
                    <div>
                      <h4 className="text-dark font-bold text-[25px] mb-4">
                        Course Description
                      </h4>
                      <p className="text-dark-alt font-medium mb-3">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per
                        inceptos himenaeos.
                      </p>
                      <h4 className="text-dark font-bold text-[25px] my-4">
                        What You’ll Learn From This Course
                      </h4>
                      <ul className="my-4 list-decimal">
                        <li className="text-dark-alt font-medium flex gap-5 items-center mb-3">
                          <FaSquareFull className="text-[0.35rem]" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="text-dark-alt font-medium flex gap-5 items-center mb-3">
                          <FaSquareFull className="text-[0.35rem]" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="text-dark-alt font-medium flex gap-5 items-center mb-3">
                          <FaSquareFull className="text-[0.35rem]" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                        <li className="text-dark-alt font-medium flex gap-5 items-center mb-3">
                          <FaSquareFull className="text-[0.35rem]" /> Lorem
                          ipsum dolor sit amet consectetur.
                        </li>
                      </ul>
                      <h4 className="text-dark font-bold text-[25px] my-4">
                        Certification
                      </h4>
                      <p className="text-dark-alt font-medium">
                        All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable.
                      </p>
                    </div>
                  )}

                  {activeTab === "curriculum" && (
                    <div>
                      <Accordion items={curriculums} />
                    </div>
                  )}

                  {activeTab === "instructor" && (
                    <div>
                      <div className="py-2">
                        <div className="flex items-center md:flex-row flex-col gap-10 relative py-10">
                          {/* <div className="overflow-hidden transition-all duration-500 ease-in-out group-hover:border-white"> */}
                          <img
                            src={InstructorImage}
                            className="w-full h-full object-cover"
                            alt="Testimonial"
                          />
                          {/* </div> */}
                          <div className="">
                            <div className="flex justify-between items-center">
                              <h4 className="text-dark font-bold text-[22px] leading-normal mb-2 transition-all duration-500 ease-in-out flex flex-col items-start group-hover:text-white">
                                David Shon
                                <span className="text-primary font-semibold text-[15px]">
                                  UI/UX Developer
                                </span>
                              </h4>
                            </div>
                            <p className="text-dark-alt font-medium mb-3">
                              Nam vel lacus eu nisl bibendum accumsan vitae
                              vitae nibh. Nam nec eros id magna hendrerit
                              sagittis. Nullam sed mi non odio feugiat volutpat
                              sit amet nec elit.Nisl bibendum accumsan vitae
                              vitae.
                            </p>
                            <div className="flex gap-3">
                              <a
                                href="#!"
                                className="w-11 h-11 flex items-center justify-center bg-white text-primary text-[18px] rounded-full border border-light hover:text-white transition-all duration-500 ease-in-out hover:bg-primary"
                              >
                                <FaFacebookF />
                              </a>
                              <a
                                href="#!"
                                className="w-11 h-11 flex items-center justify-center bg-white text-primary text-[18px] rounded-full border border-light hover:text-white transition-all duration-500 ease-in-out hover:bg-primary"
                              >
                                <FaLinkedinIn />
                              </a>
                              <a
                                href="#!"
                                className="w-11 h-11 flex items-center justify-center bg-white text-primary text-[18px] rounded-full border border-light hover:text-white transition-all duration-500 ease-in-out hover:bg-primary"
                              >
                                <FaPinterestP />
                              </a>
                              <a
                                href="#!"
                                className="w-11 h-11 flex items-center justify-center bg-white text-primary text-[18px] rounded-full border border-light hover:text-white transition-all duration-500 ease-in-out hover:bg-primary"
                              >
                                <FaXTwitter />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div>
                      <div className="py-2">
                        <h4 className="text-dark font-bold text-[28px]">
                          2 reviews
                        </h4>
                        <div className="flex items-center md:flex-row flex-col gap-10 relative py-10 border-b border-light">
                          <div>
                            <div className="rounded-full overflow-hidden w-[70px] h-[70px] transition-all duration-500 ease-in-out group-hover:border-white">
                              <img
                                src={ProComment}
                                className="w-full h-full object-cover"
                                alt="Testimonial"
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="flex justify-between items-center">
                              <h4 className="text-dark font-bold text-[22px] leading-normal mb-2 transition-all duration-500 ease-in-out flex flex-col items-start group-hover:text-white">
                                David Shon
                                <span className="text-dark-alt font-medium text-[16px]">
                                  11 Nov, 2025
                                </span>
                              </h4>
                              <div className="flex text-[#F29E15] text-[17px] mb-3 transition-all duration-500 ease-in-out group-hover:text-white">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                            </div>
                            <p className="text-dark-alt font-medium mb-3">
                              Nam vel lacus eu nisl bibendum accumsan vitae
                              vitae nibh. Nam nec eros id magna hendrerit
                              sagittis. Nullam sed mi non odio feugiat volutpat
                              sit amet nec elit.Nisl bibendum accumsan vitae
                              vitae.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center md:flex-row flex-col gap-10 relative py-10">
                          <div>
                            <div className="rounded-full overflow-hidden w-[70px] h-[70px] transition-all duration-500 ease-in-out group-hover:border-white">
                              <img
                                src={ProComment}
                                className="w-full h-full object-cover"
                                alt="Testimonial"
                              />
                            </div>
                          </div>
                          <div className="">
                            <div className="flex justify-between items-center">
                              <h4 className="text-dark font-bold text-[22px] leading-normal mb-2 transition-all duration-500 ease-in-out flex flex-col items-start group-hover:text-white">
                                David Shon
                                <span className="text-dark-alt font-medium text-[16px]">
                                  11 Nov, 2025
                                </span>
                              </h4>
                              <div className="flex gap-0 text-[#F29E15] text-[17px] mb-3 transition-all duration-500 ease-in-out group-hover:text-white">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                            </div>
                            <p className="text-dark-alt font-medium mb-3">
                              Nam vel lacus eu nisl bibendum accumsan vitae
                              vitae nibh. Nam nec eros id magna hendrerit
                              sagittis. Nullam sed mi non odio feugiat volutpat
                              sit amet nec elit.Nisl bibendum accumsan vitae
                              vitae.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 col-span-12">
              <div className="card p-4 bg-white shadow-lg rounded-lg relative lg:-top-13">
                <div className="">
                  <div
                    ref={thumbRef}
                    className="video-popup__thumb h-60 mb-7 bg-cover bg-center rounded-lg flex items-center justify-center relative overflow-hidden"
                    role="button"
                    tabIndex={0}
                    aria-label={`Play ${title}`}
                    onClick={(e) => {
                      setOpen(true);
                    }}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        // keyboard: center the ripple
                        createRipple(e, true);
                        setOpen(true);
                      }
                    }}
                    style={{ backgroundImage: `url(${bg})` }}
                  >
                    <span
                      className="inline-flex items-center justify-center group transition-all duration-500 ease-in-out w-[55px] h-[55px] bg-white hover:bg-primary cursor-pointer rounded-full relative"
                      aria-hidden
                    >
                      <IoPlaySharp className="text-primary text-2xl transition-all duration-500 ease-in-out group-hover:text-white" />
                      {/* <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="32" cy="32" r="32" fill="#fff" />
                        <path d="M26 20v24l20-12-20-12z" fill="#fff" />
                      </svg> */}
                    </span>
                  </div>

                  {open && (
                    <div
                      className="video-popup__modal fixed inset-0 flex items-center justify-center bg-[#0d0d0ec4] z-999 py-12 px-8"
                      role="dialog"
                      aria-modal="true"
                      aria-label={title}
                    >
                      <button
                        ref={closeBtnRef}
                        className="bg-[#00000046] text-white h-12 w-12 flex items-center cursor-pointer justify-center mb-8 absolute top-0 right-0"
                        aria-label="Close video"
                        onClick={() => setOpen(false)}
                      >
                        <IoClose className="text-2xl" />
                      </button>

                      <div className="video-popup__frame aspect-video w-[80%] overflow-hidden bg-[#231f4000] h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          className="w-full h-full object-cover bg-transparent"
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                          title={title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="mx-4">
                  <div className="flex justify-between py-3 border-b border-light">
                    <span className="text-dark-alt text-[1.05rem] font-semibold flex gap-2 items-center">
                      <IoTimeOutline className="text-primary" /> Duration
                    </span>
                    <span className="text-dark-alt text-[1.05rem] font-semibold">
                      17 weeks
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-light">
                    <span className="text-dark-alt text-[1.05rem] font-semibold flex gap-2 items-center">
                      <IoTimeOutline className="text-primary" /> Duration
                    </span>
                    <span className="text-dark-alt text-[1.05rem] font-semibold">
                      17 weeks
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-light">
                    <span className="text-dark-alt text-[1.05rem] font-semibold flex gap-2 items-center">
                      <IoTimeOutline className="text-primary" /> Duration
                    </span>
                    <span className="text-dark-alt text-[1.05rem] font-semibold">
                      17 weeks
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-light">
                    <span className="text-dark-alt text-[1.05rem] font-semibold flex gap-2 items-center">
                      <IoTimeOutline className="text-primary" /> Duration
                    </span>
                    <span className="text-dark-alt text-[1.05rem] font-semibold">
                      17 weeks
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-light">
                    <span className="text-dark-alt text-[1.05rem] font-semibold flex gap-2 items-center">
                      <IoTimeOutline className="text-primary" /> Duration
                    </span>
                    <span className="text-dark-alt text-[1.05rem] font-semibold">
                      17 weeks
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-light">
                    <span className="text-dark-alt text-[1.05rem] font-semibold flex gap-2 items-center">
                      <IoTimeOutline className="text-primary" /> Duration
                    </span>
                    <span className="text-dark-alt text-[1.05rem] font-semibold">
                      17 weeks
                    </span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-dark-alt text-[1.05rem] font-semibold flex gap-2 items-center">
                      <IoTimeOutline className="text-primary" /> Duration
                    </span>
                    <span className="text-dark-alt text-[1.05rem] font-semibold">
                      17 weeks
                    </span>
                  </div>
                  <Button
                    title="Price: 120.00"
                    className="btn btn-primary-ouline w-full mt-8 mb-3"
                  />
                  <button className="w-full bg-white border transition-all duration-500 ease-in-out py-2.5 cursor-pointer border-light rounded-lg hover:bg-[#ffb60a] hover:text-white">
                    Buy Now
                  </button>
                  <div className="flex gap-4 mt-8 mb-3 justify-center">
                    <p className="text-dark font-semibold">Share: </p>
                    <a
                      href="#!"
                      className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:text-primary"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="#!"
                      className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:text-primary"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#!"
                      className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:text-primary"
                    >
                      <FaPinterestP />
                    </a>
                    <a
                      href="#!"
                      className="flex items-center justify-center text-dark-alt text-[17px] rounded transition-all duration-500 ease-in-out hover:text-primary"
                    >
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-30">
        <div className="container px-4 lg:px-0 mx-auto">
          <Heading heading="Courses You May Like" subHeading="Related Courses" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
            <CourseCard cardData={newCourses.slice(0, 3)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
