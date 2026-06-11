import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Categories from "../components/categories";
import LatestRecipes from "../components/latestrecipes";
import QuoteBanner from "../components/quotebanner";
import WritingCorner from "../components/writingcorner";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <LatestRecipes />
      <QuoteBanner />
      <WritingCorner />
    </>
  );
}

export default Home;