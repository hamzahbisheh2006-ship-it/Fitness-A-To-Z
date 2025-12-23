
import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../../assets/Pictures/Home-img/Hero-bg.jpg";
import Btn from "../Btn/Btn.jsx";   

const Hero = () => {
  return (
    <section
      className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center px-6 max-w-3xl mt-20">
        <h1 className="bg-red-600 text-black px-6 py-3 rounded-md text-4xl md:text-6xl font-bold mb-6">
          Welcome to the Fitness Gym
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Discipline is the bridge between goals and accomplishment.
          Start your transformation today with expert coaching and world-class training plans.
        </p>
        <Link to="/exercises">
          <Btn
            text="View Exercises"
            bgColor="bg-red-800"
            hoverColor="hover:bg-red-900"
            textColor="text-black"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
