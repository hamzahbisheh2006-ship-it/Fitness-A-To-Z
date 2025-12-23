function NewsCard({ title, desc, img }) {
  return (
    <article className="group h-[420px] bg-black/30 rounded-2xl overflow-hidden hover:-translate-y-1 transition flex flex-col">
      <img
        src={img}
        alt={title || ""}
        className="h-52 w-full object-cover group-hover:scale-105 transition"
        loading="lazy"
        decoding="async"
      />
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-semibold group-hover:text-red-600 transition">
          {title}
        </h3>

        <p className="text-white/60 text-sm mt-2 flex-1">
          {desc || ""}
        </p>

        <span className="text-sm text-white/70 group-hover:text-white group-hover:underline transition">
          Read more →
        </span>
      </div>
    </article>
  );
}
export default NewsCard;