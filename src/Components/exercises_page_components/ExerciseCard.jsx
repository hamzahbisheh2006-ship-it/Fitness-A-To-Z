import "./ExerciseCard.css";
export default function ExerciseCard({ ex, imgSrc }) {
  return (
    <a
      href={ex.video}
      target="_blank"
      rel="noreferrer"
      className="ex-card"
      title="Open video"
    >
      <div className="ex-card-imgwrap">
        <img src={imgSrc} alt={ex.name} />
      </div>

      <div className="ex-card-overlay" />

      <div className="ex-card-text">
        <div className="ex-card-name">{ex.name}</div>
        <div className="ex-card-target">
          {ex.target} {ex.head ? `• ${ex.head}` : ""}
        </div>
      </div>
    </a>
  );
}
