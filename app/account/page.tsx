import React from "react";
import SectionTop from "@/components/SectionTop";
import Specialty from "@/components/Specialty";

const Account = () => {
  return (
    <div>
      <SectionTop route={"My Account"} />
      <div className="flex place-items-center justify-center gap-6 px-[100px] py-16">
        <div className="w-1/2 px-[109px] py-[35px]">
          <p className="pb-9 text-4xl font-semibold">Log In</p>
          <p className="pb-6 font-medium">Username or email address</p>
          <input
            className="w-full rounded-[10px] border border-[#9F9F9F] p-4"
            type="text"
          />
          <p className="pb-6 pt-9 font-medium">Password</p>
          <input
            className="mb-9 w-full rounded-[10px] border border-[#9F9F9F] p-4"
            type="text"
          />
          <div className="flex items-center pb-9">
            <input className="h-6 w-6" type="checkbox" />
            <p className="pl-4">Remember me</p>
          </div>
          <div className="flex w-full items-center gap-8">
            <button className="w-1/2 rounded-[10px] border border-black p-4">
              Log In
            </button>
            <p className="w-1/2">Lost Your Password?</p>
          </div>
        </div>
        <div className="w-1/2 px-[109px] py-[35px]">
          <p className="pb-9 text-4xl font-semibold">Register</p>
          <p className="pb-6 font-medium">Email address</p>
          <input
            className="w-full rounded-[10px] border border-[#9F9F9F] p-4"
            type="text"
          />
          <p className="pb-6 pt-9 font-light">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="font-light">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <p className="pb-6 font-semibold">privacy policy</p>
          <button className="w-1/2 rounded-[10px] border border-black p-4">
            Register
          </button>
        </div>
      </div>
      <Specialty />
    </div>
  );
};

export default Account;
