"use client";
import React from "react";
import SectionTop from "@/components/SectionTop";
import Specialty from "@/components/Specialty";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { CartItem } from "@/components/CartProvider";

const Cart = () => {
  const { cartItems, total } = useCart();
  return (
    <div>
      <SectionTop route={"Cart"} />
      <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-center gap-8 px-4 py-8 md:px-8 lg:flex-row lg:px-[100px] lg:py-16">
        {/* Product Table */}
        <div className="w-full lg:flex-grow">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] max-w-2xl">
              <thead>
                <tr className="bg-[#FFF9E5]">
                  <th className="px-2 py-4 text-center text-sm font-medium md:text-base">
                    Image
                  </th>
                  <th className="px-2 py-4 text-center text-sm font-medium md:text-base">
                    Product
                  </th>
                  <th className="px-2 py-4 text-center text-sm font-medium md:text-base">
                    Price
                  </th>
                  <th className="px-2 py-4 text-center text-sm font-medium md:text-base">
                    Quantity
                  </th>
                  <th className="px-2 py-4 text-center text-sm font-medium md:text-base">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item: CartItem) => (
                  <tr key={item.product._id} className="items-center">
                    <td className="px-2 py-4">
                      <div className="mx-auto w-fit bg-[#FFF9E5]">
                        <Image
                          src={item.product.imagePath}
                          width={106}
                          height={106}
                          alt={item.product.name}
                          className="size-20 object-cover md:size-28"
                        />
                      </div>
                    </td>
                    <td className="px-2 py-4 text-center text-sm md:text-base">
                      {item.product.name}
                    </td>
                    <td className="px-2 py-4 text-center text-sm md:text-base">
                      ${item.product.price.toFixed(2)}
                    </td>
                    <td className="px-2 py-4 text-center text-sm md:text-base">
                      {item.quantity}
                    </td>
                    <td className="px-2 py-4 text-center text-sm md:text-base">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="flex w-full min-w-[300px] flex-col items-center justify-start gap-8 bg-[#FFF9E5] p-6 lg:w-auto lg:pb-20 lg:pt-6">
          <h2 className="text-xl font-semibold md:text-2xl lg:text-4xl">
            Cart Totals
          </h2>
          <div className="grid w-full grid-cols-2 gap-4 px-4 lg:px-12">
            <div className="text-start text-sm font-medium md:text-base">
              Subtotal
            </div>
            <div className="text-end text-sm md:text-base">${total}</div>
            <div className="text-start text-sm font-medium md:text-base">
              Total
            </div>
            <div className="text-end text-base font-medium text-[#B88E2F] md:text-lg lg:text-xl">
              ${total}
            </div>
          </div>
          <Link
            href="/checkout"
            className="w-full rounded-[10px] border border-black px-8 py-3 text-center text-sm transition-colors hover:bg-black hover:text-white md:text-base lg:w-auto lg:px-16 lg:py-4"
          >
            Check Out
          </Link>
        </div>
      </div>
      <Specialty />
    </div>
  );
};

export default Cart;
