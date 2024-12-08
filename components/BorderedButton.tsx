import React from "react";

const BorderedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-fit border border-black text-[20px] px-[74px] py-[17px]">
      {children}
    </button>
  );
};

export default BorderedButton;
