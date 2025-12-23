import heroImg from "../../assets/Pictures/News/gym10.jpg";

export default function NewsHero({ onExploreNews, onViewEvents }) {
  return (
    <section
      className="relative h-[70vh] pt-24 flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto text-center">
        <h1 className="font-extrabold text-white">
          <span className="block text-5xl md:text-7xl">
            <span className="text-red-600">Gym</span> News
          </span>
          <span className="block mt-3 text-3xl md:text-5xl">& Events</span>
        </h1>

        <p className="mt-6 text-white/80 mx-auto">
          Updates, training tips, nutrition insights, and upcoming gym events.
        </p>

        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <button
            type="button"
            onClick={onExploreNews}
            className="neon-btn"
            style={{ "--neon-color": "#ef4444" }}
          >
            Explore News
          </button>

          <button
            type="button"
            onClick={onViewEvents}
            className="neon-btn"
            style={{ "--neon-color": "#ef4444" }}
          >
            View Events
          </button>
        </div>
      </div>
    </section>
  );
}