import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ListingProps {
  image: string;
  name: string;
  price: string;
  _id: string;
}

const Listing: React.FC<ListingProps> = ({ image, name, price, _id }) => {
  return (
    <Link href={`/product/${_id}`} className="flex flex-col gap-3">
      <Image
        src={image}
        width={300}
        height={300}
        alt={name}
        className="h-[300px] w-[300px] object-cover"
      />
      <p>{name}</p>
      <p className="text-2xl font-medium">${price}</p>
    </Link>
  );
};

export default Listing;
