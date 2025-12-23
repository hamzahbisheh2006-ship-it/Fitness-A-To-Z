import fallbackImg from "../../assets/Pictures/News/gym1.jpg";
const FALLBACK_IMG = fallbackImg;
const Img = ({ src, alt, w, h, cls }) => (
  <img
    src={src || FALLBACK_IMG}
    width={w}
    height={h}
    loading="lazy"
    decoding="async"
    onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
    className={cls}
  />
);

export default function LatestNewsSection({ newsData = [], onOpenDetails }) {
  const featured = newsData[0];
  const headlines = newsData.slice(1, 6);

  const open = (x) => x && onOpenDetails?.(x);
  const dateOf = (x) => x?.prettyDate || x?.date || "";

  return (
    <section id="latest-news" className="py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-10 h-[3px] w-full bg-gradient-to-r from-red-600" />

        <div className="mb-10 flex items-center gap-4">
          <span className="w-1 h-10 bg-red-600 rounded-full" />
          <h2 className="text-4xl font-extrabold text-white">Latest News</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8 items-start">
          <button
            type="button"
            disabled={!featured}
            onClick={() => open(featured)}
            className={`group rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-white/20 ${
              !featured ? "opacity-70 cursor-default" : "cursor-pointer"
            }`}
          >
            <div className="relative h-[420px] md:h-[515px]">
              <Img
                src={featured?.img}
                alt={featured?.title}
                w="1400"
                h="515"
                cls="absolute inset-0 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-sm text-white/70">{dateOf(featured)}</p>
                <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white">
                  {featured.title || "Featured News"}
                </h3>
                <p className="mt-3 text-white/70 line-clamp-2">
                  {featured?.desc || "Click to read more details."}
                </p>
              </div>
            </div>
          </button>

          <aside className="rounded-2xl bg-[#0f0f0f] p-5 border border-white/10">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-white font-semibold">Headlines</h3>
              <span className="text-xs text-white/40">{headlines.length} new</span>
            </div>

            <div className="flex flex-col">
              {headlines.map((item, i) => (
                <button
                  key={item?.id ?? i}
                  type="button"
                  onClick={() => open(item)}
                  className="group py-4 text-left"
                >
                  <p className="text-xs text-white/45">{dateOf(item)}</p>
                  <p className="mt-1 text-white font-medium line-clamp-2 group-hover:text-red-500">
                    {item?.title}
                  </p>
                  <span className="mt-2 block h-px w-16 bg-white/10 group-hover:bg-red-600/60" />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                document.getElementById("gym-news").scrollIntoView({ behavior: "smooth" })
              }
              className="mt-4 text-sm text-white/65 hover:text-white"
            >
              View all news →
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}