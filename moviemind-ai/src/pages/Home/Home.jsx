import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import PopularMovies from "../../components/PopularMovies/PopularMovies";
import GenreSection from "../../components/GenreSection/GenreSection";
import LanguageSection from "../../components/LanguageSection/LanguageSection";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <TrendingMovies />
      <PopularMovies />

      <GenreSection />
      <LanguageSection />

      <FeaturedCollections />
      <Footer />
    </>
  );
};

export default Home;