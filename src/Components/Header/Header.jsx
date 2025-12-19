import React from "react";
import "./Header.css";
import NutritionAndCalories from "../../containers/NutritionAndCalories/NutritionAndCalories.jsx";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="bg-black/50 backdrop-blur-sm">
                <div className="flex items-center justify-between px-8 py-4">


                    <div className="flex items-center gap-2">
                        <h1 className="text-white font-bold text-xl tracking-wider italic">
                            Fitness A To Z <span className="text-red-600">GYM</span>
                        </h1>
                    </div>


                    <nav className="main-nav flex items-center space-x-6 text-sm font-semibold tracking-wide">
                        <a href="#">HOME</a>
                        <a href="#nutrition">Nutrition</a>
                        <a href="#">EXERCISES</a>
                        <a href="#">SUPPLEMENTS</a>
                        <a href="#">COACHES</a>
                        <a href="#">NEWS</a>
                        <a href="#">ABOUT</a>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;
