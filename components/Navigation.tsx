import React from "react";
import Link from "next/link";

const Navigation = () => {
  const navItems = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="flex-1">
      <ul className="flex items-center justify-center gap-[76px] py-[2px]">
        {navItems.map((item) => (
          <li className="font-medium" key={item.name}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
