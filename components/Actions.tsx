import React from "react";
import Image from "next/image";
import Link from "next/link";

const Actions = () => {
  const actionIcons = [
    {
      icon: "Header/support.svg",
      link: "/account",
    },
    {
      icon: "Header/search.svg",
      link: "/shop",
    },
    {
      icon: "Header/wishlist.svg",
      link: "/checkout",
    },
    {
      icon: "Header/cart.svg",
      link: "/cart",
    },
  ];
  return (
    <div className="flex flex-1 items-center justify-end">
      <ul className="mr-[100px] flex gap-[20px]">
        {actionIcons.map(({ icon, link }) => (
          <li key={icon}>
            <Link href={link}>
              <Image src={icon} width={28} height={28} alt="" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Actions;
