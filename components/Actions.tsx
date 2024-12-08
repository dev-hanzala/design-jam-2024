import React from "react";
import Image from "next/image";

const Actions = () => {
  const actionIcons = [
    "Header/support.svg",
    "Header/search.svg",
    "Header/wishlist.svg",
    "Header/cart.svg",
  ];
  return (
    <div className="flex flex-1 items-center justify-end">
      <ul className="mr-[100px] flex gap-[20px]">
        {actionIcons.map((icon) => (
          <li key={icon}>
            <Image src={icon} width={28} height={28} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Actions;
