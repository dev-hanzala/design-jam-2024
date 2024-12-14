"use client";
import Actions from "./Actions";
import Navigation from "./Navigation";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const headerClass = pathname === "/" ? "bg-[#FBEBB5]" : "bg-transparent";

  return (
    <header
      className={`
        ${headerClass}
        flex
        h-[100px]
        items-center
        justify-between
        py-9
      `}
    >
      <div className="flex-1" />
      <Navigation />
      <Actions />
    </header>
  );
};

export default Header;
