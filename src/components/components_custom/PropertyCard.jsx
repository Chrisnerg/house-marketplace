import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";

const PropertyCard = ({property}) => {
  return (
       <div className="card w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
          <figure>
            <img
              src={property.image}
              alt="House"
              className="w-full h-64 object-cover"
            />

            { property.featured && 
                (<span class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    featured
                </span>)
            }
        
            <button className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow">
              ♡
            </button>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-600">{property.price}</h2>
            <p className="font-semibold">
              {property.title}
            </p>
            <div className="flex items-center text-xs text-gray-500">
                <CiLocationOn /> 
                <p>{property.location.city}, {property.location.area}</p>
            </div>
            <div className="card-actions justify-start border-t border-gray-300 mt-3 text-gray-500">
                <div className="flex text-xs my-2">
                    <LuBed />
                    <p className="pl-1">{property.features.bedrooms} Beds</p>
                </div>
                <div className="flex text-xs my-2">
                    <LuBath />
                    <p className="pl-1">{property.features.baths} Baths</p>
                </div>
            </div>
          </div>
        </div>
  )
}

export default PropertyCard