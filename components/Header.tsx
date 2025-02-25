"use client";
import React from "react";
import Navigation from "./Navigation";
import Actions from "./Actions";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const headerClass = pathname === "/" ? "bg-yellow-100" : "bg-transparent";

  return (
    <header
      className={`${headerClass} flex h-24 items-center justify-between py-9`}
    >
      <div className="flex-1" />
      <Navigation />
      <Actions />
    </header>
  );
};

export default Header;
