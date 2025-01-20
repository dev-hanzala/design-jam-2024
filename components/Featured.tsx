import React from "react";
import UnderlinedButton from "./UnderlinedButton";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const Featured = async () => {
  const featured: {
    name: string;
    imagePath: string;
  }[] = await client.fetch(`*[_type == "product"][8..9]`);
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-24 py-16 lg:flex-row">
        {featured.map((item, index) => (
          <div
            key={index + 1}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={item.imagePath}
              width={600}
              height={600}
              className="object-fit h-[500px] w-[500px] pb-6"
              alt=""
            />
            <p className="bottom-0 pb-6 text-4xl font-medium">{item.name}</p>
            <Link href={"/shop"}>
              <UnderlinedButton>View More</UnderlinedButton>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
