"use client";

import { useState } from "react";
import Image from "next/image";

type sortBy = "Alphabetically" | "Price low to high" | "Price high to low";

const Filter = ({
  sortBy,
  setSortBy,
}: {
  sortBy: sortBy;
  setSortBy: (value: sortBy) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSort = (option: sortBy) => {
    setSortBy(option);
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto flex w-full items-center justify-between bg-[#FAF4F4] px-24 py-8">
      <div className="flex items-center gap-6">
        <Image src={"/filter.svg"} width={25} height={25} alt={""} />
        <p className="text-xl">Filter</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-xl">Sort By</p>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 bg-white p-3"
          >
            {sortBy}
          </button>
          {isOpen && (
            <div className="absolute top-full z-10 mt-1 w-48 rounded-md bg-white shadow-lg">
              <ul className="py-2">
                <li
                  onClick={() => handleSort("Alphabetically")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  Alphabetically
                </li>

                <li
                  onClick={() => handleSort("Price low to high")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  Price: Low to High
                </li>
                <li
                  onClick={() => handleSort("Price high to low")}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                >
                  Price: High to Low
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
