import React from "react";
import Image from "next/image";
import UnderlinedButton from "./UnderlinedButton";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex h-[calc(100vh-100px)] justify-between bg-[#FBEBB5]">
      <div className="my-auto flex flex-col gap-9 pl-52 pr-24">
        <p className="text-[64px] font-medium">Rocket single seater</p>
				<UnderlinedButton><Link href={"/shop/"}>Shop Now</Link></UnderlinedButton>
      </div>
      <div className="flex items-center justify-center pr-[100px] pb-24">
        <Image
          className="h-max-[calc(100vh-100px)]"
          src={"/Hero/rocket-single-seater.png"}
          width={560}
          height={560}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
