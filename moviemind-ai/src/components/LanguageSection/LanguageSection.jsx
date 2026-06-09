import hollywood from "../../assets/hollywood.jpg";
import bollywood from "../../assets/bollywood.jpg";
import tollywood from "../../assets/tollywood.jpg";
import kollywood from "../../assets/kollywood.jpg";
import kdrama from "../../assets/kdrama.jpg";
import japan from "../../assets/japan.jpg";
const languages = [
  {
    name: "English",
    region: "Hollywood",
    image:
      hollywood,
  },
  {
    name: "Hindi",
    region: "Bollywood",
    image:
      bollywood,
  },
  {
    name: "Telugu",
    region: "Tollywood",
    image:
      tollywood,
  },
  {
    name: "Tamil",
    region: "Kollywood",
    image:
      kollywood,
  },
  {
    name: "Korean",
    region: "K-Drama & Cinema",
    image:
      kdrama,
  },
  {
    name: "Japanese",
    region: "Anime & Cinema",
    image:
      japan,
  },
];

const LanguageSection = () => {
  return (
    <section className="py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-12">

          <span className="text-indigo-400 text-sm font-medium">
            Worldwide Cinema
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Explore Languages
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg">
            Discover movies, cultures, and stories from
            around the world.
          </p>

        </div>

        {/* Languages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

          {languages.map((language) => (
            <div
              key={language.name}
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
                src={language.image}
                alt={language.name}
                className="
                  w-full
                  h-[220px]
                  md:h-[260px]
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-5 md:p-6">

                <span className="text-xs md:text-sm text-indigo-300">
                  {language.region}
                </span>

                <h3 className="mt-1 text-2xl md:text-3xl font-bold text-white">
                  {language.name}
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

export default LanguageSection;

