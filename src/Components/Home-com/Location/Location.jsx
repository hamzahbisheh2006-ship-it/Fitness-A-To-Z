import React from "react";
import locationImage from "../../../assets/Pictures/Home-img/location.jpg";

const Location = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 w-full">
      <div className="flex flex-col md:flex-row w-full 
                      bg-gradient-to-b from-gray-700 to-black 
                      rounded-2xl overflow-hidden shadow-2xl 
                      lg:hover:scale-105 transition">
        
       
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-4">
            Gym Location
          </h2>
          <p className="text-white-80">Nablus, Refidia</p>
          <p className="text-white-70 mt-2">
            Come visit us and start your fitness journey!
          </p>
        </div>

       
        <div
          className="w-full md:w-1/2 h-60 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${locationImage})` }}
        />
      </div>
    </section>
  );
};

export default Location;
