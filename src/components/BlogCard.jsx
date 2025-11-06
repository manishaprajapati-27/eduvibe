import { IoArrowForwardSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";

const BlogCard = ({blogData, bgColor}) => {
  return (
    <>
    {blogData.map((blog, index) => (
            <div
              key={index}
              className={`card hover:bg-white rounded-md overflow-hidden transition-all duration-500 ease-in-out group hover:shadow-lg ${bgColor === "white" ? "bg-white": "bg-light"}`}
            >
              <div className="h-[250px] overflow-hidden">
                <img
                  src={blog.image}
                  className="transition-all duration-500 ease-in-out group-hover:scale-110 w-full h-full object-cover object-center"
                  alt={blog.title}
                />
              </div>
              <div className="p-7 py-5">
                <div className="">
                  <span className="text-dark-alt font-semibold flex gap-2.5 mb-2 items-center">
                    <IoPricetagsOutline className="text-primary" /> Social Media
                  </span>
                  <h3 className="text-dark font-bold text-[1.6rem] mb-4.5 transition-all duration-500 ease-in-out leading-9.5 hover:text-primary">
                    {blog.title}
                  </h3>
                  <div className="flex justify-between">
                    <span className="flex gap-1.5 text-dark-alt font-medium items-center">
                      <MdOutlineCalendarMonth /> {blog.date}
                    </span>
                    <a
                      href={blog.link}
                      className="text-primary font-bold text-[1.15rem] flex gap-1.5 items-center"
                    >
                      Read More <IoArrowForwardSharp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </>
  )
}

export default BlogCard