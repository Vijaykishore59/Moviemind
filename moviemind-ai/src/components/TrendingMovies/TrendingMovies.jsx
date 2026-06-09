import MovieCard from "../MovieCard/MovieCard";
import interstellarPoster from "../../assets/interstellar.jpg";
import inception from "../../assets/inception.jpg";
import joker from "../../assets/joker.jpg";
import batman from "../../assets/batman.jpg";
import avatar from "../../assets/avatar.jpg";
const movies = [
  {
    title: "Interstellar",
    year: "2014",
    rating: "8.6",
    genre: "Sci-Fi",
    poster:
      interstellarPoster,
  },
  {
    title: "Inception",
    year: "2010",
    rating: "8.8",
    genre: "Action",
    poster:
      inception,
  },
  {
    title: "Joker",
    year: "2019",
    rating: "8.4",
    genre: "Drama",
    poster:
      joker,
  },
  {
    title: "Batman",
    year: "2022",
    rating: "8.1",
    genre: "Crime",
    poster:
      batman,
  },
  {
    title: "Avatar",
    year: "2022",
    rating: "7.9",
    genre: "Fantasy",
    poster:
      avatar,
  },
];

const TrendingMovies = () => {
  return (
    <section className="py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-12">

          <span className="text-indigo-400 text-sm font-medium">
            Trending Now
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Trending Movies
          </h2>

          <p className="mt-4 text-slate-400 max-w-xl text-base md:text-lg">
            Discover what movie lovers around the world
            are watching this week.
          </p>

          {/* View All */}
          <div className="flex justify-end mt-4">
            <button className="text-sm text-slate-400 hover:text-white transition duration-300">
              View All →
            </button>
          </div>

        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">

          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              {...movie}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default TrendingMovies;
