import { useEffect, useRef } from "react";
export default function AllEventsModal({ open, events = [], onClose }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose?.();

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [open, onClose]);

  if (!open)
    return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-black/30 overflow-hidden">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative h-full w-full p-4">
        <div className="relative mx-auto w-full max-w-4xl rounded-2xl bg-[#0f0f0f] border border-white/10 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          </div>

          <div
            ref={listRef}
            className="p-6 overflow-y-auto"
            style={{ maxHeight: "70vh" }}
          >
            {!events.length ? (
              <p className="text-white/60 text-sm">No events available.</p>
            ) : 
            (
              <ul className="space-y-3">
                {events.map((ev) => (
                  <li
                    key={ev.id}
                    className="
                      rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition
                      hover:border-white/20 hover:bg-black/30"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-white font-semibold leading-snug">
                          {ev.title}
                        </h4>

                        {ev.desc && (
                          <p className="mt-1 text-white/60 text-sm leading-relaxed">
                            {ev.desc}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0 text-xs text-white/40">
                        {ev.date && <div>📅 {ev.date}</div>}
                        {ev.location && <div>📍 {ev.location}</div>}
                        {ev.category && <div>🏷 {ev.category}</div>}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="px-6 py-4 border-t border-white/10">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-black/70 text-white font-medium hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
