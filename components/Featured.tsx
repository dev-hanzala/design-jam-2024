import FeaturedListing from "./FeaturedListing";
import React from "react";

const featured = [
  {
    image: "/Featured/pic-1.png",
    name: "Side table",
  },
  {
    image: "/Featured/pic-2.png",
    name: "Side table",
  },
];

const Featured = () => {
  return (
    <div className="flex items-center justify-around bg-[#FAF4F4]">
      {featured.map((item) => (
        <FeaturedListing
          key={item.image}
          image={item.image}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default Featured;
