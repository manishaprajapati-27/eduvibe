import { Link } from "react-router-dom";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-share.css";

import PageHeader from "../components/PageHeader";
import Heading from "../components/Heading";
import { FaSearchPlus } from "react-icons/fa";

const Gallery = () => {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1600&q=80",
      title: "Lorem ipsum dolor sit, amet consectetur.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?auto=format&fit=crop&w=1600&q=80",
      title: "Lorem ipsum dolor sit, amet consectetur.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605973029521-8154da591bd7?auto=format&fit=crop&w=1600&q=80",
      title: "Lorem ipsum dolor sit, amet consectetur.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526281216101-e55f00f0db7a?auto=format&fit=crop&w=1600&q=80",
      title: "Lorem ipsum dolor sit, amet consectetur.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?auto=format&fit=crop&w=1600&q=80",
      title: "Lorem ipsum dolor sit, amet consectetur.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?auto=format&fit=crop&w=1600&q=80",
      title: "Lorem ipsum dolor sit, amet consectetur.",
    },
  ];

  return (
    <>
      <PageHeader title="Gallery" pageTitle="Gallery" />
      <div className="py-20">
        <div className="container mx-auto lg:px-0 px-4">
          {/* <div className="mb-8">
            <Heading heading="Gallery" subHeading="Gallery" />
          </div> */}
          <div className="flex lg:justify-between lg:items-end lg:flex-row flex-col mb-15">
            <Heading
              heading="Our Gallery"
              subHeading="Gallery"
              alignment="center"
              sbClass="justify-center lg:justify-start"
              hdClasses="lg:text-start text-center"
            />

            <div
              role="tablist"
              className="flex gap-3 mt-10 lg:mt-0 justify-center lg:justify-start"
            >
              <button
                className={`text-[15px] font-semibold py-2 px-4 rounded cursor-pointer transition-all duration-500 ease-in-out bg-primary text-white`}
              >
                All
              </button>
              <button
                className={`text-[15px] font-semibold py-2 px-4 rounded cursor-pointer transition-all duration-500 ease-in-out bg-light text-dark hover:bg-primary hover:text-white`}
              >
                Trending
              </button>
              <button
                className={`text-[15px] font-semibold py-2 px-4 rounded cursor-pointer transition-all duration-500 ease-in-out bg-light text-dark hover:bg-primary hover:text-white`}
              >
                Popularity
              </button>
              <button
                className={`text-[15px] font-semibold py-2 px-4 rounded cursor-pointer transition-all duration-500 ease-in-out bg-light text-dark hover:bg-primary hover:text-white`}
              >
                Featured
              </button>
            </div>
          </div>
          <LightGallery
            elementClassNames="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4"
            plugins={[lgZoom, lgShare, lgHash]}
            speed={500}
          >
            {galleryImages.map((img, index) => (
              <Link
                key={index}
                to={img.image}
                className="block group relative overflow-hidden rounded-lg"
              >
                <img
                  className="w-full h-100 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  src={img.image.replace("w=1600", "w=600")}
                  alt={`Gallery ${index}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#525fe14d_10.75%,#525fe1_85%)] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
                  <span className="text-white text-2xl">
                    <FaSearchPlus />
                  </span>
                  <h4 className="text-white text-[1.6rem] font-bold absolute bottom-3 w-[85%] left-[50%] transform translate-x-[-50%] text-center">
                    {img.title}
                  </h4>
                </div>
              </Link>
            ))}
          </LightGallery>
        </div>
      </div>
    </>
  );
};

export default Gallery;
