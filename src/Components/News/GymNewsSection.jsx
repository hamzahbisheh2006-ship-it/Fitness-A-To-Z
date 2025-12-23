import { useMemo, useState } from "react";
import NewsCard from "./NewsCard";

export default function GymNewsSection({ newsData = [], onOpenDetails }) {
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("newest");

const data = useMemo(() => {
  const list = type === "all"
    ? newsData
    : newsData.filter((n) => n.type === type);

  return [...list].sort((a, b) => {
    const da = a.date || "";
    const db = b.date || "";

    return sort === "newest"
      ? db.localeCompare(da)
      : da.localeCompare(db);
  });
}, [newsData, type, sort]);


  return (
    <section id="gym-news" className="py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-11 w-1 bg-red-600 rounded-full" />
          <h2 className="text-4xl font-extrabold text-white">Gym News</h2>
        </div>

        <div className="mb-10 rounded-2xl border border-white/10 bg-[#0f0f0f] p-4 flex flex-wrap gap-3 items-center">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm border border-white/10"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          {["all", "training", "nutrition", "events"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-5 py-2.5 rounded-full text-sm border border-white/10 transition ${type === t? "bg-red-600 text-white": "bg-zinc-900 text-white hover:bg-red-600"
              }`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto text-xs text-white/30">
            Showing <span className="text-white">{data.length}</span> news
          </span>

          {(type !== "all" || sort !== "newest") && (
            <button
              type="button"
              onClick={() => {
                setType("all");
                setSort("newest");
              }}
              className="px-5 py-2.5 rounded-full text-white text-sm bg-zinc-900 hover:bg-red-600 transition"
            >
              Reset
            </button>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {data.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => onOpenDetails(n)}
              className="text-left"
            >
              <NewsCard title={n.title} desc={n.desc} img={n.img} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}