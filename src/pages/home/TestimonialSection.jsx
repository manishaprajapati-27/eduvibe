import React from "react";
import Heading from "../../components/Heading";
import { FaStar } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import shape1 from "../../assets/images/testimonials/shape1.png";
import shape2 from "../../assets/images/testimonials/shape2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Darlene Robertson",
      designation: "Web Developer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/1.png",
    },
    {
      id: 2,
      name: "Darlene Robertson",
      designation: "Java Developer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/2.png",
    },
    {
      id: 3,
      name: "Darlene Robertson",
      designation: "UI/UX Designer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/3.png",
    },
    {
      id: 4,
      name: "Darlene Robertson",
      designation: "Software Engineer",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/4.png",
    },
    {
      id: 5,
      name: "Darlene Robertson",
      designation: "Project Manager",
      desc: "Highly satisfied with the support and guidance provided by Transwide. Their team's knowledge professionalism have been instrumental in keeping our business on the cutting edge.",
      image: "src/assets/images/testimonials/3.png",
    },
  ];
  return (
    <div className="md:lg:py-30 md:py-20 py-15 py-20 bg-[url('src/assets/images/testimonials/bg.jpg')] bg-cover bg-center relative">
      <div className="container mx-auto px-4 lg:px-0 relative">
        <Heading
          heading="Our Lovely Students Feedback"
          subHeading="Testimonials"
          classes="flex flex-col justify-center items-center mb-15"
          hdClasses="mx-auto text-center"
        />
        <div>
          <Swiper
            spaceBetween={30}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              duration: 5000,
              disableOnInteraction: false,
            }}
            pagination={true}
            loop={true}
            // navigation={true}
            className="swiper-testimonial"
            style={{ paddingBottom: "100px" }}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                className="bg-white md:px-11 md:py-10 py-6 px-7 rounded-md transition-all duration-500 ease-in-out relative after:content-[''] after:absolute after:bottom-[-28px] after:left-5 after:w-[30px] after:h-[30px] after:bg-white after:[clip-path:polygon(0_0,0%_100%,100%_0)]"
                key={testimonial.id}
              >
                <div className="flex md:items-center md:flex-row flex-col gap-5 relative">
                  <div className="border-primary rounded-md overflow-hidden  h-[50px]  w-[50px]">
                    <img src={testimonial.image} alt="Testimonial" />
                  </div>
                  <div className="">
                    <h4 className="text-dark font-bold text-[20px] transition-all duration-500 ease-in-out">
                      {testimonial.name}
                    </h4>
                    <h6 className="font-medium text-primary text-[1.07rem] transition-all duration-500 ease-in-out">
                      {testimonial.designation}
                    </h6>
                  </div>
                </div>
                <p className="text-dark-alt leading-2 pb-4 font-medium pt-5 transition-all duration-500 ease-in-out">
                  " {testimonial.desc} "
                </p>
                <div className="flex gap-1 text-[#ffa41b] text-[18px] mb-3 transition-all duration-500 ease-in-out">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
        <img src={shape1} className="absolute bottom-[10%] left-[10%] hidden lg:block" alt="Shape 1" />
        <img src={shape2} className="absolute top-[10%] right-[10%] hidden lg:block" alt="Shape 2" />
    </div>
  );
};

export default TestimonialSection;
