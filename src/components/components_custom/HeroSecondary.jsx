import React from 'react'
import SearchCard from "@/components/components_custom/SearchCard";

const HeroSecondary = ({bg_color, title, description, searchCard}) => {
  return (
    <div className={`hero ${bg_color} text-white`}>
        <div className="hero-content w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-3xl font-bold pt-6">{title}</h1>
            <p className="py-1 text-sm">
              {description}
            </p>
            {searchCard && <SearchCard />}
          </div>
        </div>
      </div>
  )
}

export default HeroSecondary