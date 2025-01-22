import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mb-[38px] mt-[98px] flex w-screen flex-col items-center gap-12">
      <div className="flex items-center gap-[136px]">
        <p className="pb-[132px] pt-[108px]">
          400 University Drive Suite 200 Coral <br />
          Gables, <br />
          FL 33134 USA
        </p>
        <div className="flex gap-[72px]">
          <div className="flex gap-[144px]">
            <div className="flex flex-col">
              <p className="pb-[55px] font-medium text-[#9F9F9F]">Links</p>
              <Link className="pb-[46px] font-medium" href={"/"}>
                Home
              </Link>
              <Link className="pb-[46px] font-medium" href={"/shop/"}>
                Shop
              </Link>
              <Link className="pb-[46px] font-medium" href={"/blog/"}>
                About
              </Link>
              <Link className="pb-[46px] font-medium" href={"/contact/"}>
                Contact
              </Link>
            </div>
            <div>
              <p className="pb-[55px] font-medium text-[#9F9F9F]">Help</p>
              <p className="pb-[46px] font-medium">Payment Options</p>
              <p className="pb-[46px] font-medium">Returns</p>
              <p className="pb-[46px] font-medium">Privacy Policy</p>
            </div>
          </div>
          <div>
            <p className="pb-[55px] font-medium text-[#9F9F9F]">Newsletter</p>
            <form className="flex gap-2">
              <input
                placeholder="Enter Your Email Address:"
                className="border-b border-black p-1 pr-4 text-sm placeholder:text-[#9F9F9F]"
                type="email"
              />
              <button
                type="submit"
                className="border-b border-black text-sm font-medium"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[#D9D9D9] pt-9">
        <p>2022 Meubel House. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
