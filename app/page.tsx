import React from "react";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Picks from "@/components/Picks";
import NewArrivals from "@/components/NewArrivals";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import RoundedButton from "@/components/RoundedButton";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <div className="flex w-full flex-col items-center justify-center py-16">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-center text-4xl font-medium">Top Picks For You</p>
          <p className="text-center font-medium">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <Picks />
      </div>
      <NewArrivals />
      <FeaturedBlogs />
      <div
        className="flex h-[450px] w-full flex-col items-center justify-center gap-[18px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/Instagram/instagram.png)" }}
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-cente font-bold text-6xl">Our Instagram</p>
          <p className="text-center text-xl">Follow our store on Instagram</p>
        </div>
        <RoundedButton>Follow Us</RoundedButton>
      </div>
    </div>
  );
};

export default Home;
