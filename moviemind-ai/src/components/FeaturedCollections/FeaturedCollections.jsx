const collections = [
  {
    title: "Mind-Bending Movies",
    subtitle: "Movies that challenge reality",
    count: "25 Movies",
  },
  {
    title: "Award Winners",
    subtitle: "Oscar-winning masterpieces",
    count: "40 Movies",
  },
  {
    title: "Sci-Fi Universe",
    subtitle: "Explore distant worlds",
    count: "30 Movies",
  },
  {
    title: "Weekend Picks",
    subtitle: "Perfect for your weekend binge",
    count: "18 Movies",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 md:mb-12">

          <span className="text-indigo-400 text-sm font-medium">
            Curated Picks
          </span>

          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Collections
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl text-base md:text-lg">
            Handpicked collections designed around moods,
            genres, and unforgettable experiences.
          </p>

        </div>

        {/* Collections */}
        <div className="space-y-4 md:space-y-6">

          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className="
                group
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-4
                md:gap-6
                p-5
                md:p-8
                rounded-3xl
                border
                border-white/10
                bg-[#0B1120]
                hover:border-white/20
                transition
              "
            >

              {/* Left */}
              <div className="flex items-start gap-4 md:gap-6">

                <span className="text-2xl md:text-4xl font-bold text-slate-700">
                  0{index + 1}
                </span>

                <div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {collection.title}
                  </h3>

                  <p className="mt-1 md:mt-2 text-sm md:text-base text-slate-400">
                    {collection.subtitle}
                  </p>

                </div>

              </div>

              {/* Right */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6">

                <span className="text-sm md:text-base text-slate-400">
                  {collection.count}
                </span>

                <button className="px-4 py-2.5 md:px-5 md:py-3 rounded-xl border border-white/10 hover:bg-white/5 transition">
                  Explore
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedCollections;