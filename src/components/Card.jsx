import React from "react";

const Card = ({ text, bgColor = "bg-secondary" }) => {
  return (
    <div
      className={`rounded-[10px] ${bgColor} text-center px-3 text-white w-1/3 h-60 flex items-center justify-center font-[900] text-[32px] leading-[48px] tracking-[10%]`}
    >
      {text}
    </div>
  );
};

export default Card;
