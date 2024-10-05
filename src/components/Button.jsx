import React from "react";

const Button = ({ text, onClick = () => {} }) => {
  return (
    <button
      className="rounded-[8px] font-medium text-white bg-tertiary py-2 px-8 text-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
