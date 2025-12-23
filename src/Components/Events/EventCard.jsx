import fallbackImg from "../../assets/Pictures/eventsPic/event1.jpg";
import { memo } from "react";

function EventCard({ title, description, imageUrl, onViewDetails }) {
  const src = imageUrl || fallbackImg;
  return (
    <div
      className="w-[260px] h-[380px] bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 flex flex-col transform-gpu"
      style={{ contentVisibility: "auto", containIntrinsicSize: "380px", contain: "layout paint style" }}
    >
      <img
        src={src}
        alt={title}
        loading="lazy"
        decoding="async"
        width="700"
        height="160"
        className="w-full h-[160px] object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <span className="text-red-600 text-xs uppercase tracking-wide mb-2">Event</span>

        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{description}</p>

        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={onViewDetails}
            className="text-sm text-white border border-white/20 rounded-full px-4 py-1.5 hover:bg-red-600 hover:border-red-600 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
export default memo(EventCard);
