import React from "react";
import SearchCard from "./SearchCard";

const Hero = () => {
  return (
    <div className="hero bg-blue-700 text-white">
      <div className="hero-content w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-3xl font-bold pt-6">Find Your Dream Home</h1>
          <p className="py-1 text-sm">
            Discover the perfect place to call home
          </p>
          <SearchCard />
        </div>
      </div>
    </div>
  );
};

export default Hero;
