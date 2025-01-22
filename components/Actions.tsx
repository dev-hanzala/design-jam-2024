import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartDialog from "./CartDialog";

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
          <CartDialog />
        </li>
      </ul>
    </div>
  );
};

export default Actions;
