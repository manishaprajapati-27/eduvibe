import Heading from "../../components/Heading";
import { MotionTag } from "../../components/Animation";
import shape1 from "../../assets/images/course-categories/shape1.png";
import shape2 from "../../assets/images/course-categories/shape2.png";
import shape3 from "../../assets/images/course-categories/shape3.png";

const CourseCategoriesSection = () => {
  const categories = [
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 1",
      title: "Lifestyle",
      description: "Embrace nature for a more peaceful lifestyle.",
    },
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 2",
      title: "Motivation",
      description: "Keep moving forward to reach your ultimate goals.",
    },
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 3",
      title: "Photography",
      description: "Bringing your visions to life through photography.",
    },
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 3",
      title: "Sales Marketing",
      description: "Maximize your profits with our marketing strategies.",
    },
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 4",
      title: "UI Design",
      description: "Creating meaningful connections through design.",
    },
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 4",
      title: "UX Research",
      description: "Learning that opens doors to endless possibilities.",
    },
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 4",
      title: "Business Analysis",
      description: "Invest in your future with our business analysis course.",
    },
    {
      icon: (
        <>
          <svg
            fill="#525FE1"
            height="40px"
            width="40px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
          >
            <path
              d="M172.4,130.6l-26.1,6.9v-12.8l26.1-7V130.6z M172.4,140.4l-26.1,7v12.8l26.1-7V140.4z M209.7,107.4l-27.7,7.5v23v12.8
	l27.7-7.4V107.4z M209.7,153.6l-63.4,16.7v12.9l63.4-16.8V153.6z M209.7,189v-12.9L146.3,193v12.8L209.7,189z M46.2,107.4v12.9
	l63.4,16.4v-12.8L46.2,107.4z M46.2,142.9l63.4,16.5v-12.8l-63.4-16.5V142.9z M46.2,165.6l63.4,16.8v-12.9l-63.4-16.7V165.6z
	 M46.2,188.3l63.4,16.7v-12.8l-63.4-16.8V188.3z M256,139.5c0,10-8.1,18-18,18H236v52.2c0,1.4-0.9,2.6-2.2,2.9l-43,11.4v31H65.4V224
	l-43.1-11.4c-1.3-0.3-2.2-1.5-2.2-2.9v-52.2h-2c-10,0-18-8.1-18-18s8.1-18,18-18h2V71.6c0-0.9,0.4-1.8,1.2-2.4
	c0.7-0.6,1.7-0.8,2.6-0.5l104.4,27.6l104.1-27.6c0.9-0.2,1.9,0,2.6,0.5s1.2,1.4,1.2,2.4v49.8h1.9C247.9,121.4,256,129.5,256,139.5z
	 M122.5,111L35.9,88.1V200l86.6,22.9V111z M220.4,88.1L134,111v111.8l86.4-22.8V88.1z M128,86.8c21.4,0,38.7-17.3,38.7-38.7
	c0-21.4-17.3-38.7-38.7-38.7c-21.4,0-38.7,17.3-38.7,38.7C89.3,69.5,106.6,86.8,128,86.8z"
            />
          </svg>
        </>
      ),
      courseNum: "Category 4",
      title: "Data Science",
      description: "Discovering the unknown through the power of data.",
    },
  ];
  return (
    <div className="md:py-30 py-20 relative">
      <div className="container mx-auto lg:px-0 px-4">
        <Heading
          heading="Popular Topics to learn"
          subHeading="COURSE CATEGORIES"
          classes="flex flex-col justify-center items-center lg:mb-15 mb-12"
          hdClasses="mx-auto text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <MotionTag delay={index*0.2}
              key={index}
              className="px-8 py-10 rounded-lg bg-light flex flex-col items-center justify-center text-center transition duration-500 ease-in-out group hover:bg-primary"
            >
              <div className="relative flex flex-col items-center justify-center mb-4 w-full">
                <div className="transition duration-500 ease-in-out opacity-100 group-hover:opacity-0">{category.icon}</div>
                <h5 className="text-[14px] absolute top-3 w-full text-center font-semibold text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">{category.courseNum}</h5>
              </div>
              <h3 className="text-[1.3rem] font-semibold mb-2 transition duration-500 ease-in-out group-hover:text-white py-3">{category.title}</h3>
              <p className="text-dark-alt font-medium transition duration-500 ease-in-out group-hover:text-white">{category.description}</p>
            </MotionTag>
          ))}
        </div>
        <img src={shape1} className="absolute bottom-[28%] left-[10%] hidden lg:block" alt="Course Shape 1" />
        <img src={shape2} className="absolute top-[22%] right-[15%] hidden lg:block" alt="Course Shape 2" />
        <img src={shape3} className="absolute bottom-[8%] right-[8%] hidden lg:block" alt="Course Shape 3" />
      </div>
    </div>
  );
};

export default CourseCategoriesSection;
