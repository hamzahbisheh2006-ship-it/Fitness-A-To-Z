import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import backBg from "../../assets/Pictures/About/Back-bg.jpg";

const About = () => {
  return (
    <>
      <Header />

      <section
        className="relative min-h-screen text-red-500 pt-32 px-4 sm:px-6 lg:px-16 pb-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${backBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto space-y-10">

          {/* Gym Information */}
          <div className="bg-black hover:bg-zinc-900 transition-transform transform hover:-translate-y-1 rounded-2xl p-6 sm:p-8 shadow-xl text-center border border-red-500/40">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-500">
              Gym Information
            </h2>
            <p className="text-white text-base sm:text-lg mb-2">
              Established on: <span className="font-semibold text-white">January 2, 2011</span>
            </p>
            <p className="text-white text-base sm:text-lg mb-2">
              Equipment Count: <span className="font-semibold text-white">Over 250 Machines</span>
            </p>
            <p className="text-white text-base sm:text-lg">
              Total Area: <span className="font-semibold text-white">600 Square Meters</span>
            </p>
          </div>

          {/* Members & Training / Sports Available */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black hover:bg-zinc-900 transition-transform transform hover:-translate-y-1 rounded-2xl p-6 sm:p-8 shadow-xl border border-red-500/40">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-500">
                Members & Training
              </h3>
              <p className="text-white text-base sm:text-lg mb-2">
                Over <span className="font-semibold text-white">800 Active Members</span>
              </p>
              <p className="text-white text-base sm:text-lg">
                Professional coaching in multiple sports disciplines
              </p>
            </div>
            <div className="bg-black hover:bg-zinc-900 transition-transform transform hover:-translate-y-1 rounded-2xl p-6 sm:p-8 shadow-xl border border-red-500/40">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-500">
                Sports Available
              </h3>
              <ul className="text-white text-base sm:text-lg space-y-2">
                <li>• Karate</li>
                <li>• Yoga</li>
                <li>• Bodybuilding</li>
                <li>• Boxing</li>
              </ul>
            </div>
          </div>

          {/* Men & Women Working Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-black hover:bg-zinc-900 transition-transform transform hover:-translate-y-1 rounded-2xl p-6 sm:p-8 shadow-xl text-center border border-red-500/40">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-500">
                Men Working Hours
              </h3>
              <p className="text-white text-base sm:text-lg">
                From <span className="font-semibold text-white">6:00 AM</span> to{" "}
                <span className="font-semibold text-white">12:00 Midnight</span>
              </p>
            </div>
            <div className="bg-black hover:bg-zinc-900 transition-transform transform hover:-translate-y-1 rounded-2xl p-6 sm:p-8 shadow-xl text-center border border-red-500/40">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-500">
                Women Working Hours
              </h3>
              <p className="text-white text-base sm:text-lg">
                From <span className="font-semibold text-white">8:00 AM</span> to{" "}
                <span className="font-semibold text-white">6:00 PM</span>
              </p>
            </div>
          </div>

          {/* Wi-Fi Access */}
          <div className="bg-black hover:bg-zinc-900 transition-transform transform hover:-translate-y-1 rounded-2xl p-6 sm:p-8 shadow-xl text-center border border-red-500/40">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-500">Wi-Fi Access</h3>
            <p className="text-white text-base sm:text-lg mb-2">
              Network Name: <span className="font-semibold text-white">Fitness A To Z</span>
            </p>
            <p className="text-white text-base sm:text-lg">
              Password: <span className="font-semibold text-white">123123123</span>
            </p>
          </div>
        </div>
      </section>

      <Footer className="bg-zinc-900 text-white" />
    </>
  );
};

export default About;
