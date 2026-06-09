import action from "../../assets/johnwick.jpg";
import scifi from "../../assets/sci-fi.jpg";
import drama from "../../assets/godfather.jpg";
import horror from "../../assets/horror.jpg";
import romance from "../../assets/romance.jpg";
import fantasy from "../../assets/fantasy.jpg";
const genres = [
  {
    name: "Action",
    image:
      action,
  },
  {
    name: "Sci-Fi",
    image:
      scifi,
  },
  {
    name: "Drama",
    image:
      drama,
  },
  {
    name: "Horror",
    image:
      horror,
  },
  {
    name: "Romance",
    image:
      romance,
  },
  {
    name: "Fantasy",
    image:
      fantasy,
  },
];

const GenreSection = () => {
  return (
    <section className="py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-12">

          <span className="text-indigo-400 text-sm font-medium">
            Explore Categories
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Browse by Genre
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg">
            Discover movies from every genre and find your
            next favorite story.
          </p>

        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          {genres.map((genre) => (
            <div
              key={genre.name}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                cursor-pointer
                border
                border-white/10
              "
            >

              <img
                src={genre.image}
                alt={genre.name}
                className="
                  w-full
                  h-[180px]
                  sm:h-[220px]
                  md:h-[260px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 p-4 md:p-6">

                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {genre.name}
                </h3>

                <p className="text-slate-300 text-xs md:text-sm mt-1">
                  Explore Collection
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default GenreSection;
