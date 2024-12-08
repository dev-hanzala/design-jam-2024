import React from "react";
import Image from "next/image";
import BorderedButton from "./BorderedButton";

const NewArrivals = () => {
  return (
    <div className="my-16 flex items-center justify-center bg-[#FFF9E5]">
      <Image src={"/NewArrivals/pic.png"} width={960} height={640} alt={""} />
      <div className="flex w-1/3 flex-col items-center justify-center gap-8">
        <p className="text-2xl font-medium">New Arrivals</p>
        <p className="text-5xl font-bold">Asgaard Sofa</p>
				<BorderedButton>Order Now</BorderedButton>
      </div>
    </div>
  );
};

export default NewArrivals;
