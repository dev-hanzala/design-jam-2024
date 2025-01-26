"use client";

import Filter from "./Filter";
import Listing from "./Listing";
import { productType } from "@/lib/types";
import { useState } from "react";

type sortBy = "Alphabetically" | "Price low to high" | "Price high to low";

export default function ProductGrid({ products }: { products: productType[] }) {
  const [sortBy, setSortBy] = useState<sortBy>("Alphabetically");

  return (
    <>
      <Filter setSortBy={setSortBy} sortBy={sortBy} />
      <div className="container mx-auto grid grid-cols-1 gap-4 px-24 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...products]
          .sort((a, b) => {
            switch (sortBy) {
              case "Alphabetically":
                return a.name.localeCompare(b.name);
              case "Price low to high":
                return Number(a.price) - Number(b.price);
              case "Price high to low":
                return Number(b.price) - Number(a.price);
              default:
                return 0;
            }
          })
          .map((product) => (
            <Listing key={product._id} product={product} />
          ))}
      </div>
    </>
  );
}
