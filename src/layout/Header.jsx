import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoSearch, IoCloseOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import Button from "../components/Button";
import { LuChevronDown } from "react-icons/lu";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);

  const [sticky, setSticky] = useState(false);
  const { pathname } = useLocation();
  const lastScrollY = useRef(0);
  const isHome = pathname === "/";

  const [sbDropdown, setSbDropdown] = useState({
    dropdown1: {
      open: false,
      subMenu: {
        sub1: false,
      },
    },
    dropdown2: {
      open: false,
      subMenu: {
        sub1: false,
      },
    },
    dropdown3: {
      open: false,
      subMenu: {
        sub1: false,
      },
    },
  });

  useEffect(() => {
    if (headerActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [headerActive]);

  // useEffect(() => {
  //   if (cloneHeaderActive) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [cloneHeaderActive]);

  const toggleDropdown = (dropdown) => {
    setSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        open: !prev[dropdown].open,
      },
    }));
  };

  const toggleSubDropdown = (dropdown, subMenu) => {
    setSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        subMenu: {
          ...prev[dropdown].subMenu,
          [subMenu]: !prev[dropdown].subMenu[subMenu],
        },
      },
    }));
  };

  const [clsbDropdown, setClSbDropdown] = useState({
    dropdown1: {
      open: false,
      subMenu: {
        sub1: false,
        sub2: false,
      },
    },
    dropdown2: {
      open: false,
    },
  });

  const toggleClDropdown = (dropdown) => {
    setClSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        open: !prev[dropdown].open,
      },
    }));
  };

  const toggleClSubDropdown = (dropdown, subMenu) => {
    setClSbDropdown((prev) => ({
      ...prev,
      [dropdown]: {
        ...prev[dropdown],
        subMenu: {
          ...prev[dropdown].subMenu,
          [subMenu]: !prev[dropdown].subMenu[subMenu],
        },
      },
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight / 2; // after first section

      // Sticky after threshold
      // setSticky(currentScrollY > threshold);

      // Show clone only on scroll up
      if (currentScrollY > threshold) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   useEffect(() => {
  //   if (pathname === "/") {
  //     const handleScroll = () => {
  //       setSticky(window.scrollY > 0);
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   } else {
  //     // on other pages always sticky
  //     setSticky(true);
  //   }
  // }, [pathname]);

  return (
    <header
      className={`w-full transition-all duration-500 ease-in-out absolute top-0 left-0 z-50
        ${
          sticky
            ? "bg-white fixed shadow-lg animate-[headerAnimation_0.7s_linear] lg:py-0"
            : "bg-transparent absolute transform"
        } ${
        isHome
          ? sticky
            ? "bg-white lg:py-0"
            : "bg-transparent lg:py-7"
          : "bg-white lg:py-0"
      } 
    `}
    >
      {/* <div className="bg-primary absolute w-[81.5%] h-[calc(100%-54px)] bottom-0 right-0 z-10 bg-hd"></div> */}
      {/* <div className="bg-[#848e84a1] w-[60%] h-[0.7px] absolute top-[54.7px] right-0 z-50 br-hd"></div> */}
      <div className="container mx-auto relative z-20 lg:px-0 px-4">
        <div className="flex w-full items-center">
          <div className="logo pe-4 lg:pe-32">
            <Link href="/">
              <img
                src={logo}
                alt="Green Logistics"
                width="149"
                className="h-auto max-w-max"
              />
            </Link>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center lg:ms-7">
              <div className="nav-links flex-1">
                <ul className="flex items-center justify-center">
                  <li
                    className={`group ${sticky ? "py-0" : "py-4"} ${
                      isHome ? "py-0" : "py-0"
                    }`}
                  >
                    <Link
                      to="/"
                      className="text-dark py-2.5 px-4 font-semibold text-[16px] transition-all duration-500 ease-in-out group-hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`group ${sticky ? "py-0" : "py-4"} ${
                      isHome ? "py-0" : "py-0"
                    }`}
                  >
                    <Link
                      to="/about-us"
                      className="text-dark py-2.5 px-4 font-semibold text-[16px] transition-all duration-500 ease-in-out group-hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                  <li
                    className={`group relative ${sticky ? "py-0" : "py-4"} ${
                      isHome ? "py-0" : "py-0"
                    }`}
                  >
                    <span className="dp-hd text-dark py-2.5 px-4 gap-0.5 flex items-center font-semibold text-[16px] transition-all duration-500 ease-in-out group-hover:text-primary">
                      Courses <LuChevronDown className="text-[20px]" />
                    </span>
                    <ul className="absolute bg-white top-full left-0 p-4 border-b-2 border-primary min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-z-[0] shadow-2xl">
                      <li className="relative group/submenu">
                        <Link
                          to="/courses"
                          className="text-[16px] text-dark font-semibold px-4 py-1.5 flex justify-between items-center hover:text-primary transition-all duration-300 ease-in"
                        >
                          Courses
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/course-details"
                          className="text-[16px] text-dark font-semibold px-4 py-1.5 flex justify-between items-center group/submenuitem hover:text-primary transition-all duration-300 ease-in"
                        >
                          Course Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`group relative ${sticky ? "py-0" : "py-4"} ${
                      isHome ? "py-0" : "py-0"
                    }`}
                  >
                    <span className="dp-hd text-dark py-2.5 px-4 gap-0.5 flex items-center font-semibold text-[16px] transition-all duration-500 ease-in-out group-hover:text-primary">
                      Shop <LuChevronDown className="text-[20px]" />
                    </span>
                    <ul className="absolute bg-white top-full left-0 p-4 border-b-2 border-primary min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-z-[0] shadow-2xl">
                      <li className="relative group/submenu">
                        <Link
                          to="/shop"
                          className="text-[16px] text-dark font-semibold px-4 py-1.5 flex justify-between items-center group/submenuitem hover:text-primary transition-all duration-300 ease-in"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/product-details"
                          className="text-[16px] text-dark font-semibold px-4 py-1.5 flex justify-between items-center group/submenuitem hover:text-primary transition-all duration-300 ease-in"
                        >
                          Product details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`group relative ${sticky ? "py-0" : "py-4"} ${
                      isHome ? "py-0" : "py-0"
                    }`}
                  >
                    <span className="dp-hd text-dark py-2.5 px-4 gap-0.5 flex items-center font-semibold text-[16px] transition-all duration-500 ease-in-out group-hover:text-primary">
                      Blog <LuChevronDown className="text-[20px]" />
                    </span>
                    <ul className="absolute bg-white top-full left-0 p-4 border-b-2 border-primary min-w-[17rem] invisible opacity-0 transform scale-y-0 translate-z-[100px] origin-top transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:scale-y-100 group-hover:translate-z-[0] shadow-2xl">
                      <li className="relative group/submenu">
                        <Link
                          to="/blog"
                          className="text-[16px] text-dark font-semibold px-4 py-1.5 flex justify-between items-center group/submenuitem hover:text-primary transition-all duration-300 ease-in"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog-details"
                          className="text-[16px] text-dark font-semibold px-4 py-1.5 flex justify-between items-center group/submenuitem hover:text-primary transition-all duration-300 ease-in"
                        >
                          Blog details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`group ${sticky ? "py-0" : "py-4"} ${
                      isHome ? "py-0" : "py-0"
                    }`}
                  >
                    <Link
                      to="/gallery"
                      className="text-dark py-2.5 px-4 font-semibold text-[16px] transition-all duration-500 ease-in-out group-hover:text-primary"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li
                    className={`group ${sticky ? "py-0" : "py-4"} ${
                      isHome ? "py-0" : "py-0"
                    }`}
                  >
                    <Link
                      to="contact-us"
                      className="text-dark py-2.5 px-4 font-semibold text-[16px] transition-all duration-500 ease-in-out group-hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`call-info flex items-center lg:gap-5 gap-0 py-3`}
              >
                <div className="">
                  <span
                    className="md:text-[1.3rem] cursor-pointer text-[17px] text-primary h-10 w-10 md:h-13 md:w-13 bg-white flex justify-center items-center shadow-[0_0_15px_#44496a2e] rounded-md"
                  >
                    <IoSearch className="text-primary text-[17px]" />
                  </span>
                </div>
                <div className="hidden md:block">
                  <Button
                    className="btn btn-primary h-13"
                    title={
                      <>
                        <RiUserLine className="text-[14px]" /> Login / Register
                      </>
                    }
                  />
                </div>
                <div
                  className="toggle md:hidden text-3xl text-primary h-10 w-10 md:h-13 md:w-13 flex justify-center items-center shadow-[0_0_15px_#44496a2e] rounded-md"
                  onClick={() => setHeaderActive(true)}
                >
                  <RiUserLine className="md:text-[1.3rem] text-[17px] text-primary" />
                </div>
                <div
                  className="toggle text-3xl text-primary h-10 w-10 md:h-13 md:w-13 flex justify-center items-center shadow-[0_0_15px_#44496a2e] rounded-md"
                  onClick={() => setHeaderActive(true)}
                >
                  <IoMdMenu className="md:text-[1.3rem] text-[17px] text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`bg-[#000000d8] fixed h-screen w-screen z-40 transform transition-all duration-500 ease-in-out left-0 top-0 ${
          headerActive
            ? "translate-x-[0%] opacity-100"
            : "delay-500 -translate-x-full opacity-0"
        }`}
      ></div>
      <div
        className={`mob-sidebar bg-white shadow-lg fixed h-screen w-[41%] z-50 transform transition-all delay-300 duration-500 ease-in-out left-0 top-0 overflow-y-scroll ${
          headerActive
            ? "translate-x-[0%] opacity-100"
            : "delay-0 -translate-x-full opacity-0"
        }`}
      >
        <div className="logo py-6 px-6 border-b border-[#848e8462]">
          <Link to="/">
            <img src={logo} alt="Green Logistics" width="152" />
          </Link>
        </div>
        <div
          className="absolute top-4 right-4 text-dark text-3xl h-10 w-10 rounded-full shadow-lg flex items-center justify-center text-[27px]"
          onClick={() => setHeaderActive(false)}
        >
          <IoCloseOutline />
        </div>
        <ul className="px-4 py-5">
          <li>
            <Link
              to="/"
              onClick={() => setHeaderActive(false)}
              className="text-dark p-2.5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              onClick={() => setHeaderActive(false)}
              className="text-dark p-2.5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] block"
            >
              About
            </Link>
          </li>
          <li onClick={() => toggleDropdown("dropdown1")}>
            <span
              className={`p-2.5 font-semibold text-[16px] flex justify-between items-center transition duration-300 ease-in-out text-dark group-hover:text-dark border-b-[0.7px] border-[#848e8462] ${
                sbDropdown.dropdown1.open ? "text-primary" : "text-dark"
              }`}
            >
              Courses
              <button
                className={`h-8 w-8 flex justify-center items-center transition-all duration-500 ease-in-out ${
                  sbDropdown.dropdown1.open ? "text-primary" : "text-dark"
                }`}
              >
                {sbDropdown.dropdown1.open ? (
                  <FaMinus className="transform transition-all duration-500 ease-in-out" />
                ) : (
                  <FaPlus className="transform transition-all duration-500 ease-in-out" />
                )}
              </button>
            </span>
            <ul
              className={`transition-all duration-500 ease-in-out ${
                sbDropdown.dropdown1.open
                  ? "max-h-[1000px] opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <li className="relative group/submenu">
                <Link
                  to="/courses"
                  onClick={() => setHeaderActive(false)}
                  className={`p-2.5 ps-5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] flex justify-between items-center ${
                    sbDropdown.dropdown1.subMenu.sub1
                      ? "text-primary"
                      : "text-dark"
                  }`}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setHeaderActive(false)}
                  to="/course-details"
                  className="text-dark p-2.5 ps-5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] block"
                >
                  Course Details
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown("dropdown2")}>
            <span
              className={`p-2.5 font-semibold text-[16px] flex justify-between items-center transition duration-300 ease-in-out text-dark group-hover:text-dark border-b-[0.7px] border-[#848e8462] ${
                sbDropdown.dropdown2.open ? "text-primary" : "text-dark"
              }`}
            >
              Shop
              <button
                className={`h-8 w-8 flex justify-center items-center transition-all duration-500 ease-in-out ${
                  sbDropdown.dropdown2.open ? "text-primary" : ""
                }`}
              >
                {sbDropdown.dropdown2.open ? (
                  <FaMinus className="transform transition-all duration-500 ease-in-out" />
                ) : (
                  <FaPlus className="transform transition-all duration-500 ease-in-out" />
                )}
              </button>
            </span>
            <ul
              className={`transition-all duration-500 ease-in-out ${
                sbDropdown.dropdown2.open
                  ? "max-h-[1000px] opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <li className="relative group/submenu">
                <Link
                  to="/shop"
                  onClick={() => setHeaderActive(false)}
                  className={`p-2.5 ps-5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] flex justify-between items-center ${
                    sbDropdown.dropdown2.subMenu.sub1
                      ? "text-primary"
                      : "text-dark"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/product-details"
                  onClick={() => setHeaderActive(false)}
                  className="text-dark p-2.5 ps-5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] block"
                >
                  Product Details
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={() => toggleDropdown("dropdown3")}>
            <span
              className={`p-2.5 font-semibold text-[16px] flex justify-between items-center transition duration-300 ease-in-out text-dark group-hover:text-dark border-b-[0.7px] border-[#848e8462] ${
                sbDropdown.dropdown3.open ? "text-primary" : "text-dark"
              }`}
            >
              Blog
              <button
                className={`h-8 w-8 flex justify-center items-center transition-all duration-500 ease-in-out ${
                  sbDropdown.dropdown3.open ? "text-primary" : ""
                }`}
              >
                {sbDropdown.dropdown3.open ? (
                  <FaMinus className="transform transition-all duration-500 ease-in-out" />
                ) : (
                  <FaPlus className="transform transition-all duration-500 ease-in-out" />
                )}
              </button>
            </span>
            <ul
              className={`transition-all duration-500 ease-in-out ${
                sbDropdown.dropdown3.open
                  ? "max-h-[1000px] opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <li className="relative group/submenu">
                <Link
                  to="/blog"
                  onClick={() => setHeaderActive(false)}
                  className={`p-2.5 ps-5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] flex justify-between items-center ${
                    sbDropdown.dropdown3.subMenu.sub1
                      ? "text-primary"
                      : "text-dark"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-details"
                  onClick={() => setHeaderActive(false)}
                  className="text-dark p-2.5 ps-5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] block"
                >
                  Blog Details
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => setHeaderActive(false)}
              className="text-dark p-2.5 font-semibold text-[16px] group-hover:text-dark border-b-[0.7px] border-[#848e8462] block"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              onClick={() => setHeaderActive(false)}
              className="text-dark p-2.5 font-semibold text-[16px] group-hover:text-dark block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
