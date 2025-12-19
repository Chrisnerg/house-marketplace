import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";

const Contents = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <div>
            <p className="font-semibold">Available Properties</p>
            <p className="text-sm text-gray-600">6 homes for sale</p>
          </div>
          <div className="px-3">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" className="bg-white text-black">
                  Sort
                  <MdKeyboardArrowDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Sort by:</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Newest</DropdownMenuItem>
                <DropdownMenuItem>Price:Low to High</DropdownMenuItem>
                <DropdownMenuItem>Price:High to Low</DropdownMenuItem>
                <DropdownMenuItem>Most Popular</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="card w-72 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shoes"
            />

            <span class="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>

            <button class="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow">
              ♡
            </button>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-blue-600">R20 million</h2>
            <p className="font-semibold">
              Modern Family House
            </p>
            <div className="flex items-center text-xs text-gray-500">
                <CiLocationOn /> 
                <p>Clifton, Atlantic Seaboard</p>
            </div>
            <div className="card-actions justify-start border-t border-gray-300 mt-3 text-gray-500">
                <div className="flex text-xs my-2">
                    <LuBed />
                    <p className="pl-1">4 Beds</p>
                </div>
                <div className="flex text-xs my-2">
                    <LuBath />
                    <p className="pl-1">3 Baths</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
