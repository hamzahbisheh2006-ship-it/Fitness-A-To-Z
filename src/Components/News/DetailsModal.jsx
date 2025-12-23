import { useEffect, useMemo } from "react";

export default function DetailsModal({ open, item, onClose }) {
  useEffect(() => {
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflowX = document.documentElement.style.overflowX;
    const prevBodyOverflowX = document.body.style.overflowX;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflowX = prevHtmlOverflowX;
      document.body.style.overflowX = prevBodyOverflowX;
    };
  }, [open]);

  const paragraphs = useMemo(() => {
    const text = item?.fullDesc || item?.desc || "";
    return text.split("\n\n").filter(Boolean);
  }, [item]);

  if (!open || !item)
    return null;

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/70 p-4 overflow-y-auto grid place-items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl rounded-2xl bg-[#111] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {item.img && (
          <img
            src={item.img}
            alt={item.title || ""}
            className="h-72 w-full object-cover"
          />
        )}
        <div className="p-6 text-white max-h-[75vh] overflow-y-auto">
          <h2 className="text-2xl font-semibold">{item.title}</h2>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/60">
            {item.prettyDate && <span>📅 {item.prettyDate}</span>}
            {item.type && <span>🏷 {item.type}</span>}
            {item.location && <span>📍 {item.location}</span>}
          </div>

          <div className="mt-6 space-y-4">
            {paragraphs.length ? (
              paragraphs.map((p, idx) => (
                <p key={idx} className="text-white/80 leading-relaxed">
                  {p}
                </p>
              ))
            ) : 
              <p className="text-white/70">No details available.</p>
            }
          </div>
          
          <div className="mt-8">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 px-7 py-2 rounded-full text-white hover:bg-red-700 transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}