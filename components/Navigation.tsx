import Link from "next/link";
import React from "react";

const navItems = [
  { name: "Home",     url: "/" },
  { name: "Shop",     url: "/shop" },
  { name: "About",    url: "/blog" },
  { name: "Contact",  url: "/contact" },
];

const Navigation = () => {
  return (
    <nav className="flex-1">
      <ul className="flex items-center justify-center gap-[76px] py-[2px]">
        {navItems.map((item) => (
          <li className="font-medium" key={item.name}>
            <Link href={item.url}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
