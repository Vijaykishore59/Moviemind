import { FaPlay, FaSearch, FaStar } from "react-icons/fa";
import interstellarPoster from "../../assets/interstellar.jpg";

const Hero = () => {
return ( <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-20">

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
      alt="Cinema"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/70" />

    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
  </div>

  {/* Glow */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 blur-[120px] rounded-full" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">

    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">

      {/* Left */}
      <div>

        <span className="inline-flex px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs sm:text-sm">
          🎬 Discover • Search • Watch
        </span>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
          Discover Movies
          <span className="block text-indigo-500">
            Beyond Search
          </span>
        </h1>

        <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl">
          Explore trending movies, discover hidden gems,
          build your watchlist, and find your next favorite
          movie effortlessly.
        </p>

        <div className="mt-8 max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">

  <div className="relative">

    <input
      type="text"
      placeholder="Search movies, actors, genres..."
      className="w-full bg-transparent outline-none pl-4 pr-14 py-4 text-white placeholder:text-slate-400"
    />

    <button
      className="
      absolute
      right-2
      top-1/2
      -translate-y-1/2
      w-10
      h-10
      rounded-xl
      bg-indigo-600
      hover:bg-indigo-500
      flex
      items-center
      justify-center
      transition
      "
    >
      <FaSearch />
    </button>

  </div>

</div>
        {/* CTA */}
        <div className="mt-6 grid grid-cols-2 gap-3 md:flex md:flex-wrap">

          <button className="py-4 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-medium">
            Explore Movies
          </button>

          <button className="py-4 px-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2">
            <FaPlay />
            Trailer
          </button>

        </div>

        {/* Stats */}
        <div className="mt-8 flex flex-wrap gap-8">

          <div>
            <h3 className="text-2xl font-bold text-white">
              10K+
            </h3>
            <p className="text-slate-400 text-sm">
              Movies
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              50+
            </h3>
            <p className="text-slate-400 text-sm">
              Genres
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              100K+
            </h3>
            <p className="text-slate-400 text-sm">
              Users
            </p>
          </div>

        </div>

      </div>

      {/* Desktop Featured Movie */}
      <div className="hidden lg:flex justify-end pr-10">

        <div className="relative">

          <div className="absolute -top-4 -left-4 z-20 flex items-center gap-2 bg-yellow-500 text-black px-3 py-2 rounded-xl font-bold">
            <FaStar />
            8.8
          </div>

          <div className="absolute top-4 -right-4 z-20 bg-indigo-600 px-3 py-2 rounded-xl">
            Sci-Fi
          </div>

          <div className="w-[280px] rounded-[28px] overflow-hidden border border-white/10 bg-[#111827]/90 backdrop-blur-xl">

<img
  src={interstellarPoster}
  alt="Interstellar"
  className="w-full h-[360px] object-cover"
/>

            <div className="p-5">

              <h3 className="text-2xl font-bold">
                Interstellar
              </h3>

              <p className="text-slate-400 mt-2">
                Adventure • Drama • Sci-Fi
              </p>

              <button className="mt-5 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
                View Details
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>


);
};

export default Hero;
