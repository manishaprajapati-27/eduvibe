import Button from "../../components/Button";
import { IoArrowForwardSharp } from "react-icons/io5";
import HeroImage from "../../assets/images/hero/hero.png";
import HeroBack from "../../assets/images/hero/hero-back.png";
import shape1 from "../../assets/images/hero/shape1.png";
import shape2 from "../../assets/images/hero/shape2.png";
import shape3 from "../../assets/images/hero/shape3.png";
import { MotionTag, rotateRightUp } from "../../components/Animation";

const HeroSection = () => {
  return (
    <div className="hero relative md:pt-44 lg:pb-50 pt-34 pb-0 overflow-hidden lg:min-h-screen bg-[url('src/assets/images/hero/hero-bg.jpg')] bg-cover bg-center">
      <div className="container mx-auto xl:px-0 px-4">
        <div className="relative lg:w-[50%] w-full lg:pt-24 pt-0">
          <MotionTag as="h5" className="text-primary font-bold tracking-[1px] md:pb-4 pb-2 flex items-center gap-2">
            <div className="w-12 h-0.5 bg-primary"></div>BETTER LEARNING FUTURE
            WITH US
          </MotionTag>
          <MotionTag as="h2" delay={0.3} className="lg:text-[65px] md:text-[48px] text-[32px] text-dark font-extrabold md:pb-8 pb-3 leading-normal md:leading-19 lg:pe-18">
            Committed To Learn Excellence In Education
          </MotionTag>
          <MotionTag delay={0.6} className=" text-dark-alt font-medium md:pb-12 pb-8 text-[20px]">
            Discover the possibilities of online education and unlock your true
            potential! Expand your mind with online education.
          </MotionTag>
            <MotionTag delay={0.9}>
              <Button
                className="btn btn-primary"
                title={
                  <>
                    Get Started Today <IoArrowForwardSharp />
                  </>
                }
              />
            </MotionTag>
        </div>
        <div className="hero-image lg:absolute bottom-0 lg:right-[150px] lg:left-[inherit] right-[inherit] left-5 lg:w-[34%] md:w-[85%] w-[90%]">
          <img src={HeroImage} className="object-contain relative z-10" alt="Hero" />
          <img src={HeroBack} className="object-contain absolute top-30 left-0 hidden lg:block" alt="Hero" />
        </div>
        <img src={shape1} className="absolute left-6 top-50 hidden lg:block" alt="Hero" />
        <MotionTag variant={rotateRightUp} delay={1.2} className="absolute left-[33%] bottom-28 hidden lg:block">
          <img src={shape2} alt="Hero" />
        </MotionTag>
        <img src={shape3} className="absolute right-15 top-55 hidden lg:block" alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
