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

const Actions = () => {
  return (
    <div className="flex flex-1 items-center justify-end">
      <ul className="mr-[100px] flex gap-[20px]">
        <li>
          <Link href="/account">
            <Image src="/Header/support.svg" width={28} height={28} alt="" />
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <Image src="/Header/search.svg" width={28} height={28} alt="" />
          </Link>
        </li>
        <li>
          <Link href="/checkout">
            <Image src="/Header/wishlist.svg" width={28} height={28} alt="" />
          </Link>
        </li>
        <li>
          <Dialog>
            <DialogTrigger>
              <Image src="/Header/cart.svg" width={28} height={28} alt="" />
            </DialogTrigger>
            <DialogContent className="absolute right-0 top-0 flex h-[746px] max-h-screen w-[417px] flex-col justify-between [&>button]:hidden">
              <div className="flex h-full flex-col justify-between gap-[42px] p-[27px]">
                <div className="flex flex-col gap-[42px]">
                  <DialogTitle className="flex items-center justify-between border-b border-black pb-[27px]">
                    <span className="text-2xl font-semibold">
                      Shopping Cart
                    </span>
                    <DialogClose>
                      <Image
                        src={"/dialog-close.svg"}
                        width={28}
                        height={28}
                        alt={""}
                      />
                    </DialogClose>
                  </DialogTitle>
                  <div className="flex w-full items-center justify-between gap-[60px]">
                    <div className="flex items-center gap-8">
                      <Image
                        className="bg-[#FBEBB5]"
                        src={"/cart-item.png"}
                        width={106}
                        height={106}
                        alt={""}
                      />
                      <div className="flex flex-col items-start justify-center gap-3">
                        <p className="font-semibold">Asgaard Sofa</p>
                        <p>
                          <span className="font-xl font-light">1 x </span>
                          <span className="font-medium text-[#B88E2F]">
                            Rs. 250,000.00
                          </span>
                        </p>
                      </div>
                    </div>
                    <Image
                      src={"/remove.svg"}
                      width={20}
                      height={20}
                      alt={""}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p>Subtotal</p>
                  <p className="font-semibold text-[#B88E2F]">Rs. 250,000.00</p>
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
        </li>
      </ul>
    </div>
  );
};

export default Actions;
