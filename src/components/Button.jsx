import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-[8px] font-medium text-white bg-tertiary py-2 px-8 text-center">
      {text}
    </button>
  );
};

export default Button;
