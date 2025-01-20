import React from "react";
import Image from "next/image";
import UnderlinedButton from "./UnderlinedButton";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { type productType } from "@/lib/types";

const Hero = async () => {
  const product: productType = await client.fetch(`*[_type == "product"][11]`);

  console.log();
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 bg-yellow-100 py-24 lg:flex-row lg:gap-0">
        <div className="flex flex-col gap-6 px-12 text-center lg:gap-9 lg:text-left">
          <h1 className="max-w-xl text-4xl font-medium lg:text-6xl">
            {product.name}
          </h1>
          <Link href="/shop" className="self-center lg:self-start">
            <UnderlinedButton>Shop Now</UnderlinedButton>
          </Link>
        </div>
        <div className="">
          <Image
            src={product.imagePath}
            width={576}
            height={576}
            alt="Rocket single seater"
            className="h-full w-full max-w-[400px] object-contain lg:min-w-96"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
