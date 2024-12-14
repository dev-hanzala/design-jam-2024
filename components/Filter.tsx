import React from "react";
import Image from "next/image";

const Filter = () => {
  return (
    <div className="flex items-center justify-between bg-[#FAF4F4] px-24 py-8">
      <div className="flex items-center">
        <div className="pr-3" />
        <Image
          src={"/filter/filter.svg"}
          width={28}
          height={28}
          alt={""}
        />
        <p className="pr-6 text-xl">Filter</p>
        <Image
          src={"/filter/grid.svg"}
          width={28}
          height={28}
          alt={""}
        />
        <div className="pr-6" />
        <Image
          src={"/filter/list.svg"}
          width={28}
          height={28}
          alt={""}
        />
        <p className="border-l border-black pl-14">
          Showing 1 to 16 of 32 results
        </p>
      </div>
      <div className="flex items-center justify-center gap-[29px]">
        <div className="flex items-center justify-normal gap-[18px]">
          <p className="text-xl">Show</p>
          <p className="bg-white p-3">16</p>
        </div>
        <div className="flex items-center justify-normal gap-[18px]">
          <p className="text-xl">Sort By</p>
          <p className="bg-white p-3 pr-8">Default</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
