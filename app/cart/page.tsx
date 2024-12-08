import React from 'react'
import SectionTop from "@/components/SectionTop";
import Specialty from "@/components/Specialty";
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
	return (
    <div>
      <SectionTop route={"Cart"} />
      <div className="flex items-start justify-center gap-[30] px-[100px] py-16">
        <div className="flex flex-grow flex-col gap-[55px]">
          <div className="flex w-full justify-center bg-[#FFF9E5] px-[142px] py-4">
            <p className="pr-[114px] font-medium">Product</p>
            <p className="pr-[137px] font-medium">Price</p>
            <p className="pr-9 font-medium">Quantity</p>
            <p className="font-medium">Subtotal</p>
          </div>
          <div className="flex w-full items-center">
            <div className="mr-10 w-fit bg-[#FFF9E5] text-[#9F9F9F]">
              <Image src={"/cart-item.png"} width={106} height={106} alt="" />
            </div>
            <p className="pr-[69px]">Asgaard sofa</p>
            <p className="pr-[84px]">Rs. 250,000.00</p>
            <p className="mr-[84px] h-8 w-8 rounded-md border border-black text-center">
              1
            </p>
            <p>Rs. 250,000.00</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-12 bg-[#FFF9E5] pb-20 pt-6">
          <p className="text-4xl font-semibold">Cart Totals</p>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 px-12">
            <p className="text-start font-medium">Subtotal</p>
            <p className="text-end">Rs. 250,000.00</p>
            <p className="text-start font-medium">Total</p>
            <p className="text-end text-xl font-medium text-[#B88E2F]">
              Rs. 250,000.00
            </p>
          </div>
          <button className="mx-auto rounded-[10px] border border-black px-16 py-4">
            <Link href={"/checkout/"}>Check Out</Link>
          </button>
        </div>
      </div>
      <Specialty />
    </div>
  );
}

export default Cart