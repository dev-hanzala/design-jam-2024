import React from "react";
import Image from "next/image";

interface SectionTopProps {
  route: string;
}

const SectionTop = ({ route }: SectionTopProps) => {
  return (
    <div
      className="flex h-[316px] gap-3 w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/section.png)" }}
    >
			<Image src="/logo.png" width={77} height={77} alt="" />
      <p className="text-center text-5xl font-medium">{route}</p>
			<div className="flex items-center justify-center gap-2">
				<p>Home</p>
				<Image src="/breaccrumb.svg" width={20} height={20} alt="" />
				<p>{route}</p>
			</div>
    </div>
  );
};

export default SectionTop;
