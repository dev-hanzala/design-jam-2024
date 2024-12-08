import React from "react";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Picks from "@/components/Picks";
import NewArrivals from "@/components/NewArrivals";
import FeaturedBlogs from "@/components/FeaturedBlogs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <div className="flex flex-col justify-center items-center w-full py-16">
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="font-medium text-4xl text-center">Top Picks For You</p>
          <p className="font-medium text-center">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <Picks />
      </div>
      <NewArrivals />
      <FeaturedBlogs />
    </div>
  );
};

export default Home;
