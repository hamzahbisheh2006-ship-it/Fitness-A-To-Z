import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkClass =
    "text-white transition-colors duration-300 hover:text-red-600";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-8 py-5">
        <h1 className="text-white font-bold text-xl italic">
          Fitness A To Z <span className="text-red-600">GYM</span>
        </h1>

        <nav className="flex gap-6 text-sm font-semibold">
          <NavLink to="/" end className={linkClass}>
            HOME
          </NavLink>
          <NavLink to="/Nutrition" className={linkClass}>
            Nutrition
          </NavLink>
          <NavLink to="/Exercises" className={linkClass}>
            EXERCISES
          </NavLink>
          <NavLink to="/Supplements" className={linkClass}>
            SUPPLEMENTS
          </NavLink>
          <NavLink to="/Coaches" className={linkClass}>
            COACHES
          </NavLink>
          <NavLink to="/News" className={linkClass}>
            NEWS
          </NavLink>
          <NavLink to="/About" className={linkClass}>
            ABOUT
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
