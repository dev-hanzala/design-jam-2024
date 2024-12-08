import React from "react";
import SectionTop from "@/components/SectionTop";
import Specialty from "@/components/Specialty";

const Account = () => {
  return (
    <div>
      <SectionTop route={"Checkout"} />
      <div className="flex place-items-start justify-start gap-6 px-[100px] py-16">
        <div className="w-1/2 px-[109px] py-[35px]">
          <p className="pb-9 text-4xl font-semibold">Billing Details</p>
          <div className="flex gap-4 pb-9">
            <div className="flex flex-col justify-center gap-4">
              <p>First Name</p>
              <input
                className="w-full rounded-[10px] border border-black p-4"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p>Last Name</p>
              <input
                className="w-full rounded-[10px] border border-black p-4"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p>Company Name (Optional)</p>
            <input
              className="w-full rounded-[10px] border border-black p-4"
              type="text"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="pt-9">Country / Region</p>
            <input
              className="w-full rounded-[10px] border border-black p-4"
              type="text"
              placeholder="Sri Lanka"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="pt-9">Street address</p>
            <input
              className="w-full rounded-[10px] border border-black p-4"
              type="text"
            />
            <div className="flex flex-col justify-center gap-4">
              <p className="pt-9">Town / City</p>
              <input
                className="w-full rounded-[10px] border border-black p-4"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="pt-9">Province</p>
              <input
                className="w-full rounded-[10px] border border-black p-4"
                type="text"
                placeholder="Western Province"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="pt-9">ZIP code</p>
              <input
                className="w-full rounded-[10px] border border-black p-4"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="pt-9">Phone</p>
              <input
                className="w-full rounded-[10px] border border-black p-4"
                type="text"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="pt-9">Email address</p>
              <input
                className="w-full rounded-[10px] border border-black p-4"
                type="text"
              />
            </div>
            <input
              className="mt-9 w-full rounded-[10px] border border-black p-4"
              type="text"
              placeholder="Additional Information"
            />
          </div>
        </div>
        <div className="w-1/2 px-[109px] py-[120px]">
          <div className="grid w-full grid-cols-2 grid-rows-4 border-b border-black py-6">
            <p className="pb-4 text-start text-2xl font-medium">Product</p>
            <p className="pb-4 text-end text-2xl font-medium">Subtotal</p>
            <p className="pb-4 text-start">Asgaard sofa x1</p>
            <p className="pb-4 text-end">Rs. 250,000.00</p>
            <p className="pb-4 text-start">Subtotal</p>
            <p className="pb-4 text-end">Rs. 250,000.00</p>
            <p className="pb-4 text-start">Total</p>
            <p className="pb-4 text-end text-2xl font-bold text-[#B88E2F]">
              Rs. 250,000.00
            </p>
          </div>
          <div className="flex flex-col gap-6 py-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-black"></div>
              <p>Direct Bank Transfer</p>
            </div>
            <p className="font-light">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full border border-black font-light"></div>
              <p>Direct Bank Transfer</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full border border-black font-light"></div>
              <p>Cash On Delivery</p>
            </div>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our <span className="font-semibold">privacy policy</span>.
            </p>
            <button className="mx-auto border border-black rounded-[10px] text-xl py-4 px-24">Place order</button>
          </div>
        </div>
      </div>
      <Specialty />
    </div>
  );
};

export default Account;
