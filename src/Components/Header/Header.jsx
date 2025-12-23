import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [open, setOpen] = useState(false);
  const linkClass =
    "text-white transition-colors duration-300 hover:text-red-600";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-4 sm:px-8 py-5">
        
        <h1 className="text-white font-bold italic text-xl sm:text-2xl">
          Fitness A To Z <span className="text-red-600">GYM</span>
        </h1>

        
        <nav className="hidden md:flex gap-6 font-semibold">
          <NavLink to="/" end className={linkClass}>HOME</NavLink>
          <NavLink to="/Nutrition" className={linkClass}>Nutrition</NavLink>
          <NavLink to="/Exercises" className={linkClass}>EXERCISES</NavLink>
          <NavLink to="/Supplements" className={linkClass}>SUPPLEMENTS</NavLink>
          <NavLink to="/Coaches" className={linkClass}>COACHES</NavLink>
          <NavLink to="/News" className={linkClass}>NEWS</NavLink>
          <NavLink to="/About" className={linkClass}>ABOUT</NavLink>
        </nav>

        
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      
      {open && (
  <nav className="md:hidden bg-black/90 backdrop-blur-md flex flex-col gap-4 px-6 py-4 items-center text-center">
    <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>HOME</NavLink>
    <NavLink to="/Nutrition" className={linkClass} onClick={() => setOpen(false)}>Nutrition</NavLink>
    <NavLink to="/Exercises" className={linkClass} onClick={() => setOpen(false)}>EXERCISES</NavLink>
    <NavLink to="/Supplements" className={linkClass} onClick={() => setOpen(false)}>SUPPLEMENTS</NavLink>
    <NavLink to="/Coaches" className={linkClass} onClick={() => setOpen(false)}>COACHES</NavLink>
    <NavLink to="/News" className={linkClass} onClick={() => setOpen(false)}>NEWS</NavLink>
    <NavLink to="/About" className={linkClass} onClick={() => setOpen(false)}>ABOUT</NavLink>
  </nav>
)}

    </header>
  );
};

export default Header;
