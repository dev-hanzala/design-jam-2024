import React from "react";
import UnderlinedButton from "./UnderlinedButton";
import Listing from "./Listing";
import { client } from "@/sanity/lib/client";
import { type productType } from "@/lib/types";

const Picks = async () => {
  const products: productType[] =
    await client.fetch(`*[_type == 'product' && isFeaturedProduct][0...4]{
      _id,
      imagePath,
      name,
      price
    }`);

  return (
    <div className="my-24 flex flex-col items-center justify-center gap-16">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {products.map((product) => (
          <Listing key={product._id} product={product} />
        ))}
      </div>
      <UnderlinedButton>View More</UnderlinedButton>
    </div>
  );
};

export default Picks;
