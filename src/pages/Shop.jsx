import React from "react";
import PageHeader from "../components/PageHeader";
import { LuIndianRupee } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";

const Shop = () => {
  const products = [
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      prevPrice: (
        <>
          <FaRupeeSign className="text-[0.8rem]" />
          100
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      prevPrice: (
        <>
          <FaRupeeSign className="text-[0.8rem]" />
          100
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      prevPrice: (
        <>
          <FaRupeeSign className="text-[0.8rem]" />
          100
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
    {
      title: "Dragon Fighter",
      price: (
        <>
          <FaRupeeSign className="text-[1rem]" />
          150
        </>
      ),
      prevPrice: (
        <>
          <FaRupeeSign className="text-[0.8rem]" />
          100
        </>
      ),
      author: "By: Christina Henry",
      image: "src/assets/images/shop/product1.webp",
    },
  ];
  return (
    <>
      <PageHeader title="Archives: Shop" pageTitle="Shop" />
      <div className="py-30">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7.5">
            {products.map((product, index) => (
              <div className="card" key={index}>
                <div className="rounded-lg overflow-hidden transition-all duration-500 ease-in-out scale-100 hover:scale-102">
                  <img src={product.image} alt="Shop" />
                </div>
                <p className="text-dark-alt text-[15px] pt-4 text-center">
                  {product.author}
                </p>
                <h4 className="text-dark text-[1.2rem] py-1.5 font-bold text-center">
                  {product.title}
                </h4>
                <div className="flex justify-center gap-1.5">
                  <h6 className="font-semibold flex gap-0 items-center text-[1.2rem] text-primary">
                    {product.price}
                  </h6>
                  <h6 className="text-dark-alt font-semibold flex gap-0 items-center relative text-[0.9rem] after:content-[''] after:absolute after:top-[50%] after:left-0 after:transform after:translate-y-[-50%] after:bg-dark-alt after:h-[0.7px] after:w-full">
                    {product.prevPrice}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
