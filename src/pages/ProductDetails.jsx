import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import proDetail from "../assets/images/shop/product-detail.webp";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { GoStar } from "react-icons/go";
import ProComment from "../assets/images/team/2.webp";
import ShopCard from "../components/ShopCard";
import { products } from "../data";
import Heading from "../components/Heading";

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const handleCountIn = () => {
    setCount(count + 1);
  };
  const handleCountDe = () => {
    // setCount(count-1)
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <PageHeader title="Product Details" pageTitle="Product Details" />
      <div className="lg:py-30 md:py-20 py-15">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="card mb-5 h-full relative mx-auto">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <div className="w-full lg:w-full relative rounded-md overflow-hidden border border-light">
                <img src={proDetail} className="w-full" alt="Product" />
              </div>
              <div className="flex gap-4 pt-8 relative z-10">
                <div className="">
                  <div className="flex gap-2 pb-4 items-center">
                    <div className="flex gap-1 text-[#F29E15] text-[1rem] transition-all duration-500 ease-in-out group-hover:text-white">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-dark font-semibold">
                      <a href="#!">(2 Customer Review)</a>
                    </p>
                  </div>
                  <h6 className="text-dark-alt text-[1.1rem] font-semibold mb-2">
                    By: Christina Henry
                  </h6>
                  <h4
                    className="text-dark flex gap-3 items-end md:text-[1.98rem] mb-4 text-[1.58rem] font-bold"
                    style={{ lineHeight: "normal" }}
                  >
                    Modern World History
                  </h4>

                  <div className="text-primary text-[18px] flex gap-0.5 items-end leading-normal font-semibold">
                    <FaRupeeSign className="mb-1 leading-0" />
                    520
                  </div>
                  <div className="mb-8 pt-4">
                    <p className="text-dark-alt font-medium mb-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas perferendis consequatur inventore quae reiciendis
                      dolor incidunt provident voluptatum ut recusandae
                      consectetur, error rerum, reprehenderit dolores esse
                      ducimus. Commodi, dolore modi, laboriosam corrupti
                      repellat ipsum perferendis eos saepe quaerat hic autem.
                    </p>

                    <div className="flex items-center gap-6 mb-8 mt-6">
                      <h4 className="text-dark font-bold text-[20px]">
                        Quantity
                      </h4>
                      <div className="flex">
                        <Link
                          onClick={handleCountDe}
                          className="text-dark-alt font-medium transition-all ease-in-out duration-500 hover:text-primary h-10 w-10 flex justify-center items-center border border-[#f2f2f2] text-[22px]"
                        >
                          <FiMinus />
                        </Link>
                        <div className="h-10 w-10 flex justify-center items-center border border-[#f2f2f2] text-[22px] text-dark font-semibold transition-all ease-in-out duration-500 hover:text-primary">
                          {count}
                        </div>
                        <Link
                          onClick={handleCountIn}
                          className="text-dark-alt font-medium transition-all ease-in-out duration-500 hover:text-primary h-10 w-10 flex justify-center items-center border border-[#f2f2f2] text-[22px]"
                        >
                          <FiPlus />
                        </Link>
                      </div>
                    </div>

                    <div className="flex gap-2 border-b border-light pb-8">
                      <Button
                        className="btn btn-primary text-[14px] font-semibold"
                        title="Add to Cart"
                      />
                      <Button
                        className="btn btn-primary text-[14px] font-semibold"
                        title="Add to Wishlist"
                      />
                    </div>
                    <div className="py-8">
                      <h4 className="text-dark font-bold text-[17px] mb-1.5">
                        SKU:{" "}
                        <span className="text-dark-alt font-medium">
                          book-collection
                        </span>
                      </h4>
                      <h4 className="text-dark font-bold text-[17px] mb-1.5">
                        Category:{" "}
                        <span className="text-dark-alt font-medium">
                          Development
                        </span>
                      </h4>
                      <h4 className="text-dark font-bold text-[17px] mb-1.5">
                        Tag:{" "}
                        <span className="text-dark-alt font-medium">book</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-5xl mx-auto lg:mt-14">
              {/* Tabs */}
              <div className="flex space-x-8 border-b justify-center border-gray-200">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-3 text-[18px] font-bold border-b-2 transition-all duration-500 ease-in-out cursor-pointer ${
                    activeTab === "description"
                      ? "text-primary border-primary"
                      : "text-dark hover:text-primary border-transparent"
                  }`}
                >
                  Description
                </button>

                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`pb-3 text-[18px] font-bold border-b-2 transition-all duration-500 ease-in-out cursor-pointer ${
                    activeTab === "reviews"
                      ? "text-primary border-primary"
                      : "text-dark hover:text-primary border-transparent"
                  }`}
                >
                  Reviews (2)
                </button>
              </div>

              {/* Content */}
              <div className="mt-6 text-gray-700 leading-relaxed">
                {activeTab === "description" && (
                  <div>
                    <p className="text-dark-alt font-medium mb-3">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos.
                    </p>
                    <ul className="my-4">
                      <li className="text-dark text-[17px] font-medium flex gap-2 items-center mb-3">
                        <FaCheckCircle className="text-primary" /> Lorem ipsum
                        dolor sit amet consectetur.
                      </li>
                      <li className="text-dark text-[17px] font-medium flex gap-2 items-center mb-3">
                        <FaCheckCircle className="text-primary" /> Lorem ipsum
                        dolor sit amet consectetur.
                      </li>
                      <li className="text-dark text-[17px] font-medium flex gap-2 items-center mb-3">
                        <FaCheckCircle className="text-primary" /> Lorem ipsum
                        dolor sit amet consectetur.
                      </li>
                    </ul>
                    <p className="text-dark-alt font-medium">
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable.
                    </p>
                  </div>
                )}

                {activeTab === "reviews" && (
                  <div>
                    <div className="py-2">
                      <h4 className="text-dark font-bold text-[28px]">
                        2 reviews
                      </h4>
                      <div className="flex md:items-center md:flex-row flex-col md:gap-10 gap-4 relative py-10 border-b border-light">
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
                            Nam vel lacus eu nisl bibendum accumsan vitae vitae
                            nibh. Nam nec eros id magna hendrerit sagittis.
                            Nullam sed mi non odio feugiat volutpat sit amet nec
                            elit.Nisl bibendum accumsan vitae vitae.
                          </p>
                        </div>
                      </div>
                      <div className="flex md:items-center md:flex-row flex-col gap-10 relative py-10">
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
                            Nam vel lacus eu nisl bibendum accumsan vitae vitae
                            nibh. Nam nec eros id magna hendrerit sagittis.
                            Nullam sed mi non odio feugiat volutpat sit amet nec
                            elit.Nisl bibendum accumsan vitae vitae.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pb-10">
                      <h4 className="text-dark font-bold text-[28px] pb-3">
                        Add a Review
                      </h4>
                      <div className="pb-8 flex gap-2 items-center">
                        <h4 className="text-dark font-medium text-[17px]">
                          Your Rating
                        </h4>
                        <div className="flex gap-2 md:mt-0">
                          <span className="text-[#F29E15] text-2xl">
                            <GoStar />
                          </span>
                          <span className="text-[#F29E15] text-2xl">
                            <GoStar />
                          </span>
                          <span className="text-[#F29E15] text-2xl">
                            <GoStar />
                          </span>
                          <span className="text-[#F29E15] text-2xl">
                            <GoStar />
                          </span>
                          <span className="text-[#F29E15] text-2xl">
                            <GoStar />
                          </span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-7">
                        <div className="mb-7">
                          <input
                            type="text"
                            className="bg-[#f2f2f2] text-[16px] rounded-md font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-7">
                          <input
                            type="text"
                            className="bg-[#f2f2f2] text-[16px] rounded-md font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="mb-7">
                        <textarea
                          className="bg-[#f2f2f2] text-[16px] rounded-md font-semibold px-7 py-4 outline-0 border border-[#f2f2f2] focus:border-primary w-full h-38"
                          placeholder="Write Message..."
                        ></textarea>
                      </div>
                      <div className="flex items-center mb-3 gap-3">
                        <input type="checkbox" name="" id="check" />
                        <label
                          htmlFor="check"
                          className="text-dark-alt font-medium"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <Button
                        className="btn-primary font-bold"
                        title="Submit Review"
                        style={{ padding: "1rem 2.2rem", fontSize: "1.2rem" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-30">
        <div className="container px-4 lg:px-0 mx-auto">
          <Heading heading="Related Products" subHeading="Similar Items" />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
            <ShopCard shopData={products.slice(0, 3)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
