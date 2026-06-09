import oppenheimer from "../../assets/oppenheimer.jpg";
import avater from "../../assets/avatar.jpg";
import dune from "../../assets/dune.jpg";
import prestige from "../../assets/prestige.jpg";
const PopularMovies = () => {
  const sideMovies = [
    {
      title: "Dune",
      year: "2021",
      rating: "8.2",
      image:
        dune,
    },
    {
      title: "Avatar",
      year: "2022",
      rating: "7.9",
      image:
        avater,
    },
    {
      title: "The Prestige",
      year: "2006",
      rating: "8.5",
      image:
        prestige,
    },
  ];

  return (
    <section className="py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-12">

          <span className="text-indigo-400 text-sm font-medium">
            Editor's Choice
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Popular Movies
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg">
            Handpicked movies that audiences are loving right now.
          </p>

        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Featured Movie */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 group">

            <img
              src={oppenheimer}
              alt="Oppenheimer"
              className="w-full h-[420px] md:h-[500px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-10 max-w-xl">

              <span className="px-3 py-1.5 rounded-full bg-white/10 text-xs md:text-sm backdrop-blur-md">
                Drama • History
              </span>

              <h3 className="mt-4 text-3xl md:text-5xl font-bold">
                Oppenheimer
              </h3>

              <p className="mt-3 text-sm md:text-base text-slate-300">
                The story of J. Robert Oppenheimer and the creation
                of the atomic bomb during World War II.
              </p>

              <div className="mt-5 flex items-center gap-4">

                <span className="text-yellow-400 font-medium">
                  ⭐ 8.5
                </span>

                <span className="text-slate-400">
                  2023
                </span>

              </div>

              <button className="mt-6 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
                View Details
              </button>

            </div>

          </div>

          {/* Side Movies */}
          <div className="space-y-4 md:space-y-6">

            {sideMovies.map((movie) => (
              <div
                key={movie.title}
                className="
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  hover:bg-white/[0.05]
                  transition
                  cursor-pointer
                "
              >

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="
                    w-20 h-24
                    md:w-24 md:h-32
                    rounded-xl
                    object-cover
                    flex-shrink-0
                  "
                />

                <div>

                  <h4 className="font-semibold text-lg">
                    {movie.title}
                  </h4>

                  <p className="text-slate-400 text-sm mt-1">
                    {movie.year}
                  </p>

                  <span className="text-yellow-400 text-sm mt-3 block">
                    ⭐ {movie.rating}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default PopularMovies;