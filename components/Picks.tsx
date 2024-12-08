import React from "react";
import UnderlinedButton from "./UnderlinedButton";
import Listing from "./Listing";

const Picks = () => {
  const picks = [
    {
      image: "/Products/trenton-modular-sofa.png",
      name: "Trenton modular sofa_3",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/granite-dining-table-with-dining-chair.png",
      name: "Granite dining table with dining chair",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/outdoor-bar-table-and-stool.png",
      name: "Outdoor bar table and stool",
      price: "Rs 25,000.00",
    },
    {
      image: "/Products/plain-console-with-teek-mirror.png",
      name: "Plain console with teek mirror",
      price: "Rs 25,000.00",
    },
  ];
  return (
    <div className="my-[100px] flex flex-col items-center justify-center gap-[69px]">
      <div className="flex items-center justify-center gap-[30px]">
        {picks.map((item) => (
          <Listing
            key={item.name}
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
