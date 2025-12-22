import "./Exercises.css";
import { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";


import chestImg from "../../assets/pictures/hamza.images/chest.png";
import backImg from "../../assets/pictures/hamza.images/back.png";
import legsImg from "../../assets/pictures/hamza.images/legs.png";
import shouldersImg from "../../assets/pictures/hamza.images/shoulders.png";
import armsImg from "../../assets/pictures/hamza.images/arms.png";

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
    fetch("/ex.api/exercises.json")
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
    <div className="ex-page ex-page-offset">
      <h1 className="ex-title">
        EXERCISE <span className="accent">LIBRARY</span>
      </h1>

 
      <div className="ex-tabs">
        {MUSCLES.map((m) => {
          const active = m === activeMuscle;
          return (
            <Button
              key={m}
              variant={active ? "contained" : "outlined"}
              onClick={() => setActiveMuscle(m)}
              sx={{
                borderRadius: "999px",
                px: 3,
                py: 1,
                fontWeight: 700,
                borderColor: "rgba(255,255,255,0.2)",
                color: active ? "white" : "rgba(255,255,255,0.7)",
                backgroundColor: active ? "#dc2626" : "transparent",
                "&:hover": {
                  borderColor: "rgba(255,255,255,0.4)",
                  backgroundColor: active ? "#b91c1c" : "rgba(255,255,255,0.06)",
                },
              }}
            >
              {m.toUpperCase()}
            </Button>
          );
        })}
      </div>

     
      <div className="ex-grid">
        {filtered.map((ex) => (
          <a
            key={ex.id}
            href={ex.video}
            target="_blank"
            rel="noreferrer"
            className="ex-card"
            title="Open video"
          >
            <div className="ex-card-imgwrap">
              <img
                src={IMAGES[ex.imageKey] || chestImg}
                alt={ex.name}
              />
            </div>

            <div className="ex-card-overlay" />

            <div className="ex-card-text">
              <div className="ex-card-name">{ex.name}</div>
              <div className="ex-card-target">
                {ex.target} {ex.head ? `• ${ex.head}` : ""}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="ex-footer">
        Showing <span className="strong">{filtered.length}</span> exercises for{" "}
        <span className="strong">{activeMuscle.toUpperCase()}</span>
      </div>
    </div>
  );
  
}

