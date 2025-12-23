import "./Exercises.css";
import { useEffect, useMemo, useState } from "react";

import MuscleTabs from "../../Components/exercises_page_components/MuscleTabs";
import ExerciseCard from "../../Components/exercises_page_components/ExerciseCard";

import chestImg from "../../assets/pictures/hamza.images/chest.png";
import backImg from "../../assets/pictures/hamza.images/back.png";
import legsImg from "../../assets/pictures/hamza.images/legs.png";
import shouldersImg from "../../assets/pictures/hamza.images/shoulders.png";
import armsImg from "../../assets/pictures/hamza.images/arms.png";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const MUSCLES = ["chest", "back", "legs", "shoulders", "arms"];

const IMAGES = {
  chest: chestImg,
  back: backImg,
  legs: legsImg,
  shoulders: shouldersImg,
  arms: armsImg,
};

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeMuscle, setActiveMuscle] = useState("chest");

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}ex.api/exercises.json`)
      .then((res) => res.json())
      .then((data) => {
        setExercises(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load exercises:", err);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    return exercises.filter((ex) => ex.muscle === activeMuscle);
  }, [exercises, activeMuscle]);

  if (loading) {
    return <div className="ex-loading">Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="ex-page ex-page-offset">
        <h1 className="ex-title">
          EXERCISE <span className="accent">LIBRARY</span>
        </h1>

        <MuscleTabs
          muscles={MUSCLES}
          activeMuscle={activeMuscle}
          onChange={setActiveMuscle}
        />

        <div className="ex-grid">
          {filtered.map((ex) => (
            <ExerciseCard
              key={ex.id}
              ex={ex}
              imgSrc={IMAGES[ex.imageKey] || chestImg}
            />
          ))}
        </div>

        <div className="ex-footer">
          Showing <span className="strong">{filtered.length}</span> exercises for{" "}
          <span className="strong">{activeMuscle.toUpperCase()}</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
