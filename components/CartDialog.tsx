"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "./ui/dialog";
import { useCart } from "./CartProvider";

export default function CartDialog() {
  const { removeFromCart, cartItems, total } = useCart();

  return (
    <Dialog>
      <DialogTrigger>
        <Image src="/Header/cart.svg" width={28} height={28} alt="" />
      </DialogTrigger>
      <DialogContent className="absolute right-0 top-0 flex h-[746px] max-h-screen w-[417px] flex-col justify-between [&>button]:hidden">
        <div className="flex h-full flex-col justify-between gap-[42px] p-[27px]">
          <div className="flex flex-col gap-[42px]">
            <DialogTitle className="flex items-center justify-between border-b border-black pb-[27px]">
              <span className="text-2xl font-semibold">Shopping Cart</span>
              <DialogClose>
                <Image
                  src={"/dialog-close.svg"}
                  width={28}
                  height={28}
                  alt={""}
                />
              </DialogClose>
            </DialogTitle>
            <div className="flex max-h-[400px] flex-col gap-4 overflow-y-auto pr-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex w-full items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <Image
                      className="size-[106px] bg-[#FBEBB5] object-cover"
                      src={item.product.imagePath}
                      width={106}
                      height={106}
                      alt={item.product.name}
                    />
                    <div className="flex flex-col items-start justify-center gap-3">
                      <p className="font-semibold">{item.product.name}</p>
                      <p>
                        <span className="font-xl font-light">
                          {item.quantity} x{" "}
                        </span>
                        <span className="font-medium text-[#B88E2F]">
                          Rs. {Number(item.product.price).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Image
                    src={"/remove.svg"}
                    width={20}
                    height={20}
                    alt={"Remove"}
                    onClick={() => removeFromCart(item)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <p>Subtotal</p>
            <p className="font-semibold text-[#B88E2F]">
              Rs. {total.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex gap-[28px] border-t border-black p-[27px] text-xs">
          <Link href={"/cart"}>
            <DialogClose className="rounded-full border border-black px-[36px] py-[6px]">
              View Cart
            </DialogClose>
          </Link>
          <Link href={"/checkout"}>
            <DialogClose className="rounded-full border border-black px-[36px] py-[6px]">
              Checkout
            </DialogClose>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
