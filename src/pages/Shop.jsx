import React from "react";
import PageHeader from "../components/PageHeader";
import { LuIndianRupee } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import ShopCard from "../components/ShopCard";
import { products } from "../data";
import Heading from "../components/Heading";

const Shop = () => {
  
  return (
    <>
      <PageHeader title="Archives: Shop" pageTitle="Shop" />
      <div className="lg:py-30 md:py-20 py-15">
        <div className="container mx-auto lg:px-0 px-4">
          <Heading heading="Designed for Impact" subHeading="Products" classes="flex flex-col justify-center items-center mb-10" />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7.5">
            <ShopCard shopData={products}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
