import React from "react";
import PageHeader from "../components/PageHeader";
import { LuIndianRupee } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import ShopCard from "../components/ShopCard";
import { products } from "../data";

const Shop = () => {
  
  return (
    <>
      <PageHeader title="Archives: Shop" pageTitle="Shop" />
      <div className="py-30">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7.5">
            <ShopCard shopData={products}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
