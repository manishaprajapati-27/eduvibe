import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import BlogDetailPage from "./pages/BlogDetailPage";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Account from "./pages/Account";
import Gallery from "./pages/Gallery";
import ForgotPassword from "./pages/ForgotPassword";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog-details" element={<BlogDetailPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      {/* <Home/> */}
      <Footer />
    </>
  );
};

export default App;
