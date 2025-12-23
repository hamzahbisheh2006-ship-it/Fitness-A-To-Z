import { useRef, memo } from "react";
import EventCard from "./EventCard";

function EventsCarousel({ items = [], onOpen }) {
  const ref = useRef(null);
  const STEP = 284;

  const scroll = (dir) => {
    ref.current?.scrollBy({ left: dir * STEP, behavior: "smooth" });
  };
  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => scroll(-1)}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scroll(1)}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white"
      >
        ›
      </button>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto pb-2 no-scrollbar snap-x"
      >
        {items.map((item) => (
          <div key={item.id} className="snap-start shrink-0 w-[260px]">
            <EventCard
              title={item.title}
              description={item.desc}
              imageUrl={item.img}
              onViewDetails={() => onOpen(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default memo(EventsCarousel);
