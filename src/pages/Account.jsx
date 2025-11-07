import React from "react";
import PageHeader from "../components/PageHeader";
import Heading from "../components/Heading";
import Button from "../components/Button";

const Account = () => {
  return (
    <>
      <PageHeader title="Login or Register" pageTitle="Account" />
      <div className="lg:py-30 md:py-20 py-15">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="card p-5 border border-light rounded-md">
              <div className="mb-8">
                <Heading heading="Login" />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                  placeholder="Username or email address *"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                  placeholder="Password *"
                />
              </div>
              <div className="flex items-center mb-4 gap-3">
                <input type="checkbox" name="" id="check" />
                <label htmlFor="check" className="text-dark-alt font-medium">
                  Remember me
                </label>
              </div>
              <Button title="Log In" className="btn btn-primary" />
              <a href="#!" className="text-dark-alt font-semibold mt-4 block">
                Forgot Your Password?
              </a>
            </div>
            <div className="card p-5 border border-light rounded-md">
              <div className="mb-8">
                <Heading heading="Register" />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                  placeholder="Email address *"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                  placeholder="Password *"
                />
              </div>
              <div className="flex items-center mb-4 gap-3">
                {/* <input type="checkbox" name="" id="check" /> */}
                <label htmlFor="check" className="text-dark-alt font-medium">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href="#!" className="text-dark font-semibold">
                    privacy policy.
                  </a>
                </label>
              </div>
              <Button title="Register" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
