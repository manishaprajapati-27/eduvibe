import React from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Heading from "../components/Heading";

const ForgotPassword = () => {
  return (
    <>
      <PageHeader title="Gallery" pageTitle="Gallery" />
      <div className="lg:py-30 md:py-20 py-15">
        <div className="container mx-auto lg:px-0 px-4">
          <div className="card p-5 border border-light rounded-md">
            <div className="mb-6">
              <Heading heading="Forgot Password" />
              <p className="text-dark-alt font-medium mt-4 block">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>
            </div>
            <form action="">
              <div className="mb-5">
                <input
                  type="text"
                  className="bg-light text-[16px] rounded-md font-medium px-7 py-4 transition-all duration-500 ease-in-out outline-0 border border-[#f2f2f2] focus:border-primary w-full"
                  placeholder="Username or email address *"
                />
              </div>
              <Button title="Reset Password" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
