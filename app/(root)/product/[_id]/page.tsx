import React from "react";
import Picks from "@/components/Picks";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { AddToCart } from "@/components/AddToCart";
import { productType } from "@/lib/types";

const Details = async ({ params }: { params: Promise<{ _id: string }> }) => {
  const id = (await params)._id;
  const product: productType = await client.fetch(`*[_id == "${id}"][0]`);
  return (
    <>
      <div className="mx-auto w-full max-w-[1200px] border-b border-black">
        <div className="flex w-full justify-between py-9">
          <div className="w-1/2">
            <Image
              className="h-[500px] w-[500px] rounded-lg border border-black object-cover"
              src={product.imagePath}
              width={500}
              height={500}
              alt=""
            />
          </div>
          <div className="w-1/2">
            <div className="border-b border-black">
              <p className="py-4 text-5xl">{product.name}</p>
              <p className="text-2xl text-[#9F9F9F]">${product.price}</p>
              <p className="py-4 text-xs">{product.description}</p>
              <AddToCart product={product} />
            </div>
            <div className="flex gap-8 py-10 text-[#9F9F9F]">
              <div className="flex flex-col gap-3">
                <p>SKU</p>
                <p>Category</p>
                <p>Share</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>: {product._id}</p>
                <p>: {product.category}</p>
                <div className="flex items-center gap-2">
                  <p>:</p>
                  <div className="flex gap-6">
                    <Image
                      src={"/Details/fb.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <Image
                      src={"/Details/li.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                    <Image
                      src={"/Details/tw.svg"}
                      width={20}
                      height={20}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center py-16">
        <p className="text-center text-4xl font-medium">Related Products</p>
        <Picks />
      </div>
    </>
  );
};
export default Details;
