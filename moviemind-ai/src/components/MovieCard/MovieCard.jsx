import { FaStar, FaHeart } from "react-icons/fa";

const MovieCard = ({
  title,
  year,
  rating,
  poster,
  genre,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#111827] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]">

      {/* Poster */}
      <div className="relative overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="h-[240px] md:h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* Rating */}
        <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm backdrop-blur-md">
          <FaStar className="text-yellow-400" />
          {rating}
        </div>

        {/* Watchlist */}
        <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center hover:bg-indigo-600 transition">
          <FaHeart size={14} />
        </button>

        {/* View Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        <h3 className="text-lg font-semibold text-white truncate">
          {title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-slate-400">
            {year}
          </span>

          <span className="text-sm text-indigo-400">
            {genre}
          </span>
        </div>

      </div>
    </div>
  );
};

export default MovieCard;