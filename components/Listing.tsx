import React from "react";
import Link from "next/link";
import Image from "next/image";
import { productType } from "@/lib/types";

interface ListingProps {
  product: productType;
}

const Listing: React.FC<ListingProps> = ({
  product: { imagePath, _id, name, price },
}: ListingProps) => {
  return (
    <Link href={`/product/${_id}`} className="flex flex-col gap-3">
      <Image
        src={imagePath}
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
