
import React from "react";

const Card = ({ title, description, description2, image, bgColor = "bg-zinc-900" }) => {
  return (
    <div className={`flex flex-col md:flex-row w-full lg:w-1/2 ${bgColor} rounded-2xl overflow-hidden shadow-2xl lg:hover:scale-105 transition h-auto`}>
      
      <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-4">{title}</h2>
        <p className="text-white-80 mb-3">{description}</p>
        {description2 && <p className="text-white-70">{description2}</p>}
      </div>

      
      <div
        className="w-full md:w-1/2 h-60 md:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default Card;
