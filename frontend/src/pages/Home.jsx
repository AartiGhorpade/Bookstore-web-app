import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import BestSellers from "./BestSellers";
import NewArrivals from "./NewArrivals";
import FavBookSection from "./FavBookSection";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[60px]">
      <HeroSection />
      <BestSellers />
      <FavBookSection />
      <NewArrivals />
    </div>
  );
};

export default Home;
