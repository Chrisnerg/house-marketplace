import React, { useContext } from "react";
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
import PropertyCard from "./PropertyCard";
import { propertyContext } from "@/context/propertyContext";

const Contents = () => {
  const { properties, loading, error } = useContext(propertyContext);

  if (error) {
    return <div className="text-red-500 text-center py-24">{error}</div>;
  }

  if (loading) {
    return <div className="text-5xl text-center py-24">Loading...</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto">
        <div className="flex justify-between mb-8">
          <div>
            <p className="font-semibold">Available Properties</p>
            <p className="text-sm text-gray-600">{properties.length} homes for sale</p>
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
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contents;
