import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600&q=80",
    title: "Discover Amazing Stories",
    subtitle:
      "Explore thousands of movies from every genre and era.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&q=80",
    title: "Your Movie Journey",
    subtitle:
      "Find hidden gems and unforgettable cinematic experiences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1600&q=80",
    title: "Build Your Watchlist",
    subtitle:
      "Save movies you love and organize them your way.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80",
    title: "Explore Every Genre",
    subtitle:
      "From thrillers to fantasy, discover your next favorite movie.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80",
    title: "Experience MovieMind",
    subtitle:
      "A modern platform built for movie lovers and explorers.",
  },
];

const AuthCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      speed={1200}
      loop={true}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-screen overflow-hidden">

            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-16 left-12 right-12">

              <span className="inline-flex px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm mb-6">
                🎬 Welcome to MovieMind
              </span>

              <h2 className="text-5xl font-bold text-white leading-tight max-w-xl">
                {slide.title}
              </h2>

              <p className="mt-4 text-lg text-slate-300 max-w-lg leading-relaxed">
                {slide.subtitle}
              </p>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AuthCarousel;