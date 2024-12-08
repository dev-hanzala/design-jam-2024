import React from "react";

const RoundedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="rounded-full px-[82px] py-[17px] text-[20px] shadow-xl">
      {children}
    </button>
  );
};

export default RoundedButton;
