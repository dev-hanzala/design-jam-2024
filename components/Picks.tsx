import React from "react";
import UnderlinedButton from "./UnderlinedButton";
import Listing from "./Listing";
import { client } from "@/sanity/lib/client";

type Item = {
  _id: string;
  imagePath: string;
  name: string;
  price: string;
};

const Picks = async () => {
  const products: Item[] =
    await client.fetch(`*[_type == 'product' && isFeaturedProduct][0...4]{
      _id,
      imagePath,
      name,
      price
    }`);

  const picks = products.map((product) => ({
    id: product._id,
    image: product.imagePath,
    name: product.name,
    price: product.price,
  }));

  return (
    <div className="my-[100px] flex flex-col items-center justify-center gap-[69px]">
      <div className="flex items-center justify-center gap-[30px]">
        {picks.map((item) => (
          <Listing
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <UnderlinedButton>View More</UnderlinedButton>
    </div>
  );
};

export default Picks;
