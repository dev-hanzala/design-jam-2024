import React from "react";
import Picks from "@/components/Picks";
import Image from "next/image";

const Details = () => {
  const smImages = [
    "/Details/sm-1.png",
    "/Details/sm-2.png",
    "/Details/sm-3.png",
    "/Details/sm-4.png",
  ];
  return (
    <div className="pb-16">
      <div className="border-b border-black px-[100px]">
        <div className="flex gap-4 py-9 text-[#9F9F9F]">
          <p>Home</p>
          <Image src="/breaccrumb.svg" width={20} height={20} alt="" />
          <p>Shop</p>
          <Image src="/breaccrumb.svg" width={20} height={20} alt="" />
          <p className="border-l border-black px-4">Asgaard sofa</p>
        </div>
        <div className="flex gap-[82px] py-[35px]">
          <div className="flex gap-8 pr-6">
            <div className="">
              <div className="flex flex-col gap-8">
                {smImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={76}
                    height={80}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div>
              <Image
                className="inline-block"
                src={"/Details/lg.png"}
                width={423}
                height={500}
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2">
            <div className="border-b border-black pr-[180px]">
              <p className="py-4 text-5xl">Asgaard sofa</p>
              <p className="text-2xl text-[#9F9F9F]">Rs. 250,000.00</p>
              <div className="flex items-center gap-4 pt-3">
                <Image
                  src="/Details/stars.svg"
                  width={124}
                  height={20}
                  alt=""
                />
                <p className="border-l border-black pl-4 text-xs">
                  5 Customer Reviews
                </p>
              </div>
              <p className="py-4 text-xs">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <p className="pb-4 text-xs text-[#9F9F9F]">size</p>
              <div className="flex gap-4">
                <div className="h-[30px] w-[30px] content-center rounded-md bg-[#FBEBB5] text-center">
                  L
                </div>
                <div className="h-[30px] w-[30px] content-center rounded-md bg-[#FAF4F4] text-center">
                  XL
                </div>
                <div className="h-[30px] w-[30px] content-center rounded-md bg-[#FAF4F4] text-center">
                  XS
                </div>
              </div>
              <p className="py-4 text-xs text-[#9F9F9F]">Color</p>
              <div className="flex gap-4">
                <div className="h-[30px] w-[30px] rounded-full bg-[#816DFA]" />
                <div className="h-[30px] w-[30px] rounded-full bg-black" />
                <div className="h-[30px] w-[30px] rounded-full bg-[#CDBA7B]" />
              </div>
              <div className="flex gap-4 py-8">
                <div className="flex items-center justify-center gap-4 rounded-[15px] border border-black px-12 py-4 text-center">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                <div className="rounded-[15px] border border-black px-12 py-4 text-center">
                  Add To Cart
                </div>
              </div>
            </div>
            <div className="flex gap-4 py-10 text-[#9F9F9F]">
              <div className="flex flex-col gap-3">
                <p>SKU</p>
                <p>Category</p>
                <p>Tags</p>
                <p>Share</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>: SS001</p>
                <p>: Sofas</p>
                <p>: Sofa, Chair, Home, Shop</p>
                <div className="flex">
                  <p>: </p>
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
      <div className="flex flex-col items-center justify-center gap-12 border-b border-black px-[100px] py-12">
        <div className="flex items-center justify-center gap-[53px]">
          <p className="text-2xl">Description</p>
          <p className="text-2xl text-[#9F9F9F]">Additional Information</p>
          <p className="text-2xl text-[#9F9F9F]">Reviews [5]</p>
        </div>
        <p className="px-28 text-[#9F9F9F]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="px-28 text-[#9F9F9F]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <div className="flex items-center justify-center gap-[29px]">
          <Image src={"/sofa-left.png"} width={603} height={348} alt="" />
          <Image src={"/sofa-right.png"} width={603} height={348} alt="" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center py-16">
        <p className="text-center text-4xl font-medium">Related Products</p>
        <Picks />
      </div>
    </div>
  );
};
export default Details;
