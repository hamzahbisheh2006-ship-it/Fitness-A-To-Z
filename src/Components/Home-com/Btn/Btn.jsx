import React from "react";

const Btn = ({
  text,
  onClick,
  bgColor = "bg-red-700",
  hoverColor = "hover:bg-red-900",
  textColor = "text-white"
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full ${bgColor} ${hoverColor} py-3 rounded-lg font-semibold text-sm sm:text-base transition ${textColor}`}
    >
      {text}
    </button>
  );
};

export default Btn;
