import React from "react";
import HeroSection from "./HeroSection";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import FavBookSection from "./FavBookSection";

const Home = () => {
  return (
    <div className="pt-[60px]">
      <HeroSection />
      <BestSellers/>
      <FavBookSection/>
      <NewArrivals/>
    </div>
  );
};

export default Home;
