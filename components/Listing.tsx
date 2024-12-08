import React from "react";
import Image from "next/image";

interface ListingProps {
  image: string;
  name: string;
  price: string;
}

const Listing: React.FC<ListingProps> = ({ image, name, price }) => {
  return (
    <div className="flex h-[400px] w-[287px] flex-col gap-3">
      <Image src={image} width={287} height={287} alt={name} />
      <p>{name}</p>
      <p className="text-2xl font-medium">{price}</p>
    </div>
  );
};

export default Listing;
