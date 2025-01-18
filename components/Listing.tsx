import React from "react";
import Image from "next/image";

interface ListingProps {
  image: string;
  name: string;
  price: string;
}

const Listing: React.FC<ListingProps> = ({ image, name, price }) => {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="h-[300px] w-[300px] object-fill"
      />
      <p>{name}</p>
      <p className="text-2xl font-medium">${price}</p>
    </div>
  );
};

export default Listing;
