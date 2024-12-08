"use client"
import React from "react";
import Navigation from "./Navigation";
import Actions from "./Actions";
import { usePathname } from "next/navigation";

const Header = () => {
	const patname = usePathname();
  return (
    <header
      className={`${patname === "/" && "bg-[#FBEBB5]"} flex items-center justify-between bg-transparent h-[100px] py-9`}
    >
      <div className="flex-1" />
      <Navigation />
      <Actions />
    </header>
  );
};

export default Header;
