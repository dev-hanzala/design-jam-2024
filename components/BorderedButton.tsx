import React from "react";

const BorderedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="m-0 w-fit border border-black px-[74px] py-[17px] text-[20px]">
      {children}
    </button>
  );
};

export default BorderedButton;
