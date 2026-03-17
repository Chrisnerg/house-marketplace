import React from "react";
import Contents from "@/components/components_custom/Contents";
import HeroSecondary from "@/components/components_custom/HeroSecondary";
const BuyPage = () => {
  return (
    <div>
      <HeroSecondary bg_color={"bg-blue-700"} title={"Buy a Home"} description={"Find your perfect home from our extensive listings"}/>
      <Contents title={"Properties for Sale"} description={"homes available"}/>
    </div>
  );
};

export default BuyPage;
