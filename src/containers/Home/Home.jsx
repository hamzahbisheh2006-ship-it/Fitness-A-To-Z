import React from "react";
import { useNavigate } from "react-router-dom";


import Header from "../../Components/Header/Header";
import Hero from "../../Components/Home-com/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Home-com/Cards/Cards";
import Btn from "../../Components/Home-com/Btn/Btn";


import bgImage from "../../assets/Pictures/Home-img/d-bg.jpg";
import card2Image from "../../assets/Pictures/Home-img/card2.jpg";
import Location from "../../Components/Home-com/Location/Location"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white w-full overflow-x-hidden">
      
     
      <Header />

      
      <div className="pt-24">
        <Hero />
      </div>

      
      <section className="flex flex-col lg:flex-row justify-center items-stretch gap-10 px-4 py-20">
        <Card
          title="No Excuses. Only Commitment."
          description="The gym isn’t just a place to fix your body; it’s a factory of discipline."
          description2="Walk in weak? That’s fine. Walk out weak? That’s your choice."
          image={bgImage}
          bgColor="bg-zinc-900"
        />

        <Card
          title="Built, Not Given."
          description="Strength is built through consistency and discipline."
          image={card2Image}
          bgColor="bg-zinc-900"
        />
      </section>

      
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <Btn
          text="Join Now"
          onClick={() => navigate("/Nutrition")}
          className="w-full bg-gradient-to-r from-red-900 to-black hover:from-red-800 hover:to-black text-white py-4 rounded-xl font-semibold transition"
        />
      </div>

      
      <Location></Location>

      
      <Footer />
    </div>
  );
};

export default Home;
